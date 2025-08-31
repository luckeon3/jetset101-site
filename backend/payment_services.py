import os
import logging
from motor.motor_asyncio import AsyncIOMotorDatabase
from emergentintegrations.payments.stripe.checkout import StripeCheckout, CheckoutSessionResponse, CheckoutStatusResponse, CheckoutSessionRequest
from payment_models import PaymentTransaction, PaymentTransactionCreate
from typing import Dict, Any
from datetime import datetime

logger = logging.getLogger(__name__)

class PaymentService:
    def __init__(self, db: AsyncIOMotorDatabase):
        self.db = db
        self.collection = db.payment_transactions
        self.stripe_api_key = os.environ.get('STRIPE_API_KEY')
        
        # Predefined membership packages - NEVER accept amounts from frontend
        self.MEMBERSHIP_PACKAGES = {
            "monthly": {"amount": 99.0, "currency": "usd", "description": "Monthly Membership"},
            "annual": {"amount": 1000.0, "currency": "usd", "description": "Annual Membership - Best Value"}
        }
    
    def get_stripe_checkout(self, host_url: str) -> StripeCheckout:
        """Initialize Stripe checkout with webhook URL"""
        webhook_url = f"{host_url}api/webhook/stripe"
        return StripeCheckout(api_key=self.stripe_api_key, webhook_url=webhook_url)
    
    async def create_checkout_session(self, plan_type: str, user_email: str, origin_url: str) -> CheckoutSessionResponse:
        """Create a Stripe checkout session for membership payment"""
        try:
            # Validate plan type
            if plan_type not in self.MEMBERSHIP_PACKAGES:
                raise ValueError(f"Invalid plan type: {plan_type}")
            
            # Get package details from server-side definition
            package = self.MEMBERSHIP_PACKAGES[plan_type]
            amount = package["amount"]
            currency = package["currency"]
            
            # Initialize Stripe checkout
            stripe_checkout = self.get_stripe_checkout(origin_url)
            
            # Build success and cancel URLs
            success_url = f"{origin_url}/payment-success?session_id={{CHECKOUT_SESSION_ID}}"
            cancel_url = f"{origin_url}/#membership"
            
            # Create metadata
            metadata = {
                "plan_type": plan_type,
                "user_email": user_email,
                "source": "jetset101_membership"
            }
            
            # Create checkout session request
            checkout_request = CheckoutSessionRequest(
                amount=amount,
                currency=currency,
                success_url=success_url,
                cancel_url=cancel_url,
                metadata=metadata
            )
            
            # Create Stripe checkout session
            session = await stripe_checkout.create_checkout_session(checkout_request)
            
            # Create payment transaction record BEFORE redirecting
            payment_transaction = PaymentTransactionCreate(
                amount=amount,
                currency=currency,
                plan_type=plan_type,
                user_email=user_email,
                session_id=session.session_id,
                metadata=metadata
            )
            
            await self.create_payment_transaction(payment_transaction)
            
            logger.info(f"Created checkout session for {user_email} - {plan_type}: {session.session_id}")
            return session
            
        except Exception as e:
            logger.error(f"Error creating checkout session: {str(e)}")
            raise e
    
    async def create_payment_transaction(self, transaction_data: PaymentTransactionCreate) -> PaymentTransaction:
        """Create a payment transaction record"""
        try:
            transaction = PaymentTransaction(
                amount=transaction_data.amount,
                currency=transaction_data.currency,
                plan_type=transaction_data.plan_type,
                user_email=transaction_data.user_email,
                session_id=transaction_data.session_id,
                metadata=transaction_data.metadata,
                payment_status="initiated",
                status="pending"
            )
            
            await self.collection.insert_one(transaction.dict())
            logger.info(f"Created payment transaction: {transaction.id}")
            return transaction
            
        except Exception as e:
            logger.error(f"Error creating payment transaction: {str(e)}")
            raise e
    
    async def get_checkout_status(self, session_id: str, origin_url: str) -> Dict[str, Any]:
        """Get checkout session status and update payment transaction"""
        try:
            # Get Stripe checkout status
            stripe_checkout = self.get_stripe_checkout(origin_url)
            checkout_status: CheckoutStatusResponse = await stripe_checkout.get_checkout_status(session_id)
            
            # Find payment transaction
            transaction = await self.collection.find_one({"session_id": session_id})
            if not transaction:
                raise ValueError(f"Payment transaction not found for session: {session_id}")
            
            # Update transaction status only if not already processed
            should_update = (
                transaction["payment_status"] != checkout_status.payment_status or
                transaction["status"] != checkout_status.status
            )
            
            if should_update:
                update_data = {
                    "payment_status": checkout_status.payment_status,
                    "status": checkout_status.status,
                    "updated_at": datetime.utcnow()
                }
                
                await self.collection.update_one(
                    {"session_id": session_id},
                    {"$set": update_data}
                )
                
                logger.info(f"Updated payment transaction {session_id}: {checkout_status.payment_status}")
                
                # If payment is successful and not already processed, activate membership
                if checkout_status.payment_status == "paid" and transaction["payment_status"] != "paid":
                    await self.activate_membership(transaction["user_email"], transaction["plan_type"])
            
            return {
                "session_id": session_id,
                "status": checkout_status.status,
                "payment_status": checkout_status.payment_status,
                "amount_total": checkout_status.amount_total,
                "currency": checkout_status.currency,
                "plan_type": transaction["plan_type"],
                "user_email": transaction["user_email"]
            }
            
        except Exception as e:
            logger.error(f"Error getting checkout status: {str(e)}")
            raise e
    
    async def activate_membership(self, user_email: str, plan_type: str):
        """Activate membership after successful payment"""
        try:
            # Update or create membership record
            membership_data = {
                "email": user_email,
                "plan": plan_type,
                "status": "active",
                "payment_confirmed": True,
                "activated_at": datetime.utcnow()
            }
            
            await self.db.memberships.update_one(
                {"email": user_email},
                {"$set": membership_data},
                upsert=True
            )
            
            logger.info(f"Activated {plan_type} membership for {user_email}")
            
        except Exception as e:
            logger.error(f"Error activating membership: {str(e)}")
            raise e
    
    async def handle_webhook(self, webhook_body: bytes, stripe_signature: str, origin_url: str) -> Dict[str, Any]:
        """Handle Stripe webhook events"""
        try:
            stripe_checkout = self.get_stripe_checkout(origin_url)
            webhook_response = await stripe_checkout.handle_webhook(webhook_body, stripe_signature)
            
            # Process webhook event
            if webhook_response.event_type == "checkout.session.completed":
                session_id = webhook_response.session_id
                await self.get_checkout_status(session_id, origin_url)
                
            logger.info(f"Processed webhook: {webhook_response.event_type} for session {webhook_response.session_id}")
            return {"status": "success", "event_processed": webhook_response.event_type}
            
        except Exception as e:
            logger.error(f"Error handling webhook: {str(e)}")
            raise e