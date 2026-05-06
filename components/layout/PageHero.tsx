import Image from 'next/image';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { cn } from '@/lib/utils/cn';

type Crumb = { label: string; href?: string };

type PageHeroProps = {
  eyebrow: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  image?: string;
  imageAlt?: string;
  breadcrumbs?: Crumb[];
  align?: 'left' | 'center';
  size?: 'md' | 'lg';
};

export function PageHero({
  eyebrow,
  title,
  description,
  image,
  imageAlt,
  breadcrumbs,
  align = 'left',
  size = 'md',
}: PageHeroProps) {
  return (
    <section className="relative isolate overflow-hidden bg-ink-950 text-ink-50">
      {image && (
        <>
          <Image
            src={image}
            alt={imageAlt ?? ''}
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-ink-950/80 via-ink-950/85 to-ink-950" />
        </>
      )}
      <div className="absolute inset-0 bg-noise opacity-30" aria-hidden="true" />

      <Container
        className={cn(
          'relative pb-16 pt-32 md:pb-20 md:pt-40',
          size === 'lg' && 'pb-24 md:pb-28 md:pt-48',
        )}
      >
        {breadcrumbs && breadcrumbs.length > 0 && (
          <nav
            aria-label="Fil d'Ariane"
            className="mb-8 flex flex-wrap items-center gap-1 font-mono text-2xs uppercase tracking-widest text-ink-400"
          >
            {breadcrumbs.map((c, i) => (
              <span key={`${c.label}-${i}`} className="inline-flex items-center gap-1">
                {c.href ? (
                  <Link href={c.href} className="transition-colors hover:text-racing-500">
                    {c.label}
                  </Link>
                ) : (
                  <span className="text-racing-500">{c.label}</span>
                )}
                {i < breadcrumbs.length - 1 && (
                  <ChevronRight className="h-3 w-3 opacity-60" strokeWidth={1.5} />
                )}
              </span>
            ))}
          </nav>
        )}

        <div
          className={cn(
            'flex flex-col gap-6',
            align === 'center' && 'mx-auto items-center text-center max-w-3xl',
          )}
        >
          <span className="eyebrow">{eyebrow}</span>
          <h1
            className={cn(
              'font-display uppercase tracking-wide text-ink-50 text-balance',
              size === 'lg' ? 'text-display-2xl' : 'text-display-xl',
            )}
          >
            {title}
          </h1>
          <span className={cn('hairline-racing', align === 'center' && 'mx-auto')} />
          {description && (
            <p
              className={cn(
                'max-w-2xl text-base leading-relaxed text-ink-200 md:text-lg',
                align === 'center' && 'mx-auto',
              )}
            >
              {description}
            </p>
          )}
        </div>
      </Container>
    </section>
  );
}
