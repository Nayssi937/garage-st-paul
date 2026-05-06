import type { HTMLAttributes, ReactNode } from 'react';
import { cn } from '@/lib/utils/cn';

type EyebrowProps = HTMLAttributes<HTMLSpanElement> & {
  tone?: 'gold' | 'gold-dark' | 'cream';
  children: ReactNode;
};

const tones = {
  gold: 'text-gold-400',
  'gold-dark': 'text-gold-600',
  cream: 'text-cream-200/70',
};

export function Eyebrow({ tone = 'gold-dark', className, children, ...props }: EyebrowProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-3 text-eyebrow font-medium uppercase tracking-eyebrow',
        tones[tone],
        className,
      )}
      {...props}
    >
      <span className="block h-px w-8 bg-current opacity-60" aria-hidden="true" />
      {children}
    </span>
  );
}

export function EyebrowSimple({
  tone = 'gold-dark',
  className,
  children,
  ...props
}: EyebrowProps) {
  return (
    <span
      className={cn(
        'inline-block text-eyebrow font-medium uppercase tracking-eyebrow',
        tones[tone],
        className,
      )}
      {...props}
    >
      {children}
    </span>
  );
}
