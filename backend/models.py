from pydantic import BaseModel, Field, EmailStr
from typing import List, Optional, Dict, Any
from datetime import datetime
import uuid

# Base Models
class PersonalInfo(BaseModel):
    firstName: str
    lastName: str
    phone: Optional[str] = None

# Membership Models
class MembershipCreate(BaseModel):
    email: EmailStr
    plan: str = Field(..., regex="^(monthly|annual)$")
    personalInfo: Optional[PersonalInfo] = None

class Membership(BaseModel):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    email: EmailStr
    plan: str
    status: str = "active"
    created_at: datetime = Field(default_factory=datetime.utcnow)
    personal_info: Optional[Dict[str, Any]] = None
    referral_code: Optional[str] = None

# Advisor Models
class AdvisorApplicationCreate(BaseModel):
    email: EmailStr
    experience: Optional[str] = None
    interests: Optional[List[str]] = None
    personalInfo: Optional[PersonalInfo] = None

class AdvisorApplication(BaseModel):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    email: EmailStr
    status: str = "pending"
    experience: Optional[str] = None
    interests: Optional[List[str]] = None
    personal_info: Optional[Dict[str, Any]] = None
    created_at: datetime = Field(default_factory=datetime.utcnow)
    commission_rate: float = 0.70

# Newsletter Models
class NewsletterSubscriptionCreate(BaseModel):
    email: EmailStr

class NewsletterSubscription(BaseModel):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    email: EmailStr
    subscribed: bool = True
    created_at: datetime = Field(default_factory=datetime.utcnow)

# Contact Models
class ContactMessageCreate(BaseModel):
    name: str
    email: EmailStr
    subject: str
    message: str

class ContactMessage(BaseModel):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    name: str
    email: EmailStr
    subject: str
    message: str
    status: str = "new"
    created_at: datetime = Field(default_factory=datetime.utcnow)

# Response Models
class APIResponse(BaseModel):
    success: bool
    message: str
    data: Optional[Dict[str, Any]] = None

# Content Models
class Testimonial(BaseModel):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    name: str
    role: str
    image: str
    testimonial: str
    rating: int = 5
    featured: bool = False

class FAQ(BaseModel):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    question: str
    answer: str
    category: str = "general"
    order: int = 0

class Stats(BaseModel):
    active_members: int
    total_savings: str
    avg_savings: str
    advisor_earnings: str