import type { Metadata } from 'next';

export const SITE_CONFIG = {
  name: 'Garage St-Paul',
  fullName: 'Garage St-Paul',
  tagline: "L'exigence depuis 1962",
  description:
    "Garage St-Paul, votre partenaire de confiance à Fribourg pour l'entretien, la réparation et la vente de véhicules toutes marques. L'exigence depuis 1962.",
  url: 'https://www.garagesp.ch',
  founded: 1962,
  address: {
    street: 'Rte de la Glâne 34',
    postalCode: '1700',
    city: 'Fribourg',
    region: 'FR',
    country: 'CH',
  },
  phone: '+41264111565',
  phoneDisplay: '026 411 15 65',
  email: 'info@garagesp.ch',
  hoursDisplay: 'Lundi – Vendredi · 07h30–12h00 / 13h30–18h00 — Samedi sur rendez-vous',
  hours: [
    { day: 'Lundi', open: '07:30', close: '12:00', open2: '13:30', close2: '18:00' },
    { day: 'Mardi', open: '07:30', close: '12:00', open2: '13:30', close2: '18:00' },
    { day: 'Mercredi', open: '07:30', close: '12:00', open2: '13:30', close2: '18:00' },
    { day: 'Jeudi', open: '07:30', close: '12:00', open2: '13:30', close2: '18:00' },
    { day: 'Vendredi', open: '07:30', close: '12:00', open2: '13:30', close2: '18:00' },
    { day: 'Samedi', open: 'Sur rendez-vous', close: '', closed: false },
    { day: 'Dimanche', open: 'Fermé', close: '', closed: true },
  ],
  geo: { lat: 46.7973, lng: 7.139 },
  social: {
    instagram: 'https://instagram.com/garagestpaul',
    facebook: 'https://facebook.com/garagestpaul',
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
    priceRange: '$$$',
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
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '07:30',
        closes: '18:00',
      },
    ],
    sameAs: [SITE_CONFIG.social.instagram, SITE_CONFIG.social.facebook],
  };
}
