'use client';

import Image from 'next/image';
import { motion } from 'motion/react';
import { LetterAnimation } from '@/components/animations/LetterAnimation';
import { MagneticButton } from '@/components/ui/MagneticButton';
import { ScrollReveal } from '@/components/animations/ScrollReveal';

export function HeroBanner() {
  return (
    <section className="relative min-h-[80vh] flex items-center bg-[var(--bg-black)] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/Foam-Everything-Header.webp"
          alt="Foam Everything"
          fill
          className="object-cover opacity-60"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--bg-black)]/90 via-[var(--bg-black)]/40 to-transparent" />
      </div>

      {/* Animated Background Elements - using deterministic positions to avoid hydration mismatch */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {[
          { left: 5, top: 10, duration: 3.2, delay: 0.1 },
          { left: 15, top: 80, duration: 4.1, delay: 0.5 },
          { left: 25, top: 30, duration: 3.8, delay: 1.2 },
          { left: 35, top: 60, duration: 4.5, delay: 0.3 },
          { left: 45, top: 20, duration: 3.5, delay: 1.8 },
          { left: 55, top: 70, duration: 4.2, delay: 0.7 },
          { left: 65, top: 40, duration: 3.9, delay: 1.5 },
          { left: 75, top: 90, duration: 4.0, delay: 0.9 },
          { left: 85, top: 15, duration: 3.3, delay: 1.1 },
          { left: 95, top: 55, duration: 4.3, delay: 0.4 },
          { left: 10, top: 45, duration: 3.7, delay: 1.6 },
          { left: 20, top: 85, duration: 4.4, delay: 0.2 },
          { left: 30, top: 25, duration: 3.4, delay: 1.9 },
          { left: 40, top: 75, duration: 4.6, delay: 0.6 },
          { left: 50, top: 35, duration: 3.6, delay: 1.3 },
          { left: 60, top: 65, duration: 4.1, delay: 0.8 },
          { left: 70, top: 5, duration: 3.9, delay: 1.7 },
          { left: 80, top: 50, duration: 4.2, delay: 0.1 },
          { left: 90, top: 95, duration: 3.5, delay: 1.4 },
          { left: 2, top: 72, duration: 4.0, delay: 1.0 },
        ].map((particle, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-[var(--neon-cyan)]/20 rounded-full"
            style={{
              left: `${particle.left}%`,
              top: `${particle.top}%`,
            }}
            animate={{
              y: [0, -100, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              delay: particle.delay,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-3xl">
          {/* Badge */}
          <ScrollReveal variant="fadeRight" delay={0.1}>
            <span className="inline-block px-4 py-2 mb-6 text-sm uppercase tracking-widest text-[var(--neon-cyan)] border border-[var(--neon-cyan)]/30 rounded-full backdrop-blur-sm">
              Official Industry Merchandise
            </span>
          </ScrollReveal>

          {/* Main Heading */}
          <div className="mb-6">
            <LetterAnimation
              text="FOAM"
              variant="cascade"
              as="h1"
              className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black uppercase tracking-wider text-white"
              staggerDelay={0.05}
            />
            <LetterAnimation
              text="EVERYTHING"
              variant="cascade"
              as="h1"
              className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black uppercase tracking-wider heading-cyan"
              staggerDelay={0.05}
              delay={0.3}
            />
          </div>

          {/* Subheading */}
          <ScrollReveal variant="fadeUp" delay={0.6}>
            <p className="text-xl md:text-2xl text-white/70 mb-10 max-w-xl">
              Premium apparel for spray foam professionals. Wear your trade with pride.
            </p>
          </ScrollReveal>

          {/* CTA Buttons */}
          <ScrollReveal variant="fadeUp" delay={0.8}>
            <div className="flex flex-wrap gap-3 sm:gap-4">
              <MagneticButton href="/shop/hoodies" variant="primary" className="text-sm sm:text-base md:text-lg px-4 py-2.5 sm:px-6 sm:py-3 md:px-8 md:py-4">
                Order Hoodies
              </MagneticButton>
              <MagneticButton href="/shop/tshirts" variant="primary" className="text-sm sm:text-base md:text-lg px-4 py-2.5 sm:px-6 sm:py-3 md:px-8 md:py-4">
                Order T-Shirts
              </MagneticButton>
              <MagneticButton href="/shop/longsleeves" variant="primary" className="text-sm sm:text-base md:text-lg px-4 py-2.5 sm:px-6 sm:py-3 md:px-8 md:py-4">
                Order Long Sleeves
              </MagneticButton>
            </div>
          </ScrollReveal>
        </div>
      </div>

      {/* Decorative Element */}
      <motion.div
        className="absolute bottom-0 right-0 w-1/2 h-1/2 pointer-events-none hidden lg:block"
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1, duration: 1 }}
      >
        <div className="absolute inset-0 bg-gradient-to-tl from-[var(--neon-cyan)]/10 to-transparent" />
      </motion.div>
    </section>
  );
}

export default HeroBanner;
