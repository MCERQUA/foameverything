# Component Specifications

## New Components (Not in Original Site)

### 1. PreOrderCollection

**Purpose:** Display Vegas 2026 pre-order products with special badges and pricing

**Location:** Featured section on homepage, dedicated collection page

**Props:**
```typescript
interface PreOrderCollectionProps {
  products: PreOrderProduct[];
  cutoffDate: Date; // March 1, 2026
  showCountdown: boolean;
}

interface PreOrderProduct extends Product {
  isPreOrder: true;
  preOrderPrice: number;
  regularPrice: number;
  expectedShipDate: Date;
  pickupAvailable: boolean;
}
```

**Elements:**
- Section header: "Pre-Order Vegas 2026 Gear"
- Countdown to pre-order cutoff
- Savings badge (e.g., "Save 15%")
- Product grid with PreOrderProductCard
- "View All Pre-Orders" link

---

### 2. PreOrderProductCard

**Purpose:** Product card with pre-order specific information

**Props:**
```typescript
interface PreOrderProductCardProps {
  product: PreOrderProduct;
  showSavings: boolean;
}
```

**Elements:**
- "PRE-ORDER" badge (yellow/gold)
- Product image
- Product name
- Price comparison (pre-order vs regular, crossed out)
- Savings percentage
- "Pre-Order Now" CTA button
- Expected ship date
- Pickup option indicator

**Styling:**
- Gold/yellow accent border
- Animated badge
- Urgency styling near cutoff

---

### 3. PreOrderBanner

**Purpose:** Homepage hero banner promoting pre-orders

**Props:**
```typescript
interface PreOrderBannerProps {
  cutoffDate: Date;
  headline: string;
  productPreview: string[]; // Image URLs
}
```

**Content:**
- "Pre-Order Now - Ship Before Vegas!"
- Countdown timer to cutoff
- Preview of new designs
- "Shop Pre-Orders" CTA

---

### 4. FulfillmentSelector

**Purpose:** Let customer choose ship vs convention pickup at checkout

**Props:**
```typescript
interface FulfillmentSelectorProps {
  shipByDate: Date;
  pickupLocation: string;
  pickupDates: string;
  onSelect: (type: 'ship' | 'pickup') => void;
  selected: 'ship' | 'pickup';
}
```

**Options:**
- Ship to Address (by March 15, 2026)
- Convention Pickup (FREE - March 22-25, Westgate Las Vegas)

---

### 5. Vegas2026Banner

**Purpose:** Hero banner promoting SprayFoam 2026 Convention

**Location:** Top of homepage, above all other content

**Props:**
```typescript
interface Vegas2026BannerProps {
  eventDate: Date; // March 22, 2026
  registrationUrl: string;
  showCountdown: boolean;
}
```

**Elements:**
- Background: Vegas-themed image with gradient overlay
- Countdown timer (days, hours, minutes, seconds)
- Event title: "SprayFoam 2026"
- Dates: "March 22-25, 2026"
- Venue: "Westgate Las Vegas"
- Status badge: "Booths SOLD OUT!"
- CTA button: "Register Now"

**Styling:**
- Full-width banner
- Min-height: 400px (desktop), 300px (mobile)
- Neon glow effects
- Vegas gold accent color
- Animated countdown digits

**Countdown Timer Sub-component:**
```typescript
interface CountdownProps {
  targetDate: Date;
  onComplete?: () => void;
}
```

---

### 2. IndustryHub

**Purpose:** Section showcasing related industry websites

**Location:** Below Vegas banner, above main hero

**Structure:**
```typescript
interface IndustryHubProps {
  sites: IndustrySite[];
}

interface IndustrySite {
  name: string;
  url: string;
  tagline: string;
  description: string;
  features: string[];
  logo?: string;
  accentColor: string;
}
```

