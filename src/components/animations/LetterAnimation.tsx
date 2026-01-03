'use client';

import { motion, Variants } from 'motion/react';
import { useMemo } from 'react';

type AnimationVariant =
  | 'cascade'
  | 'chaos'
  | 'flip'
  | 'glitch'
  | 'wave'
  | 'zoom'
  | 'typewriter'
  | 'neon';

interface LetterAnimationProps {
  text: string;
  variant?: AnimationVariant;
  className?: string;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'span';
  delay?: number;
  staggerDelay?: number;
}

// Deterministic pseudo-random based on index to avoid hydration mismatch
const seededRandom = (seed: number, min: number, max: number) => {
  const x = Math.sin(seed * 9999) * 10000;
  return min + (x - Math.floor(x)) * (max - min);
};

const getVariants = (variant: AnimationVariant, index: number): Variants => {
  const variants: Record<AnimationVariant, Variants> = {
    // Letters fall from above with stagger
    cascade: {
      hidden: {
        y: -100,
        opacity: 0,
        rotateZ: seededRandom(index + 1, -15, 15),
        filter: 'blur(10px)'
      },
      visible: {
        y: 0,
        opacity: 1,
        rotateZ: 0,
        filter: 'blur(0px)'
      },
    },
    // Letters start scattered, assemble into position
    chaos: {
      hidden: {
        x: seededRandom(index * 3, -200, 200),
        y: seededRandom(index * 5, -200, 200),
        rotate: seededRandom(index * 7, 0, 360),
        scale: 0,
        opacity: 0,
      },
      visible: {
        x: 0,
        y: 0,
        rotate: 0,
        scale: 1,
        opacity: 1,
      },
    },
    // Letters flip in 3D
    flip: {
      hidden: {
        rotateY: -90,
        opacity: 0,
        transformPerspective: 1000,
      },
      visible: {
        rotateY: 0,
        opacity: 1,
        transformPerspective: 1000,
      },
    },
    // Digital glitch effect
    glitch: {
      hidden: {
        opacity: 0,
        x: 0,
        textShadow: '0 0 0 transparent',
      },
      visible: {
        opacity: 1,
        x: [0, -3, 3, -2, 2, 0],
        textShadow: [
          '0 0 0 transparent',
          '-3px 0 #ff0040, 3px 0 #00ffff',
          '3px 0 #ff0040, -3px 0 #00ffff',
          '-2px 0 #ff0040, 2px 0 #00ffff',
          '0 0 0 transparent',
        ],
      },
    },
    // Wave motion
    wave: {
      hidden: {
        y: 50,
        opacity: 0,
        scaleY: 0.5,
      },
      visible: {
        y: 0,
        opacity: 1,
        scaleY: 1,
      },
    },
    // Zoom from infinity
    zoom: {
      hidden: {
        scale: 3,
        opacity: 0,
        filter: 'blur(20px)',
      },
      visible: {
        scale: 1,
        opacity: 1,
        filter: 'blur(0px)',
      },
    },
    // Typewriter effect
    typewriter: {
      hidden: {
        opacity: 0,
        width: 0,
      },
      visible: {
        opacity: 1,
        width: 'auto',
      },
    },
    // Neon flicker
    neon: {
      hidden: {
        opacity: 0,
        textShadow: '0 0 0 transparent',
      },
      visible: {
        opacity: [0, 1, 0.7, 1, 0.9, 1],
        textShadow: [
          '0 0 0 transparent',
          '0 0 10px currentColor, 0 0 20px currentColor',
          '0 0 5px currentColor',
          '0 0 20px currentColor, 0 0 40px currentColor',
          '0 0 10px currentColor',
          '0 0 15px currentColor, 0 0 30px currentColor',
        ],
      },
    },
  };

  return variants[variant];
};

const getTransition = (variant: AnimationVariant, index: number, staggerDelay: number) => {
  const baseTransitions: Record<AnimationVariant, object> = {
    cascade: {
      delay: index * staggerDelay,
      type: 'spring',
      damping: 15,
      stiffness: 300,
    },
    chaos: {
      delay: index * staggerDelay,
      type: 'spring',
      damping: 20,
      stiffness: 150,
    },
    flip: {
      delay: index * staggerDelay,
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1],
    },
    glitch: {
      delay: index * staggerDelay,
      duration: 0.4,
      times: [0, 0.2, 0.4, 0.6, 0.8, 1],
    },
    wave: {
      delay: index * staggerDelay,
      type: 'spring',
      damping: 12,
      stiffness: 200,
    },
    zoom: {
      delay: index * staggerDelay,
      duration: 0.5,
      ease: [0.16, 1, 0.3, 1],
    },
    typewriter: {
      delay: index * staggerDelay,
      duration: 0.1,
      ease: 'linear',
    },
    neon: {
      delay: index * staggerDelay,
      duration: 0.6,
      times: [0, 0.2, 0.4, 0.6, 0.8, 1],
    },
  };

  return baseTransitions[variant];
};

export function LetterAnimation({
  text,
  variant = 'cascade',
  className = '',
  as: Component = 'h2',
  delay = 0,
  staggerDelay = 0.04,
}: LetterAnimationProps) {
  const letters = useMemo(() => text.split(''), [text]);

  return (
    <Component
      className={`overflow-visible ${className}`}
      style={{ perspective: variant === 'flip' ? '1000px' : undefined }}
    >
      {letters.map((letter, i) => (
        <motion.span
          key={`${letter}-${i}`}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          variants={getVariants(variant, i)}
          transition={{
            ...getTransition(variant, i, staggerDelay),
            delay: delay + i * staggerDelay,
          }}
          style={{
            display: 'inline-block',
            transformStyle: 'preserve-3d',
            whiteSpace: 'pre',
          }}
        >
          {letter === ' ' ? '\u00A0' : letter}
        </motion.span>
      ))}
    </Component>
  );
}

export default LetterAnimation;
