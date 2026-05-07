import type { Metadata } from 'next';

export const SITE_CONFIG = {
  name: 'Garage St-Paul',
  fullName: 'Garage St-Paul Sàrl',
  tagline: "L'exigence depuis 1962",
  description:
    "Garage St-Paul Sàrl à Lausanne — entretien, carrosserie, service express, pneus et vente de véhicules d'occasion. Toutes marques.",
  url: 'https://www.garagesp.ch',
  founded: 1962,
  address: {
    street: "Rue de l'École de Commerce 1bis",
    postalCode: '1004',
    city: 'Lausanne',
    region: 'VD',
    country: 'CH',
  },
  phone: '+41216463839',
  phoneDisplay: '021 646 38 39',
  email: 'contact@garagesaintpaul.ch',
  hoursDisplay:
    "Lundi – Jeudi · 07h30–12h00 / 13h30–18h00 — Vendredi · 07h30–12h00 / 13h30–17h00",
  hours: [
    { day: 'Lundi', open: '07:30', close: '12:00', open2: '13:30', close2: '18:00' },
    { day: 'Mardi', open: '07:30', close: '12:00', open2: '13:30', close2: '18:00' },
    { day: 'Mercredi', open: '07:30', close: '12:00', open2: '13:30', close2: '18:00' },
    { day: 'Jeudi', open: '07:30', close: '12:00', open2: '13:30', close2: '18:00' },
    { day: 'Vendredi', open: '07:30', close: '12:00', open2: '13:30', close2: '17:00' },
    { day: 'Samedi', open: 'Fermé', close: '', closed: true },
    { day: 'Dimanche', open: 'Fermé', close: '', closed: true },
  ],
  geo: { lat: 46.5239, lng: 6.6321 }, // approx Lausanne 1004
  social: {
    facebook: 'https://www.facebook.com/garagesp.ch',
    instagram: 'https://www.instagram.com/',
  },
};

type SeoProps = {
  title: string;
  description?: string;
  path?: string;
  image?: string;
};

export function buildMetadata({
  title,
  description = SITE_CONFIG.description,
  path = '/',
  image = '/images/og-default.jpg',
}: SeoProps): Metadata {
  const fullTitle = title === SITE_CONFIG.name ? title : `${title} — ${SITE_CONFIG.name}`;
  const url = `${SITE_CONFIG.url}${path}`;
  return {
    title: fullTitle,
    description,
    metadataBase: new URL(SITE_CONFIG.url),
    alternates: { canonical: url },
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: SITE_CONFIG.name,
      locale: 'fr_CH',
      type: 'website',
      images: [{ url: image, width: 1200, height: 630, alt: SITE_CONFIG.name }],
    },
    twitter: { card: 'summary_large_image', title: fullTitle, description, images: [image] },
    robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  };
}

export function autoDealerJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': ['AutoRepair', 'AutoDealer'],
    name: SITE_CONFIG.fullName,
    image: `${SITE_CONFIG.url}/images/og-default.jpg`,
    url: SITE_CONFIG.url,
    telephone: SITE_CONFIG.phone,
    email: SITE_CONFIG.email,
    priceRange: '$$',
    foundingDate: String(SITE_CONFIG.founded),
    address: {
      '@type': 'PostalAddress',
      streetAddress: SITE_CONFIG.address.street,
      postalCode: SITE_CONFIG.address.postalCode,
      addressLocality: SITE_CONFIG.address.city,
      addressRegion: SITE_CONFIG.address.region,
      addressCountry: SITE_CONFIG.address.country,
    },
    geo: { '@type': 'GeoCoordinates', latitude: SITE_CONFIG.geo.lat, longitude: SITE_CONFIG.geo.lng },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday'],
        opens: '07:30',
        closes: '18:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Friday'],
        opens: '07:30',
        closes: '17:00',
      },
    ],
    sameAs: [SITE_CONFIG.social.facebook],
  };
}
