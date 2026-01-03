'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'motion/react';
import { LetterAnimation } from '@/components/animations/LetterAnimation';
import { MagneticButton } from '@/components/ui/MagneticButton';
import { ScrollReveal } from '@/components/animations/ScrollReveal';
import { TiltCard } from '@/components/ui/TiltCard';
import { CountdownTimer } from '@/components/ui/CountdownTimer';
import { formatPrice, calculatePreorderPrice } from '@/types/product';
import type { Product } from '@/types/product';
import { Calendar, Truck, MapPin } from 'lucide-react';

// Pre-order cutoff date
const PREORDER_CUTOFF = new Date('2026-03-01T00:00:00');

// Vegas 2026 products (pre-order items)
const vegasProducts: Product[] = [
  {
    id: 'vegas-hoodie-2026',
    name: 'Vegas 2026 Limited Hoodie',
    slug: 'vegas-2026-hoodie',
    description: 'Exclusive Vegas 2026 convention hoodie. Limited edition design.',
    basePrice: 53.00,
    category: 'hoodie',
    brand: 'vegas',
    image: '/images/sprayfoam-vegas-hoodie-web1.webp',
    images: ['/images/sprayfoam-vegas-hoodie-web1.webp'],
    sizes: ['SM', 'M', 'L', 'XL', '2XL', '3XL'],
    colors: ['black'],
    inStock: true,
    isPreorder: true,
    preorderDiscount: 15,
  },
  {
    id: 'vegas-tee-2026',
    name: 'Vegas 2026 Event Tee',
    slug: 'vegas-2026-tshirt',
    description: 'Official Vegas 2026 event t-shirt.',
    basePrice: 28.50,
    category: 'tshirt',
    brand: 'vegas',
    image: '/images/las-vegas.webp',
    images: ['/images/las-vegas.webp'],
    sizes: ['SM', 'M', 'L', 'XL', '2XL', '3XL'],
    colors: ['black'],
    inStock: true,
    isPreorder: true,
    preorderDiscount: 10,
  },
  {
    id: 'vegas-longsleeve-2026',
    name: 'Vegas 2026 Longsleeve',
    slug: 'vegas-2026-longsleeve',
    description: 'Premium Vegas 2026 longsleeve shirt.',
    basePrice: 34.00,
    category: 'longsleeve',
    brand: 'vegas',
    image: '/images/josh-vegas-mirrored-longsleeves.webp',
    images: ['/images/josh-vegas-mirrored-longsleeves.webp'],
    sizes: ['SM', 'M', 'L', 'XL', '2XL', '3XL'],
    colors: ['black'],
    inStock: true,
    isPreorder: true,
    preorderDiscount: 12,
  },
];

