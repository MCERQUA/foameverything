'use client';

import { useRef, useState, ReactNode, MouseEvent } from 'react';
import { motion, useSpring, useTransform } from 'motion/react';

interface TiltCardProps {
  children: ReactNode;
  className?: string;
  variant?: 'default' | 'glow' | 'featured';
  tiltStrength?: number;
  glowColor?: string;
  onClick?: () => void;
}

const variantClasses: Record<string, string> = {
  default: 'product-card',
  glow: 'product-card-glow',
  featured: 'product-card-featured',
};

export function TiltCard({
  children,
  className = '',
  variant = 'default',
  tiltStrength = 15,
  glowColor,
  onClick,
}: TiltCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [glowPosition, setGlowPosition] = useState({ x: 50, y: 50 });

  const springConfig = { damping: 20, stiffness: 200 };
  const rotateX = useSpring(0, springConfig);
  const rotateY = useSpring(0, springConfig);
  const scale = useSpring(1, springConfig);

  const handleMouseMove = (e: MouseEvent) => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const percentX = (e.clientX - rect.left) / rect.width;
    const percentY = (e.clientY - rect.top) / rect.height;

    const tiltX = (percentY - 0.5) * tiltStrength * -1;
    const tiltY = (percentX - 0.5) * tiltStrength;

    rotateX.set(tiltX);
    rotateY.set(tiltY);

    setGlowPosition({
      x: percentX * 100,
      y: percentY * 100,
    });
  };

  const handleMouseLeave = () => {
    rotateX.set(0);
    rotateY.set(0);
    scale.set(1);
    setIsHovered(false);
  };

  const handleMouseEnter = () => {
    scale.set(1.02);
    setIsHovered(true);
  };

  const baseStyles = variantClasses[variant] || variantClasses.default;

  // Determine glow color based on variant
  const defaultGlowColors: Record<string, string> = {
    default: 'rgba(0, 255, 255, 0.4)',
    glow: 'rgba(0, 255, 255, 0.6)',
    featured: 'rgba(255, 0, 64, 0.6)',
  };

  const activeGlowColor = glowColor || defaultGlowColors[variant];

  return (
    <motion.div
      ref={ref}
      style={{
        rotateX,
        rotateY,
        scale,
        transformStyle: 'preserve-3d',
        transformPerspective: 1000,
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={handleMouseEnter}
      onClick={onClick}
      className={`${baseStyles} ${className} relative cursor-pointer`}
    >
      {/* Cursor-following glow */}
      {isHovered && (
        <div
          className="absolute inset-0 pointer-events-none rounded-[inherit] overflow-hidden"
          style={{
            background: `radial-gradient(
              circle at ${glowPosition.x}% ${glowPosition.y}%,
              ${activeGlowColor} 0%,
              transparent 50%
            )`,
          }}
        />
      )}

      {/* Content with slight z-transform for depth */}
      <div
        className="relative z-10"
        style={{
          transform: 'translateZ(20px)',
          transformStyle: 'preserve-3d',
        }}
      >
        {children}
      </div>

      {/* Subtle shadow layer */}
      <motion.div
        className="absolute inset-0 -z-10 rounded-[inherit]"
        style={{
          boxShadow: isHovered
            ? `0 25px 50px -12px rgba(0, 0, 0, 0.5), 0 0 30px ${activeGlowColor}`
            : '0 10px 20px -5px rgba(0, 0, 0, 0.3)',
          transition: 'box-shadow 0.3s ease',
        }}
      />
    </motion.div>
  );
}

export default TiltCard;
