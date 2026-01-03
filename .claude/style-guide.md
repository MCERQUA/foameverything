# Foam Everything - Complete Style Guide

## Analysis from Original Site PDF

This style guide is based on detailed analysis of the foameverything.pdf screenshots.

---

## Color Palette

### Primary Colors
```css
:root {
  /* Backgrounds */
  --bg-black: #000000;
  --bg-charcoal: #1a1a1a;
  --bg-dark-grey: #2d2d2d;

  /* Neon Cyan - PRIMARY ACCENT (buttons, prices, links) */
  --neon-cyan: #00ffff;
  --neon-cyan-bright: #66fff9;
  --neon-cyan-soft: #0fcbff;

  /* Neon Pink/Magenta - SECONDARY ACCENT */
  --neon-pink: #ff0fbb;
  --neon-magenta: #f830ff;
  --neon-pink-soft: #ff69b4;

  /* Yellow/Gold - HEADINGS & CTAs */
  --neon-yellow: #EDF000;
  --gold: #ffcc00;
  --gold-dark: #cc9900;

  /* Red - NASCAR/RACING SECTIONS */
  --racing-red: #e31937;
  --neon-red: #ff0040;
  --red-dark: #cc0000;

  /* Orange/Red Gradient - 3D SERVICES */
  --orange-red: #ff6b35;
  --coral: #ff5252;

  /* Purple - ENVIRONMENTS/GRADIENTS */
  --purple-dark: #1a0033;
  --purple-mid: #660099;
  --purple-neon: #9933ff;

  /* Text */
  --text-white: #ffffff;
  --text-grey: #b3b3b3;
  --text-muted: #808080;
}
```

### Section-Specific Colors
```css
/* NASCAR/Racing Section */
.racing-section {
  --section-bg: var(--racing-red);
  --section-text: var(--neon-yellow);
  --section-button-bg: var(--bg-black);
  --section-button-border: var(--neon-yellow);
}

/* Vegas Section */
.vegas-section {
  --section-bg: linear-gradient(180deg, #1a0033 0%, #000 100%);
  --section-accent: var(--neon-pink);
  --section-glow: var(--neon-cyan);
}

/* OnlyFoam Section */
.onlyfoam-section {
  --section-bg: linear-gradient(180deg, #2d0a4e 0%, #1a0033 100%);
  --section-accent: var(--neon-magenta);
  --section-text: var(--neon-cyan);
}
```

---

## Glow Effects (CRITICAL)

### Cyan Neon Glow (Primary Buttons)
```css
.glow-cyan {
  box-shadow:
    0 0 5px var(--neon-cyan),
    0 0 10px var(--neon-cyan),
    0 0 20px var(--neon-cyan),
    0 0 40px var(--neon-cyan-soft);
  border: 2px solid var(--neon-cyan);
}

.glow-cyan:hover {
  box-shadow:
    0 0 10px var(--neon-cyan),
    0 0 20px var(--neon-cyan),
    0 0 40px var(--neon-cyan),
    0 0 60px var(--neon-cyan-soft);
}
```

### Pink/Magenta Neon Glow
```css
.glow-pink {
  box-shadow:
    0 0 5px var(--neon-pink),
    0 0 10px var(--neon-pink),
    0 0 20px var(--neon-pink),
    0 0 40px var(--neon-pink-soft);
  border: 2px solid var(--neon-pink);
}
```

### Red Neon Glow (NEW - For Racing/Vegas 2026)
```css
.glow-red {
  box-shadow:
    0 0 5px var(--neon-red),
    0 0 10px var(--neon-red),
    0 0 20px var(--racing-red),
    0 0 40px rgba(255, 0, 64, 0.5);
  border: 2px solid var(--neon-red);
}

.glow-red:hover {
  box-shadow:
    0 0 10px var(--neon-red),
    0 0 25px var(--neon-red),
    0 0 50px var(--racing-red),
    0 0 80px rgba(255, 0, 64, 0.6);
}
```

### Black with Red Glow (NEW - Premium/Featured)
```css
.glow-black-red {
  background: var(--bg-black);
  box-shadow:
    0 0 10px var(--neon-red),
    0 0 20px rgba(255, 0, 64, 0.6),
    inset 0 0 20px rgba(0, 0, 0, 0.8);
  border: 2px solid var(--neon-red);
}

.glow-black-red:hover {
  box-shadow:
    0 0 15px var(--neon-red),
    0 0 30px var(--neon-red),
    0 0 50px rgba(255, 0, 64, 0.7),
    inset 0 0 30px rgba(255, 0, 64, 0.1);
}
```

