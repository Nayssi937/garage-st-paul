export type Testimonial = {
  id: string;
  quote: string;
  author: string;
  role: string;
  vehicle?: string;
};

export const testimonials: Testimonial[] = [
  {
    id: 't1',
    quote:
      "On confie une voiture à LS Automobiles. On reçoit en retour une compréhension. C'est rare, et précieux.",
    author: 'M. Roussel',
    role: 'Collectionneur, Genève',
    vehicle: 'Porsche 356 SC',
  },
  {
    id: 't2',
    quote:
      "Trois préparations confiées en cinq ans, zéro retour atelier non planifié. Quand on parle fiabilité, c'est ça que ça veut dire.",
    author: 'D. Berger',
    role: 'Gentleman driver, Lausanne',
    vehicle: 'BMW E30 M3',
  },
  {
    id: 't3',
    quote:
      "Une expertise pré-achat qui m'a évité une grosse erreur. Et une seconde qui m'a fait acheter, sereinement, la bonne voiture.",
    author: 'P. Charvet',
    role: 'Architecte, Neuchâtel',
    vehicle: 'Alpine A110',
  },
  {
    id: 't4',
    quote:
      "Communication exemplaire pendant 11 mois de restauration. Photos hebdomadaires, devis détaillés, aucune surprise.",
    author: 'Mme Dubois',
    role: 'Collectionneuse, Vevey',
    vehicle: 'Porsche 911 ST',
  },
  {
    id: 't5',
    quote:
      "Trois saisons de track day avec une E46 préparée par leurs soins. Aucune casse, aucun souci, juste du plaisir.",
    author: 'F. Martin',
    role: 'Pilote amateur, Sion',
    vehicle: 'BMW M3 E46',
  },
];
