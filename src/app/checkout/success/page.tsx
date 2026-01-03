'use client';

import { Suspense, useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { motion } from 'motion/react';
import { LetterAnimation } from '@/components/animations/LetterAnimation';
import { MagneticButton } from '@/components/ui/MagneticButton';
import { ScrollReveal } from '@/components/animations/ScrollReveal';
import { CheckCircle, Package, Mail, Calendar, Loader2 } from 'lucide-react';

interface SessionData {
  id: string;
  status: string;
  paymentStatus: string;
  customerEmail?: string;
  amountTotal?: number;
  currency?: string;
  metadata?: {
    fulfillmentType?: string;
    hasPreorderItems?: string;
  };
}

function SuccessContent() {
  const searchParams = useSearchParams();
  const sessionId = searchParams.get('session_id');
  const [session, setSession] = useState<SessionData | null>(null);
  const [loading, setLoading] = useState(!!sessionId);

  useEffect(() => {
    if (sessionId) {
      fetch(`/api/checkout/session?session_id=${sessionId}`)
        .then(res => res.json())
        .then(data => {
          setSession(data);
          setLoading(false);
        })
        .catch(() => {
          setLoading(false);
        });
    }
  }, [sessionId]);

  const formatAmount = (amount: number, currency: string) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: currency.toUpperCase(),
    }).format(amount / 100);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-[var(--bg-black)] py-20 flex items-center justify-center">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
        >
          <Loader2 className="w-12 h-12 text-[var(--neon-cyan)]" />
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[var(--bg-black)] py-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Success Icon */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: 'spring', damping: 10, stiffness: 100 }}
          className="w-32 h-32 mx-auto mb-8 rounded-full bg-[var(--neon-cyan)]/20 flex items-center justify-center"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.3, type: 'spring', damping: 10 }}
          >
            <CheckCircle className="w-16 h-16 text-[var(--neon-cyan)]" />
          </motion.div>
        </motion.div>

        {/* Heading */}
        <LetterAnimation
          text="ORDER CONFIRMED!"
          variant="neon"
          as="h1"
          className="text-4xl md:text-5xl font-black uppercase tracking-wider heading-cyan mb-4"
          staggerDelay={0.05}
        />

        <ScrollReveal variant="fadeUp" delay={0.3}>
          <p className="text-[var(--text-grey)] text-lg mb-4">
            Thank you for your order! We've sent a confirmation email with your order details.
          </p>
          {session?.customerEmail && (
            <p className="text-[var(--neon-cyan)] font-medium mb-4">
              Confirmation sent to: {session.customerEmail}
            </p>
          )}
          {session?.amountTotal && session?.currency && (
            <p className="text-white text-2xl font-bold mb-8">
              Order Total: {formatAmount(session.amountTotal, session.currency)}
            </p>
          )}
        </ScrollReveal>

        {/* Order Info Cards */}
        <ScrollReveal variant="fadeUp" delay={0.4}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
            <div className="bg-[var(--bg-charcoal)] rounded-xl p-6 border border-white/10">
              <Mail className="w-8 h-8 text-[var(--neon-cyan)] mx-auto mb-3" />
              <h3 className="font-bold text-white mb-2">Confirmation Email</h3>
              <p className="text-sm text-[var(--text-grey)]">
                Check your inbox for order details and tracking information.
              </p>
            </div>

            <div className="bg-[var(--bg-charcoal)] rounded-xl p-6 border border-white/10">
              <Package className="w-8 h-8 text-[var(--neon-cyan)] mx-auto mb-3" />
              <h3 className="font-bold text-white mb-2">Shipping</h3>
              <p className="text-sm text-[var(--text-grey)]">
                {session?.metadata?.fulfillmentType === 'pickup'
                  ? 'Convention pickup at Westgate Las Vegas.'
                  : 'Orders typically ship within 3-5 business days.'}
              </p>
            </div>

            <div className="bg-[var(--bg-charcoal)] rounded-xl p-6 border border-white/10">
              <Calendar className="w-8 h-8 text-[var(--neon-cyan)] mx-auto mb-3" />
              <h3 className="font-bold text-white mb-2">Pre-Orders</h3>
              <p className="text-sm text-[var(--text-grey)]">
                {session?.metadata?.hasPreorderItems === 'true'
                  ? 'Your pre-order items ship by March 15, 2026.'
                  : 'Vegas 2026 items ship by March 15, 2026.'}
              </p>
            </div>
          </div>
        </ScrollReveal>

        {/* CTAs */}
        <ScrollReveal variant="fadeUp" delay={0.5}>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <MagneticButton href="/shop" variant="primary" className="text-lg px-8 py-4">
              Continue Shopping
            </MagneticButton>
            <MagneticButton href="/" variant="primary" className="text-lg px-8 py-4">
              Back to Home
            </MagneticButton>
          </div>
        </ScrollReveal>

        {/* Vegas 2026 Promo */}
        <ScrollReveal variant="scale" delay={0.6}>
          <div className="mt-16 p-8 bg-gradient-to-r from-[var(--purple-dark)] to-[var(--bg-black)] rounded-2xl border border-[var(--neon-red)]/30">
            <h3 className="text-2xl font-bold text-[var(--neon-red)] mb-2">
              See You in Vegas!
            </h3>
            <p className="text-[var(--text-grey)] mb-4">
              March 22-25, 2026 at Westgate Las Vegas Resort & Casino
            </p>
            <MagneticButton
              href="https://sprayfoamshow.org/"
              variant="red"
              className="text-sm"
            >
              Register for the Convention
            </MagneticButton>
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
}

function LoadingFallback() {
  return (
    <div className="min-h-screen bg-[var(--bg-black)] py-20 flex items-center justify-center">
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
      >
        <Loader2 className="w-12 h-12 text-[var(--neon-cyan)]" />
      </motion.div>
    </div>
  );
}

export default function CheckoutSuccessPage() {
  return (
    <Suspense fallback={<LoadingFallback />}>
      <SuccessContent />
    </Suspense>
  );
}
