# 🚀 Deploy Westprint Website Now

**Quick 3-step deployment guide to get westprint.com live in under 10 minutes.**

---

## Step 1: Push to GitHub (2 minutes)

### Create Repository on GitHub
1. Go to https://github.com/new
2. Name: `westprint-website`
3. Make it **Private**
4. Click **"Create repository"**

### Push Your Code
Open terminal in your project folder and copy/paste these commands:

```bash
git init
git add .
git commit -m "Initial commit: Westprint website"
git remote add origin https://github.com/YOUR-USERNAME/westprint-website.git
git branch -M main
git push -u origin main
```

Replace `YOUR-USERNAME` with your actual GitHub username.

✅ **Done!** Your code is on GitHub.

---

## Step 2: Deploy to Netlify (3 minutes)

### Connect and Deploy
1. Go to https://app.netlify.com
2. Click **"Add new site"** → **"Import an existing project"**
3. Click **"GitHub"**
4. Select **`westprint-website`** repository
5. Verify settings:
   ```
   Build command: npm run build
   Publish directory: dist
   ```
6. Click **"Deploy site"**

Wait 2-3 minutes for build to complete.

✅ **Done!** Your site is live at: `random-name-123456.netlify.app`

---

## Step 3: Add Custom Domain (5 minutes)

### Configure westprint.com

1. In Netlify dashboard → **"Domain settings"**
2. Click **"Add custom domain"**
3. Enter: `westprint.com`
4. Click **"Add domain"**

### Update DNS at Your Registrar

Go to where you registered westprint.com (GoDaddy, Namecheap, etc.) and add these DNS records:

**A Record:**
```
Type: A
Name: @
Value: 75.2.60.5
```

**CNAME Record:**
```
Type: CNAME  
Name: www
Value: [your-netlify-site].netlify.app
```

Replace `[your-netlify-site]` with your actual Netlify site name.

### Enable HTTPS
1. Wait 10-15 minutes for DNS to propagate
2. In Netlify → **"Domain settings"** → **"HTTPS"**
3. Click **"Verify DNS configuration"**
4. Click **"Provision certificate"**
5. Enable **"Force HTTPS"**

✅ **Done!** Visit https://westprint.com

---

## ✅ Verify Everything Works

- [ ] Site loads at westprint.com
- [ ] HTTPS works (green padlock)
- [ ] All pages navigate correctly
- [ ] Hero form submits (test it!)
- [ ] Contact form submits (test it!)
- [ ] Check email at estimating@westprint.com

---

## 🔄 Making Updates Later

Whenever you make changes:

```bash
git add .
git commit -m "Describe your changes"
git push origin main
```

Netlify will automatically rebuild and deploy! 🎉

---

## 🆘 Need Help?

**Build fails?**
- Check Netlify build log
- Make sure Node version is 20.11.1

**Domain not working?**
- Wait 24 hours for DNS propagation
- Check DNS at https://dnschecker.org

**Forms not working?**
- Check browser console for errors
- Verify network requests in DevTools

---

**That's it! Your website is live! 🎉**
