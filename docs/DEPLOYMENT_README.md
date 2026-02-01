# 📚 Deployment Documentation

This folder contains all the guides you need to deploy your website successfully!

---

## 📖 Available Guides

### 1. **Quick Start** → [`DEPLOYMENT_SIMPLE.md`](../DEPLOYMENT_SIMPLE.md)
**Best for:** First-time deployers who want a simple, step-by-step guide  
**Time:** ~30 minutes  
**What it covers:** Foolproof instructions with no technical jargon

### 2. **Quick Checklist** → [`DEPLOYMENT_CHECKLIST.md`](../DEPLOYMENT_CHECKLIST.md)
**Best for:** Tracking your progress through deployment  
**Time:** Use alongside other guides  
**What it covers:** Printable checklist with fill-in-the-blank fields

### 3. **Comprehensive Guide** → [`deployment_guide.md`](deployment_guide.md)
**Best for:** Detailed reference with troubleshooting  
**Time:** ~30-60 minutes  
**What it covers:** Everything including edge cases and advanced configuration

### 4. **Command Workflow** → [`../.agent/workflows/deploy.md`](../.agent/workflows/deploy.md)
**Best for:** Quick command reference  
**Time:** Quick lookup  
**What it covers:** All commands in one place, use with `/deploy` command

---

## 🎯 Which Guide Should I Use?

```
Are you deploying for the first time?
│
├─ YES → Start with DEPLOYMENT_SIMPLE.md
│         Print DEPLOYMENT_CHECKLIST.md to track progress
│
└─ NO  → Already deployed before?
          │
          ├─ Need to redeploy → Use /deploy workflow
          │
          └─ Troubleshooting → See deployment_guide.md (Troubleshooting section)
```

---

## ⚡ Quick Deploy Command

If you want the fastest path, type this in your terminal:

```bash
# Just run this command and follow the prompts!
/deploy
```

Or open the workflow: `.agent/workflows/deploy.md`

---

## 🚀 Deployment Overview

Your website has **2 parts** to deploy:

1. **Sanity Studio** (CMS) → Deploys to `your-name.sanity.studio`
2. **Next.js Website** (Frontend) → Deploys to Vercel, then your custom domain

**Total time:** ~20-30 minutes (plus DNS wait time)

---

## 📋 What You Need

Before starting any guide, make sure you have:

- ✅ GitHub account ([signup](https://github.com/signup))
- ✅ Vercel account ([signup](https://vercel.com/signup))
- ✅ Sanity login (you should already have this)
- ✅ Domain DNS access (GoDaddy, Namecheap, etc.)

---

## 🎨 Visual Flow

![Deployment Process](../C:/Users/viraj/.gemini/antigravity/brain/2ff97fb3-1ba2-45da-b04a-ce9131e491bb/deployment_flowchart_1768561227103.png)

**Step 1:** Deploy Sanity Studio (~5 min)  
**Step 2:** Deploy to Vercel (~10 min)  
**Step 3:** Connect Custom Domain (~15 min + DNS wait)

---

## 🔗 Quick Links

| Resource | URL |
|----------|-----|
| Vercel Dashboard | https://vercel.com/dashboard |
| Sanity Management | https://sanity.io/manage |
| GitHub | https://github.com |
| DNS Checker | https://dnschecker.org |
| Google Search Console | https://search.google.com/search-console |

---

## 💡 Pro Tips

1. **Test locally first:** Run `cd web && npm run build` before deploying
2. **Use the checklist:** Print `DEPLOYMENT_CHECKLIST.md` to track your progress
3. **DNS takes time:** Domain propagation can take hours - be patient!
4. **Save your URLs:** Write down your Sanity Studio and Vercel URLs
5. **Keep credentials safe:** Store your Sanity project ID and tokens securely

---

## 🆘 Common Issues

| Issue | Quick Fix |
|-------|-----------|
| Application Error | Check environment variables in Vercel |
| Images not loading | Add domain to Sanity CORS |
| Domain not working | Wait for DNS propagation (use dnschecker.org) |
| Build failed | Check build logs, test `npm run build` locally |
| Changes not showing | Wait 60s, hard refresh (Ctrl+Shift+R) |

See [`deployment_guide.md`](deployment_guide.md) for detailed troubleshooting.

---

## 📞 Getting Help

1. **First:** Check the troubleshooting section in `deployment_guide.md`
2. **Then:** Review Vercel/Sanity documentation
3. **Finally:** Contact support:
   - Vercel: https://vercel.com/support
   - Sanity: https://sanity.io/help

---

## ✨ After Deployment

Once your site is live:

- 📊 Set up Google Analytics (optional)
- 🔍 Submit sitemap to Google Search Console
- 👥 Share Sanity Studio URL with content editors
- 📱 Test on multiple devices
- 🎉 Celebrate! 🎊

---

**Last Updated:** January 2026  
**Maintained by:** Development Team
