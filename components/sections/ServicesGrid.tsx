'use client';

import { motion } from 'framer-motion';
import { Wrench, Car, ClipboardCheck, CircleDot } from 'lucide-react';
import { Container } from '@/components/ui/Container';

const items = [
  {
    icon: Wrench,
    title: 'Entretien & Réparation',
    description: "Un service complet pour l'entretien et la réparation de toutes marques.",
  },
  {
    icon: Car,
    title: 'Vente de Véhicules',
    description: "Véhicules neufs et d'occasion sélectionnés avec soin, toutes marques.",
  },
  {
    icon: ClipboardCheck,
    title: 'Diagnostic & Technique',
    description: 'Technologie de pointe et expertise pour un diagnostic précis et fiable.',
  },
  {
    icon: CircleDot,
    title: 'Pneus & Géométrie',
    description: 'Un service pneus complet et un réglage de géométrie pour votre sécurité.',
  },
];

export function ServicesGrid() {
  return (
    <section className="bg-cream-200 py-16 md:py-20">
      <Container>
        <ul className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-0">
          {items.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.li
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{
                  duration: 0.6,
                  delay: idx * 0.08,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="flex flex-col items-center gap-5 px-6 text-center lg:border-l lg:border-navy-700/10 lg:first:border-l-0"
              >
                <Icon
                  className="h-10 w-10 text-navy-700"
                  strokeWidth={1.25}
                  aria-hidden="true"
                />
                <h3 className="font-sans text-[12px] font-semibold uppercase tracking-[0.18em] text-navy-700">
                  {item.title}
                </h3>
                <p className="max-w-[220px] text-sm leading-relaxed text-ink-500">
                  {item.description}
                </p>
              </motion.li>
            );
          })}
        </ul>
      </Container>
    </section>
  );
}
