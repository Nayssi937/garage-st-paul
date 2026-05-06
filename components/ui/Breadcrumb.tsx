import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils/cn';

type Crumb = { label: string; href?: string };

type BreadcrumbProps = {
  items: Crumb[];
  theme?: 'light' | 'dark';
  className?: string;
};

export function Breadcrumb({ items, theme = 'light', className }: BreadcrumbProps) {
  const colorMuted = theme === 'dark' ? 'text-cream-100/60' : 'text-ink-500';
  const colorActive = theme === 'dark' ? 'text-cream-100' : 'text-navy-700';
  const colorHover =
    theme === 'dark' ? 'hover:text-gold-400' : 'hover:text-gold-600';

  return (
    <nav aria-label="Fil d'Ariane" className={cn('text-eyebrow tracking-wide', className)}>
      <ol className="flex flex-wrap items-center gap-2">
        {items.map((item, idx) => {
          const isLast = idx === items.length - 1;
          return (
            <li key={idx} className="flex items-center gap-2">
              {item.href && !isLast ? (
                <Link
                  href={item.href}
                  className={cn('uppercase transition-colors', colorMuted, colorHover)}
                >
                  {item.label}
                </Link>
              ) : (
                <span className={cn('uppercase', isLast ? colorActive : colorMuted)}>
                  {item.label}
                </span>
              )}
              {!isLast && (
                <ChevronRight
                  className={cn('h-3 w-3', colorMuted)}
                  aria-hidden="true"
                />
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
