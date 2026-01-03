'use client';

import Image from 'next/image';
import { motion } from 'motion/react';
import { LetterAnimation } from '@/components/animations/LetterAnimation';
import { MagneticButton } from '@/components/ui/MagneticButton';
import { ScrollReveal } from '@/components/animations/ScrollReveal';
import { TiltCard } from '@/components/ui/TiltCard';
import { Trophy, Sword, Target, Users, Gift, Zap } from 'lucide-react';

const features = [
  {
    icon: Trophy,
    title: 'Win Epic Prizes',
    description: 'Compete for exclusive merchandise, equipment, and bragging rights.',
  },
  {
    icon: Sword,
    title: 'Battle Ready',
    description: 'Gear up with our official Swag Wars merchandise before the showdown.',
  },
  {
    icon: Target,
    title: 'Show Your Skills',
    description: 'Demonstrate your spray foam expertise in fun, competitive challenges.',
  },
  {
    icon: Users,
    title: 'Team Events',
    description: 'Form crews and compete in team-based competitions.',
  },
  {
    icon: Gift,
    title: 'Swag Giveaways',
    description: 'Everyone walks away with exclusive Swag Wars gear.',
  },
  {
    icon: Zap,
    title: 'High Energy',
    description: 'Non-stop action and entertainment throughout the event.',
  },
];

export default function SwagWarsPage() {
  return (
    <div className="min-h-screen bg-[var(--bg-black)]">
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/swagwars-trenches.jpg"
            alt="Swag Wars"
            fill
            className="object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[var(--bg-black)] via-transparent to-[var(--bg-black)]" />
        </div>

        {/* Animated particles */}
        <div className="absolute inset-0 z-0">
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-[var(--gold)] rounded-full"
              style={{
                left: `${(i * 7) % 100}%`,
                top: `${(i * 11) % 100}%`,
              }}
              animate={{
                y: [0, -50, 0],
                opacity: [0.3, 1, 0.3],
                scale: [1, 1.5, 1],
              }}
              transition={{
                duration: 2 + (i % 3),
                repeat: Infinity,
                delay: i * 0.2,
              }}
            />
          ))}
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <ScrollReveal variant="scale" delay={0.1}>
            <motion.div
              animate={{ rotate: [0, 5, -5, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="inline-block mb-6"
            >
              <Sword className="w-16 h-16 text-[var(--gold)] mx-auto" />
            </motion.div>
          </ScrollReveal>

          <LetterAnimation
            text="SWAG WARS"
            variant="glitch"
            as="h1"
            className="text-6xl md:text-8xl font-black uppercase tracking-wider heading-yellow mb-4"
            staggerDelay={0.08}
          />

          <ScrollReveal variant="fadeUp" delay={0.5}>
            <p className="text-xl md:text-2xl text-white/80 max-w-2xl mx-auto mb-8">
              The ultimate spray foam industry showdown. Compete. Win. Dominate.
            </p>
          </ScrollReveal>

          <ScrollReveal variant="fadeUp" delay={0.7}>
            <MagneticButton
              href="#signup"
              variant="gold"
              className="text-xl px-12 py-5"
            >
              Enter the Arena
            </MagneticButton>
          </ScrollReveal>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-[var(--bg-charcoal)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal variant="fadeUp" delay={0.1}>
            <div className="text-center mb-16">
              <LetterAnimation
                text="WHAT IS SWAG WARS?"
                variant="wave"
                as="h2"
                className="text-3xl md:text-4xl font-bold uppercase tracking-wider text-white mb-4"
                staggerDelay={0.03}
              />
              <p className="text-[var(--text-grey)] max-w-2xl mx-auto">
                The industry's most exciting competition where spray foam professionals
                battle for glory, prizes, and the ultimate bragging rights.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <ScrollReveal key={feature.title} variant="fadeUp" delay={0.2 + index * 0.1}>
                <TiltCard className="bg-[var(--bg-dark-grey)] rounded-xl p-6 border border-white/10 h-full">
                  <feature.icon className="w-10 h-10 text-[var(--gold)] mb-4" />
                  <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                  <p className="text-[var(--text-grey)]">{feature.description}</p>
                </TiltCard>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Signup Section */}
      <section id="signup" className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--gold-dark)]/20 to-transparent" />

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal variant="scale">
            <Trophy className="w-20 h-20 text-[var(--gold)] mx-auto mb-8" />
          </ScrollReveal>

          <LetterAnimation
            text="JOIN THE BATTLE"
            variant="cascade"
            as="h2"
            className="text-4xl md:text-5xl font-black uppercase tracking-wider heading-yellow mb-6"
            staggerDelay={0.05}
          />

          <ScrollReveal variant="fadeUp" delay={0.3}>
            <p className="text-lg text-white/70 mb-8 max-w-xl mx-auto">
              Sign up now to receive updates about upcoming Swag Wars events,
              competition rules, and exclusive participant perks.
            </p>
          </ScrollReveal>

          <ScrollReveal variant="fadeUp" delay={0.5}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <MagneticButton
                href="mailto:info@foameverything.com?subject=Swag Wars Registration"
                variant="gold"
                className="text-lg px-8 py-4"
              >
                Register Interest
              </MagneticButton>
              <MagneticButton
                href="/shop"
                variant="primary"
                className="text-lg px-8 py-4"
              >
                Get Swag Wars Gear
              </MagneticButton>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 bg-[var(--bg-charcoal)] border-t border-[var(--gold)]/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal variant="fadeUp">
            <p className="text-[var(--text-grey)] mb-4">
              Prepare for battle with official Swag Wars merchandise
            </p>
            <MagneticButton href="/shop" variant="primary">
              Shop Now
            </MagneticButton>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
