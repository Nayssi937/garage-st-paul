import { cn } from '@/lib/utils/cn';

export function Marquee({
  items,
  className,
}: {
  items: string[];
  className?: string;
}) {
  const tripled = [...items, ...items, ...items];

  return (
    <div
      className={cn(
        'group relative flex w-full overflow-hidden no-scrollbar [mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)]',
        className,
      )}
    >
      <div className="flex shrink-0 items-center gap-12 pr-12 [animation:marquee_50s_linear_infinite] motion-reduce:[animation:none] group-hover:[animation-play-state:paused]">
        {tripled.map((item, i) => (
          <span
            key={`${item}-${i}`}
            className="whitespace-nowrap font-display text-2xl uppercase tracking-wide text-ink-300/80 transition-colors hover:text-ink-50 md:text-3xl"
          >
            {item}
            <span className="ml-12 text-racing-500/60">×</span>
          </span>
        ))}
      </div>
    </div>
  );
}
