from pydantic import BaseModel, Field
from typing import Optional, Dict, Any
from datetime import datetime
import uuid

# Payment Models
class PaymentTransactionCreate(BaseModel):
    amount: float
    currency: str = "usd"
    plan_type: str  # "monthly" or "annual" 
    user_email: str
    session_id: str
    metadata: Optional[Dict[str, Any]] = None

class PaymentTransaction(BaseModel):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    amount: float
    currency: str = "usd"
    plan_type: str
    user_email: str
    session_id: str
    payment_id: Optional[str] = None
    payment_status: str = "initiated"  # initiated, paid, failed, expired
    status: str = "pending"  # pending, completed, failed
    metadata: Optional[Dict[str, Any]] = None
    created_at: datetime = Field(default_factory=datetime.utcnow)
    updated_at: datetime = Field(default_factory=datetime.utcnow)

class CheckoutRequest(BaseModel):
    plan_type: str = Field(..., regex="^(monthly|annual)$")
    user_email: str
    origin_url: str