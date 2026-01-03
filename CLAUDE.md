# Foam Everything - Development Guide

---

## CRITICAL: HYPER-MODERN ANIMATION REQUIREMENTS

> **THIS WEBSITE MUST BE EXTRAORDINARY.**
> Every component EXPLODES to life. Every scroll reveals magic.
> We are demonstrating what modern web design CAN BE.
> If something looks "normal" or "expected", it's WRONG.

### MANDATORY ANIMATION LIBRARIES
```bash
npm install gsap @gsap/react motion
```

1. **GSAP + ScrollTrigger** - Complex scroll-based animations, timelines, physics
2. **Motion.dev** - React component animations, gestures, layout transitions

### ABSOLUTE RULES (DO NOT VIOLATE)

1. **ALL HEADINGS** must have **letter-by-letter animations** - NOT whole-element fades
2. **EVERY SECTION** must have a **UNIQUE scroll reveal** - no repeating animations
3. **ALL BUTTONS** must have **magnetic hover effects** + glow animations
4. **ALL CARDS** must have **3D tilt on hover** + cursor-following glow
5. **Page transitions** must use **cinematic wipes/reveals**
6. **Loading states** must be **animated and engaging**

### WARNING: ANIMATION DEGRADATION

During bug fixes or updates, **DO NOT**:
- Simplify letter animations to whole-element fades
- Remove hover effects to "clean up" code
- Replace unique reveals with generic fade-ins
- Skip magnetic button effects

**THE ANIMATION QUALITY IS THE PRODUCT.**

See: `/.claude/animation-system.md` for complete implementation guide

---

## Project Overview

**Foam Everything** is a spray foam industry merchandise and hype website that serves as:
1. An e-commerce platform for industry-branded apparel and merchandise
2. A hub connecting the spray foam industry ecosystem (SprayFoamTV, SprayFoamRadio, NerfFusion)
3. A promotional platform for industry events (SprayFoam 2026 Vegas Convention)
4. A creative services platform (3D characters, custom decals, NASCAR sponsorships)

---

## Critical New Features (Not in Original Site)

### 1. Vegas 2026 Pre-Order System (TOP PRIORITY)

**NEW:** Customers can pre-order exclusive Vegas 2026 merchandise before the convention.

**Key Features:**
- Pre-order collection with new Vegas 2026 designs
- Early bird pricing (10-15% off regular prices)
- Countdown timer to pre-order cutoff
- Fulfillment options: Ship before event OR Convention pickup
- "Pre-Order Now" badges on products
- Email notifications for order status

**Timeline:**
| Date | Event |
|------|-------|
| Feb 1, 2026 | Pre-orders OPEN |
| Mar 1, 2026 | Pre-order CUTOFF |
| Mar 15, 2026 | Ship pre-orders |
| Mar 22-25, 2026 | Convention pickup |

**See:** `/.claude/preorder-system.md` for full technical specs

---

### 2. SprayFoam 2026 Vegas Event Banner
Add a prominent hero section at the very top of the homepage featuring:

**Event Details:**
- **Event:** SprayFoam Convention & Expo 2026
- **Dates:** March 22-25, 2026
- **Venue:** Westgate Las Vegas Resort & Casino, 3000 Paradise Road, Las Vegas, NV 89109
- **Status:** Exhibit booths are SOLD OUT

**Key Highlights to Feature:**
- "The #1 event for spray foam pros"
- Educational breakout sessions
- Two-day expo hall
- Certification activities (PCP Written Exams, Field Exams)
- Networking events (Sporting Clays Classic, Topgolf Outing)
- National Industry Excellence Awards
- Contractors-Only Breakfast

**Registration Link:** https://sprayfoamshow.org/
**SPFA Link:** https://www.sprayfoam.org/annual-convention-expo/

**Design Notes:**
- Use Vegas-themed imagery (existing `las-vegas.webp`, `sprayfoam-vegas-render.png`)
- Prominent countdown timer to March 22, 2026
- Neon/casino aesthetic matching site theme
- Call-to-action: "Register Now" button linking to sprayfoamshow.org

---

### 3. Industry Hub Section
Create a dedicated section showcasing the spray foam media network:

