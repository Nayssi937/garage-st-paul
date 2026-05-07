import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { ContactCTA } from '@/components/sections/ContactCTA';
import { FadeUp } from '@/components/motion/FadeUp';
import { news, newsCategoryLabels } from '@/lib/data/news';
import { formatDate } from '@/lib/format';
import { buildMetadata } from '@/lib/seo';

export const metadata = buildMetadata({
  title: 'Actualités',
  description: 'Le journal du Garage St-Paul : nouveautés, conseils et événements.',
  path: '/actualites',
});

export default function ActualitesPage() {
  const articles = [...news].sort(
    (a, b) => +new Date(b.publishedAt) - +new Date(a.publishedAt),
  );
  return (
    <>
      <section className="on-dark relative isolate overflow-hidden bg-navy-700 pb-16 pt-32 text-cream-100 md:pb-20 md:pt-40">
        <Container>
          <FadeUp>
            <span className="font-sans text-eyebrow uppercase tracking-eyebrow text-cream-100/60">
              Le journal du garage
            </span>
          </FadeUp>
          <FadeUp delay={0.1}>
            <h1 className="mt-5 max-w-3xl font-serif text-display-xl font-normal text-cream-50">
              Actualités &amp; conseils.
            </h1>
          </FadeUp>
          <FadeUp delay={0.2}>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-cream-100/75">
              Nouveautés du garage, conseils d&rsquo;entretien, événements
              automobiles. La perspective d&rsquo;un atelier qui n&rsquo;a pas
              changé d&rsquo;exigence depuis 1962.
            </p>
          </FadeUp>
        </Container>
      </section>

      <section className="bg-cream-200 py-16 md:py-24">
        <Container>
          <ul className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {articles.map((article, idx) => (
              <FadeUp as="li" key={article.slug} delay={Math.min(idx * 0.05, 0.4)}>
                <Link
                  href={`/actualites/${article.slug}`}
                  className="group flex h-full flex-col bg-cream-100 transition-all duration-300 hover:shadow-card-hover"
                >
                  <div className="relative aspect-[4/3] overflow-hidden bg-navy-900">
                    <Image
                      src={article.cover.src}
                      alt={article.cover.alt}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover transition-transform duration-700 ease-out-quart group-hover:scale-105"
                    />
                    <span className="absolute left-4 top-4 inline-flex items-center bg-navy-700 px-3 py-1 font-sans text-[10px] font-medium uppercase tracking-[0.18em] text-cream-100">
                      {newsCategoryLabels[article.category]}
                    </span>
                  </div>
                  <div className="flex flex-1 flex-col gap-3 p-6">
                    <span className="font-sans text-eyebrow uppercase tracking-eyebrow text-ink-500">
                      {formatDate(article.publishedAt)} · {article.readingTimeMin} min
                    </span>
                    <h3 className="font-serif text-xl text-navy-700 transition-colors group-hover:text-gold-700">
                      {article.title}
                    </h3>
                    <p className="line-clamp-2 text-sm leading-relaxed text-ink-500">
                      {article.excerpt}
                    </p>
                    <span className="mt-auto inline-flex items-center gap-2 pt-3 font-sans text-eyebrow uppercase tracking-eyebrow text-gold-600">
                      Lire l&rsquo;article
                      <ArrowRight className="h-3 w-3" strokeWidth={1.75} />
                    </span>
                  </div>
                </Link>
              </FadeUp>
            ))}
          </ul>
        </Container>
      </section>

      <ContactCTA />
    </>
  );
}
