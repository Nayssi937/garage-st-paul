import type { LucideIcon } from 'lucide-react';
import { Wrench, Car, ClipboardCheck, CircleDot } from 'lucide-react';

export type ServiceSlug =
  | 'entretien-reparation'
  | 'vente-vehicules'
  | 'diagnostic-technique'
  | 'pneus-geometrie';

export type Service = {
  slug: ServiceSlug;
  number: string;
  title: string;
  shortTitle: string;
  excerpt: string;
  description: string;
  icon: LucideIcon;
  cover: string;
  features: string[];
};

export const services: Service[] = [
  {
    slug: 'entretien-reparation',
    number: '01',
    title: 'Entretien & Réparation',
    shortTitle: 'Entretien',
    excerpt: "Un service complet pour l'entretien et la réparation de toutes marques.",
    description:
      "L'entretien d'un véhicule, c'est une affaire de précision et de discipline. Chaque intervention est planifiée, documentée et suivie par le même mécanicien d'un bout à l'autre — pour que vous repartiez avec une voiture saine, durablement. Nous travaillons toutes marques avec la même rigueur.",
    icon: Wrench,
    cover:
      'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=1600&auto=format&fit=crop&q=85',
    features: [
      'Service constructeur, vidange, freinage, distribution, embrayage',
      'Mécanique générale moteur — joints, accessoires, refroidissement',
      "Climatisation : recharge, désinfection, contrôle d'étanchéité",
      'Préparation contrôle technique cantonal',
      'Devis détaillé avant toute intervention',
      'Reprise systématique des points de contrôle de sécurité',
    ],
  },
  {
    slug: 'vente-vehicules',
    number: '02',
    title: 'Vente de Véhicules',
    shortTitle: 'Vente',
    excerpt: "Véhicules neufs et d'occasion sélectionnés avec soin, toutes marques.",
    description:
      "Notre sélection de véhicules d'occasion est issue d'un sourcing rigoureux : Suisse en priorité, expertise pré-achat systématique, contrôle 120 points et garantie 12 mois minimum. Reprise transparente, financement et livraison clé en main.",
    icon: Car,
    cover:
      'https://images.unsplash.com/photo-1542362567-b07e54358753?w=1600&auto=format&fit=crop&q=85',
    features: [
      'Sélection premium toutes marques (BMW, Mercedes, Audi, Porsche, Range Rover…)',
      'Contrôle 120 points + expertise mécanique avant mise en vente',
      'Garantie 12 mois minimum, extensions possibles',
      'Reprise transparente de votre véhicule actuel',
      'Accompagnement financement et leasing',
      'Livraison clé en main : carte grise, plaques, mise en circulation',
    ],
  },
  {
    slug: 'diagnostic-technique',
    number: '03',
    title: 'Diagnostic & Technique',
    shortTitle: 'Diagnostic',
    excerpt: 'Technologie de pointe et expertise pour un diagnostic précis et fiable.',
    description:
      "Un véhicule moderne, c'est près de soixante calculateurs qui dialoguent en permanence. Quand un voyant s'allume, l'enjeu n'est pas de l'éteindre, mais de comprendre. Notre équipement multi-marques et nos protocoles constructeurs nous permettent de poser un diagnostic précis.",
    icon: ClipboardCheck,
    cover:
      'https://images.unsplash.com/photo-1632823469887-fa1bdd9d6d3a?w=1600&auto=format&fit=crop&q=85',
    features: [
      'Valise diagnostic multi-marques (Bosch KTS, Autel, OBD constructeurs)',
      'Lecture défauts moteur, ABS, airbag, BVA, climatisation',
      'Codage et programmation calculateurs après remplacement',
      'Expertise pré-achat indépendante (mécanique + électronique + historique)',
      'Préparation au contrôle technique cantonal',
      'Rapport écrit avec recommandations priorisées',
    ],
  },
  {
    slug: 'pneus-geometrie',
    number: '04',
    title: 'Pneus & Géométrie',
    shortTitle: 'Pneus',
    excerpt: 'Un service pneus complet et un réglage de géométrie pour votre sécurité.',
    description:
      "Le pneu, c'est la seule chose qui vous relie à la route — quatre empreintes de la taille d'une carte postale. Nous montons, équilibrons et stockons vos pneus avec le soin que cela mérite, et notre banc de géométrie 3D nous permet d'optimiser le comportement de votre véhicule à la fraction de millimètre près.",
    icon: CircleDot,
    cover:
      'https://images.unsplash.com/photo-1607860108855-64acf2078ed9?w=1600&auto=format&fit=crop&q=85',
    features: [
      'Montage, équilibrage et permutation toutes tailles (jusqu\'à 23")',
      'Géométrie 3D laser haute précision — train avant et arrière',
      'Hôtel à pneus saisonnier : stockage climatisé, lavage, contrôle',
      'Marques premium : Michelin, Continental, Pirelli, Bridgestone',
      'Conseil sur le choix du pneu selon usage',
      'Réparation crevaison et rechapage pneus haut de gamme',
    ],
  },
];

export const getService = (slug: ServiceSlug) => services.find((s) => s.slug === slug);
