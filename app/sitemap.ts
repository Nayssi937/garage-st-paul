import type { MetadataRoute } from 'next';
import { SITE_CONFIG } from '@/lib/seo';
import { services } from '@/lib/data/services';
import { projects } from '@/lib/data/projects';
import { vehicles } from '@/lib/data/vehicles';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = SITE_CONFIG.url;
  const now = new Date();

  const staticPaths = [
    '',
    '/atelier',
    '/services',
    '/vehicules',
    '/realisations',
    '/a-propos',
    '/contact',
    '/mentions-legales',
    '/politique-confidentialite',
  ];

  return [
    ...staticPaths.map((p) => ({
      url: `${base}${p}`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: p === '' ? 1 : 0.7,
    })),
    ...services.map((s) => ({
      url: `${base}/services/${s.slug}`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    })),
    ...projects.map((p) => ({
      url: `${base}/realisations/${p.slug}`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.5,
    })),
    ...vehicles.map((v) => ({
      url: `${base}/vehicules/${v.slug}`,
      lastModified: now,
      changeFrequency: 'weekly' as const,
      priority: 0.6,
    })),
  ];
}
