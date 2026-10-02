# Antigravity Master Prompt — Advocate Nikhil Shukla Full-Stack Website

## ROLE

Act as a **Senior Full-Stack Architect, UI/UX Engineer, Backend Engineer, SEO Engineer, Security Engineer, and DevOps Engineer**.

You are working on a production-grade legal practice website for:

**Advocate Nikhil Shukla**

The goal is to transform the supplied HTML/template into a **premium, modern, trustworthy, responsive, fast, SEO-friendly, content-manageable full-stack website**.

Do not build only a static frontend. Build and manage the **complete frontend + backend + database + CMS/admin workflow + blog/story publishing system + enquiry management + deployment configuration**.

---

# 1. SOURCE MATERIAL — IMPORTANT

I have provided:

1. A reference/template HTML file.
2. A visual reference image/business-card style branding for Advocate Nikhil Shukla.
3. Specific replacement copy in this prompt.

First inspect the existing project and template carefully.

The supplied HTML currently contains:
- Navy / black legal-professional visual language
- Gold accent
- Serif/editorial typography
- Sticky navigation
- Hero section
- Credentials
- About section
- Practice areas
- Why choose the firm
- Consultation/contact section

Preserve the useful visual direction and information architecture, but **do not blindly copy the old implementation**.

The current template is a starting point, not the final website.

The supplied HTML also contains old wording and placeholder information. Replace outdated/placeholder content with the approved content and structured CMS data.

The source template currently uses a navy, cream, gold visual system and sections such as About, Practice Areas, Why Us and Contact. Use it as the visual/content starting point. 

---

# 2. CRITICAL CONTENT RULE

## DO NOT OVERUSE "DELHI HIGH COURT"

Anywhere the website currently says:

**"Delhi High Court"**

replace the displayed wording with:

**"Court"**

This applies globally across:
- Navbar
- Hero
- About
- Practice Areas
- Why Choose
- Footer
- SEO-visible page content
- Blog/story content if the phrase is part of the website's own static copy
- Meta/title copy generated from website content
- Admin-managed static sections where applicable

Do NOT repeatedly market the website around a specific court name.

### Important exception

Do not automatically alter user-generated blog/article content merely because the phrase exists inside an article. Admin/editor content should remain editable and should not be silently rewritten.

Also do not change unrelated references such as:
- Supreme Court of India
- District Courts
- Other legitimate court names

unless the content specifically contains the exact phrase **Delhi High Court** and is intended to be part of the website's standard marketing copy.

---

# 3. APPROVED HERO CONTENT

Use this as the main hero content:

## MAIN HEADING

**Protecting Your Rights, Defending Your Interests, Delivering Justice.**

## WEBSITE PARAGRAPH

**Advocate Nikhil Shukla represents individuals in criminal and matrimonial matters, including criminal defense, bail applications, cybercrime cases, divorce, maintenance, and child custody disputes. He provides legal advice and representation before the Supreme Court of India, Court, and District Courts of Delhi, with a commitment to protecting clients' legal rights and providing dedicated legal assistance.**

## PRIMARY BUTTON

**SCHEDULE A CONSULTATION**

## SECONDARY BUTTON

**VIEW PRACTICE AREAS**

Do not replace this heading with the old cyber-crime-only hero heading.

The website should communicate that the practice covers both:

- Criminal Law
- Matrimonial / Family Law
- Cybercrime / Digital matters

---

# 4. APPROVED INTRODUCTION / ABOUT COPY

Use the following as the principal professional introduction:

**Advocate Nikhil Shukla regularly represents clients in criminal and matrimonial matters, including bail applications, criminal defense, cybercrime cases, divorce, maintenance, domestic violence, and child custody disputes. He provides legal advice and representation before the Supreme Court of India, Court, and District Courts of Delhi, with a focus on protecting clients' legal rights and interests through professional and dedicated legal services.**

Do not invent:
- Number of years of experience
- Number of cases
- Bar Council credentials
- Educational qualifications
- Awards
- Courtroom statistics
- Client success percentages
- Case outcomes
- Fake testimonials

If information is not provided, make it editable through the admin panel or display a neutral placeholder only where necessary.

---

# 5. WEBSITE POSITIONING

The website should feel like a:

**Premium Indian legal practice website**

Visual qualities:

