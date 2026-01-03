# Vegas 2026 Pre-Order System

## Overview

Allow customers to pre-order exclusive Vegas 2026 merchandise before the SprayFoam Convention (March 22-25, 2026). Pre-orders create urgency, guarantee sales, and build hype for the event.

---

## Pre-Order Product Collection

### Vegas 2026 Collection (NEW DESIGNS)

**Product Types Expected:**
- T-Shirts
- Hoodies
- Longsleeves
- Hats/Caps (potential)
- Limited Edition Items

**Pricing Structure (Estimated):**
| Item | Pre-Order Price | Regular Price | Savings |
|------|-----------------|---------------|---------|
| T-Shirt | $20-25 | $25-28.50 | ~15% |
| Hoodie | $35-45 | $38-53 | ~10% |
| Longsleeve | $25-30 | $30-34 | ~12% |

**Pre-Order Incentives:**
- Early bird pricing (discount from regular)
- Exclusive colorways only available via pre-order
- Guaranteed availability (no sellouts)
- First to receive at convention OR shipped before event

---

## Pre-Order Flow

### Customer Journey

```
1. Browse Vegas 2026 Collection
   ↓
2. Select Product & Variations (size, color)
   ↓
3. Add to Cart (marked as "Pre-Order")
   ↓
4. Checkout with Pre-Order Terms
   ↓
5. Payment Collected (full or deposit)
   ↓
6. Confirmation Email with Expected Date
   ↓
7. Fulfillment Notification
   ↓
8. Delivery (ship or pickup at convention)
```

### Fulfillment Options

**Option A: Ship Before Event**
- Pre-orders ship by March 15, 2026
- Customers receive items before Vegas
- Wear your gear TO the convention

**Option B: Convention Pickup**
- Pick up at Foam Everything booth
- Skip shipping costs
- Exclusive pickup-only items?

**Option C: Ship After Event**
- Lower priority fulfillment
- For those not attending
- Standard shipping timeline

---

## Technical Requirements

### Product Schema Updates

```typescript
interface Product {
  id: string;
  name: string;
  slug: string;
  // ... existing fields

  // Pre-order specific
  isPreOrder: boolean;
  preOrderSettings?: PreOrderSettings;
}

interface PreOrderSettings {
  enabled: boolean;
  startDate: Date;           // When pre-orders open
  endDate: Date;             // Pre-order cutoff
  expectedShipDate: Date;    // When items ship
  depositRequired: boolean;  // Full payment or deposit
  depositAmount?: number;    // If deposit, how much
  maxQuantity?: number;      // Limit per customer
  pickupAvailable: boolean;  // Convention pickup option
  preOrderPrice?: number;    // Special pre-order pricing
  regularPrice: number;      // Price after pre-order ends
}
```

### Pre-Order Status Flow

```
PENDING → CONFIRMED → PROCESSING → SHIPPED/READY_FOR_PICKUP → COMPLETED
                  ↘ CANCELLED
```

### Database Schema Addition

```sql
-- Pre-order specific fields for orders
ALTER TABLE orders ADD COLUMN is_preorder BOOLEAN DEFAULT FALSE;
ALTER TABLE orders ADD COLUMN preorder_status VARCHAR(50);
ALTER TABLE orders ADD COLUMN fulfillment_type VARCHAR(20); -- 'ship' or 'pickup'
ALTER TABLE orders ADD COLUMN expected_fulfillment_date DATE;
ALTER TABLE orders ADD COLUMN pickup_location VARCHAR(255);

-- Pre-order tracking
CREATE TABLE preorder_notifications (
  id SERIAL PRIMARY KEY,
  order_id INTEGER REFERENCES orders(id),
  notification_type VARCHAR(50), -- 'confirmed', 'shipping_soon', 'shipped', 'ready_pickup'
  sent_at TIMESTAMP,
  email_content TEXT
);
```

---

## UI Components

### PreOrderBadge

```typescript
interface PreOrderBadgeProps {
  endDate: Date;
  savings?: number; // Percentage off
}
```