### Yellow/Gold Glow
```css
.glow-yellow {
  box-shadow:
    0 0 5px var(--neon-yellow),
    0 0 10px var(--gold),
    0 0 20px rgba(237, 240, 0, 0.5);
  border: 2px solid var(--neon-yellow);
}
```

### Purple Neon Glow
```css
.glow-purple {
  box-shadow:
    0 0 5px var(--purple-neon),
    0 0 10px var(--purple-neon),
    0 0 20px var(--neon-magenta),
    0 0 40px rgba(153, 51, 255, 0.5);
  border: 2px solid var(--purple-neon);
}
```

---

## Button Styles

### 1. Primary Button (Cyan Neon) - Most Common
```css
.btn-primary {
  background: transparent;
  color: var(--text-white);
  border: 2px solid var(--neon-cyan);
  border-radius: 50px; /* Pill shape */
  padding: 12px 32px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1px;
  box-shadow:
    0 0 10px var(--neon-cyan),
    0 0 20px rgba(0, 255, 255, 0.4);
  transition: all 0.3s ease;
}

.btn-primary:hover {
  background: var(--neon-cyan);
  color: var(--bg-black);
  box-shadow:
    0 0 20px var(--neon-cyan),
    0 0 40px var(--neon-cyan),
    0 0 60px rgba(0, 255, 255, 0.6);
}
```

### 2. Gold/Yellow Button (Swag Wars Style)
```css
.btn-gold {
  background: linear-gradient(180deg, var(--gold) 0%, var(--gold-dark) 100%);
  color: var(--bg-black);
  border: 3px solid var(--gold-dark);
  border-radius: 8px;
  padding: 14px 36px;
  font-weight: 700;
  box-shadow:
    0 4px 0 var(--gold-dark),
    0 0 15px rgba(255, 204, 0, 0.4);
}

.btn-gold:hover {
  transform: translateY(2px);
  box-shadow:
    0 2px 0 var(--gold-dark),
    0 0 25px rgba(255, 204, 0, 0.6);
}
```

### 3. Black Button with Yellow Border (NASCAR)
```css
.btn-nascar {
  background: var(--bg-black);
  color: var(--text-white);
  border: 2px solid var(--neon-yellow);
  border-radius: 8px;
  padding: 12px 28px;
  font-weight: 600;
  box-shadow: 0 0 10px rgba(237, 240, 0, 0.3);
}

.btn-nascar:hover {
  background: var(--neon-yellow);
  color: var(--bg-black);
  box-shadow: 0 0 20px var(--neon-yellow);
}
```

### 4. Red Neon Button (NEW - Vegas 2026 Featured)
```css
.btn-red {
  background: transparent;
  color: var(--text-white);
  border: 2px solid var(--neon-red);
  border-radius: 50px;
  padding: 14px 36px;
  font-weight: 700;
  text-transform: uppercase;
  box-shadow:
    0 0 10px var(--neon-red),
    0 0 20px rgba(255, 0, 64, 0.4);
  transition: all 0.3s ease;
}

.btn-red:hover {
  background: var(--neon-red);
  color: var(--text-white);
  box-shadow:
    0 0 20px var(--neon-red),
    0 0 40px var(--neon-red),
    0 0 60px rgba(255, 0, 64, 0.6);
}
```

### 5. Black with Red Glow Button (NEW - Pre-Order CTA)
```css
.btn-preorder {
  background: var(--bg-black);
  color: var(--neon-red);
  border: 3px solid var(--neon-red);
  border-radius: 50px;
  padding: 16px 40px;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 2px;
  box-shadow:
    0 0 15px var(--neon-red),
    0 0 30px rgba(255, 0, 64, 0.5),
    inset 0 0 20px rgba(255, 0, 64, 0.1);
  transition: all 0.3s ease;
}

.btn-preorder:hover {
  color: var(--text-white);
  box-shadow:
    0 0 20px var(--neon-red),
    0 0 40px var(--neon-red),
    0 0 60px rgba(255, 0, 64, 0.7),
    inset 0 0 40px rgba(255, 0, 64, 0.2);
  text-shadow: 0 0 10px var(--neon-red);
}
```

### 6. White Button with Blue Border (Vegas Products)
```css
.btn-vegas {
  background: var(--text-white);
  color: var(--neon-cyan-soft);
  border: 2px solid var(--neon-cyan-soft);
  border-radius: 8px;
  padding: 10px 24px;
  font-weight: 600;
}

.btn-vegas:hover {
  background: var(--neon-cyan-soft);
  color: var(--bg-black);
}
```

