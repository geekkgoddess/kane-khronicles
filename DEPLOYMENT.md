# Netlify Deployment Guide - Kane Khrons

This guide walks you through deploying your Kane Khrons landing page to Netlify in under 5 minutes.

## Quick Start (Recommended: GitHub + Netlify)

### Step 1: Prepare Your Code

```bash
# Initialize git if not already done
git init
git add .
git commit -m "Initial Kane Khronicles commit"
```

### Step 2: Push to GitHub

1. Create a new repository on [GitHub](https://github.com/new)
   - Repository name: `kane-khronicles`
   - Make it **Public** (simpler for Netlify)
   - Do NOT initialize with README/license

2. Push your code:
```bash
git remote add origin https://github.com/geekkgoddess/kane-khronicles.git
git branch -M main
git push -u origin main
```

### Step 3: Deploy to Netlify

1. Go to [Netlify](https://app.netlify.com/signup)
   - Sign up with GitHub (easiest)
   - Authorize Netlify to access your GitHub account

2. Create new site:
   - Click "Add new site" → "Import an existing project"
   - Select GitHub
   - Find and select `kane-khrons`

3. Confirm build settings:
   - **Owner**: Your account
   - **Branch**: `main`
   - **Build command**: `npm run build` (auto-detected)
   - **Publish directory**: `build` (auto-detected)
   - Click "Deploy site"

4. Wait for deployment (usually 2-3 minutes)
   - Green checkmark = Success!
   - Your site is live at `https://your-site-name.netlify.app`

### Step 4: Configure Custom Domain (Optional)

1. In Netlify dashboard, go to Site settings → Domain management
2. Click "Add domain"
3. Enter your custom domain (e.g., `kanekronicles.com`)
4. Follow DNS configuration steps
5. Netlify auto-provides free SSL certificate

---

## Setup Newsletter Form

After deployment, your Netlify Forms are automatically active!

### To View Submissions:

1. Go to your Netlify site dashboard
2. Click "Forms" in the top nav
3. Click "newsletter"
4. See all subscriber emails

### To Get Email Notifications:

1. Go to Forms → newsletter → Click settings (gear icon)
2. Scroll to "Form notifications"
3. Add email address
4. Choose notification frequency
5. Save

### To Export Submissions:

1. Forms → newsletter
2. Click "Export" (top right)
3. Downloads as CSV

---

## Update Your Site After Deployment

### Option A: Simple Changes (Recommended)

1. Edit files in your text editor
2. Push changes to GitHub:
   ```bash
   git add .
   git commit -m "Update book description"
   git push
   ```
3. Netlify **automatically redeploys** within seconds
4. Your live site updates instantly

### Option B: Use Admin Panel

1. Visit your live site `/admin`
2. Log in with password
3. Add/edit/delete books
4. Changes save immediately in your browser

**Note**: Admin changes only persist on that device. To make permanent changes across all users, use GitHub method above.

---

## Environment Setup (Advanced)

### If You Need Environment Variables

1. In Netlify dashboard:
   - Site settings → Build & deploy → Environment
   - Add key/value pairs

2. In your code, access via `process.env.REACT_APP_*`

Example:
```javascript
const apiKey = process.env.REACT_APP_ADMIN_PASSWORD;
```

Then push to GitHub to redeploy with the variable.

---

## Troubleshooting Deployment

### Build Failed?

1. Check build logs:
   - Netlify dashboard → Deploys → (latest) → Click to expand
   - Read error messages

2. Common fixes:
   ```bash
   # Clear and reinstall dependencies
   rm -rf node_modules package-lock.json
   npm install
   npm run build
   ```

3. Commit and push:
   ```bash
   git add .
   git commit -m "Fix build issues"
   git push
   ```

### Site Shows 404 After Deployment?

- Check that `netlify.toml` exists in root
- Verify redirect rule for React Router:
  ```
  [[redirects]]
    from = "/*"
    to = "/index.html"
    status = 200
  ```

### Forms Not Working?

1. Verify form name is exactly `newsletter`:
   ```jsx
   <form name="newsletter" method="POST">
   ```

2. Rebuild and redeploy:
   ```bash
   git push
   ```

3. Test by submitting form
4. Check Forms dashboard for submission

### Site Loads Slow?

1. Netlify dashboard → Analytics
2. Check Time to First Byte (TTFB)
3. If high, contact Netlify support or upgrade plan

---

## Performance Optimization

### Image Optimization
- Replace placeholder images with real book covers
- Use .webp format when possible
- Netlify Image API handles optimization automatically

### Caching
- The `netlify.toml` includes cache headers
- Static files cached for 1 year
- HTML cached for 0 (always fresh)

### Monitor Performance
1. Netlify dashboard → Analytics
2. Lighthouse scores (auto-tested)
3. Aim for 90+ in all categories

---

## Updating Books via Git vs Admin Panel

| Method | Best For | Visibility |
|--------|----------|-----------|
| **Git + GitHub** | Permanent changes, collaborative edits | All users see updates |
| **Admin Panel** | Quick edits, testing | Only that browser sees |

**Recommendation**: Use Admin Panel for testing, Git for permanent updates.

---

## Backup Your Data

### Export Book Data

```javascript
// In browser console (DevTools):
JSON.stringify(JSON.parse(localStorage.getItem('kane_books')), null, 2)
// Copy output and save to books-backup.json
```

### Restore from Backup

```javascript
// In browser console:
const backup = { /* paste your backup here */ };
localStorage.setItem('kane_books', JSON.stringify(backup));
```

---

## Next Steps

1. ✅ Deploy to Netlify
2. ✅ Add your books via Admin Panel
3. ✅ Change admin password
4. ✅ Update social media links in Footer
5. ✅ Add custom domain
6. ✅ Monitor form submissions

---

## Need Help?

- Netlify Docs: https://docs.netlify.com
- React Router: https://reactrouter.com
- Tailwind CSS: https://tailwindcss.com
- Netlify Support: https://support.netlify.com

---

## Common Questions

**Q: Can I use my existing domain?**
A: Yes! Domain management in Netlify dashboard.

**Q: How much does Netlify cost?**
A: Free tier is perfect for this. Unlimited sites, builds, and bandwidth.

**Q: Can I change the site name?**
A: Yes, Netlify dashboard → Site settings → Site information.

**Q: How do I redirect www.kanekronicles.com to kanekronicles.com?**
A: Domain settings → Configure Netlify DNS or point to Netlify nameservers.

**Q: Can multiple people edit books?**
A: With current setup, only per-browser. For true multi-user, add Firebase/Supabase backend.

---

🎉 **You're all set! Your Kane Khronicles site is live!**
