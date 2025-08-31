from fastapi import FastAPI, APIRouter, HTTPException, Request
from fastapi.middleware.cors import CORSMiddleware
from dotenv import load_dotenv
from motor.motor_asyncio import AsyncIOMotorClient
import os
import logging
from pathlib import Path
from models import *
from services import *
from payment_models import *
from payment_services import PaymentService

ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

# MongoDB connection
mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]

# Create the main app without a prefix
app = FastAPI(title="JetSet 101 API", description="Professional Travel Access Platform")

# Create a router with the /api prefix
api_router = APIRouter(prefix="/api")

# Initialize services
membership_service = MembershipService(db)
advisor_service = AdvisorService(db)
newsletter_service = NewsletterService(db)
contact_service = ContactService(db)
content_service = ContentService(db)
payment_service = PaymentService(db)

# Health check endpoint
@api_router.get("/")
async def root():
    return {"message": "JetSet 101 API is running!", "status": "healthy"}

# Membership endpoints
@api_router.post("/memberships", response_model=APIResponse)
async def create_membership(membership_data: MembershipCreate):
    """Create a new membership"""
    return await membership_service.create_membership(membership_data)

@api_router.get("/memberships/benefits")
async def get_membership_benefits():
    """Get membership benefits and pricing"""
    return {
        "plans": {
            "monthly": {
                "price": 99,
                "period": "month",
                "commitment": "3-month initial commitment",
                "savings": "Start earning immediately"
            },
            "annual": {
                "price": 1000,
                "period": "year", 
                "commitment": "Best Value - Save $188",
                "savings": "Lock in professional pricing"
            }
        },
        "benefits": [
            {
                "title": "Up to 75% Off Flights",
                "description": "Access exclusive flight deals and save thousands on your next adventure",
                "savings": "Save up to $2,000 per trip"
            },
            {
                "title": "40-70% Off Hotels",
                "description": "Luxury accommodations at top brands with incredible member discounts",
                "savings": "Save $200-500 per night"
            },
            {
                "title": "Cruises from $50/day",
                "description": "Sail the world's most beautiful destinations at unbeatable prices",
                "savings": "Save $150-300 per day"
            },
            {
                "title": "Exclusive Community",
                "description": "Connect with fellow travelers and get insider tips from our community",
                "savings": "Priceless networking"
            }
        ]
    }

# Payment endpoints
@api_router.post("/payments/checkout/session")
async def create_checkout_session(checkout_data: CheckoutRequest, request: Request):
    """Create Stripe checkout session for membership payment"""
    try:
        # Get origin URL from request
        origin_url = str(request.base_url).rstrip('/')
        
        session = await payment_service.create_checkout_session(
            plan_type=checkout_data.plan_type,
            user_email=checkout_data.user_email,
            origin_url=origin_url
        )
        
        return {
            "success": True,
            "checkout_url": session.url,
            "session_id": session.session_id
        }
        
    except ValueError as e:
        raise HTTPException(status_code=400, detail=str(e))
    except Exception as e:
        logger.error(f"Error creating checkout session: {str(e)}")
        raise HTTPException(status_code=500, detail="Failed to create checkout session")

@api_router.get("/payments/checkout/status/{session_id}")
async def get_checkout_status(session_id: str, request: Request):
    """Get payment status for a checkout session"""
    try:
        origin_url = str(request.base_url).rstrip('/')
        status = await payment_service.get_checkout_status(session_id, origin_url)
        return status
        
    except ValueError as e:
        raise HTTPException(status_code=404, detail=str(e))
    except Exception as e:
        logger.error(f"Error getting checkout status: {str(e)}")
        raise HTTPException(status_code=500, detail="Failed to get payment status")

@api_router.post("/webhook/stripe")
async def stripe_webhook(request: Request):
    """Handle Stripe webhook events"""
    try:
        webhook_body = await request.body()
        stripe_signature = request.headers.get("Stripe-Signature")
        origin_url = str(request.base_url).rstrip('/')
        
        result = await payment_service.handle_webhook(webhook_body, stripe_signature, origin_url)
        return result
        
    except Exception as e:
        logger.error(f"Error handling Stripe webhook: {str(e)}")
        raise HTTPException(status_code=400, detail="Webhook processing failed")

# Advisor endpoints
@api_router.post("/advisors/apply", response_model=APIResponse)
async def apply_advisor(application_data: AdvisorApplicationCreate):
    """Submit advisor application"""
    return await advisor_service.create_advisor_application(application_data)