#### SprayFoamTV.com
- **Type:** 24/7 Streaming Platform
- **Tagline:** "Entertainment for the Spray Foam Industry"
- **Features:**
  - Livestreams and on-demand videos
  - Industry shows: "The Foam Files", "Contractor Chronicles", "Safety First", "Foam Academy"
  - Contractor directory
  - User-submitted content (project walkthroughs, tips, reviews)
- **Logo/Color:** Green/Yellow theme

#### SprayFoamRadio.com
- **Type:** AI Music Platform
- **Tagline:** "DJ FoamBot Productions"
- **Features:**
  - AI-generated industry-themed music
  - Multiple genres (Hip-Hop, Country, Pop, Latin, R&B, Reggae, Electronic)
  - Playlist organization
  - Tracks like "Call Me Mrs. Sprayfoam", "Polyurethane Gang"
- **Style:** Novelty/fun industry entertainment

#### NerfFusion.com
- **Type:** Custom Nerf Accessories E-commerce
- **Products:** 3D-printed Nerf blaster shells styled like Graco Fusion spray foam guns
- **Price Point:** $89-$99
- **Target:** Spray foam pros for convention "foam wars"
- **Tagline:** "Don't be that guy" (without the accessory)
- **Colors:** Blue, Pink, Grey options

**Design Notes:**
- 3-column card layout
- Each card links to respective external site
- Use consistent dark theme with neon accents
- Include brief description and "Visit Site" CTA

---

## Design System Reference

**FULL STYLE GUIDE:** See `/.claude/style-guide.md` for complete CSS

### Color Palette
```css
/* Backgrounds */
--bg-black: #000000;        /* Primary background */
--bg-charcoal: #1a1a1a;     /* Card backgrounds */
--bg-dark-grey: #2d2d2d;    /* Secondary cards */

/* Neon Accents */
--neon-cyan: #00ffff;       /* PRIMARY - Buttons, prices, links */
--neon-pink: #ff0fbb;       /* Highlights, OnlyFoam sections */
--neon-yellow: #EDF000;     /* Headings, special CTAs */
--neon-red: #ff0040;        /* NEW - Vegas 2026, Pre-orders */
--racing-red: #e31937;      /* NASCAR section background */

/* Text */
--text-white: #ffffff;
--text-grey: #b3b3b3;
```

### Glow Effects (CRITICAL)
The site uses **NEON GLOW** effects extensively:
- **Cyan glow** on primary buttons (most common)
- **Red glow** for pre-orders and Vegas 2026 features
- **Pink glow** for OnlyFoam sections
- **Yellow glow** for special CTAs

### Button Styles (from PDF)
1. **Cyan Neon** - Pill shape, cyan border + glow (primary)
2. **Gold/Yellow** - Solid gold, rounded (Swag Wars)
3. **Black + Yellow border** - NASCAR section
4. **Black + Red glow** - Pre-orders (NEW)
5. **Red Neon** - Vegas 2026 featured items (NEW)
6. **White + Blue border** - Vegas products
7. **Magenta** - OnlyFoam section

