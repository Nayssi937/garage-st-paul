import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowUpRight, Check } from 'lucide-react';
import { PageHero } from '@/components/layout/PageHero';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { Button } from '@/components/ui/Button';
import { ContactCTA } from '@/components/sections/ContactCTA';
import { services, getService } from '@/lib/data/services';
import type { ServiceSlug } from '@/lib/data/services';
import { buildMetadata } from '@/lib/seo';

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug as ServiceSlug);
  if (!service) return {};
  return buildMetadata({
    title: service.title,
    description: service.tagline,
    path: `/services/${service.slug}`,
  });
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getService(slug as ServiceSlug);
  if (!service) notFound();

  const Icon = service.icon;
  const otherServices = services.filter((s) => s.slug !== service.slug);

  return (
    <>
      <PageHero
        eyebrow={`// ${service.number} — Service`}
        title={service.title}
        description={service.tagline}
        image={service.cover}
        imageAlt={service.title}
        breadcrumbs={[
          { label: 'Accueil', href: '/' },
          { label: 'Services', href: '/services' },
          { label: service.shortTitle },
        ]}
        size="lg"
      />

      <Section bg="default">
        <Container>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="flex flex-col gap-8 lg:col-span-7">
              <Icon className="h-12 w-12 text-racing-500" strokeWidth={1.25} />
              <p className="text-lg leading-relaxed text-ink-100 md:text-xl">
                {service.description}
              </p>
              <ul className="mt-2 flex flex-col gap-3 border-t border-ink-700 pt-8">
                {service.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-base text-ink-200">
                    <Check className="mt-1 h-4 w-4 shrink-0 text-racing-500" strokeWidth={2} />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-4">
                <Button href={`/contact?service=${service.slug}`} variant="primary" withArrow>
                  Demander un devis
                </Button>
              </div>
            </div>

            <aside className="flex flex-col gap-6 border-l border-ink-700 pl-6 lg:col-span-4 lg:col-start-9 lg:pl-10">
              <div>
                <span className="eyebrow-muted">Partenaires techniques</span>
                <ul className="mt-3 flex flex-wrap gap-2">
                  {service.partners.map((p) => (
                    <li
                      key={p}
                      className="rounded-sm border border-ink-700 bg-ink-900 px-3 py-1.5 font-mono text-2xs uppercase tracking-widest text-ink-200"
                    >
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <span className="eyebrow-muted">Autres prestations</span>
                <ul className="mt-3 flex flex-col">
                  {otherServices.map((s) => (
                    <li key={s.slug}>
                      <Link
                        href={`/services/${s.slug}`}
                        className="group flex items-center justify-between border-t border-ink-700 py-4 transition-colors hover:text-racing-500"
                      >
                        <span className="font-display text-lg uppercase tracking-wide">
                          {s.title}
                        </span>
                        <ArrowUpRight
                          className="h-4 w-4 text-ink-400 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-racing-500"
                          strokeWidth={1.5}
                        />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </aside>
          </div>
        </Container>
      </Section>

      <ContactCTA />
    </>
  );
}
