# Westprint Form Testing Guide

## Overview
Your Westprint website has **two quote request forms** that send emails via the Resend API:

1. **Homepage Hero Form** (simpler, 4 fields)
2. **Contact Page Form** (detailed, 9 fields)

Both forms are fully functional and ready to test!

---

## Current Email Configuration

### Email Recipient
- **Testing Email**: rhinografix@gmail.com
- **Production Email**: customercare@westprint.com (update when ready for production)

### Email Sender
- **Current**: onboarding@resend.dev (Resend's default testing domain)
- **Production**: Should be changed to a verified domain like `quotes@westprint.com`

---

## Form 1: Homepage Hero Form

### Location
- **URL**: Homepage (/)
- **Section**: Hero section, right side

### Fields
1. Full Name (required)
2. Phone Number (required)
3. Email Address (required)
4. Project Details (required, textarea)

### Features
- Smooth animations on scroll
- Real-time form validation
- Loading state with spinner during submission
- Success/error toast notifications
- Success message displayed for 5 seconds
- Form auto-clears on successful submission
- Disabled state during submission to prevent double-submit

### Email Template
- Subject: "New Quote Request from Homepage - Westprint"
- Professional gradient header (teal/cyan)
- Organized field display
- Clickable email and phone links
- Source identifier (homepage)

---

## Form 2: Contact Page Form

### Location
- **URL**: /contact (click "Contact" in navigation)
- **Section**: Main content area, left side

### Fields
1. First Name (required)
2. Last Name (required)
3. Company Name (optional)
4. Email (required)
5. Phone (required)
6. Service Needed (dropdown, optional)
   - Full-Color Printing
   - Direct Mail Programs
   - Graphic Design
   - Fulfillment Services
   - Labels & Packaging
   - Posters & Banners
   - Promotional Products
   - Online Ordering
   - Other
7. Estimated Quantity (dropdown, optional)
   - 1-100
   - 100-500
   - 500-1,000
   - 1,000-5,000
   - 5,000+
8. Project Timeline (dropdown, optional)
   - Rush (1-3 days)
   - Standard (1-2 weeks)
   - Flexible (2+ weeks)
9. Project Details (required, textarea)

### Features
- Enhanced UI with gradient accents
- Hover effects on all inputs
- Organized field groups
- Professional validation messages
- Loading spinner during submission
- Success/error toast notifications
- Form auto-clears on successful submission
- Security and privacy notes below form
- "Upload Files" button linking to WeTransfer

### Email Template
- Subject: "New Quote Request from Contact Page - Westprint"
- Professional gradient header (teal/cyan)
- All fields organized with labels
- Conditional display (only shows filled fields)
- Clickable email and phone links
- Source identifier (contact page)

---

## Testing Checklist

### ✅ Basic Functionality Tests

#### Homepage Form
- [ ] Navigate to homepage
- [ ] Scroll to hero section (form should fade in)
- [ ] Fill out all required fields
- [ ] Click "Request a Quote" button
- [ ] Verify button shows "Sending..." with spinner
- [ ] Check for success toast notification
- [ ] Verify form clears after success
- [ ] Check rhinografix@gmail.com for email

#### Contact Page Form
- [ ] Navigate to Contact page
- [ ] Fill out required fields only
- [ ] Submit and verify email received
- [ ] Test again with ALL fields filled
- [ ] Verify optional fields appear in email

### ✅ Validation Tests
- [ ] Try submitting empty forms (should show browser validation)
- [ ] Enter invalid email format
- [ ] Verify required field indicators work
- [ ] Test with special characters in text fields

### ✅ Error Handling Tests
- [ ] Test form with network disconnected
- [ ] Verify error toast appears with phone number
- [ ] Check that error message persists until dismissed
- [ ] Verify form data is retained after error

### ✅ Mobile Responsiveness Tests
- [ ] Test forms on mobile device (< 768px)
- [ ] Verify all fields are accessible
- [ ] Check that buttons are easy to tap
- [ ] Test keyboard behavior on mobile
- [ ] Verify toast notifications display correctly

### ✅ User Experience Tests
- [ ] Test tab order through form fields
- [ ] Verify focus states are visible
- [ ] Check hover effects on inputs
- [ ] Test form completion time (should be quick)
- [ ] Verify placeholder text is helpful

### ✅ Email Delivery Tests
- [ ] Check spam folder if email not in inbox
- [ ] Verify email formatting looks professional
- [ ] Test "mailto:" and "tel:" links in email
- [ ] Verify all submitted data appears correctly
- [ ] Check email on mobile email clients

---

## Common Issues & Solutions

### Issue: Email not received
**Solutions:**
1. Check spam/junk folder
2. Verify RESEND_API_KEY is set correctly
3. Check browser console for errors
4. Verify network connection
5. Check Resend dashboard for delivery status

### Issue: Form submission hangs
**Solutions:**
1. Check browser console for errors
2. Verify Supabase edge function is running
3. Check network tab for failed requests
4. Verify CORS is configured correctly

### Issue: Validation not working
**Solutions:**
1. Make sure `required` attributes are present
2. Check email field has `type="email"`
3. Verify browser supports HTML5 validation

### Issue: Toast not appearing
**Solutions:**
1. Verify Toaster component is present in component tree
2. Check that sonner library is imported correctly
3. Look for z-index conflicts with other elements

---

## Production Deployment Checklist

Before going live with these forms, update the following:

### Backend (server/index.tsx)
```typescript
// Line 225 - Change recipient email
to: ['customercare@westprint.com'], 

// Line 224 - Change sender (requires verified domain)
from: 'Westprint Quotes <quotes@westprint.com>',
```

### Recommended: Set Up Custom Domain for Sending
1. Add and verify westprint.com domain in Resend dashboard
2. Add required DNS records (SPF, DKIM, DMARC)
3. Update sender email to use verified domain
4. This improves deliverability and looks more professional

### Optional: Add Auto-Response
Consider adding an auto-response email to customers:
- Thank them for their inquiry
- Set expectations (24-hour response time)
- Provide phone number for urgent requests
- Include business hours

---

## Form Analytics (Future Enhancement)

Consider tracking:
- Form submission count
- Conversion rate (visitors vs. submissions)
- Field completion time
- Most selected services
- Common quantity ranges
- Preferred timelines
- Peak submission times

This data can help optimize the forms and understand customer needs.

---

## Testing Tools

### Browser DevTools
- Console: Check for errors
- Network: Monitor API requests
- Application: Check localStorage if needed
- Lighthouse: Test performance and accessibility

### Manual Testing
- Test in multiple browsers (Chrome, Firefox, Safari, Edge)
- Test on different devices (desktop, tablet, mobile)
- Test with screen readers for accessibility
- Test with slow network connection

### Email Testing
- Check inbox delivery
- Test on multiple email clients (Gmail, Outlook, Apple Mail)
- Verify mobile email rendering
- Check spam score if possible

---

## Support Contact

If you encounter any issues during testing:
- Check browser console for error messages
- Review network tab for failed requests
- Verify all environment variables are set
- Check Resend dashboard for delivery logs

---

## Next Steps

1. **Test both forms thoroughly** using checklist above
2. **Verify email delivery** to rhinografix@gmail.com
3. **Update email recipient** when ready for production
4. **Set up custom domain** in Resend for better deliverability
5. **Monitor submissions** in first few days after launch
6. **Consider adding analytics** to track form performance

---

**Good luck with testing! The forms are production-ready and waiting for your final verification.** 🚀
