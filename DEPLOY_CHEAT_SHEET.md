# 📄 Deployment Cheat Sheet - Westprint Website

**One-page quick reference for deploying westprint.com**

---

## ⚡ Quick Deploy (10 Minutes)

### 1️⃣ Push to GitHub (2 min)
```bash
git init
git add .
git commit -m "Initial commit: Westprint website"
git remote add origin https://github.com/YOUR-USERNAME/westprint-website.git
git branch -M main
git push -u origin main
```

### 2️⃣ Deploy to Netlify (3 min)
1. Login to https://app.netlify.com
2. Click "Add new site" → "Import from GitHub"
3. Select `westprint-website` repository
4. Verify: Build = `npm run build`, Publish = `dist`
5. Click "Deploy site"

### 3️⃣ Add Custom Domain (5 min)
1. In Netlify → "Domain settings" → "Add custom domain"
2. Enter: `westprint.com`
3. Add DNS records at your registrar:
   - **A Record**: `@` → `75.2.60.5`
   - **CNAME**: `www` → `[your-site].netlify.app`
4. Enable HTTPS in Netlify
5. Wait 24 hours for DNS propagation

---

## 📋 Pre-Deploy Checklist

```bash
# Verify these work:
npm install          # ✓ No errors
npm run build        # ✓ Builds successfully
npm run dev          # ✓ Site runs on localhost:5173
```

- [ ] GitHub account created
- [ ] Netlify account created
- [ ] Access to westprint.com DNS settings
- [ ] Node.js 20.11.1 installed

---

## 🎯 Configuration Reference

### Build Settings (Netlify)
```
Build command: npm run build
Publish directory: dist
Node version: 20.11.1
```

### DNS Records
```
Type: A
Name: @
Value: 75.2.60.5

Type: CNAME
Name: www
Value: [your-site-name].netlify.app
```

### Email Recipients
- estimating@westprint.com
- rcarandang@advantageinc.com

---

## 🔄 Making Updates Later

```bash
git add .
git commit -m "Description of changes"
git push origin main
# Netlify auto-deploys in 2-3 minutes
```

---

## ✅ Post-Deploy Verification

- [ ] Site loads at .netlify.app URL
- [ ] All 5 pages navigate
- [ ] Hero form submits
- [ ] Contact form submits
- [ ] Emails received at both addresses
- [ ] westprint.com resolves (after DNS)
- [ ] HTTPS enabled (green padlock)
- [ ] Mobile responsive works

---

## 🆘 Common Issues

### Build Fails
→ Check Node version: 20.11.1  
→ Clear cache and retry deploy

### Forms Don't Work
→ Check browser console for errors  
→ Verify Network tab shows API calls

### Domain Not Working
→ Wait 24-48 hours for DNS  
→ Check at https://dnschecker.org

---

## 📞 Quick Contacts

**Westprint**: (949) 749-4024  
**Email**: estimating@westprint.com  
**Emergency**: rcarandang@advantageinc.com

---

## 📚 Detailed Guides

| Guide | Use Case | Time |
|-------|----------|------|
| START_DEPLOYMENT.md | Choose your path | - |
| DEPLOY_NOW.md | Quick deploy | 10m |
| GITHUB_SETUP.md | Step-by-step | 20m |
| GIT_DEPLOY_COMMANDS.md | Commands only | 5m |

---

## 🎉 Success!

When westprint.com loads with HTTPS, you're done! 🚀

**Status**: ✅ Ready to Deploy  
**Target**: westprint.com  
**Platform**: GitHub + Netlify
