import type { Metadata } from 'next';
import Image from 'next/image';
import { PageHero } from '@/components/layout/PageHero';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { ContactCTA } from '@/components/sections/ContactCTA';
import { buildMetadata } from '@/lib/seo';

export const metadata: Metadata = buildMetadata({
  title: 'À propos — Notre histoire et nos valeurs',
  description:
    "LS Automobiles, c'est plus de dix ans de passion automobile, à Crissier (VD). Voici qui nous sommes.",
  path: '/a-propos',
});

const values = [
  {
    title: 'Précision',
    description:
      "Pas d'à-peu-près. Chaque intervention est documentée, chaque pièce justifiée, chaque livraison contrôlée. C'est ce que veut dire travailler bien.",
  },
  {
    title: 'Discrétion',
    description:
      "Une voiture qui passe par notre atelier reste l'affaire de son propriétaire. Pas de communication non sollicitée, pas de mise en scène. La confiance est silencieuse.",
  },
  {
    title: 'Continuité',
    description:
      "Nous ne cherchons pas de coup. Nous construisons des relations durables — avec les clients, les fournisseurs, les partenaires. C'est ce qui rend l'expertise possible.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="À propos"
        title={
          <>
            La passion <span className="text-racing-500">d'abord</span>.
          </>
        }
        description="LS Automobiles est un atelier indépendant fondé en 2014. Petite équipe, grande exigence — voici comment nous travaillons."
        image="https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?w=2400&auto=format&fit=crop&q=85"
        imageAlt="Restauration d'un véhicule classique chez LS Automobiles"
        breadcrumbs={[{ label: 'Accueil', href: '/' }, { label: 'À propos' }]}
        size="lg"
      />

      {/* Histoire */}
      <Section bg="default">
        <Container>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <span className="eyebrow">Histoire</span>
              <h2 className="mt-5 font-display text-display-lg uppercase tracking-wide text-ink-50">
                Plus de dix ans
                <br />
                <span className="text-racing-500">d'atelier</span>.
              </h2>
              <span className="mt-5 block hairline-racing" />
            </div>
            <div className="flex flex-col gap-5 text-base leading-relaxed text-ink-200 md:text-lg lg:col-span-7">
              <p>
                LS Automobiles est né d'une conviction simple : il manquait, en
                Suisse romande, un atelier capable d'aborder les voitures de
                sport, de collection et de compétition avec la rigueur d'un
                garage de course et la patience d'un restaurateur.
              </p>
              <p>
                En plus de dix ans, nous avons traité plus de quatre cents
                véhicules — Porsche, Alfa Romeo, BMW, Lancia, Lotus, Alpine —
                pour des collectionneurs, des gentlemen drivers, des passionnés
                exigeants. Chaque projet a renforcé une certitude : il n'y a
                pas de raccourci possible quand on travaille avec rigueur.
              </p>
              <p>
                Notre atelier de Crissier reste à taille humaine — par choix.
                Cela nous permet de garantir un suivi personnel sur chaque
                projet, et la qualité de chaque livraison.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      {/* Valeurs */}
      <Section bg="raised">
        <Container>
          <div className="mb-12 max-w-2xl">
            <span className="eyebrow">Nos valeurs</span>
            <h2 className="mt-5 font-display text-display-lg uppercase tracking-wide text-ink-50">
              Trois principes
              <br />
              <span className="text-racing-500">non négociables</span>.
            </h2>
            <span className="mt-5 block hairline-racing" />
          </div>
          <ul className="grid grid-cols-1 gap-px overflow-hidden border border-ink-700 bg-ink-700 md:grid-cols-3">
            {values.map((v, i) => (
              <li key={v.title} className="flex flex-col gap-5 bg-ink-900 p-8 lg:p-10">
                <span className="font-mono text-2xs uppercase tracking-widest text-racing-500">
                  // 0{i + 1}
                </span>
                <h3 className="font-display text-2xl uppercase tracking-wide text-ink-50">
                  {v.title}
                </h3>
                <span className="hairline-racing" />
                <p className="text-sm leading-relaxed text-ink-300">{v.description}</p>
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      {/* Image full bleed */}
      <div className="relative h-[60vh] min-h-[480px] w-full">
        <Image
          src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=2400&auto=format&fit=crop&q=85"
          alt="Une Porsche 911 dans l'atelier"
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-transparent to-transparent" />
      </div>

      <ContactCTA />
    </>
  );
}
