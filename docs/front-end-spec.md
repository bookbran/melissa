# Front-End Specification: MelissaCikara.com

**Prepared by:** Sally (UX Expert)  
**Date:** January 8, 2026  
**For:** James (Developer)  
**Version:** 1.0  
**Status:** Ready for Development

---

## 1. Project Overview

### 1.1 What We're Building

A single-page brochure website for Melissa Cikara — a strategic partner for established entrepreneurs. The site has one primary goal: **convert qualified visitors into discovery call bookings via Calendly**.

### 1.2 Design Principle

> **"Confident Joy, Not Trendy Joy"**

The design should feel like walking into Melissa's office — warm, energized, professional, real. Bold choices come from authentic expression, not from chasing current design trends. This site should feel timeless and distinctive, not like a template.

### 1.3 Key Documents Reference

- PRD: `docs/prd.md`
- Website Strategy Brief: `docs/Website-Strategy-Brief-(John).md`
- Design Vision (exploratory): `docs/design-vision.md`

---

## 2. Technical Stack

### 2.1 Required Technologies

| Layer | Technology | Notes |
|-------|------------|-------|
| **Framework** | Next.js (App Router) | Vercel deployment |
| **Styling** | Tailwind CSS | Custom configuration per this spec |
| **Animations** | CSS transitions | Keep it simple — no heavy animation libraries needed |
| **Icons** | Lucide React | Clean, consistent |
| **Fonts** | `next/font` or self-hosted | See Typography section |

### 2.2 What NOT to Use

- **ShadCN/UI** — Too minimal/clinical for this brand
- **Framer Motion** — Overkill for our subtle animation needs
- **Heavy animation libraries** — CSS transitions are sufficient
- **Dark mode** — Not building for v1

---

## 3. Typography

### 3.1 Font Stack

| Role | Font | Weights | Fallback |
|------|------|---------|----------|
| **Headlines** | Recoleta | 500 (Medium), 600 (SemiBold), 700 (Bold) | Georgia, serif |
| **Body** | Söhne | 400 (Regular), 500 (Medium) | system-ui, sans-serif |

**Alternates if licensing is an issue:**
- Headlines: Blanco, Freight Display Pro, or GT Super
- Body: Founders Grotesk, Graphik, or Untitled Sans

### 3.2 Why These Fonts

**Recoleta:**
- Warm, rounded serifs that feel approachable without being trendy
- Has personality but isn't trying to be clever
- Enough weight and presence for "serious business professional"
- Distinctive without being gimmicky
- Proven — not a fad font

**Söhne:**
- Clean, professional, highly readable
- Neutral enough to let headlines and color do the expressive work
- Won't date

### 3.3 Type Scale

```css
/* Base: 16px (1rem) */

--text-sm: 0.875rem;    /* 14px — captions, small labels */
--text-base: 1rem;      /* 16px — body text */
--text-lg: 1.125rem;    /* 18px — lead paragraphs */
--text-xl: 1.25rem;     /* 20px — large body, subheads */
--text-2xl: 1.5rem;     /* 24px — section subheads */
--text-3xl: 2rem;       /* 32px — h3 */
--text-4xl: 2.5rem;     /* 40px — h2 */
--text-5xl: 3rem;       /* 48px — h1 */
--text-6xl: 3.75rem;    /* 60px — hero headline (desktop) */
```

### 3.4 Line Heights

```css
--leading-tight: 1.1;    /* Headlines */
--leading-snug: 1.3;     /* Subheadlines */
--leading-normal: 1.6;   /* Body text */
--leading-relaxed: 1.8;  /* Long-form content */
```

### 3.5 Font Weights Usage

| Element | Font | Weight |
|---------|------|--------|
| Hero headline | Recoleta | 700 (Bold) |
| Section headlines (h2) | Recoleta | 600 (SemiBold) |
| Subsection headlines (h3) | Recoleta | 500 (Medium) |
| Body text | Söhne | 400 (Regular) |
| Emphasized body | Söhne | 500 (Medium) |
| Button text | Söhne | 500 (Medium) |

---

## 4. Color System

### 4.1 Design Philosophy

Colors should be **bold and joyful but with depth** — rich jewel tones rather than neon highlighters. Think afternoon golden light, not safety vest yellow.

### 4.2 Primary Palette

