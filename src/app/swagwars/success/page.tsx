'use client';

import Link from 'next/link';
import { motion } from 'motion/react';
import { LetterAnimation } from '@/components/animations/LetterAnimation';
import { ScrollReveal } from '@/components/animations/ScrollReveal';
import { MagneticButton } from '@/components/ui/MagneticButton';
import { Trophy, Sword, ArrowLeft, ShoppingBag, Calendar } from 'lucide-react';

export default function SwagWarsSuccessPage() {
  return (
    <div className="min-h-screen bg-[var(--bg-black)] flex items-center justify-center py-20">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Animated Trophy */}
        <ScrollReveal variant="scale" delay={0.1}>
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ type: 'spring', stiffness: 200, delay: 0.2 }}
            className="relative inline-block mb-8"
          >
            <div className="w-28 h-28 bg-[var(--gold)]/20 rounded-full flex items-center justify-center mx-auto">
              <motion.div
                animate={{ rotate: [0, 5, -5, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <Trophy className="w-14 h-14 text-[var(--gold)]" />
              </motion.div>
            </div>
            <motion.div
              className="absolute inset-0 rounded-full border-2 border-[var(--gold)]"
              initial={{ scale: 0.8, opacity: 1 }}
              animate={{ scale: 1.5, opacity: 0 }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
            {/* Animated particles */}
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 bg-[var(--gold)] rounded-full"
                style={{
                  top: '50%',
                  left: '50%',
                }}
                animate={{
                  x: [0, Math.cos(i * 60 * Math.PI / 180) * 80],
                  y: [0, Math.sin(i * 60 * Math.PI / 180) * 80],
                  opacity: [1, 0],
                  scale: [1, 0.5],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  delay: i * 0.2,
                }}
              />
            ))}
          </motion.div>
        </ScrollReveal>

        {/* Heading */}
        <LetterAnimation
          text="YOU'RE IN!"
          variant="glitch"
          as="h1"
          className="text-4xl md:text-6xl font-black uppercase tracking-wider heading-yellow mb-4"
          staggerDelay={0.08}
        />

        <ScrollReveal variant="fadeUp" delay={0.4}>
          <p className="text-xl text-white/80 mb-4">
            Welcome to the Swag Wars, warrior!
          </p>
          <p className="text-[var(--text-grey)] mb-8 max-w-md mx-auto">
            You&apos;ve successfully registered your interest. We&apos;ll send you updates about
            upcoming events, competition rules, and exclusive early-bird offers.
          </p>
        </ScrollReveal>

        {/* What's Next Box */}
        <ScrollReveal variant="fadeUp" delay={0.5}>
          <div className="bg-[var(--bg-charcoal)] rounded-2xl p-6 mb-8 border border-[var(--gold)]/30 text-left">
            <h3 className="text-[var(--gold)] font-bold text-lg mb-4 flex items-center gap-2">
              <Sword className="w-5 h-5" />
              What Happens Next?
            </h3>
            <ul className="space-y-3 text-[var(--text-grey)]">
              <li className="flex items-start gap-3">
                <span className="text-[var(--gold)] font-bold">1.</span>
                <span>Check your inbox for a confirmation email</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[var(--gold)] font-bold">2.</span>
                <span>Gear up with official Swag Wars merchandise</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[var(--gold)] font-bold">3.</span>
                <span>Watch for event announcements and rules</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[var(--gold)] font-bold">4.</span>
                <span>Prepare to dominate at Vegas 2026!</span>
              </li>
            </ul>
          </div>
        </ScrollReveal>

        {/* Actions */}
        <ScrollReveal variant="fadeUp" delay={0.6}>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <MagneticButton
              href="/swagwars"
              variant="secondary"
              className="inline-flex items-center gap-2"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Swag Wars
            </MagneticButton>

            <MagneticButton
              href="/shop"
              variant="gold"
              className="inline-flex items-center gap-2"
            >
              <ShoppingBag className="w-4 h-4" />
              Get Battle Gear
            </MagneticButton>
          </div>
        </ScrollReveal>

        {/* Vegas 2026 Banner */}
        <ScrollReveal variant="fadeUp" delay={0.8}>
          <div className="p-6 bg-gradient-to-r from-[var(--neon-red)]/20 to-[var(--gold)]/10 rounded-2xl border border-[var(--neon-red)]/30">
            <div className="flex items-center justify-center gap-2 mb-2">
              <Calendar className="w-5 h-5 text-[var(--neon-red)]" />
              <p className="text-[var(--neon-red)] font-bold">SprayFoam 2026 Vegas</p>
            </div>
            <p className="text-sm text-[var(--text-grey)] mb-3">
              The ultimate Swag Wars showdown happens at Vegas 2026!
            </p>
            <p className="text-white font-bold">March 22-25, 2026</p>
            <p className="text-sm text-[var(--text-muted)]">Westgate Las Vegas Resort & Casino</p>
            <Link
              href="/shop/vegas-2026"
              className="inline-block mt-4 text-[var(--neon-cyan)] text-sm hover:underline"
            >
              Pre-order Vegas 2026 Gear &rarr;
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
}
