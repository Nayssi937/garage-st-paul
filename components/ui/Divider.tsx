import { cn } from '@/lib/utils/cn';

type DividerProps = {
  tone?: 'gold' | 'gold-dark' | 'navy' | 'cream';
  className?: string;
};

const tones = {
  gold: 'bg-gold-400/40',
  'gold-dark': 'bg-gold-500/40',
  navy: 'bg-navy-700/10',
  cream: 'bg-cream-100/20',
};

export function Divider({ tone = 'gold', className }: DividerProps) {
  return (
    <span
      role="separator"
      aria-orientation="horizontal"
      className={cn('block h-px w-full', tones[tone], className)}
    />
  );
}
