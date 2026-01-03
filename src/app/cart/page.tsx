'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'motion/react';
import { LetterAnimation } from '@/components/animations/LetterAnimation';
import { MagneticButton } from '@/components/ui/MagneticButton';
import { ScrollReveal } from '@/components/animations/ScrollReveal';
import { useCart } from '@/context/CartContext';
import { formatPrice } from '@/types/product';
import { Minus, Plus, Trash2, ShoppingBag, ArrowLeft } from 'lucide-react';

export default function CartPage() {
  const { items, updateQuantity, removeItem, totalPrice, clearCart } = useCart();

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-[var(--bg-black)] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center py-20">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: 'spring', damping: 15 }}
              className="w-32 h-32 mx-auto mb-8 rounded-full bg-[var(--bg-charcoal)] flex items-center justify-center"
            >
              <ShoppingBag className="w-16 h-16 text-[var(--text-grey)]" />
            </motion.div>

            <LetterAnimation
              text="YOUR CART IS EMPTY"
              variant="wave"
              as="h1"
              className="text-3xl md:text-4xl font-black uppercase tracking-wider text-white mb-4"
              staggerDelay={0.04}
            />

            <p className="text-[var(--text-grey)] text-lg mb-8">
              Looks like you haven't added anything yet.
            </p>

            <MagneticButton href="/shop" variant="primary" className="text-lg px-8 py-4">
              <ArrowLeft className="w-5 h-5 mr-2 inline" />
              Return to Shop
            </MagneticButton>
          </div>
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
            text="YOUR CART"
            variant="cascade"
            as="h1"
            className="text-4xl md:text-5xl font-black uppercase tracking-wider heading-cyan mb-4"
            staggerDelay={0.05}
          />
          <p className="text-[var(--text-grey)]">
            {items.length} {items.length === 1 ? 'item' : 'items'} in your cart
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            <ScrollReveal variant="fadeUp" delay={0.2}>
              <div className="bg-[var(--bg-charcoal)] rounded-2xl p-6 border border-white/10">
                <AnimatePresence mode="popLayout">
                  {items.map((item, index) => (
                    <motion.div
                      key={`${item.productId}-${item.size}`}
                      layout
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, x: -100 }}
                      transition={{ delay: index * 0.1 }}
                      className={`flex gap-4 py-6 ${
                        index !== items.length - 1 ? 'border-b border-white/10' : ''
                      }`}
                    >
                      {/* Product Image */}
                      <Link
                        href={`/product/${item.productId}`}
                        className="relative w-24 h-24 rounded-lg overflow-hidden bg-[var(--bg-dark-grey)] flex-shrink-0"
                      >
                        <Image
                          src={item.image}
                          alt={item.name}
                          fill
                          className="object-contain p-2"
                        />
                        {item.isPreorder && (
                          <span className="absolute top-1 left-1 text-[8px] px-1 py-0.5 bg-[var(--neon-red)] text-white rounded">
                            PRE
                          </span>
                        )}
                      </Link>

                      {/* Product Details */}
                      <div className="flex-1 min-w-0">
                        <Link
                          href={`/product/${item.productId}`}
                          className="font-semibold text-white hover:text-[var(--neon-cyan)] transition-colors line-clamp-1"
                        >
                          {item.name}
                        </Link>
                        <p className="text-sm text-[var(--text-grey)] mt-1">
                          Size: {item.size}
                          {item.color && ` • Color: ${item.color}`}
                        </p>
                        <p className="text-[var(--neon-cyan)] font-bold mt-2">
                          {formatPrice(item.price)}
                        </p>
                      </div>

                      {/* Quantity & Actions */}
                      <div className="flex flex-col items-end gap-2">
                        {/* Quantity */}
                        <div className="flex items-center bg-[var(--bg-dark-grey)] rounded-lg">
                          <button
                            onClick={() =>
                              updateQuantity(item.productId, item.size, item.quantity - 1)
                            }
                            className="p-2 hover:text-[var(--neon-cyan)] transition-colors"
                          >
                            <Minus className="w-4 h-4" />
                          </button>
                          <span className="w-8 text-center text-sm">{item.quantity}</span>
                          <button
                            onClick={() =>
                              updateQuantity(item.productId, item.size, item.quantity + 1)
                            }
                            className="p-2 hover:text-[var(--neon-cyan)] transition-colors"
                          >
                            <Plus className="w-4 h-4" />
                          </button>
                        </div>

                        {/* Subtotal */}
                        <span className="text-sm text-[var(--text-grey)]">
                          {formatPrice(item.price * item.quantity)}
                        </span>

                        {/* Remove */}
                        <button
                          onClick={() => removeItem(item.productId, item.size)}
                          className="text-[var(--text-grey)] hover:text-[var(--neon-red)] transition-colors"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>

                {/* Clear Cart */}
                <div className="pt-4 border-t border-white/10 mt-4">
                  <button
                    onClick={clearCart}
                    className="text-sm text-[var(--text-grey)] hover:text-[var(--neon-red)] transition-colors"
                  >
                    Clear Cart
                  </button>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Order Summary */}
          <div>
            <ScrollReveal variant="fadeLeft" delay={0.3}>
              <div className="bg-[var(--bg-charcoal)] rounded-2xl p-6 border border-white/10 sticky top-24">
                <h2 className="text-xl font-bold text-white mb-6">Order Summary</h2>

                <div className="space-y-4 mb-6">
                  <div className="flex justify-between text-[var(--text-grey)]">
                    <span>Subtotal</span>
                    <span className="text-white">{formatPrice(totalPrice)}</span>
                  </div>
                  <div className="flex justify-between text-[var(--text-grey)]">
                    <span>Shipping</span>
                    <span className="text-white">Calculated at checkout</span>
                  </div>
                  <div className="flex justify-between text-[var(--text-grey)]">
                    <span>Tax</span>
                    <span className="text-white">Calculated at checkout</span>
                  </div>
                </div>

                <div className="border-t border-white/10 pt-4 mb-6">
                  <div className="flex justify-between">
                    <span className="text-lg font-bold text-white">Total</span>
                    <span className="text-lg font-bold text-[var(--neon-cyan)]">
                      {formatPrice(totalPrice)}
                    </span>
                  </div>
                </div>

                <MagneticButton
                  href="/checkout"
                  variant="primary"
                  className="w-full text-lg py-4"
                >
                  Proceed to Checkout
                </MagneticButton>

                <Link
                  href="/shop"
                  className="block text-center mt-4 text-[var(--text-grey)] hover:text-[var(--neon-cyan)] transition-colors"
                >
                  <ArrowLeft className="w-4 h-4 inline mr-2" />
                  Continue Shopping
                </Link>

                {/* Pre-order Notice */}
                {items.some(item => item.isPreorder) && (
                  <div className="mt-6 p-4 bg-[var(--neon-red)]/10 border border-[var(--neon-red)]/30 rounded-xl">
                    <p className="text-xs text-[var(--text-grey)]">
                      <strong className="text-[var(--neon-red)]">Pre-order items</strong> in your
                      cart will ship by March 15, 2026 or be available for pickup at the Vegas
                      convention.
                    </p>
                  </div>
                )}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </div>
  );
}
