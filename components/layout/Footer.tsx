import Link from 'next/link';
import { Logo } from './Logo';
import { Container } from '@/components/ui/Container';
import { footerSecondary, mainNav } from '@/lib/data/navigation';
import { SITE_CONFIG } from '@/lib/seo';

const FacebookIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
  </svg>
);

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="on-dark relative bg-navy-700 text-cream-100">
      <Container className="py-12 md:py-16">
        <div className="flex flex-col items-center gap-10 md:flex-row md:items-center md:justify-between">
          <Logo variant="dark" size="sm" />

          <nav aria-label="Navigation pied de page">
            <ul className="flex flex-wrap items-center justify-center gap-x-1 gap-y-2 text-cream-100/80">
              {mainNav.map((item, idx) => (
                <li key={item.href} className="flex items-center">
                  <Link
                    href={item.href}
                    className="px-3 font-sans text-[11px] font-medium uppercase tracking-[0.18em] transition-colors hover:text-gold-400"
                  >
                    {item.label}
                  </Link>
                  {idx < mainNav.length - 1 && (
                    <span aria-hidden="true" className="text-cream-100/20">
                      |
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </nav>

          <a
            href={SITE_CONFIG.social.facebook}
            target="_blank"
            rel="noreferrer noopener"
            aria-label="Facebook"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-cream-100/25 transition-all hover:border-gold-400 hover:text-gold-400"
          >
            <FacebookIcon className="h-4 w-4" />
          </a>
        </div>
      </Container>

      <div className="border-t border-cream-100/10">
        <Container className="flex flex-col items-center justify-between gap-3 py-5 text-xs text-cream-100/55 md:flex-row">
          <p>
            © {year} {SITE_CONFIG.fullName}. Tous droits réservés.
          </p>
          <ul className="flex flex-wrap items-center gap-x-1 gap-y-2">
            {footerSecondary.map((item, idx) => (
              <li key={item.href} className="flex items-center">
                <Link
                  href={item.href}
                  className="px-2 transition-colors hover:text-gold-400"
                >
                  {item.label}
                </Link>
                {idx < footerSecondary.length - 1 && (
                  <span aria-hidden="true" className="text-cream-100/20">
                    ·
                  </span>
                )}
              </li>
            ))}
          </ul>
        </Container>
      </div>
    </footer>
  );
}
