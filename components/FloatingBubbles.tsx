'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface Bubble {
  id: number;
  left: number;
  size: number;
  duration: number;
  delay: number;
  opacity: number;
}

interface FloatingBubblesProps {
  count?: number;
  className?: string;
}

export function FloatingBubbles({ count = 12, className = '' }: FloatingBubblesProps) {
  const [bubbles, setBubbles] = useState<Bubble[]>([]);

  useEffect(() => {
    setBubbles(
      Array.from({ length: count }).map((_, i) => ({
        id: i,
        left: Math.random() * 100,
        size: 8 + Math.random() * 28,
        duration: 6 + Math.random() * 10,
        delay: Math.random() * 5,
        opacity: 0.25 + Math.random() * 0.4,
      }))
    );
  }, [count]);

  if (bubbles.length === 0) return null;

  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
    >
      {bubbles.map((b) => (
        <motion.span
          key={b.id}
          initial={{ y: '110%', opacity: 0 }}
          animate={{ y: '-20%', opacity: [0, b.opacity, b.opacity, 0] }}
          transition={{
            duration: b.duration,
            delay: b.delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          style={{
            left: `${b.left}%`,
            width: `${b.size}px`,
            height: `${b.size}px`,
          }}
          className="absolute bottom-0 rounded-full bg-gradient-to-br from-cyan-200 to-sky-300 ring-1 ring-white/40 shadow-md shadow-cyan-200/30"
        />
      ))}
    </div>
  );
}
