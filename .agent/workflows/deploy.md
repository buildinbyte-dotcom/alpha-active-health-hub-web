---
description: Deploy the website to production
---

# Deployment Workflow

Follow these steps to deploy your website to production.

## Prerequisites

Before starting:
- [ ] Ensure you have a GitHub account
- [ ] Ensure you have a Vercel account
- [ ] Ensure you have your Sanity login credentials
- [ ] Test that your site builds locally: `cd web && npm run build`

---

## Step 1: Deploy Sanity Studio

Deploy your CMS to Sanity Cloud:

```bash
cd studio
npm run deploy
```

When prompted, choose a unique studio hostname (e.g., `alpha-active-health-studio`).

After deployment, configure CORS:

```bash
npx sanity@latest manage
```

In the browser:
1. Go to **Settings** → **API** → **CORS Origins**
2. Add `http://localhost:3000` (allow credentials)
3. Add your production domain when known (e.g., `https://yoursite.com`)

---

## Step 2: Push Code to GitHub

If not already done, push your code to GitHub:

```bash
# From project root
cd c:\Users\viraj\Documents\GitHub\website
git add .
git commit -m "Ready for deployment"
git push origin main
```

If you haven't set up a remote repository:
1. Create a new repository at https://github.com/new
2. Run: `git remote add origin https://github.com/YOUR_USERNAME/website.git`
3. Run: `git branch -M main`
4. Run: `git push -u origin main`

---

## Step 3: Deploy to Vercel

1. Go to https://vercel.com/dashboard
2. Click **Add New...** → **Project**
3. Import your GitHub repository
4. Configure:
   - **Root Directory:** `web`
   - **Framework Preset:** Next.js
5. Add environment variables:
   - `NEXT_PUBLIC_SANITY_PROJECT_ID` = your Sanity project ID
   - `NEXT_PUBLIC_SANITY_DATASET` = `production`
6. Click **Deploy**

---

## Step 4: Configure Custom Domain

In Vercel:
1. Go to **Settings** → **Domains**
2. Add your domain (e.g., `yourdomain.com`)
3. Copy the DNS records shown

In your DNS provider (GoDaddy, Namecheap, etc.):
1. Add **A Record**: `@` → `76.76.21.21` (verify IP in Vercel)
2. Add **CNAME Record**: `www` → `cname.vercel-dns.com`

Wait for DNS propagation (10 minutes to 48 hours).

---

## Step 5: Update Sanity CORS with Production Domain

Once your domain is live:

```bash
cd studio
npx sanity@latest manage
```

Add your production domain to CORS origins:
- `https://yourdomain.com` (allow credentials)
- `https://www.yourdomain.com` (allow credentials)

---

## Step 6: Verification

Test your deployed site:
- [ ] Visit `https://yourdomain.com`
- [ ] Verify SSL certificate (padlock icon)
- [ ] Test all pages and navigation
- [ ] Check browser console for errors (F12)
- [ ] Test content update from Sanity Studio

---

## Ongoing Updates

**Code Changes:**
```bash
git add .
git commit -m "Describe your changes"
git push
```
Vercel will auto-deploy in 2-5 minutes.

**Content Changes:**
1. Log in to Sanity Studio
2. Edit content
3. Click **Publish**
4. Changes appear on site in ~60 seconds

---

## Quick Reference

**Sanity Studio Deploy:**
```bash
cd studio && npm run deploy
```

**Sanity Management:**
```bash
cd studio && npx sanity@latest manage
```

**Test Local Build:**
```bash
cd web && npm run build && npm start
```

**Resources:**
- Detailed guide: `DEPLOYMENT_SIMPLE.md`
- Comprehensive guide: `docs/deployment_guide.md`
- Vercel Dashboard: https://vercel.com/dashboard
- Sanity Management: https://sanity.io/manage