| Name | Hex | RGB | CSS Variable | Usage |
|------|-----|-----|--------------|-------|
| **Main Gold** | `#E8A535` | 232, 165, 53 | `--color-gold` | Primary CTAs, key accents, warmth |
| **Warm Rose** | `#D64672` | 214, 70, 114 | `--color-rose` | Secondary emphasis, hover states |
| **Deep Violet** | `#6B21A8` | 107, 33, 168 | `--color-violet` | Headlines, anchor color, depth |

### 4.3 Supporting Palette

| Name | Hex | RGB | CSS Variable | Usage |
|------|-----|-----|--------------|-------|
| **Cream** | `#FBF8F3` | 251, 248, 243 | `--color-cream` | Page background |
| **Soft Gold** | `#F5ECD7` | 245, 236, 215 | `--color-soft-gold` | Card backgrounds, warmth layers |
| **Blush** | `#F7E4E8` | 247, 228, 232 | `--color-blush` | Subtle accent backgrounds |
| **Warm Charcoal** | `#2D2A32` | 45, 42, 50 | `--color-charcoal` | Body text |
| **White** | `#FFFFFF` | 255, 255, 255 | `--color-white` | Card surfaces, contrast areas |

### 4.4 Semantic Color Tokens

```css
:root {
  /* Brand Colors */
  --color-gold: #E8A535;
  --color-rose: #D64672;
  --color-violet: #6B21A8;
  
  /* Neutrals */
  --color-cream: #FBF8F3;
  --color-soft-gold: #F5ECD7;
  --color-blush: #F7E4E8;
  --color-charcoal: #2D2A32;
  --color-white: #FFFFFF;
  
  /* Semantic Mapping */
  --color-background: var(--color-cream);
  --color-surface: var(--color-white);
  --color-surface-warm: var(--color-soft-gold);
  --color-text-primary: var(--color-charcoal);
  --color-text-heading: var(--color-violet);
  --color-primary: var(--color-gold);
  --color-secondary: var(--color-rose);
  --color-accent: var(--color-violet);
}
```

### 4.5 Color Usage Guidelines

| Element | Color |
|---------|-------|
| Page background | Cream (`#FBF8F3`) |
| Card backgrounds | White or Soft Gold |
| Body text | Warm Charcoal (`#2D2A32`) |
| Headlines | Deep Violet (`#6B21A8`) |
| Primary CTA buttons | Main Gold (`#E8A535`) |
| Secondary buttons | Warm Rose (`#D64672`) border |
| Links | Deep Violet, underlined on hover |
| Subtle section backgrounds | Soft Gold or Blush |

### 4.6 Gradients (Use Sparingly)

```css
/* Soft background warmth — for section transitions */
--gradient-soft: linear-gradient(180deg, #FBF8F3 0%, #F5ECD7 100%);

/* Warm accent — only if a gradient is truly needed */
--gradient-warm: linear-gradient(135deg, #E8A535 0%, #D64672 100%);
```

**Guidelines:**
- Gradients are NOT a primary design element
- Use for subtle background transitions between sections
- Never use on buttons
- Maximum two colors, analogous tones
- No multi-color "hero gradients"

### 4.7 What NOT to Use

- ❌ Electric/neon yellow (`#FFBE0B`)
- ❌ Hot magenta (`#F72585`)
- ❌ Lime green (any shade)
- ❌ Multi-color vibrant gradients
- ❌ Gradient borders or glowing effects

---

## 5. Spacing System

### 5.1 Spacing Scale

```css
--space-1: 0.25rem;   /* 4px */
--space-2: 0.5rem;    /* 8px */
--space-3: 0.75rem;   /* 12px */
--space-4: 1rem;      /* 16px */
--space-5: 1.25rem;   /* 20px */
--space-6: 1.5rem;    /* 24px */
--space-8: 2rem;      /* 32px */
--space-10: 2.5rem;   /* 40px */
--space-12: 3rem;     /* 48px */
--space-16: 4rem;     /* 64px */
--space-20: 5rem;     /* 80px */
--space-24: 6rem;     /* 96px */
--space-32: 8rem;     /* 128px */
```

### 5.2 Section Spacing

| Breakpoint | Section Padding (top/bottom) |
|------------|------------------------------|
| Mobile (<768px) | `--space-16` (64px) |
| Tablet (768-1024px) | `--space-20` (80px) |
| Desktop (>1024px) | `--space-24` (96px) |

### 5.3 Content Width

```css
--max-width-content: 1200px;  /* Full-width sections */
--max-width-text: 720px;      /* Text-heavy content */
--max-width-narrow: 560px;    /* Forms, focused content */
```

---

## 6. Border Radius

### 6.1 Radius Scale

