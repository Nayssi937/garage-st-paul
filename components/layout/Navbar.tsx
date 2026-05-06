'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Phone } from 'lucide-react';
import { Logo } from './Logo';
import { MobileMenu } from './MobileMenu';
import { mainNav } from '@/lib/data/navigation';
import { SITE_CONFIG } from '@/lib/seo';
import { cn } from '@/lib/utils/cn';

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const isHome = pathname === '/';

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // On home, header is transparent over the dark hero. After scroll, switch to cream.
  // On other pages, always cream.
  const transparent = isHome && !scrolled;

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-40 transition-all duration-300 ease-out-quart',
        transparent
          ? 'bg-transparent'
          : 'border-b border-navy-700/10 bg-cream-200/95 backdrop-blur-md',
      )}
    >
      <div
        className={cn(
          'mx-auto flex w-full max-w-[1280px] items-center justify-between px-5 transition-all duration-300 ease-out-quart sm:px-6 lg:px-8 xl:px-10',
          scrolled ? 'h-16 md:h-20' : 'h-20 md:h-24',
        )}
      >
        <Logo href="/" variant={transparent ? 'dark' : 'light'} size="sm" />

        <nav aria-label="Navigation principale" className="hidden lg:block">
          <ul className="flex items-center gap-8">
            {mainNav.map((item) => {
              const active =
                item.href === '/' ? pathname === '/' : pathname?.startsWith(item.href);
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    data-active={active || undefined}
                    className={cn(
                      'relative inline-flex items-center font-sans text-[12px] uppercase tracking-wide transition-colors',
                      transparent
                        ? 'text-cream-100/85 hover:text-cream-50'
                        : 'text-navy-700 hover:text-navy-700',
                      'after:absolute after:left-0 after:-bottom-1.5 after:h-px after:w-full after:origin-left after:scale-x-0 after:bg-gold-500 after:transition-transform after:duration-300 hover:after:scale-x-100',
                      'data-[active]:after:scale-x-100',
                      transparent && 'after:bg-gold-400',
                    )}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={`tel:${SITE_CONFIG.phone}`}
            className={cn(
              'hidden items-center gap-2 rounded-none border px-4 py-2.5 font-sans text-[11px] uppercase tracking-wide transition-all md:inline-flex',
              transparent
                ? 'border-gold-400/60 text-cream-50 hover:border-gold-400 hover:bg-gold-400 hover:text-navy-700'
                : 'border-navy-700/30 text-navy-700 hover:border-gold-500 hover:bg-gold-400',
            )}
          >
            <Phone className="h-3.5 w-3.5" strokeWidth={1.75} />
            {SITE_CONFIG.phoneDisplay}
          </a>
          <MobileMenu />
        </div>
      </div>
    </header>
  );
}
