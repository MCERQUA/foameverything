export type ProductCategory = 'tshirt' | 'hoodie' | 'longsleeve' | 'decal' | 'digital';
export type ProductBrand = 'foam-everything' | 'racing' | 'vegas' | 'onlyfoam';
export type ProductSize = 'SM' | 'M' | 'L' | 'XL' | '2XL' | '3XL' | '4XL' | '5XL';

export interface ProductDesign {
  id: string;
  name: string;
  slug: string;
  description: string;
  parody_of?: string;
  colors: string[];
  style: string;
  images: {
    tshirt?: string;
    hoodie?: string;
    longsleeve?: string;
  };
  available_as: ProductCategory[];
}

export interface Product {
  id: string;
  name: string;
  slug: string;
  description: string;
  category: ProductCategory;
  brand: ProductBrand;
  basePrice: number;
  image: string;
  images: string[];
  sizes: ProductSize[];
  colors: string[];
  isPreorder?: boolean;
  preorderDiscount?: number;
  style?: string;
  inStock?: boolean;
}

export interface CartItem {
  productId: string;
  name: string;
  size: ProductSize;
  color?: string;
  quantity: number;
  price: number;
  image: string;
  isPreorder?: boolean;
}

export interface ProductCatalog {
  catalog_version: string;
  last_updated: string;
  pricing_structure: {
    base_sizes: string[];
    plus_sizes: Record<string, number>;
    note: string;
  };
  base_prices: Record<ProductCategory, number>;
  designs: ProductDesign[];
}

// Price calculation helpers
export const PLUS_SIZE_MARKUP: Record<string, number> = {
  '2XL': 2.50,
  '3XL': 5.00,
  '4XL': 7.50,
  '5XL': 10.00,
};

export const BASE_PRICES: Record<ProductCategory, number> = {
  tshirt: 25.00,
  hoodie: 45.00,
  longsleeve: 32.00,
  decal: 25.00,
  digital: 100.00,
};

export function calculatePrice(basePrice: number, size: ProductSize): number {
  const markup = PLUS_SIZE_MARKUP[size] || 0;
  return basePrice + markup;
}

export function formatPrice(price: number): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(price);
}

export function getPriceRange(basePrice: number): string {
  const maxPrice = basePrice + Math.max(...Object.values(PLUS_SIZE_MARKUP));
  return `${formatPrice(basePrice)} - ${formatPrice(maxPrice)}`;
}

export function calculatePreorderPrice(price: number, discountPercent: number): number {
  return price * (1 - discountPercent / 100);
}