- Sophisticated
- Trustworthy
- Authoritative
- Minimal
- Professional
- Premium
- Calm
- Editorial
- Human
- Mobile-first

Avoid:

- Cheap law-firm templates
- Excessive animations
- Neon colors
- Generic SaaS UI
- Cartoon illustrations
- Overly rounded cards
- Excessive gradients
- Stock-photo-heavy layouts
- Fake trust badges
- Fake reviews
- Fake statistics
- Aggressive marketing language

---

# 6. BRAND / VISUAL DIRECTION

Use the supplied reference image as the branding direction.

Primary visual language:

- Black / very dark navy background
- Gold accents
- Ivory / warm white typography
- Elegant serif headings
- Clean sans-serif body text
- Thin gold dividers
- Subtle legal motifs
- Strong typography
- Generous spacing

Suggested palette:

```text
Deep Black:       #080808
Legal Navy:       #101B27
Dark Navy:        #152433
Luxury Gold:      #C9A227
Soft Gold:        #D9B84C
Ivory:            #F5F2EC
Muted Text:       #AEB7C0
Body Text:        #384552
White:            #FFFFFF
```

Do not force these exact values if the existing design system has better equivalents. Keep the overall black/navy + gold + ivory identity.

---

# 7. FRONTEND ARCHITECTURE

Choose a modern production-ready architecture.

Preferred:

**Next.js + TypeScript**

Recommended:

- Next.js App Router
- TypeScript
- Tailwind CSS
- shadcn/ui where useful
- Server Components where appropriate
- Client Components only when interaction requires them
- React Hook Form
- Zod validation
- Lucide icons
- Optimized image handling
- SEO metadata API
- Sitemap
- robots.txt
- Open Graph metadata
- Structured data

Do not create unnecessary frontend complexity.

Use reusable components.

Example architecture:

```text
src/
  app/
    page.tsx
    about/
    practice-areas/
    practice-areas/[slug]/
    stories/
    stories/[slug]/
    contact/
    privacy-policy/
    disclaimer/

  components/
    layout/
    navbar/
    footer/
    hero/
    practice/
    stories/
    forms/
    ui/

  lib/
    api/
    db/
    seo/
    validation/

  types/
  hooks/
  utils/
```

Use clean separation of concerns.

---

# 8. REQUIRED WEBSITE PAGES

Build at minimum:

## Public

1. Home
2. About
3. Practice Areas
4. Individual Practice Area Detail
5. Stories / Blog
6. Individual Story / Blog Article
7. Contact
8. Privacy Policy
9. Disclaimer

Optional if useful:

10. FAQ
11. Legal Resources

---

# 9. HOME PAGE STRUCTURE

Build the homepage approximately as:

### Header

- Logo / monogram
- Advocate Nikhil Shukla
- Navigation
- Stories
- Contact
- Schedule Consultation CTA

Mobile:
- Hamburger navigation
- Sticky CTA
- Clean accessible menu

### Hero

Heading:

**Protecting Your Rights, Defending Your Interests, Delivering Justice.**

Paragraph:

Approved paragraph from Section 3.

Buttons:

**SCHEDULE A CONSULTATION**

**VIEW PRACTICE AREAS**

Use the supplied branding image/style direction.

If a professional portrait is not supplied, create a polished image placeholder that can easily be replaced from admin.

### Trust / Practice Highlights

Do not invent numerical statistics.

Use factual categories instead:

- Criminal Matters
- Bail Applications
- Cybercrime
- Matrimonial Matters
- Divorce & Maintenance
- Child Custody

### About Preview

Use approved introduction.

CTA:

**READ MORE**

### Practice Areas

Create visually strong cards.

Initial categories:

1. Criminal Defense
2. Bail Applications
3. Cybercrime & Cyber Fraud
4. Matrimonial & Family Matters
5. Divorce
6. Maintenance
7. Domestic Violence
8. Child Custody
9. Other Legal Assistance

Every card should link to its own detail page.

### Why Choose

Use fact-based messaging only.

Potential editable points:

- Personal Attention
- Professional Legal Guidance
- Clear Communication
- Matter-Specific Strategy
- Confidential Consultation
- Dedicated Representation

Do not claim credentials that have not been provided.

### Stories Preview

Show latest 3–6 published stories.

Each card:

- Cover image
- Category
- Title
- Short excerpt
- Date
- Read More

