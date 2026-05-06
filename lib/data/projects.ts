export type ProjectCategory = 'restauration' | 'preparation' | 'competition' | 'mecanique';

export type Project = {
  slug: string;
  title: string;
  subtitle: string;
  category: ProjectCategory;
  categoryLabel: string;
  year: number;
  duration: string;
  cover: string;
  gallery: string[];
  excerpt: string;
  story: string;
  specs: { label: string; value: string }[];
  testimonial?: { author: string; role: string; quote: string };
  featured?: boolean;
};

export const projects: Project[] = [
  {
    slug: 'porsche-356-sc',
    title: 'Porsche 356 SC',
    subtitle: "Restauration intégrale — concours d'élégance",
    category: 'restauration',
    categoryLabel: 'Restauration',
    year: 2024,
    duration: '14 mois',
    cover:
      'https://images.unsplash.com/photo-1611821064430-0d40291922d2?w=1600&auto=format&fit=crop&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1611821064430-0d40291922d2?w=1600&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=1600&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=1600&auto=format&fit=crop&q=80',
    ],
    excerpt:
      'Restauration intégrale d\'une 356 SC livrée neuve à Genève en 1964 — 14 mois de travail.',
    story:
      "Confiée par son second propriétaire, cette 356 SC dormait dans une grange du Pays de Gex depuis 22 ans. L'objectif n'était pas de la rendre neuve — il était de lui rendre son intégrité tout en respectant sa patine d'origine. Châssis remis à zéro, mécanique entièrement reconstruite avec des pièces d'origine sourcées en Allemagne, sellerie refaite à la main en cuir naturel par un sellier neuchâtelois. La peinture rouge Signal d'origine a été reproduite à l'identique. Présentée au concours d'élégance de Coppet en 2024.",
    specs: [
      { label: 'Année', value: '1964' },
      { label: 'Moteur', value: '4 cyl. à plat 1.6L' },
      { label: 'Puissance', value: '95 ch' },
      { label: 'Boîte', value: '4 vitesses' },
      { label: 'Durée projet', value: '14 mois' },
      { label: 'Récompense', value: 'Best in Show 356 — Coppet 2024' },
    ],
    testimonial: {
      author: 'M. R.',
      role: 'Collectionneur, Genève',
      quote:
        "J'attendais une restauration. J'ai eu une renaissance. Chaque détail a été pensé, chaque choix justifié.",
    },
    featured: true,
  },
  {
    slug: 'ford-escort-mk1',
    title: 'Ford Escort MK1',
    subtitle: 'Préparation rallye historique — Groupe 4',
    category: 'preparation',
    categoryLabel: 'Préparation',
    year: 2024,
    duration: '6 mois',
    cover:
      'https://images.unsplash.com/photo-1615832494873-b0c52d519696?w=1600&auto=format&fit=crop&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1615832494873-b0c52d519696?w=1600&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1567016526105-22da7c13161a?w=1600&auto=format&fit=crop&q=80',
    ],
    excerpt:
      'Préparation Groupe 4 d\'une Escort MK1 RS pour le Rallye du Tessin et le Tour Auto 2025.',
    story:
      "Le client voulait une Escort prête à sortir le couteau entre les dents sur les chronos historiques européens. Moteur 2L Pinto refait par notre partenaire britannique, BDA spec rally, suspension réglable Bilstein, freinage AP Racing, arceau soudé homologué FIA. Une voiture brutale, fiable, taillée pour le job.",
    specs: [
      { label: 'Année', value: '1972' },
      { label: 'Moteur', value: '2.0L Pinto BDA spec' },
      { label: 'Puissance', value: '210 ch' },
      { label: 'Poids', value: '880 kg' },
      { label: 'Homologation', value: 'FIA Annexe K' },
      { label: 'Durée projet', value: '6 mois' },
    ],
    featured: true,
  },
  {
    slug: 'porsche-911-st',
    title: 'Porsche 911 ST',
    subtitle: 'Restauration mécanique et carrosserie — spec ST',
    category: 'restauration',
    categoryLabel: 'Restauration',
    year: 2023,
    duration: '11 mois',
    cover:
      'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=1600&auto=format&fit=crop&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=1600&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1542362567-b07e54358753?w=1600&auto=format&fit=crop&q=80',
    ],
    excerpt:
      'Transformation d\'une 911 T 1972 en spec ST — esprit course, finition route.',
    story:
      "Le projet ST est un exercice d'équilibriste : honorer un mythe sans le caricaturer. Châssis allégé, ailes élargies, 2.5L 911/70 reconstruit, suspension réglable, intérieur dépouillé mais habitable. La voiture est utilisée pour des sorties Pirelli et des montées historiques.",
    specs: [
      { label: 'Année', value: '1972' },
      { label: 'Moteur', value: '2.5L à plat 6 cyl. — 911/70' },
      { label: 'Puissance', value: '270 ch' },
      { label: 'Poids', value: '960 kg' },
      { label: 'Particularité', value: 'Conversion 911T → spec ST' },
      { label: 'Durée projet', value: '11 mois' },
    ],
    featured: true,
  },
  {
    slug: 'porsche-964-cup',
    title: 'Porsche 964 Cup',
    subtitle: 'Restauration et préparation — spec Carrera Cup',
    category: 'competition',
    categoryLabel: 'Compétition',
    year: 2023,
    duration: '9 mois',
    cover:
      'https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=1600&auto=format&fit=crop&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=1600&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1614026480418-bd11fde9f8d6?w=1600&auto=format&fit=crop&q=80',
    ],
    excerpt:
      'Restauration et remise en spec Cup d\'une 964 ayant couru le championnat Porsche France 1992.',
    story:
      'Voiture historique aux nombreuses participations, achetée fatiguée par notre client. Remise en spec Cup d\'origine : moteur révisé, suspension Bilstein, freinage Pagid, livrée d\'époque reproduite à l\'identique. Engagée en championnat Porsche Classic en 2024.',
    specs: [
      { label: 'Année', value: '1991' },
      { label: 'Moteur', value: '3.6L à plat 6 cyl.' },
      { label: 'Puissance', value: '265 ch' },
      { label: 'Boîte', value: 'G50 spéciale Cup' },
      { label: 'Historique', value: 'Championnat Porsche France 1992' },
      { label: 'Durée projet', value: '9 mois' },
    ],
    featured: true,
  },
  {
    slug: 'alpine-a110-1600s',
    title: 'Alpine A110 1600S',
    subtitle: 'Restauration mécanique et préservation',
    category: 'restauration',
    categoryLabel: 'Restauration',
    year: 2023,
    duration: '8 mois',
    cover:
      'https://images.unsplash.com/photo-1614200187524-dc4b892acf16?w=1600&auto=format&fit=crop&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1614200187524-dc4b892acf16?w=1600&auto=format&fit=crop&q=80',
    ],
    excerpt:
      'Une A110 berlinette préservée, remise en route mécanique sans toucher à sa patine.',
    story:
      "Trouvée chez un ancien pilote de rallye dans le Piémont, cette A110 cumulait les blessures de combat. Le client voulait absolument conserver la patine — gravillons, rayures de course, autocollants d'époque. Tout le travail s'est concentré sur la mécanique : moteur Cléon-Fonte refait, freins refaits, train roulant repris, sellerie consolidée. La carrosserie n'a pas été touchée.",
    specs: [
      { label: 'Année', value: '1971' },
      { label: 'Moteur', value: '1.6L Cléon-Fonte' },
      { label: 'Puissance', value: '138 ch' },
      { label: 'Poids', value: '700 kg' },
      { label: 'Approche', value: 'Préservation, restauration mécanique' },
    ],
  },
  {
    slug: 'bmw-e30-m3',
    title: 'BMW E30 M3',
    subtitle: 'Préparation track day — fiabilité et plaisir',
    category: 'preparation',
    categoryLabel: 'Préparation',
    year: 2024,
    duration: '4 mois',
    cover:
      'https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?w=1600&auto=format&fit=crop&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?w=1600&auto=format&fit=crop&q=80',
    ],
    excerpt:
      'Préparation track day d\'une E30 M3 — performance accessible, fiabilité absolue.',
    story:
      "L'objectif n'était pas la performance pure, mais la fiabilité sur 30 journées de circuit par an. Moteur S14 retravaillé, suspension KW V3, freinage StopTech, refroidissement renforcé, baquets Recaro, harnais. Une voiture qui ne lâche jamais.",
    specs: [
      { label: 'Année', value: '1989' },
      { label: 'Moteur', value: 'S14 2.3L 4 cyl.' },
      { label: 'Puissance', value: '235 ch' },
      { label: 'Usage', value: 'Track day, route' },
      { label: 'Durée projet', value: '4 mois' },
    ],
  },
];

export const getProject = (slug: string) => projects.find((p) => p.slug === slug);
export const featuredProjects = projects.filter((p) => p.featured);
