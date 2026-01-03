'use client';

import { motion } from 'motion/react';
import { LetterAnimation } from '@/components/animations/LetterAnimation';
import { MagneticButton } from '@/components/ui/MagneticButton';
import { ScrollReveal } from '@/components/animations/ScrollReveal';
import { User, Mail, Lock, Package, Heart, Settings, LogIn } from 'lucide-react';

export default function AccountPage() {
  // For now, show a login/signup prompt
  // This will be replaced with actual auth when Neon Auth is implemented

  return (
    <div className="min-h-screen bg-[var(--bg-black)] py-20">
      <div className="max-w-md mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: 'spring', damping: 10 }}
            className="w-24 h-24 mx-auto mb-6 rounded-full bg-[var(--bg-charcoal)] border border-[var(--neon-cyan)]/30 flex items-center justify-center"
          >
            <User className="w-12 h-12 text-[var(--neon-cyan)]" />
          </motion.div>

          <LetterAnimation
            text="MY ACCOUNT"
            variant="cascade"
            as="h1"
            className="text-3xl md:text-4xl font-black uppercase tracking-wider heading-cyan mb-4"
            staggerDelay={0.05}
          />

          <ScrollReveal variant="fadeUp" delay={0.3}>
            <p className="text-[var(--text-grey)]">
              Sign in to track orders, save favorites, and checkout faster.
            </p>
          </ScrollReveal>
        </div>

        {/* Login Form */}
        <ScrollReveal variant="fadeUp" delay={0.4}>
          <div className="bg-[var(--bg-charcoal)] rounded-2xl p-8 border border-white/10">
            <form className="space-y-6">
              <div>
                <label className="block text-sm text-[var(--text-grey)] mb-2">
                  Email Address
                </label>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[var(--text-grey)]" />
                  <input
                    type="email"
                    placeholder="you@example.com"
                    className="w-full bg-[var(--bg-dark-grey)] border border-white/20 rounded-lg pl-12 pr-4 py-3 text-white focus:border-[var(--neon-cyan)] focus:outline-none focus:ring-1 focus:ring-[var(--neon-cyan)]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm text-[var(--text-grey)] mb-2">
                  Password
                </label>
                <div className="relative">
                  <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[var(--text-grey)]" />
                  <input
                    type="password"
                    placeholder="••••••••"
                    className="w-full bg-[var(--bg-dark-grey)] border border-white/20 rounded-lg pl-12 pr-4 py-3 text-white focus:border-[var(--neon-cyan)] focus:outline-none focus:ring-1 focus:ring-[var(--neon-cyan)]"
                  />
                </div>
              </div>

              <MagneticButton
                type="submit"
                variant="primary"
                className="w-full text-lg py-4"
              >
                <LogIn className="w-5 h-5 mr-2 inline" />
                Sign In
              </MagneticButton>
            </form>

            <div className="mt-6 text-center">
              <p className="text-sm text-[var(--text-grey)]">
                Don't have an account?{' '}
                <button className="text-[var(--neon-cyan)] hover:underline">
                  Create one
                </button>
              </p>
            </div>
          </div>
        </ScrollReveal>

        {/* Benefits */}
        <ScrollReveal variant="fadeUp" delay={0.5}>
          <div className="mt-12 space-y-4">
            <h3 className="text-center text-white font-bold mb-6">Account Benefits</h3>

            <div className="flex items-center gap-4 p-4 bg-[var(--bg-charcoal)] rounded-xl border border-white/10">
              <Package className="w-6 h-6 text-[var(--neon-cyan)]" />
              <div>
                <p className="text-white font-medium">Track Orders</p>
                <p className="text-sm text-[var(--text-grey)]">View order status and history</p>
              </div>
            </div>

            <div className="flex items-center gap-4 p-4 bg-[var(--bg-charcoal)] rounded-xl border border-white/10">
              <Heart className="w-6 h-6 text-[var(--neon-pink)]" />
              <div>
                <p className="text-white font-medium">Save Favorites</p>
                <p className="text-sm text-[var(--text-grey)]">Create a wishlist of items</p>
              </div>
            </div>

            <div className="flex items-center gap-4 p-4 bg-[var(--bg-charcoal)] rounded-xl border border-white/10">
              <Settings className="w-6 h-6 text-[var(--gold)]" />
              <div>
                <p className="text-white font-medium">Faster Checkout</p>
                <p className="text-sm text-[var(--text-grey)]">Save addresses for quick orders</p>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Guest Checkout */}
        <ScrollReveal variant="fadeUp" delay={0.6}>
          <div className="mt-8 text-center">
            <p className="text-sm text-[var(--text-grey)] mb-4">
              Prefer not to create an account?
            </p>
            <MagneticButton href="/shop" variant="primary" className="text-sm">
              Continue as Guest
            </MagneticButton>
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
}
