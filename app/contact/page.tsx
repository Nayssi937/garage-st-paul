import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { ContactForm } from '@/components/forms/ContactForm';
import { FadeUp } from '@/components/motion/FadeUp';
import { SITE_CONFIG, buildMetadata } from '@/lib/seo';

export const metadata = buildMetadata({
  title: 'Contact',
  description:
    "Contactez le Garage St-Paul à Fribourg. Téléphone 026 411 15 65, info@garagesp.ch, Rte de la Glâne 34. Lundi à vendredi 07h30–18h00.",
  path: '/contact',
});

export default function ContactPage() {
  return (
    <>
      <section className="on-dark relative isolate overflow-hidden bg-navy-700 pb-16 pt-32 text-cream-100 md:pb-20 md:pt-40">
        <Container>
          <FadeUp>
            <span className="font-sans text-eyebrow uppercase tracking-eyebrow text-cream-100/60">
              Contact
            </span>
          </FadeUp>
          <FadeUp delay={0.1}>
            <h1 className="mt-5 max-w-3xl font-serif text-display-xl font-normal text-cream-50">
              Parlons de votre projet.
            </h1>
          </FadeUp>
          <FadeUp delay={0.2}>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-cream-100/75">
              Une révision à planifier, une voiture à expertiser, un véhicule à
              acquérir ? Nous prenons le temps qu&rsquo;il faut pour comprendre
              votre besoin.
            </p>
          </FadeUp>
        </Container>
      </section>

      <section className="bg-cream-200 py-20 md:py-24">
        <Container>
          <div className="grid grid-cols-1 gap-14 lg:grid-cols-12 lg:gap-20">
            {/* Form */}
            <FadeUp className="lg:col-span-7">
              <span className="font-sans text-eyebrow uppercase tracking-eyebrow text-gold-600">
                Formulaire
              </span>
              <h2 className="mt-4 font-serif text-display-md font-normal text-navy-700">
                Écrivez-nous.
              </h2>
              <span className="mt-4 block h-px w-12 bg-gold-400/60" />
              <p className="mt-5 max-w-xl text-base leading-relaxed text-ink-500">
                Réponse sous 24 heures ouvrées. Vous pouvez aussi nous appeler
                directement, c&rsquo;est souvent plus rapide.
              </p>

              <ContactForm className="mt-10" />
            </FadeUp>

            {/* Coordonnées */}
            <FadeUp delay={0.1} className="flex flex-col gap-8 lg:col-span-5">
              <div>
                <span className="font-sans text-eyebrow uppercase tracking-eyebrow text-gold-600">
                  Coordonnées
                </span>
                <h2 className="mt-4 font-serif text-display-md font-normal text-navy-700">
                  Nous trouver.
                </h2>
                <span className="mt-4 block h-px w-12 bg-gold-400/60" />
              </div>

              <ul className="flex flex-col gap-6 border-y border-navy-700/10 py-8">
                <li className="flex items-start gap-4">
                  <span className="mt-0.5 inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-gold-400/40 text-gold-600">
                    <MapPin className="h-4 w-4" strokeWidth={1.5} />
                  </span>
                  <div>
                    <span className="block font-sans text-eyebrow uppercase tracking-eyebrow text-ink-500">
                      Adresse
                    </span>
                    <a
                      href="https://maps.google.com/?q=Rte+de+la+Gl%C3%A2ne+34+1700+Fribourg"
                      target="_blank"
                      rel="noreferrer noopener"
                      className="mt-1 block text-base text-navy-700 transition-colors hover:text-gold-600"
                    >
                      {SITE_CONFIG.address.street}
                      <br />
                      {SITE_CONFIG.address.postalCode} {SITE_CONFIG.address.city}
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <span className="mt-0.5 inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-gold-400/40 text-gold-600">
                    <Phone className="h-4 w-4" strokeWidth={1.5} />
                  </span>
                  <div>
                    <span className="block font-sans text-eyebrow uppercase tracking-eyebrow text-ink-500">
                      Téléphone
                    </span>
                    <a
                      href={`tel:${SITE_CONFIG.phone}`}
                      className="mt-1 block text-base text-navy-700 transition-colors hover:text-gold-600"
                    >
                      {SITE_CONFIG.phoneDisplay}
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <span className="mt-0.5 inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-gold-400/40 text-gold-600">
                    <Mail className="h-4 w-4" strokeWidth={1.5} />
                  </span>
                  <div>
                    <span className="block font-sans text-eyebrow uppercase tracking-eyebrow text-ink-500">
                      Email
                    </span>
                    <a
                      href={`mailto:${SITE_CONFIG.email}`}
                      className="mt-1 block text-base text-navy-700 transition-colors hover:text-gold-600"
                    >
                      {SITE_CONFIG.email}
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <span className="mt-0.5 inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-gold-400/40 text-gold-600">
                    <Clock className="h-4 w-4" strokeWidth={1.5} />
                  </span>
                  <div>
                    <span className="block font-sans text-eyebrow uppercase tracking-eyebrow text-ink-500">
                      Horaires
                    </span>
                    <div className="mt-1 text-base text-navy-700">
                      <span className="block">Lundi – Vendredi</span>
                      <span className="block text-sm text-ink-500">
                        07h30 – 12h00 / 13h30 – 18h00
                      </span>
                      <span className="mt-1 block text-sm text-ink-500">
                        Samedi : sur rendez-vous
                      </span>
                    </div>
                  </div>
                </li>
              </ul>

              <div className="relative aspect-[16/10] overflow-hidden">
                <iframe
                  title="Localisation du Garage St-Paul"
                  src="https://maps.google.com/maps?q=Rte+de+la+Gl%C3%A2ne+34+1700+Fribourg&t=&z=15&ie=UTF8&iwloc=&output=embed"
                  className="absolute inset-0 h-full w-full grayscale-[40%]"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </FadeUp>
          </div>
        </Container>
      </section>
    </>
  );
}
