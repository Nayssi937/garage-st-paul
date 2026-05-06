export type VehicleCategory = 'sport' | 'collection' | 'competition';
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
  fuel: 'Essence' | 'Diesel' | 'Hybride';
  gearbox: 'Manuelle' | 'Automatique';
  power: string;
  cover: string;
  gallery: string[];
  excerpt: string;
  description: string;
  specs: { label: string; value: string }[];
  highlights: string[];
};

export const vehicles: Vehicle[] = [
  {
    slug: 'porsche-911-3-2-carrera-1986',
    reference: 'LS-2401',
    brand: 'Porsche',
    model: '911 3.2 Carrera',
    year: 1986,
    mileage: 142000,
    price: 89500,
    status: 'available',
    category: 'collection',
    categoryLabel: 'Collection',
    fuel: 'Essence',
    gearbox: 'Manuelle',
    power: '231 ch',
    cover:
      'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=1600&auto=format&fit=crop&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=1600&auto=format&fit=crop&q=85',
      'https://images.unsplash.com/photo-1542362567-b07e54358753?w=1600&auto=format&fit=crop&q=85',
    ],
    excerpt: 'Coupé G50, peinture Bleu Marine d\'origine, intérieur cuir crème, matching numbers.',
    description:
      "Cette 3.2 Carrera de fin de série G50 est une voiture matching numbers, conservée par un même propriétaire pendant 28 ans. Carnet d'entretien complet, factures depuis l'origine, deuxième propriétaire suisse. Mécanique récemment révisée chez nous.",
    specs: [
      { label: 'Année', value: '1986' },
      { label: 'Kilométrage', value: '142 000 km' },
      { label: 'Moteur', value: '3.2L flat-6' },
      { label: 'Puissance', value: '231 ch' },
      { label: 'Boîte', value: 'G50 manuelle 5 vitesses' },
      { label: 'Couleur', value: 'Bleu Marine — code 39A' },
    ],
    highlights: [
      'Matching numbers, livré neuf en Suisse',
      'Boîte G50 — la plus convoitée des 3.2',
      'Deuxième propriétaire seulement',
      'Service complet effectué chez nous',
    ],
  },
  {
    slug: 'lancia-delta-integrale-evo-2-1994',
    reference: 'LS-2402',
    brand: 'Lancia',
    model: 'Delta Integrale Evo II',
    year: 1994,
    mileage: 76000,
    price: 142000,
    status: 'reserved',
    category: 'sport',
    categoryLabel: 'Sport',
    fuel: 'Essence',
    gearbox: 'Manuelle',
    power: '215 ch',
    cover:
      'https://images.unsplash.com/photo-1614200187524-dc4b892acf16?w=1600&auto=format&fit=crop&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1614200187524-dc4b892acf16?w=1600&auto=format&fit=crop&q=85',
    ],
    excerpt: 'Edizione Finale, jamais accidentée, second propriétaire, dossier complet.',
    description:
      "Une des dernières Integrale produites, Edizione Finale numérotée, conservée comme une pièce de musée. Service complet récent, prête à rouler ou à exposer.",
    specs: [
      { label: 'Année', value: '1994' },
      { label: 'Kilométrage', value: '76 000 km' },
      { label: 'Moteur', value: '2.0L turbo 16V' },
      { label: 'Puissance', value: '215 ch' },
      { label: 'Transmission', value: '4 roues motrices' },
      { label: 'Particularité', value: 'Edizione Finale numérotée' },
    ],
    highlights: ['Edizione Finale numérotée', 'Jamais accidentée', 'Dossier complet'],
  },
  {
    slug: 'bmw-m3-e46-csl-2003',
    reference: 'LS-2403',
    brand: 'BMW',
    model: 'M3 E46 CSL',
    year: 2003,
    mileage: 96000,
    price: 138000,
    status: 'available',
    category: 'sport',
    categoryLabel: 'Sport',
    fuel: 'Essence',
    gearbox: 'Manuelle',
    power: '360 ch',
    cover:
      'https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?w=1600&auto=format&fit=crop&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?w=1600&auto=format&fit=crop&q=85',
    ],
    excerpt: 'CSL Silbergrau, livraison Suisse, conversion boîte mécanique effectuée chez nous.',
    description:
      "Une des CSL livrées neuves en Suisse, conversion boîte mécanique 6 rapports effectuée chez nous selon kit Karbonius. Moteur S54 frais, suspension Öhlins, train roulant retravaillé.",
    specs: [
      { label: 'Année', value: '2003' },
      { label: 'Kilométrage', value: '96 000 km' },
      { label: 'Moteur', value: 'S54 3.2L 6 cyl.' },
      { label: 'Puissance', value: '360 ch' },
      { label: 'Boîte', value: 'Manuelle 6 (conversion)' },
    ],
    highlights: [
      'Livraison neuve Suisse',
      'Conversion boîte mécanique récente',
      'Suspension Öhlins',
      'S54 fraîchement révisé',
    ],
  },
  {
    slug: 'porsche-964-rs-1992',
    reference: 'LS-2404',
    brand: 'Porsche',
    model: '964 RS',
    year: 1992,
    mileage: 64000,
    price: 285000,
    status: 'available',
    category: 'collection',
    categoryLabel: 'Collection',
    fuel: 'Essence',
    gearbox: 'Manuelle',
    power: '260 ch',
    cover:
      'https://images.unsplash.com/photo-1611821064430-0d40291922d2?w=1600&auto=format&fit=crop&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1611821064430-0d40291922d2?w=1600&auto=format&fit=crop&q=85',
    ],
    excerpt: 'RS Touring Grand Prix Weiss, matching, carnet certifié, livraison neuve allemande.',
    description:
      'Une référence du marché — 964 RS Touring matching numbers, peinture d\'origine, intérieur préservé. Carnet certifié Porsche Classic.',
    specs: [
      { label: 'Année', value: '1992' },
      { label: 'Kilométrage', value: '64 000 km' },
      { label: 'Moteur', value: '3.6L flat-6' },
      { label: 'Puissance', value: '260 ch' },
      { label: 'Particularité', value: 'Pack Touring' },
      { label: 'Couleur', value: 'Grand Prix Weiss' },
    ],
    highlights: [
      'Matching numbers',
      'Peinture d\'origine',
      'Carnet certifié Porsche Classic',
    ],
  },
  {
    slug: 'lotus-elise-cup-r-2014',
    reference: 'LS-2405',
    brand: 'Lotus',
    model: 'Elise Cup R',
    year: 2014,
    mileage: 32000,
    price: 58500,
    status: 'available',
    category: 'competition',
    categoryLabel: 'Compétition',
    fuel: 'Essence',
    gearbox: 'Manuelle',
    power: '220 ch',
    cover:
      'https://images.unsplash.com/photo-1563720223185-11003d516935?w=1600&auto=format&fit=crop&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1563720223185-11003d516935?w=1600&auto=format&fit=crop&q=85',
    ],
    excerpt: 'Voiture de circuit pure, arceau, extincteur, baquets, prête à rouler.',
    description:
      "Préparée pour le track day en spec Cup R d'usine, suivi par nos soins, prête à enchaîner les saisons.",
    specs: [
      { label: 'Année', value: '2014' },
      { label: 'Kilométrage', value: '32 000 km' },
      { label: 'Moteur', value: '1.8L compresseur' },
      { label: 'Puissance', value: '220 ch' },
      { label: 'Poids', value: '798 kg' },
    ],
    highlights: [
      'Arceau, baquets, extincteur',
      'Spec Cup R d\'usine',
      'Suivi mécanique chez nous',
    ],
  },
  {
    slug: 'alfa-romeo-giulia-sprint-gt-1965',
    reference: 'LS-2406',
    brand: 'Alfa Romeo',
    model: 'Giulia Sprint GT',
    year: 1965,
    mileage: 88500,
    price: 64000,
    status: 'available',
    category: 'collection',
    categoryLabel: 'Collection',
    fuel: 'Essence',
    gearbox: 'Manuelle',
    power: '106 ch',
    cover:
      'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=1600&auto=format&fit=crop&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=1600&auto=format&fit=crop&q=85',
    ],
    excerpt: 'Bertone scalino, restauration mécanique récente, peinture Rosso Alfa rénovée.',
    description:
      'Bertone scalino première série, châssis sain, mécanique entièrement reprise il y a 8 000 km. Document FIA en cours. Idéale pour rallyes historiques.',
    specs: [
      { label: 'Année', value: '1965' },
      { label: 'Kilométrage', value: '88 500 km' },
      { label: 'Moteur', value: '1.6L bialbero' },
      { label: 'Puissance', value: '106 ch' },
      { label: 'Couleur', value: 'Rosso Alfa' },
    ],
    highlights: [
      'Carrosserie scalino première série',
      'Mécanique fraîchement reprise',
      'Idéale rallyes historiques',
    ],
  },
];

export const getVehicle = (slug: string) => vehicles.find((v) => v.slug === slug);
export const availableVehicles = vehicles.filter((v) => v.status !== 'sold');
export const vehicleBrands = Array.from(new Set(vehicles.map((v) => v.brand))).sort();
export const vehicleCategories: { value: VehicleCategory; label: string }[] = [
  { value: 'collection', label: 'Collection' },
  { value: 'sport', label: 'Sport' },
  { value: 'competition', label: 'Compétition' },
];
