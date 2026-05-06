'use client';

import { useState, type ReactNode } from 'react';
import { Plus, Minus } from 'lucide-react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { cn } from '@/lib/utils/cn';

type AccordionItem = {
  question: string;
  answer: ReactNode;
};

type AccordionProps = {
  items: AccordionItem[];
  className?: string;
};

export function Accordion({ items, className }: AccordionProps) {
  const [open, setOpen] = useState<number | null>(0);
  const reduced = useReducedMotion();

  return (
    <div className={cn('flex flex-col divide-y divide-navy-700/10', className)}>
      {items.map((item, idx) => {
        const isOpen = open === idx;
        return (
          <div key={idx}>
            <button
              type="button"
              onClick={() => setOpen(isOpen ? null : idx)}
              aria-expanded={isOpen}
              aria-controls={`accordion-panel-${idx}`}
              className="flex w-full items-center justify-between gap-6 py-6 text-left transition-colors hover:text-gold-600"
            >
              <span className="font-serif text-lg text-navy-700 md:text-xl">
                {item.question}
              </span>
              <span className="flex h-9 w-9 shrink-0 items-center justify-center border border-navy-700/15 transition-colors group-hover:border-gold-400">
                {isOpen ? (
                  <Minus className="h-4 w-4 text-gold-600" />
                ) : (
                  <Plus className="h-4 w-4 text-navy-700" />
                )}
              </span>
            </button>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  id={`accordion-panel-${idx}`}
                  role="region"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{
                    duration: reduced ? 0.1 : 0.4,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="overflow-hidden"
                >
                  <p className="pb-6 pr-12 text-base leading-relaxed text-ink-500">
                    {item.answer}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
