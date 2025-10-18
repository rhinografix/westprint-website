# ⚠️ Before You Deploy - Manual Cleanup Required

## Duplicate Files/Folders to Delete

Your project has duplicate folders at the root level that should be deleted before uploading to GitHub:

### ❌ DELETE THESE (they're duplicates):

```
❌ /App.tsx              (duplicate of /src/App.tsx)
❌ /components/          (duplicate of /src/components/)
❌ /styles/              (duplicate of /src/styles/)
❌ /utils/               (duplicate of /src/utils/)
❌ /guidelines/          (not needed for deployment)
```

### ✅ KEEP THESE:

```
✅ /src/                 (your actual source code)
✅ /public/              (static assets)
✅ /supabase/            (backend functions)
✅ index.html
✅ package.json
✅ netlify.toml
✅ vite.config.ts
✅ tsconfig.json
✅ README.md
✅ DEPLOY.md
✅ .gitignore
```

---

## How to Delete

### Option 1: File Explorer
1. Navigate to your project folder
2. Delete the folders/files listed above
3. **Done!**

### Option 2: Command Line
```bash
# Run this in your project folder
rm -f App.tsx
rm -rf components
rm -rf styles
rm -rf utils
rm -rf guidelines
```

---

## Why Delete?

- **Cleaner repository** - No duplicate files
- **Faster uploads** - Less files to process
- **Professional** - Organized project structure
- **No confusion** - Only one version of each file

---

## After Cleanup

Your project structure will be:

```
westprint-website/
├── .gitignore
├── index.html
├── netlify.toml
├── package.json
├── tsconfig.json
├── vite.config.ts
├── README.md
├── DEPLOY.md
├── Attributions.md (can't delete - protected)
│
├── public/
│   └── logo-placeholder.svg
│
├── src/                    ← Your REAL code
│   ├── main.tsx
│   ├── App.tsx
│   ├── components/
│   ├── styles/
│   └── utils/
│
└── supabase/               ← Backend
    └── functions/
```

**Clean and ready to deploy!** ✅

---

## Next Step

After cleanup, follow: `/DEPLOY.md`

---

**Note:** `Attributions.md` at root cannot be deleted (protected file), but it won't affect deployment.
