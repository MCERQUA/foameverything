'use client';

import { useState, useEffect } from 'react';
import { motion } from 'motion/react';

interface CountdownTimerProps {
  targetDate: Date;
  className?: string;
  variant?: 'default' | 'large' | 'compact';
  label?: string;
}

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

function calculateTimeLeft(targetDate: Date): TimeLeft {
  const difference = targetDate.getTime() - new Date().getTime();

  if (difference <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  }

  return {
    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((difference / 1000 / 60) % 60),
    seconds: Math.floor((difference / 1000) % 60),
  };
}

function TimeUnit({
  value,
  label,
  variant,
}: {
  value: number;
  label: string;
  variant: 'default' | 'large' | 'compact';
}) {
  const sizeClasses = {
    default: 'w-16 h-16 text-2xl',
    large: 'w-24 h-24 text-4xl',
    compact: 'w-12 h-12 text-lg',
  };

  const labelSizes = {
    default: 'text-xs',
    large: 'text-sm',
    compact: 'text-[10px]',
  };

  return (
    <div className="flex flex-col items-center">
      <motion.div
        key={value}
        initial={{ rotateX: -90, opacity: 0 }}
        animate={{ rotateX: 0, opacity: 1 }}
        transition={{ type: 'spring', damping: 15, stiffness: 300 }}
        className={`${sizeClasses[variant]} flex items-center justify-center bg-[var(--bg-charcoal)] rounded-lg border border-[var(--neon-red)] shadow-[0_0_15px_rgba(255,0,64,0.3)]`}
        style={{ transformPerspective: 1000 }}
      >
        <span className="font-bold text-[var(--neon-red)] tabular-nums">
          {String(value).padStart(2, '0')}
        </span>
      </motion.div>
      <span className={`${labelSizes[variant]} uppercase text-[var(--text-grey)] mt-2 tracking-wider`}>
        {label}
      </span>
    </div>
  );
}

export function CountdownTimer({
  targetDate,
  className = '',
  variant = 'default',
  label,
}: CountdownTimerProps) {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(() => calculateTimeLeft(targetDate));
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft(targetDate));
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  // Prevent hydration mismatch
  if (!mounted) {
    return (
      <div className={`flex flex-col items-center ${className}`}>
        {label && (
          <p className="text-[var(--text-grey)] text-sm mb-4 uppercase tracking-widest">{label}</p>
        )}
        <div className="flex gap-3">
          <TimeUnit value={0} label="Days" variant={variant} />
          <span className="text-[var(--neon-red)] text-2xl self-center">:</span>
          <TimeUnit value={0} label="Hours" variant={variant} />
          <span className="text-[var(--neon-red)] text-2xl self-center">:</span>
          <TimeUnit value={0} label="Mins" variant={variant} />
          <span className="text-[var(--neon-red)] text-2xl self-center">:</span>
          <TimeUnit value={0} label="Secs" variant={variant} />
        </div>
      </div>
    );
  }

  const isExpired = timeLeft.days === 0 && timeLeft.hours === 0 && timeLeft.minutes === 0 && timeLeft.seconds === 0;

  if (isExpired) {
    return (
      <div className={`text-center ${className}`}>
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="text-2xl font-bold text-[var(--neon-cyan)] animate-glow-cyan"
        >
          EVENT IS LIVE!
        </motion.div>
      </div>
    );
  }

  return (
    <div className={`flex flex-col items-center ${className}`}>
      {label && (
        <p className="text-[var(--text-grey)] text-sm mb-4 uppercase tracking-widest">{label}</p>
      )}
      <div className="flex gap-3">
        <TimeUnit value={timeLeft.days} label="Days" variant={variant} />
        <span className="text-[var(--neon-red)] text-2xl self-center animate-pulse">:</span>
        <TimeUnit value={timeLeft.hours} label="Hours" variant={variant} />
        <span className="text-[var(--neon-red)] text-2xl self-center animate-pulse">:</span>
        <TimeUnit value={timeLeft.minutes} label="Mins" variant={variant} />
        <span className="text-[var(--neon-red)] text-2xl self-center animate-pulse">:</span>
        <TimeUnit value={timeLeft.seconds} label="Secs" variant={variant} />
      </div>
    </div>
  );
}

export default CountdownTimer;
