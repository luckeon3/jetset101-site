# JetSet101.com DNS Configuration Fix

## Current Issue:
- jetset101.com is not pointing to Netlify servers
- SSL certificate cannot be provisioned until DNS is correct

## Solution 1: Update DNS Records at Domain Registrar

### A Records (for apex domain jetset101.com):
Name: @ (or leave blank)
Type: A  
Value: 75.2.60.5

### CNAME Record (for www.jetset101.com):
Name: www
Type: CNAME
Value: your-netlify-site.netlify.app

## Solution 2: Use Netlify DNS (Recommended)

1. In Netlify → Domain Settings → Add Domain
2. Get Netlify nameservers 
3. Update nameservers at your domain registrar
4. Wait 24-48 hours for propagation

## Temporary Solution:
Use your Netlify subdomain while DNS propagates:
https://your-site-name.netlify.app

## Verification:
After DNS changes, use these tools to verify:
- https://www.whatsmydns.net/ (enter jetset101.com)
- nslookup jetset101.com (should show Netlify IP)

## Expected Timeline:
- DNS propagation: 4-48 hours
- SSL certificate: Automatic once DNS is correct
