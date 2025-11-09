# 🚀 Deployment Guide - Westprint Website

Complete guide for deploying the Westprint website to Netlify and GitHub.

## ✅ Pre-Deployment Checklist

### 1. Verify Code is Ready
- [x] Forms tested and working
- [x] Email recipients configured (estimating@westprint.com, rcarandang@advantageinc.com)
- [x] All pages responsive
- [x] No console errors
- [x] Build completes successfully

### 2. Test Locally First

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Test forms
http://localhost:5173/?page=test-forms

# Build for production
npm run build

# Preview production build
npm run preview
```

### 3. Verify Build Output
- Check `/dist` folder was created
- Verify no build errors
- Test preview site works correctly

---

## 📦 GitHub Setup

### Step 1: Create GitHub Repository

1. **Go to GitHub** (github.com)
2. **Click "New Repository"**
3. **Repository Settings:**
   - Name: `westprint-website`
   - Description: `Professional printing company website`
   - Visibility: Private (recommended) or Public
   - Don't initialize with README (we already have one)

### Step 2: Push Code to GitHub

```bash
# Initialize git repository (if not already done)
git init

# Add all files
git add .

# Commit changes
git commit -m "Initial commit - Westprint website ready for deployment"

# Add GitHub remote (replace YOUR-USERNAME with your GitHub username)
git remote add origin https://github.com/YOUR-USERNAME/westprint-website.git

# Push to GitHub
git branch -M main
git push -u origin main
```

### Step 3: Verify Upload

1. Go to your GitHub repository
2. Verify all files are uploaded
3. Check that sensitive files are NOT uploaded (they should be in .gitignore):
   - `node_modules/`
   - `.env` files
   - `dist/` folder

---

## 🌐 Netlify Deployment

### Method 1: GitHub Integration (Recommended)

#### Step 1: Connect to Netlify

1. **Login to Netlify**: https://app.netlify.com
2. **Click "Add new site"** → **"Import an existing project"**
3. **Choose GitHub** as your Git provider
4. **Authorize Netlify** to access your GitHub account
5. **Select Repository**: Choose `westprint-website`

#### Step 2: Configure Build Settings

Netlify should auto-detect settings, but verify:

```
Build command: npm run build
Publish directory: dist
Node version: 20.11.1
```

**Advanced build settings:**
- No environment variables needed (API keys are in Supabase)

#### Step 3: Deploy

1. **Click "Deploy site"**
2. **Wait for build** (2-3 minutes)
3. **Verify deployment** succeeded (green checkmark)

#### Step 4: Get Your Site URL

Netlify will assign a random URL like:
```
https://random-name-123456.netlify.app
```

### Method 2: Netlify CLI

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Login to Netlify
netlify login

# Initialize Netlify site
netlify init

# Deploy to production
netlify deploy --prod
```

### Method 3: Drag & Drop

1. Run `npm run build` locally
2. Go to https://app.netlify.com/drop
3. Drag the `/dist` folder to the upload area
4. Site deploys instantly

---

## 🌍 Custom Domain Setup

### Step 1: Add Custom Domain in Netlify

1. **In Netlify Dashboard**, go to your site
2. **Click "Domain settings"**
3. **Click "Add custom domain"**
4. **Enter domain**: `westprint.com`
5. **Click "Verify"**

### Step 2: Configure DNS

#### Option A: Using Netlify DNS (Recommended)

1. **Netlify will show nameservers** like:
   ```
   dns1.p01.nsone.net
   dns2.p01.nsone.net
   dns3.p01.nsone.net
   dns4.p01.nsone.net
   ```

2. **Go to your domain registrar** (where you bought westprint.com)

3. **Update nameservers** to Netlify's nameservers

4. **Wait for propagation** (up to 24 hours, usually 1-2 hours)

#### Option B: Using External DNS

Add these records to your DNS provider:

**For root domain (westprint.com):**
```
Type: A
Name: @
Value: 75.2.60.5 (Netlify's load balancer)
```

**For www subdomain:**
```
Type: CNAME
Name: www
Value: your-site-name.netlify.app
```

### Step 3: Enable HTTPS

1. **Netlify enables HTTPS automatically** with Let's Encrypt
2. **Wait for SSL certificate** (a few minutes)
3. **Force HTTPS** in Netlify settings (recommended)

### Step 4: Verify Domain Works

Test these URLs:
- http://westprint.com → Should redirect to https://westprint.com
- https://westprint.com → Should load site
- https://www.westprint.com → Should load site

---

## 🧪 Post-Deployment Testing

### Immediate Tests

1. **Test Form Functionality**
   ```
   https://westprint.com/?page=test-forms
   ```
   - Click "Test Hero Form"
   - Click "Test Contact Form"
   - Verify success messages

2. **Check Email Delivery**
   - Check estimating@westprint.com inbox
   - Check rcarandang@advantageinc.com inbox
   - Check spam folders if emails don't arrive
   - Allow 1-2 minutes for delivery

