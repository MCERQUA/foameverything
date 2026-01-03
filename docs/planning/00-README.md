# Foam Everything - Website Recreation Planning

## Project Overview
This folder contains comprehensive documentation for recreating the foameverything.com website.

**Original Site:** https://foameverything.com
**Analysis Date:** January 2, 2026

---

## Documentation Index

| File | Description |
|------|-------------|
| [01-site-overview.md](./01-site-overview.md) | High-level overview of the website, its purpose, and key features |
| [02-design-system.md](./02-design-system.md) | Color palette, typography, visual styles, and design elements |
| [03-site-structure.md](./03-site-structure.md) | Navigation, page layouts, and section breakdown |
| [04-products-catalog.md](./04-products-catalog.md) | Complete product inventory with prices and specifications |
| [05-content-copy.md](./05-content-copy.md) | All text content, headings, CTAs, and copy from the site |
| [06-images-inventory.md](./06-images-inventory.md) | Catalog of all downloaded images with descriptions |
| [07-technical-requirements.md](./07-technical-requirements.md) | Tech stack options, features, API design, and database schema |
| [08-implementation-plan.md](./08-implementation-plan.md) | Step-by-step development phases and milestones |
| [09-additional-pages.md](./09-additional-pages.md) | SwagWars, 3D page, external integrations, complete URL list |

---

## Image Assets

All images have been downloaded to `/images/` folder:
- **33 valid images** (~28 MB)
- Logo, banners, product photos, 3D renders, and backgrounds
- Formats: WebP (15), PNG (13), JPG/JPEG (5)
- Multiple format versions available for key products (PNG + WebP)

---

## Quick Start Checklist

Before starting development, review these docs in order:

1. **Start with** `01-site-overview.md` to understand the project
2. **Review** `02-design-system.md` to set up your theme/colors
3. **Study** `03-site-structure.md` to plan your component hierarchy
4. **Reference** `04-products-catalog.md` when creating your product data
5. **Copy from** `05-content-copy.md` for all text content
6. **Use** `06-images-inventory.md` to find the right image assets
7. **Follow** `07-technical-requirements.md` for tech decisions
8. **Execute** `08-implementation-plan.md` phase by phase

---

## Key Decisions to Make

Before implementation, decide on:

1. **Tech Stack** - Next.js / Astro / WordPress?
2. **E-commerce Platform** - Shopify / WooCommerce / Custom?
3. **Payment Processor** - Stripe is recommended
4. **Hosting** - Vercel / Netlify / Traditional hosting?
5. **Database** - PostgreSQL / MongoDB / Headless CMS?

---

## Original Site Technical Notes

- **Platform:** WordPress + Divi Theme
- **E-commerce:** WooCommerce
- **Payments:** WooCommerce Payments, Stripe
- **CDN:** WordPress.com CDN (i0.wp.com)
- **Special Features:** 3D model viewer, Spatial.io integration

---

## Project Structure

```
Foameverything/
├── CLAUDE.md                    # Main development guide (START HERE)
├── .claude/
│   ├── README.md               # .claude directory overview
│   ├── settings/
│   │   └── project.json        # Project configuration
│   ├── vegas-2026-event.md     # SprayFoam 2026 Convention details
│   ├── industry-hub.md         # Related websites info
│   └── component-specs.md      # Component specifications
├── docs/
│   ├── foameverything.pdf      # Original site screenshots
│   └── planning/
│       ├── 00-README.md (this file)
│       ├── 01-site-overview.md
│       ├── 02-design-system.md
│       ├── 03-site-structure.md
│       ├── 04-products-catalog.md
│       ├── 05-content-copy.md
│       ├── 06-images-inventory.md
│       ├── 07-technical-requirements.md
│       ├── 08-implementation-plan.md
│       └── 09-additional-pages.md
├── images/
│   ├── smlogo.png
│   ├── Foam-Everything-Header.jpg
│   ├── [... 30 more images ...]
│   └── yourlogohere.webp
└── [future source code folders]
```

---

## New Features (Added January 2026)

### 1. SprayFoam 2026 Vegas Event Banner
- Prominent hero section at top of homepage
- Countdown timer to March 22-25, 2026
- Event at Westgate Las Vegas Resort & Casino
- See `/.claude/vegas-2026-event.md` for full details

### 2. Industry Hub Section
- SprayFoamTV.com - 24/7 streaming platform
- SprayFoamRadio.com - AI music player
- NerfFusion.com - Custom Nerf accessories
- See `/.claude/industry-hub.md` for full details
