import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Calendar, Fuel, Gauge, Settings, Zap, Check } from 'lucide-react';
import { PageHero } from '@/components/layout/PageHero';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { Button } from '@/components/ui/Button';
import { Tag } from '@/components/ui/Tag';
import { vehicles, getVehicle } from '@/lib/data/vehicles';
import { buildMetadata } from '@/lib/seo';

export function generateStaticParams() {
  return vehicles.map((v) => ({ slug: v.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const v = getVehicle(slug);
  if (!v) return {};
  return buildMetadata({
    title: `${v.brand} ${v.model} (${v.year})`,
    description: v.excerpt,
    path: `/vehicules/${v.slug}`,
    image: v.cover,
  });
}

export default async function VehicleDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const v = getVehicle(slug);
  if (!v) notFound();

  return (
    <>
      <PageHero
        eyebrow={`${v.categoryLabel} · ${v.reference}`}
        title={
          <>
            {v.brand} <span className="text-racing-500">{v.model}</span>
          </>
        }
        description={v.excerpt}
        image={v.cover}
        imageAlt={`${v.brand} ${v.model}`}
        breadcrumbs={[
          { label: 'Accueil', href: '/' },
          { label: 'Véhicules', href: '/vehicules' },
          { label: `${v.brand} ${v.model}` },
        ]}
        size="lg"
      />

      <Section bg="default">
        <Container>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-14">
            {/* Galerie */}
            <div className="flex flex-col gap-3 lg:col-span-7">
              <div className="relative aspect-[4/3] bg-ink-900">
                <Image
                  src={v.cover}
                  alt={`${v.brand} ${v.model}`}
                  fill
                  sizes="(max-width: 1024px) 100vw, 60vw"
                  className="object-cover"
                  priority
                />
              </div>
              {v.gallery.length > 1 && (
                <div className="grid grid-cols-3 gap-3">
                  {v.gallery.slice(0, 3).map((src, i) => (
                    <div key={src} className="relative aspect-square bg-ink-900">
                      <Image
                        src={src}
                        alt={`${v.brand} ${v.model} — ${i + 1}`}
                        fill
                        sizes="(max-width: 1024px) 33vw, 20vw"
                        className="object-cover"
                      />
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Sticky panel */}
            <aside className="flex flex-col gap-6 lg:col-span-5">
              <div className="flex flex-wrap items-center gap-2">
                <Tag variant="racing">{v.categoryLabel}</Tag>
                {v.status === 'reserved' && <Tag variant="outline-light">Réservé</Tag>}
                <Tag variant="outline">Réf. {v.reference}</Tag>
              </div>

              <div>
                <p className="font-mono text-2xs uppercase tracking-widest text-ink-400">Prix</p>
                <p className="mt-1 font-display text-display-md uppercase tracking-wide text-ink-50">
                  CHF {v.price.toLocaleString('fr-CH')}
                </p>
              </div>

              <ul className="grid grid-cols-2 gap-px border border-ink-700 bg-ink-700">
                <li className="flex flex-col gap-1 bg-ink-900 p-4">
                  <span className="inline-flex items-center gap-1.5 font-mono text-2xs uppercase tracking-widest text-racing-500">
                    <Calendar className="h-3 w-3" strokeWidth={2} /> Année
                  </span>
                  <span className="font-display text-lg uppercase">{v.year}</span>
                </li>
                <li className="flex flex-col gap-1 bg-ink-900 p-4">
                  <span className="inline-flex items-center gap-1.5 font-mono text-2xs uppercase tracking-widest text-racing-500">
                    <Gauge className="h-3 w-3" strokeWidth={2} /> Km
                  </span>
                  <span className="font-display text-lg uppercase">
                    {v.mileage.toLocaleString('fr-CH')}
                  </span>
                </li>
                <li className="flex flex-col gap-1 bg-ink-900 p-4">
                  <span className="inline-flex items-center gap-1.5 font-mono text-2xs uppercase tracking-widest text-racing-500">
                    <Zap className="h-3 w-3" strokeWidth={2} /> Puissance
                  </span>
                  <span className="font-display text-lg uppercase">{v.power}</span>
                </li>
                <li className="flex flex-col gap-1 bg-ink-900 p-4">
                  <span className="inline-flex items-center gap-1.5 font-mono text-2xs uppercase tracking-widest text-racing-500">
                    <Settings className="h-3 w-3" strokeWidth={2} /> Boîte
                  </span>
                  <span className="font-display text-lg uppercase">{v.gearbox}</span>
                </li>
              </ul>

              <div className="flex flex-wrap gap-3">
                <Button href={`/contact?vehicule=${v.slug}`} variant="primary" withArrow>
                  Demander un essai
                </Button>
                <Button href="tel:+41782125455" variant="secondary">
                  +41 78 212 54 55
                </Button>
              </div>
            </aside>
          </div>
        </Container>
      </Section>

      {/* Description + specs */}
      <Section bg="raised">
        <Container>
          <div className="grid grid-cols-1 gap-14 lg:grid-cols-12">
            <div className="flex flex-col gap-6 lg:col-span-7">
              <span className="eyebrow">Description</span>
              <p className="text-base leading-relaxed text-ink-100 md:text-lg">{v.description}</p>
              <ul className="mt-4 flex flex-col gap-3">
                {v.highlights.map((h) => (
                  <li key={h} className="flex items-start gap-3 text-base text-ink-200">
                    <Check className="mt-1 h-4 w-4 shrink-0 text-racing-500" strokeWidth={2} />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </div>
            <aside className="lg:col-span-4 lg:col-start-9">
              <span className="eyebrow">Spécifications</span>
              <dl className="mt-4 flex flex-col">
                {v.specs.map((s) => (
                  <div
                    key={s.label}
                    className="flex items-baseline justify-between gap-4 border-t border-ink-700 py-4"
                  >
                    <dt className="font-mono text-2xs uppercase tracking-widest text-ink-400">
                      {s.label}
                    </dt>
                    <dd className="text-right font-display text-base uppercase tracking-wide text-ink-50">
                      {s.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </aside>
          </div>
        </Container>
      </Section>
    </>
  );
}
