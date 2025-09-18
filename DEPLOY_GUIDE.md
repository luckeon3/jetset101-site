# JetSet101 Deployment Guide

## Quick Deploy Commands

### 1. Build the site locally:
cd frontend
npm install
npm run build

### 2. Deploy to GitHub Pages:
npm install -g gh-pages
npx gh-pages -d build

### 3. Alternative - Push to gh-pages branch:
git checkout -b gh-pages
git add -A
git commit -m 'Deploy website'
git push origin gh-pages

## Your site will be live at:
https://luckeon3.github.io/jetset101-site

## Files updated with real photos:
✅ Christina Perez - African American female travel advisor
✅ Diana Hernandez - Hispanic female member
✅ Donovan Brown - Male travel advisor  
✅ Brandon Torres - African American founder with glasses

## Features working:
✅ Symmetrical hero layout with email forms
✅ Dropdown menus for pricing/consultation
✅ 99 annual registration + 9/month pricing
✅ All Calendly integrations functional
✅ Real photos integrated properly

Ready for production! 🎉
