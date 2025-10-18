# 🚀 Deploy Westprint Website to Netlify

**Complete step-by-step guide to deploy your site to westprint.com**

---

## ✅ Pre-Deployment Status

- ✅ All components ready in `/src/components/`
- ✅ `.gitignore` configured
- ✅ `netlify.toml` configured
- ✅ Environment variables documented
- ✅ Contact form backend ready

**You're ready to deploy!**

---

## 📋 Deployment Steps (20 minutes)

### Step 1: Push to GitHub (5 minutes)

#### A. Create Repository

1. Go to https://github.com/new
2. Repository name: `westprint-website`
3. **Don't** check any boxes
4. Click **"Create repository"**

#### B. Upload Code

Open terminal in your project folder:

```bash
# Initialize git
git init

# Add all files
git add .

# First commit
git commit -m "Initial commit - Westprint website"

# Set main branch
git branch -M main

# Add GitHub remote (replace YOUR_USERNAME)
git remote add origin https://github.com/YOUR_USERNAME/westprint-website.git

# Push to GitHub
git push -u origin main
```

**✅ Code is now on GitHub!**

---

### Step 2: Deploy to Netlify (5 minutes)

#### A. Create Account

1. Go to https://app.netlify.com
2. Click **"Sign up with GitHub"**
3. Authorize Netlify

#### B. Import Project

1. Click **"Add new site"**
2. Click **"Import an existing project"**
3. Choose **"Deploy with GitHub"**
4. Select **`westprint-website`** repository

#### C. Configure Build

Netlify auto-detects Vite settings:
- **Build command:** `npm run build`
- **Publish directory:** `dist`

#### D. Add Environment Variables

1. Click **"Show advanced"**
2. Click **"New variable"** (twice)

Add these:

```
Variable 1:
Name:  VITE_SUPABASE_URL
Value: https://hdcqpvezfqfrieuvtdkv.supabase.co

Variable 2:
Name:  VITE_SUPABASE_ANON_KEY
Value: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhkY3FwdmV6ZnFmcmlldXZ0ZGt2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjA3MTQ2MzEsImV4cCI6MjA3NjI5MDYzMX0.66TzzhiOhSyobSqSa1TJpzRwxbwyCk6O1DmDl6R_QrM
```

3. Click **"Deploy site"**

#### E. Wait for Build

- Build takes ~2-3 minutes
- Watch the deploy log
- Green checkmark = success! ✅

**Your site is live!** You'll get a URL like: `https://random-name-123.netlify.app`

---

### Step 3: Connect westprint.com Domain (10 minutes)

#### A. Add Domain in Netlify

1. In Netlify dashboard, click **"Domain settings"**
2. Click **"Add custom domain"**
3. Enter: `westprint.com`
4. Click **"Add domain"**
5. Netlify shows DNS instructions

#### B. Update DNS Records

1. Go to your domain registrar (where you bought westprint.com)
2. Find **"DNS Management"** or **"DNS Settings"**
3. **Delete** existing A and CNAME records for `@` and `www`
4. **Add** these NEW records:

**Record 1 (Root domain):**
```
Type:  A
Name:  @ (or leave blank)
Value: 75.2.60.5
TTL:   Auto or 3600
```

**Record 2 (WWW subdomain):**
```
Type:  CNAME
Name:  www
Value: YOUR-SITE-NAME.netlify.app
TTL:   Auto or 3600
```

*(Replace `YOUR-SITE-NAME` with your actual Netlify subdomain)*

5. **Save** DNS changes

#### C. Wait for DNS Propagation

- Takes 5 minutes to 48 hours (usually ~30 minutes)
- Check status: https://dnschecker.org
- Netlify will automatically enable HTTPS when DNS is ready

**✅ Done!** Visit https://westprint.com 🎉

---

## ✅ Post-Deployment Checklist

Test your live site:

- [ ] Site loads at westprint.com
- [ ] Site loads at www.westprint.com
- [ ] All 5 pages work (Home, Services, Industries, About, Contact)
- [ ] Navigation works (desktop & mobile)
- [ ] Contact form submits successfully
- [ ] Emails received at rhinografix@gmail.com
- [ ] Mobile responsive
- [ ] HTTPS active (padlock in browser)
- [ ] All animations work

---

## 🔄 Updating Your Site

After deployment, updates are automatic:

```bash
# Make your changes in /src/

# Commit and push
git add .
git commit -m "Updated services page"
git push

# Netlify automatically deploys in ~2 minutes!
```

No manual deployment needed!

---

## 🆘 Troubleshooting

### Build Failed

**Common causes:**
- Missing environment variables
- Node version mismatch
- Dependency issues

**Fix:**
1. Check deploy log in Netlify
2. Verify environment variables are set correctly
3. Try manual redeploy

### Contact Form Not Working

**Check:**
1. Environment variables in Netlify (both must be set)
2. Browser console (F12) for errors
3. Supabase function status

### Domain Not Working

**If site doesn't load at westprint.com:**
1. Wait 24-48 hours for DNS propagation
2. Check DNS: https://dnschecker.org
3. Verify DNS records in your registrar
4. Clear browser cache (Ctrl+Shift+R)

**If shows "Site not found":**
- Check domain is added in Netlify
- Verify DNS CNAME points to correct Netlify subdomain

### Page 404 on Refresh

- Should be fixed by `netlify.toml`
- Verify `netlify.toml` exists in repository
- Redeploy if needed

---

## 💰 Cost

**$0 - Completely FREE!**

Netlify free tier includes:
- ✅ 100 GB bandwidth/month
- ✅ 300 build minutes/month
- ✅ Custom domain (westprint.com)
- ✅ Free SSL certificate
- ✅ Automatic deployments
- ✅ Deploy previews

---

## 📊 What You Built

**Pages:**
- Home (with animated hero, features, testimonials)
- Services (9 comprehensive services)
- Industries (9 industry solutions)
- About (company history & team)
- Contact (working form with email)

**Features:**
- Responsive design (mobile & desktop)
- Teal/blue gradient color scheme
- Smooth animations & hover effects
- Working contact forms
- Email notifications to rhinografix@gmail.com
- Fast loading (Vite + React)
- SEO optimized
- TypeScript for type safety

**Technologies:**
- React 18 + TypeScript
- Vite (build tool)
- Tailwind CSS (styling)
- Supabase (backend & email)
- Netlify (hosting)

---

## 🎯 Summary

1. **Push to GitHub** → Your code is backed up
2. **Deploy to Netlify** → Site is live automatically
3. **Connect domain** → Site accessible at westprint.com
4. **Test everything** → Verify all features work

**Total time: ~20 minutes**
**Cost: $0**
**Result: Professional live website!** 🚀

---

## 📞 Support

**Need help?**
- Netlify Community: https://answers.netlify.com
- Netlify Docs: https://docs.netlify.com
- Netlify Status: https://www.netlifystatus.com

---

**🎉 Congratulations! Your Westprint website is now live at https://westprint.com!**
