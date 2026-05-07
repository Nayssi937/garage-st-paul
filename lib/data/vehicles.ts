// content: réel — données extraites du site officiel garagesp.ch (occasions actuelles).

export type VehicleCategory = 'occasion' | 'restauree' | 'collection';
export type VehicleStatus = 'available' | 'reserved' | 'sold';

export type Vehicle = {
  slug: string;
  reference: string;
  brand: string;
  model: string;
  year: number;
  mileage: number;
  price: number;
  status: VehicleStatus;
  category: VehicleCategory;
  categoryLabel: string;
  fuel: 'Essence' | 'Diesel' | 'Hybride' | 'Électrique';
  gearbox: 'Manuelle' | 'Automatique';
  power: string;
  cover: string;
  gallery: string[];
  excerpt: string;
  description: string;
  specs: { label: string; value: string }[];
  highlights: string[];
  equipment: string[];
  featured?: boolean;
};

const PHOTO = (path: string) =>
  `https://www.garagesp.ch/uploads/8/6/0/3/86039312/${path}`;

export const vehicles: Vehicle[] = [
  {
    slug: 'vw-t2-1977',
    reference: 'GSP-T2-1977',
    brand: 'Volkswagen',
    model: 'T2 — Combi',
    year: 1977,
    mileage: 0,
    price: 54000,
    status: 'available',
    category: 'restauree',
    categoryLabel: 'Restauré',
    fuel: 'Essence',
    gearbox: 'Manuelle',
    power: '—',
    cover: PHOTO('20250221-101859_orig.jpg'),
    gallery: [
      PHOTO('20250221-101859_orig.jpg'),
      PHOTO('20250221-101641_orig.jpg'),
      PHOTO('20250221-101846_orig.jpg'),
      PHOTO('20250221-101705_orig.jpg'),
    ],
    excerpt:
      "Restauration intégrale réalisée dans notre atelier — moteur, partie électrique, boîte, peinture et sellerie tous neufs.",
    description:
      "Volkswagen T2 de 1977 entièrement restauré dans notre atelier. Moteur neuf, partie électrique neuve, boîte à vitesses neuve, peinture neuve, tapisseries neuves en cuir et tissu. Une icône allemande remise à zéro avec le soin que cette voiture mérite — prête à reprendre la route comme au premier jour.",
    specs: [
      { label: 'Année', value: '1977' },
      { label: 'État', value: 'Restauré intégral' },
      { label: 'Carburant', value: 'Essence' },
      { label: 'Boîte', value: 'Manuelle' },
      { label: 'Restauration', value: 'Intégrale, atelier St-Paul' },
    ],
    highlights: [
      'Moteur neuf',
      'Partie électrique neuve',
      'Boîte à vitesses neuve',
      'Peinture neuve',
      'Tapisseries neuves en cuir et tissu',
    ],
    equipment: [
      'Moteur refait neuf',
      'Partie électrique entièrement refaite',
      'Boîte à vitesses neuve',
      'Carrosserie redressée et peinte',
      'Sellerie cuir et tissu neuve',
      'Restauration complète documentée',
    ],
    featured: true,
  },
  {
    slug: 'vw-coccinelle-1979',
    reference: 'GSP-COX-1979',
    brand: 'Volkswagen',
    model: 'Coccinelle',
    year: 1979,
    mileage: 0,
    price: 33000,
    status: 'available',
    category: 'restauree',
    categoryLabel: 'Restauré',
    fuel: 'Essence',
    gearbox: 'Manuelle',
    power: '—',
    cover: PHOTO('img-1525_orig.jpg'),
    gallery: [
      PHOTO('img-1525_orig.jpg'),
      PHOTO('img-1527_orig.jpg'),
      PHOTO('img-1528_orig.jpg'),
      PHOTO('img-1530_orig.jpg'),
    ],
    excerpt:
      'Coccinelle restaurée — moteur révisé, peinture neuve et tapisseries neuves.',
    description:
      "Volkswagen Coccinelle de 1979 restaurée dans notre atelier. Moteur révisé, peinture refaite à neuf, tapisseries neuves. Une voiture culte préservée et remise en condition d'usage quotidien — l'authenticité d'origine, la fiabilité d'aujourd'hui.",
    specs: [
      { label: 'Année', value: '1979' },
      { label: 'État', value: 'Restauré' },
      { label: 'Carburant', value: 'Essence' },
      { label: 'Boîte', value: 'Manuelle' },
      { label: 'Restauration', value: 'Atelier St-Paul' },
    ],
    highlights: ['Moteur révisé', 'Peinture neuve', 'Tapisseries neuves'],
    equipment: [
      'Moteur révisé',
      'Peinture refaite à neuf',
      'Sellerie neuve',
      'Carrosserie remise en état',
    ],
    featured: true,
  },
];

export const getVehicle = (slug: string) => vehicles.find((v) => v.slug === slug);
export const featuredVehicles = vehicles.filter((v) => v.featured).slice(0, 3);
export const availableVehicles = vehicles.filter((v) => v.status !== 'sold');
export const vehicleBrands = Array.from(new Set(vehicles.map((v) => v.brand))).sort();
export const vehicleCategories: { value: VehicleCategory; label: string }[] = [
  { value: 'occasion', label: 'Occasion' },
  { value: 'restauree', label: 'Restauré' },
  { value: 'collection', label: 'Collection' },
];
