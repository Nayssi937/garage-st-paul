import Link from 'next/link';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { InstagramIcon, FacebookIcon } from '@/components/ui/SocialIcon';
import { Logo } from './Logo';
import { Container } from '@/components/ui/Container';
import { footerSecondary, mainNav } from '@/lib/data/navigation';
import { SITE_CONFIG } from '@/lib/seo';

export function Footer() {
  const year = new Date().getFullYear();
  const primaryNav = mainNav.filter((n) => n.href !== '/');

  return (
    <footer className="relative border-t border-ink-700 bg-ink-950 text-ink-100">
      <Container className="py-16 md:py-20">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          {/* Brand */}
          <div className="flex flex-col gap-6 lg:col-span-4">
            <Logo size="md" />
            <p className="max-w-sm text-sm leading-relaxed text-ink-300">
              Garage spécialisé dans l'entretien, la réparation, la préparation
              et la restauration de véhicules de sport, de collection et de
              compétition.
            </p>
            <div className="flex gap-3">
              <a
                href={SITE_CONFIG.social.instagram}
                target="_blank"
                rel="noreferrer noopener"
                aria-label="Instagram"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-ink-700 transition-all hover:border-racing-500 hover:text-racing-500"
              >
                <InstagramIcon className="h-4 w-4" />
              </a>
              <a
                href={SITE_CONFIG.social.facebook}
                target="_blank"
                rel="noreferrer noopener"
                aria-label="Facebook"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-ink-700 transition-all hover:border-racing-500 hover:text-racing-500"
              >
                <FacebookIcon className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Liens rapides */}
          <div className="flex flex-col gap-5 lg:col-span-3 lg:col-start-6">
            <h3 className="font-mono text-2xs uppercase tracking-widest text-racing-500">
              Liens rapides
            </h3>
            <ul className="flex flex-col gap-3 text-sm text-ink-200">
              {primaryNav.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="transition-colors hover:text-racing-500">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="flex flex-col gap-5 lg:col-span-4">
            <h3 className="font-mono text-2xs uppercase tracking-widest text-racing-500">
              Contact
            </h3>
            <ul className="flex flex-col gap-4 text-sm text-ink-200">
              <li className="flex items-start gap-3">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-racing-500" strokeWidth={1.75} />
                <a
                  href={`tel:${SITE_CONFIG.phone}`}
                  className="transition-colors hover:text-racing-500"
                >
                  {SITE_CONFIG.phoneDisplay}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-racing-500" strokeWidth={1.75} />
                <a
                  href={`mailto:${SITE_CONFIG.email}`}
                  className="transition-colors hover:text-racing-500"
                >
                  {SITE_CONFIG.email}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-racing-500" strokeWidth={1.75} />
                <span>
                  {SITE_CONFIG.address.street}
                  <br />
                  {SITE_CONFIG.address.postalCode} {SITE_CONFIG.address.city} – Suisse
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="mt-0.5 h-4 w-4 shrink-0 text-racing-500" strokeWidth={1.75} />
                <span className="leading-relaxed">{SITE_CONFIG.hoursDisplay}</span>
              </li>
            </ul>
          </div>
        </div>
      </Container>

      <div className="border-t border-ink-700">
        <Container className="flex flex-col items-center justify-between gap-4 py-6 text-xs text-ink-400 md:flex-row">
          <p>
            © {year} {SITE_CONFIG.fullName} — Tous droits réservés.
          </p>
          <ul className="flex gap-6">
            {footerSecondary.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="transition-colors hover:text-racing-500">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </div>
    </footer>
  );
}
