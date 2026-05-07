'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { featuredVehicles } from '@/lib/data/vehicles';

export function VehiclesFeatured() {
  return (
    <section className="bg-cream-200 py-20 md:py-24">
      <Container>
        <div className="mb-12 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <span className="font-sans text-eyebrow uppercase tracking-eyebrow text-gold-600">
              Véhicules en stock
            </span>
            <h2 className="mt-4 font-serif text-display-md font-normal text-navy-700">
              Découvrez notre sélection.
            </h2>
          </div>
          <Link
            href="/vehicules"
            className="inline-flex items-center gap-3 rounded-none border border-navy-700/30 px-6 py-3 font-sans text-[12px] font-medium uppercase tracking-wide text-navy-700 transition-all hover:border-gold-500 hover:bg-gold-400 hover:text-navy-700"
          >
            Voir tous les véhicules
            <ArrowRight className="h-3.5 w-3.5" strokeWidth={1.75} />
          </Link>
        </div>

        <ul className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {featuredVehicles.slice(0, 3).map((v, idx) => (
            <motion.li
              key={v.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.7,
                delay: idx * 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <Link
                href={`/vehicules/${v.slug}`}
                className="group flex h-full flex-col bg-ivory transition-all duration-300 ease-out-quart hover:-translate-y-1 hover:shadow-card-hover"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-navy-900">
                  <Image
                    src={v.cover}
                    alt={`${v.brand} ${v.model}`}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 ease-out-quart group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-1 flex-col gap-3 bg-cream-100 px-6 pt-6">
                  <h3 className="text-center font-serif text-xl text-navy-700">
                    {v.brand} {v.model.split(' ').slice(0, 3).join(' ')}
                  </h3>
                  <ul className="flex items-center justify-center gap-3 text-center text-xs text-ink-500">
                    <li>{v.year}</li>
                    <li className="text-gold-500">·</li>
                    <li>{v.mileage.toLocaleString('fr-CH').replace(/\s/g, "'")} km</li>
                    <li className="text-gold-500">·</li>
                    <li>{v.fuel}</li>
                  </ul>
                </div>
                <div className="border-t border-navy-700/10 bg-cream-100 px-6 py-4">
                  <span className="inline-flex items-center gap-2 font-sans text-[11px] font-medium uppercase tracking-wide text-navy-700 transition-colors group-hover:text-gold-700">
                    Voir le détail
                    <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-0.5" strokeWidth={1.75} />
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
