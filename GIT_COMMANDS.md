# 📝 Git Commands Reference

Quick reference for common Git operations.

## 🚀 First Time Setup

### Initialize Repository and Push to GitHub

```bash
# 1. Initialize git repository
git init

# 2. Add all files
git add .

# 3. Create initial commit
git commit -m "Initial commit - Westprint website ready for deployment"

# 4. Add GitHub remote (replace YOUR-USERNAME with your GitHub username)
git remote add origin https://github.com/YOUR-USERNAME/westprint-website.git

# 5. Set main branch and push
git branch -M main
git push -u origin main
```

---

## 🔄 Daily Workflow

### Making Changes and Pushing Updates

```bash
# 1. Check what files changed
git status

# 2. Add specific files
git add src/components/ContactPage.tsx
# OR add all changed files
git add .

# 3. Commit with descriptive message
git commit -m "Update contact form validation"

# 4. Push to GitHub (triggers auto-deploy on Netlify)
git push
```

---

## 📋 Common Commands

### Check Status
```bash
git status                    # See what files changed
git log --oneline            # See commit history
git diff                     # See what changed in files
```

### Undo Changes
```bash
git checkout -- file.tsx     # Discard changes to a file
git reset HEAD~1             # Undo last commit (keep changes)
git reset --hard HEAD~1      # Undo last commit (discard changes)
```

### Branches (Advanced)
```bash
git branch feature-name      # Create new branch
git checkout feature-name    # Switch to branch
git checkout -b feature-name # Create and switch to branch
git merge feature-name       # Merge branch into current branch
```

### Pull Latest Changes
```bash
git pull                     # Get latest changes from GitHub
```

---

## 🔍 View Repository Info

```bash
git remote -v                # Show remote URL
git branch -a                # Show all branches
git log --graph --oneline    # Visual commit history
```

---

## 📝 Commit Message Best Practices

### Good Commit Messages:
```bash
git commit -m "Add email validation to contact form"
git commit -m "Fix mobile responsive layout on homepage"
git commit -m "Update company phone number"
git commit -m "Improve form error handling"
```

### Bad Commit Messages:
```bash
git commit -m "fix"           # Too vague
git commit -m "changes"       # Not descriptive
git commit -m "asdfasdf"      # Meaningless
```

---

## 🆘 Common Issues

### Issue: "fatal: remote origin already exists"
```bash
# Solution: Remove and re-add remote
git remote remove origin
git remote add origin https://github.com/YOUR-USERNAME/westprint-website.git
```

### Issue: "Your branch is behind 'origin/main'"
```bash
# Solution: Pull latest changes
git pull origin main
```

### Issue: Merge conflict
```bash
# Solution: Resolve conflicts manually
# 1. Open conflicted files
# 2. Look for <<<<<<< HEAD markers
# 3. Edit to keep desired changes
# 4. Remove conflict markers
# 5. Add and commit
git add .
git commit -m "Resolve merge conflict"
```

### Issue: Accidentally committed sensitive file
```bash
# Solution: Remove from git but keep locally
git rm --cached .env
git commit -m "Remove .env from git"
git push

# Make sure .env is in .gitignore
echo ".env" >> .gitignore
```

---

## 🔐 .gitignore Important Files

Make sure these are in `.gitignore`:
```
node_modules/
dist/
.env
.env.local
.DS_Store
.vscode/
.netlify/
```

---

## 🎯 Quick Reference

| Command | Description |
|---------|-------------|
| `git status` | Check what changed |
| `git add .` | Stage all changes |
| `git commit -m "message"` | Commit with message |
| `git push` | Push to GitHub |
| `git pull` | Pull from GitHub |
| `git log` | View history |
| `git diff` | See changes |

---

## 📚 Learn More

- **Git Documentation**: https://git-scm.com/doc
- **GitHub Guides**: https://guides.github.com
- **Interactive Tutorial**: https://learngitbranching.js.org

---

## 🎉 You're Ready!

With these commands, you can:
1. Push code to GitHub
2. Make updates to your site
3. Keep version history
4. Collaborate with others

Every `git push` triggers an automatic deploy on Netlify! 🚀
