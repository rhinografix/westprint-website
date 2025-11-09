# 📋 Westprint Website - Project Overview

## 🎯 Project Summary

**Website**: Westprint Printing Company
**Purpose**: Professional business website with quote request functionality
**Status**: ✅ Production Ready
**Built**: 2024

---

## 📧 Email Configuration

### Quote Request Recipients
All form submissions send to **BOTH**:
- `estimating@westprint.com`
- `rcarandang@advantageinc.com`

### Email Provider
- **Service**: Resend API
- **Sender**: `Westprint Website <onboarding@resend.dev>`
- **Reply-To**: Customer's email address (from form)
- **Format**: Professional HTML emails with teal/cyan branding

---

## 📄 Pages

| Page | Route | Description |
|------|-------|-------------|
| **Home** | `/` | Hero with quote form, features, testimonials |
| **Services** | `/?page=services` | Full service listings and descriptions |
| **Industries** | `/?page=industries` | Industry-specific solutions |
| **About** | `/?page=about` | Company history and information |
| **Contact** | `/?page=contact` | Detailed quote request form |
| **Testing** | `/?page=test-forms` | Form testing dashboard |

---

## 📝 Forms

### 1. Hero Form (Homepage)
**Location**: Top of homepage in hero section
**Fields**: 4
- Full Name
- Email
- Phone
- Project Details (optional)

### 2. Contact Form (Contact Page)
**Location**: Contact page
**Fields**: 9
- First Name
- Last Name
- Company (optional)
- Email
- Phone
- Service Needed (dropdown)
- Estimated Quantity (dropdown)
- Project Timeline (dropdown)
- Message/Project Details (optional)

### Form Features
- ✅ Real-time validation
- ✅ Error handling
- ✅ Success/error toast notifications
- ✅ Auto-reset after successful submission
- ✅ Professional email templates
- ✅ Sends to both recipients simultaneously

---

## 🛠️ Tech Stack

### Frontend
- React 18.2.0
- TypeScript 5.3.3
- Tailwind CSS v4
- Vite 5.0.12

### UI Components
- Radix UI components
- shadcn/ui component library
- Lucide React icons
- Sonner (toast notifications)

### Backend
- Supabase Edge Functions
- Resend Email API
- Hono web server

### Deployment
- Netlify (hosting)
- GitHub (version control)
- Automatic deploys on push

---

## 📂 Key Files

### Configuration
- `netlify.toml` - Netlify deployment config
- `package.json` - Dependencies and scripts
- `tsconfig.json` - TypeScript configuration
- `vite.config.ts` - Build configuration
- `.gitignore` - Git ignore rules

### Source Code
- `src/App.tsx` - Main application component
- `src/main.tsx` - Application entry point
- `src/components/` - React components
- `src/styles/globals.css` - Global styles
- `supabase/functions/server/index.tsx` - Email API endpoint

### Documentation
- `README.md` - Main project documentation
- `DEPLOYMENT.md` - Full deployment guide
- `QUICK_DEPLOY.md` - Quick start deployment
- `DEPLOY_CHECKLIST.md` - Pre-deployment checklist
- `GIT_COMMANDS.md` - Git commands reference
- `RESEND_TESTING_GUIDE.md` - Email testing guide
- `PRODUCTION_DEPLOYMENT_CHECKLIST.md` - Production checklist

---

## 🔧 Development Commands

```bash
npm install          # Install dependencies
npm run dev          # Start dev server (localhost:5173)
npm run build        # Build for production
npm run preview      # Preview production build
npm run lint         # TypeScript type checking
```

---

## 🧪 Testing

### Testing Dashboard
Access at: `http://localhost:5173/?page=test-forms` (dev) or `https://westprint.com/?page=test-forms` (production)

### Features
- Automated form testing
- Email delivery verification
- Real-time success/error status
- Request/response debugging
- Response time monitoring

### Test Before Deployment
1. Run both automated tests
2. Check both email inboxes
3. Verify email formatting
4. Test actual forms manually
5. Check mobile responsiveness

---

## 🚀 Deployment Workflow

### Initial Deployment
1. **Test locally**: `npm run dev`
2. **Build**: `npm run build`
3. **Push to GitHub**: `git push`
4. **Deploy on Netlify**: Automatic
5. **Test live site**: Use testing dashboard
6. **Verify emails**: Check both inboxes

### Updating Site
1. Make changes in code
2. Test locally
3. Commit: `git commit -m "description"`
4. Push: `git push`
5. Netlify auto-deploys (2-3 minutes)