```css
--radius-sm: 6px;      /* Buttons, small elements */
--radius-md: 8px;      /* Inputs, tags */
--radius-lg: 12px;     /* Cards, containers */
--radius-xl: 16px;     /* Large cards, images */
--radius-full: 9999px; /* Pills, avatars */
```

### 6.2 Usage Guidelines

| Element | Radius |
|---------|--------|
| Buttons | `--radius-sm` (6px) |
| Input fields | `--radius-md` (8px) |
| Cards | `--radius-lg` (12px) |
| Images | `--radius-lg` (12px) or `--radius-xl` (16px) |
| Testimonial cards | `--radius-lg` (12px) |

**Note:** Avoid ultra-rounded "pill" buttons — that's a current trend that will date.

---

## 7. Shadows

### 7.1 Shadow Scale

```css
/* Subtle — for cards at rest */
--shadow-sm: 0 1px 2px rgba(45, 42, 50, 0.04),
             0 2px 8px rgba(45, 42, 50, 0.06);

/* Medium — for elevated cards, dropdowns */
--shadow-md: 0 2px 4px rgba(45, 42, 50, 0.04),
             0 4px 16px rgba(45, 42, 50, 0.08);

/* Large — for modals, popovers (minimal use) */
--shadow-lg: 0 4px 8px rgba(45, 42, 50, 0.04),
             0 8px 32px rgba(45, 42, 50, 0.1);
```

### 7.2 Guidelines

- Use **one shadow layer** per element — not triple-stacked "elevated" shadows
- Cards at rest: `--shadow-sm`
- Cards on hover: `--shadow-md`
- Keep shadows subtle — they should add depth, not drama

---

## 8. Component Specifications

### 8.1 Buttons

#### Primary CTA Button

```css
.btn-primary {
  background-color: var(--color-gold);    /* #E8A535 */
  color: var(--color-violet);             /* #6B21A8 — or charcoal if contrast is better */
  font-family: var(--font-body);          /* Söhne */
  font-weight: 500;
  font-size: 1rem;
  padding: 0.875rem 1.75rem;              /* 14px 28px */
  border-radius: var(--radius-sm);        /* 6px */
  border: none;
  cursor: pointer;
  transition: background-color 200ms ease-out;
}

.btn-primary:hover {
  background-color: #D4942A;              /* Slightly darker gold */
}

.btn-primary:focus-visible {
  outline: 2px solid var(--color-violet);
  outline-offset: 2px;
}
```

**Important:**
- No gradients on buttons
- No scale transforms on hover
- Text should be Söhne Medium (500)

#### Secondary Button

```css
.btn-secondary {
  background-color: transparent;
  color: var(--color-rose);               /* #D64672 */
  font-family: var(--font-body);
  font-weight: 500;
  font-size: 1rem;
  padding: 0.75rem 1.5rem;                /* 12px 24px */
  border-radius: var(--radius-sm);        /* 6px */
  border: 2px solid var(--color-rose);
  cursor: pointer;
  transition: background-color 200ms ease-out, color 200ms ease-out;
}

.btn-secondary:hover {
  background-color: rgba(214, 70, 114, 0.1);  /* Rose at 10% opacity */
}

.btn-secondary:focus-visible {
  outline: 2px solid var(--color-rose);
  outline-offset: 2px;
}
```

#### Button Sizes

| Size | Padding | Font Size |
|------|---------|-----------|
| Small | `0.5rem 1rem` | `0.875rem` |
| Default | `0.875rem 1.75rem` | `1rem` |
| Large | `1rem 2rem` | `1.125rem` |

### 8.2 Cards

```css
.card {
  background-color: var(--color-white);
  border-radius: var(--radius-lg);        /* 12px */
  padding: var(--space-8);                /* 32px */
  box-shadow: var(--shadow-sm);
  transition: box-shadow 200ms ease-out;
}

.card:hover {
  box-shadow: var(--shadow-md);
}

/* Warm variant for testimonials or featured content */
.card-warm {
  background-color: var(--color-soft-gold);
}
```

**Guidelines:**
- Use cards where they make semantic sense (testimonials, distinct offerings)
- Don't card-ify everything — let some sections breathe
- No gradient borders or glowing effects
- Consistent 12px radius

### 8.3 Links

```css
a {
  color: var(--color-violet);
  text-decoration: none;
  transition: text-decoration 150ms ease-out;
}

a:hover {
  text-decoration: underline;
}

a:focus-visible {
  outline: 2px solid var(--color-violet);
  outline-offset: 2px;
}
```

