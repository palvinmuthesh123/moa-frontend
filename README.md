# Mall of America Interactive Sales Deck

Interactive, browser-based sales deck for Mall of America (MOA), designed for leasing prospects, sponsors, and event partners.

## Project Goal
Replace fragmented sales materials (videos, PDFs, spreadsheets) with one cinematic, interactive tool that:
- Creates emotional buy-in quickly
- Explains MOA without live narration
- Drives action toward leasing, sponsorship, and bookings

## Chosen Property
- Property: Mall of America (Bloomington, Minnesota)
- Category fit: One of the world’s largest malls (as required in the assignment brief)

## Live Product Structure
The app is intentionally deck-first with expandable sub-modules.

### Core Deck (Phase 1)
- Opening / cinematic intro gateway
- Why This Property (scale, reach, demographics)
- Retail
- Luxury
- Dining & Lifestyle
- Attractions & Entertainment
- Events & Platform
- Contact / conversion section

### Expandable Architecture (Phase 2-ready, working)
- Events booking flow: `/book-event`
- Sponsorship flow: `/partnership-deck`
- Leasing paths flow: `/leasing-options`, `/luxury-inquiry`
- Venue module flow: `/venue-inquiry`
- General inquiry flow: `/contact-us`
- Opportunity page: `/opportunity`

## Experience Requirements Coverage
- Non-linear navigation: sticky navigation + direct section jumps + direct route access
- Video-first storytelling: intro video + section video modules
- Luxury-style UI: high-contrast premium palette, clean chrome, motion-led storytelling
- Responsive: desktop/tablet-first with mobile-safe layouts
- Action-oriented flows: every primary homepage CTA routes to a dedicated page or modal-backed action
- Standalone use: can be explored async without a salesperson present

## Tech Stack
- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- Framer Motion
- React Intersection Observer
- Lucide React

Backend for leads (separate folder):
- NestJS + MongoDB (lead capture API)

## Local Setup
### Frontend
```bash
cd mall-sales-deck
npm install
npm run dev
```
Open `http://localhost:3000`

### Backend (optional for lead submission)
```bash
cd ../mall-sales-deck-backend
npm install
npm run start:dev
```
Backend default: `http://localhost:4000`

### Frontend env
Create `.env.local` in frontend root:
```bash
NEXT_PUBLIC_API_URL=http://localhost:4000
```

## Build & Validation
```bash
npm run build
npm start
```

## Current Routes
- `/`
- `/opportunity`
- `/leasing-options`
- `/book-event`
- `/luxury-inquiry`
- `/venue-inquiry`
- `/partnership-deck`
- `/contact-us`

## Design/Engineering Notes
- Intro flow includes skip-safe return behavior (`?skipIntro=1`) to avoid replay when coming back from subpages
- Primary CTAs use explicit route or modal outcomes
- Modal system is reusable via `components/ActionModal.tsx`
- Components are section-modular for easy replacement/extension

## AI Usage
Used as development accelerator for:
- Content structuring and deck narrative refinement
- UX iteration and conversion-path design
- Visual composition direction and asset selection support

## Submission Checklist (Assignment)
- Interactive deck experience: complete
- Expandable architecture with working sub-modules: complete
- Source code with setup instructions: complete
- Deployable on Vercel/Netlify: ready (deployment action required by repo owner)
- Live URL + public GitHub repo + email submission: pending final owner submission

## What You Still Need To Submit
1. Deploy to Vercel/Netlify and copy live URL
2. Push to public GitHub repository
3. Email live URL + repository (and optional write-up) to `medi@liat.ai`