---

## 📞 Contact Information (On Site)

- **Phone**: (949) 749-4024
- **Email**: estimating@westprint.com
- **Location**: Anaheim, Southern California
- **Hours**: Monday - Friday, 8:00 AM - 5:00 PM
- **Domain**: westprint.com

---

## 🔐 Security

### Best Practices Implemented
- ✅ API keys stored in Supabase (server-side)
- ✅ No sensitive data in frontend code
- ✅ HTTPS enabled (automatic with Netlify)
- ✅ Security headers configured
- ✅ CORS properly configured
- ✅ Form validation
- ✅ .gitignore prevents leaking secrets

### Environment Variables
All stored in Supabase (not in frontend):
- `RESEND_API_KEY`
- `SUPABASE_URL`
- `SUPABASE_ANON_KEY`
- `SUPABASE_SERVICE_ROLE_KEY`

---

## 📊 Monitoring

### What to Monitor
1. **Email Delivery**: Check Resend dashboard daily
2. **Form Submissions**: Check email inboxes for quotes
3. **Site Uptime**: Netlify monitors automatically
4. **Performance**: Check load times periodically
5. **Console Errors**: Test forms regularly

### Dashboards
- **Netlify**: https://app.netlify.com (deploys, analytics)
- **Resend**: https://resend.com/emails (email delivery)
- **GitHub**: Repository for version control

---

## 🎨 Design System

### Colors
- **Primary**: Teal/Cyan gradients (`#0891b2` to `#14b8a6`)
- **Backgrounds**: White, light gray
- **Text**: Dark gray (`#1f2937`), Medium gray (`#6b7280`)
- **Accent**: Blue (`#3b82f6`)

### Fonts
- System font stack (optimized for performance)
- Typography defined in `src/styles/globals.css`

### Breakpoints
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

---

## 📈 Performance

### Optimization Features
- Static site generation
- CDN delivery (Netlify)
- Image optimization
- CSS purging (Tailwind)
- Code splitting (Vite)
- Gzip/Brotli compression

### Target Metrics
- Load time: < 3 seconds
- First Contentful Paint: < 1.5 seconds
- Time to Interactive: < 3 seconds
- Lighthouse score: 90+

---

## 🔄 Version Control

### Git Repository
- **Platform**: GitHub
- **Branch**: main (production)
- **Workflow**: Push to main triggers deploy

### Commit Convention
Use descriptive commit messages:
- "Add feature" → "Add email validation to contact form"
- "Fix bug" → "Fix mobile menu not closing on link click"
- "Update" → "Update company phone number on contact page"

---

## 📚 Documentation Structure

| File | Purpose |
|------|---------|
| `README.md` | Main project documentation |
| `DEPLOYMENT.md` | Complete deployment guide |
| `QUICK_DEPLOY.md` | 5-minute quick start |
| `DEPLOY_CHECKLIST.md` | Step-by-step checklist |
| `GIT_COMMANDS.md` | Git command reference |
| `RESEND_TESTING_GUIDE.md` | Email testing instructions |
| `PRODUCTION_DEPLOYMENT_CHECKLIST.md` | Production checklist |
| `PROJECT_OVERVIEW.md` | This file |

---

## ✅ Project Status

### Completed ✅
- [x] Homepage with hero form
- [x] All navigation pages
- [x] Two working forms
- [x] Email integration with Resend
- [x] Professional email templates
- [x] Form validation and error handling
- [x] Success/error notifications
- [x] Mobile responsive design
- [x] Testing dashboard
- [x] Production-ready configuration
- [x] Documentation complete
- [x] Ready for GitHub
- [x] Ready for Netlify

### Future Enhancements (Optional)
- [ ] Custom domain email (noreply@westprint.com)
- [ ] Google Analytics integration
- [ ] SEO optimization
- [ ] Blog section
- [ ] Portfolio/gallery
- [ ] Online ordering system
- [ ] Live chat support
- [ ] Multi-language support

---

## 🎉 Ready for Deployment!

This project is complete and ready to deploy. Follow the guides in order:

1. **Start**: `QUICK_DEPLOY.md` (5-minute setup)
2. **Checklist**: `DEPLOY_CHECKLIST.md` (verify everything)
3. **Detailed**: `DEPLOYMENT.md` (comprehensive guide)
4. **Git Help**: `GIT_COMMANDS.md` (Git reference)

**Good luck! 🚀**
