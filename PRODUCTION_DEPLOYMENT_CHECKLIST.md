# ✅ Production Deployment Checklist for Westprint

## 📧 Email Configuration - PRODUCTION READY

### Current Settings (Live)
- ✅ **Recipients:** `estimating@westprint.com` AND `rcarandang@advantageinc.com`
- ✅ **Sender:** `Westprint Website <onboarding@resend.dev>`
- ✅ **Reply-To:** Customer's email address
- ✅ **HTML Templates:** Professional teal/cyan branded emails
- ✅ **Forms Fixed:** Reset error resolved in all forms

### Email Delivery
Both recipients will receive:
- All quote requests from homepage hero form
- All quote requests from contact page form
- Emails arrive simultaneously to both addresses
- Reply-to automatically set to customer's email

---

## 🧪 Pre-Deployment Testing

### Test Forms Locally First
```bash
# Make sure dev server is running
npm run dev

# Open testing dashboard
http://localhost:5173/?page=test-forms
```

### Run These Tests:
1. ✅ **Test Hero Form** - Click button in dashboard
2. ✅ **Test Contact Form** - Click button in dashboard
3. ✅ **Check both inboxes:**
   - estimating@westprint.com
   - rcarandang@advantageinc.com
4. ✅ **Verify email formatting** - Should look professional
5. ✅ **Test actual forms** - Fill out forms on homepage and contact page
6. ✅ **Test mobile** - Check responsive design

---

## 🚀 Deploy to Netlify

### Step 1: Build the Project
```bash
# Install dependencies if needed
npm install

# Build for production
npm run build

# Verify build succeeded - check /dist folder
```

### Step 2: Deploy via Netlify Dashboard

#### Option A: GitHub Integration (Recommended)
1. Push your code to GitHub repository
2. Login to [netlify.com](https://netlify.com)
3. Click "Add new site" → "Import an existing project"
4. Connect to GitHub and select your repository
5. Build settings:
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
6. Click "Deploy site"

#### Option B: Manual Deploy
1. Login to [netlify.com](https://netlify.com)
2. Drag and drop the `/dist` folder to Netlify
3. Site will be deployed instantly

#### Option C: Netlify CLI
```bash
# Install Netlify CLI
npm install -g netlify-cli

# Login
netlify login

# Deploy
netlify deploy --prod
```

### Step 3: Configure Custom Domain
1. In Netlify dashboard, go to "Domain settings"
2. Add custom domain: `westprint.com`
3. Configure DNS:
   - Add A record pointing to Netlify's IP
   - Or add CNAME record (www) pointing to your-site.netlify.app
4. Enable HTTPS (automatic with Netlify)
5. Wait for DNS propagation (up to 24 hours)

---

## ✅ Post-Deployment Testing

### Immediately After Deploy:

1. **Test Forms Live**
   ```
   https://westprint.com/?page=test-forms
   ```

2. **Run Both Tests:**
   - Click "Test Hero Form"
   - Click "Test Contact Form"

3. **Verify Emails Arrive:**
   - Check estimating@westprint.com inbox
   - Check rcarandang@advantageinc.com inbox
   - Both should receive test emails

4. **Test Actual Forms:**
   - Fill out homepage hero form
   - Fill out contact page form
   - Verify emails arrive at both addresses

5. **Test on Devices:**
   - Desktop browser
   - Mobile phone (iOS)
   - Mobile phone (Android)
   - Tablet

6. **Test All Pages:**
   - ✅ Homepage
   - ✅ Services page
   - ✅ Industries page
   - ✅ About page
   - ✅ Contact page

---

## 🔍 Monitoring & Verification

### Check Email Delivery
1. **Resend Dashboard:** https://resend.com/emails
   - View all sent emails
   - Check delivery status
   - Monitor bounce/spam rates

2. **Email Testing:**
   - Send test from homepage form
   - Send test from contact form
   - Verify both recipients get emails within 1-2 minutes

3. **Spam Folder Check:**
   - Check spam/junk folders initially
   - Mark as "Not Spam" if needed
   - Future emails should arrive in inbox

### Browser Console Checks
Press F12 in browser and check:
- ✅ No JavaScript errors
- ✅ Forms submit successfully
- ✅ Toast notifications appear
- ✅ Network tab shows 200 OK responses

---

## 📊 Success Criteria

Your deployment is successful when:
- ✅ Site loads at westprint.com
- ✅ All pages navigate correctly
- ✅ Hero form submits and sends emails
- ✅ Contact form submits and sends emails
- ✅ **Both** recipients receive all emails
- ✅ Toast notifications show success/error
- ✅ Forms reset after successful submission
- ✅ Mobile responsive design works
- ✅ Images load correctly
- ✅ No console errors

---

## 🐛 Troubleshooting

### Forms Not Sending
1. Check browser console for errors
2. Verify Supabase Edge Function is running
3. Check RESEND_API_KEY is set in Supabase
4. Test API endpoint directly: `https://hdcqpvezfqfrieuvtdkv.supabase.co/functions/v1/make-server-a887b54b/health`

### Emails Not Arriving
1. Check spam folders in both inboxes
2. Verify email addresses are correct in server code
3. Check Resend dashboard for delivery logs
4. Wait 2-5 minutes (some servers delay)
5. Verify API key is valid in Resend dashboard

### Site Not Loading
1. Check Netlify deploy logs
2. Verify build completed successfully
3. Check DNS settings if using custom domain
4. Wait for DNS propagation (up to 24 hours)

---

## 🔐 Security Checklist

- ✅ API keys stored server-side only (Supabase)
- ✅ CORS configured properly
- ✅ Form validation in place
- ✅ No sensitive data in frontend code
- ✅ HTTPS enabled (automatic with Netlify)
- ✅ Environment variables secure

---

## 📞 Contact Information on Site

Verify these are correct:
- **Phone:** (949) 749-4024
- **Email Display:** estimating@westprint.com
- **Address:** Anaheim, Southern California
- **Business Hours:** Mon-Fri 8AM-5PM

---

## 🎯 Next Steps After Successful Deploy

1. **Monitor Emails:**
   - Check both inboxes daily
   - Respond to quote requests promptly
   - Mark Westprint emails as safe/not spam

2. **Analytics (Optional):**
   - Add Google Analytics
   - Monitor form submission rates
   - Track page views

3. **SEO (Optional):**
   - Submit sitemap to Google
   - Add meta descriptions
   - Optimize page titles

4. **Future Improvements:**
   - Custom domain email (noreply@westprint.com)
   - Email verification/SPF records
   - Form spam protection (reCAPTCHA)
   - Thank you page after submission

---

## 📝 Files Modified for Production

### Server-side:
- `/supabase/functions/server/index.tsx` - Email recipients updated

### Testing:
- `/src/components/FormTestingDashboard.tsx` - Display updated recipients
- `/RESEND_TESTING_GUIDE.md` - Documentation updated

### Forms (already working):
- `/src/App.tsx` - Hero form with reset fix
- `/App.tsx` - Root App with reset fix
- `/src/components/ContactPage.tsx` - Contact form with reset fix
- `/components/ContactPage.tsx` - Root Contact with reset fix

---

## 🎉 You're Ready to Deploy!

Everything is configured for production. Just run:
```bash
npm run build
```

Then deploy to Netlify and test the forms!

**Both estimating@westprint.com and rcarandang@advantageinc.com will receive all quote requests.**