3. **Test All Pages**
   - Homepage: https://westprint.com
   - Services: https://westprint.com/?page=services
   - Industries: https://westprint.com/?page=industries
   - About: https://westprint.com/?page=about
   - Contact: https://westprint.com/?page=contact

4. **Test Forms on Live Site**
   - Fill out homepage hero form
   - Fill out contact page form
   - Verify emails arrive

5. **Test on Multiple Devices**
   - Desktop browser
   - Mobile phone (iOS)
   - Mobile phone (Android)
   - Tablet
   - Different browsers (Chrome, Firefox, Safari, Edge)

### Browser Console Check

Press F12 in browser and verify:
- No JavaScript errors
- No failed network requests
- Forms submit successfully (200 OK status)

---

## 🔄 Continuous Deployment

### Automatic Deploys

Once GitHub is connected to Netlify:

1. **Push changes to GitHub:**
   ```bash
   git add .
   git commit -m "Update content"
   git push
   ```

2. **Netlify automatically:**
   - Detects the push
   - Builds the site
   - Deploys if build succeeds
   - Notifies you via email

3. **View Deploy Status:**
   - Check Netlify dashboard
   - See build logs
   - Get notified of success/failure

### Deploy Previews

Netlify creates preview deploys for:
- Pull requests
- Branch deploys
- Deploy previews (before going live)

---

## 🐛 Troubleshooting

### Build Fails on Netlify

1. **Check Build Log** in Netlify dashboard
2. **Common Issues:**
   - Missing dependencies → Run `npm install` locally first
   - TypeScript errors → Run `npm run lint` to check
   - Node version mismatch → Verify Node 20.11.1 in netlify.toml

### Forms Not Working

1. **Check Browser Console** for errors
2. **Verify API Endpoint** is accessible:
   ```
   https://hdcqpvezfqfrieuvtdkv.supabase.co/functions/v1/make-server-a887b54b/health
   ```
3. **Check Resend API Key** in Supabase dashboard
4. **Test forms locally** first

### Emails Not Arriving

1. **Check spam folders** in both email accounts
2. **Verify email addresses** are correct in server code
3. **Check Resend Dashboard**: https://resend.com/emails
4. **Wait 2-5 minutes** for email delivery
5. **Mark as "Not Spam"** if in spam folder

### Domain Not Working

1. **Check DNS propagation**: https://dnschecker.org
2. **Verify nameservers** at your domain registrar
3. **Wait up to 24 hours** for full propagation
4. **Clear browser cache** and try again

### Site Shows Old Version

1. **Hard refresh**: Ctrl+Shift+R (Windows) or Cmd+Shift+R (Mac)
2. **Clear browser cache**
3. **Check Netlify deploy status** (may still be building)
4. **Verify correct branch** is deployed

---

## 📊 Monitoring

### Check Site Health

- **Uptime**: Netlify automatically monitors
- **Analytics**: View in Netlify dashboard
- **Form Submissions**: Check email inbox
- **Error Tracking**: Check Netlify logs

### Email Delivery Monitoring

1. **Resend Dashboard**: https://resend.com
   - View all sent emails
   - Check delivery status
   - Monitor bounce rates

2. **Test Regularly**:
   - Use testing dashboard weekly
   - Verify forms still work
   - Check both recipients receive emails

---

## 🔐 Security

### Checklist

- [x] API keys stored in Supabase (not in frontend)
- [x] HTTPS enabled (automatic with Netlify)
- [x] Security headers configured (in netlify.toml)
- [x] CORS properly configured
- [x] Form validation in place
- [x] .gitignore prevents sensitive files from being uploaded

---

## 📈 Performance

### Netlify Optimizations

- **CDN**: Global content delivery
- **Cache**: Static assets cached
- **Compression**: Automatic gzip/brotli
- **Image Optimization**: Automatic (if using Netlify Image CDN)

### Check Performance

- **Google PageSpeed Insights**: https://pagespeed.web.dev
- **Netlify Analytics**: Built-in performance metrics

---

## 🎉 Success Criteria

Your deployment is successful when:

- ✅ Site loads at westprint.com
- ✅ HTTPS is enabled and working
- ✅ All pages navigate correctly
- ✅ Hero form submits and sends emails
- ✅ Contact form submits and sends emails
- ✅ Both recipients receive emails
- ✅ Mobile responsive design works
- ✅ No console errors
- ✅ Images load correctly
- ✅ Fast load times (< 3 seconds)

---

## 📞 Support

### Netlify Support
- Documentation: https://docs.netlify.com
- Community: https://answers.netlify.com
- Status: https://netlifystatus.com

### Resend Support
- Documentation: https://resend.com/docs
- Dashboard: https://resend.com/emails
- Support: support@resend.com

---

## 🚀 You're Ready to Deploy!

Follow the steps in order:
1. Test locally → 2. Push to GitHub → 3. Deploy to Netlify → 4. Test live site

The entire process takes about 15-30 minutes for first-time setup.

**Good luck! 🎉**