### Consultation CTA

Strong premium CTA:

**Have a legal matter that requires professional attention?**

**Schedule a consultation with Advocate Nikhil Shukla.**

### Footer

Include:

- Name
- Navigation
- Practice Areas
- Contact
- Stories
- Disclaimer
- Privacy Policy
- Copyright

---

# 10. PRACTICE AREA SYSTEM

Practice Areas must NOT be hardcoded into random components.

Create a data-driven system.

Each practice area should support:

```text
id
title
slug
shortDescription
description
heroImage
icon
seoTitle
seoDescription
isPublished
displayOrder
createdAt
updatedAt
```

Example:

```text
Criminal Defense
/criminal-defense
```

The admin should be able to:

- Create
- Edit
- Delete
- Publish/unpublish
- Reorder

practice areas.

---

# 11. STORIES / BLOG SYSTEM

This is a mandatory feature.

I want to be able to share **stories/articles/blog-type content** from the website.

Create a complete CMS-driven Stories system.

## Public URL

```text
/stories
```

Individual article:

```text
/stories/[slug]
```

## Story fields

```text
id
title
slug
excerpt
content
coverImage
author
category
tags
status
publishedAt
seoTitle
seoDescription
createdAt
updatedAt
```

Status:

```text
DRAFT
PUBLISHED
ARCHIVED
```

## Story features

Support:

- Rich text
- Headings
- Paragraphs
- Lists
- Quotes
- Images
- Links
- Embedded videos where appropriate
- Internal links
- External links
- Tags
- Categories
- Featured image
- SEO title
- SEO description
- Publish date
- Draft mode

## Sharing

Each article should have:

- WhatsApp share
- Facebook share
- LinkedIn share
- X/Twitter share
- Copy link

Use Web Share API on supported mobile devices.

## Related Stories

At the bottom of each story:

**Related Stories**

Show 3 relevant articles.

## Latest Stories

Homepage should automatically display latest published stories.

## Search / filtering

Stories page should support:

- Search
- Category filter
- Tag filter
- Pagination or load-more

Do not load the entire blog database on the initial page.

---

# 12. ADMIN / CMS

Create a secure admin dashboard.

Suggested:

```text
/admin
```

Dashboard sections:

```text
Dashboard
Practice Areas
Stories
Categories
Media
Consultation Requests
Website Settings
SEO Settings
```

## Dashboard

Show:

- Published stories
- Draft stories
- Total practice areas
- New consultation requests
- Recent activity

## Story management

Admin should be able to:

- Create article
- Save draft
- Preview
- Publish
- Unpublish
- Edit
- Delete
- Upload cover image
- Set SEO metadata
- Set category
- Add tags

## Consultation management

Show:

- Name
- Phone
- Email if supplied
- Matter description
- Date/time
- Status

Statuses:

```text
NEW
CONTACTED
IN_PROGRESS
CLOSED
```

---

# 13. BACKEND

Build a proper backend/API.

Preferred architecture:

**Next.js full-stack backend OR separate Node.js/TypeScript API if project requirements justify it.**

Do not introduce a separate backend merely for the sake of complexity.

Use a clean service/repository architecture.

Suggested:

```text
API Layer
   ↓
Validation
   ↓
Service Layer
   ↓
Repository / ORM
   ↓
Database
```

Keep business logic out of UI components.

---

# 14. DATABASE

Preferred:

**PostgreSQL**

Use:

**Prisma ORM**

Suggested models:

```text
AdminUser
PracticeArea
Story
StoryCategory
Tag
Media
ConsultationRequest
SiteSetting
SeoSetting
```

Relations:

```text
Story
 ├── Category
 ├── Tags
 └── Author

PracticeArea
 └── independent

ConsultationRequest
 └── independent
```

Use proper:

- UUID/secure IDs
- Indexes
- Foreign keys
- Unique constraints
- Timestamps
- Slugs
- Published status

Do not use JSON blobs where normalized relational data is more appropriate.

---

# 15. CONTACT / CONSULTATION FORM

The form must be functional.

Fields:

```text
Full Name *
Phone Number *
Email
Matter Type
Brief Description *
Preferred Contact Method
```

Matter type:

```text
Criminal Defense
Bail
Cybercrime
Divorce
Maintenance
Domestic Violence
Child Custody
Other
```

