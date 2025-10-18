# 🚨 FIX BUILD ERRORS NOW - 30 SECONDS

## Problem
The UI component files have version specifiers in imports (like `@1.2.3`) which cause TypeScript errors.

## ⚡ QUICK FIX - Pick ONE:

### Option 1: Node.js Script (EASIEST - Works on all platforms)
```bash
node fix-imports.js
git add .
git commit -m "Fix import version specifiers"
git push
```

### Option 2: PowerShell (Windows)
```powershell
.\FIX_ALL_IMPORTS.ps1
git add .
git commit -m "Fix import version specifiers"
git push
```

### Option 3: Bash (Mac/Linux)
```bash
bash FIX_ALL_IMPORTS.sh
git add .
git commit -m "Fix import version specifiers"
git push
```

### Option 4: VS Code Find & Replace (Manual - 2 minutes)

1. Open VS Code
2. Press `Ctrl+Shift+H` (Find and Replace in Files)
3. Set "files to include": `src/components/ui/**/*.{ts,tsx}`
4. Click the `.*` button to enable regex
5. Run these replacements ONE AT A TIME:

| Find (regex) | Replace With |
|--------------|--------------|
| `@([\d.]+)` | (leave empty) |

6. Click "Replace All"
7. Save all files (`Ctrl+K S`)
8. Push:
```bash
git add .
git commit -m "Fix import version specifiers"
git push
```

---

## ✅ What This Does

**Before:**
```typescript
import * as AccordionPrimitive from "@radix-ui/react-accordion@1.2.3";
import { ChevronDownIcon } from "lucide-react@0.487.0";
import { toast } from "sonner@2.0.3";
```

**After:**
```typescript
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { ChevronDownIcon } from "lucide-react";
import { toast } from "sonner";
```

---

## 🎯 After Running

### Verify the fix:
```bash
# Check one file to verify
cat src/components/ui/accordion.tsx | grep "@1.2.3"
# Should return nothing if fixed
```

### Push to GitHub:
```bash
git add .
git commit -m "Fix import version specifiers"
git push
```

### Watch Netlify:
- Go to your Netlify dashboard
- Watch the deploy - should succeed in ~3 minutes!
- ✅ Your site will be LIVE!

---

## 🆘 If Build Still Fails

Check the Netlify logs for any remaining errors. Common issues:

1. **"Cannot find module figma:asset"** → These are in `/App.tsx` (root) not `/src/App.tsx`. They'll be ignored since only `/src` is built.

2. **"React is declared but never used"** → Run the Node script again, it should have fixed these.

3. **Other errors** → Share the error log!

---

## ⏱️ Total Time: 30 seconds

1. Run ONE command above (10 sec)
2. Git push (10 sec)
3. Wait for Netlify (3 min)
4. **Site is live!** 🎉

---

**START HERE:** Run `node fix-imports.js` NOW!
