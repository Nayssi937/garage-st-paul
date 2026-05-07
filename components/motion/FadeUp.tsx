'use client';

import { motion, useReducedMotion } from 'framer-motion';
import type { ReactNode } from 'react';

type FadeUpProps = {
  delay?: number;
  duration?: number;
  y?: number;
  once?: boolean;
  amount?: number;
  children: ReactNode;
  className?: string;
  as?: 'div' | 'section' | 'article' | 'li' | 'span' | 'header' | 'aside';
};

export function FadeUp({
  delay = 0,
  duration = 0.7,
  y = 24,
  once = true,
  amount = 0.2,
  children,
  className,
  as = 'div',
}: FadeUpProps) {
  const reduced = useReducedMotion();
  const Tag = motion[as] as typeof motion.div;

  return (
    <Tag
      className={className}
      initial={reduced ? { opacity: 0 } : { opacity: 0, y }}
      whileInView={reduced ? { opacity: 1 } : { opacity: 1, y: 0 }}
      viewport={{ once, amount }}
      transition={{
        duration: reduced ? 0.3 : duration,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </Tag>
  );
}
