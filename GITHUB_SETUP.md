# GitHub & Netlify Deployment Guide

Complete guide to deploy Westprint website to GitHub and Netlify with custom domain.

## 📋 Prerequisites

- [x] GitHub account
- [x] Netlify account (free tier works)
- [x] Domain: westprint.com
- [x] Node.js 20.11.1 installed locally

## 🚀 Step 1: Push to GitHub

### 1.1 Create GitHub Repository

1. Go to [github.com](https://github.com) and login
2. Click the **"+"** icon → **"New repository"**
3. Configure repository:
   - **Repository name**: `westprint-website`
   - **Description**: "Westprint printing company website"
   - **Visibility**: Private (recommended) or Public
   - **DO NOT** initialize with README (we already have one)
4. Click **"Create repository"**

### 1.2 Initialize and Push Code

Open terminal in your project directory and run:

```bash
# Initialize git repository
git init

# Add all files
git add .

# Create initial commit
git commit -m "Initial commit: Westprint website ready for deployment"

# Add GitHub remote (replace YOUR-USERNAME with your GitHub username)
git remote add origin https://github.com/YOUR-USERNAME/westprint-website.git

# Push to GitHub
git branch -M main
git push -u origin main
```

✅ **Verification**: Visit your GitHub repository URL to confirm all files are uploaded.

## 🌐 Step 2: Deploy to Netlify

### 2.1 Connect GitHub to Netlify

1. Go to [netlify.com](https://netlify.com) and login
2. Click **"Add new site"** → **"Import an existing project"**
3. Choose **"Deploy with GitHub"**
4. Authorize Netlify to access your GitHub account
5. Select the **`westprint-website`** repository

### 2.2 Configure Build Settings

Netlify will auto-detect settings, but verify these values:

```
Build command: npm run build
Publish directory: dist
Node version: 20.11.1
```

**Advanced settings** (if needed):
- No environment variables required for basic deployment
- The Supabase Edge Function URL is already embedded in the code

### 2.3 Deploy

1. Click **"Deploy [site-name]"**
2. Wait 2-3 minutes for initial build
3. You'll get a temporary URL like: `random-name-123456.netlify.app`

✅ **Verification**: Visit the temporary URL to confirm the site works.

## 🌍 Step 3: Configure Custom Domain (westprint.com)

### 3.1 Add Custom Domain in Netlify

1. In Netlify dashboard, go to **"Domain settings"**
2. Click **"Add custom domain"**
3. Enter: `westprint.com`
4. Click **"Verify"**
5. If you own the domain, click **"Add domain"**

### 3.2 Add www Subdomain

1. Click **"Add domain alias"**
2. Enter: `www.westprint.com`
3. Click **"Save"**

### 3.3 Configure DNS Records

Netlify will show you the required DNS records. You need to update these at your domain registrar:

#### Option A: Netlify DNS (Recommended)

1. In Netlify, click **"Set up Netlify DNS"**
2. Copy the 4 nameserver addresses
3. Go to your domain registrar (GoDaddy, Namecheap, etc.)
4. Update nameservers to Netlify's nameservers
5. Wait 24-48 hours for propagation

#### Option B: External DNS

Add these records at your domain registrar:

**For root domain (westprint.com):**
```
Type: A
Name: @
Value: 75.2.60.5
```

**For www subdomain:**
```
Type: CNAME
Name: www
Value: [your-site-name].netlify.app
```

### 3.4 Enable HTTPS

1. After DNS propagates, go to **"Domain settings"** → **"HTTPS"**
2. Netlify will automatically provision SSL certificate
3. Enable **"Force HTTPS"** to redirect all HTTP to HTTPS

✅ **Verification**: Visit `https://westprint.com` and `https://www.westprint.com`

## 📧 Step 4: Verify Email Forms

Test both quote forms to ensure they're working:

### 4.1 Hero Form (Homepage)
1. Visit `https://westprint.com`
2. Fill out the quick quote form
3. Submit and verify success message
4. Check emails at:
   - estimating@westprint.com
   - rcarandang@advantageinc.com

### 4.2 Contact Form (Contact Page)
1. Visit contact page
2. Fill out detailed form
3. Submit and verify success message
4. Check emails again

## 🔄 Step 5: Continuous Deployment Setup

Netlify automatically deploys when you push to GitHub:

```bash
# Make changes to your code
# ...

# Commit changes
git add .
git commit -m "Update: describe your changes"

# Push to GitHub
git push origin main

# Netlify automatically rebuilds and deploys!
```

## 📊 Post-Deployment Checklist

- [ ] Site loads at `https://westprint.com`
- [ ] Site loads at `https://www.westprint.com`
- [ ] HTTPS is working (green padlock in browser)
- [ ] All pages navigate correctly (Home, Services, Industries, About, Contact)
- [ ] Hero quote form submits successfully
- [ ] Contact page form submits successfully
- [ ] Emails arrive at both addresses
- [ ] Mobile responsive design works
- [ ] Images and animations load properly

## 🛠️ Troubleshooting

### Build Fails on Netlify

1. Check build logs in Netlify dashboard
2. Verify Node version: 20.11.1
3. Clear cache and retry deploy

### Domain Not Resolving

1. Check DNS propagation: [dnschecker.org](https://dnschecker.org)
2. Wait 24-48 hours for full propagation
3. Clear browser cache and try again

### Forms Not Sending Emails

1. Check browser console for errors
2. Verify Supabase Edge Function is running
3. Check network tab for failed requests

### SSL Certificate Issues

1. Wait 24 hours after DNS configuration
2. In Netlify, click "Renew certificate"
3. Ensure DNS records are correct

## 🎯 Success Metrics

Once deployed, you should see:

- ✅ Live site at westprint.com
- ✅ Automatic HTTPS redirect
- ✅ Forms sending emails successfully
- ✅ Fast load times (<3 seconds)
- ✅ Mobile responsive design
- ✅ All animations working smoothly

## 📞 Support

**For website issues:**
- Check Netlify build logs
- Review browser console errors
- Contact development team

**For printing services:**
- Call: (949) 749-4024
- Email: estimating@westprint.com

---

**Last Updated**: January 2025  
**Deployment Platform**: Netlify  
**Source Control**: GitHub  
**Domain**: westprint.com
