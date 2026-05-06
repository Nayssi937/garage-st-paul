import { cn } from '@/lib/utils/cn';

type SectionHeaderProps = {
  number?: string;
  eyebrow?: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  align?: 'left' | 'center';
  className?: string;
  asTag?: 'h1' | 'h2' | 'h3';
  size?: 'lg' | 'xl' | '2xl';
};

export function SectionHeader({
  number,
  eyebrow,
  title,
  description,
  align = 'left',
  className,
  asTag = 'h2',
  size = 'lg',
}: SectionHeaderProps) {
  const Tag = asTag;
  return (
    <header
      className={cn(
        'flex flex-col gap-5',
        align === 'center' && 'mx-auto items-center text-center max-w-3xl',
        className,
      )}
    >
      {(eyebrow || number) && (
        <div className="flex items-center gap-3">
          {number && <span className="font-mono text-2xs tracking-widest text-racing-500">// {number}</span>}
          {eyebrow && <span className="eyebrow">{eyebrow}</span>}
        </div>
      )}
      <Tag
        className={cn(
          'font-display uppercase tracking-wide text-balance',
          size === '2xl' ? 'text-display-2xl' : size === 'xl' ? 'text-display-xl' : 'text-display-lg',
          'text-ink-50',
          align === 'center' && 'text-balance',
        )}
      >
        {title}
      </Tag>
      <span className={cn('hairline-racing', align === 'center' && 'mx-auto')} />
      {description && (
        <p
          className={cn(
            'max-w-2xl text-base leading-relaxed text-ink-300 md:text-lg',
            align === 'center' && 'mx-auto',
          )}
        >
          {description}
        </p>
      )}
    </header>
  );
}
