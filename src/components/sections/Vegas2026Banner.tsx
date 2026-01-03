'use client';

import Image from 'next/image';
import { motion } from 'motion/react';
import { LetterAnimation } from '@/components/animations/LetterAnimation';
import { MagneticButton } from '@/components/ui/MagneticButton';
import { CountdownTimer } from '@/components/ui/CountdownTimer';
import { ScrollReveal } from '@/components/animations/ScrollReveal';
import { MapPin, Calendar, Users, Award } from 'lucide-react';

// Vegas 2026 event date: March 22, 2026
const VEGAS_2026_DATE = new Date('2026-03-22T00:00:00');

const highlights = [
  {
    icon: Calendar,
    title: 'March 22-25, 2026',
    subtitle: '4 Days of Industry Excellence',
  },
  {
    icon: MapPin,
    title: 'Westgate Las Vegas',
    subtitle: 'Resort & Casino',
  },
  {
    icon: Users,
    title: 'Booths SOLD OUT',
    subtitle: 'Register Now for Attendance',
  },
  {
    icon: Award,
    title: 'National Awards',
    subtitle: 'Industry Excellence Recognition',
  },
];

export function Vegas2026Banner() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden section-vegas">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/las-vegas.webp"
          alt="Las Vegas"
          fill
          className="object-cover opacity-30"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[var(--purple-dark)]/80 to-[var(--bg-black)]" />
      </div>

      {/* Animated Grid Lines */}
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,var(--neon-red)_1px,transparent_1px),linear-gradient(to_bottom,var(--neon-red)_1px,transparent_1px)] bg-[size:100px_100px]" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          {/* Badge */}
          <ScrollReveal variant="scale" delay={0.1}>
            <span className="badge-preorder mb-6">
              SprayFoam Convention & Expo
            </span>
          </ScrollReveal>

          {/* Main Heading with Letter Animation */}
          <div className="mb-6">
            <LetterAnimation
              text="VEGAS 2026"
              variant="neon"
              as="h1"
              className="text-5xl md:text-7xl lg:text-8xl font-black uppercase tracking-wider heading-red"
              staggerDelay={0.06}
            />
          </div>

          {/* Subheading */}
          <ScrollReveal variant="fadeUp" delay={0.3}>
            <p className="text-xl md:text-2xl text-white/80 max-w-2xl mx-auto mb-8">
              The <span className="text-[var(--neon-cyan)] font-bold">#1 Event</span> for Spray Foam Professionals
            </p>
          </ScrollReveal>

          {/* Countdown Timer */}
          <ScrollReveal variant="scale" delay={0.4}>
            <div className="mb-12">
              <CountdownTimer
                targetDate={VEGAS_2026_DATE}
                variant="large"
                label="Countdown to Vegas"
              />
            </div>
          </ScrollReveal>

          {/* CTA Buttons */}
          <ScrollReveal variant="fadeUp" delay={0.5}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
              <MagneticButton
                href="https://sprayfoamshow.org/"
                variant="red"
                className="text-lg px-8 py-4"
              >
                Register Now
              </MagneticButton>
              <MagneticButton
                href="/shop/vegas-2026"
                variant="primary"
                className="text-lg px-8 py-4"
              >
                Pre-Order Merch
              </MagneticButton>
            </div>
          </ScrollReveal>

          {/* Highlights Grid */}
          <ScrollReveal variant="fadeUp" delay={0.6}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
              {highlights.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 + index * 0.1 }}
                  viewport={{ once: true }}
                  className="p-4 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm hover:border-[var(--neon-red)]/50 transition-colors"
                >
                  <item.icon className="w-6 h-6 text-[var(--neon-red)] mx-auto mb-2" />
                  <h3 className="text-white font-bold text-sm">{item.title}</h3>
                  <p className="text-[var(--text-grey)] text-xs">{item.subtitle}</p>
                </motion.div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 rounded-full border-2 border-white/30 flex items-start justify-center p-2"
        >
          <motion.div
            animate={{ opacity: [1, 0.3, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1.5 h-1.5 bg-white rounded-full"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}

export default Vegas2026Banner;
