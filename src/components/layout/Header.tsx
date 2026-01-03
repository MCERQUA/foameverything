'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ShoppingCart, User } from 'lucide-react';
import { MagneticButton } from '@/components/ui/MagneticButton';

interface HeaderProps {
  cartCount?: number;
}

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/shop', label: 'Shop' },
  { href: '/shop/vegas-2026', label: 'Vegas 2026' },
  { href: '/swagwars', label: 'Swag Wars' },
];

export function Header({ cartCount = 0 }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[var(--bg-black)]/90 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative"
            >
              <Image
                src="/images/smlogo.png"
                alt="Foam Everything"
                width={120}
                height={40}
                className="h-8 md:h-10 w-auto"
                priority
              />
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="relative px-4 py-2 text-sm font-medium uppercase tracking-wider text-white/90
                  hover:text-[var(--neon-cyan)] transition-all duration-300 group
                  border border-transparent hover:border-[var(--neon-cyan)]/50 rounded-full
                  hover:bg-[var(--neon-cyan)]/10 hover:shadow-[0_0_15px_rgba(0,255,255,0.3)]"
              >
                {link.label}
                {link.label === 'Vegas 2026' && (
                  <span className="absolute -top-1 -right-1 w-2 h-2 bg-[var(--neon-red)] rounded-full animate-pulse shadow-[0_0_8px_var(--neon-red)]" />
                )}
              </Link>
            ))}
          </nav>

          {/* Right Side Actions */}
          <div className="flex items-center gap-4">
            {/* Cart */}
            <Link href="/cart" className="relative">
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="p-2 text-white/80 hover:text-[var(--neon-cyan)] transition-colors"
              >
                <ShoppingCart className="w-5 h-5" />
                {cartCount > 0 && (
                  <motion.span
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="absolute -top-1 -right-1 w-5 h-5 flex items-center justify-center bg-[var(--neon-red)] text-white text-xs font-bold rounded-full shadow-[0_0_10px_var(--neon-red)]"
                  >
                    {cartCount}
                  </motion.span>
                )}
              </motion.div>
            </Link>

            {/* Account */}
            <Link href="/account" className="hidden md:block">
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="p-2 text-white/80 hover:text-[var(--neon-cyan)] transition-colors"
              >
                <User className="w-5 h-5" />
              </motion.div>
            </Link>

            {/* Shop CTA */}
            <div className="hidden md:block">
              <MagneticButton href="/shop" variant="primary" className="text-sm py-2 px-6">
                Shop Now
              </MagneticButton>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 text-white"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[var(--bg-charcoal)] border-t border-white/10"
          >
            <nav className="flex flex-col p-4 gap-4">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.href}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="block text-lg uppercase tracking-wider text-white/80 hover:text-[var(--neon-cyan)] transition-colors py-2"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: navLinks.length * 0.1 }}
                className="pt-4 border-t border-white/10"
              >
                <MagneticButton
                  href="/shop"
                  variant="primary"
                  className="w-full text-center"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Shop Now
                </MagneticButton>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

export default Header;