**Visual:**
- Bright yellow/gold badge
- "PRE-ORDER" text
- Optional countdown to cutoff
- Savings percentage if applicable

### PreOrderProductCard

Extends standard ProductCard with:
- Pre-order badge
- Expected ship date
- "Pre-Order Now" CTA (instead of "Add to Cart")
- Pre-order vs regular price comparison

### PreOrderBanner

Homepage banner for the collection:
- "Pre-Order Vegas 2026 Gear Now!"
- Countdown to pre-order cutoff
- "Ship before the show" messaging
- Collection preview images

### PreOrderCheckoutNotice

In cart/checkout:
- Clear pre-order terms
- Expected fulfillment date
- Pickup vs ship selection (if applicable)
- Cancellation policy

---

## Pre-Order Timeline

### Recommended Schedule

| Date | Milestone |
|------|-----------|
| Jan 15, 2026 | Designs finalized |
| Jan 20, 2026 | Product photos/mockups ready |
| Feb 1, 2026 | Pre-orders OPEN |
| Mar 1, 2026 | Pre-order cutoff (3 weeks before) |
| Mar 10, 2026 | Production complete |
| Mar 15, 2026 | Ship pre-orders (ship option) |
| Mar 22-25, 2026 | Convention pickup available |
| Mar 26, 2026 | Regular sales begin (remaining stock) |

### Countdown Displays

**Before Pre-Order Opens:**
"Pre-Orders Open Feb 1 - Sign Up for Notification"

**During Pre-Order:**
"Pre-Order Now! Only X Days Left to Save!"

**After Cutoff:**
"Pre-Orders Closed - Available at Vegas!" or "Coming Soon"

---

## Marketing Features

### Email Capture (Pre-Launch)

Before pre-orders open:
- "Get Notified" signup form
- Exclusive first-look for subscribers
- Early access window (24-48 hrs before public)

### Urgency Elements

- Countdown timer to pre-order end
- "X items pre-ordered" social proof
- Limited quantities messaging
- Early bird pricing deadline

### Social Proof

- Show number of pre-orders
- Customer photos with previous Vegas gear
- Testimonials from past events

---

## Checkout Modifications

### Pre-Order Terms (Required Acceptance)

```
□ I understand this is a PRE-ORDER:
  • Expected to ship by [DATE]
  • Payment will be charged now
  • Cancellations accepted until [DATE]
  • Convention pickup available at Westgate Las Vegas
```

### Fulfillment Selection

```
How would you like to receive your order?

○ Ship to my address (by March 15, 2026)
   Standard shipping rates apply

○ Pick up at SprayFoam 2026 Convention
   FREE - Westgate Las Vegas, March 22-25
   Booth location provided via email
```

---

## Email Notifications

### Pre-Order Confirmation
- Order details
- Expected fulfillment date
- Fulfillment method selected
- What to expect next

### Production Update (Optional)
- "Your gear is being made!"
- Behind-the-scenes content
- Build excitement

### Shipping Notification
- Tracking number
- Expected delivery
- Packing list

### Pickup Ready
- Convention booth location
- Pickup hours
- Order confirmation code/QR

---

## Admin Features

### Pre-Order Dashboard

- Total pre-orders by product
- Revenue collected
- Fulfillment status breakdown
- Pickup vs ship counts

### Bulk Operations

- Mark all as "Production Complete"
- Generate shipping labels
- Send batch notifications
- Export pickup list for convention

---

## Edge Cases

### Cancellations
- Allow until production starts (Mar 1)
- Full refund if cancelled in time
- No refunds after cutoff

### Size Exchanges
- Allow size changes until cutoff
- After cutoff, handle at convention or post-ship

### Inventory Management
- No hard limits (print on demand possible)
- Or set max quantities for exclusivity
- Waitlist if sold out

### Convention No-Shows
- If not picked up, ship after event
- Additional shipping charge or included?
- Hold for 30 days then refund?
