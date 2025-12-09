# Website Design & UX: Alpha Active Health

## 1. Information Architecture (Sitemap)

1.  **Home (`/`)**
    *   Hero: Welcoming image + Value Prop ("Expert Rheumatology & Allied Health Care").
    *   Quick Info Bar: Phone, Location, "Book Now" CTA.
    *   Services Highlights.
    *   Meet the Team Preview.
    *   Trust Signals (Affiliations, brief testimonial).
2.  **Our Team (`/team`)**
    *   **Dr. Shyamini Gunaratne:** Full profile, qualifications, research, areas of interest.
    *   **[New] Physiotherapist:** Placeholder profile (Name, qualifications, specialty).
3.  **Services (`/services`)**
    *   Rheumatology (Arthritis, Lupus, etc.).
    *   Physiotherapy (Rehab, Mobility).
    *   Nuclear Medicine (Diagnostic insight context).
4.  **Health Resources (`/resources`)** *New*
    *   Index of articles (e.g., "Living with Arthritis", "Diet & Autoimmune").
    *   Individual Article Page.
5.  **Wellness Store (`/store` or `/recommendations`)** *New*
    *   Curated list of doctor-approved products (ergonomic tools, supplements, aids).
    *   Disclaimer: "Doctor Recommended."
6.  **Contact (`/contact`)**
    *   Map (Google Maps Embed).
    *   Detailed Directions & Parking.
    *   Contact Form (General Inquiries).
    *   referral info for GPs.

## 2. Design System Guidelines

### Target Audience: Seniors (65+)
*   **Typography:**
    *   **Body:** Sans-serif (e.g., *Inter* or *Lato*), minimum 18px size for readability.
    *   **Headings:** Serif (e.g., *Merriweather*) for a trustworthy, academic feel, or a clean modern Sans. High contrast.
*   **Color Palette:**
    *   **Primary:** Deep Medical Blue (`#005696`) - Trust, calm.
    *   **Secondary:** Sage Green (`#88B04B`) - Health, wellness, growth.
    *   **Background:** Off-white/Cream (`#FAFAF9`) - Reduces eye strain compared to pure white.
    *   **Accent:** Alert Red/Orange (sparingly) for urgent notices only.
*   **Accessibility (WCAG AA/AAA):**
    *   High contrast ratios (4.5:1 minimum).
    *   Focus states clearly visible for keyboard navigation.
    *   Alt text on all images.

## 3. Key Page Breakdowns

### Home Page
*   **Hero Section:** High-quality image of a senior patient active/happy (not in pain). Headline: "Restoring Your Movement, Reclaiming Your Life."
*   **Accessibility Controls:** Optional toggle in header for "Increase Text Size" or "High Contrast Mode".

### Recommended Products (The "Wellness Store")
*   **Layout:** Clean grid card layout.
*   **Card Content:** Product Image, Name, "Why Dr. Gunaratne Recommends This" (brief text), "View on Amazon" button.
*   **Tone:** Medical advice, not sales pitch.

## 4. Component List
1.  **Navbar:** Logo, Links, "Book Appointment" (prominent button).
2.  **Footer:** Quick links, Copyright, Acknowledgement of Country, Emergency warning ("Call 000 for emergencies").
3.  **DoctorCard:** Photo (circle or rounded square), Name, Title, Short Bio excerpt.
4.  **ServiceIcon:** Simple line-art icons representing joints, mobility, etc.
5.  **ProductCard:** Image, Title, Doctor's Note, Affiliate Button.
6.  **ContactInfoBlock:** Phone (clickable), Address (link to maps), Fax.
