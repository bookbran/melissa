# Product Requirements Document: MelissaCikara.com

**Version:** 1.0  
**Status:** Draft  
**Date:** January 8, 2026  
**Author:** John (Product Manager)

---

## 1. Overview

### 1.1 Product Summary

A personal brand website for Melissa Cikara — a strategic partner for established entrepreneurs. The site's singular purpose is to communicate Melissa's positioning clearly and convert qualified prospects into discovery call bookings.

### 1.2 Problem Statement

Melissa is launching a strategic partnership service for established entrepreneurs who feel overwhelmed trying to do everything. She needs a professional web presence that:
- Communicates her unique positioning (not a VA, not just a coach — a strategic partner who stays in the work)
- Attracts the right clients and helps wrong-fits self-select out
- Provides a clear, frictionless path to booking a conversation

### 1.3 Goals

| Goal | Success Metric |
|------|----------------|
| **Primary:** Convert qualified visitors to discovery calls | Discovery calls booked via Calendly |
| **Secondary:** Communicate positioning clearly | Visitors understand what Melissa does within 10 seconds |
| **Secondary:** Filter out wrong-fits | Unqualified prospects don't book calls |

---

## 2. Target Users

### 2.1 Ideal Client Profile

| Attribute | Description |
|-----------|-------------|
| **Stage** | Established entrepreneur — NOT brand new. Already earning income, has clients. |
| **Situation** | Wants to GROW — add speaking, launch a membership, expand offerings. Feels buried in everything. |
| **Mindset** | Passionate, decisive, has "heart." Knows they need help but doesn't want just a task-doer. |
| **Pain Points** | Overwhelmed by trying to do everything. Productive procrastination. Can't focus on zone of genius. |
| **Desire** | Relief. Someone in their corner who gets the big picture and helps make it real. |

### 2.2 Who This Is NOT For

- Brand new entrepreneurs still figuring out their offer
- People looking for cheap task execution / VA services
- Anyone not ready for real strategic partnership

---

## 3. Scope

### 3.1 In Scope

- Personal brand website at melissacikara.com
- Clear positioning and messaging
- Embedded Calendly for discovery call booking
- Professional photography integration
- Testimonial display (with graceful handling if none at launch)
- Mobile-responsive design
- Deployment to Vercel

### 3.2 Out of Scope (for v1)

- Blog / content section
- Newsletter / email capture
- Analytics integration
- Contact form (single CTA: Calendly only)
- E-commerce / payments
- Client portal / login

### 3.3 Open Question: Site Architecture

**To be determined by Sally (UX):**

| Option | Consideration |
|--------|---------------|
| **Single-page** | Stronger narrative flow, no navigation decisions, mobile-friendly, simpler |
| **Multi-page** | More content separation, traditional structure, SEO considerations |

Sally will recommend based on content volume, user journey, and visual impact.

---

## 4. Functional Requirements

### 4.1 Core Content Sections

Regardless of single-page vs. multi-page, the site must include these content sections:

| Section | Purpose | Requirements |
|---------|---------|--------------|
| **Hero** | Immediate positioning, emotional hook | Headline, subheadline, primary CTA |
| **Problem/Solution** | Validate visitor's pain, introduce Melissa's approach | Clear messaging on overwhelm → relief |
| **Differentiation** | Distinguish from VA/coach/consultant | What makes Melissa different |
| **Who It's For** | Qualify visitors | Ideal client description, who it's NOT for |
| **About Melissa** | Build trust and connection | Story, experience, photo, personality |
| **How It Works** | Reduce uncertainty | What working together looks like |
| **Testimonials** | Social proof | Display area (may be empty at launch) |
| **CTA** | Convert | Calendly embed, clear call to action |
| **Footer** | Standard info | © Melissa Cikara, any legal requirements |

### 4.2 Calendly Integration

| Requirement | Detail |
|-------------|--------|
| **Type** | Embedded inline (not pop-up, not link-out) |
| **Placement** | Primary CTA section, possibly repeated |
| **Booking Type** | Discovery call (duration TBD by Melissa) |
| **Fallback** | If embed fails, direct link to Calendly |

### 4.3 Testimonials Display

| Requirement | Detail |
|-------------|--------|
| **Initial State** | May launch with 0-1 testimonials |
| **Empty State** | Section should gracefully hide or show placeholder if no testimonials |
| **Future State** | Easy to add testimonials without code changes (content-driven) |
| **Display** | Quote, attribution (name, title/company optional) |

### 4.4 Photography

| Requirement | Detail |
|-------------|--------|
| **Source** | Professional photos provided by Melissa |
| **Usage** | Hero/header area, About section, possibly throughout |
| **Treatment** | Sally to define cropping, filters, presentation style |

