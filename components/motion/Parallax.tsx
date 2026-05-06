'use client';

import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion';
import { useRef, type ReactNode } from 'react';
import { cn } from '@/lib/utils/cn';

type ParallaxProps = {
  children: ReactNode;
  amount?: number;
  className?: string;
};

export function Parallax({ children, amount = 60, className }: ParallaxProps) {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], reduced ? [0, 0] : [-amount, amount]);

  return (
    <div ref={ref} className={cn('overflow-hidden', className)}>
      <motion.div style={{ y }} className="h-full w-full">
        {children}
      </motion.div>
    </div>
  );
}
