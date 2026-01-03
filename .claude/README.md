# .claude Directory - Development Context

This directory contains context and reference files for Claude Code to use during development of the Foam Everything website.

## Files

| File | Purpose |
|------|---------|
| `settings/project.json` | Project configuration and metadata |
| `animation-system.md` | **CRITICAL** - GSAP/Motion.dev animation rules |
| `style-guide.md` | **COMPLETE CSS** - Colors, glows, buttons, cards |
| `preorder-system.md` | Vegas 2026 pre-order functionality specs |
| `vegas-2026-event.md` | Complete details for SprayFoam 2026 Convention |
| `industry-hub.md` | Related websites (SprayFoamTV, Radio, NerfFusion) |
| `component-specs.md` | Component specifications and interfaces |

## Quick Reference

### ANIMATION REQUIREMENTS (MANDATORY)
```bash
npm install gsap @gsap/react motion
```
- **GSAP + ScrollTrigger** - Scroll-based animations, timelines
- **Motion.dev** - React component animations, gestures

**ABSOLUTE RULES:**
1. ALL headings = letter-by-letter animations (NOT whole-element fades)
2. ALL sections = unique scroll reveals (no repeats)
3. ALL buttons = magnetic hover effects + glow
4. ALL cards = 3D tilt on hover + cursor glow

See: `animation-system.md` for complete implementation guide

---

### Priority Features (New)
1. **Vegas 2026 Pre-Orders** - New designs, early bird pricing, ship or pickup
2. **Vegas 2026 Banner** - Top of homepage, countdown to March 22-25, 2026
3. **Industry Hub** - Links to SprayFoamTV, SprayFoamRadio, NerfFusion

### Pre-Order Timeline
- **Feb 1, 2026** - Pre-orders open
- **Mar 1, 2026** - Pre-order cutoff
- **Mar 15, 2026** - Ship pre-orders
- **Mar 22-25** - Convention pickup

### Tech Stack
- Next.js 14+ (App Router)
- Tailwind CSS
- Stripe Payments
- Three.js for 3D

### Key Colors (from PDF)
```css
--bg-black: #000000;      /* Page background */
--bg-charcoal: #1a1a1a;   /* Card backgrounds */
--neon-cyan: #00ffff;     /* PRIMARY - buttons, prices */
--neon-pink: #ff0fbb;     /* OnlyFoam sections */
--neon-yellow: #EDF000;   /* Headings, special CTAs */
--neon-red: #ff0040;      /* Vegas 2026, pre-orders */
--racing-red: #e31937;    /* NASCAR section bg */
```

### Glow Effects (CRITICAL)
All buttons use neon glow box-shadows:
- **Cyan glow** - Primary buttons
- **Red glow** - Pre-orders, Vegas 2026
- **Pink glow** - OnlyFoam
- **Yellow glow** - Swag Wars

### Event Details (Vegas 2026)
- **Dates:** March 22-25, 2026
- **Venue:** Westgate Las Vegas Resort & Casino
- **Register:** https://sprayfoamshow.org/

### Related Sites
- SprayFoamTV.com - 24/7 streaming
- SprayFoamRadio.com - AI music
- NerfFusion.com - Nerf accessories

## Main Documentation

See `/CLAUDE.md` in project root for complete development guide.
See `/docs/planning/` for original site analysis and content.
