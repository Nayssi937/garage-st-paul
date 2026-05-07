'use client';

import { motion } from 'framer-motion';
import { Container } from '@/components/ui/Container';
import { homepageServices } from '@/lib/data/services';

export function ServicesGrid() {
  return (
    <section className="bg-cream-200 py-16 md:py-20">
      <Container>
        <ul className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-0">
          {homepageServices.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.li
                key={item.slug}
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
                <p className="max-w-[230px] text-sm leading-relaxed text-ink-500">
                  {item.excerpt}
                </p>
              </motion.li>
            );
          })}
        </ul>
      </Container>
    </section>
  );
}
