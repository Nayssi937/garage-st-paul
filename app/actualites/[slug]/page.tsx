import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, Clock, User } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { ContactCTA } from '@/components/sections/ContactCTA';
import { FadeUp } from '@/components/motion/FadeUp';
import { news, getArticle, newsCategoryLabels } from '@/lib/data/news';
import { formatDate } from '@/lib/format';
import { buildMetadata } from '@/lib/seo';

export async function generateStaticParams() {
  return news.map((n) => ({ slug: n.slug }));
}

type Params = { slug: string };

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) return {};
  return buildMetadata({
    title: article.title,
    description: article.excerpt,
    path: `/actualites/${article.slug}`,
    image: article.cover.src,
  });
}

export default async function ArticleDetailPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) return notFound();

  const blocks = article.content
    .trim()
    .split('\n\n')
    .map((b) => b.trim())
    .filter(Boolean);

  return (
    <>
      <article className="bg-cream-200 pt-24 md:pt-28">
        <Container size="narrow" className="py-12 md:py-16">
          <Link
            href="/actualites"
            className="inline-flex items-center gap-2 font-sans text-eyebrow uppercase tracking-eyebrow text-ink-500 transition-colors hover:text-navy-700"
          >
            <ArrowLeft className="h-3 w-3" /> Tous les articles
          </Link>

          <FadeUp className="mt-8 flex flex-col gap-5">
            <span className="inline-flex w-fit items-center bg-gold-400 px-3 py-1 font-sans text-[10px] font-medium uppercase tracking-[0.18em] text-navy-700">
              {newsCategoryLabels[article.category]}
            </span>
            <h1 className="font-serif text-display-lg font-normal text-balance text-navy-700">
              {article.title}
            </h1>
            <p className="text-base leading-relaxed text-ink-500 md:text-lg">
              {article.excerpt}
            </p>
            <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-eyebrow uppercase tracking-eyebrow text-ink-500">
              <span className="flex items-center gap-1.5">
                <User className="h-3 w-3" /> {article.author}
              </span>
              <span className="opacity-40">·</span>
              <time dateTime={article.publishedAt}>{formatDate(article.publishedAt)}</time>
              <span className="opacity-40">·</span>
              <span className="flex items-center gap-1.5">
                <Clock className="h-3 w-3" /> {article.readingTimeMin} min
              </span>
            </div>
          </FadeUp>
        </Container>

        <FadeUp delay={0.1}>
          <Container>
            <div className="relative aspect-[21/9] overflow-hidden">
              <Image
                src={article.cover.src}
                alt={article.cover.alt}
                fill
                priority
                sizes="100vw"
                className="object-cover"
              />
            </div>
          </Container>
        </FadeUp>

        <Container size="narrow" className="py-16 md:py-24">
          <div className="prose-stpaul">
            {blocks.map((block, i) => {
              if (block.startsWith('## ')) {
                return (
                  <h2 key={i} className="mt-10 first:mt-0">
                    {block.replace(/^##\s+/, '')}
                  </h2>
                );
              }
              if (block.startsWith('- ')) {
                const items = block.split('\n').map((l) => l.replace(/^-\s+/, ''));
                return (
                  <ul key={i}>
                    {items.map((item, j) => (
                      <li key={j}>{item}</li>
                    ))}
                  </ul>
                );
              }
              return <p key={i}>{block}</p>;
            })}
          </div>
        </Container>
      </article>

      <ContactCTA />
    </>
  );
}
