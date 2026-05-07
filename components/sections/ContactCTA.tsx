'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, MapPin, Phone, Mail, Clock } from 'lucide-react';
import { SITE_CONFIG } from '@/lib/seo';

export function ContactCTA() {
  return (
    <section className="on-dark relative isolate overflow-hidden bg-navy-700 text-cream-100">
      <div className="grid grid-cols-1 lg:grid-cols-12">
        <div className="relative aspect-[4/3] lg:col-span-4 lg:aspect-auto">
          <Image
            src="https://images.unsplash.com/photo-1469285994282-454ceb49e63c?w=1600&auto=format&fit=crop&q=85"
            alt="Volant en bois et cuir d'une voiture de collection"
            fill
            sizes="(max-width: 1024px) 100vw, 33vw"
            className="object-cover"
          />
          <div
            className="absolute inset-0 bg-gradient-to-r from-transparent to-navy-700"
            aria-hidden="true"
          />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col items-center justify-center gap-6 px-8 py-16 text-center md:py-20 lg:col-span-5 lg:px-12 lg:py-24"
        >
          <h2 className="font-serif text-display-md font-normal leading-tight text-cream-50">
            Un garage indépendant,
            <br />
            une relation de confiance.
          </h2>
          <p className="max-w-md text-sm leading-relaxed text-cream-100/75">
            Notre équipe est à votre écoute pour vous conseiller et vous
            accompagner dans tous vos projets automobiles.
          </p>
          <div className="mt-2">
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 rounded-none bg-gold-400 px-7 py-4 font-sans text-[12px] font-medium uppercase tracking-[0.12em] text-navy-700 transition-all duration-200 hover:-translate-y-px hover:bg-gold-300 hover:shadow-gold"
            >
              Prendre rendez-vous
              <ArrowRight className="h-3.5 w-3.5" strokeWidth={1.75} />
            </Link>
          </div>
        </motion.div>

        <motion.aside
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col justify-center gap-6 border-t border-cream-100/10 px-8 py-12 lg:col-span-3 lg:border-l lg:border-t-0 lg:px-10 lg:py-24"
        >
          <ul className="flex flex-col gap-5 text-sm text-cream-100/85">
            <li className="flex items-start gap-3">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold-400" strokeWidth={1.5} />
              <span className="leading-relaxed">
                {SITE_CONFIG.address.street}
                <br />
                {SITE_CONFIG.address.postalCode} {SITE_CONFIG.address.city}
              </span>
            </li>
            <li>
              <a
                href={`tel:${SITE_CONFIG.phone}`}
                className="flex items-center gap-3 transition-colors hover:text-gold-400"
              >
                <Phone className="h-4 w-4 shrink-0 text-gold-400" strokeWidth={1.5} />
                {SITE_CONFIG.phoneDisplay}
              </a>
            </li>
            <li>
              <a
                href={`mailto:${SITE_CONFIG.email}`}
                className="flex items-center gap-3 transition-colors hover:text-gold-400"
              >
                <Mail className="h-4 w-4 shrink-0 text-gold-400" strokeWidth={1.5} />
                {SITE_CONFIG.email}
              </a>
            </li>
            <li className="flex items-start gap-3">
              <Clock className="mt-0.5 h-4 w-4 shrink-0 text-gold-400" strokeWidth={1.5} />
              <span className="leading-relaxed">
                Lundi – Vendredi
                <br />
                07h30 – 12h00 | 13h30 – 18h00
                <br />
                <span className="text-cream-100/55">Samedi sur rendez-vous</span>
              </span>
            </li>
          </ul>
        </motion.aside>
      </div>
    </section>
  );
}
