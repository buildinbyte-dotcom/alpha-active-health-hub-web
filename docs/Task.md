### **Task: Modernise Medical Practice Website (Alpha Active Health)**

**Role:**
Act as a **Senior Web Architect and Lead Developer** specializing in medical and healthcare digital solutions.

**Objective:**
Plan the complete modernization and redesign of the **Alpha Active Health** website (currently: `https://alphaactivehealth.com.au/`). The goal is to migrate existing content, improve the user experience for older patients, add new revenue streams, and implement a scalable, low-maintenance tech stack.

**Phase 1: Analysis & Discovery**
1.  **Site Traversal:** Use the **Chrome Dev Tools MCP** to traverse the existing website.
2.  **Data Extraction:** Analyze current content hierarchy, branding, and services. Ensure absolutely no critical patient information, contact details, or service descriptions are lost.

**Phase 2: Requirements & Features**
* **Content Migration:** Retain all valid existing information.
* **Team Expansion (Scalability):**
    * **Immediate:** Add a profile for a new **Physiotherapy Specialist** joining the principal doctor.
    * **Future-Proofing:** The system must allow for the easy addition of future specialists without requiring code changes.
* **New Revenue Stream (Recommended Products):**
    * Design a "Wellness Store" or "Doctor Recommended" section. (links to amzon linked )
    * Functionality: Allow the principal doctor to easily add products with affiliate links.
    * Tone: Must appear professional and medically curated, not like a generic ad.
* **Patient Education (SEO & Trust):**
    * Plan a "Health Resources" section tailored to Rheumatology (e.g., articles on Arthritis, Autoimmune care).
    * Goal: Improve SEO and build patient trust.

**Phase 3: Design & UX Guidelines**
* **Target Audience:** Older adults/seniors.
    * *Constraint:* High accessibility focus (WCAG standards). Large legible fonts, high contrast, and intuitive navigation are mandatory.
* **Aesthetic:** Modern, clean, and trustworthy. Shift from a "basic informational site" to a "modern digital health clinic."

**Phase 4: Technical Constraints & Stack Selection**
* **Architecture:** Propose a **Headless** or **Modern** architecture that separates content from code.
* **Non-Technical Management:** The site **must** allow doctors/admins to update text, add team members, and manage the "Recommended Products" section via a user-friendly dashboard (CMS) without touching code.
* **Cost Efficiency:** Prioritize tools with **generous free tiers** to minimize ongoing costs for the practice.
* **Options to Evaluate:**
    * **CMS:** Evaluate **Sanity CMS** (recommended for its free tier and flexibility), Strapi, or Contentful.
    * **Frontend:** Evaluate **Next.js** (for performance/SEO) or Remix.
    * **Hosting:** Evaluate **Vercel** or Netlify.
    * *Justification:* Explicitly explain why the chosen stack is better than WordPress/Wix for this specific scenario.

**Phase 5: Deliverables & Output**
Please generate the following three files based on your analysis:

1.  **`Gemini.md`**: A summary of critical project data, constraints, and context for memory retention.
2.  **`technical_plan.md`**:
    * Selected Tech Stack (Frontend, Backend/CMS, Hosting) with strict justification regarding cost and ease of use.
    * Implementation roadmap.
    * Security and maintenance strategy.
3.  **`website_design.md`**:
    * Sitemap and Information Architecture.
    * Design system recommendations (Color palette, typography, accessibility notes).
    * Detailed breakdown of key pages (Home, Team, Services, Recommended Products).
    * Component list (e.g., "Doctor Profile Card", "Product Grid", "Appointment CTA").
