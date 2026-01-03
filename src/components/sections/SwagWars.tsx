'use client';

import Image from 'next/image';
import { motion } from 'motion/react';
import { LetterAnimation } from '@/components/animations/LetterAnimation';
import { MagneticButton } from '@/components/ui/MagneticButton';
import { ScrollReveal } from '@/components/animations/ScrollReveal';

export function SwagWars() {
  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/swagwars-trenches.jpg"
          alt="Swag Wars"
          fill
          className="object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--bg-black)] via-[var(--bg-black)]/80 to-[var(--bg-black)]" />
      </div>

      {/* Gold Accent Lines */}
      <div className="absolute inset-0 z-0">
        <motion.div
          className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[var(--gold)] to-transparent"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        />
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[var(--gold)] to-transparent"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          viewport={{ once: true }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge */}
        <ScrollReveal variant="scale" delay={0.1}>
          <span className="inline-block px-4 py-2 mb-6 text-sm uppercase tracking-widest text-[var(--gold)] border border-[var(--gold)]/50 rounded-full">
            Join the Battle
          </span>
        </ScrollReveal>

        {/* Heading */}
        <LetterAnimation
          text="SIGN UP TO"
          variant="flip"
          as="h2"
          className="text-3xl md:text-4xl font-bold uppercase tracking-wider text-white mb-2"
          staggerDelay={0.04}
        />
        <LetterAnimation
          text="SWAG WARS!"
          variant="glitch"
          as="h2"
          className="text-5xl md:text-6xl lg:text-7xl font-black uppercase tracking-wider heading-yellow mb-8"
          staggerDelay={0.05}
          delay={0.3}
        />

        {/* Description */}
        <ScrollReveal variant="fadeUp" delay={0.6}>
          <p className="text-lg text-white/70 max-w-2xl mx-auto mb-10">
            Connect with brands, win exclusive merchandise, and represent the spray foam industry
            in the ultimate brand battle.
          </p>
        </ScrollReveal>

        {/* CTA */}
        <ScrollReveal variant="scale" delay={0.8}>
          <MagneticButton href="/swagwars" variant="gold" className="text-xl px-10 py-5">
            Signup Now!
          </MagneticButton>
        </ScrollReveal>

        {/* Decorative Elements */}
        <div className="absolute left-10 top-1/2 -translate-y-1/2 opacity-20 hidden lg:block">
          <motion.div
            className="w-40 h-40 border-4 border-[var(--gold)] rounded-full"
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
          />
        </div>
        <div className="absolute right-10 top-1/2 -translate-y-1/2 opacity-20 hidden lg:block">
          <motion.div
            className="w-32 h-32 border-4 border-[var(--gold)] rotate-45"
            animate={{ rotate: 405 }}
            transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
          />
        </div>
      </div>
    </section>
  );
}

export default SwagWars;
