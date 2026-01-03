'use client';

import { LetterAnimation } from '@/components/animations/LetterAnimation';
import { ProductCard } from '@/components/ui/ProductCard';
import { MagneticButton } from '@/components/ui/MagneticButton';
import { ScrollReveal, StaggerContainer, StaggerItem } from '@/components/animations/ScrollReveal';

// Sample products - will be replaced with data from database
const featuredProducts = [
  {
    name: 'Foam Everything Hoodie',
    slug: 'foam-everything-hoodie',
    price: '$38.00 - $53.00',
    image: '/images/Hoodies/foamalone.png',
    category: 'Hoodie',
  },
  {
    name: 'Spray Foam Racing T-Shirt',
    slug: 'spray-foam-racing-tshirt',
    price: '$25.00 - $28.50',
    image: '/images/sprayfoam-nascar.png',
    category: 'T-Shirt',
  },
  {
    name: 'Vegas 2026 Hoodie',
    slug: 'vegas-2026-hoodie',
    price: '$35.00 - $45.00',
    originalPrice: '$38.00 - $53.00',
    image: '/images/sprayfoam-vegas-hoodie-web1.png',
    category: 'Hoodie',
    isPreorder: true,
  },
  {
    name: 'OnlyFoam Longsleeve',
    slug: 'onlyfoam-longsleeve',
    price: '$30.00 - $34.00',
    image: '/images/onlyfoam-longsleeve.webp',
    category: 'Longsleeve',
  },
];

interface ProductGridProps {
  title?: string;
  subtitle?: string;
  products?: typeof featuredProducts;
  showViewAll?: boolean;
  variant?: 'default' | 'compact';
}

export function ProductGrid({
  title = 'FEATURED PRODUCTS',
  subtitle = 'Shop the latest from our collections',
  products = featuredProducts,
  showViewAll = true,
  variant = 'default',
}: ProductGridProps) {
  return (
    <section className="py-20 bg-[var(--bg-black)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        {variant === 'default' && (
          <div className="text-center mb-16">
            <LetterAnimation
              text={title}
              variant="zoom"
              as="h2"
              className="text-4xl md:text-5xl font-black uppercase tracking-wider heading-cyan mb-4"
              staggerDelay={0.04}
            />
            <ScrollReveal variant="fadeUp" delay={0.3}>
              <p className="text-[var(--text-grey)] text-lg max-w-2xl mx-auto">
                {subtitle}
              </p>
            </ScrollReveal>
          </div>
        )}

        {/* Product Grid */}
        <StaggerContainer
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          staggerDelay={0.1}
        >
          {products.map((product) => (
            <StaggerItem key={product.slug}>
              <ProductCard {...product} />
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* View All CTA */}
        {showViewAll && (
          <ScrollReveal variant="fadeUp" delay={0.5}>
            <div className="text-center mt-12">
              <MagneticButton href="/shop" variant="primary" className="text-lg px-10 py-4">
                View All Products
              </MagneticButton>
            </div>
          </ScrollReveal>
        )}
      </div>
    </section>
  );
}

export default ProductGrid;