### Visual Style
- **Pure black backgrounds** (#000000)
- **Neon/cyberpunk aesthetic** with glowing elements
- **High contrast** - bright neon on black
- **Card backgrounds** - dark charcoal (#1a1a1a)
- **Rounded corners** - 20-24px on cards, pill buttons
- **Gradient overlays** on hero images

---

## Product Collections

### 1. Foam Everything (Main Brand)
- Hoodies: $38-$53
- Longsleeves: $30-$34
- T-Shirts: $25-$28.50
- Colors: Black, Pink, Aqua

### 2. Spray Foam Racing (NASCAR)
- Racing Hoodies, Longsleeves, T-Shirts
- NASCAR car branding program
- Company sponsorship signup

### 3. Vegas 2026 Collection (PRE-ORDER AVAILABLE)
- **NEW DESIGNS** for 2026 convention
- Pre-order: Feb 1 - Mar 1, 2026
- Early bird pricing (10-15% off)
- Fulfillment: Ship before event OR convention pickup
- T-Shirts, Hoodies, Longsleeves, possibly Hats
- Limited edition / exclusive colorways

### 4. OnlyFoam Brand
- Alternative brand line
- Virtual metaverse space (Spatial.io)
- 3D character services

### 5. Decals & Services
- UV Coated Decal Packs: $25 each
- Custom logo decals
- 3D Character File: $100

---

## Technical Stack (Recommended)

```
Frontend:    Next.js 14+ (App Router)
Styling:     Tailwind CSS
E-commerce:  Shopify Storefront API / Medusa
Payments:    Stripe
Hosting:     Vercel
Database:    PostgreSQL (Supabase/Neon)
Auth:        NextAuth.js / Clerk
3D:          Three.js / React Three Fiber
```

---

## Site Structure

### Homepage Sections (Top to Bottom)
1. **Vegas 2026 Event Banner** (NEW - Top priority)
2. **Industry Hub Links** (NEW - SprayFoamTV, Radio, NerfFusion)
3. Hero Banner with CTA buttons
4. Swag Wars Signup
5. NASCAR Sponsorship Section
6. Product Collection Grids
7. 3D Brand Services
8. UV Coated Decals
9. 3D Interactive Section
10. Shop Preview
11. Footer

### Pages Required
- `/` - Homepage
- `/shop` - Product catalog
- `/shop/[category]` - Category pages
- `/product/[slug]` - Product detail
- `/cart` - Shopping cart
- `/checkout` - Checkout flow
- `/account` - User dashboard
- `/swagwars` - SwagWars signup
- `/spray-foam-3d` - 3D interactive demo
- `/vegas-2026` - Event info page (NEW)

---

## External Integrations

### Virtual Spaces (Spatial.io)
- OnlyFoam Club: https://www.spatial.io/s/OnlyFoam-Club-64044f6c74c5bd1700ce915a
- Foam Mall: https://www.spatial.io/s/FOAM-MALL-61f4d4fc43d810000180d55c

### External Services
- NASCAR Signup: https://sprayfoamgames.com/nascar-signup/
- Custom Decals: https://sweatshopswag.com/uv-decals/
- Only-Foam.com: Redirects to Spatial.io

### Event Links
- SprayFoam Show: https://sprayfoamshow.org/
- SPFA: https://www.sprayfoam.org/

---

## Image Assets

All images in `/images/` folder:
- **Logo:** smlogo.png
- **Banners:** Foam-Everything-Header.jpg/webp, swagwars-trenches.jpg
- **NASCAR:** sprayfoam_daytona_nascar_allstate.png, sprayfoam-vegas-render.png
- **Products:** See `/docs/planning/06-images-inventory.md`

**Note:** Vegas collection images are large (5.77 MB) - need optimization

---

## Development Commands

```bash
# Install dependencies
npm install

# Development server
npm run dev

# Build for production
npm run build

# Run tests
npm test

# Lint
npm run lint
```

---

## Key Files Reference

| Document | Path | Purpose |
|----------|------|---------|
| Site Overview | `/docs/planning/01-site-overview.md` | Project summary |
| Design System | `/docs/planning/02-design-system.md` | Colors, typography |
| Site Structure | `/docs/planning/03-site-structure.md` | Navigation, layouts |
| Products | `/docs/planning/04-products-catalog.md` | Full product list |
| Copy/Content | `/docs/planning/05-content-copy.md` | All text content |
| Images | `/docs/planning/06-images-inventory.md` | Image catalog |
| Tech Specs | `/docs/planning/07-technical-requirements.md` | Stack, APIs |
| Implementation | `/docs/planning/08-implementation-plan.md` | Dev phases |
| Additional | `/docs/planning/09-additional-pages.md` | SwagWars, 3D, URLs |

---

## Priority Tasks

1. [ ] Set up Next.js project with Tailwind
2. [ ] Implement design system (colors, typography)
3. [ ] Create Vegas 2026 hero banner component
4. [ ] Create Industry Hub section (TV, Radio, NerfFusion)
5. [ ] Build homepage with all sections
6. [ ] Implement product catalog
7. [ ] Add e-commerce functionality
8. [ ] Integrate 3D viewer (Three.js)
9. [ ] Set up authentication
10. [ ] Deploy to Vercel

---

## Notes for Claude

- Always reference the planning docs in `/docs/planning/` for details
- Use existing images from `/images/` folder
- Maintain dark theme with neon accents throughout
- Vegas 2026 banner should be the FIRST thing visitors see
- Industry hub establishes Foam Everything as the central platform
- All external links should open in new tabs
- Mobile-first responsive design is essential