Backend requirements:

- Server-side validation
- Zod validation
- Rate limiting
- Spam protection
- Input sanitization
- Proper error handling
- Success confirmation
- Database storage

Do not use:

```html
onsubmit="return false;"
```

The old template currently has a non-functional form. Replace it with a real backend-connected flow.

---

# 16. WHATSAPP / PHONE CTA

The website should make contacting the advocate easy.

Use configurable settings for:

- Phone number
- WhatsApp number
- Email
- Office address
- Office timings

Do not hardcode these throughout the codebase.

Store them in:

**Website Settings**

Admin should be able to update them from one place.

---

# 17. MEDIA MANAGEMENT

Create a media system for:

- Advocate portrait
- Logo
- Story cover images
- Story inline images
- OG images

Requirements:

- Image optimization
- Responsive sizes
- WebP/AVIF where supported
- Lazy loading
- Alt text
- File type validation
- File size validation

Do not store large original images directly inside the Git repository.

Use object storage or a configurable media provider.

---

# 18. SEO

Implement production-level SEO.

Every important page must have:

- Unique title
- Meta description
- Canonical URL
- Open Graph
- Twitter/X card
- Sitemap
- Robots
- Structured data

Use appropriate schema types such as:

- LegalService
- Person
- Article
- BreadcrumbList
- WebSite

Do not make unsupported claims in structured data.

Blog articles should dynamically generate metadata.

Practice-area pages should dynamically generate metadata.

---

# 19. PERFORMANCE

Target:

- Excellent Lighthouse performance
- Fast mobile loading
- Minimal JavaScript
- Optimized images
- Server rendering where useful
- Lazy loading
- Code splitting
- No unnecessary dependencies

Avoid:

- Huge animation libraries
- Autoplay video backgrounds
- Massive JavaScript bundles
- Unoptimized images
- Blocking third-party scripts

---

# 20. SECURITY

Treat this as a real production legal website.

Implement:

- Secure admin authentication
- Password hashing
- Session security
- Authorization checks
- CSRF protection where applicable
- Rate limiting
- Input validation
- XSS protection
- SQL injection protection through ORM
- Secure headers
- File upload validation
- Environment variables
- No secrets in frontend
- No API keys committed to Git

Admin routes must never rely only on frontend route protection.

Every sensitive API must verify authorization server-side.

---

# 21. ADMIN AUTHENTICATION

Use secure authentication.

Requirements:

- Admin login
- Secure password hashing
- Session/token management
- Logout
- Protected admin routes
- Role-ready architecture

At minimum support:

```text
ADMIN
EDITOR
```

Even if only ADMIN is used initially, architect it so EDITOR can be added later.

---

# 22. LEGAL WEBSITE DISCLAIMER

Include a professionally designed disclaimer page and footer notice.

Do not invent legal claims.

Use editable disclaimer content through the CMS/site settings.

The website must not imply:

- Guaranteed results
- Guaranteed bail
- Guaranteed acquittal
- Guaranteed case outcome
- Guaranteed timeline
- Guaranteed compensation

Avoid misleading legal advertising language.

---

# 23. RESPONSIVE DESIGN

The website must work properly on:

- 320px mobile
- 375px mobile
- 390px mobile
- 430px mobile
- Tablet
- Laptop
- Desktop
- Large desktop

Test:

- Navbar
- Hero
- Cards
- Forms
- Stories
- Admin dashboard
- Footer
- Images

No horizontal scrolling.

No broken layouts.

No text overflow.

---

# 24. ACCESSIBILITY

Implement:

- Semantic HTML
- Keyboard navigation
- Visible focus states
- ARIA labels where needed
- Correct heading hierarchy
- Form labels
- Error messages
- Alt text
- Sufficient contrast
- Accessible mobile menu

Target WCAG 2.1 AA principles.

---

# 25. ANIMATIONS

Use subtle animations only.

Examples:

- Fade/slide on section reveal
- Button hover
- Card hover
- Navigation transition
- Mobile menu transition

Keep animation performance-friendly.

Respect:

```text
prefers-reduced-motion
```

Do not turn the website into an animation showcase.

---

# 26. CONTENT MANAGEMENT PRINCIPLE

Anything likely to change should be configurable.

Examples:

