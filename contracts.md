# JetSet 101 API Contracts & Integration Plan

## Overview
This document outlines the API contracts and integration plan for transitioning from mock data to full backend functionality for the JetSet 101 travel membership website.

## Current Mock Data Status
- All forms are functional with mock handlers
- Mock data includes: memberships, advisor benefits, testimonials, FAQs, founder story
- Success/error messages are working with toast notifications
- Frontend is fully responsive and follows brand guidelines

## API Endpoints to Implement

### 1. Membership Management
**POST /api/memberships**
- Purpose: Handle membership signups
- Mock Handler: `mockHandlers.joinMembership`
- Request Body:
  ```json
  {
    "email": "string",
    "plan": "monthly|annual",
    "personalInfo": {
      "firstName": "string",
      "lastName": "string",
      "phone": "string"
    }
  }
  ```
- Response:
  ```json
  {
    "success": boolean,
    "message": "string",
    "membershipId": "string"
  }
  ```

**GET /api/memberships/benefits**
- Purpose: Get current membership benefits and pricing
- Returns: Dynamic pricing and benefits data

### 2. Travel Advisor Program
**POST /api/advisors/apply**
- Purpose: Handle advisor applications
- Mock Handler: `mockHandlers.becomeAdvisor`
- Request Body:
  ```json
  {
    "email": "string",
    "experience": "string",
    "interests": "array",
    "personalInfo": {
      "firstName": "string",
      "lastName": "string",
      "phone": "string"
    }
  }
  ```

**GET /api/advisors/program-details**
- Purpose: Get advisor program details, commission structure
- Returns: Current commission rates, training info, support details

### 3. Newsletter & Communications
**POST /api/newsletter/subscribe**
- Purpose: Handle newsletter subscriptions
- Mock Handler: `mockHandlers.subscribeNewsletter`
- Request Body:
  ```json
  {
    "email": "string"
  }
  ```

### 4. Contact & Support
**POST /api/contact**
- Purpose: Handle contact form submissions
- Mock Handler: `mockHandlers.contactForm`
- Request Body:
  ```json
  {
    "name": "string",
    "email": "string",
    "subject": "string",
    "message": "string"
  }
  ```

### 5. Content Management
**GET /api/content/testimonials**
- Purpose: Get dynamic testimonials
- Returns: Array of testimonial objects

**GET /api/content/faqs**
- Purpose: Get dynamic FAQ content
- Returns: Array of FAQ objects

**GET /api/content/stats**
- Purpose: Get real-time statistics (members, savings, etc.)
- Returns: Stats object

## Database Models Needed

### 1. Membership Model
```python
class Membership:
    id: str
    email: str
    plan: str  # "monthly" | "annual"
    status: str  # "active" | "cancelled" | "pending"
    created_at: datetime
    personal_info: dict
    referral_code: str
```

### 2. AdvisorApplication Model
```python
class AdvisorApplication:
    id: str
    email: str
    status: str  # "pending" | "approved" | "rejected"
    experience: str
    interests: list
    personal_info: dict
    created_at: datetime
    commission_rate: float  # 0.70 for 70%
```

### 3. NewsletterSubscription Model
```python
class NewsletterSubscription:
    id: str
    email: str
    subscribed: bool
    created_at: datetime
```

### 4. ContactMessage Model
```python
class ContactMessage:
    id: str
    name: str
    email: str
    subject: str
    message: str
    status: str  # "new" | "replied" | "closed"
    created_at: datetime
```

## Frontend Integration Changes

### Files to Update:
1. **Remove mock.js imports** from all components
2. **Update form handlers** to call real API endpoints
3. **Add proper error handling** for API failures
4. **Implement loading states** for better UX

### Components Requiring Integration:
- `HeroSection.jsx` - Membership and advisor signup forms
- `Newsletter.jsx` - Newsletter subscription
- `FAQ.jsx` - Dynamic FAQ content (future enhancement)
- `Testimonials.jsx` - Dynamic testimonials (future enhancement)

## Environment Variables Needed
```env
# Email Service (for notifications)
SMTP_HOST=
SMTP_PORT=
SMTP_USER=
SMTP_PASS=

# Payment Processing (future)
STRIPE_SECRET_KEY=
STRIPE_PUBLISHABLE_KEY=

# Admin Configuration
ADMIN_EMAIL=support@jetset101.com
DEFAULT_COMMISSION_RATE=0.70
```

## Testing Strategy
1. **Unit Tests**: Test each API endpoint individually
2. **Integration Tests**: Test frontend-backend communication
3. **E2E Tests**: Test complete user flows
4. **Form Validation**: Ensure proper error handling and validation

## Implementation Priority
1. **Phase 1**: Core signup flows (membership, advisor applications)
2. **Phase 2**: Newsletter and contact forms
3. **Phase 3**: Dynamic content (testimonials, FAQs)
4. **Phase 4**: Payment integration (Stripe)
5. **Phase 5**: Admin dashboard (future enhancement)

## Success Criteria
- ✅ All forms work without mock data
- ✅ Email notifications are sent successfully
- ✅ Data persists to MongoDB
- ✅ Error handling provides meaningful feedback
- ✅ Loading states enhance user experience
- ✅ All existing functionality remains intact

## Notes
- Current website design and functionality is perfect - maintain all existing features
- Focus on seamless transition from mock to real data
- Preserve all brand guidelines and user experience
- Ensure mobile responsiveness is maintained