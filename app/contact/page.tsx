import type { Metadata } from 'next';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { PageHero } from '@/components/layout/PageHero';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { ContactForm } from '@/components/forms/ContactForm';
import { SITE_CONFIG, buildMetadata } from '@/lib/seo';

export const metadata: Metadata = buildMetadata({
  title: 'Contact — Parlons-en',
  description:
    "Une question, un projet, une demande de devis ? Contactez-nous par téléphone, e-mail ou via le formulaire. Réponse sous 48h ouvrées.",
  path: '/contact',
});

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title={
          <>
            Parlons-en<span className="text-racing-500">.</span>
          </>
        }
        description="Décrivez votre besoin — nous vous recontactons sous 48h ouvrées. Vous pouvez aussi passer à l'atelier sur rendez-vous."
        breadcrumbs={[{ label: 'Accueil', href: '/' }, { label: 'Contact' }]}
        size="lg"
      />

      <Section bg="default">
        <Container>
          <div className="grid grid-cols-1 gap-14 lg:grid-cols-12 lg:gap-20">
            <div className="lg:col-span-7">
              <span className="eyebrow">Formulaire</span>
              <h2 className="mt-5 font-display text-display-md uppercase tracking-wide text-ink-50">
                Votre demande
              </h2>
              <span className="mt-5 block hairline-racing" />
              <ContactForm className="mt-10" />
            </div>

            <aside className="flex flex-col gap-10 lg:col-span-4 lg:col-start-9">
              <div>
                <span className="eyebrow">Coordonnées</span>
                <ul className="mt-6 flex flex-col gap-6 text-ink-100">
                  <li className="flex items-start gap-4">
                    <span className="mt-1 inline-flex h-9 w-9 shrink-0 items-center justify-center border border-ink-700 text-racing-500">
                      <Phone className="h-4 w-4" strokeWidth={1.75} />
                    </span>
                    <div>
                      <span className="block font-mono text-2xs uppercase tracking-widest text-ink-400">
                        Téléphone
                      </span>
                      <a
                        href={`tel:${SITE_CONFIG.phone}`}
                        className="font-display text-xl uppercase tracking-wide hover:text-racing-500"
                      >
                        {SITE_CONFIG.phoneDisplay}
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="mt-1 inline-flex h-9 w-9 shrink-0 items-center justify-center border border-ink-700 text-racing-500">
                      <Mail className="h-4 w-4" strokeWidth={1.75} />
                    </span>
                    <div>
                      <span className="block font-mono text-2xs uppercase tracking-widest text-ink-400">
                        Email
                      </span>
                      <a
                        href={`mailto:${SITE_CONFIG.email}`}
                        className="text-base hover:text-racing-500"
                      >
                        {SITE_CONFIG.email}
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="mt-1 inline-flex h-9 w-9 shrink-0 items-center justify-center border border-ink-700 text-racing-500">
                      <MapPin className="h-4 w-4" strokeWidth={1.75} />
                    </span>
                    <div>
                      <span className="block font-mono text-2xs uppercase tracking-widest text-ink-400">
                        Atelier
                      </span>
                      <span className="text-base leading-relaxed">
                        {SITE_CONFIG.address.street}
                        <br />
                        {SITE_CONFIG.address.postalCode} {SITE_CONFIG.address.city} – Suisse
                      </span>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="mt-1 inline-flex h-9 w-9 shrink-0 items-center justify-center border border-ink-700 text-racing-500">
                      <Clock className="h-4 w-4" strokeWidth={1.75} />
                    </span>
                    <div>
                      <span className="block font-mono text-2xs uppercase tracking-widest text-ink-400">
                        Horaires
                      </span>
                      <span className="text-sm leading-relaxed">
                        {SITE_CONFIG.hoursDisplay}
                        <br />
                        Samedi sur rendez-vous
                      </span>
                    </div>
                  </li>
                </ul>
              </div>
            </aside>
          </div>
        </Container>
      </Section>
    </>
  );
}
