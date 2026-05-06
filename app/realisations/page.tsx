import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';
import { PageHero } from '@/components/layout/PageHero';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { ContactCTA } from '@/components/sections/ContactCTA';
import { projects } from '@/lib/data/projects';
import { buildMetadata } from '@/lib/seo';

export const metadata: Metadata = buildMetadata({
  title: 'Réalisations — Notre univers',
  description:
    'Restaurations, préparations, projets de compétition — découvrez les voitures qui nous sont passées entre les mains.',
  path: '/realisations',
});

export default function RealisationsPage() {
  return (
    <>
      <PageHero
        eyebrow="Réalisations"
        title={
          <>
            Notre <span className="text-racing-500">univers</span>.
          </>
        }
        description="Chaque voiture qui sort de l'atelier raconte une histoire. Voici quelques-unes des plus marquantes."
        image="https://images.unsplash.com/photo-1611821064430-0d40291922d2?w=2400&auto=format&fit=crop&q=85"
        imageAlt="Restauration Porsche 356 par LS Automobiles"
        breadcrumbs={[{ label: 'Accueil', href: '/' }, { label: 'Réalisations' }]}
        size="lg"
      />

      <Section bg="default">
        <Container>
          <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-7">
            {projects.map((project) => (
              <li key={project.slug}>
                <Link
                  href={`/realisations/${project.slug}`}
                  className="card-project group block h-full"
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={project.cover}
                      alt={project.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover transition-transform duration-700 ease-out-quart group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/30 to-transparent opacity-80" />
                    <span className="absolute right-4 top-4 inline-flex h-10 w-10 items-center justify-center border border-ink-50/30 text-ink-50 backdrop-blur-sm transition-all group-hover:border-racing-500 group-hover:bg-racing-500">
                      <ArrowUpRight className="h-4 w-4" strokeWidth={1.5} />
                    </span>
                  </div>
                  <div className="flex flex-col gap-2 p-6">
                    <span className="hairline-racing" />
                    <span className="font-mono text-2xs uppercase tracking-widest text-ink-400">
                      {project.categoryLabel} · {project.year}
                    </span>
                    <h2 className="font-display text-2xl uppercase tracking-wide text-ink-50 transition-colors group-hover:text-racing-500">
                      {project.title}
                    </h2>
                    <p className="mt-1 text-sm leading-relaxed text-ink-300 line-clamp-2">
                      {project.subtitle}
                    </p>
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
