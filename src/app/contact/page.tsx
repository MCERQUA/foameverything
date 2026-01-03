'use client';

import { useState } from 'react';
import { motion } from 'motion/react';
import { LetterAnimation } from '@/components/animations/LetterAnimation';
import { ScrollReveal } from '@/components/animations/ScrollReveal';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  return (
    <div className="min-h-screen bg-[var(--bg-black)] py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <ScrollReveal variant="fadeUp">
            <span className="text-[var(--neon-cyan)] text-sm uppercase tracking-wider">
              Get In Touch
            </span>
          </ScrollReveal>

          <LetterAnimation
            text="CONTACT US"
            variant="wave"
            as="h1"
            className="text-4xl md:text-6xl font-black uppercase tracking-wider heading-cyan mt-2 mb-6"
            staggerDelay={0.05}
          />

          <ScrollReveal variant="fadeUp" delay={0.3}>
            <p className="text-[var(--text-grey)] max-w-2xl mx-auto text-lg">
              Have questions about our products, events, or custom orders?
              We&apos;d love to hear from you.
            </p>
          </ScrollReveal>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <ScrollReveal variant="fadeRight" delay={0.2}>
            <div className="space-y-8">
              <div className="bg-[var(--bg-charcoal)] rounded-2xl p-8 border border-white/10">
                <h3 className="text-xl font-bold text-white mb-6">Contact Information</h3>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[var(--neon-cyan)]/10 rounded-xl flex items-center justify-center">
                      <Mail className="w-5 h-5 text-[var(--neon-cyan)]" />
                    </div>
                    <div>
                      <p className="text-sm text-[var(--text-muted)] uppercase tracking-wider">Email</p>
                      <a href="mailto:info@foameverything.com" className="text-white hover:text-[var(--neon-cyan)] transition-colors">
                        info@foameverything.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[var(--neon-cyan)]/10 rounded-xl flex items-center justify-center">
                      <MapPin className="w-5 h-5 text-[var(--neon-cyan)]" />
                    </div>
                    <div>
                      <p className="text-sm text-[var(--text-muted)] uppercase tracking-wider">Event Location</p>
                      <p className="text-white">
                        Westgate Las Vegas Resort & Casino<br />
                        3000 Paradise Road<br />
                        Las Vegas, NV 89109
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Vegas Event Info */}
              <div className="bg-gradient-to-br from-[var(--neon-red)]/20 to-[var(--bg-charcoal)] rounded-2xl p-8 border border-[var(--neon-red)]/30">
                <h3 className="text-xl font-bold text-[var(--neon-red)] mb-4">SprayFoam 2026 Vegas</h3>
                <p className="text-[var(--text-grey)] mb-4">
                  Join us at the biggest spray foam industry event of the year!
                </p>
                <p className="text-white font-bold">March 22-25, 2026</p>
                <a
                  href="https://sprayfoamshow.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-4 text-[var(--neon-cyan)] hover:underline"
                >
                  Register at sprayfoamshow.org &rarr;
                </a>
              </div>
            </div>
          </ScrollReveal>

          {/* Contact Form */}
          <ScrollReveal variant="fadeLeft" delay={0.3}>
            <div className="bg-[var(--bg-charcoal)] rounded-2xl p-8 border border-white/10">
              <h3 className="text-xl font-bold text-white mb-6">Send Us a Message</h3>

              <form
                name="contact"
                method="POST"
                action="/contact/success"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
                className="space-y-6"
              >
                {/* Netlify form name */}
                <input type="hidden" name="form-name" value="contact" />

                {/* Honeypot field */}
                <p className="hidden">
                  <label>
                    Don&apos;t fill this out: <input name="bot-field" />
                  </label>
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-white mb-2">
                      First Name *
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      required
                      className="w-full bg-[var(--bg-dark-grey)] border border-white/20 rounded-lg px-4 py-3 text-white placeholder-[var(--text-muted)] focus:border-[var(--neon-cyan)] focus:outline-none focus:ring-1 focus:ring-[var(--neon-cyan)]"
                      placeholder="John"
                    />
                  </div>

                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-white mb-2">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      required
                      className="w-full bg-[var(--bg-dark-grey)] border border-white/20 rounded-lg px-4 py-3 text-white placeholder-[var(--text-muted)] focus:border-[var(--neon-cyan)] focus:outline-none focus:ring-1 focus:ring-[var(--neon-cyan)]"
                      placeholder="Doe"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-white mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full bg-[var(--bg-dark-grey)] border border-white/20 rounded-lg px-4 py-3 text-white placeholder-[var(--text-muted)] focus:border-[var(--neon-cyan)] focus:outline-none focus:ring-1 focus:ring-[var(--neon-cyan)]"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-white mb-2">
                    Subject *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    required
                    className="w-full bg-[var(--bg-dark-grey)] border border-white/20 rounded-lg px-4 py-3 text-white focus:border-[var(--neon-cyan)] focus:outline-none focus:ring-1 focus:ring-[var(--neon-cyan)]"
                  >
                    <option value="">Select a subject</option>
                    <option value="Order Inquiry">Order Inquiry</option>
                    <option value="Custom Order">Custom Order Request</option>
                    <option value="Vegas 2026">Vegas 2026 Event</option>
                    <option value="Wholesale">Wholesale Inquiry</option>
                    <option value="NASCAR Sponsorship">NASCAR Sponsorship</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-white mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    className="w-full bg-[var(--bg-dark-grey)] border border-white/20 rounded-lg px-4 py-3 text-white placeholder-[var(--text-muted)] focus:border-[var(--neon-cyan)] focus:outline-none focus:ring-1 focus:ring-[var(--neon-cyan)] resize-none"
                    placeholder="How can we help you?"
                  />
                </div>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-[var(--neon-cyan)] text-black font-bold py-4 px-6 rounded-xl flex items-center justify-center gap-2 shadow-[0_0_20px_var(--neon-cyan)] hover:shadow-[0_0_30px_var(--neon-cyan)] transition-all"
                >
                  <Send className="w-5 h-5" />
                  Send Message
                </motion.button>
              </form>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </div>
  );
}
