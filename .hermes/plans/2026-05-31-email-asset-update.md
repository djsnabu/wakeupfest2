# WakeUpfest Email Asset Update Implementation Plan

> **For Hermes:** Implement directly in this repo; scope is limited to assets and existing page sections.

**Goal:** Update WakeUpfest pages according to the three forwarded emails from nabil@biletti.fi: add supplied artist/speaker/workshop images and partner logos.

**Architecture:** Keep the existing Next.js 16 + Tailwind structure. Store optimized web assets under `public/`, reference them through existing data objects, and add a lightweight partner logo section to the existing partnership page.

**Tech Stack:** Next.js App Router, TypeScript, Tailwind CSS v4, `next/image`, `sharp` for local image conversion.

---

### Task 1: Prepare web assets

**Objective:** Convert email attachments to web-friendly assets with stable filenames.

**Files:**
- Create: `public/artists/mansesteri.webp`
- Create: `public/artists/nupe.webp`
- Create: `public/speakers/tomas-jouhilampi.webp`
- Create: `public/workshops/chitalada-finland.webp`
- Create: `public/partners/worknow.webp`
- Create: `public/partners/sj-saumaus.webp`

**Steps:** Use `sharp` to convert JPG/PNG attachments. Preserve transparency for logos where possible.

### Task 2: Extend data model

**Objective:** Add image fields and partner data in one source of truth.

**Files:**
- Modify: `src/types/index.ts`
- Modify: `src/lib/data.ts`

**Steps:** Add optional `image`/`imageFit` to `Workshop`, create `Partner` interface, add `partners` array, set images for Tomas, Mansesteri, Nupe, Chitalada, Worknow, SJ-Saumaus.

### Task 3: Render workshop and partner imagery

**Objective:** Show the new visual material in existing pages.

**Files:**
- Modify: `src/components/workshops/WorkshopCard.tsx`
- Modify: `src/app/kumppanuudet/page.tsx`

**Steps:** Let workshop cards render `workshop.image` above content. Add “Mukana tukemassa” partner logo grid before contact section.

### Task 4: Verify

**Objective:** Ensure the site builds and lint passes.

**Commands:**
- `npm run lint`
- `npm run build`
- `git diff --stat`
