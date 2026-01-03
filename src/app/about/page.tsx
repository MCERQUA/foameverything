'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'motion/react';
import { LetterAnimation } from '@/components/animations/LetterAnimation';
import { ScrollReveal } from '@/components/animations/ScrollReveal';
import { MagneticButton } from '@/components/ui/MagneticButton';
import { TiltCard } from '@/components/ui/TiltCard';
import { Tv, Radio, Target, Users, Sparkles, Trophy } from 'lucide-react';

const networkSites = [
  {
    name: 'SprayFoamTV',
    url: 'https://sprayfoamtv.com',
    description: '24/7 streaming platform with industry shows, tutorials, and contractor spotlights.',
    icon: Tv,
    color: 'var(--neon-cyan)',
  },
  {
    name: 'SprayFoamRadio',
    url: 'https://sprayfoamradio.com',
    description: 'AI-generated industry music by DJ FoamBot. Hip-hop, country, and more.',
    icon: Radio,
    color: 'var(--neon-pink)',
  },
  {
    name: 'NerfFusion',
    url: 'https://nerffusion.com',
    description: 'Custom 3D-printed Nerf accessories styled like Graco Fusion spray guns.',
    icon: Target,
    color: 'var(--neon-yellow)',
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[var(--bg-black)]">
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--neon-cyan)]/5 to-transparent" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <ScrollReveal variant="fadeUp">
              <span className="text-[var(--neon-cyan)] text-sm uppercase tracking-wider">
                Our Story
              </span>
            </ScrollReveal>

            <LetterAnimation
              text="ABOUT FOAM EVERYTHING"
              variant="wave"
              as="h1"
              className="text-4xl md:text-6xl font-black uppercase tracking-wider heading-cyan mt-2 mb-6"
              staggerDelay={0.04}
            />

            <ScrollReveal variant="fadeUp" delay={0.3}>
              <p className="text-xl text-[var(--text-grey)] max-w-3xl mx-auto">
                The #1 destination for spray foam industry merchandise.
                Representing the culture, connecting the community.
              </p>
            </ScrollReveal>
          </div>

          {/* Logo Display */}
          <ScrollReveal variant="scale" delay={0.4}>
            <div className="flex justify-center mb-16">
              <motion.div
                whileHover={{ scale: 1.05, rotate: 2 }}
                className="relative"
              >
                <Image
                  src="/images/smlogo.png"
                  alt="Foam Everything"
                  width={300}
                  height={100}
                  className="h-24 md:h-32 w-auto"
                />
                <div className="absolute inset-0 bg-[var(--neon-cyan)]/20 blur-3xl -z-10" />
              </motion.div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-[var(--bg-charcoal)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal variant="fadeRight">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                  Built By The Industry, <span className="text-[var(--neon-cyan)]">For The Industry</span>
                </h2>
                <div className="space-y-4 text-[var(--text-grey)]">
                  <p>
                    Foam Everything was born from a simple idea: spray foam professionals deserve
                    apparel that represents their craft with pride. We&apos;re not just selling t-shirts
                    — we&apos;re building a movement.
                  </p>
                  <p>
                    Our designs celebrate the culture, humor, and brotherhood of the spray foam
                    industry. From parody designs that make you laugh to racing gear that shows
                    your competitive spirit, every piece tells a story.
                  </p>
                  <p>
                    We&apos;re proud to be the official merchandise partner of the SprayFoam 2026
                    Convention in Las Vegas, bringing exclusive gear to the biggest event in
                    the industry.
                  </p>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal variant="fadeLeft" delay={0.2}>
              <div className="grid grid-cols-2 gap-4">
                <TiltCard className="bg-[var(--bg-dark-grey)] rounded-xl p-6 border border-white/10 text-center">
                  <Users className="w-10 h-10 text-[var(--neon-cyan)] mx-auto mb-3" />
                  <div className="text-3xl font-bold text-white">1000+</div>
                  <div className="text-sm text-[var(--text-muted)]">Happy Customers</div>
                </TiltCard>
                <TiltCard className="bg-[var(--bg-dark-grey)] rounded-xl p-6 border border-white/10 text-center">
                  <Sparkles className="w-10 h-10 text-[var(--neon-pink)] mx-auto mb-3" />
                  <div className="text-3xl font-bold text-white">50+</div>
                  <div className="text-sm text-[var(--text-muted)]">Unique Designs</div>
                </TiltCard>
                <TiltCard className="bg-[var(--bg-dark-grey)] rounded-xl p-6 border border-white/10 text-center">
                  <Trophy className="w-10 h-10 text-[var(--gold)] mx-auto mb-3" />
                  <div className="text-3xl font-bold text-white">3</div>
                  <div className="text-sm text-[var(--text-muted)]">Conventions</div>
                </TiltCard>
                <TiltCard className="bg-[var(--bg-dark-grey)] rounded-xl p-6 border border-white/10 text-center">
                  <Target className="w-10 h-10 text-[var(--neon-red)] mx-auto mb-3" />
                  <div className="text-3xl font-bold text-white">100%</div>
                  <div className="text-sm text-[var(--text-muted)]">Industry Focused</div>
                </TiltCard>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Industry Network */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal variant="fadeUp">
            <div className="text-center mb-12">
              <LetterAnimation
                text="THE FOAM NETWORK"
                variant="cascade"
                as="h2"
                className="text-3xl md:text-4xl font-bold uppercase tracking-wider text-white mb-4"
                staggerDelay={0.04}
              />
              <p className="text-[var(--text-grey)] max-w-2xl mx-auto">
                Foam Everything is part of a larger ecosystem connecting spray foam professionals
                through entertainment, community, and culture.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {networkSites.map((site, index) => (
              <ScrollReveal key={site.name} variant="fadeUp" delay={0.2 + index * 0.1}>
                <a
                  href={site.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block h-full"
                >
                  <TiltCard className="bg-[var(--bg-charcoal)] rounded-xl p-6 border border-white/10 h-full hover:border-white/30 transition-colors">
                    <site.icon
                      className="w-12 h-12 mb-4"
                      style={{ color: site.color }}
                    />
                    <h3 className="text-xl font-bold text-white mb-2">{site.name}</h3>
                    <p className="text-[var(--text-grey)] text-sm mb-4">{site.description}</p>
                    <span
                      className="text-sm font-medium"
                      style={{ color: site.color }}
                    >
                      Visit Site →
                    </span>
                  </TiltCard>
                </a>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Vegas 2026 CTA */}
      <section className="py-20 bg-gradient-to-r from-[var(--neon-red)]/20 to-[var(--bg-charcoal)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <ScrollReveal variant="scale">
              <span className="inline-block px-4 py-2 bg-[var(--neon-red)] text-white text-sm font-bold rounded-full mb-6">
                MARCH 22-25, 2026
              </span>
            </ScrollReveal>

            <LetterAnimation
              text="SEE YOU IN VEGAS"
              variant="glitch"
              as="h2"
              className="text-3xl md:text-5xl font-black uppercase tracking-wider text-white mb-6"
              staggerDelay={0.06}
            />

            <ScrollReveal variant="fadeUp" delay={0.3}>
              <p className="text-[var(--text-grey)] max-w-2xl mx-auto mb-8">
                Join us at the SprayFoam 2026 Convention & Expo at Westgate Las Vegas.
                Pre-order your exclusive Vegas merchandise now and pick it up at the convention!
              </p>
            </ScrollReveal>

            <ScrollReveal variant="fadeUp" delay={0.4}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <MagneticButton href="/shop/vegas-2026" variant="red">
                  Shop Vegas 2026 Collection
                </MagneticButton>
                <MagneticButton
                  href="https://sprayfoamshow.org/"
                  variant="secondary"
                >
                  Register for Convention
                </MagneticButton>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal variant="fadeUp">
            <h3 className="text-2xl font-bold text-white mb-4">Have Questions?</h3>
            <p className="text-[var(--text-grey)] mb-6">
              We&apos;d love to hear from you. Reach out for custom orders, wholesale inquiries, or just to say hi.
            </p>
            <MagneticButton href="/contact" variant="primary">
              Contact Us
            </MagneticButton>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
