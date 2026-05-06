'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { SITE_CONFIG } from '@/lib/seo';

export function ContactCTA() {
  return (
    <section className="relative bg-ink-950">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12">
          {/* Image étrier de frein */}
          <motion.div
            initial={{ opacity: 0, scale: 1.05 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
            className="relative aspect-[4/3] overflow-hidden lg:col-span-5 lg:aspect-auto"
          >
            <Image
              src="https://images.unsplash.com/photo-1601362840469-51e4d8d58785?w=1600&auto=format&fit=crop&q=85"
              alt="Étrier de frein haute performance"
              fill
              sizes="(max-width: 1024px) 100vw, 42vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-ink-950 lg:to-ink-900" />
          </motion.div>

          {/* Contenu */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.9, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="relative grid grid-cols-1 gap-12 bg-ink-900 p-8 md:p-12 lg:col-span-7 lg:p-16"
          >
            <div className="flex flex-col gap-5">
              <span className="eyebrow">Un projet ?</span>
              <h2 className="font-display text-display-lg uppercase tracking-wide text-ink-50 leading-[0.95]">
                Parlons-en<span className="text-racing-500">.</span>
              </h2>
              <span className="hairline-racing" />
              <p className="max-w-xl text-base leading-relaxed text-ink-200">
                Que ce soit pour l'entretien de votre véhicule, une préparation
                spécifique ou un projet de restauration, nous sommes à votre
                écoute.
              </p>
              <div className="mt-2">
                <Button href="/contact" variant="primary" withArrow>
                  Nous contacter
                </Button>
              </div>
            </div>

            <ul className="grid grid-cols-1 gap-5 border-t border-ink-700 pt-8 sm:grid-cols-2">
              <li className="flex items-start gap-3">
                <Phone className="mt-1 h-4 w-4 shrink-0 text-racing-500" strokeWidth={1.75} />
                <a
                  href={`tel:${SITE_CONFIG.phone}`}
                  className="text-sm transition-colors hover:text-racing-500"
                >
                  {SITE_CONFIG.phoneDisplay}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="mt-1 h-4 w-4 shrink-0 text-racing-500" strokeWidth={1.75} />
                <a
                  href={`mailto:${SITE_CONFIG.email}`}
                  className="text-sm transition-colors hover:text-racing-500"
                >
                  {SITE_CONFIG.email}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="mt-1 h-4 w-4 shrink-0 text-racing-500" strokeWidth={1.75} />
                <span className="text-sm leading-relaxed">
                  {SITE_CONFIG.address.street}
                  <br />
                  {SITE_CONFIG.address.postalCode} {SITE_CONFIG.address.city} – Suisse
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="mt-1 h-4 w-4 shrink-0 text-racing-500" strokeWidth={1.75} />
                <span className="text-sm leading-relaxed">{SITE_CONFIG.hoursDisplay}</span>
              </li>
            </ul>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
