'use client';

import { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { motion } from 'motion/react';
import { LetterAnimation } from '@/components/animations/LetterAnimation';
import { MagneticButton } from '@/components/ui/MagneticButton';
import { ScrollReveal } from '@/components/animations/ScrollReveal';
import { useCart } from '@/context/CartContext';
import { formatPrice } from '@/types/product';
import { Lock, CreditCard, Truck, MapPin, ArrowLeft } from 'lucide-react';

export default function CheckoutPage() {
  const router = useRouter();
  const { items, totalPrice, clearCart } = useCart();
  const [isProcessing, setIsProcessing] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    firstName: '',
    lastName: '',
    address: '',
    city: '',
    state: '',
    zip: '',
    phone: '',
    // Pre-order specific
    fulfillmentType: 'ship', // 'ship' or 'pickup'
  });

  const hasPreorderItems = items.some(item => item.isPreorder);
  const shippingEstimate = 9.99;
  const taxEstimate = totalPrice * 0.08; // 8% tax estimate
  const orderTotal = totalPrice + shippingEstimate + taxEstimate;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);

    try {
      // Create Stripe Checkout session
      const response = await fetch('/api/checkout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          items: items.map(item => ({
            productId: item.productId,
            name: item.name,
            price: item.price,
            quantity: item.quantity,
            size: item.size,
            image: item.image,
            isPreorder: item.isPreorder,
          })),
          fulfillmentType: formData.fulfillmentType,
          shippingAddress: {
            email: formData.email,
            firstName: formData.firstName,
            lastName: formData.lastName,
            address: formData.address,
            city: formData.city,
            state: formData.state,
            zip: formData.zip,
            phone: formData.phone,
          },
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Checkout failed');
      }

      // Clear cart before redirecting to Stripe
      clearCart();

      // Redirect to Stripe Checkout
      if (data.url) {
        window.location.href = data.url;
      }
    } catch (error) {
      console.error('Checkout error:', error);
      setIsProcessing(false);
      // Could add error state and display to user here
    }
  };

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-[var(--bg-black)] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-2xl font-bold text-white mb-4">Your cart is empty</h1>
          <MagneticButton href="/shop" variant="primary">
            Return to Shop
          </MagneticButton>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[var(--bg-black)] py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <LetterAnimation
            text="CHECKOUT"
            variant="flip"
            as="h1"
            className="text-4xl md:text-5xl font-black uppercase tracking-wider heading-cyan mb-4"
            staggerDelay={0.05}
          />
          <div className="flex items-center justify-center gap-2 text-[var(--text-grey)]">
            <Lock className="w-4 h-4" />
            <span>Secure checkout powered by Stripe</span>
          </div>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Checkout Form */}
            <div className="space-y-8">
              {/* Contact Information */}
              <ScrollReveal variant="fadeUp" delay={0.2}>
                <div className="bg-[var(--bg-charcoal)] rounded-2xl p-6 border border-white/10">
                  <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                    <CreditCard className="w-5 h-5 text-[var(--neon-cyan)]" />
                    Contact Information
                  </h2>

                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm text-[var(--text-grey)] mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full bg-[var(--bg-dark-grey)] border border-white/20 rounded-lg px-4 py-3 text-white focus:border-[var(--neon-cyan)] focus:outline-none focus:ring-1 focus:ring-[var(--neon-cyan)]"
                        placeholder="you@example.com"
                      />
                    </div>

                    <div>
                      <label className="block text-sm text-[var(--text-grey)] mb-2">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                        className="w-full bg-[var(--bg-dark-grey)] border border-white/20 rounded-lg px-4 py-3 text-white focus:border-[var(--neon-cyan)] focus:outline-none focus:ring-1 focus:ring-[var(--neon-cyan)]"
                        placeholder="(555) 123-4567"
                      />
                    </div>
                  </div>
                </div>
              </ScrollReveal>

              {/* Shipping Address */}
              <ScrollReveal variant="fadeUp" delay={0.3}>
                <div className="bg-[var(--bg-charcoal)] rounded-2xl p-6 border border-white/10">
                  <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                    <MapPin className="w-5 h-5 text-[var(--neon-cyan)]" />
                    Shipping Address
                  </h2>

                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm text-[var(--text-grey)] mb-2">
                          First Name *
                        </label>
                        <input
                          type="text"
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleInputChange}
                          required
                          className="w-full bg-[var(--bg-dark-grey)] border border-white/20 rounded-lg px-4 py-3 text-white focus:border-[var(--neon-cyan)] focus:outline-none focus:ring-1 focus:ring-[var(--neon-cyan)]"
                        />
                      </div>
                      <div>
                        <label className="block text-sm text-[var(--text-grey)] mb-2">
                          Last Name *
                        </label>
                        <input
                          type="text"
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleInputChange}
                          required
                          className="w-full bg-[var(--bg-dark-grey)] border border-white/20 rounded-lg px-4 py-3 text-white focus:border-[var(--neon-cyan)] focus:outline-none focus:ring-1 focus:ring-[var(--neon-cyan)]"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm text-[var(--text-grey)] mb-2">
                        Street Address *
                      </label>
                      <input
                        type="text"
                        name="address"
                        value={formData.address}
                        onChange={handleInputChange}
                        required
                        className="w-full bg-[var(--bg-dark-grey)] border border-white/20 rounded-lg px-4 py-3 text-white focus:border-[var(--neon-cyan)] focus:outline-none focus:ring-1 focus:ring-[var(--neon-cyan)]"
                      />
                    </div>

                    <div className="grid grid-cols-3 gap-4">
                      <div>
                        <label className="block text-sm text-[var(--text-grey)] mb-2">
                          City *
                        </label>
                        <input
                          type="text"
                          name="city"
                          value={formData.city}
                          onChange={handleInputChange}
                          required
                          className="w-full bg-[var(--bg-dark-grey)] border border-white/20 rounded-lg px-4 py-3 text-white focus:border-[var(--neon-cyan)] focus:outline-none focus:ring-1 focus:ring-[var(--neon-cyan)]"
                        />
                      </div>
                      <div>
                        <label className="block text-sm text-[var(--text-grey)] mb-2">
                          State *
                        </label>
                        <input
                          type="text"
                          name="state"
                          value={formData.state}
                          onChange={handleInputChange}
                          required
                          className="w-full bg-[var(--bg-dark-grey)] border border-white/20 rounded-lg px-4 py-3 text-white focus:border-[var(--neon-cyan)] focus:outline-none focus:ring-1 focus:ring-[var(--neon-cyan)]"
                        />
                      </div>
                      <div>
                        <label className="block text-sm text-[var(--text-grey)] mb-2">
                          ZIP *
                        </label>
                        <input
                          type="text"
                          name="zip"
                          value={formData.zip}
                          onChange={handleInputChange}
                          required
                          className="w-full bg-[var(--bg-dark-grey)] border border-white/20 rounded-lg px-4 py-3 text-white focus:border-[var(--neon-cyan)] focus:outline-none focus:ring-1 focus:ring-[var(--neon-cyan)]"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>

              {/* Pre-order Fulfillment Options */}
              {hasPreorderItems && (
                <ScrollReveal variant="fadeUp" delay={0.4}>
                  <div className="bg-[var(--bg-charcoal)] rounded-2xl p-6 border border-[var(--neon-red)]/30">
                    <h2 className="text-xl font-bold text-[var(--neon-red)] mb-6 flex items-center gap-2">
                      <Truck className="w-5 h-5" />
                      Pre-Order Fulfillment
                    </h2>

                    <div className="space-y-4">
                      <label className="flex items-start gap-4 p-4 bg-[var(--bg-dark-grey)] rounded-lg cursor-pointer border border-white/10 hover:border-[var(--neon-red)]/50">
                        <input
                          type="radio"
                          name="fulfillmentType"
                          value="ship"
                          checked={formData.fulfillmentType === 'ship'}
                          onChange={handleInputChange}
                          className="mt-1"
                        />
                        <div>
                          <span className="font-bold text-white">Ship Before Event</span>
                          <p className="text-sm text-[var(--text-grey)]">
                            Receive your items by March 15, 2026 - wear them to Vegas!
                          </p>
                        </div>
                      </label>

                      <label className="flex items-start gap-4 p-4 bg-[var(--bg-dark-grey)] rounded-lg cursor-pointer border border-white/10 hover:border-[var(--neon-red)]/50">
                        <input
                          type="radio"
                          name="fulfillmentType"
                          value="pickup"
                          checked={formData.fulfillmentType === 'pickup'}
                          onChange={handleInputChange}
                          className="mt-1"
                        />
                        <div>
                          <span className="font-bold text-white">Convention Pickup</span>
                          <p className="text-sm text-[var(--text-grey)]">
                            Pick up at our booth March 22-25, 2026 at Westgate Las Vegas (FREE shipping!)
                          </p>
                        </div>
                      </label>
                    </div>
                  </div>
                </ScrollReveal>
              )}
            </div>

            {/* Order Summary */}
            <div>
              <ScrollReveal variant="fadeLeft" delay={0.3}>
                <div className="bg-[var(--bg-charcoal)] rounded-2xl p-6 border border-white/10 sticky top-24">
                  <h2 className="text-xl font-bold text-white mb-6">Order Summary</h2>

                  {/* Items */}
                  <div className="space-y-4 mb-6 max-h-64 overflow-y-auto">
                    {items.map(item => (
                      <div
                        key={`${item.productId}-${item.size}`}
                        className="flex gap-3"
                      >
                        <div className="relative w-16 h-16 rounded-lg overflow-hidden bg-[var(--bg-dark-grey)] flex-shrink-0">
                          <Image
                            src={item.image}
                            alt={item.name}
                            fill
                            className="object-contain p-1"
                          />
                          <span className="absolute -top-1 -right-1 w-5 h-5 bg-[var(--neon-cyan)] text-black text-xs font-bold rounded-full flex items-center justify-center">
                            {item.quantity}
                          </span>
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="font-medium text-white text-sm line-clamp-1">
                            {item.name}
                          </p>
                          <p className="text-xs text-[var(--text-grey)]">
                            Size: {item.size}
                          </p>
                        </div>
                        <span className="text-white text-sm">
                          {formatPrice(item.price * item.quantity)}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Totals */}
                  <div className="space-y-3 border-t border-white/10 pt-4">
                    <div className="flex justify-between text-[var(--text-grey)]">
                      <span>Subtotal</span>
                      <span className="text-white">{formatPrice(totalPrice)}</span>
                    </div>
                    <div className="flex justify-between text-[var(--text-grey)]">
                      <span>Shipping</span>
                      <span className="text-white">
                        {formData.fulfillmentType === 'pickup' && hasPreorderItems
                          ? 'FREE'
                          : formatPrice(shippingEstimate)}
                      </span>
                    </div>
                    <div className="flex justify-between text-[var(--text-grey)]">
                      <span>Estimated Tax</span>
                      <span className="text-white">{formatPrice(taxEstimate)}</span>
                    </div>
                  </div>

                  <div className="border-t border-white/10 pt-4 mt-4 mb-6">
                    <div className="flex justify-between">
                      <span className="text-lg font-bold text-white">Total</span>
                      <span className="text-lg font-bold text-[var(--neon-cyan)]">
                        {formatPrice(
                          formData.fulfillmentType === 'pickup' && hasPreorderItems
                            ? totalPrice + taxEstimate
                            : orderTotal
                        )}
                      </span>
                    </div>
                  </div>

                  <MagneticButton
                    type="submit"
                    variant="primary"
                    className="w-full text-lg py-4"
                    disabled={isProcessing}
                  >
                    {isProcessing ? (
                      <motion.span
                        animate={{ opacity: [1, 0.5, 1] }}
                        transition={{ duration: 1, repeat: Infinity }}
                      >
                        Processing...
                      </motion.span>
                    ) : (
                      <>
                        <Lock className="w-4 h-4 mr-2 inline" />
                        Complete Order
                      </>
                    )}
                  </MagneticButton>

                  <button
                    type="button"
                    onClick={() => router.back()}
                    className="block w-full text-center mt-4 text-[var(--text-grey)] hover:text-[var(--neon-cyan)] transition-colors"
                  >
                    <ArrowLeft className="w-4 h-4 inline mr-2" />
                    Return to Cart
                  </button>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
