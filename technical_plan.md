# Technical Plan: Alpha Active Health Modernization

## 1. Selected Tech Stack

### Frontend: **Next.js (React Framework)**
*   **Justification:**
    *   **Performance:** Static Site Generation (SSG) and Server-Side Rendering (SSR) ensure near-instant page loads, crucial for retaining users and SEO.
    *   **Accessibility:** Strong ecosystem of accessible component libraries (e.g., Radix UI, Headless UI) to meet WCAG standards for the older demographic.
    *   **Scalability:** modular architecture makes it easy to add new sections (Store, Blog) without rewriting the core.

### Backend / CMS: **Sanity CMS**
*   **Justification:**
    *   **Generous Free Tier:** The free tier is extremely generous (plenty of bandwidth/documents for a medical practice site), keeping costs effectively zero.
    *   **Flexibility:** "Content Lake" approach allows defining custom schemas for "Doctors," "Products," and "Articles" easily.
    *   **User Experience:** The Sanity Studio provides a clean, real-time dashboard for non-technical staff to manage content.
    *   **Affiliate Integration:** Can easily create a schema for products that includes an "Affiliate Link" field, making the "Wellness Store" easy to manage.

### Forms: **Web3Forms**
*   **Justification:**
    *   **Static Compatibility:** Perfect for Next.js as it doesn't require a backend server.
    *   **Simplicity:** Submissions are sent directly to the practice's email.
    *   **Cost:** Generous free tier suitable for the volume of a private practice.

### Hosting: **Vercel**
*   **Justification:**
    *   **Integration:** Built by the creators of Next.js, offering the best performance and zero-config deployment.
    *   **Cost:** The "Hobby" plan is free and sufficient for this scale. If commercial limits are hit (unlikely for a clinic), the Pro plan is reasonably priced.
    *   **Global CDN:** Ensures fast loading times for patients anywhere in Australia.

### Comparison vs. WordPress/Wix
*   **Security:** Headless architecture means the frontend is decoupled from the backend. There is no database exposed to the public, significantly reducing attack vectors compared to WordPress plugins.
*   **Performance:** No bloat from unoptimized themes or plugins.
*   **Customization:** We are not locked into a template; we can build exact accessibility requirements.

## 2. Implementation Roadmap

### Phase 1: Foundation (Days 1-2)
*   Initialize Next.js project with TypeScript.
*   Setup Sanity Studio and deploy to Vercel (admin subdomain).
*   Define Content Schemas: `Doctor`, `Service`, `Product`, `Article`, `SiteSettings` (Contact info, Hours).

### Phase 2: Core Development (Days 3-5)
*   **Design System Implementation:** Tailwind CSS configuration for accessibility (colors, typography).
*   **Component Build:** Header (Nav), Footer, Hero, Bio Card, Info Section.
*   **Page Build:** Home, Contact (integrated with Web3Forms).

### Phase 3: Features & Content (Days 6-8)
*   **Team Section:** Dynamic rendering of `Doctor` profiles.
*   **Wellness Store:** `Product` grid with "Buy on Amazon" buttons (affiliate link logic) and Disclaimer component.
*   **Resources:** Blog/Article index and individual post pages.
*   **Migration:** Import structured data from `content_migration.json` to populate initial Sanity content (Bio, Location, Services).

### Phase 4: Testing & Launch (Days 9-10)
*   **Accessibility Audit:** Run Lighthouse and Axe tests to ensure WCAG AA compliance.
*   **Device Testing:** Verify layout on mobile, tablet, and desktop.
*   **SEO Setup:** Meta tags, Open Graph images, Sitemap generation.
*   **DNS Switch:** Point `alphaactivehealth.com.au` to Vercel.

## 3. Security & Maintenance Strategy
*   **No Server Maintenance:** Serverless architecture removes the need for OS updates or patching.
*   **CMS Security:** Sanity is a managed service; they handle database security.
*   **SSL:** Auto-provisioned by Vercel.
*   **Backups:** Sanity keeps history of content revisions.
