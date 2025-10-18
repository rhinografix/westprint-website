# Westprint Website

Professional printing company website for Westprint - Serving Southern California since 1981.

## 🚀 Quick Deploy

```bash
# Push to GitHub
git add .
git commit -m "Fix: react-hook-form import + Node v20.11.1"
git push
```

The site will automatically build and deploy on Netlify!

## 📋 Project Overview

- **Tech Stack:** React + TypeScript + Vite + Tailwind CSS v4
- **Hosting:** Netlify
- **Backend:** Supabase Edge Functions (contact form)
- **Domain:** westprint.com
- **Node Version:** 20.11.1 LTS

## ✨ Features

- ✅ Responsive design (mobile & desktop)
- ✅ Professional teal/blue gradient color scheme
- ✅ Working contact form with email notifications
- ✅ Multiple pages (Home, Services, Industries, About, Contact)
- ✅ Smooth animations and hover effects
- ✅ SEO optimized
- ✅ Fast loading with Vite
- ✅ TypeScript for type safety
- ✅ ShadCN UI components

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
│   │   └── globals.css       # Global styles (Tailwind v4)
│   └── utils/
│       └── supabase/
│           └── info.tsx      # Supabase config
├── public/
│   └── logo-placeholder.svg  # Logo
├── supabase/
│   └── functions/server/     # Edge function for contact form
├── index.html
├── package.json
├── vite.config.ts
├── tsconfig.json
└── netlify.toml              # Netlify configuration
```

## 💻 Local Development

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Type check
npm run lint
```

Visit `http://localhost:5173`

## 🌐 Deployment

### Netlify (Current Setup)

The site is configured to automatically deploy when you push to GitHub:

1. **Push to GitHub:**
   ```bash
   git add .
   git commit -m "Your changes"
   git push
   ```

2. **Netlify Auto-Deploys:**
   - Watches your `main` branch
   - Builds with: `npm run build`
   - Publishes from: `dist/`
   - Node version: 20.11.1

3. **Domain Setup:**
   - Site: `westprint.com`
   - SSL: Automatic (Let's Encrypt)

### Environment Variables

These are already configured in Netlify:
- `SUPABASE_URL`
- `SUPABASE_ANON_KEY`
- `SUPABASE_SERVICE_ROLE_KEY`
- `RESEND_API_KEY`

## 📧 Contact Form

- Sends emails to: **rhinografix@gmail.com**
- Powered by: Supabase Edge Functions + Resend API
- Includes: Name, email, phone, service, and message

## 🎨 Customization

### Update Logo

Replace `/public/logo-placeholder.svg` with your logo file.

### Update Colors

Edit `/src/styles/globals.css` - Tailwind v4 uses CSS variables:

```css
@theme {
  --color-primary: /* your color */;
}
```

### Update Contact Info

Edit `/src/components/Footer.tsx` and `/src/components/Header.tsx`

## 📞 Contact Information

- **Address:** 1600 N Kraemer Blvd, Anaheim, CA 92806
- **Phone:** (949) 749-4024
- **Email:** customercare@westprint.com
- **Hours:** Mon-Fri 8:00 AM - 5:00 PM
- **File Upload:** https://westprint.wetransfer.com/

## 🔧 Build Configuration

- **Build Command:** `npm run build`
- **Build Steps:**
  1. TypeScript compilation (`tsc`)
  2. Vite production build
  3. Output to `dist/`

- **Node Version:** 20.11.1 (specified in `netlify.toml`, `package.json`, `.nvmrc`, `.node-version`)

## 📚 Tech Stack Details

- **React 18.2** - UI framework
- **TypeScript 5.3** - Type safety
- **Vite 5** - Build tool & dev server
- **Tailwind CSS v4** - Styling
- **ShadCN UI** - Component library
- **Lucide React** - Icons
- **Sonner** - Toast notifications
- **Radix UI** - Accessible primitives
- **Supabase** - Backend & database
- **Resend** - Email API

## 📄 License

© 2025 Westprint. All rights reserved.

## 🆘 Support

- **Netlify Docs:** https://docs.netlify.com
- **Vite Docs:** https://vite.dev
- **React Docs:** https://react.dev
- **Tailwind v4:** https://tailwindcss.com/docs/v4-beta

---

**Status:** ✅ Ready for production deployment
