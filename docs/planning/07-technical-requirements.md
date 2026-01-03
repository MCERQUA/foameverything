# Foam Everything - Technical Requirements

## Original Site Stack
- **CMS:** WordPress
- **Theme:** Divi
- **E-commerce:** WooCommerce
- **Payments:** WooCommerce Payments, Stripe
- **CDN:** WordPress.com CDN (i0.wp.com)
- **Analytics:** Jetpack/WordPress.com Stats
- **3D Components:** Custom embedded 3D viewer

---

## Recommended Modern Stack

### Option A: Next.js + Headless Commerce
```
Frontend:    Next.js 14+ (App Router)
Styling:     Tailwind CSS
E-commerce:  Shopify Storefront API / Saleor / Medusa
Payments:    Stripe
Hosting:     Vercel
Database:    PostgreSQL (via Supabase/Neon)
Auth:        NextAuth.js / Clerk
3D:          Three.js / React Three Fiber
```

### Option B: Astro + E-commerce
```
Frontend:    Astro with React islands
Styling:     Tailwind CSS
E-commerce:  Shopify / WooCommerce REST API
Payments:    Stripe
Hosting:     Vercel / Netlify
3D:          Three.js
```

### Option C: Full WordPress Recreation
```
CMS:         WordPress
Theme:       Custom theme or Elementor/Divi
E-commerce:  WooCommerce
Payments:    Stripe / WooCommerce Payments
Hosting:     WP Engine / Kinsta
```

---

## Core Features Required

### 1. E-commerce Functionality
- [ ] Product catalog with categories
- [ ] Product variations (size, color, material)
- [ ] Shopping cart with persistence
- [ ] Secure checkout flow
- [ ] Payment processing (Stripe)
- [ ] Order management
- [ ] Inventory tracking

### 2. User Authentication
- [ ] User registration
- [ ] Login/logout
- [ ] Password recovery
- [ ] Account dashboard
- [ ] Order history
- [ ] Saved addresses

### 3. Product Features
- [ ] Variable pricing based on size
- [ ] Multiple product images
- [ ] Product descriptions with specifications
- [ ] Related products
- [ ] Product reviews/ratings
- [ ] Stock status

### 4. Frontend Components
- [ ] Responsive navigation with mobile menu
- [ ] Hero section with gradient overlays
- [ ] Product grid layouts
- [ ] Product cards with quick view
- [ ] Cart sidebar/modal
- [ ] Footer with links
- [ ] Login modal/form

### 5. Special Features
- [ ] 3D interactive spray foam gun viewer
- [ ] NASCAR sponsorship signup form
- [ ] Swag Wars signup integration
- [ ] Spatial.io virtual space link
- [ ] Custom decal order form

### 6. SEO & Performance
- [ ] Meta tags and Open Graph
- [ ] Image optimization (WebP, lazy loading)
- [ ] Core Web Vitals optimization
- [ ] Sitemap generation
- [ ] Schema.org markup for products

---

## Database Schema (Conceptual)

### Users
```
- id
- email
- password_hash
- first_name
- last_name
- created_at
- updated_at
```

### Products
```
- id
- name
- slug
- description
- short_description
- category_id
- base_price
- sku
- images[]
- status (active/draft)
- created_at
```

### Product Variants
```
- id
- product_id
- size
- color
- material
- price
- sku
- stock_quantity
```

### Categories
```
- id
- name
- slug
- description
- image
- parent_id
```

### Orders
```
- id
- user_id
- status
- subtotal
- tax
- shipping
- total
- shipping_address
- billing_address
- created_at
```

### Order Items
```
- id
- order_id
- product_variant_id
- quantity
- price
```

---

## API Endpoints Required

### Products
- `GET /api/products` - List all products
- `GET /api/products/:slug` - Get single product
- `GET /api/products/category/:slug` - Products by category
- `GET /api/categories` - List categories

### Cart
- `GET /api/cart` - Get cart
- `POST /api/cart/add` - Add item
- `PUT /api/cart/update` - Update quantity
- `DELETE /api/cart/remove/:id` - Remove item

### Checkout
- `POST /api/checkout` - Create checkout session
- `POST /api/checkout/complete` - Complete order

### Auth
- `POST /api/auth/register` - Register user
- `POST /api/auth/login` - Login
- `POST /api/auth/logout` - Logout
- `POST /api/auth/forgot-password` - Password reset

### User
- `GET /api/user/orders` - Order history
- `PUT /api/user/profile` - Update profile

---

## Third-Party Integrations

1. **Stripe** - Payment processing
2. **Spatial.io** - Virtual space embed/link
3. **3D Model Viewer** - Three.js or model-viewer
4. **Email Service** - SendGrid/Resend for transactional emails
5. **Analytics** - Google Analytics / Plausible

---

## Performance Targets

- Lighthouse Score: 90+
- First Contentful Paint: < 1.5s
- Time to Interactive: < 3.5s
- Cumulative Layout Shift: < 0.1
- Image formats: WebP with PNG fallback
