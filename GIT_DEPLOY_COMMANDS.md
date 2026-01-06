# Git Commands for Deployment

Copy and paste these commands to deploy Westprint website to GitHub.

---

## 🎯 First Time Setup (Run Once)

### Step 1: Initialize Git Repository

```bash
git init
```

### Step 2: Add All Files

```bash
git add .
```

### Step 3: Create First Commit

```bash
git commit -m "Initial commit: Westprint website ready for production"
```

### Step 4: Add GitHub Remote

**IMPORTANT**: Replace `YOUR-USERNAME` with your actual GitHub username

```bash
git remote add origin https://github.com/YOUR-USERNAME/westprint-website.git
```

### Step 5: Set Main Branch

```bash
git branch -M main
```

### Step 6: Push to GitHub

```bash
git push -u origin main
```

---

## 🔄 Making Updates Later

After making changes to your code:

### Check What Changed

```bash
git status
```

### Add All Changes

```bash
git add .
```

### Commit with Message

```bash
git commit -m "Describe what you changed here"
```

Example commit messages:
- `git commit -m "Update contact phone number"`
- `git commit -m "Add new service to homepage"`
- `git commit -m "Fix mobile responsive issues"`

### Push to GitHub (Triggers Auto-Deploy)

```bash
git push origin main
```

---

## 🆘 Troubleshooting

### If you get "repository not found" error:

Make sure you created the repository on GitHub first:
1. Go to https://github.com/new
2. Create repository named `westprint-website`
3. Then run the commands again

### If you get "permission denied" error:

You may need to authenticate with GitHub:

```bash
# Use GitHub Personal Access Token
# Or set up SSH keys
```

Follow GitHub's authentication guide: https://docs.github.com/en/authentication

### If you made a mistake in commit message:

```bash
# Change last commit message
git commit --amend -m "New better message"
```

### If you want to see commit history:

```bash
git log --oneline
```

### If you want to undo changes (before commit):

```bash
# Discard all changes
git reset --hard HEAD

# Discard changes in specific file
git checkout -- filename.tsx
```

---

## 📋 Common Git Workflow

Your typical workflow after initial setup:

```bash
# 1. Make changes to files
# (edit code in your editor)

# 2. Check what changed
git status

# 3. Add changes
git add .

# 4. Commit with message
git commit -m "Update hero section text"

# 5. Push to GitHub (auto-deploys to Netlify)
git push origin main
```

---

## 🔐 GitHub Personal Access Token

If GitHub asks for a password, you need a Personal Access Token:

1. Go to https://github.com/settings/tokens
2. Click "Generate new token (classic)"
3. Give it a name: "Westprint Website"
4. Check scope: `repo` (full control)
5. Click "Generate token"
6. **Copy the token** (you won't see it again!)
7. Use this token as your password when Git asks

---

## ✅ Verification

After pushing to GitHub, verify:

1. Go to your repository: `https://github.com/YOUR-USERNAME/westprint-website`
2. You should see all your files
3. Latest commit message should be visible
4. All folders and files present

---

## 🚀 Next Steps

After pushing to GitHub:

1. Go to https://app.netlify.com
2. Click "Add new site" → "Import an existing project"
3. Choose GitHub
4. Select `westprint-website` repository
5. Deploy!

See `DEPLOY_NOW.md` for complete instructions.

---

## 📝 Quick Reference

| Command | Purpose |
|---------|---------|
| `git status` | See what files changed |
| `git add .` | Stage all changes |
| `git commit -m "message"` | Save changes with message |
| `git push origin main` | Upload to GitHub |
| `git log` | View commit history |
| `git pull origin main` | Download latest changes |

---

**Pro Tip**: Commit often! Make small, focused commits with clear messages. This makes it easier to track changes and roll back if needed.
