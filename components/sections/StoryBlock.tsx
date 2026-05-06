'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';

export function StoryBlock() {
  return (
    <section className="relative bg-ink-950 py-20 md:py-28">
      <Container>
        <div className="grid grid-cols-1 items-stretch gap-px lg:grid-cols-12 lg:gap-0 lg:bg-ink-700">
          {/* Texte */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col justify-center gap-6 bg-ink-900 p-8 lg:col-span-4 lg:p-10"
          >
            <span className="eyebrow">LS Automobiles</span>
            <h2 className="font-display text-display-lg uppercase tracking-wide text-ink-50 leading-[0.95]">
              Un atelier,
              <br />
              une <span className="text-racing-500">passion</span>
              <span className="text-racing-500">.</span>
            </h2>
            <span className="hairline-racing" />
            <p className="text-base leading-relaxed text-ink-200">
              Situé à Crissier près de Lausanne, LS Automobiles met à votre
              service son savoir-faire et sa passion pour l'automobile depuis
              plus de 10 ans.
            </p>
            <p className="text-base leading-relaxed text-ink-300">
              Chaque véhicule est traité avec le plus grand soin, dans le
              respect de son histoire et de son potentiel.
            </p>
            <div className="mt-2">
              <Button href="/atelier" variant="secondary" withArrow>
                En savoir plus
              </Button>
            </div>
          </motion.div>

          {/* Image atelier */}
          <motion.div
            initial={{ opacity: 0, scale: 1.05 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1.1, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="relative aspect-[4/3] lg:col-span-4 lg:aspect-auto"
          >
            <Image
              src="https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=1600&auto=format&fit=crop&q=85"
              alt="Atelier LS Automobiles vue d'ensemble"
              fill
              sizes="(max-width: 1024px) 100vw, 33vw"
              className="object-cover"
            />
          </motion.div>

          {/* Image moteur */}
          <motion.div
            initial={{ opacity: 0, scale: 1.05 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1.1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="relative aspect-[4/3] lg:col-span-4 lg:aspect-auto"
          >
            <Image
              src="https://images.unsplash.com/photo-1632823469887-fa1bdd9d6d3a?w=1600&auto=format&fit=crop&q=85"
              alt="Détail moteur de voiture de sport préparée chez LS Automobiles"
              fill
              sizes="(max-width: 1024px) 100vw, 33vw"
              className="object-cover"
            />
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
