'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'motion/react';
import { ExternalLink, Send } from 'lucide-react';

const footerLinks = {
  shop: [
    { href: '/shop', label: 'All Products' },
    { href: '/shop/hoodies', label: 'Hoodies' },
    { href: '/shop/tshirts', label: 'T-Shirts' },
    { href: '/shop/longsleeves', label: 'Longsleeves' },
    { href: '/shop/vegas-2026', label: 'Vegas 2026' },
  ],
  brands: [
    { href: '/shop?brand=foam-everything', label: 'Foam Everything' },
    { href: '/shop?brand=racing', label: 'Spray Foam Racing' },
    { href: '/shop?brand=onlyfoam', label: 'OnlyFoam' },
  ],
  external: [
    { href: 'https://sprayfoamtv.com', label: 'SprayFoamTV', external: true },
    { href: 'https://sprayfoamradio.com', label: 'SprayFoamRadio', external: true },
    { href: 'https://nerffusion.com', label: 'NerfFusion', external: true },
    { href: 'https://www.spatial.io/s/OnlyFoam-Club-64044f6c74c5bd1700ce915a', label: 'OnlyFoam Club', external: true },
  ],
  info: [
    { href: '/about', label: 'About Us' },
    { href: '/contact', label: 'Contact' },
    { href: '/shipping', label: 'Shipping Info' },
    { href: '/returns', label: 'Returns' },
  ],
};

export function Footer() {
  return (
    <footer className="bg-[var(--bg-black)] border-t border-white/10 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Logo & Description */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block mb-4">
              <Image
                src="/images/smlogo.png"
                alt="Foam Everything"
                width={150}
                height={50}
                className="h-12 w-auto"
              />
            </Link>
            <p className="text-[var(--text-grey)] text-sm max-w-md mb-6">
              The #1 destination for spray foam industry merchandise.
              Representing the culture, connecting the community.
            </p>

            {/* Newsletter Signup */}
            <div className="mb-6">
              <p className="text-xs text-[var(--text-muted)] uppercase tracking-wider mb-3">
                Stay Updated
              </p>
              <form
                name="newsletter"
                method="POST"
                action="/newsletter/success"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
                className="flex gap-2"
              >
                <input type="hidden" name="form-name" value="newsletter" />
                <p className="hidden">
                  <label>
                    Don&apos;t fill this out: <input name="bot-field" />
                  </label>
                </p>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="Enter your email"
                  className="flex-1 bg-[var(--bg-charcoal)] border border-white/20 rounded-lg px-4 py-2 text-sm text-white placeholder-[var(--text-muted)] focus:border-[var(--neon-cyan)] focus:outline-none focus:ring-1 focus:ring-[var(--neon-cyan)]"
                />
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-[var(--neon-cyan)] text-black px-4 py-2 rounded-lg font-medium text-sm hover:shadow-[0_0_15px_var(--neon-cyan)] transition-shadow"
                >
                  <Send className="w-4 h-4" />
                </motion.button>
              </form>
            </div>

            <div>
              <p className="text-xs text-[var(--text-muted)] uppercase tracking-wider mb-2">
                Vegas 2026 Convention
              </p>
              <p className="text-[var(--neon-cyan)] font-semibold">
                March 22-25, 2026 @ Westgate Las Vegas
              </p>
            </div>
          </div>

          {/* Shop Links */}
          <div>
            <h4 className="text-[var(--neon-yellow)] uppercase text-sm font-bold tracking-wider mb-4">
              Shop
            </h4>
            <ul className="space-y-2">
              {footerLinks.shop.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[var(--text-grey)] text-sm hover:text-[var(--neon-cyan)] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* External Links */}
          <div>
            <h4 className="text-[var(--neon-yellow)] uppercase text-sm font-bold tracking-wider mb-4">
              Network
            </h4>
            <ul className="space-y-2">
              {footerLinks.external.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[var(--text-grey)] text-sm hover:text-[var(--neon-cyan)] transition-colors inline-flex items-center gap-1"
                  >
                    {link.label}
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Info Links */}
          <div>
            <h4 className="text-[var(--neon-yellow)] uppercase text-sm font-bold tracking-wider mb-4">
              Info
            </h4>
            <ul className="space-y-2">
              {footerLinks.info.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[var(--text-grey)] text-sm hover:text-[var(--neon-cyan)] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-[var(--text-muted)] text-xs">
              &copy; {new Date().getFullYear()} Foam Everything. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <Link
                href="/privacy"
                className="text-[var(--text-muted)] text-xs hover:text-white transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-[var(--text-muted)] text-xs hover:text-white transition-colors"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>

        {/* Floating OnlyFoam Club Button */}
        <motion.a
          href="https://www.spatial.io/s/OnlyFoam-Club-64044f6c74c5bd1700ce915a"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 bg-[var(--neon-pink)] text-white px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-bold shadow-[0_0_20px_var(--neon-pink)] z-40 flex items-center gap-1.5 sm:gap-2"
        >
          <span className="hidden sm:inline">Enter Only Foam Club</span>
          <span className="sm:hidden">OnlyFoam</span>
          <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4" />
        </motion.a>
      </div>
    </footer>
  );
}

export default Footer;