### 7. Magenta Button (OnlyFoam)
```css
.btn-onlyfoam {
  background: rgba(255, 15, 187, 0.3);
  color: var(--text-white);
  border: 2px solid var(--neon-pink);
  border-radius: 8px;
  padding: 12px 28px;
  box-shadow: 0 0 15px rgba(255, 15, 187, 0.4);
}

.btn-onlyfoam:hover {
  background: var(--neon-pink);
  box-shadow: 0 0 30px var(--neon-pink);
}
```

---

## Card Styles

### Product Card (Standard)
```css
.product-card {
  background: var(--bg-charcoal);
  border-radius: 20px;
  padding: 20px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 0.3s ease;
}

.product-card:hover {
  border-color: var(--neon-cyan);
  box-shadow: 0 0 20px rgba(0, 255, 255, 0.2);
}
```

### Product Card with Cyan Glow Border
```css
.product-card-glow {
  background: var(--bg-dark-grey);
  border-radius: 24px;
  padding: 24px;
  border: 2px solid transparent;
  box-shadow:
    0 0 0 2px var(--neon-cyan),
    0 0 15px rgba(0, 255, 255, 0.3);
}
```

### Featured Card (Red Glow - For Pre-Orders)
```css
.product-card-featured {
  background: var(--bg-black);
  border-radius: 24px;
  padding: 24px;
  border: 2px solid var(--neon-red);
  box-shadow:
    0 0 20px rgba(255, 0, 64, 0.4),
    inset 0 0 30px rgba(255, 0, 64, 0.05);
}

.product-card-featured:hover {
  box-shadow:
    0 0 30px rgba(255, 0, 64, 0.6),
    0 0 50px rgba(255, 0, 64, 0.3),
    inset 0 0 40px rgba(255, 0, 64, 0.1);
}
```

---

## Typography

### Headings
```css
h1, h2, h3 {
  font-family: 'Inter', 'Helvetica Neue', sans-serif;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 2px;
}

/* Yellow Section Headings */
.heading-yellow {
  color: var(--neon-yellow);
  text-shadow:
    0 0 10px rgba(237, 240, 0, 0.5),
    0 0 20px rgba(237, 240, 0, 0.3);
}

/* Red Glow Headings (NEW) */
.heading-red {
  color: var(--neon-red);
  text-shadow:
    0 0 10px var(--neon-red),
    0 0 20px rgba(255, 0, 64, 0.6),
    0 0 40px rgba(255, 0, 64, 0.4);
}

/* Cyan Headings */
.heading-cyan {
  color: var(--neon-cyan);
  text-shadow:
    0 0 10px var(--neon-cyan),
    0 0 20px rgba(0, 255, 255, 0.5);
}

/* Orange/Red Gradient (3D Services) */
.heading-gradient {
  background: linear-gradient(90deg, var(--orange-red) 0%, var(--neon-pink) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}
```

### Price Display
```css
.price {
  color: var(--neon-cyan);
  font-weight: 700;
  font-size: 1.25rem;
}

.price-sale {
  color: var(--neon-red);
}

.price-original {
  color: var(--text-muted);
  text-decoration: line-through;
}
```

---

## Section Backgrounds

### Racing Section (Red)
```css
.section-racing {
  background: var(--racing-red);
  padding: 60px 0;
}
```

### Vegas Section (Purple/Pink Gradient)
```css
.section-vegas {
  background:
    linear-gradient(180deg,
      rgba(26, 0, 51, 0.9) 0%,
      rgba(0, 0, 0, 0.95) 100%
    ),
    url('/images/vegas-bg.jpg');
  background-size: cover;
}
```

### OnlyFoam Section (Purple)
```css
.section-onlyfoam {
  background: linear-gradient(180deg, #2d0a4e 0%, #1a0033 50%, #000 100%);
}
```

### Hot Pink Bar (Vegas Promo)
```css
.bar-pink {
  background: var(--neon-pink);
  padding: 20px;
}
```

### Notification Bar (Purple)
```css
.bar-notification {
  background: #7c3aed;
  color: var(--text-white);
  padding: 12px 20px;
  text-align: center;
}
```

---

## Special Effects

### Neon Text Glow
```css
.neon-text-cyan {
  color: var(--neon-cyan);
  text-shadow:
    0 0 7px var(--neon-cyan),
    0 0 10px var(--neon-cyan),
    0 0 21px var(--neon-cyan),
    0 0 42px var(--neon-cyan-soft);
}

.neon-text-red {
  color: var(--neon-red);
  text-shadow:
    0 0 7px var(--neon-red),
    0 0 10px var(--neon-red),
    0 0 21px var(--neon-red),
    0 0 42px rgba(255, 0, 64, 0.5);
}

.neon-text-pink {
  color: var(--neon-pink);
  text-shadow:
    0 0 7px var(--neon-pink),
    0 0 10px var(--neon-pink),
    0 0 21px var(--neon-pink);
}
```

