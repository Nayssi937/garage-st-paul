export type NavItem = { label: string; href: string };

export const mainNav: NavItem[] = [
  { label: 'Accueil', href: '/' },
  { label: 'Nos Services', href: '/services' },
  { label: 'Véhicules', href: '/vehicules' },
  { label: 'Notre Histoire', href: '/histoire' },
  { label: 'Actualités', href: '/actualites' },
  { label: 'Contact', href: '/contact' },
];

export const footerSecondary: NavItem[] = [
  { label: 'Mentions légales', href: '/mentions-legales' },
  { label: 'Politique de confidentialité', href: '/politique-confidentialite' },
];
