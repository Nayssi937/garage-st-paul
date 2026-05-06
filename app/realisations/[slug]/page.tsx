import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowUpRight, Quote } from 'lucide-react';
import { PageHero } from '@/components/layout/PageHero';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { ContactCTA } from '@/components/sections/ContactCTA';
import { projects, getProject } from '@/lib/data/projects';
import { buildMetadata } from '@/lib/seo';

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const p = getProject(slug);
  if (!p) return {};
  return buildMetadata({
    title: `${p.title} — ${p.subtitle}`,
    description: p.excerpt,
    path: `/realisations/${p.slug}`,
    image: p.cover,
  });
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const p = getProject(slug);
  if (!p) notFound();

  const others = projects.filter((x) => x.slug !== p.slug).slice(0, 3);

  return (
    <>
      <PageHero
        eyebrow={`${p.categoryLabel} · ${p.year}`}
        title={p.title}
        description={p.subtitle}
        image={p.cover}
        imageAlt={p.title}
        breadcrumbs={[
          { label: 'Accueil', href: '/' },
          { label: 'Réalisations', href: '/realisations' },
          { label: p.title },
        ]}
        size="lg"
      />

      {/* Story + Specs */}
      <Section bg="default">
        <Container>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="flex flex-col gap-6 lg:col-span-7">
              <span className="eyebrow">Le projet</span>
              <p className="text-lg leading-relaxed text-ink-100 md:text-xl">{p.excerpt}</p>
              <p className="text-base leading-relaxed text-ink-300">{p.story}</p>
            </div>
            <aside className="flex flex-col gap-6 lg:col-span-4 lg:col-start-9">
              <span className="eyebrow">Caractéristiques</span>
              <dl className="flex flex-col">
                {p.specs.map((s) => (
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

      {/* Galerie */}
      <Section bg="raised" tight>
        <Container>
          <div className="grid grid-cols-1 gap-px bg-ink-700 md:grid-cols-2">
            {p.gallery.map((src, i) => (
              <div key={src} className="relative aspect-[4/3] bg-ink-900">
                <Image
                  src={src}
                  alt={`${p.title} — image ${i + 1}`}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Témoignage */}
      {p.testimonial && (
        <Section bg="default">
          <Container className="max-w-3xl">
            <Quote className="mb-6 h-10 w-10 text-racing-500" strokeWidth={1.25} />
            <blockquote className="font-display text-2xl uppercase leading-tight tracking-wide text-ink-50 md:text-3xl">
              « {p.testimonial.quote} »
            </blockquote>
            <footer className="mt-8 flex items-center gap-4">
              <span className="hairline-racing" />
              <div>
                <p className="font-display text-lg uppercase tracking-wide text-ink-50">
                  {p.testimonial.author}
                </p>
                <p className="font-mono text-2xs uppercase tracking-widest text-ink-400">
                  {p.testimonial.role}
                </p>
              </div>
            </footer>
          </Container>
        </Section>
      )}

      {/* Autres */}
      <Section bg="raised" tight>
        <Container>
          <div className="mb-10 flex items-end justify-between">
            <h2 className="font-display text-display-md uppercase tracking-wide text-ink-50">
              Autres projets
            </h2>
            <Link
              href="/realisations"
              className="font-mono text-2xs uppercase tracking-widest text-racing-500 hover:text-racing-400"
            >
              Tous les projets →
            </Link>
          </div>
          <ul className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {others.map((o) => (
              <li key={o.slug}>
                <Link href={`/realisations/${o.slug}`} className="card-project group block h-full">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={o.cover}
                      alt={o.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="flex flex-col gap-2 p-5">
                    <span className="font-mono text-2xs uppercase tracking-widest text-ink-400">
                      {o.categoryLabel}
                    </span>
                    <h3 className="font-display text-xl uppercase tracking-wide text-ink-50 group-hover:text-racing-500">
                      {o.title}
                    </h3>
                    <span className="mt-1 inline-flex items-center gap-2 text-xs text-ink-400">
                      Découvrir <ArrowUpRight className="h-3 w-3" strokeWidth={1.75} />
                    </span>
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
