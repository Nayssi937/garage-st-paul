import Image from 'next/image';
import { Container } from '@/components/ui/Container';
import { ContactCTA } from '@/components/sections/ContactCTA';
import { FadeUp } from '@/components/motion/FadeUp';
import { buildMetadata } from '@/lib/seo';

export const metadata = buildMetadata({
  title: 'Notre histoire',
  description:
    "Plus de 60 ans de passion automobile à Fribourg. L'histoire du Garage St-Paul depuis sa fondation en 1962.",
  path: '/histoire',
});

const timeline = [
  {
    year: 1962,
    title: 'La fondation',
    description:
      "Joseph Saint-Paul ouvre un atelier de mécanique générale Route de la Glâne, à Fribourg. Trois mécaniciens, deux ponts élévateurs, et le pari d'un service rigoureux pour les automobilistes de la région.",
  },
  {
    year: 1978,
    title: 'Extension et spécialisation',
    description:
      "Agrandissement de l'atelier et spécialisation sur les marques européennes premium — Mercedes, BMW, Porsche. L'effectif passe à huit collaborateurs.",
  },
  {
    year: 1995,
    title: 'La deuxième génération',
    description:
      "Pierre Saint-Paul, fils du fondateur, reprend la direction. Création du département vente de véhicules d'occasion soigneusement sélectionnés.",
  },
  {
    year: 2008,
    title: 'Modernisation technique',
    description:
      "Investissement dans l'équipement de diagnostic électronique multi-marques et formation continue des mécaniciens.",
  },
  {
    year: 2017,
    title: 'Hôtel à pneus et géométrie 3D',
    description:
      "Ouverture d'un hôtel à pneus climatisé de 600 m² et installation d'un banc de géométrie 3D laser dernière génération.",
  },
  {
    year: 2024,
    title: 'La transmission continue',
    description:
      'Soixante-deux ans après la fondation, le Garage St-Paul maintient le cap : indépendance, exigence, proximité.',
  },
];

export default function HistoirePage() {
  return (
    <>
      <section className="on-dark relative isolate overflow-hidden bg-navy-700 pb-16 pt-32 text-cream-100 md:pb-24 md:pt-40">
        <Image
          src="https://images.unsplash.com/photo-1486006920555-c77dcf18193c?w=2400&auto=format&fit=crop&q=85"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-25"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-navy-900/80 via-navy-700/60 to-navy-700" aria-hidden="true" />
        <Container className="relative">
          <FadeUp>
            <span className="font-sans text-eyebrow uppercase tracking-eyebrow text-cream-100/60">
              Notre histoire
            </span>
          </FadeUp>
          <FadeUp delay={0.1}>
            <h1 className="mt-5 max-w-3xl font-serif text-display-xl font-normal text-cream-50">
              Depuis 1962, l&rsquo;automobile en héritage.
            </h1>
          </FadeUp>
          <FadeUp delay={0.2}>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-cream-100/75">
              Soixante-deux ans, trois générations, un seul atelier. Cette
              continuité-là ne se décrète pas : elle se construit, jour après
              jour, intervention après intervention.
            </p>
          </FadeUp>
        </Container>
      </section>

      <section className="bg-cream-200 py-20 md:py-28">
        <Container size="narrow">
          <ol className="flex flex-col gap-12">
            {timeline.map((entry, idx) => (
              <FadeUp
                as="li"
                key={entry.year}
                delay={idx * 0.05}
                className="grid grid-cols-1 gap-6 border-l-2 border-gold-400/30 pl-8 lg:grid-cols-12 lg:gap-10 lg:pl-12"
              >
                <div className="lg:col-span-3">
                  <span className="font-serif text-5xl font-medium leading-none text-gold-500">
                    {entry.year}
                  </span>
                </div>
                <div className="lg:col-span-9">
                  <h3 className="mb-3 font-serif text-2xl text-navy-700">{entry.title}</h3>
                  <p className="text-base leading-relaxed text-ink-500">
                    {entry.description}
                  </p>
                </div>
              </FadeUp>
            ))}
          </ol>
        </Container>
      </section>

      <ContactCTA />
    </>
  );
}