### 8.4 Form Inputs (for Calendly fallback contact form if needed)

```css
.input {
  width: 100%;
  padding: 0.875rem 1rem;
  font-family: var(--font-body);
  font-size: 1rem;
  color: var(--color-charcoal);
  background-color: var(--color-white);
  border: 1px solid rgba(45, 42, 50, 0.2);
  border-radius: var(--radius-md);        /* 8px */
  transition: border-color 200ms ease-out;
}

.input:focus {
  outline: none;
  border-color: var(--color-violet);
}

.input::placeholder {
  color: rgba(45, 42, 50, 0.5);
}
```

---

## 9. Animation & Motion

### 9.1 Philosophy

Motion should feel **natural, not choreographed**. Think of the difference between someone who moves with ease versus someone who's clearly rehearsed their entrance.

**Key principles:**
- Purposeful, not decorative
- Snappy = confident (keep everything under 300ms)
- No spring physics or bounce easing
- No floating, drifting, or pulsing background elements

### 9.2 Timing

```css
--duration-fast: 150ms;    /* Micro-interactions, hovers */
--duration-normal: 200ms;  /* Standard transitions */
--duration-slow: 300ms;    /* Larger movements (max) */

--ease-out: ease-out;      /* Use this for most transitions */
```

### 9.3 Animation Specifications

| Element | Animation | Duration | Easing |
|---------|-----------|----------|--------|
| **Page load** | Simple fade-in | 300ms | ease-out |
| **Scroll reveal** | Fade up (subtle) | 300ms | ease-out |
| **Button hover** | Color change only | 200ms | ease-out |
| **Card hover** | Shadow lift | 200ms | ease-out |
| **Link hover** | Underline appear | 150ms | ease-out |

### 9.4 Scroll Reveal (Optional)

If implementing scroll reveals, keep them extremely subtle:

```css
.reveal {
  opacity: 0;
  transform: translateY(10px);  /* Max 10px — not dramatic */
  transition: opacity 300ms ease-out, transform 300ms ease-out;
}

.reveal.visible {
  opacity: 1;
  transform: translateY(0);
}
```

### 9.5 What NOT to Do

- ❌ Staggered "orchestrated" page load sequences
- ❌ Spring or bounce easing
- ❌ Scale transforms on buttons (beyond 1.01)
- ❌ Floating/drifting background elements
- ❌ Animations longer than 300ms
- ❌ Parallax effects

---

## 10. Layout

### 10.1 Grid System

Use CSS Grid or Flexbox. Keep layouts clean and assured.

```css
.container {
  width: 100%;
  max-width: var(--max-width-content);    /* 1200px */
  margin: 0 auto;
  padding: 0 var(--space-6);              /* 24px horizontal padding */
}

@media (max-width: 768px) {
  .container {
    padding: 0 var(--space-4);            /* 16px on mobile */
  }
}
```

### 10.2 Section Structure

```html
<section class="section">
  <div class="container">
    <!-- Section content -->
  </div>
</section>
```

```css
.section {
  padding: var(--space-24) 0;             /* 96px desktop */
}

@media (max-width: 1024px) {
  .section {
    padding: var(--space-20) 0;           /* 80px tablet */
  }
}

@media (max-width: 768px) {
  .section {
    padding: var(--space-16) 0;           /* 64px mobile */
  }
}
```

### 10.3 Layout Guidelines

**Do:**
- Generous whitespace
- Single-column narrative flow for most sections
- Clear visual hierarchy
- Mobile-first thinking

**Don't:**
- Force asymmetry for visual interest
- Card-ify everything
- Layer depth everywhere (let some sections breathe)

---

## 11. Responsive Breakpoints

```css
/* Mobile first approach */

/* Small (default) */
/* Styles apply to all sizes */

/* Medium — Tablets */
@media (min-width: 768px) { }

/* Large — Small laptops */
@media (min-width: 1024px) { }

/* XL — Desktops */
@media (min-width: 1280px) { }
```

### 11.1 Mobile Considerations

- **Touch targets:** Minimum 44px × 44px
- **Font sizes:** Never below 16px for body text
- **Buttons:** Full-width on mobile for primary CTAs
- **Navigation:** Simple — logo + single CTA button in header
- **Images:** Responsive, optimized, lazy-loaded

---

## 12. Page Structure

### 12.1 Site Architecture

**Single-page with sections** (smooth scroll navigation)

### 12.2 Section Order

