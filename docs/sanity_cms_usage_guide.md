# How to Add Team Members in Sanity CMS

## Step 1: Login to Sanity Studio

1. Open your browser and navigate to **http://localhost:3333**
2. Click on your preferred login provider:
   - **Google** (recommended if you used Google to create the account)
   - **GitHub**
   - **Email/Password**
3. Grant access permissions when prompted
4. You'll be redirected to the Sanity Studio dashboard

---

## Step 2: Access the Doctor Schema

Once logged in:

1. Look at the **left sidebar** in the Studio
2. You should see the following content types:
   - 📄 Doctor
   - 📄 Service
   - 📄 Product
   - 📄 Article
   - ⚙️ Site Settings

3. Click on **"Doctor"** to view all doctor entries

---

## Step 3: Create a New Doctor Profile

1. Click the **"+ Create"** button (or similar) in the Doctor section
2. You'll see a form with the following fields:

### Required Fields

#### **Name**
- Full name with credentials
- **Example**: `Dr. Shyamini Gunaratne`

#### **Slug**
- URL-friendly identifier (auto-generated from name)
- Click **"Generate"** button next to the slug field
- **Example**: `dr-shyamini-gunaratne`

#### **Role**
- Professional title/position
- **Example**: `Consultant Rheumatologist`

#### **Credentials**
- Degrees and certifications
- **Example**: `MBBS, FRACP`

#### **Image**
- Professional photo of the doctor
- Click **"Upload"** or drag and drop an image
- Recommended: High-quality headshot, professional attire
- Supported formats: JPG, PNG
- Optimal size: 800x800px or similar square ratio

#### **Bio**
- Detailed professional biography (supports rich text)
- Click into the bio field and start typing
- Auto-formats as paragraphs
- **Example for Dr. Shyamini**:

```
Dr. Shyamini is a highly accomplished physician and rheumatologist, integrating clinical expertise, academic research, and a passion for education and mentorship. As a Staff Specialist at Macarthur Health Service and private practitioner since 2019, she has been instrumental in managing complex autoimmune and musculoskeletal conditions with a patient-centred approach.

Her dual training in rheumatology and nuclear medicine, completed at esteemed institutions such as Concord, Westmead, and Campbelltown Hospitals, equips her with unique insights into diagnosing and treating inflammatory and degenerative joint diseases.

A dedicated researcher, Dr. Shyamini has contributed to innovations in imaging techniques for inflammatory arthritis and joint diseases. Her work on ultrasound and scintigraphic evaluations has been presented at leading conferences, including the Australian and New Zealand Rheumatology Association meetings, and published in renowned journals like Emergency Medicine Australasia.

Dr. Shyamini is equally devoted to education, mentoring medical students and junior doctors through her roles as a tutor, lecturer, and leader of physician training programs.
```

#### **Specialties**
- List of areas of expertise
- Click **"Add item"** to add each specialty
- **Examples**:
  - Rheumatoid Arthritis
  - Lupus
  - Osteoarthritis
  - Autoimmune Conditions
  - Inflammatory Arthritis
  - Musculoskeletal Disorders

---

## Step 4: Publish the Doctor Profile

1. Review all entered information
2. Click the **"Publish"** button at the bottom of the form (or top right)
3. You should see a confirmation message
4. The doctor profile is now live!

---

## Step 5: Verify on the Website

1. Open **http://localhost:3000/team** in your browser
2. You should see the doctor's profile displayed with:
   - Name and credentials
   - Photo
   - Role
   - Bio text
   - Specialties (if displayed)

3. If you don't see the changes immediately, try:
   - Refreshing the page (F5)
   - Clearing browser cache (Ctrl+Shift+R)

---

## Quick Reference: Dr. Shyamini Gunaratne

Use this information to populate the first team member:

| Field | Value |
|-------|-------|
| **Name** | Dr. Shyamini Gunaratne |
| **Slug** | `dr-shyamini-gunaratne` (auto-generate) |
| **Role** | Consultant Rheumatologist |
| **Credentials** | MBBS, FRACP |
| **Image** | Upload professional headshot |
| **Specialties** | Rheumatoid Arthritis<br>Lupus<br>Osteoarthritis<br>Autoimmune Conditions<br>Inflammatory Conditions |

**Bio**: See the full bio text in Step 3 above.

---

## Adding More Team Members

For additional team members (e.g., physiotherapist):

1. Return to the **Doctor** section in Sanity Studio
2. Click **"+ Create"** again
3. Fill in the same fields with the new team member's information
4. Publish
5. The Team page will automatically show all published doctors

---

## Tips & Best Practices

### Images
- Use professional, high-quality photos
- Consistent background (white or neutral)
- Square aspect ratio (1:1) works best
- File size: Keep under 2MB for faster loading

### Bio Writing
- Keep paragraphs concise (3-4 sentences each)
- Focus on qualifications, experience, and patient care philosophy
- Include research/publications if relevant
- Mention hospitals/institutions for credibility

### Specialties
- Use patient-friendly language
- 4-6 specialties is ideal
- Order by importance or commonality

### Slug Best Practices
- Always generate from name (don't type manually)
- Use lowercase with hyphens
- Keep it simple and readable

---

## Troubleshooting

**Problem**: Can't see the Publish button  
**Solution**: Scroll down to the bottom of the form, or check the top-right corner

**Problem**: Changes don't appear on website  
**Solution**: Hard refresh the browser (Ctrl+Shift+R) or wait 10-30 seconds for cache to clear

**Problem**: Image won't upload  
**Solution**: 
- Check file size (should be under 10MB)
- Ensure file format is JPG or PNG
- Try a different image

**Problem**: Can't login to Studio  
**Solution**: 
- Verify you're using the same account used to create the Sanity project
- Check if you have access permissions for project `q4ibg8xa`

---

## Next Steps

After adding team members:

1. **Add Services** - Click "Service" in the sidebar
2. **Add Products** - Click "Product" for wellness recommendations
3. **Add Articles** - Click "Article" for health resources
4. **Update Site Settings** - Click "Site Settings" for contact info, hours, address

All content follows the same pattern: Create → Fill → Publish → Verify