**Default Sites:**
1. SprayFoamTV (#00ff00 green)
2. SprayFoamRadio (#ff6600 orange)
3. NerfFusion (#0099ff blue)

**Layout:**
- 3-column grid (desktop)
- Single column stack (mobile)
- Card-based design

**Card Elements:**
- Logo/Icon
- Site name
- Tagline
- Description (2-3 sentences)
- Feature list (3 items)
- "Visit Site" button

---

### 3. EventSchedule

**Purpose:** Detailed schedule for Vegas 2026

**Location:** Dedicated Vegas 2026 page

**Props:**
```typescript
interface EventScheduleProps {
  days: EventDay[];
}

interface EventDay {
  date: string;
  dayName: string;
  events: ScheduleItem[];
}

interface ScheduleItem {
  time: string;
  title: string;
  description?: string;
  type: 'session' | 'networking' | 'expo' | 'certification';
}
```

---

## Existing Components (From Original Site)

### HeroSection
- Full-width background with gradient overlay
- Main headline text
- CTA buttons (Order Sweaters, Order T-Shirts, Order Long Sleeves)

### SwagWarsSection
- "Sign Up To Swag Wars!" heading
- Trenches background image
- "Signup Now!" CTA button

### NascarSection
- NASCAR car image
- Company branding program info
- Signup form link

### ProductGrid
- 3-column layout
- ProductCard components
- Category filtering

### ProductCard
```typescript
interface ProductCardProps {
  product: Product;
  showQuickView?: boolean;
}

interface Product {
  id: string;
  name: string;
  slug: string;
  price: PriceRange;
  image: string;
  category: string;
}

interface PriceRange {
  min: number;
  max: number;
}
```

### CollectionSection
- Section header
- Product grid
- "View All" link

### ThreeDViewer
- Spray foam gun 3D model
- Interactive controls
- "Click to interact" CTA
- Uses Three.js / React Three Fiber

### OnlyFoamSection
- Virtual club preview
- 3D character showcase
- Link to Spatial.io

### DecalsSection
- Decal pack products
- Custom decal order CTA

---

## Layout Components

### Header
- Logo (left)
- Navigation menu (center)
- Login form (right, collapsible)
- Cart icon with counter

### Footer
- Site links
- External links (Spatial.io, etc.)
- Copyright

### Navigation
```typescript
interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

const navItems: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'Shop', href: '/shop' },
  { label: 'Vegas 2026', href: '/vegas-2026' },
  { label: 'Cart', href: '/cart' },
  { label: 'My Account', href: '/my-account' },
];
```

### MobileMenu
- Hamburger toggle
- Full-screen overlay
- Same nav items as desktop

---

## UI Components

### Button
```typescript
interface ButtonProps {
  variant: 'primary' | 'secondary' | 'outline' | 'ghost';
  size: 'sm' | 'md' | 'lg';
  glowing?: boolean; // Neon glow effect
  children: React.ReactNode;
  onClick?: () => void;
  href?: string;
}
```

**Primary Button Colors:**
- Background: Cyan (#0fcbff)
- Text: Black
- Hover: Brighter cyan with glow

### PriceDisplay
```typescript
interface PriceDisplayProps {
  price: number | PriceRange;
  salePrice?: number;
  currency?: string;
}
```
- Yellow text (#EDF000)
- Sale prices show original crossed out

### SizeSelector
```typescript
interface SizeSelectorProps {
  sizes: string[]; // ['S', 'M', 'L', 'XL', '2XL', '3XL']
  selectedSize: string;
  onSelect: (size: string) => void;
  availability?: Record<string, boolean>;
}
```

### QuantitySelector
```typescript
interface QuantitySelectorProps {
  value: number;
  min?: number;
  max?: number;
  onChange: (value: number) => void;
}
```

---

## Form Components

### SwagWarsForm
Fields:
- Company Name (required)
- Contact Name (required)
- Email (required)
- Phone (required)
- Shipping Address (required)
- T-Shirt Size (select, required)
- Message (textarea, 180 char limit)

### NascarSignupForm
External link to: https://sprayfoamgames.com/nascar-signup/

### ContactForm
- Name
- Email
- Subject
- Message
- Submit button

---

## Animation Specifications

### Hover Effects
- Scale: 1.02 on product cards
- Glow: Neon border on buttons
- Brightness: +10% on images

### Page Transitions
- Fade in/out: 200ms
- Slide: 300ms for modals

### Countdown Timer
- Flip animation on digit change
- Pulse on zero

### Loading States
- Skeleton screens for products
- Spinner for actions
- Progress bar for checkout