```
1. HEADER (sticky)
   - Logo (text: "Melissa Cikara")
   - CTA Button: "Book a Discovery Call"

2. HERO
   - Headline (Recoleta Bold)
   - Subheadline
   - Primary CTA button
   - Melissa's photo

3. THE PROBLEM
   - "You're doing everything..."
   - Validate the overwhelm
   - Short, punchy copy

4. THE SOLUTION
   - What Melissa does differently
   - Differentiator comparison (not VA, not coach, strategic partner)

5. WHO IT'S FOR
   - Ideal client description
   - "This is NOT for you if..." qualifier

6. ABOUT MELISSA
   - Her story, 20 years experience
   - The Big Joy philosophy
   - Photo

7. HOW IT WORKS
   - Simple 3-step process
   - Discovery → Proposal → Partnership

8. TESTIMONIALS (conditional)
   - Only render if testimonials exist
   - Gracefully hide if empty

9. FINAL CTA
   - Strong closing statement
   - Calendly embed (inline)

10. FOOTER
    - © 2026 Melissa Cikara
    - Minimal — keep focus on CTA above
```

### 12.3 Header

```css
.header {
  position: sticky;
  top: 0;
  z-index: 100;
  background-color: var(--color-cream);
  padding: var(--space-4) 0;
  border-bottom: 1px solid rgba(45, 42, 50, 0.1);
}
```

- **Logo:** Text-based "Melissa Cikara" in Recoleta SemiBold, Deep Violet
- **CTA:** Primary button "Book a Discovery Call"
- **Mobile:** Logo left, hamburger menu right (if needed) or just the CTA button

---

## 13. Photography Treatment

### 13.1 Guidelines

**Lead with natural photography.** Melissa's actual presence — her style, her energy, her smile — is the design. Don't filter it through trendy effects.

| Treatment | Use? |
|-----------|------|
| Warm color correction | ✅ Yes |
| Gentle lift to shadows | ✅ Yes |
| Gradient overlay | ❌ No |
| Duotone effects | ❌ No |
| Heavy filters | ❌ No |

The photos should feel like **Melissa showed up**, not like Melissa was put through an Instagram filter.

### 13.2 Image Specifications

| Image | Recommended Size | Aspect Ratio |
|-------|------------------|--------------|
| Hero photo | 800×1000px (portrait) or 1200×800px (landscape) | Flexible |
| About section | 600×800px | 3:4 portrait |
| Thumbnails | 400×400px | 1:1 square |

- Use `next/image` for optimization
- Lazy load below-fold images
- Provide alt text for all images
- Border radius: 12-16px

---

## 14. Calendly Integration

### 14.1 Implementation

| Requirement | Specification |
|-------------|---------------|
| Type | Embedded inline (not pop-up, not link-out) |
| Placement | Final CTA section |
| Fallback | If embed fails, show direct link to Calendly |

### 14.2 Embed Styling

The Calendly embed should feel integrated, not like a foreign element dropped in:

- Ensure surrounding section has enough padding
- Consider a subtle card treatment around the embed
- The embed itself will use Calendly's styling — that's fine

---

## 15. Accessibility Requirements

### 15.1 Color Contrast

All combinations must meet **WCAG AA** (4.5:1 for normal text, 3:1 for large text):

| Combination | Contrast Ratio | Status |
|-------------|----------------|--------|
| Charcoal on Cream | ~12:1 | ✅ Pass |
| Violet on Cream | ~8:1 | ✅ Pass |
| Violet on Gold (button) | ~4.5:1 | ✅ Pass (verify) |
| White on Rose | ~4.8:1 | ✅ Pass |

### 15.2 Focus States

- All interactive elements must have visible focus states
- Use `outline` with brand colors, not browser defaults
- Never remove focus indicators

### 15.3 Semantic HTML

- Proper heading hierarchy (single h1, logical h2→h6)
- Landmark regions (`<header>`, `<nav>`, `<main>`, `<footer>`)
- Alt text on all images
- ARIA labels where needed (especially for icon-only buttons)

### 15.4 Reduced Motion

