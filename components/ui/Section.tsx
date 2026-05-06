import { cn } from '@/lib/utils/cn';

type SectionProps = {
  children: React.ReactNode;
  id?: string;
  className?: string;
  bordered?: boolean;
  bg?: 'default' | 'raised' | 'darker';
  tight?: boolean;
};

export function Section({
  children,
  id,
  className,
  bordered = false,
  bg = 'default',
  tight = false,
}: SectionProps) {
  const bgs = {
    default: 'bg-ink-950',
    raised: 'bg-ink-900',
    darker: 'bg-black',
  };

  return (
    <section
      id={id}
      className={cn(
        'relative',
        tight ? 'section-padding-tight' : 'section-padding',
        bgs[bg],
        bordered && 'border-b border-ink-700',
        className,
      )}
    >
      {children}
    </section>
  );
}
