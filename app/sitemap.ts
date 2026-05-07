import type { MetadataRoute } from 'next';
import { SITE_CONFIG } from '@/lib/seo';
import { vehicles } from '@/lib/data/vehicles';
import { news } from '@/lib/data/news';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = SITE_CONFIG.url;
  const now = new Date();

  const staticRoutes = [
    '',
    '/services',
    '/vehicules',
    '/histoire',
    '/actualites',
    '/contact',
    '/mentions-legales',
    '/politique-confidentialite',
  ].map((path) => ({
    url: `${base}${path || '/'}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: path === '' ? 1 : 0.8,
  }));

  const vehicleRoutes = vehicles.map((v) => ({
    url: `${base}/vehicules/${v.slug}`,
    lastModified: now,
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }));

  const newsRoutes = news.map((n) => ({
    url: `${base}/actualites/${n.slug}`,
    lastModified: new Date(n.publishedAt),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  return [...staticRoutes, ...vehicleRoutes, ...newsRoutes];
}
