# ✅ Deployment Checklist

Use this checklist before deploying to ensure everything is ready.

## Pre-Deployment

### Code Quality
- [ ] Run `npm install` successfully
- [ ] Run `npm run dev` - site works locally
- [ ] Run `npm run build` - build completes without errors
- [ ] Run `npm run preview` - production build works
- [ ] No TypeScript errors (`npm run lint`)
- [ ] No console errors in browser (F12)

### Forms Testing
- [ ] Test hero form locally (homepage)
- [ ] Test contact form locally (contact page)
- [ ] Access testing dashboard: `http://localhost:5173/?page=test-forms`
- [ ] Run both automated tests
- [ ] Verify emails arrive at:
  - [ ] estimating@westprint.com
  - [ ] rcarandang@advantageinc.com
- [ ] Check email formatting looks professional
- [ ] Verify reply-to is set to customer email

### Content Verification
- [ ] All pages load correctly (Home, Services, Industries, About, Contact)
- [ ] Contact information is correct:
  - [ ] Phone: (949) 749-4024
  - [ ] Email: estimating@westprint.com
  - [ ] Location: Anaheim, Southern California
  - [ ] Hours: Mon-Fri 8AM-5PM
- [ ] Images load properly
- [ ] Links work correctly
- [ ] Responsive on mobile/tablet/desktop

### Files Ready
- [ ] `.gitignore` exists
- [ ] `netlify.toml` configured
- [ ] `README.md` updated
- [ ] No sensitive data in code
- [ ] No `.env` files in repository

---

## GitHub Upload

- [ ] Create GitHub repository
- [ ] Run `git init` (if needed)
- [ ] Run `git add .`
- [ ] Run `git commit -m "Initial commit"`
- [ ] Add remote: `git remote add origin <repo-url>`
- [ ] Push to GitHub: `git push -u origin main`
- [ ] Verify files on GitHub
- [ ] Confirm `node_modules` is NOT uploaded
- [ ] Confirm `dist` is NOT uploaded

---

## Netlify Deployment

### Initial Setup
- [ ] Login to Netlify
- [ ] Connect GitHub repository
- [ ] Verify build settings:
  - [ ] Build command: `npm run build`
  - [ ] Publish directory: `dist`
  - [ ] Node version: 20.11.1
- [ ] Click "Deploy site"
- [ ] Wait for build to complete

### Post-Deploy Testing
- [ ] Site loads at Netlify URL
- [ ] Test form testing dashboard: `https://your-site.netlify.app/?page=test-forms`
- [ ] Run both automated tests
- [ ] Verify emails arrive to both recipients
- [ ] Test actual hero form on homepage
- [ ] Test actual contact form on contact page
- [ ] Check all pages work
- [ ] Test on mobile device
- [ ] Test on different browsers (Chrome, Firefox, Safari)
- [ ] No console errors (F12)

### Email Verification
- [ ] Check estimating@westprint.com inbox
- [ ] Check rcarandang@advantageinc.com inbox
- [ ] Check spam folders if needed
- [ ] Mark as "Not Spam" if needed
- [ ] Verify both recipients get all emails
- [ ] Verify email formatting is professional
- [ ] Test reply-to functionality

---

## Custom Domain (Optional)

- [ ] Add custom domain in Netlify: `westprint.com`
- [ ] Update nameservers at domain registrar
- [ ] Wait for DNS propagation (1-24 hours)
- [ ] Verify domain works: https://westprint.com
- [ ] Verify www subdomain: https://www.westprint.com
- [ ] HTTPS is enabled (automatic)
- [ ] Force HTTPS is enabled
- [ ] Test forms on custom domain

---

## Final Verification

### All Pages Working
- [ ] https://westprint.com (or Netlify URL)
- [ ] https://westprint.com/?page=services
- [ ] https://westprint.com/?page=industries
- [ ] https://westprint.com/?page=about
- [ ] https://westprint.com/?page=contact
- [ ] https://westprint.com/?page=test-forms

### Forms Working
- [ ] Hero form submits successfully
- [ ] Contact form submits successfully
- [ ] Success toast notifications appear
- [ ] Forms reset after submission
- [ ] No error messages
- [ ] Emails arrive to both recipients

### Performance
- [ ] Page load time < 3 seconds
- [ ] Images load quickly
- [ ] No layout shifts
- [ ] Smooth animations
- [ ] Mobile responsive

### Monitoring Setup
- [ ] Bookmark Netlify dashboard
- [ ] Bookmark Resend dashboard: https://resend.com/emails
- [ ] Set up email notifications for deploys
- [ ] Test form submissions weekly

---

## Success! 🎉

Your site is live when all checkboxes above are complete.

### What to Monitor:

1. **Daily**: Check email inboxes for quote requests
2. **Weekly**: Test forms to ensure they're working
3. **Monthly**: Review Resend dashboard for delivery stats
4. **As Needed**: Update content and push to GitHub

### Future Updates:

To update the site:
```bash
# Make changes to code
git add .
git commit -m "Description of changes"
git push
```

Netlify will automatically rebuild and deploy!

---

## Need Help?

- **Full Guide**: See `/DEPLOYMENT.md`
- **Quick Start**: See `/QUICK_DEPLOY.md`
- **Email Testing**: See `/RESEND_TESTING_GUIDE.md`
- **Main README**: See `/README.md`
