'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { featuredProjects } from '@/lib/data/projects';

export function ProjectsGrid() {
  return (
    <section className="relative bg-ink-950 py-20 md:py-28">
      <Container>
        <div className="mb-12 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div className="flex flex-col gap-4">
            <span className="eyebrow">Réalisations</span>
            <h2 className="font-display text-display-lg uppercase tracking-wide text-ink-50">
              Notre univers
            </h2>
            <span className="hairline-racing" />
          </div>
          <Button href="/realisations" variant="secondary" withArrow>
            Voir toutes les réalisations
          </Button>
        </div>

        <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-7">
          {featuredProjects.slice(0, 4).map((project, idx) => (
            <motion.li
              key={project.slug}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, delay: idx * 0.08, ease: [0.22, 1, 0.36, 1] }}
            >
              <Link
                href={`/realisations/${project.slug}`}
                className="card-project group block h-full"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={project.cover}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover transition-transform duration-700 ease-out-quart group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/30 to-transparent opacity-80" />
                </div>
                <div className="flex flex-col gap-2 p-5">
                  <span className="hairline-racing" />
                  <span className="font-mono text-2xs uppercase tracking-widest text-ink-400">
                    {project.categoryLabel}
                  </span>
                  <h3 className="font-display text-xl uppercase tracking-wide text-ink-50 transition-colors group-hover:text-racing-500">
                    {project.title}
                  </h3>
                  <span className="mt-1 inline-flex items-center gap-2 text-xs text-ink-400 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    Découvrir
                    <ArrowUpRight className="h-3 w-3" strokeWidth={1.75} />
                  </span>
                </div>
              </Link>
            </motion.li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
