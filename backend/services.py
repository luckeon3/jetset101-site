from motor.motor_asyncio import AsyncIOMotorDatabase
from models import *
from typing import List, Optional
import logging
from datetime import datetime

logger = logging.getLogger(__name__)

class MembershipService:
    def __init__(self, db: AsyncIOMotorDatabase):
        self.db = db
        self.collection = db.memberships
    
    async def create_membership(self, membership_data: MembershipCreate) -> APIResponse:
        try:
            # Check if email already exists
            existing = await self.collection.find_one({"email": membership_data.email})
            if existing:
                return APIResponse(
                    success=False,
                    message="Email already registered. Please use a different email or contact support."
                )
            
            # Create membership
            membership = Membership(
                email=membership_data.email,
                plan=membership_data.plan,
                personal_info=membership_data.personalInfo.dict() if membership_data.personalInfo else None
            )
            
            await self.collection.insert_one(membership.dict())
            logger.info(f"New membership created: {membership.email} - {membership.plan}")
            
            return APIResponse(
                success=True,
                message="Welcome to JetSet 101! Check your email for next steps.",
                data={"membershipId": membership.id}
            )
            
        except Exception as e:
            logger.error(f"Error creating membership: {str(e)}")
            return APIResponse(
                success=False,
                message="Something went wrong. Please try again."
            )
    
    async def get_membership_stats(self) -> Dict[str, Any]:
        try:
            total_members = await self.collection.count_documents({"status": "active"})
            monthly_members = await self.collection.count_documents({"plan": "monthly", "status": "active"})
            annual_members = await self.collection.count_documents({"plan": "annual", "status": "active"})
            
            return {
                "total_members": total_members,
                "monthly_members": monthly_members,
                "annual_members": annual_members
            }
        except Exception as e:
            logger.error(f"Error getting membership stats: {str(e)}")
            return {"total_members": 0, "monthly_members": 0, "annual_members": 0}

class AdvisorService:
    def __init__(self, db: AsyncIOMotorDatabase):
        self.db = db
        self.collection = db.advisor_applications
    
    async def create_advisor_application(self, application_data: AdvisorApplicationCreate) -> APIResponse:
        try:
            # Check if email already applied
            existing = await self.collection.find_one({"email": application_data.email})
            if existing:
                return APIResponse(
                    success=False,
                    message="You've already submitted an advisor application. We'll be in touch soon!"
                )
            
            # Create advisor application
            application = AdvisorApplication(
                email=application_data.email,
                experience=application_data.experience,
                interests=application_data.interests,
                personal_info=application_data.personalInfo.dict() if application_data.personalInfo else None
            )
            
            await self.collection.insert_one(application.dict())
            logger.info(f"New advisor application: {application.email}")
            
            return APIResponse(
                success=True,
                message="Advisor application submitted! We'll be in touch within 24 hours.",
                data={"applicationId": application.id}
            )
            
        except Exception as e:
            logger.error(f"Error creating advisor application: {str(e)}")
            return APIResponse(
                success=False,
                message="Something went wrong. Please try again."
            )
    
    async def get_advisor_stats(self) -> Dict[str, Any]:
        try:
            total_applications = await self.collection.count_documents({})
            pending_applications = await self.collection.count_documents({"status": "pending"})
            approved_applications = await self.collection.count_documents({"status": "approved"})
            
            return {
                "total_applications": total_applications,
                "pending_applications": pending_applications,
                "approved_applications": approved_applications
            }
        except Exception as e:
            logger.error(f"Error getting advisor stats: {str(e)}")
            return {"total_applications": 0, "pending_applications": 0, "approved_applications": 0}

class NewsletterService:
    def __init__(self, db: AsyncIOMotorDatabase):
        self.db = db
        self.collection = db.newsletter_subscriptions
    
    async def subscribe_newsletter(self, subscription_data: NewsletterSubscriptionCreate) -> APIResponse:
        try:
            # Check if already subscribed
            existing = await self.collection.find_one({"email": subscription_data.email})
            if existing and existing.get("subscribed", False):
                return APIResponse(
                    success=True,
                    message="You're already subscribed to our newsletter!"
                )
            
            # Create or update subscription
            subscription = NewsletterSubscription(email=subscription_data.email)
            
            await self.collection.replace_one(
                {"email": subscription_data.email},
                subscription.dict(),
                upsert=True
            )
            
            logger.info(f"Newsletter subscription: {subscription.email}")
            
            return APIResponse(
                success=True,
                message="Successfully subscribed! Welcome to our travel community."
            )
            
        except Exception as e:
            logger.error(f"Error subscribing to newsletter: {str(e)}")
            return APIResponse(
                success=False,
                message="Something went wrong. Please try again."
            )

class ContactService:
    def __init__(self, db: AsyncIOMotorDatabase):
        self.db = db
        self.collection = db.contact_messages
    
    async def create_contact_message(self, message_data: ContactMessageCreate) -> APIResponse:
        try:
            message = ContactMessage(
                name=message_data.name,
                email=message_data.email,
                subject=message_data.subject,
                message=message_data.message
            )
            
            await self.collection.insert_one(message.dict())
            logger.info(f"New contact message from: {message.email}")
            
            return APIResponse(
                success=True,
                message="Message sent successfully! We'll get back to you within 24 hours."
            )
            
        except Exception as e:
            logger.error(f"Error creating contact message: {str(e)}")
            return APIResponse(
                success=False,
                message="Something went wrong. Please try again."
            )

class ContentService:
    def __init__(self, db: AsyncIOMotorDatabase):
        self.db = db
    
    async def get_stats(self) -> Stats:
        try:
            # Get real stats from database
            memberships = await self.db.memberships.count_documents({"status": "active"})
            advisor_apps = await self.db.advisor_applications.count_documents({"status": "approved"})
            
            # Calculate estimated savings (mock calculation for now)
            estimated_savings = memberships * 2400  # $2400 avg savings per member
            total_savings = f"${estimated_savings:,}+"
            
            return Stats(
                active_members=memberships or 10000,  # Fallback to marketing number
                total_savings=total_savings if estimated_savings > 0 else "$2M+",
                avg_savings="75%",
                advisor_earnings="70%"
            )
            
        except Exception as e:
            logger.error(f"Error getting stats: {str(e)}")
            # Return default marketing stats
            return Stats(
                active_members=10000,
                total_savings="$2M+",
                avg_savings="75%",
                advisor_earnings="70%"
            )