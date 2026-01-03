'use client';

import Link from 'next/link';
import { motion } from 'motion/react';
import { LetterAnimation } from '@/components/animations/LetterAnimation';
import { ScrollReveal } from '@/components/animations/ScrollReveal';
import { MagneticButton } from '@/components/ui/MagneticButton';
import { Mail, CheckCircle, ArrowLeft, ShoppingBag, Sparkles } from 'lucide-react';

export default function NewsletterSuccessPage() {
  return (
    <div className="min-h-screen bg-[var(--bg-black)] flex items-center justify-center py-20">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Animated Mail Icon */}
        <ScrollReveal variant="scale" delay={0.1}>
          <motion.div
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ type: 'spring', stiffness: 200, delay: 0.2 }}
            className="relative inline-block mb-8"
          >
            <div className="w-24 h-24 bg-[var(--neon-cyan)]/20 rounded-full flex items-center justify-center mx-auto">
              <Mail className="w-12 h-12 text-[var(--neon-cyan)]" />
            </div>
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.5 }}
              className="absolute -top-2 -right-2 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center"
            >
              <CheckCircle className="w-5 h-5 text-white" />
            </motion.div>
            <motion.div
              className="absolute inset-0 rounded-full border-2 border-[var(--neon-cyan)]"
              initial={{ scale: 0.8, opacity: 1 }}
              animate={{ scale: 1.5, opacity: 0 }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
          </motion.div>
        </ScrollReveal>

        {/* Heading */}
        <LetterAnimation
          text="SUBSCRIBED!"
          variant="wave"
          as="h1"
          className="text-4xl md:text-5xl font-black uppercase tracking-wider heading-cyan mb-4"
          staggerDelay={0.05}
        />

        <ScrollReveal variant="fadeUp" delay={0.4}>
          <p className="text-xl text-white/80 mb-4">
            Welcome to the Foam Everything family!
          </p>
          <p className="text-[var(--text-grey)] mb-8 max-w-md mx-auto">
            You&apos;ll be the first to know about new products, exclusive deals,
            event updates, and everything happening in the spray foam industry.
          </p>
        </ScrollReveal>

        {/* What You'll Get */}
        <ScrollReveal variant="fadeUp" delay={0.5}>
          <div className="bg-[var(--bg-charcoal)] rounded-2xl p-6 mb-8 border border-white/10 text-left">
            <h3 className="text-white font-bold text-lg mb-4 flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-[var(--neon-cyan)]" />
              What You&apos;ll Receive
            </h3>
            <ul className="space-y-3 text-[var(--text-grey)]">
              <li className="flex items-center gap-3">
                <span className="w-2 h-2 bg-[var(--neon-cyan)] rounded-full" />
                <span>Exclusive early access to new products</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="w-2 h-2 bg-[var(--neon-cyan)] rounded-full" />
                <span>Special subscriber-only discounts</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="w-2 h-2 bg-[var(--neon-cyan)] rounded-full" />
                <span>Vegas 2026 event updates and pre-orders</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="w-2 h-2 bg-[var(--neon-cyan)] rounded-full" />
                <span>Industry news and Swag Wars announcements</span>
              </li>
            </ul>
          </div>
        </ScrollReveal>

        {/* Actions */}
        <ScrollReveal variant="fadeUp" delay={0.6}>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <MagneticButton
              href="/"
              variant="secondary"
              className="inline-flex items-center gap-2"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </MagneticButton>

            <MagneticButton
              href="/shop"
              variant="primary"
              className="inline-flex items-center gap-2"
            >
              <ShoppingBag className="w-4 h-4" />
              Start Shopping
            </MagneticButton>
          </div>
        </ScrollReveal>

        {/* Vegas 2026 Banner */}
        <ScrollReveal variant="fadeUp" delay={0.8}>
          <div className="mt-12 p-6 bg-gradient-to-r from-[var(--neon-red)]/20 to-transparent rounded-2xl border border-[var(--neon-red)]/30">
            <p className="text-[var(--neon-red)] font-bold mb-2">SprayFoam 2026 Vegas</p>
            <p className="text-sm text-[var(--text-grey)]">
              March 22-25, 2026 at Westgate Las Vegas
            </p>
            <Link
              href="/shop/vegas-2026"
              className="inline-block mt-3 text-[var(--neon-cyan)] text-sm hover:underline"
            >
              Shop Vegas 2026 Collection &rarr;
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
}
