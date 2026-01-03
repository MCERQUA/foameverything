import { Product, ProductSize, BASE_PRICES, getPriceRange } from '@/types/product';

// Sample products data - in production this would come from database
export const products: Product[] = [
  // Hoodies
  {
    id: 'foam-alone-hoodie',
    name: 'Foam Alone Hoodie',
    slug: 'foam-alone-hoodie',
    description: 'Home Alone movie parody logo. FOAM ALONE in classic movie title typography with house silhouette.',
    category: 'hoodie',
    brand: 'foam-everything',
    basePrice: BASE_PRICES.hoodie,
    image: '/images/Hoodies/foamalone.png',
    images: ['/images/Hoodies/foamalone.png'],
    sizes: ['SM', 'M', 'L', 'XL', '2XL', '3XL'],
    colors: ['black'],
    style: 'movie_parody',
  },
  {
    id: 'espuma-hoodie',
    name: 'Espuma Hoodie',
    slug: 'espuma-hoodie',
    description: 'Puma logo parody - leaping cat with ESPUMA text (Spanish for foam). Perfect for bilingual crews.',
    category: 'hoodie',
    brand: 'foam-everything',
    basePrice: BASE_PRICES.hoodie,
    image: '/images/Hoodies/espuma.png',
    images: ['/images/Hoodies/espuma.png'],
    sizes: ['SM', 'M', 'L', 'XL', '2XL', '3XL'],
    colors: ['black'],
    style: 'brand_parody',
  },
  {
    id: 'brotherhood-hoodie',
    name: 'Brotherhood Hoodie',
    slug: 'brotherhood-hoodie',
    description: 'Celebrate the spray foam brotherhood with this industry-pride design.',
    category: 'hoodie',
    brand: 'foam-everything',
    basePrice: BASE_PRICES.hoodie,
    image: '/images/Hoodies/brotherhood.png',
    images: ['/images/Hoodies/brotherhood.png'],
    sizes: ['SM', 'M', 'L', 'XL', '2XL', '3XL'],
    colors: ['black'],
    style: 'industry_pride',
  },
  {
    id: 'the-god-foamer-hoodie',
    name: 'The God Foamer Hoodie',
    slug: 'the-god-foamer-hoodie',
    description: 'Godfather parody design for the ultimate spray foam professional.',
    category: 'hoodie',
    brand: 'foam-everything',
    basePrice: BASE_PRICES.hoodie,
    image: '/images/Hoodies/The God Foamer.png',
    images: ['/images/Hoodies/The God Foamer.png'],
    sizes: ['SM', 'M', 'L', 'XL', '2XL', '3XL'],
    colors: ['black'],
    style: 'movie_parody',
  },
  // T-Shirts
  {
    id: 'cortez-industries-tshirt',
    name: 'Cortez Industries T-Shirt',
    slug: 'cortez-industries-tshirt',
    description: 'Jurassic Park parody logo with spray foam applicator silhouette.',
    category: 'tshirt',
    brand: 'foam-everything',
    basePrice: BASE_PRICES.tshirt,
    image: '/images/DONE/cortez tshirt.png',
    images: ['/images/DONE/cortez tshirt.png'],
    sizes: ['SM', 'M', 'L', 'XL', '2XL', '3XL'],
    colors: ['black'],
    style: 'movie_parody',
  },
  {
    id: 'cream-time-tshirt',
    name: 'Cream Time T-Shirt',
    slug: 'cream-time-tshirt',
    description: 'Retro diner/motel sign aesthetic with SPRAY FOAM and CREAM TIME neon signs.',
    category: 'tshirt',
    brand: 'foam-everything',
    basePrice: BASE_PRICES.tshirt,
    image: '/images/DONE/Creamtime tshirt.png',
    images: ['/images/DONE/Creamtime tshirt.png'],
    sizes: ['SM', 'M', 'L', 'XL', '2XL', '3XL'],
    colors: ['black'],
    style: 'retro_vintage',
  },
  // Vegas 2026 Pre-orders
  {
    id: 'vegas-2026-hoodie',
    name: 'Vegas 2026 Hoodie',
    slug: 'vegas-2026-hoodie',
    description: 'Exclusive Vegas 2026 convention hoodie. Pre-order now for early-bird pricing!',
    category: 'hoodie',
    brand: 'vegas',
    basePrice: BASE_PRICES.hoodie,
    image: '/images/sprayfoam-vegas-hoodie-web1.webp',
    images: ['/images/sprayfoam-vegas-hoodie-web1.webp'],
    sizes: ['SM', 'M', 'L', 'XL', '2XL', '3XL'],
    colors: ['black'],
    isPreorder: true,
    preorderDiscount: 15,
    style: 'event',
  },
  {
    id: 'vegas-2026-tshirt',
    name: 'Vegas 2026 T-Shirt',
    slug: 'vegas-2026-tshirt',
    description: 'Official Vegas 2026 convention t-shirt. Limited edition pre-order.',
    category: 'tshirt',
    brand: 'vegas',
    basePrice: BASE_PRICES.tshirt,
    image: '/images/las-vegas.webp',
    images: ['/images/las-vegas.webp'],
    sizes: ['SM', 'M', 'L', 'XL', '2XL', '3XL'],
    colors: ['black'],
    isPreorder: true,
    preorderDiscount: 10,
    style: 'event',
  },
  {
    id: 'vegas-2026-longsleeve',
    name: 'Vegas 2026 Longsleeve',
    slug: 'vegas-2026-longsleeve',
    description: 'Premium Vegas 2026 longsleeve shirt. Pre-order exclusive.',
    category: 'longsleeve',
    brand: 'vegas',
    basePrice: BASE_PRICES.longsleeve,
    image: '/images/josh-vegas-mirrored-longsleeves.webp',
    images: ['/images/josh-vegas-mirrored-longsleeves.webp'],
    sizes: ['SM', 'M', 'L', 'XL', '2XL', '3XL'],
    colors: ['black'],
    isPreorder: true,
    preorderDiscount: 12,
    style: 'event',
  },
  // Longsleeves
  {
    id: 'onlyfoam-longsleeve',
    name: 'OnlyFoam Longsleeve',
    slug: 'onlyfoam-longsleeve',
    description: 'Premium OnlyFoam branded longsleeve shirt.',
    category: 'longsleeve',
    brand: 'onlyfoam',
    basePrice: BASE_PRICES.longsleeve,
    image: '/images/onlyfoam-longsleeve.webp',
    images: ['/images/onlyfoam-longsleeve.webp'],
    sizes: ['SM', 'M', 'L', 'XL', '2XL', '3XL'],
    colors: ['black'],
    style: 'brand',
  },
  // Racing
  {
    id: 'spray-foam-racing-tshirt',
    name: 'Spray Foam Racing T-Shirt',
    slug: 'spray-foam-racing-tshirt',
    description: 'Official Spray Foam Racing NASCAR branded t-shirt.',
    category: 'tshirt',
    brand: 'racing',
    basePrice: BASE_PRICES.tshirt,
    image: '/images/sprayfoam-nascar.png',
    images: ['/images/sprayfoam-nascar.png'],
    sizes: ['SM', 'M', 'L', 'XL', '2XL', '3XL'],
    colors: ['black'],
    style: 'racing',
  },
];

