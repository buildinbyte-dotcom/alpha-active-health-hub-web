# SEO Guide - Alpha Active Health Hub

This document provides comprehensive SEO implementation details and best practices for the Alpha Active Health Hub website.

---

## Table of Contents

1. [Current SEO Implementation](#current-seo-implementation)
2. [Meta Tags Configuration](#meta-tags-configuration)
3. [Sitemap Configuration](#sitemap-configuration)
4. [Robots.txt Configuration](#robotstxt-configuration)
5. [Open Graph & Social Media](#open-graph--social-media)
6. [Testing & Validation](#testing--validation)
7. [Ongoing SEO Best Practices](#ongoing-seo-best-practices)

---

## Current SEO Implementation

### ✅ Implemented Features

- **Meta Tags**: Comprehensive title, description, and keywords
- **Open Graph Tags**: Facebook and LinkedIn preview optimization
- **Twitter Cards**: Twitter sharing optimization
- **Sitemap.xml**: Dynamic sitemap generation for search engines
- **Robots.txt**: Search engine crawling directives
- **Semantic HTML**: Proper heading structure and semantic elements
- **Mobile-Friendly**: Responsive design across all devices
- **Fast Loading**: Optimized Next.js performance
- **Accessibility**: 94/100 Lighthouse score

---

## Meta Tags Configuration

### Location
`web/src/app/layout.tsx`

### Current Implementation

```tsx
export const metadata: Metadata = {
  metadataBase: new URL('https://alphaactivehealth.com.au'),
  title: {
    default: "Alpha Active Health Hub - Expert Rheumatology & Physiotherapy",
    template: "%s | Alpha Active Health Hub"
  },
  description: "Premier rheumatology and physiotherapy specialists in Bella Vista. Expert care for arthritis, autoimmune conditions, and musculoskeletal health.",
  keywords: ["rheumatology", "physiotherapy", "arthritis", "autoimmune", "Bella Vista", "NSW", "specialist", "musculoskeletal"],
  authors: [{ name: "Alpha Active Health Hub" }],
  creator: "Alpha Active Health Hub",
  publisher: "Alpha Active Health Hub",
  openGraph: {
    type: 'website',
    locale: 'en_AU',
    url: 'https://alphaactivehealth.com.au',
    title: 'Alpha Active Health Hub - Expert Rheumatology & Physiotherapy',
    description: 'Premier rheumatology and physiotherapy specialists in Bella Vista. Expert care for arthritis, autoimmune conditions, and musculoskeletal health.',
    siteName: 'Alpha Active Health Hub',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Alpha Active Health Hub - Expert Rheumatology & Physiotherapy',
    description: 'Premier rheumatology and physiotherapy specialists in Bella Vista.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};
```

### Key Benefits

- **Title Template**: Automatically appends site name to page titles
- **metadataBase**: Ensures all relative URLs are properly resolved
- **Keywords**: Targets medical and location-specific terms
- **Robots Directives**: Allows full indexing and rich snippet display

---

## Sitemap Configuration

### Location
`web/src/app/sitemap.ts`

### Current Implementation

```typescript
import { MetadataRoute } from 'next'
 
export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://alphaactivehealth.com.au'
  
  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${baseUrl}/team`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/services`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/new-patients`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.6,
    },
  ]
}
```

### Sitemap URL
`https://alphaactivehealth.com.au/sitemap.xml`

### Priority Levels Explained

| Priority | Usage | Applied To |
|----------|-------|------------|
| 1.0 | Homepage, most important page | `/` |
| 0.8 | Major sections, high value | `/team`, `/services` |
| 0.7 | Important pages | `/new-patients` |
| 0.6 | Standard pages | `/contact` |
| 0.5 | Blog posts, articles | (future use) |

### Update Frequencies

- **Weekly**: Homepage (frequently updated content)
- **Monthly**: Service and team pages (occasional updates)
- **Yearly**: Static information pages

---

## Robots.txt Configuration

### Location
`web/src/app/robots.ts`

### Current Implementation

```typescript
import { MetadataRoute } from 'next'
 
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/api/',
    },
    sitemap: 'https://alphaactivehealth.com.au/sitemap.xml',
  }
}
```

### Robots.txt URL
`https://alphaactivehealth.com.au/robots.txt`

### What This Does

- **Allow all crawlers**: `User-agent: *` with `Allow: /`
- **Block API routes**: Prevents indexing of `/api/*` endpoints
- **Sitemap reference**: Tells search engines where to find the sitemap

---

## Open Graph & Social Media

### Open Graph Tags

When someone shares your website on Facebook, LinkedIn, or other social platforms, these tags control how the preview looks:

```tsx
openGraph: {
  type: 'website',
  locale: 'en_AU',
  url: 'https://alphaactivehealth.com.au',
  title: 'Alpha Active Health Hub - Expert Rheumatology & Physiotherapy',
  description: 'Premier rheumatology and physiotherapy specialists in Bella Vista...',
  siteName: 'Alpha Active Health Hub',
}
```

### Twitter Cards

```tsx
twitter: {
  card: 'summary_large_image',
  title: 'Alpha Active Health Hub - Expert Rheumatology & Physiotherapy',
  description: 'Premier rheumatology and physiotherapy specialists in Bella Vista.',
}
```

### Adding Open Graph Images (Future Enhancement)

To add preview images for social sharing:

1. **Create images:**
   - Size: 1200x630 pixels (Facebook/LinkedIn)
   - Format: JPG or PNG
   - Content: Logo, tagline, professional imagery

2. **Add to public folder:**
   - Place in: `web/public/og-image.jpg`

3. **Update metadata:**
   ```tsx
   openGraph: {
     images: [
       {
         url: '/og-image.jpg',
         width: 1200,
         height: 630,
         alt: 'Alpha Active Health Hub',
       },
     ],
     // ... rest of config
   }
   ```

### Test Social Previews

- **Facebook**: https://developers.facebook.com/tools/debug/
- **LinkedIn**: https://www.linkedin.com/post-inspector/
- **Twitter**: https://cards-dev.twitter.com/validator

---

## Testing & Validation

### 1. Google Search Console

**Setup Steps:**

1. Go to: https://search.google.com/search-console
2. Add property: `alphaactivehealth.com.au`
3. Verify ownership (DNS TXT record or HTML file)
4. Submit sitemap: `https://alphaactivehealth.com.au/sitemap.xml`

**What to Monitor:**

- **Coverage**: Pages indexed vs. excluded
- **Performance**: Clicks, impressions, CTR, position
- **Enhancements**: Mobile usability, Core Web Vitals
- **Manual Actions**: Penalties (should be none)

### 2. Lighthouse SEO Audit

**Run in Chrome DevTools:**

1. Press F12
2. Go to **Lighthouse** tab
3. Select **SEO** category
4. Click **Analyze page load**

**Target Score:** 90-100

**Common Issues to Fix:**
- Missing meta descriptions
- Images without alt text
- Links without descriptive text
- Mobile viewport not configured

### 3. Rich Results Test

Test for rich snippets eligibility:

- Visit: https://search.google.com/test/rich-results
- Enter your URL
- Check for structured data support

### 4. Mobile-Friendly Test

Google's mobile-friendly test:

- Visit: https://search.google.com/test/mobile-friendly
- Enter: `https://alphaactivehealth.com.au`
- Verify: "Page is mobile-friendly"

---

## Ongoing SEO Best Practices

### Content Optimization

#### 1. Keyword Strategy

**Primary Keywords:**
- Rheumatologist Bella Vista
- Physiotherapy Bella Vista
- Arthritis specialist NSW
- Autoimmune doctor Sydney

**Long-tail Keywords:**
- When to see a rheumatologist
- Rheumatoid arthritis treatment options
- Specialist for joint pain Bella Vista

#### 2. Content Guidelines

- **Title Tags**: 50-60 characters, include primary keyword
- **Meta Descriptions**: 150-160 characters, compelling CTA
- **Headings**: Use H1 once, H2-H6 hierarchically
- **Content Length**: Minimum 300 words per page
- **Internal Linking**: Link related pages together
- **External Links**: Link to authoritative medical sources

#### 3. Image Optimization

All images should have:
- **Descriptive file names**: `rheumatologist-dr-smith.jpg` not `IMG_1234.jpg`
- **Alt text**: Describe the image for accessibility and SEO
- **Compressed size**: Use WebP format, under 200KB
- **Lazy loading**: Enabled by default in Next.js Image component

Example:
```tsx
<Image 
  src="/doctor.jpg" 
  alt="Dr. Smith, rheumatologist at Alpha Active Health Hub in Bella Vista"
  width={500}
  height={600}
/>
```

### Technical SEO

#### 1. Core Web Vitals

Monitor and optimize:

- **LCP (Largest Contentful Paint)**: < 2.5s
- **FID (First Input Delay)**: < 100ms
- **CLS (Cumulative Layout Shift)**: < 0.1

Next.js automatically optimizes these with:
- Image optimization
- Font optimization
- Code splitting

#### 2. Page Speed

**Check speed:**
- PageSpeed Insights: https://pagespeed.web.dev/
- GTmetrix: https://gtmetrix.com/

**Optimization tips:**
- Use Next.js `<Image>` component (already implemented)
- Minimize third-party scripts
- Enable caching headers (Vercel handles this)
- Use CDN for assets (Vercel and Sanity both use CDNs)

#### 3. HTTPS & Security

- ✅ HTTPS enabled via Vercel (Let's Encrypt)
- ✅ Security headers configured by Vercel
- ✅ No mixed content warnings

### Local SEO

#### 1. Google Business Profile

**Important for local medical practice:**

1. Create/claim Google Business Profile
2. Add business information:
   - **Name**: Alpha Active Health Hub
   - **Address**: Bella Vista location
   - **Phone**: Practice phone number
   - **Website**: https://alphaactivehealth.com.au
   - **Hours**: Operating hours
   - **Categories**: Rheumatologist, Physiotherapy Clinic
3. Add photos of clinic, staff, facilities
4. Encourage patient reviews (within medical guidelines)

#### 2. Local Schema Markup (Future Enhancement)

Add structured data for local business:

```tsx
// In layout.tsx or page.tsx
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "MedicalClinic",
  "name": "Alpha Active Health Hub",
  "image": "https://alphaactivehealth.com.au/og-image.jpg",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Your Street Address",
    "addressLocality": "Bella Vista",
    "addressRegion": "NSW",
    "postalCode": "2153",
    "addressCountry": "AU"
  },
  "telephone": "+61-X-XXXX-XXXX",
  "url": "https://alphaactivehealth.com.au",
  "openingHours": "Mo-Fr 09:00-17:00"
}
</script>
```

### Content Strategy

#### 1. Blog/Resources Section (Future)

Benefits:
- Regular fresh content for SEO
- Answer patient questions
- Target long-tail keywords
- Establish medical authority

**Article Ideas:**
- "Understanding Rheumatoid Arthritis: Symptoms and Treatment"
- "When Should You See a Rheumatologist?"
- "Common Autoimmune Conditions Explained"
- "Preparing for Your First Rheumatology Appointment"

#### 2. Patient Testimonials

While maintaining AHPRA guidelines:
- Add testimonials/reviews to website
- Request Google reviews
- Share success stories (with permission)

---

## SEO Checklist

### Pre-Launch:
- [x] Meta tags implemented on all pages
- [x] Sitemap.xml generated and accessible
- [x] Robots.txt configured
- [x] Open Graph tags added
- [x] Mobile-responsive design verified
- [x] Page speed optimized
- [x] HTTPS enabled
- [x] Accessibility score 90+

### Post-Launch:
- [ ] Submit sitemap to Google Search Console
- [ ] Submit sitemap to Bing Webmaster Tools
- [ ] Create/optimize Google Business Profile
- [ ] Set up Google Analytics
- [ ] Monitor Core Web Vitals
- [ ] Track keyword rankings
- [ ] Analyze search performance monthly
- [ ] Build quality backlinks
- [ ] Publish regular content (if blog implemented)

---

## Monitoring & Analytics

### Google Analytics 4 (Optional)

To add analytics:

1. **Create GA4 property**: https://analytics.google.com
2. **Get Measurement ID**: e.g., `G-XXXXXXXXXX`
3. **Add to Next.js**:
   - Install: `npm install @next/third-parties`
   - Add to `layout.tsx`:
     ```tsx
     import { GoogleAnalytics } from '@next/third-parties/google'
     
     export default function RootLayout({ children }) {
       return (
         <html>
           <body>{children}</body>
           <GoogleAnalytics gaId="G-XXXXXXXXXX" />
         </html>
       )
     }
     ```

### Key Metrics to Track

- **Organic Traffic**: Users from search engines
- **Keyword Rankings**: Target keywords position
- **Bounce Rate**: < 50% is good
- **Average Session Duration**: > 2 minutes is good
- **Pages per Session**: > 2 is good
- **Conversion Rate**: Form submissions, phone clicks

---

## Resources

### SEO Tools

- **Google Search Console**: https://search.google.com/search-console
- **Google Analytics**: https://analytics.google.com
- **PageSpeed Insights**: https://pagespeed.web.dev/
- **Lighthouse**: Built into Chrome DevTools
- **Sitemap Validator**: https://www.xml-sitemaps.com/validate-xml-sitemap.html

### Documentation

- **Next.js SEO**: https://nextjs.org/learn/seo/introduction-to-seo
- **Google SEO Guide**: https://developers.google.com/search/docs
- **Schema.org**: https://schema.org/
- **AHPRA Advertising Guidelines**: https://www.ahpra.gov.au/Publications/Advertising-hub.aspx

---

## Summary

Your website is **SEO-ready** with:

✅ Comprehensive meta tags and Open Graph implementation  
✅ Dynamic sitemap generation  
✅ Proper robots.txt configuration  
✅ Mobile-responsive design  
✅ Fast loading performance  
✅ Strong accessibility (94/100)  
✅ HTTPS security  

**Next Steps:**
1. Submit sitemap to search engines after DNS switch
2. Monitor performance in Google Search Console
3. Consider adding Google Analytics
4. Plan content strategy for ongoing SEO
5. Optimize Google Business Profile for local search

Your foundation is solid—consistent content updates and local SEO will drive organic traffic growth over time.
