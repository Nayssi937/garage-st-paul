import type { LucideIcon } from 'lucide-react';
import { Wrench, Hammer, Zap, CircleDot, Sparkles, Car } from 'lucide-react';

export type ServiceSlug =
  | 'entretien'
  | 'carrosserie'
  | 'service-express'
  | 'pneus'
  | 'restauration'
  | 'occasions';

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

const PHOTOS = {
  services: 'https://www.garagesp.ch/uploads/8/6/0/3/86039312/services_orig.jpg',
  carrosserie: 'https://www.garagesp.ch/uploads/8/6/0/3/86039312/carroserie2_orig.jpg',
  occasion: 'https://www.garagesp.ch/uploads/8/6/0/3/86039312/occasion_1_orig.jpg',
  vintage: 'https://www.garagesp.ch/uploads/8/6/0/3/86039312/p8081102_1_orig.jpg',
};

export const services: Service[] = [
  {
    slug: 'entretien',
    number: '01',
    title: 'Entretien',
    shortTitle: 'Entretien',
    excerpt:
      'Entretien complet de votre véhicule, tous types de moteurs.',
    description:
      "Entretien complet de votre véhicule — tous types de moteurs, contrôle anti-pollution, contrôle technique, climatisation. Lavage complet (châssis et moteur) à la main. Notre atelier prend en charge votre voiture avec rigueur, du diagnostic à la restitution.",
    icon: Wrench,
    cover: PHOTOS.services,
    features: [
      'Tous types de moteurs (essence, diesel, hybride)',
      'Contrôle anti-pollution',
      'Contrôle technique (préparation visite OFROU)',
      'Climatisation : recharge, désinfection, étanchéité',
      'Lavage complet à la main — châssis et moteur',
      'Devis détaillé avant toute intervention',
    ],
  },
  {
    slug: 'carrosserie',
    number: '02',
    title: 'Carrosserie',
    shortTitle: 'Carrosserie',
    excerpt:
      'Réparation de tous types de carrosseries. Voiture de remplacement gratuite.',
    description:
      "Réparation de tous types de carrosseries — petits et gros chocs, débosselage, peinture. Pendant la durée des réparations, nous mettons gracieusement un véhicule à votre disposition. Notre atelier carrosserie est l'un de nos savoir-faire historiques.",
    icon: Hammer,
    cover: PHOTOS.carrosserie,
    features: [
      'Réparation tous chocs, petits et gros',
      'Débosselage, redressage de châssis',
      "Peinture cabine — toutes teintes constructeur",
      "Voiture de remplacement gratuite pendant l'intervention",
      'Prise en charge avec votre assurance',
      'Restauration carrosserie de véhicules anciens',
    ],
  },
  {
    slug: 'service-express',
    number: '03',
    title: 'Service Express',
    shortTitle: 'Service express',
    excerpt:
      'Sans rendez-vous : batterie, pneus, freins, phares, niveaux.',
    description:
      "Pour les interventions rapides du quotidien, nous vous accueillons sans rendez-vous. Batterie, amortisseurs, freins, phares, essuie-glaces, contrôle des niveaux : tout ce qu'il faut pour repartir en sécurité, en quelques dizaines de minutes.",
    icon: Zap,
    cover: PHOTOS.services,
    features: [
      'Sans rendez-vous, en venant directement à l\'atelier',
      'Remplacement batterie',
      'Pneus : montage, équilibrage, permutation',
      'Amortisseurs et freins (plaquettes, disques)',
      'Phares, ampoules, essuie-glaces',
      'Contrôle complet des niveaux',
    ],
  },
  {
    slug: 'pneus',
    number: '04',
    title: 'Pneus',
    shortTitle: 'Pneus',
    excerpt:
      'Vente et changement de pneus été-hiver toutes marques. Stockage possible.',
    description:
      "Vente et changement de pneus été-hiver, toutes marques, à prix imbattables. Notre service inclut la possibilité de stocker vos pneus saisonniers chez nous — un gain de place chez vous et une garantie de bon état au moment du remontage.",
    icon: CircleDot,
    cover: PHOTOS.services,
    features: [
      'Pneus été et hiver toutes marques',
      'Prix imbattables — meilleur rapport qualité/prix',
      'Montage et équilibrage immédiat',
      'Permutation saisonnière',
      'Stockage saisonnier de vos pneus',
      'Conseil sur le choix du pneu selon votre usage',
    ],
  },
  {
    slug: 'restauration',
    number: '05',
    title: 'Restauration de véhicules anciens',
    shortTitle: 'Restauration',
    excerpt:
      "Restauration complète de véhicules de collection — moteur, carrosserie, sellerie.",
    description:
      "La restauration de véhicules anciens fait partie de notre savoir-faire. Moteur révisé ou neuf, carrosserie et peinture, partie électrique, sellerie en cuir et tissu, boîte de vitesses : nous redonnons à votre voiture l'éclat de ses débuts, sans en effacer l'histoire.",
    icon: Sparkles,
    cover: PHOTOS.vintage,
    features: [
      "Moteur révisé ou refait neuf",
      'Carrosserie et peinture refaites',
      'Partie électrique remise à neuf',
      'Sellerie cuir et tissu refaite',
      'Boîte à vitesses révisée ou refaite',
      "Documentation photo de l'intervention",
    ],
  },
  {
    slug: 'occasions',
    number: '06',
    title: 'Vente de véhicules',
    shortTitle: 'Occasions',
    excerpt:
      "Sélection de véhicules d'occasion expertisés et de voitures restaurées.",
    description:
      "Notre stock de véhicules d'occasion est issu d'un sourcing soigneux. Pour les amateurs de classiques, nous proposons aussi des voitures entièrement restaurées par nos soins. Chaque véhicule est expertisé avant mise en vente, avec une documentation complète.",
    icon: Car,
    cover: PHOTOS.occasion,
    features: [
      "Véhicules d'occasion toutes marques",
      'Voitures restaurées dans notre atelier',
      'Expertise complète avant mise en vente',
      'Reprise de votre véhicule possible',
      "Accompagnement immatriculation et mise en circulation",
      'Garantie sur les organes principaux',
    ],
  },
];

export const getService = (slug: ServiceSlug) => services.find((s) => s.slug === slug);
export const homepageServices = services.slice(0, 4); // Entretien, Carrosserie, Express, Pneus
