'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Container } from '@/components/ui/Container';

export function StoryBlock() {
  return (
    <section className="on-dark relative overflow-hidden bg-navy-700 text-cream-100">
      <Container className="py-20 md:py-28 lg:py-32">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col gap-6 lg:col-span-5"
          >
            <span className="font-sans text-eyebrow uppercase tracking-eyebrow text-cream-100/60">
              Notre savoir-faire
            </span>
            <h2 className="font-serif text-display-md font-normal leading-tight text-cream-50">
              Entretien, carrosserie, restauration — tout sous le même toit.
            </h2>
            <p className="max-w-md text-base leading-relaxed text-cream-100/75">
              Implanté à Lausanne depuis des décennies, le Garage St-Paul Sàrl
              entretient toutes marques avec la même rigueur. De
              l&rsquo;intervention express à la restauration intégrale d&rsquo;un
              véhicule de collection, notre atelier prend en charge votre
              voiture du diagnostic à la restitution.
            </p>
            <div className="mt-2">
              <Link
                href="/services"
                className="inline-flex items-center gap-3 rounded-none border border-cream-100/40 px-6 py-3 font-sans text-[12px] font-medium uppercase tracking-[0.12em] text-cream-100 transition-all hover:border-gold-400 hover:text-gold-400"
              >
                Découvrir nos services
                <ArrowRight className="h-3.5 w-3.5" strokeWidth={1.75} />
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="relative lg:col-span-7"
          >
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src="https://www.garagesp.ch/uploads/8/6/0/3/86039312/p8081102_1_orig.jpg"
                alt="Atelier du Garage St-Paul à Lausanne"
                fill
                sizes="(max-width: 1024px) 100vw, 60vw"
                className="object-cover"
              />
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
