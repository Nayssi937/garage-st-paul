'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { SITE_CONFIG } from '@/lib/seo';

export function Hero() {
  return (
    <section className="on-dark relative isolate flex min-h-[100svh] items-end overflow-hidden bg-navy-700 text-cream-100">
      <Image
        src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=2400&auto=format&fit=crop&q=85"
        alt="Voiture de collection élégante devant le Garage St-Paul à Fribourg"
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(90deg, rgba(8,18,36,0.92) 0%, rgba(14,26,43,0.78) 35%, rgba(14,26,43,0.45) 65%, rgba(14,26,43,0.2) 100%)',
        }}
        aria-hidden="true"
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(180deg, rgba(8,18,36,0.5) 0%, rgba(14,26,43,0) 30%, rgba(14,26,43,0) 70%, rgba(8,18,36,0.6) 100%)',
        }}
        aria-hidden="true"
      />

      <Container className="relative z-10 pb-16 pt-32 md:pb-24 md:pt-40">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
          <div className="flex flex-col gap-8 lg:col-span-8">
            <motion.span
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="inline-flex items-center gap-3 self-start font-sans text-eyebrow uppercase tracking-eyebrow text-gold-400"
            >
              <span className="h-px w-10 bg-gold-400" />
              Depuis 1962
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="font-serif text-display-2xl font-normal text-balance text-cream-50"
            >
              L&rsquo;exigence
              <br />
              <span className="italic text-gold-400">depuis 1962.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
              className="max-w-xl text-base leading-relaxed text-cream-100/80 md:text-lg"
            >
              Garage St-Paul, votre partenaire de confiance à Fribourg pour
              l&rsquo;entretien, la réparation et la vente de véhicules.
              Trois générations au service de l&rsquo;automobile.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="mt-2 flex flex-wrap items-center gap-4"
            >
              <Button href="/services" variant="primary" withArrow>
                Nos services
              </Button>
              <Button href="/contact" variant="secondary-on-dark" withArrow>
                Prendre rendez-vous
              </Button>
            </motion.div>
          </div>

          <motion.aside
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.9, delay: 0.5 }}
            className="hidden flex-col gap-6 self-end border-l border-gold-400/30 pl-6 lg:col-span-4 lg:flex"
          >
            <div className="flex flex-col gap-1">
              <span className="font-sans text-eyebrow uppercase tracking-eyebrow text-gold-400">Atelier</span>
              <span className="font-serif text-2xl text-cream-50">{SITE_CONFIG.address.city}</span>
              <span className="text-xs text-cream-100/60">{SITE_CONFIG.address.street}</span>
            </div>
            <div className="hairline-gold-on-dark w-full" />
            <div className="flex flex-col gap-1">
              <span className="font-sans text-eyebrow uppercase tracking-eyebrow text-gold-400">Téléphone</span>
              <a href={`tel:${SITE_CONFIG.phone}`} className="font-serif text-2xl text-cream-50 transition-colors hover:text-gold-400">
                {SITE_CONFIG.phoneDisplay}
              </a>
            </div>
            <div className="hairline-gold-on-dark w-full" />
            <div className="flex flex-col gap-1">
              <span className="font-sans text-eyebrow uppercase tracking-eyebrow text-gold-400">Horaires</span>
              <span className="text-sm leading-relaxed text-cream-100/80">
                Lun–Ven · 07h30–12h00<br />13h30–18h00
              </span>
              <span className="text-xs text-cream-100/50">Samedi sur rendez-vous</span>
            </div>
          </motion.aside>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="mt-12 flex items-center gap-3 self-start text-cream-100/50"
        >
          <span className="font-sans text-eyebrow uppercase tracking-eyebrow">Découvrir</span>
          <ChevronDown className="h-4 w-4 animate-float" strokeWidth={1.5} />
        </motion.div>
      </Container>
    </section>
  );
}
