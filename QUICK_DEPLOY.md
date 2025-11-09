# ⚡ Quick Deploy Guide

## 🎯 Deploy in 5 Minutes

### Step 1: Push to GitHub (2 minutes)

```bash
# Initialize git (if needed)
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit - Westprint website"

# Add remote (replace YOUR-USERNAME)
git remote add origin https://github.com/YOUR-USERNAME/westprint-website.git

# Push to GitHub
git branch -M main
git push -u origin main
```

### Step 2: Deploy to Netlify (3 minutes)

1. **Go to**: https://app.netlify.com
2. **Click**: "Add new site" → "Import an existing project"
3. **Select**: GitHub → Choose `westprint-website` repo
4. **Verify settings**:
   - Build command: `npm run build`
   - Publish directory: `dist`
5. **Click**: "Deploy site"
6. **Wait**: 2-3 minutes for build to complete

### Step 3: Test Forms

```
https://YOUR-SITE.netlify.app/?page=test-forms
```

1. Click "Test Hero Form"
2. Click "Test Contact Form"
3. Check both email inboxes:
   - estimating@westprint.com
   - rcarandang@advantageinc.com

---

## ✅ Done!

Your site is live and forms are working.

### Next Steps (Optional):

1. **Add Custom Domain** (westprint.com)
   - Netlify Dashboard → Domain settings → Add custom domain
   - Update nameservers at your domain registrar
   - Wait for DNS propagation (1-24 hours)

2. **Test on Mobile**
   - Open site on phone
   - Test forms
   - Verify responsive design

---

## 🆘 Quick Troubleshooting

**Build fails?**
→ Run `npm run build` locally first

**Emails not arriving?**
→ Check spam folders, wait 2 minutes

**Site not updating?**
→ Hard refresh: Ctrl+Shift+R

---

## 📖 Full Documentation

- **Complete Guide**: See `/DEPLOYMENT.md`
- **Testing Guide**: See `/RESEND_TESTING_GUIDE.md`
- **Main README**: See `/README.md`