```text
Advocate Name
Phone
WhatsApp
Email
Address
Office Hours
Hero Heading
Hero Paragraph
CTA Text
About Content
Practice Areas
Stories
Disclaimer
SEO Defaults
Social Sharing Settings
```

Avoid hardcoding business information in multiple files.

---

# 27. CONFIGURATION

Use environment variables:

```env
DATABASE_URL=
AUTH_SECRET=
NEXT_PUBLIC_SITE_URL=
MEDIA_STORAGE_URL=
MEDIA_STORAGE_KEY=
MEDIA_STORAGE_SECRET=
EMAIL_FROM=
EMAIL_PROVIDER_API_KEY=
```

Create:

```text
.env.example
```

Never commit:

```text
.env
.env.local
secrets
private keys
production credentials
```

---

# 28. EMAIL / NOTIFICATIONS

After a consultation request:

1. Save request in database.
2. Show success message to visitor.
3. Send notification email to configured admin email if email provider is configured.
4. Log failures safely.
5. Do not expose backend errors to users.

Make email provider swappable.

Do not tightly couple the application to one vendor.

---

# 29. ERROR HANDLING

Create polished states for:

- Loading
- Empty
- Error
- Success
- 404
- 500
- Network failure
- Form validation failure
- Unauthorized
- Forbidden

No raw stack traces should be shown to users.

---

# 30. ANALYTICS

Create an optional analytics integration.

It should be configurable from environment variables/settings.

Do not add invasive tracking by default.

If analytics is enabled, document what is collected.

---

# 31. CODE QUALITY

Follow:

- SOLID principles
- DRY
- Separation of concerns
- Repository/service pattern where useful
- Reusable UI components
- Typed API responses
- Centralized validation
- Centralized configuration
- Clear naming
- Small maintainable components

Avoid:

- Giant components
- Duplicate API logic
- Hardcoded business data everywhere
- Any-type abuse
- Dead code
- Unused dependencies
- Copy-pasted pages

---

# 32. TESTING

Implement at least meaningful tests for:

### Backend

- Validation
- Authentication
- Authorization
- Story CRUD
- Practice Area CRUD
- Consultation creation

### Frontend

- Form validation
- Navigation
- Story rendering
- Admin protected routes

Add E2E tests for the most important user flow if practical:

```text
Home
→ Practice Area
→ Schedule Consultation
→ Submit Form
→ Admin sees request
```

---

# 33. SEED DATA

Create safe development seed data.

Example:

```text
Practice Areas:
Criminal Defense
Bail Applications
Cybercrime & Cyber Fraud
Matrimonial Matters
Divorce
Maintenance
Domestic Violence
Child Custody
```

Create 3–5 sample stories clearly marked as demo/sample content.

Do NOT present fictional stories as real client cases.

---

# 34. STORY EDITOR

The admin story editor should feel professional.

Include:

- Title
- Slug generation
- Rich content editor
- Cover image
- Excerpt
- Category
- Tags
- SEO title
- SEO description
- Publish date
- Draft/Publish control
- Preview

Auto-generate slug from title but allow manual editing.

Slug rules:

```text
lowercase
hyphen separated
no unnecessary special characters
unique
```

---

# 35. BLOG CONTENT SAFETY

Do not allow publishing of fabricated:

- Client identities
- Case outcomes
- Court judgments
- Legal precedents
- Testimonials
- Success rates

The CMS should make it easy to publish educational legal content without implying an attorney-client relationship.

---

# 36. UI DETAILS

### Header

Desktop:

```text
NIKHIL SHUKLA
Advocate

About
Practice Areas
Stories
Why Us
Contact

Schedule a Consultation
```

Mobile:

```text
Logo
Menu
```

### Hero

Use a strong editorial layout.

Suggested:

Left:
- small label
- main heading
- paragraph
- CTAs

Right:
- professional portrait / legal visual

Do not use the placeholder box from the old HTML in the final production version.

### Practice Cards

Use restrained icons.

### Stories

Use high-quality editorial cards.

### Footer

Dark premium footer with gold details.

---

# 37. TYPOGRAPHY

Recommended pairing:

Heading:

**Playfair Display / Cormorant Garamond**

Body:

**Inter / Manrope / Source Sans 3**

Do not use more than 2–3 font families.

Optimize font loading.

---

# 38. EXISTING TEMPLATE MIGRATION

