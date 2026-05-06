import type { LucideIcon } from 'lucide-react';
import { Wrench, Gauge, Sparkles, Handshake } from 'lucide-react';

export type ServiceSlug = 'mecanique' | 'preparation' | 'restauration' | 'achat-vente';

export type Service = {
  slug: ServiceSlug;
  number: string;
  title: string;
  shortTitle: string;
  tagline: string;
  excerpt: string;
  description: string;
  icon: LucideIcon;
  cover: string;
  features: string[];
  partners: string[];
};

export const services: Service[] = [
  {
    slug: 'mecanique',
    number: '01',
    title: 'Mécanique de précision',
    shortTitle: 'Mécanique',
    tagline: 'Diagnostic, entretien, réparation — toutes marques.',
    excerpt:
      'Entretien et réparation toutes marques avec exigence et expertise.',
    description:
      "L'entretien d'une mécanique exigeante demande des compétences précises, des outils adaptés et une vraie attention. Nous travaillons sur tous types de véhicules — modernes, youngtimers, classiques — avec la même rigueur. Chaque intervention est documentée, chaque pièce justifiée, chaque livraison contrôlée.",
    icon: Wrench,
    cover:
      'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=1600&auto=format&fit=crop&q=80',
    features: [
      'Diagnostic électronique multimarques (Bosch KTS, Autel, OBD constructeurs)',
      'Service constructeur, vidange, distribution, embrayage, transmission',
      'Mécanique générale moteur — culasses, joints, roulements, accessoires',
      'Freinage haute performance — Brembo, AP Racing, Pagid',
      'Géométrie 3D laser, équilibrage haute vitesse',
      'Climatisation, électricité automobile, capteurs, faisceaux',
    ],
    partners: ['Motul', 'Bosch', 'Brembo', 'Liqui Moly'],
  },
  {
    slug: 'preparation',
    number: '02',
    title: 'Préparation & Performance',
    shortTitle: 'Préparation',
    tagline: 'Optimiser, fiabiliser, transformer — pour la route ou la piste.',
    excerpt:
      'Optimisation moteur, suspension, freinage pour la route ou la compétition.',
    description:
      "Préparer une voiture, ce n'est pas pousser une puissance maximale. C'est trouver l'équilibre juste entre performance et fiabilité, en cohérence avec un usage. Que ce soit pour une journée circuit, une montée historique ou simplement un caractère affirmé sur route, nous concevons chaque préparation autour du pilote et de l'usage.",
    icon: Gauge,
    cover:
      'https://images.unsplash.com/photo-1632823469887-fa1bdd9d6d3a?w=1600&auto=format&fit=crop&q=80',
    features: [
      'Reprogrammation moteur sur banc de puissance — atmo, turbo, hybride',
      'Échappements sport — Akrapovič, Inconel, fabrication sur mesure',
      'Suspensions Öhlins, Bilstein, KW — réglage piste et route',
      'Freinage gros diamètre, étriers monoblocs, durites aviation',
      'Allègements et arceaux homologués FIA',
      'Prestation track day complète — préparation, transport, assistance',
    ],
    partners: ['Öhlins', 'Bilstein', 'KW', 'Akrapovič', 'AP Racing'],
  },
  {
    slug: 'restauration',
    number: '03',
    title: 'Restauration',
    shortTitle: 'Restauration',
    tagline: "Faire revivre une voiture sans effacer son histoire.",
    excerpt:
      'Restauration complète de véhicules anciens et de course.',
    description:
      "Une restauration réussie n'est pas une remise à neuf, c'est une seconde vie. Nous travaillons en partenariat avec des artisans choisis — sellier, peintre, tôlier, chromeur — pour préserver l'âme d'une voiture tout en lui offrant la fiabilité d'un usage moderne. Chaque projet est documenté du démontage à la livraison.",
    icon: Sparkles,
    cover:
      'https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?w=1600&auto=format&fit=crop&q=80',
    features: [
      'Restauration mécanique complète — moteur, boîte, ponts, train roulant',
      'Carrosserie, tôlerie, peinture concours — partenaires artisans choisis',
      'Sellerie cuir et tissu en collaboration avec maîtres selliers',
      "Recherche de pièces d'origine, fabrication sur mesure si nécessaire",
      'Préparation pour rallyes historiques (FIA, Tour Auto, Le Mans Classic)',
      'Documentation photo et vidéo complète du projet',
    ],
    partners: ['Porsche Classic', 'Tour Auto', 'FIVA'],
  },
  {
    slug: 'achat-vente',
    number: '04',
    title: 'Achat & Vente',
    shortTitle: 'Achat & Vente',
    tagline: 'Sourcing, expertise, accompagnement.',
    excerpt:
      'Sélection de véhicules de passion et accompagnement personnalisé.',
    description:
      "Acheter ou vendre une voiture de caractère est rarement une transaction anodine. Notre rôle est d'apporter la connaissance technique du marché, le réseau et la rigueur d'expertise nécessaire pour sécuriser chaque opération. Nous sourcing en Europe et accompagnons jusqu'à la mise en circulation suisse.",
    icon: Handshake,
    cover:
      'https://images.unsplash.com/photo-1588258524675-5f0a1d4eea69?w=1600&auto=format&fit=crop&q=80',
    features: [
      'Sourcing personnalisé — recherche selon cahier des charges précis',
      'Expertise pré-achat indépendante — mécanique, châssis, historique',
      'Estimation et mise en valeur pour la vente',
      "Démarches d'importation, expertise OFROU, immatriculation",
      'Stockage hivernal sécurisé, mise en route printanière',
      'Médiation entre vendeurs et acheteurs collectionneurs',
    ],
    partners: ['Classic Trader', 'Bring a Trailer', 'OFROU'],
  },
];

export const getService = (slug: ServiceSlug) => services.find((s) => s.slug === slug);