// Helper functions
export function getProductBySlug(slug: string): Product | undefined {
  return products.find(p => p.slug === slug);
}

export function getProductsByCategory(category: string): Product[] {
  if (category === 'all') return products;
  return products.filter(p => p.category === category);
}

export function getProductsByBrand(brand: string): Product[] {
  if (brand === 'all') return products;
  return products.filter(p => p.brand === brand);
}

export function getPreorderProducts(): Product[] {
  return products.filter(p => p.isPreorder);
}

export function getFeaturedProducts(limit: number = 4): Product[] {
  return products.slice(0, limit);
}

export function searchProducts(query: string): Product[] {
  const lowercaseQuery = query.toLowerCase();
  return products.filter(p =>
    p.name.toLowerCase().includes(lowercaseQuery) ||
    p.description.toLowerCase().includes(lowercaseQuery) ||
    p.category.toLowerCase().includes(lowercaseQuery)
  );
}

export function getProductPriceDisplay(product: Product): { price: string; originalPrice?: string } {
  if (product.isPreorder && product.preorderDiscount) {
    const discountedPrice = product.basePrice * (1 - product.preorderDiscount / 100);
    return {
      price: getPriceRange(discountedPrice),
      originalPrice: getPriceRange(product.basePrice),
    };
  }
  return {
    price: getPriceRange(product.basePrice),
  };
}
