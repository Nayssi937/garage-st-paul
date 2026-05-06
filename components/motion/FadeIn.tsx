'use client';

import { motion, type Variants } from 'framer-motion';
import { cn } from '@/lib/utils/cn';

const variants: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0 },
};

export function FadeIn({
  children,
  delay = 0,
  className,
  as = 'div',
  amount = 0.2,
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  as?: 'div' | 'span' | 'section' | 'article' | 'li' | 'header';
  amount?: number;
}) {
  const MotionTag = motion[as];
  return (
    <MotionTag
      className={cn(className)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount }}
      transition={{
        duration: 0.8,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      variants={variants}
    >
      {children}
    </MotionTag>
  );
}
