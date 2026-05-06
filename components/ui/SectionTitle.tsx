import type { ReactNode } from 'react';
import { cn } from '@/lib/utils/cn';
import { EyebrowSimple } from './Eyebrow';

type SectionTitleProps = {
  eyebrow?: string;
  title: ReactNode;
  intro?: ReactNode;
  align?: 'left' | 'center';
  theme?: 'light' | 'dark';
  size?: 'md' | 'lg' | 'xl';
  as?: 'h1' | 'h2' | 'h3';
  className?: string;
};

export function SectionTitle({
  eyebrow,
  title,
  intro,
  align = 'left',
  theme = 'light',
  size = 'lg',
  as: Tag = 'h2',
  className,
}: SectionTitleProps) {
  const titleSizes = {
    md: 'text-display-md',
    lg: 'text-display-lg',
    xl: 'text-display-xl',
  };

  const colorTitle = theme === 'dark' ? 'text-cream-100' : 'text-navy-700';
  const colorIntro = theme === 'dark' ? 'text-cream-100/70' : 'text-ink-500';
  const eyebrowTone = theme === 'dark' ? 'gold' : 'gold-dark';

  return (
    <div
      className={cn(
        'flex flex-col gap-5',
        align === 'center' ? 'items-center text-center' : 'items-start',
        className,
      )}
    >
      {eyebrow ? <EyebrowSimple tone={eyebrowTone}>{eyebrow}</EyebrowSimple> : null}
      <Tag
        className={cn('font-serif font-normal text-balance', titleSizes[size], colorTitle)}
      >
        {title}
      </Tag>
      {intro ? (
        <p className={cn('max-w-2xl text-base leading-relaxed', colorIntro)}>{intro}</p>
      ) : null}
    </div>
  );
}
