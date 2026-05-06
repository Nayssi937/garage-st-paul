import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight, Calendar, Gauge, Fuel } from 'lucide-react';
import { PageHero } from '@/components/layout/PageHero';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { Tag } from '@/components/ui/Tag';
import { ContactCTA } from '@/components/sections/ContactCTA';
import { vehicles } from '@/lib/data/vehicles';
import { buildMetadata } from '@/lib/seo';

export const metadata: Metadata = buildMetadata({
  title: 'Véhicules à vendre — Notre stock',
  description:
    "Notre sélection de voitures de sport, de collection et de compétition. Sourcing rigoureux, expertise systématique.",
  path: '/vehicules',
});

export default function VehiclesPage() {
  return (
    <>
      <PageHero
        eyebrow="Notre stock"
        title={
          <>
            Voitures
            <br />
            <span className="text-racing-500">à vendre</span>.
          </>
        }
        description="Une sélection de véhicules choisis avec exigence. Sport, collection, compétition — chaque voiture est expertisée avant mise en vente."
        image="https://images.unsplash.com/photo-1542362567-b07e54358753?w=2400&auto=format&fit=crop&q=85"
        imageAlt="Sélection véhicules LS Automobiles"
        breadcrumbs={[{ label: 'Accueil', href: '/' }, { label: 'Véhicules' }]}
        size="lg"
      />

      <Section bg="default">
        <Container>
          <ul className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-7">
            {vehicles.map((v) => (
              <li key={v.slug}>
                <Link
                  href={`/vehicules/${v.slug}`}
                  className="card-project group flex h-full flex-col"
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={v.cover}
                      alt={`${v.brand} ${v.model}`}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover transition-transform duration-700 ease-out-quart group-hover:scale-105"
                    />
                    <div className="absolute left-4 top-4 flex gap-2">
                      <Tag variant="racing" size="sm">
                        {v.categoryLabel}
                      </Tag>
                      {v.status === 'reserved' && (
                        <Tag variant="outline-light" size="sm">
                          Réservé
                        </Tag>
                      )}
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col gap-3 p-6">
                    <div>
                      <p className="font-mono text-2xs uppercase tracking-widest text-racing-500">
                        {v.brand}
                      </p>
                      <h3 className="mt-1 font-display text-2xl uppercase tracking-wide text-ink-50">
                        {v.model}
                      </h3>
                    </div>
                    <ul className="flex flex-wrap gap-x-5 gap-y-2 text-xs text-ink-300">
                      <li className="inline-flex items-center gap-1.5">
                        <Calendar className="h-3.5 w-3.5 text-racing-500" strokeWidth={1.5} />
                        {v.year}
                      </li>
                      <li className="inline-flex items-center gap-1.5">
                        <Gauge className="h-3.5 w-3.5 text-racing-500" strokeWidth={1.5} />
                        {v.mileage.toLocaleString('fr-CH')} km
                      </li>
                      <li className="inline-flex items-center gap-1.5">
                        <Fuel className="h-3.5 w-3.5 text-racing-500" strokeWidth={1.5} />
                        {v.fuel}
                      </li>
                    </ul>
                    <div className="mt-auto flex items-end justify-between border-t border-ink-700 pt-4">
                      <div>
                        <span className="font-mono text-2xs uppercase tracking-widest text-ink-400">
                          Prix
                        </span>
                        <p className="font-display text-2xl uppercase tracking-wide text-ink-50">
                          CHF {v.price.toLocaleString('fr-CH')}
                        </p>
                      </div>
                      <span className="inline-flex h-10 w-10 items-center justify-center border border-ink-700 text-ink-50 transition-all group-hover:border-racing-500 group-hover:bg-racing-500 group-hover:text-white">
                        <ArrowUpRight className="h-4 w-4" strokeWidth={1.5} />
                      </span>
                    </div>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      <ContactCTA />
    </>
  );
}
