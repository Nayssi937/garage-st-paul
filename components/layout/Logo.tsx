import Link from 'next/link';
import { cn } from '@/lib/utils/cn';

export function Logo({
  href = '/',
  variant = 'light',
  size = 'md',
  className,
}: {
  href?: string;
  variant?: 'light' | 'dark';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}) {
  const isDark = variant === 'dark';
  const sizes = {
    sm: { name: 'text-base', tag: 'text-[7px]', italic: 'text-[8px]', pad: 'px-4 py-1.5' },
    md: { name: 'text-lg', tag: 'text-[8px]', italic: 'text-[9px]', pad: 'px-5 py-2' },
    lg: { name: 'text-2xl', tag: 'text-[10px]', italic: 'text-[11px]', pad: 'px-6 py-2.5' },
  };
  const s = sizes[size];

  return (
    <Link
      href={href}
      aria-label="Garage St-Paul, retour à l'accueil"
      className={cn(
        'group inline-flex flex-col items-center justify-center border transition-colors',
        s.pad,
        isDark
          ? 'border-gold-400/60 hover:border-gold-400'
          : 'border-gold-500/50 hover:border-gold-600',
        className,
      )}
      style={{ borderRadius: '50% / 38%' }}
    >
      <span
        className={cn(
          'font-serif italic font-normal leading-none opacity-90',
          s.italic,
          isDark ? 'text-cream-100' : 'text-navy-700',
        )}
      >
        Garage
      </span>
      <span
        className={cn(
          'font-serif font-medium leading-[1.05] tracking-wide',
          s.name,
          isDark ? 'text-cream-50' : 'text-navy-700',
        )}
      >
        ST-PAUL
      </span>
      <span
        className={cn(
          'mt-0.5 font-sans uppercase tracking-[0.3em] opacity-80',
          s.tag,
          isDark ? 'text-gold-400' : 'text-gold-600',
        )}
      >
        Depuis 1962
      </span>
    </Link>
  );
}
