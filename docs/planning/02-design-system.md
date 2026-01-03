# Foam Everything - Design System

> **COMPLETE STYLE GUIDE:** See `/.claude/style-guide.md` for full CSS implementation

## Color Palette

### Background Colors
| Color | Hex Code | Usage |
|-------|----------|-------|
| Pure Black | `#000000` | Primary page background |
| Charcoal | `#1a1a1a` | Product card backgrounds |
| Dark Grey | `#2d2d2d` | Secondary card backgrounds |

### Neon Accent Colors
| Color | Hex Code | Usage |
|-------|----------|-------|
| Neon Cyan | `#00ffff` | PRIMARY - Buttons, prices, links |
| Cyan Bright | `#66fff9` | Hover states, highlights |
| Cyan Soft | `#0fcbff` | Secondary accents |
| Neon Pink | `#ff0fbb` | OnlyFoam section, highlights |
| Neon Magenta | `#f830ff` | Gradients, hover effects |
| Neon Yellow | `#EDF000` | Section headings, special CTAs |
| Neon Red | `#ff0040` | Vegas 2026, Pre-orders (NEW) |
| Racing Red | `#e31937` | NASCAR section background |
| Gold | `#ffcc00` | Swag Wars buttons |

### Text Colors
| Color | Hex Code | Usage |
|-------|----------|-------|
| White | `#ffffff` | Primary text on dark |
| Grey | `#b3b3b3` | Body text, descriptions |
| Muted | `#808080` | Secondary text, crossed-out prices |

## Glow Effects (CRITICAL)

The site uses **NEON GLOW** box-shadows extensively. Every button and interactive element has a glow effect.

### Cyan Glow (Primary)
```css
box-shadow: 0 0 10px #00ffff, 0 0 20px rgba(0, 255, 255, 0.4);
```

### Red Glow (Vegas 2026 / Pre-Orders)
```css
box-shadow: 0 0 10px #ff0040, 0 0 20px rgba(255, 0, 64, 0.4);
```

### Pink Glow (OnlyFoam)
```css
box-shadow: 0 0 10px #ff0fbb, 0 0 20px rgba(255, 15, 187, 0.4);
```

## Button Styles (From PDF Analysis)

| Style | Background | Border | Glow | Usage |
|-------|------------|--------|------|-------|
| Cyan Neon | Transparent | Cyan | Cyan | Primary buttons |
| Gold Solid | Gold gradient | Dark gold | Yellow | Swag Wars |
| Black + Yellow | Black | Yellow | Yellow | NASCAR |
| Black + Red | Black | Red | Red | Pre-orders (NEW) |
| Red Neon | Transparent | Red | Red | Vegas 2026 (NEW) |
| White + Blue | White | Cyan | None | Vegas products |
| Magenta | Pink transparent | Pink | Pink | OnlyFoam |

## Typography
- **Font:** Clean sans-serif (Inter, Helvetica Neue)
- **Headings:** Bold/Extra-bold, uppercase, letter-spacing
- **Body:** Light weight for readability on dark
- **Prices:** Cyan color (#00ffff), bold weight
- **Sale Prices:** Red color (#ff0040)

## Visual Style
1. **Pure Black Backgrounds** - #000000, not dark grey
2. **Neon Glow Effects** - On ALL buttons and interactive elements
3. **High Contrast** - Bright neon colors against black
4. **Card Backgrounds** - Charcoal (#1a1a1a) with rounded corners (20-24px)
5. **Pill-Shaped Buttons** - border-radius: 50px for primary CTAs

## Section-Specific Styles

### Racing Section
- Background: Solid red (#e31937)
- Text: Yellow (#EDF000)
- Buttons: Black with yellow border

### Vegas Section
- Background: Purple gradient to black
- Accent: Pink/magenta neon
- Buttons: White with blue border OR red glow (2026)

### OnlyFoam Section
- Background: Purple gradient (#2d0a4e to #1a0033)
- Accent: Magenta/pink
- Buttons: Magenta with pink glow

## Interactive Elements
- 3D model viewer (Three.js spray foam gun)
- Hover effects with increased glow intensity
- Animated glow pulse on featured items
- Shopping cart counter with cyan accent

## Image Treatment
- Product images on transparent/black backgrounds
- Hero images with dark gradient overlays
- Consistent aspect ratios in product grids
- WebP format with PNG fallbacks