---

## 5. Non-Functional Requirements

### 5.1 Performance

- Fast initial load (target < 3s on mobile)
- Optimized images
- Minimal JavaScript bundle

### 5.2 Responsiveness

- Mobile-first design
- Fully responsive across devices
- Touch-friendly interactions

### 5.3 Accessibility

- Semantic HTML
- Adequate color contrast
- Alt text on images
- Keyboard navigable

### 5.4 SEO (Basic)

- Proper meta title and description
- Semantic heading structure
- Open Graph tags for social sharing

---

## 6. Technical Specifications

### 6.1 Platform & Hosting

| Item | Decision |
|------|----------|
| **Build Type** | Custom build (not WordPress, Squarespace, etc.) |
| **Hosting** | Vercel |
| **Domain** | melissacikara.com (owned, to be connected) |
| **Framework** | TBD by James (likely Next.js given Vercel) |

### 6.2 Styling

| Item | Decision |
|------|----------|
| **CSS Framework** | TBD — Tailwind CSS, ShadCN, or similar |
| **Design System** | Sally to define component patterns |
| **Theming** | CSS variables for colors, typography |

### 6.3 Content Management

| Item | Decision |
|------|----------|
| **Copy Updates** | Should be editable without deep code knowledge |
| **Testimonials** | Content-driven (JSON, MDX, or simple config) |
| **Images** | Optimized at build time |

---

## 7. Design Direction

### 7.1 Brand Voice (from Strategy Brief)

- **Warm** — approachable, not corporate
- **Direct** — clear, no fluff
- **Confident** — expert-level, not apologetic
- **Real** — authentic, human
- **Energizing** — conveys excitement and possibility

### 7.2 Visual Direction (for Sally)

| Attribute | Guidance |
|-----------|----------|
| **Aesthetic** | Clean, modern, warm, professional but personal |
| **Colors** | Warm tones, energetic, NOT cold/corporate blues |
| **Typography** | Readable, modern, approachable, clear hierarchy |
| **Imagery** | Melissa's professional photos, authentic feel, no generic stock |
| **Mood** | "Oh shit, she gets me" — confident, relatable, inviting |

### 7.3 Reference Material for Sally

- Screenshot/reference image (to be provided)
- Website Strategy Brief (`docs/Website-Strategy-Brief-(John).md`)
- Melissa's brain dump for voice/personality (`docs/Melissa-brainout.md`)

---

## 8. Content Requirements

### 8.1 Copy Status

| Section | Status |
|---------|--------|
| Headlines/Hero | To be drafted |
| Body copy | To be drafted (starting from Strategy Brief) |
| About Melissa | To be drafted |
| CTAs | "Book a Discovery Call" (or similar) |

### 8.2 Assets Needed

| Asset | Status |
|-------|--------|
| Professional photos | ✅ Available |
| Logo/wordmark | TBD — may just be styled text "Melissa Cikara" |
| Testimonials | 0-1 at launch |
| Favicon | To be created |

---

## 9. Launch Requirements

### 9.1 Pre-Launch Checklist

- [ ] Domain connected to Vercel
- [ ] SSL certificate active (automatic via Vercel)
- [ ] Calendly integration tested
- [ ] Mobile responsiveness verified
- [ ] All copy reviewed and approved by Melissa
- [ ] Photos optimized and placed
- [ ] Meta tags and OG images set
- [ ] Favicon in place

### 9.2 Launch Target

Soft launch target: **Week 7 of Melissa's action plan (Feb 17-23, 2026)**

---

## 10. Handoff Summary

### For Sally (UX Designer)

**Your deliverables:**
1. Recommend single-page vs. multi-page architecture
2. Define color palette and typography
3. Create wireframes/mockups
4. Specify component patterns (buttons, cards, sections)
5. Define responsive breakpoints and mobile treatment
6. Specify testimonial display (including empty state)
7. Image treatment guidance

**Reference materials:**
- This PRD
- `docs/Website-Strategy-Brief-(John).md`
- `docs/Melissa-brainout.md` (for voice/personality)
- Screenshot reference (to be provided)

### For James (Developer)

**After Sally completes design:**
1. Implement site per PRD + Sally's designs
2. Set up Vercel deployment
3. Integrate Calendly embed
4. Optimize for performance
5. Ensure accessibility basics
6. Create content structure that's easy to update

---

## 11. Revision History

| Version | Date | Author | Changes |
|---------|------|--------|---------|
| 1.0 | Jan 8, 2026 | John (PM) | Initial draft |

---

*Document prepared using BMAD-METHOD™*