export default function Vegas2026ShopPage() {
  return (
    <div className="min-h-screen bg-[var(--bg-black)]">
      {/* Hero Banner */}
      <section className="relative py-24 section-vegas overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/las-vegas.webp"
            alt="Vegas 2026"
            fill
            className="object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[var(--purple-dark)]/80 to-[var(--bg-black)]" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal variant="scale" delay={0.1}>
            <span className="badge-preorder mb-6">
              Pre-Order Now • Ships March 15, 2026
            </span>
          </ScrollReveal>

          <LetterAnimation
            text="VEGAS 2026"
            variant="neon"
            as="h1"
            className="text-5xl md:text-7xl font-black uppercase tracking-wider heading-red mb-4"
            staggerDelay={0.05}
          />
          <LetterAnimation
            text="COLLECTION"
            variant="flip"
            as="h2"
            className="text-3xl md:text-4xl font-bold uppercase tracking-wider text-white mb-8"
            staggerDelay={0.03}
            delay={0.5}
          />

          <ScrollReveal variant="fadeUp" delay={0.6}>
            <p className="text-lg text-white/70 max-w-2xl mx-auto mb-8">
              Exclusive merchandise for the SprayFoam Convention & Expo 2026.
              Pre-order now and save up to 15%!
            </p>
          </ScrollReveal>

          {/* Countdown to Pre-Order Cutoff */}
          <ScrollReveal variant="scale" delay={0.7}>
            <div className="mb-8">
              <p className="text-sm text-[var(--neon-red)] mb-2 uppercase tracking-wider">Pre-Order Ends</p>
              <CountdownTimer targetDate={PREORDER_CUTOFF} variant="compact" />
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Info Cards */}
      <section className="py-12 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <ScrollReveal variant="fadeUp" delay={0.1}>
              <div className="bg-[var(--bg-charcoal)] rounded-xl p-6 border border-[var(--neon-red)]/30 text-center">
                <Calendar className="w-8 h-8 text-[var(--neon-red)] mx-auto mb-3" />
                <h3 className="font-bold text-white mb-2">March 22-25, 2026</h3>
                <p className="text-sm text-[var(--text-grey)]">Convention Dates</p>
              </div>
            </ScrollReveal>

            <ScrollReveal variant="fadeUp" delay={0.2}>
              <div className="bg-[var(--bg-charcoal)] rounded-xl p-6 border border-[var(--neon-cyan)]/30 text-center">
                <Truck className="w-8 h-8 text-[var(--neon-cyan)] mx-auto mb-3" />
                <h3 className="font-bold text-white mb-2">Ships by March 15</h3>
                <p className="text-sm text-[var(--text-grey)]">Wear to the Convention!</p>
              </div>
            </ScrollReveal>

            <ScrollReveal variant="fadeUp" delay={0.3}>
              <div className="bg-[var(--bg-charcoal)] rounded-xl p-6 border border-[var(--neon-pink)]/30 text-center">
                <MapPin className="w-8 h-8 text-[var(--neon-pink)] mx-auto mb-3" />
                <h3 className="font-bold text-white mb-2">Convention Pickup</h3>
                <p className="text-sm text-[var(--text-grey)]">Or pick up at our booth!</p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal variant="fadeUp" delay={0.1}>
            <h2 className="text-2xl font-bold text-white mb-8 text-center">
              Pre-Order Exclusive Items
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {vegasProducts.map((product, index) => {
              const preorderPrice = calculatePreorderPrice(product.basePrice, product.preorderDiscount || 0);

              return (
                <ScrollReveal key={product.id} variant="fadeUp" delay={0.2 + index * 0.1}>
                  <Link href={`/product/${product.slug}`}>
                    <TiltCard className="bg-[var(--bg-charcoal)] rounded-2xl overflow-hidden border border-white/10 hover:border-[var(--neon-red)]/50 transition-colors">
                      {/* Pre-Order Badge */}
                      <div className="absolute top-3 left-3 z-10">
                        <span className="badge-preorder text-xs">
                          PRE-ORDER • {product.preorderDiscount}% OFF
                        </span>
                      </div>

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
                          <span className="text-[var(--neon-red)] font-bold text-lg">
                            {formatPrice(preorderPrice)}
                          </span>
                          <span className="text-[var(--text-grey)] line-through text-sm">
                            {formatPrice(product.basePrice)}
                          </span>
                        </div>
                      </div>
                    </TiltCard>
                  </Link>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-[var(--purple-dark)] to-[var(--bg-black)] border-t border-[var(--neon-red)]/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal variant="scale">
            <h2 className="text-3xl font-bold text-white mb-4">
              Don't Miss the Convention!
            </h2>
            <p className="text-[var(--text-grey)] mb-8">
              Register now for the SprayFoam Convention & Expo 2026
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <MagneticButton
                href="https://sprayfoamshow.org/"
                variant="red"
                className="text-lg px-8 py-4"
              >
                Register for Convention
              </MagneticButton>
              <MagneticButton
                href="/shop"
                variant="primary"
                className="text-lg px-8 py-4"
              >
                Browse All Products
              </MagneticButton>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
