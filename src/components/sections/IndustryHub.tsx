'use client';

import { motion } from 'motion/react';
import { LetterAnimation } from '@/components/animations/LetterAnimation';
import { TiltCard } from '@/components/ui/TiltCard';
import { MagneticButton } from '@/components/ui/MagneticButton';
import { ScrollReveal, StaggerContainer, StaggerItem } from '@/components/animations/ScrollReveal';
import { Tv, Radio, Target, ExternalLink } from 'lucide-react';

const hubItems = [
  {
    name: 'SprayFoamTV',
    tagline: 'Entertainment for the Spray Foam Industry',
    description: '24/7 streaming platform featuring industry shows, project walkthroughs, and contractor content.',
    url: 'https://sprayfoamtv.com',
    icon: Tv,
    color: 'cyan',
    features: ['Live Streams', 'On-Demand Videos', 'Contractor Directory'],
  },
  {
    name: 'SprayFoamRadio',
    tagline: 'DJ FoamBot Productions',
    description: 'AI-generated industry-themed music across multiple genres. Hip-Hop, Country, Pop, and more!',
    url: 'https://sprayfoamradio.com',
    icon: Radio,
    color: 'pink',
    features: ['AI Music', 'Multiple Genres', 'Industry Anthems'],
  },
  {
    name: 'NerfFusion',
    tagline: "Don't Be That Guy",
    description: 'Custom 3D-printed Nerf blaster shells styled like Graco Fusion spray foam guns.',
    url: 'https://nerffusion.com',
    icon: Target,
    color: 'yellow',
    features: ['3D Printed', '$89-$99', 'Convention Foam Wars'],
  },
];

const colorClasses: Record<string, { text: string; border: string; glow: string; bg: string }> = {
  cyan: {
    text: 'text-[var(--neon-cyan)]',
    border: 'border-[var(--neon-cyan)]',
    glow: 'shadow-[0_0_20px_rgba(0,255,255,0.3)]',
    bg: 'bg-[var(--neon-cyan)]/10',
  },
  pink: {
    text: 'text-[var(--neon-pink)]',
    border: 'border-[var(--neon-pink)]',
    glow: 'shadow-[0_0_20px_rgba(255,15,187,0.3)]',
    bg: 'bg-[var(--neon-pink)]/10',
  },
  yellow: {
    text: 'text-[var(--neon-yellow)]',
    border: 'border-[var(--neon-yellow)]',
    glow: 'shadow-[0_0_20px_rgba(237,240,0,0.3)]',
    bg: 'bg-[var(--neon-yellow)]/10',
  },
};

export function IndustryHub() {
  return (
    <section className="py-20 bg-[var(--bg-black)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <ScrollReveal variant="scale" delay={0.1}>
            <span className="inline-block px-4 py-1 text-xs uppercase tracking-widest text-[var(--neon-cyan)] border border-[var(--neon-cyan)]/30 rounded-full mb-4">
              The Network
            </span>
          </ScrollReveal>

          <LetterAnimation
            text="INDUSTRY HUB"
            variant="wave"
            as="h2"
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-wider heading-cyan mb-4"
            staggerDelay={0.05}
          />

          <ScrollReveal variant="fadeUp" delay={0.3}>
            <p className="text-[var(--text-grey)] text-lg max-w-2xl mx-auto">
              Connecting the spray foam industry through media, entertainment, and community.
            </p>
          </ScrollReveal>
        </div>

        {/* Hub Cards */}
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8" staggerDelay={0.15}>
          {hubItems.map((item) => {
            const colors = colorClasses[item.color];

            return (
              <StaggerItem key={item.name}>
                <TiltCard
                  variant="default"
                  className={`h-full ${colors.border} border-2 ${colors.glow} hover:${colors.glow}`}
                  glowColor={
                    item.color === 'cyan' ? 'rgba(0,255,255,0.4)' :
                    item.color === 'pink' ? 'rgba(255,15,187,0.4)' :
                    'rgba(237,240,0,0.4)'
                  }
                >
                  <div className="p-6">
                    {/* Icon */}
                    <div className={`w-16 h-16 rounded-2xl ${colors.bg} flex items-center justify-center mb-4`}>
                      <item.icon className={`w-8 h-8 ${colors.text}`} />
                    </div>

                    {/* Title */}
                    <h3 className={`text-2xl font-bold ${colors.text} mb-1`}>
                      {item.name}
                    </h3>
                    <p className="text-white/60 text-sm italic mb-4">
                      {item.tagline}
                    </p>

                    {/* Description */}
                    <p className="text-[var(--text-grey)] text-sm mb-6">
                      {item.description}
                    </p>

                    {/* Features */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {item.features.map((feature) => (
                        <span
                          key={feature}
                          className={`text-xs px-3 py-1 rounded-full ${colors.bg} ${colors.text} border ${colors.border}/30`}
                        >
                          {feature}
                        </span>
                      ))}
                    </div>

                    {/* CTA */}
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`inline-flex items-center gap-2 text-sm font-bold ${colors.text} hover:underline`}
                    >
                      Visit Site
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </TiltCard>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
}

export default IndustryHub;
