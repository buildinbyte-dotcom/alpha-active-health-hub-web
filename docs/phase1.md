# Phase 1: Foundation

## Goals
1.  Initialize Next.js project with TypeScript.
2.  Setup Sanity Studio (Local Configuration).
3.  Define Content Schemas: `Doctor`, `Service`, `Product`, `Article`, `SiteSettings`.

## Tasks

### 1. Initialize Next.js Project
*   **Command:** `npx create-next-app@latest . --typescript --tailwind --eslint`
*   **Configuration:**
    *   TypeScript: Yes
    *   ESLint: Yes
    *   Tailwind CSS: Yes
    *   `src/` directory: Yes
    *   App Router: Yes
    *   Import alias: `@/*`

### 2. Setup Sanity Studio
*   **Action:** Initialize Sanity within the project or as a separate folder (monorepo structure is often cleaner: `/web` for nextjs and `/studio` for sanity, but for simplicity in this project, we might keep them side-by-side or use `sanity-plugin-next` if appropriate, but standard practice is often a separate studio folder).
*   **Decision:** Create a `studio` folder for Sanity to keep it distinct from the Next.js frontend.
*   **Command:** `npm create sanity@latest` (inside a `studio` folder or at root and point to `studio`).
*   **Schemas to Implement:**
    *   `doctor.ts`: Name, Bio, Image, Credentials, Specialties.
    *   `service.ts`: Title, Description, Icon/Image.
    *   `product.ts`: Name, Image, Description, Affiliate Link, Doctor's Note, Category.
    *   `article.ts`: Title, Slug, Body (Portable Text), Published Date, Tags.
    *   `siteSettings.ts`: Address, Phone, Fax, Email, Office Hours, Social Links.

### 3. Verification
*   Ensure Next.js app runs (`npm run dev`).
*   Ensure Sanity Studio runs locally (`npm run dev` in studio folder).
*   Verify schemas appear in the Studio.

## Notes for Future Agents
*   **Deployment:** This environment cannot deploy to Vercel or Sanity Cloud directly. We are setting up the *codebase* for these deployments. The user will need to handle the actual `vercel deploy` and `sanity deploy` or link them via Git.
*   **Environment Variables:** Create a `.env.local.example` with placeholders for `NEXT_PUBLIC_SANITY_PROJECT_ID`, `NEXT_PUBLIC_SANITY_DATASET`, etc.
*   **Styling:** We are using Tailwind CSS v4. Configuration is handled in `src/app/globals.css` using the `@theme` directive, not `tailwind.config.ts`.
