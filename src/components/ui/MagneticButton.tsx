'use client';

import { useRef, useState, ReactNode, MouseEvent } from 'react';
import { motion, useSpring, useTransform } from 'motion/react';

interface MagneticButtonProps {
  children: ReactNode;
  className?: string;
  variant?: 'primary' | 'red' | 'gold' | 'nascar' | 'preorder' | 'onlyfoam';
  magneticStrength?: number;
  onClick?: () => void;
  href?: string;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
}

const variantClasses: Record<string, string> = {
  primary: 'btn-primary',
  red: 'btn-red',
  gold: 'btn-gold',
  nascar: 'btn-nascar',
  preorder: 'btn-preorder',
  onlyfoam: 'bg-[rgba(255,15,187,0.3)] text-white border-2 border-[var(--neon-pink)] rounded-lg px-7 py-3 shadow-[0_0_15px_rgba(255,15,187,0.4)] hover:bg-[var(--neon-pink)] hover:shadow-[0_0_30px_var(--neon-pink)]',
};

export function MagneticButton({
  children,
  className = '',
  variant = 'primary',
  magneticStrength = 0.3,
  onClick,
  href,
  type = 'button',
  disabled = false,
}: MagneticButtonProps) {
  const ref = useRef<HTMLButtonElement | HTMLAnchorElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const springConfig = { damping: 15, stiffness: 300, mass: 0.1 };
  const x = useSpring(0, springConfig);
  const y = useSpring(0, springConfig);

  const rotateX = useTransform(y, [-20, 20], [5, -5]);
  const rotateY = useTransform(x, [-20, 20], [-5, 5]);

  const handleMouseMove = (e: MouseEvent) => {
    if (!ref.current || disabled) return;

    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const deltaX = (e.clientX - centerX) * magneticStrength;
    const deltaY = (e.clientY - centerY) * magneticStrength;

    x.set(deltaX);
    y.set(deltaY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
    setIsHovered(false);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const baseStyles = variantClasses[variant] || variantClasses.primary;
  const combinedClassName = `${baseStyles} ${className} relative overflow-hidden transition-all duration-300 ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`;

  const motionProps = {
    ref: ref as any,
    style: {
      x,
      y,
      rotateX,
      rotateY,
      transformPerspective: 1000,
    },
    onMouseMove: handleMouseMove,
    onMouseLeave: handleMouseLeave,
    onMouseEnter: handleMouseEnter,
    whileTap: disabled ? undefined : { scale: 0.95 },
    className: combinedClassName,
  };

  if (href && !disabled) {
    return (
      <motion.a
        {...motionProps}
        href={href}
        target={href.startsWith('http') ? '_blank' : undefined}
        rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
      >
        <span className="relative z-10">{children}</span>
        {isHovered && (
          <motion.span
            className="absolute inset-0 bg-white/10 pointer-events-none"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1.5, opacity: 0 }}
            transition={{ duration: 0.6 }}
          />
        )}
      </motion.a>
    );
  }

  return (
    <motion.button
      {...motionProps}
      type={type}
      onClick={onClick}
      disabled={disabled}
    >
      <span className="relative z-10">{children}</span>
      {isHovered && (
        <motion.span
          className="absolute inset-0 bg-white/10 pointer-events-none"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1.5, opacity: 0 }}
          transition={{ duration: 0.6 }}
        />
      )}
    </motion.button>
  );
}

export default MagneticButton;
