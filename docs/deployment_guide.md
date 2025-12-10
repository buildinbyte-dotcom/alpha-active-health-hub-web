# Deployment Guide: Vercel + Sanity

This guide provides step-by-step instructions for deploying the Alpha Active Health Hub website to Vercel and hosting the Sanity Studio CMS.

---

## Table of Contents

1. [Prerequisites](#prerequisites)
2. [Part 1: Deploy Sanity Studio](#part-1-deploy-sanity-studio)
3. [Part 2: Deploy Next.js App to Vercel](#part-2-deploy-nextjs-app-to-vercel)
4. [Part 3: Configure DNS](#part-3-configure-dns)
5. [Part 4: Post-Deployment Verification](#part-4-post-deployment-verification)
6. [Troubleshooting](#troubleshooting)

---

## Prerequisites

Before you begin, ensure you have:

- [ ] Git installed on your computer
- [ ] GitHub account (create at https://github.com/signup)
- [ ] Vercel account (create at https://vercel.com/signup)
- [ ] Sanity account (you should already have this)
- [ ] Access to your domain DNS settings (e.g., GoDaddy, Namecheap)
- [ ] Project built successfully locally (`npm run build` in the `web` folder)

---

## Part 1: Deploy Sanity Studio

Sanity Studio needs to be deployed so you can manage content from anywhere.

### Step 1.1: Prepare Sanity Studio

1. **Navigate to the studio directory:**
   ```bash
   cd studio
   ```

2. **Verify your Sanity configuration:**
   ```bash
   npx sanity@latest manage
   ```
   This will open the Sanity management dashboard in your browser.

### Step 1.2: Deploy Sanity Studio

1. **Deploy the studio:**
   ```bash
   npx sanity@latest deploy
   ```

2. **Choose a studio hostname:**
   - You'll be prompted to enter a hostname (e.g., `alpha-active-health`)
   - This will be your studio URL: `https://alpha-active-health.sanity.studio`
   - Must be unique across all Sanity projects
   - Use lowercase letters, numbers, and hyphens only

3. **Wait for deployment:**
   - The deployment process will bundle and upload your studio
   - Takes approximately 1-2 minutes

4. **Verify deployment:**
   - Once complete, you'll receive a URL like: `https://your-studio-name.sanity.studio`
   - Visit this URL in your browser
   - You should see your Sanity Studio login page

### Step 1.3: Configure Studio CORS Settings

Allow your production domain to access Sanity API:

1. **Open Sanity Management:**
   ```bash
   npx sanity@latest manage
   ```

2. **Navigate to API settings:**
   - Click on your project
   - Go to **Settings** → **API**
   - Scroll to **CORS Origins**

3. **Add allowed origins:**
   - Click **Add CORS origin**
   - Add: `https://alphaactivehealth.com.au`
   - Check: **Allow credentials**
   - Click **Save**
   
   Repeat for:
   - `https://www.alphaactivehealth.com.au`
   - `http://localhost:3000` (for local development)

4. **Save changes**

---

## Part 2: Deploy Next.js App to Vercel

### Step 2.1: Push Code to GitHub

1. **Initialize Git repository (if not already done):**
   ```bash
   cd c:\Users\viraj\Documents\GitHub\website
   git init
   ```

2. **Add all files:**
   ```bash
   git add .
   ```

3. **Commit your code:**
   ```bash
   git commit -m "Initial commit - Ready for deployment"
   ```

4. **Create a new repository on GitHub:**
   - Go to https://github.com/new
   - Repository name: `website` (or your preferred name)
   - Make it **Private** (recommended for client projects)
   - **Do NOT** initialize with README, .gitignore, or license
   - Click **Create repository**

5. **Push to GitHub:**
   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/website.git
   git branch -M main
   git push -u origin main
   ```
   Replace `YOUR_USERNAME` with your actual GitHub username.

### Step 2.2: Import Project to Vercel

1. **Go to Vercel Dashboard:**
   - Visit https://vercel.com/dashboard
   - Sign in with your account

2. **Create New Project:**
   - Click **Add New...** → **Project**
   - Click **Import Git Repository**

3. **Import from GitHub:**
   - Click **Continue with GitHub**
   - Authorize Vercel to access your GitHub account
   - Select the repository you just created

4. **Configure Project:**
   - **Framework Preset:** Next.js (should auto-detect)
   - **Root Directory:** Click **Edit** and set to `web`
   - **Build Command:** `npm run build` (default, should be auto-filled)
   - **Output Directory:** `.next` (default, should be auto-filled)
   - **Install Command:** `npm install` (default)

### Step 2.3: Configure Environment Variables

> **CRITICAL:** Your app won't work without these environment variables!

1. **Expand the "Environment Variables" section**

2. **Add the following variables:**

   **Variable 1:**
   - **Name:** `NEXT_PUBLIC_SANITY_PROJECT_ID`
   - **Value:** Your Sanity project ID (find it in `web/.env.local`)
   - **Environment:** Production (check all)

   **Variable 2:**
   - **Name:** `NEXT_PUBLIC_SANITY_DATASET`
   - **Value:** `production` (or your dataset name)
   - **Environment:** Production (check all)

   **Variable 3 (Optional - for preview mode):**
   - **Name:** `SANITY_API_TOKEN`
   - **Value:** Your Sanity API token (create one if needed)
   - **Environment:** Production

3. **To get your values:**
   - Open `c:\Users\viraj\Documents\GitHub\website\web\.env.local`
   - Copy the values exactly as they appear

### Step 2.4: Deploy

1. **Click "Deploy"**
   - Vercel will start building your project
   - This takes 2-5 minutes for the first deployment

2. **Monitor the deployment:**
   - You'll see real-time build logs
   - Wait for "Build Completed" message

3. **Get your deployment URL:**
   - Once complete, you'll see a success message
   - Your site will be live at: `https://your-project-name.vercel.app`
   - Click **Visit** to view your deployed site

### Step 2.5: Verify Deployment

1. **Visit your Vercel URL**
2. **Check that:**
   - ✅ Homepage loads correctly
   - ✅ Team members from Sanity are displayed
   - ✅ Images load from Sanity CDN
   - ✅ Navigation works
   - ✅ No console errors (press F12 to check)

---

## Part 3: Configure DNS

Now point your custom domain to Vercel.

### Step 3.1: Add Domain to Vercel

1. **In Vercel Dashboard:**
   - Go to your project
   - Click **Settings** tab
   - Click **Domains** in the left sidebar

2. **Add your domain:**
   - Enter: `alphaactivehealth.com.au`
   - Click **Add**

3. **Vercel will provide DNS instructions:**
   - You'll see the records you need to add
   - Keep this page open for reference

### Step 3.2: Configure DNS at Your Domain Provider

The exact steps depend on your DNS provider (GoDaddy, Namecheap, etc.), but the process is similar.

#### For GoDaddy:

1. **Log in to GoDaddy:**
   - Go to https://dcc.godaddy.com/domains
   - Find your domain `alphaactivehealth.com.au`
   - Click **DNS**

2. **Add A Record (for root domain):**
   - Click **Add** → **A**
   - **Name:** `@`
   - **Value:** `76.76.21.21` (Vercel's IP - verify in your Vercel dashboard)
   - **TTL:** `600` seconds (10 minutes)
   - Click **Save**

3. **Add CNAME Record (for www):**
   - Click **Add** → **CNAME**
   - **Name:** `www`
   - **Value:** `cname.vercel-dns.com`
   - **TTL:** `3600` seconds (1 hour)
   - Click **Save**

#### For Namecheap:

1. **Log in to Namecheap:**
   - Go to https://www.namecheap.com
   - Navigate to **Domain List**
   - Click **Manage** next to your domain

2. **Go to Advanced DNS:**
   - Click **Advanced DNS** tab

3. **Add A Record:**
   - Click **Add New Record**
   - **Type:** `A Record`
   - **Host:** `@`
   - **Value:** `76.76.21.21`
   - **TTL:** `Automatic`
   - Click **Save**

4. **Add CNAME Record:**
   - Click **Add New Record**
   - **Type:** `CNAME Record`
   - **Host:** `www`
   - **Value:** `cname.vercel-dns.com`
   - **TTL:** `Automatic`
   - Click **Save**

#### For Other Providers:

Look for "DNS Management" or "DNS Settings" in your domain control panel and add the same A and CNAME records as above.

> **Important:** Always use the exact IP address and CNAME value shown in your Vercel dashboard, as these may change.

### Step 3.3: Wait for DNS Propagation

1. **Initial wait:**
   - Wait at least 10-15 minutes after adding DNS records

2. **Check DNS propagation:**
   - Visit https://dnschecker.org
   - Enter `alphaactivehealth.com.au`
   - Select **A** record type
   - Click **Search**
   - You should see Vercel's IP address (76.76.21.21) globally

3. **Typical propagation times:**
   - Minimum: 5-10 minutes
   - Average: 1-4 hours
   - Maximum: 24-48 hours (rare)

### Step 3.4: Verify Domain in Vercel

1. **Return to Vercel Domains settings**
2. **The status should change from "Invalid Configuration" to "Valid Configuration"**
3. **SSL Certificate:**
   - Vercel automatically provisions an SSL certificate
   - This happens within minutes of DNS verification
   - Status will show "Active" once ready

---

## Part 4: Post-Deployment Verification

### Step 4.1: Check Live Website

Visit your production domain:

1. **Test URLs:**
   - ✅ https://alphaactivehealth.com.au
   - ✅ https://www.alphaactivehealth.com.au
   - ✅ http://alphaactivehealth.com.au (should redirect to HTTPS)

2. **Verify SSL:**
   - Look for the padlock icon in the browser
   - Click it to view certificate details
   - Should show "Connection is secure"

### Step 4.2: Test All Pages

Navigate through your site and verify:

- ✅ Homepage loads
- ✅ Team page (`/team`) works
- ✅ Individual doctor pages load
- ✅ Contact page works
- ✅ All images load
- ✅ Navigation menu works
- ✅ Footer displays correctly

### Step 4.3: Test Sanity Integration

1. **Log in to Sanity Studio:**
   - Go to `https://your-studio-name.sanity.studio`
   - Log in with your credentials

2. **Make a test change:**
   - Edit a doctor's bio or name
   - Click **Publish**

3. **Verify on website:**
   - Wait 30-60 seconds (for ISR cache)
   - Refresh your production website
   - Changes should appear

> **Note:** Next.js uses Incremental Static Regeneration (ISR). Changes may take up to 60 seconds to appear.

### Step 4.4: Test Mobile Responsiveness

1. **On your phone:**
   - Visit https://alphaactivehealth.com.au
   - Test navigation menu
   - Scroll through pages
   - Verify images load

2. **Or use browser DevTools:**
   - Press F12
   - Click the device toolbar icon
   - Test different device sizes

### Step 4.5: Submit to Search Engines

#### Google Search Console:

1. **Go to:** https://search.google.com/search-console
2. **Add property:** `alphaactivehealth.com.au`
3. **Verify ownership:** Use DNS verification method
4. **Submit sitemap:**
   - Go to **Sitemaps**
   - Enter: `https://alphaactivehealth.com.au/sitemap.xml`
   - Click **Submit**

#### Bing Webmaster Tools:

1. **Go to:** https://www.bing.com/webmasters
2. **Add site:** `https://alphaactivehealth.com.au`
3. **Verify ownership**
4. **Submit sitemap:** `https://alphaactivehealth.com.au/sitemap.xml`

---

## Troubleshooting

### Issue: "Application Error" or Blank Page

**Solution:**
1. Check environment variables in Vercel
2. Go to **Settings** → **Environment Variables**
3. Verify all variables are set correctly
4. Redeploy after fixing: **Deployments** → **...** → **Redeploy**

### Issue: Images Not Loading from Sanity

**Solution:**
1. Check Sanity CORS settings
2. Ensure production domain is added to allowed origins
3. Verify image URLs in Sanity dashboard
4. Check browser console for errors (F12)

### Issue: DNS Not Propagating

**Solution:**
1. Verify DNS records are entered correctly
2. Check for typos in IP address or CNAME
3. Use https://dnschecker.org to monitor
4. Wait longer (can take up to 48 hours)
5. Clear browser cache: Ctrl+Shift+Delete

### Issue: SSL Certificate Not Working

**Solution:**
1. Ensure DNS is fully propagated first
2. In Vercel, go to **Domains**
3. Click **Refresh** next to your domain
4. Wait 5-10 minutes
5. If still failing, remove and re-add the domain

### Issue: Changes Not Appearing After Publishing in Sanity

**Solution:**
1. Wait 60 seconds (ISR revalidation time)
2. Hard refresh browser: Ctrl+Shift+R
3. Check if changes are visible in Sanity Studio
4. Verify API token has correct permissions
5. Check browser console for API errors

### Issue: Build Failed on Vercel

**Solution:**
1. Check build logs in Vercel dashboard
2. Common causes:
   - Missing environment variables
   - TypeScript errors
   - Missing dependencies
3. Test build locally first: `npm run build`
4. Fix errors and push to GitHub
5. Vercel will auto-deploy on push

---

## Maintenance & Updates

### Making Code Changes:

1. **Make changes locally**
2. **Test thoroughly:** `npm run dev`
3. **Commit changes:**
   ```bash
   git add .
   git commit -m "Description of changes"
   ```
4. **Push to GitHub:**
   ```bash
   git push
   ```
5. **Vercel auto-deploys:** Changes will be live in 2-5 minutes

### Updating Content:

1. **Log in to Sanity Studio:** `https://your-studio-name.sanity.studio`
2. **Edit content**
3. **Click Publish**
4. **Wait 60 seconds** for changes to appear on website

### Monitoring:

1. **Vercel Analytics:**
   - Free tier includes basic analytics
   - View in Vercel dashboard → **Analytics**

2. **Google Analytics (Optional):**
   - Add Google Analytics tracking code to `layout.tsx`
   - Follow Google Analytics setup guide

---

## Quick Reference

### Important URLs:

| Service | URL |
|---------|-----|
| Production Website | https://alphaactivehealth.com.au |
| Vercel Dashboard | https://vercel.com/dashboard |
| Sanity Studio | https://your-studio-name.sanity.studio |
| Sanity Management | https://www.sanity.io/manage |
| GitHub Repository | https://github.com/YOUR_USERNAME/website |

### Environment Variables:

```env
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
NEXT_PUBLIC_SANITY_DATASET=production
SANITY_API_TOKEN=your_token
```

### DNS Records:

| Type | Name | Value |
|------|------|-------|
| A | @ | 76.76.21.21 |
| CNAME | www | cname.vercel-dns.com |

*(Always verify exact values in your Vercel dashboard)*

---

## Support Resources

- **Vercel Documentation:** https://vercel.com/docs
- **Sanity Documentation:** https://www.sanity.io/docs
- **Next.js Documentation:** https://nextjs.org/docs
- **Vercel Support:** https://vercel.com/support

---

## Checklist Summary

Use this checklist to track your deployment progress:

### Sanity Studio:
- [ ] Deployed studio to Sanity hosting
- [ ] Configured CORS origins
- [ ] Verified studio is accessible online

### Vercel Deployment:
- [ ] Pushed code to GitHub
- [ ] Created Vercel project
- [ ] Configured root directory as `web`
- [ ] Added all environment variables
- [ ] Verified deployment successful
- [ ] Tested Vercel URL

### DNS Configuration:
- [ ] Added A record for root domain
- [ ] Added CNAME record for www subdomain
- [ ] Waited for DNS propagation
- [ ] Verified domain in Vercel
- [ ] SSL certificate active

### Post-Deployment:
- [ ] All pages load correctly
- [ ] Images load from Sanity
- [ ] Mobile responsive
- [ ] Test content update from Sanity
- [ ] Submitted sitemap to search engines
- [ ] Verified in Google Search Console

---

🎉 **Congratulations!** Your website is now live and ready to serve patients in Bella Vista and beyond!
