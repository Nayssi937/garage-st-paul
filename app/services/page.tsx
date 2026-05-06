import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight, Check } from 'lucide-react';
import { PageHero } from '@/components/layout/PageHero';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { ContactCTA } from '@/components/sections/ContactCTA';
import { services } from '@/lib/data/services';
import { buildMetadata } from '@/lib/seo';

export const metadata: Metadata = buildMetadata({
  title: 'Services — Mécanique, préparation, restauration, achat & vente',
  description:
    'Quatre expertises pour les voitures de sport, de collection et de compétition. Découvrez nos prestations.',
  path: '/services',
});

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Nos prestations"
        title={
          <>
            Quatre expertises,
            <br />
            <span className="text-racing-500">une exigence</span>.
          </>
        }
        description="Mécanique de précision, préparation, restauration, achat & vente — sans sous-traitance, sans approximation."
        image="https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=2400&auto=format&fit=crop&q=85"
        imageAlt="Atelier LS Automobiles"
        breadcrumbs={[{ label: 'Accueil', href: '/' }, { label: 'Services' }]}
        size="lg"
      />

      <Section bg="default">
        <Container>
          <ul className="flex flex-col gap-8 lg:gap-px lg:bg-ink-700">
            {services.map((service, i) => {
              const Icon = service.icon;
              const reverse = i % 2 === 1;
              return (
                <li key={service.slug} className="bg-ink-900" id={service.slug}>
                  <article className="grid grid-cols-1 lg:grid-cols-12">
                    <div
                      className={`relative aspect-[4/3] lg:col-span-5 lg:aspect-auto ${reverse ? 'lg:order-2' : ''}`}
                    >
                      <Image
                        src={service.cover}
                        alt={service.title}
                        fill
                        sizes="(max-width: 1024px) 100vw, 42vw"
                        className="object-cover"
                      />
                      <span className="absolute left-6 top-6 font-mono text-2xs uppercase tracking-widest text-ink-50">
                        // {service.number}
                      </span>
                    </div>
                    <div className="flex flex-col gap-6 p-8 lg:col-span-7 lg:p-14">
                      <Icon className="h-10 w-10 text-racing-500" strokeWidth={1.25} />
                      <h2 className="font-display text-display-md uppercase tracking-wide text-ink-50">
                        {service.title}
                      </h2>
                      <span className="hairline-racing" />
                      <p className="text-base leading-relaxed text-ink-200 md:text-lg">
                        {service.description}
                      </p>
                      <ul className="grid grid-cols-1 gap-x-6 gap-y-3 md:grid-cols-2">
                        {service.features.map((feature) => (
                          <li key={feature} className="flex items-start gap-2.5 text-sm text-ink-200">
                            <Check
                              className="mt-0.5 h-4 w-4 shrink-0 text-racing-500"
                              strokeWidth={2}
                            />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                      <Link
                        href={`/services/${service.slug}`}
                        className="group mt-2 inline-flex items-center gap-2 self-start border-b border-racing-500 pb-1 font-mono text-2xs uppercase tracking-widest text-racing-500 transition-colors hover:text-racing-400"
                      >
                        En savoir plus
                        <ArrowUpRight
                          className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                          strokeWidth={1.75}
                        />
                      </Link>
                    </div>
                  </article>
                </li>
              );
            })}
          </ul>
        </Container>
      </Section>

      <ContactCTA />
    </>
  );
}