Review the supplied HTML before implementation.

The old template contains useful sections but also outdated content such as a cyber-crime-focused hero, "Delhi High Court" branding, unsupported numerical claims, placeholders, and a non-functional contact form.

Use the template for:

- Layout inspiration
- Color direction
- Section hierarchy
- Typography direction

Rebuild the implementation using the selected modern stack rather than simply wrapping the existing HTML.

---

# 39. DO NOT INVENT BUSINESS FACTS

This is critical.

Never invent:

- 12+ years experience
- 300+ cases
- Specific degrees
- Awards
- Bar memberships unless verified/provided
- Client testimonials
- Success rates
- Famous cases
- Guaranteed outcomes
- Exact office chamber numbers
- Fake addresses
- Fake email addresses

If data is missing:

Use a CMS setting or clearly marked admin placeholder.

---

# 40. SEO CONTENT STRATEGY

Create content architecture for future legal educational articles.

Suggested categories:

- Criminal Law
- Bail & Arrest
- Cybercrime
- Matrimonial Law
- Divorce
- Maintenance
- Domestic Violence
- Child Custody
- Legal Awareness

Do not keyword-stuff.

Write for humans first.

---

# 41. INTERNAL LINKING

Implement internal links between:

```text
Home
→ Practice Areas
→ Practice Area Detail
→ Stories
→ Story
→ Contact
```

Practice-area pages should show related stories.

Stories can link back to relevant practice areas.

---

# 42. ADMIN MEDIA LIBRARY

Create a simple media library.

Admin can:

- Upload
- Preview
- Delete
- Copy URL
- Add alt text

Future-ready for folders/categories.

---

# 43. DATABASE INDEXING

Add indexes for:

```text
Story.slug
Story.status
Story.publishedAt
Story.categoryId
PracticeArea.slug
PracticeArea.isPublished
ConsultationRequest.status
ConsultationRequest.createdAt
```

Optimize queries.

Do not fetch unnecessary fields.

---

# 44. API DESIGN

Use predictable endpoints/actions.

Example:

```text
GET    /api/practice-areas
GET    /api/practice-areas/:slug

GET    /api/stories
GET    /api/stories/:slug

POST   /api/consultations

POST   /api/admin/login

GET    /api/admin/stories
POST   /api/admin/stories
PATCH  /api/admin/stories/:id
DELETE /api/admin/stories/:id

GET    /api/admin/consultations
PATCH  /api/admin/consultations/:id

GET    /api/admin/practice-areas
POST   /api/admin/practice-areas
PATCH  /api/admin/practice-areas/:id
DELETE /api/admin/practice-areas/:id
```

If Next.js Server Actions are more appropriate, use them for internal mutations while maintaining a clean service layer.

---

# 45. DEPLOYMENT

Prepare production deployment.

Recommended approach:

Frontend/backend:

**Vercel / equivalent modern Node hosting**

Database:

**Managed PostgreSQL**

Media:

**S3-compatible object storage / Cloudinary / equivalent**

The exact provider should remain configurable.

Prepare:

- Production build
- Environment variables
- Database migration
- Seed command
- Build command
- Start command
- README deployment guide

---

# 46. DEVELOPMENT COMMANDS

Provide working scripts such as:

```bash
npm install
npm run dev
npm run build
npm run start
npm run lint
npm run test
npm run db:migrate
npm run db:seed
```

If the chosen stack differs, document equivalent commands.

---

# 47. README

Create a complete README containing:

1. Project overview
2. Tech stack
3. Folder structure
4. Local setup
5. Environment variables
6. Database setup
7. Migration
8. Seed data
9. Admin setup
10. Running locally
11. Testing
12. Production build
13. Deployment
14. Media configuration
15. Email configuration
16. SEO configuration
17. Security notes
18. Future enhancement roadmap

---

# 48. FINAL QA CHECKLIST

Before considering the project complete, verify:

## Frontend

- [ ] Desktop responsive
- [ ] Tablet responsive
- [ ] Mobile responsive
- [ ] No horizontal overflow
- [ ] Navigation works
- [ ] CTA works
- [ ] Practice Areas work
- [ ] Stories work
- [ ] Story detail works
- [ ] Contact form works
- [ ] Footer links work
- [ ] 404 works

## Backend