### Animated Glow Pulse
```css
@keyframes glow-pulse-cyan {
  0%, 100% {
    box-shadow:
      0 0 5px var(--neon-cyan),
      0 0 10px var(--neon-cyan),
      0 0 20px var(--neon-cyan);
  }
  50% {
    box-shadow:
      0 0 10px var(--neon-cyan),
      0 0 20px var(--neon-cyan),
      0 0 40px var(--neon-cyan),
      0 0 60px var(--neon-cyan);
  }
}

@keyframes glow-pulse-red {
  0%, 100% {
    box-shadow:
      0 0 5px var(--neon-red),
      0 0 10px var(--neon-red),
      0 0 20px rgba(255, 0, 64, 0.5);
  }
  50% {
    box-shadow:
      0 0 15px var(--neon-red),
      0 0 30px var(--neon-red),
      0 0 50px var(--neon-red),
      0 0 70px rgba(255, 0, 64, 0.6);
  }
}

.animate-glow-cyan {
  animation: glow-pulse-cyan 2s ease-in-out infinite;
}

.animate-glow-red {
  animation: glow-pulse-red 2s ease-in-out infinite;
}
```

### Vegas 2026 Pre-Order Badge
```css
.badge-preorder {
  background: var(--bg-black);
  color: var(--neon-red);
  border: 2px solid var(--neon-red);
  padding: 6px 16px;
  border-radius: 4px;
  font-weight: 700;
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  box-shadow:
    0 0 10px rgba(255, 0, 64, 0.5),
    inset 0 0 10px rgba(255, 0, 64, 0.1);
  animation: glow-pulse-red 2s ease-in-out infinite;
}
```

---

## Tailwind CSS Configuration

```javascript
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        'foam-black': '#000000',
        'foam-charcoal': '#1a1a1a',
        'foam-grey': '#2d2d2d',
        'neon-cyan': '#00ffff',
        'neon-cyan-bright': '#66fff9',
        'neon-cyan-soft': '#0fcbff',
        'neon-pink': '#ff0fbb',
        'neon-magenta': '#f830ff',
        'neon-yellow': '#EDF000',
        'neon-red': '#ff0040',
        'racing-red': '#e31937',
        'gold': '#ffcc00',
        'purple-dark': '#1a0033',
        'purple-neon': '#9933ff',
      },
      boxShadow: {
        'glow-cyan': '0 0 10px #00ffff, 0 0 20px rgba(0, 255, 255, 0.4)',
        'glow-cyan-lg': '0 0 20px #00ffff, 0 0 40px #00ffff, 0 0 60px rgba(0, 255, 255, 0.6)',
        'glow-red': '0 0 10px #ff0040, 0 0 20px rgba(255, 0, 64, 0.4)',
        'glow-red-lg': '0 0 20px #ff0040, 0 0 40px #ff0040, 0 0 60px rgba(255, 0, 64, 0.6)',
        'glow-pink': '0 0 10px #ff0fbb, 0 0 20px rgba(255, 15, 187, 0.4)',
        'glow-yellow': '0 0 10px #EDF000, 0 0 20px rgba(237, 240, 0, 0.4)',
      },
      animation: {
        'glow-pulse': 'glow-pulse 2s ease-in-out infinite',
      },
      borderRadius: {
        'pill': '50px',
      }
    }
  }
}
```

---

## Usage Examples

### Pre-Order Section (Black + Red)
```html
<section class="bg-foam-black py-20">
  <div class="text-center">
    <span class="badge-preorder">PRE-ORDER NOW</span>
    <h2 class="heading-red text-4xl mt-4">Vegas 2026 Collection</h2>
    <p class="text-foam-grey mt-2">Ship before the show or pickup at convention</p>
    <button class="btn-preorder mt-6">Pre-Order Now</button>
  </div>
</section>
```

### Product Card with Red Featured Glow
```html
<div class="product-card-featured">
  <span class="badge-preorder">PRE-ORDER</span>
  <img src="product.jpg" alt="Product" />
  <h3 class="text-white mt-4">Vegas 2026 Hoodie</h3>
  <div class="flex gap-2 items-center mt-2">
    <span class="price-sale">$35.00</span>
    <span class="price-original">$45.00</span>
  </div>
  <button class="btn-red mt-4 w-full">Pre-Order Now</button>
</div>
```

### Standard Product with Cyan Glow
```html
<div class="product-card-glow">
  <img src="product.jpg" alt="Product" />
  <h3 class="text-white mt-4">Foam Everything Hoodie</h3>
  <span class="price">$38.00 - $53.00</span>
  <button class="btn-primary mt-4 w-full">Order Now</button>
</div>
```
