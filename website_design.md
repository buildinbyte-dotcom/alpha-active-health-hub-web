# Website Design & UX: Alpha Active Health

## 1. Competitor Analysis & Key Takeaways
*Refined based on analysis of Hollywood Rheumatology, Dr. Jeremy Wang, and Dr. Denise Tong.*

*   **Process Clarity:** Older patients value certainty. We will implement a visual **"New Patient Journey" (Step-by-Step)** guide (Referral -> Triage -> Appointment -> Care) to reduce anxiety.
*   **Self-Qualification:** A **"When to see a Rheumatologist"** checklist helps patients confirm they are in the right place, improving lead quality.
*   **Operational Efficiency:** Explicit **"What to Bring"** lists (Referral, X-Rays, Medicare Card) reduce admin friction at the front desk.
*   **Holistic Positioning:** We will frame the **Physiotherapy** and **Wellness Store** as part of a "Multidisciplinary Care" model, similar to Dr. Tong’s "Holistic Therapy" approach, to build trust rather than appearing commercial.
*   **Accessibility First:** We must explicitly mention **wheelchair access, lift availability, and parking** details (including photos if possible) to reassure mobility-impaired patients.

## 2. Information Architecture (Sitemap)

1.  **Home (`/`)**
    *   **Hero:** Value Prop + "Book Appointment" CTA.
    *   **Self-Qualification:** "Is this for me?" Checklist (Symptoms).
    *   **New Patient Journey:** 4-Step Visual Process.
    *   **Services Teaser:** Rheumatology + Physiotherapy.
    *   **Doctor-Approved Aids:** Preview of the Wellness Store.
2.  **New Patients (`/new-patients`)** *New Section*
    *   **Step-by-Step Guide:** Detailed expansion of the home page process.
    *   **Preparation Checklist:** "What to bring to your first appointment."
    *   **FAQ:** Fees, Referrals, Rebates.
3.  **Our Team (`/team`)**
    *   **Dr. Shyamini Gunaratne:** Full bio, research, "Why I practice."
    *   **[New] Physiotherapist:** Focus on rehabilitation and mobility.
4.  **Services (`/services`)**
    *   **Medical:** Rheumatology, Autoimmune, Nuclear Medicine.
    *   **Allied Health:** Physiotherapy, Hydrotherapy (if applicable).
    *   **Holistic:** Pain Management, Lifestyle Advice.
5.  **Health Resources (`/resources`)**
    *   **Condition Guides:** "Understanding Arthritis", "Living with Lupus".
    *   **Medication Info:** PDFs or simple guides on common biologics.
6.  **Wellness Recommendations (`/store`)**
    *   *Framing:* "Daily Living Aids & Doctor Recommended Tools."
    *   Categories: Ergonomics, Mobility Aids, Supplements (Evidence-based only).
    *   *Disclaimer:* "These products are suggested aids, not prescriptions. Always consult your specialist."
7.  **Contact (`/contact`)**
    *   **Accessibility Info:** Detailed parking/lift instructions + Photo of building entrance.
    *   Interactive Map.

## 3. Design System Guidelines

### Target Audience: Seniors (65+)
*   **Typography:**
    *   **Body:** *Inter* or *Lato*, minimum 18px size. High line-height (1.6) for readability.
    *   **Headings:** *Merriweather* (Serif) for authority.
*   **Color Palette:**
    *   **Primary:** Deep Medical Blue (`#005696`) - Trust.
    *   **Secondary:** Sage Green (`#88B04B`) - Wellness.
    *   **Action:** Warm Orange (`#E87C38`) - High visibility for "Book Now" buttons.
    *   **Background:** Off-white (`#FAFAF9`) - Reduces eye strain compared to pure white.
*   **Accessibility (WCAG AAA Goal):**
    *   **Contrast:** All text must strictly pass 4.5:1.
    *   **Focus Indicators:** Thick, high-contrast outlines for keyboard users.
    *   **Touch Targets:** Buttons must be at least 44x44px.

## 4. Key Page Breakdowns

### Home Page
*   **Hero:** "Specialist Rheumatology & Physiotherapy in Bella Vista." Image: Senior patient smiling/walking easily.
*   **"Is this for me?" Section:**
    *   *Header:* "When to see a Rheumatologist"
    *   *Content:* Bullet points (Swollen joints, Chronic pain, Unusual test results).
*   **New Patient Journey (Visual Strip):**
    1.  Get Referral
    2.  Send to Us
    3.  Triage/Booking
    4.  Appointment

### Wellness Recommendations (The "Recommended" Section)
*   **Philosophy:** "Tools we use and trust."
*   **Product Card:**
    *   Image (Clean, white background).
    *   Title.
    *   **"Doctor's Note":** "Great for opening jars with weak grip." (Personalized value add).
    *   Button: "View on Amazon" (External Icon).
*   **Disclaimer Component:** Explicit text at the top and bottom stating these are affiliate links and not medical advice.

## 5. Component List
1.  **Navbar:** Sticky, with "Text Size" toggle.
2.  **ProcessStep:** Icon + Step Number + Short Description (for the Journey section).
3.  **Checklist:** Styled list with checkmark icons for "What to bring" or symptoms.
4.  **DoctorCard:** Photo, Name, Credentials, "Areas of Interest" tags.
5.  **ProductCard:** Image, Title, Doctor's Note, Affiliate Link.
6.  **AccessibilityBlock:** Specific UI component for the Contact page highlighting ramp/lift info.
7.  **FAQAccordion:** Expandable questions to save vertical space.
8.  **BookingAction:** All "Book Now" buttons link to `/contact` or trigger a `tel:` link (unless a specific HotDoc/HealthEngine URL is provided).
9.  **DisclaimerBanner:** Reusable component for the Store and Advice sections.
