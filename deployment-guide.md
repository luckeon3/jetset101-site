# JetSet 101 Deployment Guide for Vercel

## Overview
Your JetSet 101 website is a full-stack application with:
- **Frontend**: React app with payment integration
- **Backend**: FastAPI with Stripe payments and MongoDB
- **Database**: MongoDB (needs external hosting)

## Deployment Strategy

### Option 1: Split Deployment (Recommended)

#### Frontend Deployment (Vercel)
1. **Deploy Frontend to Vercel**:
   ```bash
   cd frontend
   vercel --prod
   ```

2. **Set Environment Variables in Vercel Dashboard**:
   - `REACT_APP_BACKEND_URL`: Your backend URL (from step 2)

#### Backend Deployment (Vercel Functions)
1. **Deploy Backend to Vercel**:
   ```bash
   cd backend
   vercel --prod
   ```

2. **Set Environment Variables in Vercel Dashboard**:
   - `MONGO_URL`: Your MongoDB connection string
   - `DB_NAME`: Your database name
   - `STRIPE_API_KEY`: Your Stripe API key

#### Database (MongoDB Atlas)
1. **Create MongoDB Atlas Account**: https://cloud.mongodb.com
2. **Create Free Cluster**
3. **Get Connection String**
4. **Update backend MONGO_URL environment variable**

### Option 2: Frontend-Only Deployment

If you want to deploy just the frontend for now:

1. **Modify API calls to use external backend**:
   - Update `REACT_APP_BACKEND_URL` in `.env.production`
   - Point to your existing backend URL

2. **Deploy Frontend**:
   ```bash
   cd frontend
   vercel --prod
   ```

## Pre-Deployment Checklist

### ✅ Files Created for Deployment:
- `vercel.json` - Main deployment configuration
- `backend/vercel.json` - Backend-specific config
- `requirements.txt` - Python dependencies
- `frontend/.env.production` - Production environment variables
- `frontend/public/_redirects` - Redirect rules

### ✅ Required Environment Variables:

#### Frontend (.env.production):
- `REACT_APP_BACKEND_URL` - Backend API URL

#### Backend (Vercel Dashboard):
- `MONGO_URL` - MongoDB connection string
- `DB_NAME` - Database name  
- `STRIPE_API_KEY` - Stripe secret key

### ✅ Features Ready for Deployment:
- React frontend with all components
- Stripe payment integration
- FastAPI backend with all endpoints
- Payment webhook handling
- Email notifications
- Database models and services

## Deployment Steps

### Step 1: Deploy Backend First
```bash
cd backend
vercel login
vercel --prod
```

### Step 2: Update Frontend Environment
Update `frontend/.env.production` with your backend URL from Step 1.

### Step 3: Deploy Frontend
```bash
cd frontend
vercel --prod
```

### Step 4: Configure Database
1. Set up MongoDB Atlas
2. Update backend environment variables in Vercel dashboard
3. Test connection

## Post-Deployment Testing

1. **Test Website Loading**
2. **Test Payment Flow**:
   - Monthly subscription ($99)
   - Annual subscription ($1000)
3. **Test Forms**:
   - Newsletter signup
   - Advisor applications
4. **Test API Endpoints**
5. **Verify Stripe Webhooks**

## Common Issues and Solutions

### Issue: API Calls Failing
- **Solution**: Check CORS settings in backend
- **Solution**: Verify `REACT_APP_BACKEND_URL` is correct

### Issue: Payment Integration Not Working  
- **Solution**: Verify Stripe environment variables
- **Solution**: Check webhook URL configuration

### Issue: Database Connection Failed
- **Solution**: Verify MongoDB Atlas connection string
- **Solution**: Check network access settings in Atlas

## Support
- Vercel Documentation: https://vercel.com/docs
- MongoDB Atlas: https://docs.atlas.mongodb.com
- Stripe Integration: https://stripe.com/docs

## Your Site Structure
```
/app/
├── frontend/           # React app
├── backend/           # FastAPI server  
├── vercel.json        # Deployment config
├── requirements.txt   # Python deps
└── deployment-guide.md # This file
```

Ready to deploy! 🚀