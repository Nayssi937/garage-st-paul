// content: demo — articles de démonstration plausibles, à valider par le client.

export type NewsCategory = 'evenements' | 'nouveautes' | 'conseils' | 'garage';

export const newsCategoryLabels: Record<NewsCategory, string> = {
  evenements: 'Événements',
  nouveautes: 'Nouveautés',
  conseils: 'Conseils',
  garage: 'Vie du garage',
};

export type Article = {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  category: NewsCategory;
  publishedAt: string;
  author: string;
  cover: { src: string; alt: string };
  readingTimeMin: number;
};

export const news: Article[] = [
  {
    slug: 'preparer-son-vehicule-pour-l-hiver',
    title: "Préparer son véhicule pour l'hiver : les six contrôles essentiels",
    excerpt:
      "L'hiver fribourgeois ne pardonne pas l'imprévoyance. Voici les six contrôles que nous effectuons systématiquement avant la première neige.",
    category: 'conseils',
    publishedAt: '2024-10-22',
    author: 'Léonard Saint-Paul',
    cover: {
      src: 'https://images.unsplash.com/photo-1517994112540-009c47ea476b?w=1600&auto=format&fit=crop&q=85',
      alt: 'Voiture sous la neige en montagne',
    },
    readingTimeMin: 6,
    content: `
Chaque année, dès la mi-octobre, l'atelier reçoit une vague de véhicules pour la révision hivernale. Ce n'est pas un rituel administratif : c'est la dernière occasion de prévenir avant que les températures négatives n'amplifient la moindre faiblesse.

## 1. Les pneus

La règle suisse impose des pneus adaptés à la situation, pas une date. Sous 7°C, un pneu été perd jusqu'à 40% d'adhérence. Nous contrôlons l'usure (minimum 4 mm en hiver), la pression à froid, et la cohérence des marques.

## 2. La batterie

70% des dépannages hivernaux sont des batteries en bout de course. Nous mesurons la tension à vide, la capacité sous charge, l'état des cosses.

## 3. Le liquide de refroidissement

Un liquide de refroidissement vieilli perd ses propriétés antigel. Nous vérifions le point de cristallisation au réfractomètre.

## 4. Les essuie-glaces

Un balai usé sur un pare-brise verglacé : l'accident assuré. Nous remplaçons systématiquement et passons en lave-glace antigel.

## 5. L'éclairage

Les nuits sont longues. Nous contrôlons l'état des optiques, le réglage en hauteur, l'absence de buée.

## 6. Les freins

Le sel, l'humidité, le froid sollicitent particulièrement le système de freinage. Plaquettes, disques, étriers : tout est vérifié.
`,
  },
  {
    slug: 'banc-geometrie-3d-hunter',
    title: 'Notre nouveau banc de géométrie 3D Hunter Hawkeye Elite',
    excerpt:
      "Investissement majeur dans l'atelier : un banc Hunter Hawkeye Elite pour des réglages au centième de degré.",
    category: 'garage',
    publishedAt: '2024-09-15',
    author: 'Pierre Saint-Paul',
    cover: {
      src: 'https://images.unsplash.com/photo-1607860108855-64acf2078ed9?w=1600&auto=format&fit=crop&q=85',
      alt: "Banc de géométrie 3D dans l'atelier",
    },
    readingTimeMin: 4,
    content: `
La géométrie d'un véhicule, c'est un sujet que personne ne voit, mais que tout le monde ressent. Une voiture mal alignée tire, use ses pneus en biais, et perd en sécurité.

## Pourquoi ce choix

Trois raisons : précision (centième de degré), rapidité (8 minutes par véhicule), traçabilité (rapport avant/après remis au client).

## Pour qui

Toutes les voitures. En particulier après un choc trottoir, un changement de pneus, un remplacement de pièce de train roulant.
`,
  },
  {
    slug: 'arrivage-mercedes-pagode-280-sl',
    title: 'Arrivage : une Mercedes 280 SL Pagode de 1971 en boîte mécanique',
    excerpt:
      'Une 280 SL Pagode dans une configuration recherchée vient de rejoindre notre stock.',
    category: 'nouveautes',
    publishedAt: '2024-08-18',
    author: 'Léonard Saint-Paul',
    cover: {
      src: 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=1600&auto=format&fit=crop&q=85',
      alt: 'Mercedes-Benz 280 SL Pagode',
    },
    readingTimeMin: 3,
    content: `
La W113, "Pagode" pour les amateurs, est l'une des Mercedes les plus élégantes jamais construites.

## Configuration recherchée

- Boîte mécanique 4 rapports
- Hardtop d'origine + capote noire neuve
- Sellerie cuir cognac patinée d'origine
- Restauration mécanique complète en 2019
- Châssis sain, peinture d'usage cohérente

Disponible à la visite sur rendez-vous.
`,
  },
  {
    slug: 'hotel-a-pneus-pourquoi-stocker',
    title: "Hôtel à pneus : pourquoi stocker chez nous plutôt qu'au sous-sol",
    excerpt:
      "Stocker ses pneus dans un sous-sol humide, c'est leur faire perdre 30% de durée de vie.",
    category: 'conseils',
    publishedAt: '2024-07-04',
    author: 'Pierre Saint-Paul',
    cover: {
      src: 'https://images.unsplash.com/photo-1542362567-b07e54358753?w=1600&auto=format&fit=crop&q=85',
      alt: 'Pneus stockés dans un hôtel à pneus',
    },
    readingTimeMin: 3,
    content: `
Un pneu de qualité a une durée de vie d'environ 6 à 8 ans s'il est stocké correctement. Cette durée tombe à 4-5 ans dans un sous-sol humide.

## Notre hôtel à pneus

600 m² climatisés, ventilés, à l'abri de la lumière directe. Chaque jeu est étiqueté, lavé, contrôlé en pression à chaque rotation.

## Tarif

99 CHF / saison pour 4 pneus jantes acier, 119 CHF / saison pour jantes alu. Lavage et contrôle inclus.
`,
  },
];

export const getArticle = (slug: string) => news.find((n) => n.slug === slug);
export const recentNews = (limit = 3) =>
  [...news]
    .sort((a, b) => +new Date(b.publishedAt) - +new Date(a.publishedAt))
    .slice(0, limit);
