# Advocate Nikhil Shukla — Website

A production-grade legal practice website for Advocate Nikhil Shukla.

## Tech Stack
- **Framework**: Next.js 15 App Router + TypeScript
- **Styling**: Tailwind CSS + Custom CSS Design System
- **Database**: PostgreSQL via Vercel Postgres (Neon)
- **ORM**: Prisma 5
- **Auth**: JWT via jose (httpOnly cookies)
- **Media**: Cloudinary
- **Deployment**: Vercel

## Quick Start

### 1. Clone and Install
`ash
git clone <repo-url>
cd nikhil-shukla-site
npm install
`

### 2. Environment Variables
Copy the example file and fill in your values:
`ash
cp .env.example .env.local
`

Required variables:
| Variable | Description |
|----------|-------------|
| DATABASE_URL | PostgreSQL connection string |
| NEXTAUTH_SECRET | Random 32+ char secret |
| NEXT_PUBLIC_SITE_URL | Your production URL |
| CLOUDINARY_CLOUD_NAME | Cloudinary cloud name |
| CLOUDINARY_API_KEY | Cloudinary API key |
| CLOUDINARY_API_SECRET | Cloudinary API secret |
| ADMIN_EMAIL | Admin login email |
| ADMIN_PASSWORD | Admin initial password (change after first login) |

### 3. Database Setup
`ash
npm run db:generate    # Generate Prisma client
npm run db:push        # Push schema to database
npm run db:seed        # Seed initial data + admin user
`

### 4. Run Locally
`ash
npm run dev
`

### 5. Access Admin
Navigate to: http://localhost:3000/admin/login

Login with your ADMIN_EMAIL and ADMIN_PASSWORD from .env.local.

**Change your password immediately after first login.**

## Project Structure
`
src/
  app/
    (public)/           # Public website pages
    admin/              # Admin CMS
    api/                # API routes
  components/
    layout/             # Navbar, Footer
    seo/                # JSON-LD schema
  lib/
    db/                 # Prisma client
    validation/         # Zod schemas
    site-config.ts      # Central config
  types/
prisma/
  schema.prisma         # Database schema
  seed.ts               # Seed data
public/
  advocate-portrait.jpg # Advocate portrait (replace with real photo)
`

## Pages

### Public
- / — Homepage
- /practice-areas — All practice areas
- /practice-areas/[slug] — Practice area detail
- /stories — Blog/stories listing
- /stories/[slug] — Story/article detail
- /contact — Consultation form
- /privacy-policy — Privacy policy
- /disclaimer — Legal disclaimer

### Admin (protected)
- /admin/login — Admin login
- /admin/dashboard — Dashboard overview
- /admin/stories — Story management
- /admin/stories/new — Create story
- /admin/consultations — View consultation requests
- /admin/practice-areas — Practice area overview

## Deployment on Vercel

1. Push to GitHub
2. Connect repo to Vercel
3. Add environment variables in Vercel dashboard
4. Set up Vercel Postgres (Neon) database
5. Run prisma migrate deploy as a build step
6. Deploy

### Vercel Build Settings
`
Build Command: npm run build
Install Command: npm install
Output Directory: .next
`

### Post-deploy
`ash
npx prisma migrate deploy
npx tsx prisma/seed.ts
`

## Content Management

### Adding Stories
1. Login at /admin/login
2. Go to Stories → New Story
3. Fill in title, content, excerpt
4. Set status to Published
5. Save

### Contact Information
Update NEXT_PUBLIC_PHONE, NEXT_PUBLIC_WHATSAPP, NEXT_PUBLIC_EMAIL, NEXT_PUBLIC_ADDRESS in environment variables.

## Security Notes
- Admin routes protected by httpOnly JWT cookie
- All form inputs validated with Zod
- Rate limiting on consultation form (5/hour per IP)
- Security headers configured in next.config.ts
- Never commit .env or .env.local to git

## Replacing the Portrait
Replace /public/advocate-portrait.jpg with Advocate Nikhil Shukla's actual professional photograph.

---
© 2026 Nikhil Shukla, Advocate. All rights reserved.