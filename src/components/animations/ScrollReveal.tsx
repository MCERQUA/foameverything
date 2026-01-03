'use client';

import { ReactNode } from 'react';
import { motion, Variants } from 'motion/react';

type RevealVariant =
  | 'fadeUp'
  | 'fadeDown'
  | 'fadeLeft'
  | 'fadeRight'
  | 'scale'
  | 'rotate'
  | 'blur'
  | 'split';

interface ScrollRevealProps {
  children: ReactNode;
  variant?: RevealVariant;
  className?: string;
  delay?: number;
  duration?: number;
  once?: boolean;
}

const variants: Record<RevealVariant, Variants> = {
  fadeUp: {
    hidden: {
      opacity: 0,
      y: 80,
      filter: 'blur(10px)',
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
    },
  },
  fadeDown: {
    hidden: {
      opacity: 0,
      y: -80,
      filter: 'blur(10px)',
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
    },
  },
  fadeLeft: {
    hidden: {
      opacity: 0,
      x: -100,
    },
    visible: {
      opacity: 1,
      x: 0,
    },
  },
  fadeRight: {
    hidden: {
      opacity: 0,
      x: 100,
    },
    visible: {
      opacity: 1,
      x: 0,
    },
  },
  scale: {
    hidden: {
      opacity: 0,
      scale: 0.8,
      filter: 'blur(10px)',
    },
    visible: {
      opacity: 1,
      scale: 1,
      filter: 'blur(0px)',
    },
  },
  rotate: {
    hidden: {
      opacity: 0,
      rotateX: -30,
      y: 50,
      transformPerspective: 1000,
    },
    visible: {
      opacity: 1,
      rotateX: 0,
      y: 0,
      transformPerspective: 1000,
    },
  },
  blur: {
    hidden: {
      opacity: 0,
      filter: 'blur(30px)',
      scale: 1.1,
    },
    visible: {
      opacity: 1,
      filter: 'blur(0px)',
      scale: 1,
    },
  },
  split: {
    hidden: {
      clipPath: 'inset(50% 0 50% 0)',
      opacity: 0,
    },
    visible: {
      clipPath: 'inset(0% 0 0% 0)',
      opacity: 1,
    },
  },
};

const transitions: Record<RevealVariant, object> = {
  fadeUp: {
    type: 'spring',
    damping: 20,
    stiffness: 100,
  },
  fadeDown: {
    type: 'spring',
    damping: 20,
    stiffness: 100,
  },
  fadeLeft: {
    type: 'spring',
    damping: 25,
    stiffness: 120,
  },
  fadeRight: {
    type: 'spring',
    damping: 25,
    stiffness: 120,
  },
  scale: {
    type: 'spring',
    damping: 20,
    stiffness: 150,
  },
  rotate: {
    type: 'spring',
    damping: 20,
    stiffness: 100,
  },
  blur: {
    duration: 0.8,
    ease: [0.16, 1, 0.3, 1],
  },
  split: {
    duration: 0.8,
    ease: [0.77, 0, 0.175, 1],
  },
};

export function ScrollReveal({
  children,
  variant = 'fadeUp',
  className = '',
  delay = 0,
  duration,
  once = true,
}: ScrollRevealProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin: '-100px' }}
      variants={variants[variant]}
      transition={{
        ...transitions[variant],
        delay,
        ...(duration ? { duration } : {}),
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// Stagger container for multiple children
interface StaggerContainerProps {
  children: ReactNode;
  className?: string;
  staggerDelay?: number;
  once?: boolean;
}

export function StaggerContainer({
  children,
  className = '',
  staggerDelay = 0.1,
  once = true,
}: StaggerContainerProps) {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: staggerDelay,
      },
    },
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin: '-50px' }}
      variants={containerVariants}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// Stagger item for use inside StaggerContainer
interface StaggerItemProps {
  children: ReactNode;
  className?: string;
}

export function StaggerItem({ children, className = '' }: StaggerItemProps) {
  const itemVariants: Variants = {
    hidden: {
      opacity: 0,
      y: 30,
      filter: 'blur(5px)',
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: {
        type: 'spring',
        damping: 20,
        stiffness: 100,
      },
    },
  };

  return (
    <motion.div variants={itemVariants} className={className}>
      {children}
    </motion.div>
  );
}

export default ScrollReveal;
