# 📌 Quick Reference - Westprint Deployment

## 🎯 3 Simple Steps to Deploy

```
1. Copy UI folder       → /components/ui/ to /src/components/ui/
2. Push to GitHub       → git init, add, commit, push
3. Deploy on Netlify    → Import repo, add env vars, deploy
```

**Total time: 20 minutes | Cost: $0**

---

## 📚 Which Guide to Read?

| If you want... | Read this |
|----------------|-----------|
| **Quick start** | `/START_HERE.md` ⭐ |
| **Step-by-step deployment** | `/DEPLOY.md` |
| **Project overview** | `/README.md` |
| **Cleanup info** | `/BEFORE_DEPLOY.md` |

---

## 🔑 Environment Variables (for Netlify)

```
VITE_SUPABASE_URL
https://hdcqpvezfqfrieuvtdkv.supabase.co

VITE_SUPABASE_ANON_KEY
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhkY3FwdmV6ZnFmcmlldXZ0ZGt2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjA3MTQ2MzEsImV4cCI6MjA3NjI5MDYzMX0.66TzzhiOhSyobSqSa1TJpzRwxbwyCk6O1DmDl6R_QrM
```

---

## 🌐 DNS Records (for westprint.com)

```
A Record:
Name:  @
Value: 75.2.60.5

CNAME Record:
Name:  www
Value: your-site-name.netlify.app
```

---

## 🚀 Deploy Commands

```bash
# Push to GitHub
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/westprint-website.git
git push -u origin main
```

---

## 🔄 Update Commands

```bash
# After making changes
git add .
git commit -m "Your changes"
git push
```

---

## ✅ Testing Checklist

After deployment, test:
- [ ] westprint.com loads
- [ ] www.westprint.com loads
- [ ] All 5 pages work
- [ ] Contact form works
- [ ] Mobile responsive
- [ ] HTTPS active

---

## 📧 Contact Form

Emails go to: **rhinografix@gmail.com**

---

## 🆘 Quick Troubleshooting

| Problem | Solution |
|---------|----------|
| Build fails | Check env vars in Netlify |
| 404 on refresh | Verify netlify.toml uploaded |
| Domain not working | Wait 24h, check DNS at dnschecker.org |
| Forms not working | Check browser console, verify env vars |

---

## 📞 Support Links

- Netlify: https://app.netlify.com
- DNS Checker: https://dnschecker.org
- Netlify Docs: https://docs.netlify.com
- GitHub: https://github.com

---

**Start deploying: `/START_HERE.md`**
