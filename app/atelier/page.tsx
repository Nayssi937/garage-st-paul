import type { Metadata } from 'next';
import Image from 'next/image';
import { PageHero } from '@/components/layout/PageHero';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { Stat } from '@/components/blocks/Stat';
import { Marquee } from '@/components/blocks/Marquee';
import { ContactCTA } from '@/components/sections/ContactCTA';
import { stats, partners } from '@/lib/data/partners';
import { buildMetadata } from '@/lib/seo';

export const metadata: Metadata = buildMetadata({
  title: "L'atelier — Notre savoir-faire",
  description:
    "Découvrez l'atelier LS Automobiles à Crissier — équipement, méthode, culture mécanique. Plus de 10 ans au service des voitures de caractère.",
  path: '/atelier',
});

const equipment = [
  { label: 'Pont 4 colonnes', value: '4T — sport et compétition' },
  { label: 'Banc de puissance', value: 'Maha LPS 3000' },
  { label: 'Géométrie 3D laser', value: 'Hunter HawkEye Elite' },
  { label: 'Diagnostic multimarques', value: 'Bosch KTS, Autel, OBD constructeurs' },
  { label: 'Outillage spécialisé', value: 'Porsche Classic, BMW M, AMG' },
  { label: "Soudure & fabrication", value: 'TIG, MIG, oxyacéthylène' },
];

export default function AtelierPage() {
  return (
    <>
      <PageHero
        eyebrow="L'atelier"
        title={
          <>
            Un atelier,
            <br />
            <span className="text-racing-500">une passion</span>.
          </>
        }
        description="À Crissier, près de Lausanne, notre atelier est un lieu où chaque voiture est traitée avec le soin qu'elle mérite. Méthode, équipement, équipe — voici comment nous travaillons."
        image="https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=2400&auto=format&fit=crop&q=85"
        imageAlt="Atelier LS Automobiles"
        breadcrumbs={[{ label: 'Accueil', href: '/' }, { label: 'Atelier' }]}
        size="lg"
      />

      {/* Manifeste */}
      <Section bg="default">
        <Container>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <span className="eyebrow">Manifeste</span>
              <h2 className="mt-5 font-display text-display-lg uppercase tracking-wide text-ink-50">
                Comprendre avant
                <br />
                de <span className="text-racing-500">réparer</span>.
              </h2>
              <span className="mt-5 block hairline-racing" />
            </div>
            <div className="flex flex-col gap-5 text-base leading-relaxed text-ink-200 md:text-lg lg:col-span-7">
              <p>
                Une voiture de sport, de collection ou de compétition n'est
                jamais une voiture comme une autre. C'est une mécanique
                exigeante, une histoire, parfois un patrimoine. Notre travail
                consiste à respecter cela.
              </p>
              <p>
                Chaque châssis qui passe dans notre atelier est traité comme
                une pièce unique — parce qu'il l'est. Diagnostic posé,
                intervention justifiée, livraison contrôlée. Pas d'à-peu-près,
                pas d'à-côté.
              </p>
              <p className="border-l-2 border-racing-500 pl-5 font-display text-xl uppercase tracking-wide text-ink-50">
                « La précision n'est pas une option. C'est notre métier. »
              </p>
            </div>
          </div>
        </Container>
      </Section>

      {/* Galerie */}
      <Section bg="raised" tight>
        <Container>
          <div className="grid grid-cols-1 gap-px bg-ink-700 md:grid-cols-3">
            {[
              'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=1200&auto=format&fit=crop&q=85',
              'https://images.unsplash.com/photo-1632823469887-fa1bdd9d6d3a?w=1200&auto=format&fit=crop&q=85',
              'https://images.unsplash.com/photo-1542362567-b07e54358753?w=1200&auto=format&fit=crop&q=85',
              'https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?w=1200&auto=format&fit=crop&q=85',
              'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=1200&auto=format&fit=crop&q=85',
              'https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=1200&auto=format&fit=crop&q=85',
            ].map((src, i) => (
              <div key={src} className="relative aspect-[4/3] bg-ink-900">
                <Image
                  src={src}
                  alt={`Atelier LS Automobiles — vue ${i + 1}`}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Équipement */}
      <Section bg="default">
        <Container>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <span className="eyebrow">Équipement</span>
              <h2 className="mt-5 font-display text-display-lg uppercase tracking-wide text-ink-50">
                Les bons outils,
                <br />
                au bon endroit<span className="text-racing-500">.</span>
              </h2>
              <span className="mt-5 block hairline-racing" />
              <p className="mt-6 text-base leading-relaxed text-ink-300 md:text-lg">
                Un atelier sérieux se reconnaît à ses outils. Voici quelques-uns
                des équipements qui nous permettent d'aller chercher la précision.
              </p>
            </div>
            <ul className="grid grid-cols-1 gap-px self-start border border-ink-700 bg-ink-700 sm:grid-cols-2 lg:col-span-7">
              {equipment.map((eq) => (
                <li key={eq.label} className="flex flex-col gap-2 bg-ink-900 p-6">
                  <span className="font-mono text-2xs uppercase tracking-widest text-racing-500">
                    {eq.label}
                  </span>
                  <span className="font-display text-lg uppercase tracking-wide text-ink-50">
                    {eq.value}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </Section>

      {/* Stats */}
      <Section bg="darker" tight>
        <Container>
          <div className="grid grid-cols-2 gap-y-10 gap-x-6 md:grid-cols-4">
            {stats.map((s) => (
              <Stat key={s.label} value={s.value} suffix={s.suffix} label={s.label} />
            ))}
          </div>
        </Container>
      </Section>

      {/* Partenaires */}
      <Section bg="default" tight>
        <Container className="mb-8 max-w-md text-center">
          <span className="eyebrow">Partenaires techniques</span>
        </Container>
        <Marquee items={partners} />
      </Section>

      <ContactCTA />
    </>
  );
}
