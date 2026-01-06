# 📁 File Guide - What's What

Quick reference guide to understand what each file does.

---

## 🚀 Deployment Files (START HERE)

| File | What It Does | When to Use |
|------|--------------|-------------|
| **START_DEPLOYMENT.md** | Main starting point | Read this first! |
| **DEPLOY_NOW.md** | Quick 3-step guide | Fast deployment |
| **GITHUB_SETUP.md** | Detailed guide | Need step-by-step help |
| **GIT_DEPLOY_COMMANDS.md** | Git commands only | Know GitHub, need commands |
| **DEPLOYMENT_READY.md** | Technical overview | Verify everything ready |
| **PRODUCTION_CHECKLIST.md** | Pre-deploy checks | Before pushing to GitHub |

---

## 📖 Documentation Files

| File | Purpose |
|------|---------|
| **README.md** | Complete project documentation |
| **FILE_GUIDE.md** | This file - explains all files |

---

## ⚙️ Configuration Files

### Essential (Don't Delete!)

| File | What It Does |
|------|--------------|
| **package.json** | Lists all dependencies and scripts |
| **netlify.toml** | Netlify deployment configuration |
| **vite.config.ts** | Build tool configuration |
| **tsconfig.json** | TypeScript settings |
| **.gitignore** | Tells Git which files to ignore |
| **index.html** | Entry HTML file for website |
| **postcss.config.js** | CSS processing configuration |

---

## 💻 Source Code Files

### Main Application

```
src/
├── main.tsx              # App entry point
├── App.tsx               # Main app component & routing
└── styles/
    └── globals.css       # Global styles & Tailwind
```

### Page Components

```
src/components/
├── AboutPage.tsx         # About page
├── ContactPage.tsx       # Contact page with detailed form
├── Header.tsx            # Navigation header
├── IndustriesPage.tsx    # Industries page
├── ServicesPage.tsx      # Services page
├── HeroAnimationOverlay.tsx    # Hero section animation
└── ScrollControlledFeatures.tsx # Scroll features section
```

### UI Components (Reusable)

```
src/components/ui/
├── button.tsx            # Button component
├── card.tsx              # Card component
├── input.tsx             # Input field component
├── textarea.tsx          # Textarea component
├── sonner.tsx            # Toast notification component
└── [40+ other components]
```

### Utilities

```
src/utils/
└── supabase/
    └── info.tsx          # Supabase info component
```

### Backend

```
supabase/functions/server/
├── index.tsx             # Email API endpoint
└── kv_store.tsx          # Key-value storage
```

---

## 🎨 Asset Files

```
public/
└── logo-placeholder.svg   # Logo file
```

---

## 📦 Generated Files (Auto-Created)

These appear after running `npm install` or `npm run build`:

| File/Folder | Created By | Safe to Delete? |
|-------------|-----------|-----------------|
| **node_modules/** | npm install | Yes (can reinstall) |
| **dist/** | npm run build | Yes (rebuilds on deploy) |
| **package-lock.json** | npm install | No (keep this) |

---

## 🗑️ Files You Can Ignore

These are old documentation files (redundant):

- COMMANDS.txt
- DEPLOYMENT.md (superseded by new guides)
- DEPLOYMENT_SUMMARY.txt
- DEPLOY_CHECKLIST.md
- DOCUMENTATION_INDEX.md
- PRODUCTION_DEPLOYMENT_CHECKLIST.md
- QUICK_DEPLOY.md
- READY_TO_DEPLOY.md
- RESEND_TESTING_GUIDE.md
- VISUAL_DEPLOYMENT_GUIDE.txt
- Attributions.md
- PROJECT_OVERVIEW.md

**Note**: These can be deleted if you want to clean up, but won't affect deployment.

---

## 🎯 Which Files to Edit

### If you want to change...

**Content/Text:**
- `src/App.tsx` - Homepage content
- `src/components/AboutPage.tsx` - About page
- `src/components/ContactPage.tsx` - Contact page
- `src/components/ServicesPage.tsx` - Services page
- `src/components/IndustriesPage.tsx` - Industries page

**Styles:**
- `src/styles/globals.css` - Global styles
- Individual component files - Component-specific styles

**Contact Info:**
- `src/App.tsx` - Phone, email, address, hours
- `index.html` - Page title, meta description

**Email Recipients:**
- `src/App.tsx` - Line ~48-49 (hero form)
- `src/components/ContactPage.tsx` - Contact form

**Build Settings:**
- `package.json` - Dependencies, scripts
- `netlify.toml` - Netlify configuration
- `vite.config.ts` - Build configuration

---

## 🚫 Files NEVER to Edit Manually

- `node_modules/` - Auto-generated
- `dist/` - Build output
- `package-lock.json` - Auto-maintained by npm
- `.git/` - Git internal files

---

## 📋 Files Needed for Deployment

**Minimum required files:**

✅ Source code (`src/` folder)  
✅ `package.json`  
✅ `netlify.toml`  
✅ `vite.config.ts`  
✅ `tsconfig.json`  
✅ `index.html`  
✅ `.gitignore`  

Everything else supports but isn't required for deployment.

---

## 🔍 Quick Find

**Looking for...?**

- Deployment instructions → `START_DEPLOYMENT.md`
- Git commands → `GIT_DEPLOY_COMMANDS.md`
- Homepage code → `src/App.tsx`
- Form code → `src/App.tsx` & `src/components/ContactPage.tsx`
- Email backend → `supabase/functions/server/index.tsx`
- Build settings → `package.json`, `netlify.toml`
- Project docs → `README.md`

---

## 💡 Pro Tips

1. **Don't edit** files in `node_modules/` or `dist/`
2. **Always commit** changes before deploying
3. **Test locally** with `npm run dev` before pushing
4. **Build locally** with `npm run build` to catch errors
5. **Keep backups** of important files

---

## 🎯 Deployment Workflow

```
Edit Files
   ↓
Test Locally (npm run dev)
   ↓
Build Test (npm run build)
   ↓
Commit to Git
   ↓
Push to GitHub
   ↓
Netlify Auto-Deploys
   ↓
Live on westprint.com
```

---

**Need help?** Start with `START_DEPLOYMENT.md` 🚀
