'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { AnimatePresence, motion } from 'framer-motion';
import { Menu, X, Phone, Mail, MapPin } from 'lucide-react';
import { mainNav, footerSecondary } from '@/lib/data/navigation';
import { SITE_CONFIG } from '@/lib/seo';
import { cn } from '@/lib/utils/cn';

export function MobileMenu() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (open) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label="Ouvrir le menu"
        className="inline-flex h-10 w-10 items-center justify-center border border-ink-700 text-ink-50 transition-colors hover:border-racing-500 hover:text-racing-500 lg:hidden"
      >
        <Menu className="h-4 w-4" strokeWidth={1.75} />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-50 flex flex-col bg-ink-950 text-ink-50 lg:hidden"
          >
            <div className="container-edge flex h-20 items-center justify-between border-b border-ink-700">
              <span className="font-display text-2xl uppercase tracking-wide">
                <span className="text-racing-500">LS</span> Automobiles
              </span>
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Fermer le menu"
                className="inline-flex h-10 w-10 items-center justify-center border border-ink-700 text-ink-50"
              >
                <X className="h-4 w-4" strokeWidth={1.75} />
              </button>
            </div>

            <motion.nav
              initial="hidden"
              animate="visible"
              variants={{
                hidden: {},
                visible: { transition: { staggerChildren: 0.06, delayChildren: 0.1 } },
              }}
              aria-label="Navigation mobile"
              className="container-edge flex flex-1 flex-col justify-between gap-10 py-10"
            >
              <ul className="flex flex-col gap-1">
                {mainNav.map((item, i) => {
                  const active =
                    item.href === '/' ? pathname === '/' : pathname?.startsWith(item.href);
                  return (
                    <motion.li
                      key={item.href}
                      variants={{
                        hidden: { opacity: 0, y: 16 },
                        visible: { opacity: 1, y: 0 },
                      }}
                    >
                      <Link
                        href={item.href}
                        className={cn(
                          'flex items-baseline justify-between border-b border-ink-700 py-5 transition-colors',
                          active ? 'text-racing-500' : 'text-ink-50 hover:text-racing-500',
                        )}
                      >
                        <span className="font-display text-3xl uppercase tracking-wide">
                          {item.label}
                        </span>
                        <span className="font-mono text-2xs uppercase tracking-widest text-ink-400">
                          {String(i + 1).padStart(2, '0')}
                        </span>
                      </Link>
                    </motion.li>
                  );
                })}
              </ul>

              <div className="flex flex-col gap-6">
                <a href={`tel:${SITE_CONFIG.phone}`} className="btn-primary justify-center">
                  <Phone className="h-3.5 w-3.5" strokeWidth={2} />
                  {SITE_CONFIG.phoneDisplay}
                </a>
                <ul className="flex flex-col gap-3 text-sm text-ink-300">
                  <li className="flex items-start gap-3">
                    <MapPin className="mt-0.5 h-4 w-4 text-racing-500" strokeWidth={1.75} />
                    <span>
                      {SITE_CONFIG.address.street}
                      <br />
                      {SITE_CONFIG.address.postalCode} {SITE_CONFIG.address.city}
                    </span>
                  </li>
                  <li>
                    <a href={`mailto:${SITE_CONFIG.email}`} className="flex items-center gap-3">
                      <Mail className="h-4 w-4 text-racing-500" strokeWidth={1.75} />
                      {SITE_CONFIG.email}
                    </a>
                  </li>
                </ul>
                <ul className="flex gap-4 pt-4 text-xs text-ink-400">
                  {footerSecondary.map((item) => (
                    <li key={item.href}>
                      <Link href={item.href} className="hover:text-racing-500">
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
