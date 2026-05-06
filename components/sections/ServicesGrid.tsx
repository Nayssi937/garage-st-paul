'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { services } from '@/lib/data/services';

export function ServicesGrid() {
  return (
    <section className="relative bg-ink-900">
      <Container className="py-20 md:py-24">
        <ul className="grid grid-cols-1 gap-px overflow-hidden border border-ink-700 bg-ink-700 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.li
                key={service.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.08,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="bg-ink-900"
              >
                <Link
                  href={`/services/${service.slug}`}
                  className="group relative flex h-full flex-col items-center gap-4 px-6 py-10 text-center transition-colors duration-300 hover:bg-ink-800 md:px-8 md:py-12"
                >
                  <span className="absolute right-4 top-4 inline-flex h-8 w-8 items-center justify-center text-ink-500 opacity-0 transition-all duration-300 group-hover:text-racing-500 group-hover:opacity-100">
                    <ArrowUpRight className="h-4 w-4" strokeWidth={1.5} />
                  </span>

                  <Icon
                    className="h-12 w-12 text-racing-500 transition-transform duration-300 group-hover:scale-110"
                    strokeWidth={1.25}
                  />

                  <h3 className="font-display text-xl uppercase tracking-wide text-ink-50">
                    {service.title}
                  </h3>

                  <p className="max-w-[26ch] text-sm leading-relaxed text-ink-300">
                    {service.excerpt}
                  </p>

                  <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-racing-500 transition-all duration-500 ease-out-quart group-hover:w-full" />
                </Link>
              </motion.li>
            );
          })}
        </ul>
      </Container>
    </section>
  );
}
