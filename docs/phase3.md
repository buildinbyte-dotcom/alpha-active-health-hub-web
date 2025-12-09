# Phase 3: Sanity Integration and Dynamic Routes

## Goals Achieved
1.  **Sanity Integration:** Connected web project components to fetch data from Sanity CMS.
2.  **Dynamic Routes:** Implemented dynamic routing for individual doctor profiles and article pages.
3.  **SEO & Metadata:** Implemented Metadata API for dynamic pages.
4.  **Schema Updates:** Updated Sanity schemas for enhanced content management.

## Tasks
*   **Sanity Client Setup:** Set up the Sanity client in the web project for data fetching.
*   **Team Section Integration:**
    *   Fetched and displayed doctor data from Sanity.
    *   Implemented dynamic route for individual doctor profiles (`/team/[slug]`).
    *   Updated `doctor.ts` schema with 'role' field.
*   **Store Section Integration:**
    *   Fetched and displayed product data from Sanity.
*   **Resources Section Integration:**
    *   Fetched and displayed article data from Sanity.
    *   Implemented dynamic route for individual article pages (`/resources/[slug]`).
    *   Updated `article.ts` schema with 'mainImage' field.
*   **Metadata API Implementation:** Implemented Next.js Metadata API for dynamic doctor and article pages to improve SEO.
*   **Environment Variables:** Created `web/.env.local.example` for Sanity environment variables (Project ID, Dataset, API Version, Use CDN).

## Verification
*   Ensure all dynamic pages (`/team/[slug]`, `/resources/[slug]`) load content correctly from Sanity.
*   Verify that the updated schemas (role for doctor, mainImage for article) are reflected in Sanity Studio.
*   Confirm that environment variables are correctly configured and accessible in the web project.
*   Run tests (`npm test`) and build (`npm run build`) to ensure no regressions.
*   Perform an accessibility review, especially for new dynamic content.
