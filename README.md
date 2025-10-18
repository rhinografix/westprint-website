# Westprint Website

Professional printing company website for Westprint - Serving Southern California since 1981.

## 🚀 Deploy to Netlify

### 🚨 Build Failed? Fix It Now!

**Run this command:**
```bash
node copy-and-fix.js && git add . && git commit -m "Add UI components" && git push
```

**OR Read:** `/ULTIMATE_FIX.md` ⭐ (Detailed instructions)

### ✅ After Build Succeeds

**Read:** `/DEPLOY.md` for domain setup instructions!

Your site will be live at westprint.com in ~20 minutes.

## 📋 Project Overview

- **Tech Stack:** React + TypeScript + Vite + Tailwind CSS
- **Hosting:** Netlify (recommended) or Vercel
- **Backend:** Supabase Edge Functions
- **Domain:** westprint.com

## ✨ Features

- ✅ Responsive design (mobile & desktop)
- ✅ Professional teal/blue gradient color scheme
- ✅ Working contact forms with email notifications
- ✅ Multiple pages (Home, Services, Industries, About, Contact)
- ✅ Smooth animations and hover effects
- ✅ SEO optimized
- ✅ Fast loading with Vite
- ✅ TypeScript for type safety

## 🏗️ Project Structure

```
westprint-website/
├── src/
│   ├── main.tsx              # Entry point
│   ├── App.tsx               # Main app component
│   ├── components/           # All React components
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   ├── AboutPage.tsx
│   │   ├── ContactPage.tsx
│   │   ├── ServicesPage.tsx
│   │   ├── IndustriesPage.tsx
│   │   ├── HeroAnimationOverlay.tsx
│   │   ├── ScrollControlledFeatures.tsx
│   │   ├── figma/
│   │   │   └── ImageWithFallback.tsx
│   │   └── ui/               # ShadCN components
│   ├── styles/
│   │   └── globals.css       # Global styles
│   └── utils/
│       └── supabase/
│           └── info.tsx      # Supabase config
├── public/
│   └── logo-placeholder.svg  # Temporary logo
├── index.html
├── package.json
├── vite.config.ts
├── tsconfig.json
└── netlify.toml              # Netlify configuration
```

## 🚀 Local Development

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

Visit `http://localhost:5173`

## 🌐 Deployment

### Deploy to Netlify (Recommended)

1. **Push to GitHub:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/YOUR_USERNAME/westprint-website.git
   git push -u origin main
   ```

2. **Deploy to Netlify:**
   - Go to https://app.netlify.com
   - Sign up with GitHub
   - Click "Add new site" → "Import an existing project"
   - Select your repository
   - Add environment variables (see below)
   - Click "Deploy site"

3. **Connect Domain:**
   - In Netlify: Domain settings → Add `westprint.com`
   - In DNS provider: Add A record (`75.2.60.5`) and CNAME (`www` → your-site.netlify.app`)

**Full instructions:** See `/DEPLOY.md`

## 🔑 Environment Variables

Add these in Netlify dashboard (or `.env.local` for local dev):

```
VITE_SUPABASE_URL=https://hdcqpvezfqfrieuvtdkv.supabase.co
VITE_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhkY3FwdmV6ZnFmcmlldXZ0ZGt2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjA3MTQ2MzEsImV4cCI6MjA3NjI5MDYzMX0.66TzzhiOhSyobSqSa1TJpzRwxbwyCk6O1DmDl6R_QrM
```

## 📧 Contact Form

Contact forms send emails to: **rhinografix@gmail.com**

Powered by Supabase Edge Functions (works with any hosting platform).

## 🎨 Customization

### Update Logo

1. Replace `/public/logo-placeholder.svg` with your logo
2. Update `/src/components/Header.tsx` line ~37 to use your logo path
3. Commit and push

### Update Colors

Edit `/src/styles/globals.css` to change color scheme.

### Add/Remove Pages

1. Create new component in `/src/components/`
2. Add route in `/src/App.tsx`
3. Add link in `/src/components/Header.tsx`

## 📞 Contact Information

- **Address:** 1600 N Kraemer Blvd, Anaheim, CA 92806
- **Phone:** (949) 749-4024
- **Email:** customercare@westprint.com
- **Hours:** Mon-Fri 8:00 AM - 5:00 PM

## 📄 License

© 2025 Westprint. All rights reserved.

## 🆘 Need Help?

- **Deployment Issues:** See `/DEPLOY.md`
- **Netlify Docs:** https://docs.netlify.com
- **Vite Docs:** https://vite.dev
- **React Docs:** https://react.dev

---

**Ready to deploy?** Read `/DEPLOY.md` for complete instructions!