@api_router.get("/advisors/program-details")
async def get_advisor_program_details():
    """Get advisor program details"""
    return {
        "commission_rate": 0.70,
        "commission_display": "70%",
        "benefits": [
            {
                "title": "70% Commission Split",
                "description": "Keep 70% of all commissions you generate - industry-leading rates",
                "earning": "Earn $1,000-5,000+ monthly"
            },
            {
                "title": "Complete Training Program", 
                "description": "Structured certification covering booking, marketing, and business ops",
                "earning": "Professional certification"
            },
            {
                "title": "Full Support System",
                "description": "Marketing tools, booking platforms, and dedicated mentor support",
                "earning": "Always supported"
            },
            {
                "title": "Supplier Networks",
                "description": "Access exclusive partnerships with VIP perks and enhanced commissions",
                "earning": "Premium access"
            }
        ],
        "training_modules": [
            "Industry terminology and booking procedures",
            "Business operations and client management", 
            "Marketing strategies and social media",
            "Niche travel specializations (cruises, groups)",
            "Travel insurance and destination management",
            "Real-time mentorship and community support"
        ]
    }

# Newsletter endpoint
@api_router.post("/newsletter/subscribe", response_model=APIResponse)
async def subscribe_newsletter(subscription_data: NewsletterSubscriptionCreate):
    """Subscribe to newsletter"""
    return await newsletter_service.subscribe_newsletter(subscription_data)

# Contact endpoint
@api_router.post("/contact", response_model=APIResponse)
async def create_contact_message(message_data: ContactMessageCreate):
    """Submit contact form"""
    return await contact_service.create_contact_message(message_data)

# Content endpoints
@api_router.get("/content/stats")
async def get_stats():
    """Get platform statistics"""
    stats = await content_service.get_stats()
    return {
        "stats": [
            {"number": f"{stats.active_members:,}+", "label": "Active Members"},
            {"number": stats.avg_savings, "label": "Max Flight Savings"},
            {"number": stats.advisor_earnings, "label": "Advisor Commission"},
            {"number": stats.total_savings, "label": "Member Savings"}
        ]
    }

@api_router.get("/content/testimonials")
async def get_testimonials():
    """Get testimonials"""
    # For now, return static testimonials (can be made dynamic later)
    return {
        "testimonials": [
            {
                "name": "Sarah Johnson",
                "role": "Travel Advisor",
                "image": "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzR8MHwxfHNlYXJjaHwzfHxwcm9mZXNzaW9uYWx8ZW58MHx8fHwxNzU2NjU0NDc2fDA&ixlib=rb-4.1.0&q=85",
                "testimonial": "JetSet 101 transformed my passion for travel into a thriving business. The 70% commission split and incredible support system helped me earn over $4,000 in my first month!"
            },
            {
                "name": "Michael Chen",
                "role": "JetSet Member",
                "image": "https://images.unsplash.com/photo-1507679799987-c73779587ccf?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzR8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWx8ZW58MHx8fHwxNzU2NjU0NDc2fDA&ixlib=rb-4.1.0&q=85",
                "testimonial": "I saved $1,800 on our family vacation to Europe! The exclusive deals and community support made planning our dream trip so much easier."
            },
            {
                "name": "Lisa Rodriguez", 
                "role": "Travel Advisor",
                "image": "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzR8MHwxfHNlYXJjaHwzfHxwcm9mZXNzaW9uYWx8ZW58MHx8fHwxNzU2NjU0NDc2fDA&ixlib=rb-4.1.0&q=85",
                "testimonial": "The training program gave me everything I needed to succeed. Now I help others travel better while building my own profitable business from anywhere."
            }
        ]
    }

@api_router.get("/content/faqs")
async def get_faqs():
    """Get FAQs"""
    return {
        "faqs": [
            {
                "question": "What is JetSet 101?",
                "answer": "JetSet 101 is an exclusive travel membership community that provides members with instant access to exclusive travel discounts on flights, hotels, and cruises, plus opportunities to earn as a travel advisor."
            },
            {
                "question": "How much can I save on travel?",
                "answer": "Members save up to 75% on flights, 40-70% on hotels at top brands, and enjoy cruises starting at $50 per day, subject to availability."
            },
            {
                "question": "What are the membership options?",
                "answer": "Monthly Membership: $99/month (requires 3-month initial commitment). Annual Membership: $1,000/year (Best Value - Save $188 vs monthly)."
            },
            {
                "question": "How does the travel advisor program work?",
                "answer": "Our travel advisors earn a 70/30 commission split (70% to you) with complete training, marketing support, booking tools, and ongoing mentorship."
            },
            {
                "question": "Is there a refund policy?",
                "answer": "Monthly memberships are non-refundable. Annual memberships can be refunded within 3 days if no discounts have been used."
            },
            {
                "question": "Can I share my membership benefits?",
                "answer": "No, JetSet 101 memberships are for individual use only. Sharing credentials may result in membership termination."
            }
        ]
    }

# Include the router in the main app
app.include_router(api_router)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)

@app.on_event("startup")
async def startup_event():
    logger.info("JetSet 101 API starting up...")

@app.on_event("shutdown")
async def shutdown_db_client():
    client.close()
    logger.info("JetSet 101 API shutting down...")