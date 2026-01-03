'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'motion/react';
import { LetterAnimation } from '@/components/animations/LetterAnimation';
import { MagneticButton } from '@/components/ui/MagneticButton';
import { ScrollReveal } from '@/components/animations/ScrollReveal';
import { TiltCard } from '@/components/ui/TiltCard';
import { formatPrice, calculatePreorderPrice } from '@/types/product';
import { products } from '@/lib/products';
import { Filter } from 'lucide-react';

// Get only hoodies
const hoodies = products.filter(p => p.category === 'hoodie');

const brands = [
  { value: 'all', label: 'All Brands' },
  { value: 'foam-everything', label: 'Foam Everything' },
  { value: 'racing', label: 'Racing' },
  { value: 'vegas', label: 'Vegas 2026' },
];

export default function HoodiesPage() {
  const [selectedBrand, setSelectedBrand] = useState('all');

  const filteredProducts = hoodies.filter(p =>
    selectedBrand === 'all' || p.brand === selectedBrand
  );

  return (
    <div className="min-h-screen bg-[var(--bg-black)] py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <LetterAnimation
            text="HOODIES"
            variant="flip"
            as="h1"
            className="text-4xl md:text-6xl font-black uppercase tracking-wider heading-cyan mb-4"
            staggerDelay={0.06}
          />
          <ScrollReveal variant="fadeUp" delay={0.3}>
            <p className="text-[var(--text-grey)] text-lg">
              Premium spray foam industry hoodies. Stay warm, look cool.
            </p>
          </ScrollReveal>
        </div>

        {/* Filters */}
        <ScrollReveal variant="fadeUp" delay={0.4}>
          <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
            <Filter className="w-5 h-5 text-[var(--text-grey)]" />
            {brands.map((brand) => (
              <button
                key={brand.value}
                onClick={() => setSelectedBrand(brand.value)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  selectedBrand === brand.value
                    ? 'bg-[var(--neon-cyan)] text-black'
                    : 'bg-[var(--bg-charcoal)] text-white border border-white/20 hover:border-[var(--neon-cyan)]'
                }`}
              >
                {brand.label}
              </button>
            ))}
          </div>
        </ScrollReveal>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product, index) => {
            const displayPrice = product.isPreorder && product.preorderDiscount
              ? calculatePreorderPrice(product.basePrice, product.preorderDiscount)
              : product.basePrice;

            return (
              <ScrollReveal key={product.id} variant="fadeUp" delay={0.1 + index * 0.05}>
                <Link href={`/product/${product.slug}`}>
                  <TiltCard className="bg-[var(--bg-charcoal)] rounded-2xl overflow-hidden border border-white/10 hover:border-[var(--neon-cyan)]/50 transition-all">
                    {/* Badges */}
                    {product.isPreorder && (
                      <div className="absolute top-3 left-3 z-10">
                        <span className="badge-preorder text-xs">PRE-ORDER</span>
                      </div>
                    )}

                    {/* Product Image */}
                    <div className="relative aspect-square bg-[var(--bg-dark-grey)]">
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        className="object-contain p-4"
                      />
                    </div>

                    {/* Product Info */}
                    <div className="p-4">
                      <h3 className="font-bold text-white mb-2 line-clamp-1">{product.name}</h3>
                      <div className="flex items-center gap-2">
                        <span className="text-[var(--neon-cyan)] font-bold text-lg">
                          {formatPrice(displayPrice)}
                        </span>
                        {product.isPreorder && product.preorderDiscount && (
                          <span className="text-[var(--text-grey)] line-through text-sm">
                            {formatPrice(product.basePrice)}
                          </span>
                        )}
                      </div>
                    </div>
                  </TiltCard>
                </Link>
              </ScrollReveal>
            );
          })}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-20">
            <p className="text-[var(--text-grey)] text-lg mb-4">No hoodies found for this filter.</p>
            <MagneticButton onClick={() => setSelectedBrand('all')} variant="primary">
              Show All Hoodies
            </MagneticButton>
          </div>
        )}

        {/* Browse Other Categories */}
        <ScrollReveal variant="fadeUp" delay={0.3}>
          <div className="mt-16 text-center">
            <p className="text-[var(--text-grey)] mb-4">Browse other categories</p>
            <div className="flex flex-wrap justify-center gap-4">
              <MagneticButton href="/shop/tshirts" variant="primary">
                T-Shirts
              </MagneticButton>
              <MagneticButton href="/shop/longsleeves" variant="primary">
                Longsleeves
              </MagneticButton>
              <MagneticButton href="/shop" variant="primary">
                All Products
              </MagneticButton>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
}