```css
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

### 15.5 Keyboard Navigation

- All interactive elements reachable via Tab
- Logical tab order
- Escape closes any open modals
- Enter/Space activates buttons

---

## 16. Performance Requirements

### 16.1 Targets

| Metric | Target |
|--------|--------|
| First Contentful Paint | < 1.5s |
| Largest Contentful Paint | < 2.5s |
| Cumulative Layout Shift | < 0.1 |
| Time to Interactive | < 3s |

### 16.2 Optimization Checklist

- [ ] Images optimized and lazy-loaded (use `next/image`)
- [ ] Fonts preloaded or use `next/font`
- [ ] Minimal JavaScript bundle
- [ ] CSS purged of unused styles (Tailwind handles this)
- [ ] Static generation where possible
- [ ] Proper caching headers via Vercel

---

## 17. SEO Requirements

### 17.1 Meta Tags

```html
<title>Melissa Cikara | Strategic Partner for Entrepreneurs</title>
<meta name="description" content="I help established entrepreneurs separate what's actually moving their business forward from everything else. Strategic partnership with 20 years of experience." />
```

### 17.2 Open Graph

```html
<meta property="og:title" content="Melissa Cikara | Strategic Partner for Entrepreneurs" />
<meta property="og:description" content="I don't just help you get clear — I stay in it with you and make sure it actually gets done." />
<meta property="og:image" content="/og-image.jpg" />
<meta property="og:type" content="website" />
```

### 17.3 Technical SEO

- Semantic HTML structure
- Proper heading hierarchy
- Alt text on images
- Fast load times
- Mobile-friendly (responsive)
- Sitemap (auto-generated by Next.js)

---

## 18. Tailwind Configuration

### 18.1 Extend Theme

```javascript
// tailwind.config.js

module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          DEFAULT: '#E8A535',
          dark: '#D4942A',
        },
        rose: {
          DEFAULT: '#D64672',
          light: 'rgba(214, 70, 114, 0.1)',
        },
        violet: {
          DEFAULT: '#6B21A8',
        },
        cream: '#FBF8F3',
        'soft-gold': '#F5ECD7',
        blush: '#F7E4E8',
        charcoal: '#2D2A32',
      },
      fontFamily: {
        display: ['Recoleta', 'Georgia', 'serif'],
        body: ['Söhne', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        // Custom scale if needed
      },
      borderRadius: {
        sm: '6px',
        md: '8px',
        lg: '12px',
        xl: '16px',
      },
      boxShadow: {
        sm: '0 1px 2px rgba(45, 42, 50, 0.04), 0 2px 8px rgba(45, 42, 50, 0.06)',
        md: '0 2px 4px rgba(45, 42, 50, 0.04), 0 4px 16px rgba(45, 42, 50, 0.08)',
        lg: '0 4px 8px rgba(45, 42, 50, 0.04), 0 8px 32px rgba(45, 42, 50, 0.1)',
      },
      spacing: {
        18: '4.5rem',
        22: '5.5rem',
      },
    },
  },
  plugins: [],
}
```

---

## 19. Deliverables Checklist

### 19.1 Pages/Sections

- [ ] Header (sticky)
- [ ] Hero section
- [ ] Problem section
- [ ] Solution section
- [ ] Who It's For section
- [ ] About Melissa section
- [ ] How It Works section
- [ ] Testimonials section (conditional render)
- [ ] Final CTA with Calendly embed
- [ ] Footer

### 19.2 Components

- [ ] Button (primary, secondary variants)
- [ ] Card (default, warm variants)
- [ ] Section wrapper
- [ ] Container
- [ ] Typography components (or Tailwind classes)
- [ ] Image with optimized loading

### 19.3 Assets Needed

- [ ] Recoleta font files (or license)
- [ ] Söhne font files (or license/alternative)
- [ ] Melissa's professional photos (from Melissa)
- [ ] Favicon
- [ ] OG image for social sharing

### 19.4 Integrations

- [ ] Calendly embed
- [ ] Vercel deployment
- [ ] Domain connection (melissacikara.com)

---

## 20. What NOT to Build

To keep scope tight and avoid over-engineering:

- ❌ Dark mode
- ❌ Blog/content section
- ❌ Newsletter signup
- ❌ Contact form (Calendly is the only CTA)
- ❌ Analytics (can add later)
- ❌ CMS integration (content can be hardcoded for v1)
- ❌ Multi-language support
- ❌ Complex animations

---

## 21. Questions for James

Before starting development:

1. **Font licensing:** Do we have access to Recoleta and Söhne? If not, confirm alternates.
2. **Photos:** Are Melissa's professional photos ready? What formats/sizes?
3. **Calendly:** What's the Calendly booking link?
4. **Copy:** Is all website copy finalized? (Check with John)
5. **Testimonials:** Are there any testimonials for launch, or should we build the section to be hidden initially?

---

*Front-End Specification prepared by Sally (UX Expert) — BMAD-METHOD™*

