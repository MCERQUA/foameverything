'use client';

import Image from 'next/image';
import { motion } from 'motion/react';
import { LetterAnimation } from '@/components/animations/LetterAnimation';
import { MagneticButton } from '@/components/ui/MagneticButton';
import { ScrollReveal } from '@/components/animations/ScrollReveal';

export function NASCARSection() {
  return (
    <section className="relative py-24 section-racing overflow-hidden">
      {/* Racing Stripes */}
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute top-0 left-0 w-full h-12 bg-[repeating-linear-gradient(90deg,var(--neon-yellow)_0px,var(--neon-yellow)_50px,transparent_50px,transparent_100px)]" />
        <div className="absolute bottom-0 left-0 w-full h-12 bg-[repeating-linear-gradient(90deg,var(--neon-yellow)_0px,var(--neon-yellow)_50px,transparent_50px,transparent_100px)]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <ScrollReveal variant="fadeRight" delay={0.1}>
              <span className="inline-block px-4 py-2 mb-6 text-sm uppercase tracking-widest text-[var(--neon-yellow)] border border-[var(--neon-yellow)]/50 rounded bg-black/30">
                Spray Foam Racing
              </span>
            </ScrollReveal>

            <LetterAnimation
              text="GET YOUR COMPANY"
              variant="cascade"
              as="h2"
              className="text-3xl md:text-4xl font-bold uppercase tracking-wider text-white mb-2"
              staggerDelay={0.03}
            />
            <LetterAnimation
              text="BRANDED NASCAR"
              variant="cascade"
              as="h2"
              className="text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-wider heading-yellow mb-6 whitespace-nowrap"
              staggerDelay={0.04}
              delay={0.4}
            />

            <ScrollReveal variant="fadeUp" delay={0.7}>
              <p className="text-lg text-white/80 mb-8 max-w-lg">
                Submit your logos, pick your number, choose your colors, and describe the style
                you would like to enter the upcoming race.
              </p>
            </ScrollReveal>

            <ScrollReveal variant="fadeUp" delay={0.9}>
              <MagneticButton
                href="https://sprayfoamgames.com/nascar-signup/"
                variant="nascar"
                className="text-lg px-8 py-4"
              >
                NASCAR Company Signup
              </MagneticButton>
            </ScrollReveal>
          </div>

          {/* NASCAR Image */}
          <ScrollReveal variant="fadeLeft" delay={0.3}>
            <motion.div
              className="relative"
              whileHover={{ scale: 1.02 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <div className="relative aspect-video rounded-2xl overflow-hidden border-4 border-[var(--neon-yellow)] shadow-[0_0_30px_rgba(237,240,0,0.3)]">
                <Image
                  src="/images/sprayfoam_daytona_nascar_allstate.png"
                  alt="Spray Foam Racing NASCAR"
                  fill
                  className="object-cover"
                />
              </div>
              {/* Glow effect */}
              <div className="absolute -inset-4 bg-[var(--neon-yellow)]/10 blur-2xl rounded-3xl -z-10" />
            </motion.div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

export default NASCARSection;
