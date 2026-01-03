'use client';

import { useState, useMemo } from 'react';
import { motion } from 'motion/react';
import { LetterAnimation } from '@/components/animations/LetterAnimation';
import { ProductCard } from '@/components/ui/ProductCard';
import { ScrollReveal, StaggerContainer, StaggerItem } from '@/components/animations/ScrollReveal';
import { products, getProductPriceDisplay } from '@/lib/products';
import { ProductCategory, ProductBrand } from '@/types/product';
import { Filter, Grid, List } from 'lucide-react';

const categories: { value: string; label: string }[] = [
  { value: 'all', label: 'All Products' },
  { value: 'hoodie', label: 'Hoodies' },
  { value: 'tshirt', label: 'T-Shirts' },
  { value: 'longsleeve', label: 'Longsleeves' },
];

const brands: { value: string; label: string }[] = [
  { value: 'all', label: 'All Brands' },
  { value: 'foam-everything', label: 'Foam Everything' },
  { value: 'racing', label: 'Racing' },
  { value: 'vegas', label: 'Vegas 2026' },
  { value: 'onlyfoam', label: 'OnlyFoam' },
];

export default function ShopPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedBrand, setSelectedBrand] = useState('all');
  const [showFilters, setShowFilters] = useState(false);

  const filteredProducts = useMemo(() => {
    return products.filter(product => {
      const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
      const matchesBrand = selectedBrand === 'all' || product.brand === selectedBrand;
      return matchesCategory && matchesBrand;
    });
  }, [selectedCategory, selectedBrand]);

  return (
    <div className="min-h-screen bg-[var(--bg-black)] py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <ScrollReveal variant="scale" delay={0.1}>
            <span className="inline-block px-4 py-1 text-xs uppercase tracking-widest text-[var(--neon-cyan)] border border-[var(--neon-cyan)]/30 rounded-full mb-4">
              Official Merchandise
            </span>
          </ScrollReveal>

          <LetterAnimation
            text="SHOP"
            variant="cascade"
            as="h1"
            className="text-5xl md:text-6xl lg:text-7xl font-black uppercase tracking-wider heading-cyan mb-4"
            staggerDelay={0.05}
          />

          <ScrollReveal variant="fadeUp" delay={0.3}>
            <p className="text-[var(--text-grey)] text-lg max-w-2xl mx-auto">
              Premium apparel for spray foam professionals. Every purchase supports the industry.
            </p>
          </ScrollReveal>
        </div>

        {/* Filters */}
        <ScrollReveal variant="fadeUp" delay={0.4}>
          <div className="mb-8">
            {/* Mobile Filter Toggle */}
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="md:hidden flex items-center gap-2 text-white mb-4 px-4 py-2 border border-white/20 rounded-lg"
            >
              <Filter className="w-4 h-4" />
              Filters
            </button>

            {/* Filter Bar */}
            <div className={`${showFilters ? 'block' : 'hidden'} md:flex flex-wrap gap-4 items-center justify-between p-4 bg-[var(--bg-charcoal)] rounded-xl border border-white/10`}>
              {/* Category Filter */}
              <div className="flex flex-wrap gap-2 mb-4 md:mb-0">
                {categories.map((cat) => (
                  <button
                    key={cat.value}
                    onClick={() => setSelectedCategory(cat.value)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                      selectedCategory === cat.value
                        ? 'bg-[var(--neon-cyan)] text-black shadow-[0_0_15px_var(--neon-cyan)]'
                        : 'bg-white/5 text-white/70 hover:bg-white/10 hover:text-white'
                    }`}
                  >
                    {cat.label}
                  </button>
                ))}
              </div>

              {/* Brand Filter */}
              <div className="flex flex-wrap gap-2">
                {brands.map((brand) => (
                  <button
                    key={brand.value}
                    onClick={() => setSelectedBrand(brand.value)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                      selectedBrand === brand.value
                        ? 'bg-[var(--neon-pink)] text-white shadow-[0_0_15px_var(--neon-pink)]'
                        : 'bg-white/5 text-white/70 hover:bg-white/10 hover:text-white'
                    }`}
                  >
                    {brand.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Results Count */}
        <ScrollReveal variant="fadeUp" delay={0.5}>
          <div className="mb-6 text-[var(--text-grey)]">
            Showing {filteredProducts.length} {filteredProducts.length === 1 ? 'product' : 'products'}
          </div>
        </ScrollReveal>

        {/* Product Grid */}
        {filteredProducts.length > 0 ? (
          <StaggerContainer
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
            staggerDelay={0.1}
          >
            {filteredProducts.map((product) => {
              const priceDisplay = getProductPriceDisplay(product);
              return (
                <StaggerItem key={product.id}>
                  <ProductCard
                    name={product.name}
                    slug={product.slug}
                    price={priceDisplay.price}
                    originalPrice={priceDisplay.originalPrice}
                    image={product.image}
                    category={product.category}
                    isPreorder={product.isPreorder}
                  />
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        ) : (
          <div className="text-center py-20">
            <p className="text-[var(--text-grey)] text-lg">
              No products found matching your filters.
            </p>
            <button
              onClick={() => {
                setSelectedCategory('all');
                setSelectedBrand('all');
              }}
              className="mt-4 text-[var(--neon-cyan)] hover:underline"
            >
              Clear filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
