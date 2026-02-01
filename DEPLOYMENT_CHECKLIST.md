# 🎯 Quick Deployment Checklist

Use this checklist to track your deployment progress. Just follow each step in order!

---

## ✅ Pre-Deployment

- [ ] GitHub account created
- [ ] Vercel account created  
- [ ] Sanity login credentials ready
- [ ] Domain DNS access available
- [ ] Local build works: `cd web && npm run build`

---

## 📦 Part 1: Deploy Sanity Studio (5 min)

- [ ] Run `cd studio`
- [ ] Run `npm run deploy`
- [ ] Choose studio hostname (e.g., `my-site-studio`)
- [ ] Wait for deployment to complete
- [ ] Visit studio URL and verify login works
- [ ] Run `npx sanity@latest manage`
- [ ] Add CORS origin: `http://localhost:3000` ✅ Allow credentials

**Studio URL:** `https://______________.sanity.studio`

---

## 🚀 Part 2: Deploy to Vercel (10 min)

### Push to GitHub
- [ ] Run `git status` to check git status
- [ ] Create repo at https://github.com/new (name: `website`, private)
- [ ] Run `git remote add origin https://github.com/YOUR_USERNAME/website.git`
- [ ] Run `git branch -M main`
- [ ] Run `git push -u origin main`

### Configure Vercel
- [ ] Go to https://vercel.com/dashboard
- [ ] Click **Add New** → **Project**
- [ ] Import GitHub repository
- [ ] Set Root Directory to `web`
- [ ] Framework: Next.js ✅

### Environment Variables
- [ ] Add `NEXT_PUBLIC_SANITY_PROJECT_ID` = `_______________`
- [ ] Add `NEXT_PUBLIC_SANITY_DATASET` = `production`

### Deploy
- [ ] Click **Deploy**
- [ ] Wait 2-5 minutes ☕
- [ ] Click **Visit** to test
- [ ] Verify homepage loads without errors
- [ ] Check browser console (F12) for errors

**Vercel URL:** `https://______________.vercel.app`

---

## 🌐 Part 3: Custom Domain (15 min + wait)

### Add Domain in Vercel
- [ ] Vercel → Project → **Settings** → **Domains**
- [ ] Enter domain: `_______________`
- [ ] Click **Add**
- [ ] Note DNS records to add (keep page open!)

### Update DNS Provider
Go to your domain provider (GoDaddy, Namecheap, etc.):

- [ ] Add **A Record**: 
  - Name: `@`
  - Value: `76.76.21.21` (verify in Vercel!)
- [ ] Add **CNAME Record**:
  - Name: `www`
  - Value: `cname.vercel-dns.com`

### Wait & Verify
- [ ] Check propagation at https://dnschecker.org
- [ ] Wait until Vercel shows ✅ **Valid Configuration**
- [ ] Wait for SSL certificate (5-10 min)

### Update Sanity CORS
- [ ] Run `cd studio && npx sanity@latest manage`
- [ ] Add CORS: `https://yourdomain.com` ✅ Allow credentials
- [ ] Add CORS: `https://www.yourdomain.com` ✅ Allow credentials

**Production URL:** `https://_______________`

---

## 🎉 Final Verification

- [ ] `https://yourdomain.com` loads ✅
- [ ] `https://www.yourdomain.com` loads ✅
- [ ] See padlock 🔒 (SSL working) ✅
- [ ] All pages work (home, services, team, etc.) ✅
- [ ] Images load correctly ✅
- [ ] No console errors (F12) ✅
- [ ] Mobile responsive (test on phone) ✅

### Test Sanity Integration
- [ ] Login to Sanity Studio
- [ ] Edit some content
- [ ] Click **Publish**
- [ ] Wait 60 seconds
- [ ] Hard refresh website (Ctrl+Shift+R)
- [ ] Verify changes appear ✅

---

## 🎊 Deployed Successfully!

**Your URLs:**
- **Website:** https://_______________
- **Sanity Studio:** https://______________.sanity.studio
- **Vercel Dashboard:** https://vercel.com/dashboard

**Making Updates:**
- **Code:** `git push` → Auto-deploys in 2-5 min
- **Content:** Sanity Studio → Publish → Changes in ~60 sec

---

## 📞 Need Help?

- **Simple Guide:** See `DEPLOYMENT_SIMPLE.md`
- **Detailed Guide:** See `docs/deployment_guide.md`
- **Workflow:** Run `/deploy` command
- **Vercel Docs:** https://vercel.com/docs
- **Sanity Docs:** https://sanity.io/docs

---

**Date Deployed:** _______________  
**Deployed By:** _______________
