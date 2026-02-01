# 🚀 Simple Deployment Guide (Foolproof Edition)

This is a **no-nonsense, step-by-step guide** to deploy your website. Just follow the steps in order - no skipping!

---

## ⚡ Quick Overview

You have 2 things to deploy:
1. **Sanity Studio** (CMS for managing content) → Deploy to Sanity Cloud
2. **Next.js Website** (Frontend) → Deploy to Vercel

**Total Time:** ~20-30 minutes (most of it is waiting for DNS)

---

## 📋 Before You Start

Make sure you have:
- ✅ A GitHub account ([Sign up here](https://github.com/signup))
- ✅ A Vercel account ([Sign up here](https://vercel.com/signup))
- ✅ Your Sanity login (you should already have this)
- ✅ Access to your domain DNS (e.g., GoDaddy, Namecheap, etc.)

---

## Part 1: Deploy Sanity Studio (5 minutes)

This is your CMS where you'll edit website content.

### Step 1: Open Terminal in Studio Folder

```bash
cd c:\Users\viraj\Documents\GitHub\website\studio
```

### Step 2: Deploy the Studio

```bash
npx sanity login
npm run deploy
```

Or if that doesn't work:

```bash
npx sanity@latest deploy
```

### Step 3: Choose a Studio Name

When prompted, enter a unique name (e.g., `alpha-active-health-studio`)
- Use only lowercase letters, numbers, and hyphens
- This becomes your Studio URL: `https://your-name.sanity.studio`

### Step 4: Wait & Test

Wait for deployment to finish (~1-2 minutes), then:
1. Visit the URL it gives you (e.g., `https://your-name.sanity.studio`)
2. You should see your login page ✅

### Step 5: Configure CORS (Important!)

Run this command to open Sanity settings:

```bash
npx sanity@latest manage
```

Then in the browser:
1. Click on **Settings** → **API**
2. Scroll to **CORS Origins**
3. Click **Add CORS origin** and add these URLs:
   - `http://localhost:3000` (with credentials checked)
   - Your production domain when you know it (e.g., `https://yoursite.com`)

✅ **Part 1 Complete!** Your CMS is live.

---

## Part 2: Deploy Website to Vercel (10 minutes)

### Step 1: Push Code to GitHub

If you haven't already, initialize git and push to GitHub:

```bash
# From the root project directory
cd c:\Users\viraj\Documents\GitHub\website

# Check if git is already initialized
git status

# If not initialized, run:
git init
git add .
git commit -m "Ready for deployment"
```

Now create a GitHub repository:
1. Go to https://github.com/new
2. Name it `website` (or whatever you want)
3. Make it **Private** (recommended)
4. **Don't** check any boxes (README, gitignore, license)
5. Click **Create repository**

Push your code:

```bash
git remote add origin https://github.com/YOUR_USERNAME/website.git
git branch -M main
git push -u origin main
```

Replace `YOUR_USERNAME` with your actual GitHub username.

### Step 2: Create Vercel Project

1. Go to https://vercel.com/dashboard
2. Click **Add New...** → **Project**
3. Click **Import Git Repository**
4. Authorize GitHub access
5. Select your `website` repository

### Step 3: Configure Build Settings

> **CRITICAL:** These settings MUST be correct!

In the configuration screen:

**Framework Preset:** Next.js (should auto-detect)

**Root Directory:** Click **Edit** and type: `web`

**Build Command:** `npm run build` (default is fine)

**Install Command:** `npm install` (default is fine)

### Step 4: Add Environment Variables

> **SUPER IMPORTANT:** Without these, your site won't work!

Click **Environment Variables** and add these:

**Variable 1:**
- Name: `NEXT_PUBLIC_SANITY_PROJECT_ID`
- Value: `[Your Sanity Project ID]`

**Variable 2:**
- Name: `NEXT_PUBLIC_SANITY_DATASET`
- Value: `production`

**Where to find your Project ID:**
1. Open `c:\Users\viraj\Documents\GitHub\website\web\.env.local` (if it exists)
2. Or run `npx sanity@latest manage` from the `studio` folder
3. Or check `studio/sanity.config.ts` file

### Step 5: Deploy!

1. Click **Deploy**
2. Wait 2-5 minutes (grab a coffee ☕)
3. When done, you'll see a success screen
4. Click **Visit** to see your site live!

You'll get a URL like: `https://your-project-name.vercel.app`

### Step 6: Quick Test

Visit your Vercel URL and check:
- ✅ Homepage loads
- ✅ No error messages
- ✅ Press F12 to open console - check for errors

If you see errors about "Invalid Project ID", go back to Step 4!

✅ **Part 2 Complete!** Your website is live (but on a Vercel URL)

---

## Part 3: Connect Your Custom Domain (15 minutes + wait time)

### Step 1: Add Domain in Vercel

1. In Vercel, go to your project
2. Click **Settings** → **Domains**
3. Enter your domain (e.g., `yourdomain.com`)
4. Click **Add**

Vercel will show you DNS records to add. **Keep this page open!**

### Step 2: Update DNS at Your Domain Provider

> The exact steps vary by provider, but the concept is the same.

You need to add **2 DNS records**:

**Record 1: A Record**
- Type: `A`
- Name: `@` (or leave blank for root)
- Value: `76.76.21.21` (Vercel's IP - check your Vercel dashboard for current IP)
- TTL: `600` or `Auto`

**Record 2: CNAME Record**
- Type: `CNAME`
- Name: `www`
- Value: `cname.vercel-dns.com`
- TTL: `3600` or `Auto`

#### For GoDaddy:
1. Login → **My Products** → Find your domain → Click **DNS**
2. Click **Add** to add each record above

#### For Namecheap:
1. Login → **Domain List** → Click **Manage** → **Advanced DNS** tab
2. Click **Add New Record** for each record above

#### For Cloudflare / Others:
Look for "DNS Management" and add the records above.

### Step 3: Wait for DNS Propagation

DNS changes take time to spread globally:
- **Minimum:** 5-10 minutes
- **Typical:** 1-4 hours
- **Maximum:** 24-48 hours (rare)

**Check progress:**
1. Go to https://dnschecker.org
2. Enter your domain
3. Select **A** record type
4. Click **Search**
5. When you see Vercel's IP (`76.76.21.21`) globally, you're good!

### Step 4: Verify in Vercel

Go back to Vercel → **Settings** → **Domains**

The status should change from ❌ **Invalid** to ✅ **Valid**

Vercel will automatically add an SSL certificate (the padlock 🔒) - this takes 5-10 minutes.

### Step 5: Update Sanity CORS

Now that you have your custom domain, add it to Sanity CORS:

```bash
cd studio
npx sanity@latest manage
```

In the browser:
1. **Settings** → **API** → **CORS Origins**
2. Click **Add CORS origin**
3. Add: `https://yourdomain.com` (check "Allow credentials")
4. Add: `https://www.yourdomain.com` (check "Allow credentials")
5. Click **Save**

✅ **All Done!** Your website is live with your custom domain!

---

## 🎯 Final Verification Checklist

Visit your website and test:

- [ ] `https://yourdomain.com` loads
- [ ] `https://www.yourdomain.com` loads
- [ ] `http://yourdomain.com` redirects to HTTPS
- [ ] You see a padlock 🔒 in the browser (SSL is working)
- [ ] All pages work (home, services, team, etc.)
- [ ] Images load correctly
- [ ] No console errors (press F12 to check)

**Test Sanity Integration:**
1. Go to your Sanity Studio URL
2. Edit some content and click **Publish**
3. Wait 60 seconds
4. Refresh your website - changes should appear

---

## 🔧 Common Issues & Quick Fixes

### "Application Error" on Vercel
**Fix:** Check environment variables in Vercel Settings → Environment Variables

### Images Not Loading
**Fix:** Make sure you added your domain to Sanity CORS (Part 3, Step 5)

### Domain Not Working
**Fix:** 
1. Wait longer (DNS can take hours)
2. Check DNS records are entered correctly with https://dnschecker.org
3. Clear browser cache: Ctrl+Shift+Delete

### Changes in Sanity Not Showing
**Fix:**
1. Wait 60 seconds (caching)
2. Hard refresh: Ctrl+Shift+R
3. Check if changes saved in Sanity Studio

### Build Failed
**Fix:**
1. Check the build logs in Vercel
2. Make sure the project builds locally: `cd web && npm run build`
3. Check environment variables are set

---

## 📝 Quick Commands Reference

```bash
# Deploy Sanity Studio
cd studio
npm run deploy

# Open Sanity Management
cd studio
npx sanity@latest manage

# Test local build (before deploying)
cd web
npm run build

# Push code changes (triggers auto-deploy)
git add .
git commit -m "Your message"
git push
```

---

## 🎉 You're Live!

Your website is now deployed and accessible to the world!

**What's Next?**
- Share the Sanity Studio URL with content editors
- Set up Google Analytics (optional)
- Submit sitemap to Google Search Console: `https://yourdomain.com/sitemap.xml`
- Monitor your site in Vercel dashboard

**Making Updates:**
- **Code changes:** Push to GitHub → Vercel auto-deploys in 2-5 minutes
- **Content changes:** Edit in Sanity Studio → Publish → Changes appear in ~60 seconds

---

## 📚 Resources

- **Vercel Dashboard:** https://vercel.com/dashboard
- **Sanity Management:** https://sanity.io/manage
- **Detailed Guide:** See `docs/deployment_guide.md` for in-depth instructions
- **Help:** Vercel Docs (https://vercel.com/docs) | Sanity Docs (https://sanity.io/docs)

---

**Need help?** Check the detailed guide at `docs/deployment_guide.md` or contact support.
