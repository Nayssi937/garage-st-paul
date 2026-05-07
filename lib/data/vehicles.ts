// content: demo — données de démonstration plausibles, à valider par le client.

export type VehicleCategory = 'occasion-premium' | 'familiale' | 'sportive' | 'collection';
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

export const vehicles: Vehicle[] = [
  {
    slug: 'bmw-330e-xdrive-2021',
    reference: 'GSP-2401',
    brand: 'BMW',
    model: '330e xDrive',
    year: 2021,
    mileage: 24500,
    price: 42500,
    status: 'available',
    category: 'occasion-premium',
    categoryLabel: 'Occasion premium',
    fuel: 'Hybride',
    gearbox: 'Automatique',
    power: '292 ch',
    cover:
      'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=1600&auto=format&fit=crop&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=1600&auto=format&fit=crop&q=85',
      'https://images.unsplash.com/photo-1617531653332-bd46c24f2068?w=1600&auto=format&fit=crop&q=85',
      'https://images.unsplash.com/photo-1553440569-bcc63803a83d?w=1600&auto=format&fit=crop&q=85',
    ],
    excerpt:
      'Pack M Sport intégral, hybride rechargeable, suivi BMW Suisse complet, garantie 12 mois.',
    description:
      "Une 330e xDrive en parfait état, suivi BMW intégral. Hybride rechargeable de 292 ch combinés, transmission intégrale xDrive et boîte Steptronic 8 rapports. Pack M Sport complet, jantes 19'', freinage M et différentiel sport. Une berline qui réconcilie sobriété d'usage et plaisir de conduite.",
    specs: [
      { label: 'Année', value: '2021' },
      { label: 'Kilométrage', value: "24'500 km" },
      { label: 'Cylindrée', value: '2.0L hybride rechargeable' },
      { label: 'Puissance', value: '292 ch combinés' },
      { label: 'Transmission', value: 'xDrive intégrale' },
      { label: 'Boîte', value: 'Automatique 8 rapports' },
      { label: 'Couleur', value: 'Saphirschwarz métallisé' },
      { label: 'Sellerie', value: 'Cuir Vernasca noir' },
      { label: 'Garantie', value: '12 mois (extension possible)' },
    ],
    highlights: [
      'Pack M Sport intégral',
      'Toit ouvrant panoramique',
      'Cockpit Professional',
      'Sièges sport chauffants',
      'Caméra 360° + Park Assist Plus',
    ],
    equipment: [
      'Pack M Sport',
      'Toit ouvrant panoramique',
      'Sièges sport cuir Vernasca',
      'Volant M en cuir',
      'Cockpit Professional',
      'Hi-Fi Harman Kardon',
      'Caméra 360°',
      'Régulateur adaptatif',
      'Pack éclairage LED Adaptive',
      'Freinage M Sport',
    ],
    featured: true,
  },
  {
    slug: 'mercedes-benz-280-sl-1971',
    reference: 'GSP-2402',
    brand: 'Mercedes-Benz',
    model: '280 SL',
    year: 1971,
    mileage: 89000,
    price: 138000,
    status: 'available',
    category: 'collection',
    categoryLabel: 'Collection',
    fuel: 'Essence',
    gearbox: 'Manuelle',
    power: '170 ch',
    cover:
      'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=1600&auto=format&fit=crop&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=1600&auto=format&fit=crop&q=85',
      'https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=1600&auto=format&fit=crop&q=85',
    ],
    excerpt:
      'Pagode W113, dernière année de production, boîte mécanique recherchée, restauration mécanique 2019.',
    description:
      "Une 280 SL Pagode de 1971 dans une configuration recherchée : boîte mécanique 4 rapports, hardtop d'origine, sellerie cuir cognac patinée juste comme il faut. Restauration mécanique complète en 2019 (moteur, freinage, suspension). Châssis sain, peinture d'usage cohérente. Une voiture pour rouler, pas une pièce de musée.",
    specs: [
      { label: 'Année', value: '1971' },
      { label: 'Kilométrage', value: "89'000 km" },
      { label: 'Cylindrée', value: '2.8L 6 cyl. en ligne' },
      { label: 'Puissance', value: '170 ch' },
      { label: 'Boîte', value: 'Manuelle 4 rapports' },
      { label: 'Transmission', value: 'Propulsion' },
      { label: 'Couleur', value: 'Beige clair' },
      { label: 'Sellerie', value: 'Cuir cognac' },
    ],
    highlights: [
      'Boîte mécanique 4 rapports',
      "Hardtop d'origine + capote noire",
      'Restauration mécanique 2019',
      'Matching numbers',
      'Livre de service complet',
    ],
    equipment: [
      "Hardtop d'origine",
      'Capote noire neuve',
      'Sellerie cuir cognac',
      'Volant bois Nardi',
      'Becker Mexico restauré',
      'Restauration moteur 2019',
      'Freinage refait à neuf',
    ],
    featured: true,
  },
  {
    slug: 'range-rover-sport-hse-2019',
    reference: 'GSP-2403',
    brand: 'Land Rover',
    model: 'Range Rover Sport HSE',
    year: 2019,
    mileage: 58000,
    price: 56900,
    status: 'available',
    category: 'familiale',
    categoryLabel: 'Familiale',
    fuel: 'Diesel',
    gearbox: 'Automatique',
    power: '306 ch',
    cover:
      'https://images.unsplash.com/photo-1606016159991-dfe4f2746ad5?w=1600&auto=format&fit=crop&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1606016159991-dfe4f2746ad5?w=1600&auto=format&fit=crop&q=85',
      'https://images.unsplash.com/photo-1612825173281-9a193378527e?w=1600&auto=format&fit=crop&q=85',
    ],
    excerpt:
      'HSE Dynamic complet, suspension pneumatique, toit panoramique, première main suisse.',
    description:
      "Range Rover Sport HSE Dynamic SDV6 de 2019, première main suisse, suivi concession Land Rover. Moteur diesel 3.0L de 306 ch, transmission automatique 8 rapports, suspension pneumatique. Pack HSE Dynamic intégral, toit panoramique, sellerie Windsor Ebony, jantes 21''.",
    specs: [
      { label: 'Année', value: '2019' },
      { label: 'Kilométrage', value: "58'000 km" },
      { label: 'Cylindrée', value: '3.0L V6 diesel' },
      { label: 'Puissance', value: '306 ch / 700 Nm' },
      { label: 'Transmission', value: '4 roues motrices' },
      { label: 'Boîte', value: 'Automatique 8 rapports' },
      { label: 'Couleur', value: 'Indus Silver métallisé' },
      { label: 'Sellerie', value: 'Cuir Windsor Ebony' },
    ],
    highlights: [
      'Pack HSE Dynamic complet',
      'Suspension pneumatique adaptative',
      'Toit ouvrant panoramique',
      'Sellerie cuir Windsor Ebony',
      "Aides à la conduite niveau 2",
    ],
    equipment: [
      'Pack HSE Dynamic',
      'Suspension pneumatique',
      'Toit panoramique',
      'Sellerie cuir Windsor',
      'Meridian Surround Sound',
      'Caméras 360°',
      'Adaptive Cruise',
      "Jantes 21'' diamantées",
      'Attelage électrique',
    ],
    featured: true,
  },
  {
    slug: 'porsche-911-carrera-s-2018',
    reference: 'GSP-2404',
    brand: 'Porsche',
    model: '911 Carrera S',
    year: 2018,
    mileage: 36800,
    price: 119500,
    status: 'available',
    category: 'sportive',
    categoryLabel: 'Sportive',
    fuel: 'Essence',
    gearbox: 'Automatique',
    power: '420 ch',
    cover:
      'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=1600&auto=format&fit=crop&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=1600&auto=format&fit=crop&q=85',
    ],
    excerpt: 'Pack Sport Chrono, échappement sport PSE, suivi Porsche complet, deuxième main.',
    description:
      "Une 991.2 Carrera S restylée, configuration sportive complète. Moteur biturbo 3.0L de 420 ch, PDK, Sport Chrono, échappement sport PSE, PASM. Suivi Porsche complet, deuxième main suisse.",
    specs: [
      { label: 'Année', value: '2018' },
      { label: 'Kilométrage', value: "36'800 km" },
      { label: 'Cylindrée', value: '3.0L flat-6 biturbo' },
      { label: 'Puissance', value: '420 ch' },
      { label: 'Boîte', value: 'PDK 7 rapports' },
      { label: 'Transmission', value: 'Propulsion' },
    ],
    highlights: ['Pack Sport Chrono', 'Échappement sport PSE', 'PASM', 'Suivi Porsche intégral'],
    equipment: [
      'Pack Sport Chrono',
      'PSE échappement sport',
      'PASM',
      'Sièges Adaptive Sport Plus',
      'Bose Surround',
    ],
    featured: false,
  },
  {
    slug: 'audi-a6-avant-50-tdi-2020',
    reference: 'GSP-2405',
    brand: 'Audi',
    model: 'A6 Avant 50 TDI',
    year: 2020,
    mileage: 62300,
    price: 48900,
    status: 'available',
    category: 'familiale',
    categoryLabel: 'Familiale',
    fuel: 'Diesel',
    gearbox: 'Automatique',
    power: '286 ch',
    cover:
      'https://images.unsplash.com/photo-1614200187524-dc4b892acf16?w=1600&auto=format&fit=crop&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1614200187524-dc4b892acf16?w=1600&auto=format&fit=crop&q=85',
    ],
    excerpt: 'Pack S line complet, suspension pneumatique, Matrix LED, sellerie cuir Valcona.',
    description:
      "A6 Avant 50 TDI quattro avec pack S line complet. V6 3.0L TDI mild-hybrid de 286 ch.",
    specs: [
      { label: 'Année', value: '2020' },
      { label: 'Kilométrage', value: "62'300 km" },
      { label: 'Puissance', value: '286 ch' },
    ],
    highlights: ['Pack S line', 'Suspension pneumatique', 'Matrix LED', 'Virtual Cockpit Plus'],
    equipment: ['Pack S line', 'Suspension pneumatique', 'Matrix LED'],
    featured: false,
  },
  {
    slug: 'volvo-xc60-recharge-t8-2022',
    reference: 'GSP-2406',
    brand: 'Volvo',
    model: 'XC60 Recharge T8',
    year: 2022,
    mileage: 18900,
    price: 54500,
    status: 'available',
    category: 'familiale',
    categoryLabel: 'Familiale',
    fuel: 'Hybride',
    gearbox: 'Automatique',
    power: '390 ch',
    cover:
      'https://images.unsplash.com/photo-1542362567-b07e54358753?w=1600&auto=format&fit=crop&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1542362567-b07e54358753?w=1600&auto=format&fit=crop&q=85',
    ],
    excerpt: 'Hybride rechargeable 390 ch combinés, Pack Inscription, garantie constructeur 2025.',
    description:
      "XC60 Recharge T8 dans la finition Inscription, hybride rechargeable de 390 ch combinés.",
    specs: [
      { label: 'Année', value: '2022' },
      { label: 'Kilométrage', value: "18'900 km" },
      { label: 'Puissance', value: '390 ch combinés' },
    ],
    highlights: ['Pack Inscription', 'Toit panoramique', 'Bowers & Wilkins'],
    equipment: ['Pack Inscription', 'Toit panoramique', 'Bowers & Wilkins'],
    featured: false,
  },
];

export const getVehicle = (slug: string) => vehicles.find((v) => v.slug === slug);
export const featuredVehicles = vehicles.filter((v) => v.featured).slice(0, 3);
export const availableVehicles = vehicles.filter((v) => v.status !== 'sold');
export const vehicleBrands = Array.from(new Set(vehicles.map((v) => v.brand))).sort();
export const vehicleCategories: { value: VehicleCategory; label: string }[] = [
  { value: 'occasion-premium', label: 'Occasion premium' },
  { value: 'familiale', label: 'Familiale' },
  { value: 'sportive', label: 'Sportive' },
  { value: 'collection', label: 'Collection' },
];
