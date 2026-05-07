'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';

export function Hero() {
  return (
    <section className="on-dark relative isolate flex min-h-[100svh] items-center overflow-hidden bg-navy-700 text-cream-100">
      <Image
        src="https://www.garagesp.ch/uploads/8/6/0/3/86039312/carroserie2_orig.jpg"
        alt="Atelier carrosserie du Garage St-Paul à Lausanne"
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(90deg, rgba(8,18,36,0.92) 0%, rgba(14,26,43,0.78) 30%, rgba(14,26,43,0.45) 55%, rgba(14,26,43,0.15) 80%, rgba(14,26,43,0) 100%)',
        }}
        aria-hidden="true"
      />

      <Container className="relative z-10 pb-24 pt-32 md:pb-32 md:pt-40">
        <div className="grid grid-cols-1 lg:grid-cols-12">
          <div className="flex max-w-2xl flex-col gap-8 lg:col-span-7">
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="font-serif text-display-2xl font-normal leading-[1.05] text-cream-50"
            >
              L&rsquo;EXIGENCE
              <br />
              DEPUIS 1962
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
              className="max-w-md text-base leading-relaxed text-cream-100/85"
            >
              Garage St-Paul Sàrl à Lausanne — entretien, carrosserie, service
              express, pneus et vente de véhicules. Toutes marques, le bon
              travail, la première fois.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="mt-2 flex flex-wrap items-center gap-3"
            >
              <Button href="/services" variant="primary" withArrow>
                Nos services
              </Button>
              <Button href="/contact" variant="secondary-on-dark">
                Prendre rendez-vous
              </Button>
            </motion.div>
          </div>
        </div>
      </Container>
    </section>
  );
}