- [ ] Database connected
- [ ] Migrations work
- [ ] Seed works
- [ ] Admin authentication works
- [ ] Authorization works
- [ ] Story CRUD works
- [ ] Practice Area CRUD works
- [ ] Consultation CRUD/status works
- [ ] Validation works
- [ ] Error handling works

## Content

- [ ] Approved hero heading used
- [ ] Approved hero paragraph used
- [ ] Approved introduction used
- [ ] "Delhi High Court" removed from standard website marketing copy and replaced with "Court"
- [ ] No unsupported statistics
- [ ] No fake testimonials
- [ ] No fake credentials
- [ ] No fake case outcomes

## SEO

- [ ] Metadata
- [ ] Canonicals
- [ ] Sitemap
- [ ] Robots
- [ ] Open Graph
- [ ] Article schema
- [ ] LegalService/Person schema where supported
- [ ] Breadcrumbs

## Security

- [ ] Secrets protected
- [ ] Admin protected
- [ ] Input validated
- [ ] Uploads validated
- [ ] Rate limiting
- [ ] Secure headers
- [ ] No production credentials in Git

## Performance

- [ ] Images optimized
- [ ] Fonts optimized
- [ ] Minimal JS
- [ ] No unnecessary dependencies
- [ ] Lazy loading
- [ ] Good Lighthouse scores

---

# 49. EXECUTION ORDER

Do not jump directly into styling.

Follow this sequence:

### Phase 1 — Audit

Inspect:

- Existing project
- Existing HTML
- Existing assets
- Existing package.json
- Existing environment files
- Existing database/backend if present
- Existing routes
- Existing components

Report what can be reused and what should be replaced.

### Phase 2 — Architecture

Define:

- Frontend architecture
- Backend architecture
- Database schema
- Authentication
- CMS
- Media strategy
- Deployment strategy

### Phase 3 — Foundation

Implement:

- Project structure
- Design system
- Database
- Authentication
- Core layout
- Navigation
- Footer

### Phase 4 — Public Website

Implement:

- Home
- About
- Practice Areas
- Practice Area Detail
- Stories
- Story Detail
- Contact
- Legal pages

### Phase 5 — Admin

Implement:

- Dashboard
- Story CMS
- Practice Area CMS
- Media
- Consultation management
- Settings

### Phase 6 — SEO / Security / Performance

Implement and test all production requirements.

### Phase 7 — QA

Run:

```text
lint
typecheck
unit tests
build
E2E tests
responsive checks
accessibility checks
```

Fix all errors.

---

# 50. IMPORTANT ANTIGRAVITY BEHAVIOR

You are the implementation agent.

Do not merely explain what should be built.

**Inspect the project and implement it.**

When making decisions:

1. Prefer maintainability.
2. Prefer production-ready architecture.
3. Avoid unnecessary complexity.
4. Preserve the premium legal visual identity.
5. Never fabricate legal/business information.
6. Keep all editable business information centralized.
7. Make the Stories system genuinely usable by a non-developer.
8. Make the consultation workflow genuinely functional.
9. Keep frontend and backend cleanly separated.
10. Do not leave TODO placeholders for core functionality.

If something is missing, create the architecture required to support it rather than silently skipping it.

---

# 51. DEFINITION OF DONE

The project is complete only when:

**A non-technical administrator can:**

- Log in
- Add/edit practice areas
- Create a story
- Add images
- Save a draft
- Preview a story
- Publish a story
- Unpublish a story
- Edit SEO metadata
- Receive consultation requests
- Update contact information
- Update website settings

And a visitor can:

- Understand the legal practice within seconds
- Explore practice areas
- Read educational stories
- Share stories
- Schedule/contact for consultation
- Use the website comfortably on mobile
- Navigate quickly
- Trust the visual presentation
- Find legal disclaimer/privacy information

The result should feel like a **premium custom legal practice website**, not a generic template.

---

# 52. FINAL INSTRUCTION

Start by inspecting the existing project and supplied template.

Then implement the complete solution.

Do not stop after creating the homepage.

Do not stop after creating the frontend.

The final project must include:

**Frontend + Backend + Database + Admin CMS + Stories/Blog + Consultation Management + Media + SEO + Security + Responsive UI + Deployment Documentation.**

Use the supplied branding/reference image and existing HTML as design references, while rebuilding the implementation into a clean, scalable production architecture.

