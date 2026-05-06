import { cn } from '@/lib/utils/cn';

type TagProps = {
  children: React.ReactNode;
  variant?: 'racing' | 'neutral' | 'outline' | 'outline-light';
  size?: 'sm' | 'md';
  className?: string;
};

const variants = {
  racing: 'bg-racing-500 text-white border border-racing-500',
  neutral: 'bg-ink-800 text-ink-100 border border-ink-700',
  outline: 'border border-ink-700 text-ink-200',
  'outline-light': 'border border-ink-50/30 text-ink-50',
};

const sizes = {
  sm: 'px-2 py-0.5 text-[10px]',
  md: 'px-2.5 py-1 text-2xs',
};

export function Tag({ children, variant = 'neutral', size = 'md', className }: TagProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 rounded-sm font-mono uppercase tracking-widest',
        variants[variant],
        sizes[size],
        className,
      )}
    >
      {children}
    </span>
  );
}
