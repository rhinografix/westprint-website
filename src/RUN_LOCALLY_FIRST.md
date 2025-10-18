# ⚠️ YOU MUST RUN THIS ON YOUR COMPUTER

## The Problem

The build is failing because `/src/components/ui/` only has 3 files. It needs 49 files.

You pushed the **script files** to GitHub, but you didn't **run them** yet!

---

## ✅ THE FIX (3 steps)

### Step 1: Open Terminal on YOUR Computer

Navigate to your project:

```bash
cd westprint-website
```

### Step 2: Run ONE Command

```bash
node copy-and-fix.js && git add . && git commit -m "Add UI components" && git push
```

### Step 3: Done!

Netlify will auto-rebuild in ~3 minutes and your site will be LIVE! 🎉

---

## 🔍 What the Script Does

1. Copies 46 missing files from `/components/ui/` to `/src/components/ui/`
2. Fixes all import version specifiers (removes `@1.2.3` from imports)
3. Ready to push!

---

## ⚡ Alternative: Copy Files Manually

If the script doesn't work, you can manually copy the files:

### Windows:
```powershell
Copy-Item -Path "components\ui\*" -Destination "src\components\ui\" -Recurse -Force
```

### Mac/Linux:
```bash
cp components/ui/* src/components/ui/
```

Then fix imports by running:
```bash
node copy-and-fix.js
```

---

## 🆘 Troubleshooting

### "node: command not found"
Install Node.js: https://nodejs.org

### "Can't find copy-and-fix.js"
Make sure you're in the project root:
```bash
pwd  # Should end in "westprint-website"
ls   # Should show copy-and-fix.js
```

### Still confused?
The script needs to run **on your local machine** (your laptop/desktop), not on GitHub or Netlify.

1. Clone the repo to your computer (if you haven't)
2. Open Terminal/Command Prompt
3. Navigate to the project folder
4. Run: `node copy-and-fix.js`
5. Run: `git add . && git commit -m "Add files" && git push`

---

## 📊 Before vs After

**Before (current state):**
```
src/components/ui/
├── accordion.tsx
├── sonner.tsx
└── utils.ts
```

**After (what you need):**
```
src/components/ui/
├── accordion.tsx
├── alert-dialog.tsx
├── alert.tsx
├── ... (46 more files)
├── sonner.tsx
└── utils.ts
```

---

## ⏱️ Total Time: 2 minutes

1. Open terminal (10 sec)
2. Run command (10 sec)
3. Push to GitHub (20 sec)
4. Netlify rebuilds (~3 min)
5. **Site is LIVE!** 🚀

---

**DO THIS NOW:**

```bash
node copy-and-fix.js && git add . && git commit -m "Add UI components" && git push
```

Copy that command ↑ and paste it into your terminal!
