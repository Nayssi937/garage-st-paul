'use client';

import { useEffect, useRef, useState } from 'react';
import { useInView } from 'framer-motion';

export function Stat({
  value,
  suffix = '',
  label,
}: {
  value: number;
  suffix?: string;
  label: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let start: number | null = null;
    const duration = 1400;
    const animate = (t: number) => {
      if (start === null) start = t;
      const progress = Math.min((t - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(Math.floor(eased * value));
      if (progress < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }, [inView, value]);

  return (
    <div ref={ref} className="flex flex-col gap-2 border-l-2 border-racing-500/60 pl-5 md:pl-6">
      <span className="font-display text-5xl uppercase tracking-wide text-ink-50 md:text-6xl">
        {display.toLocaleString('fr-CH')}
        <span className="text-racing-500">{suffix}</span>
      </span>
      <span className="label-mono">{label}</span>
    </div>
  );
}
