import type { MetadataRoute } from 'next';
import { siteConfig, services, cities } from '@/lib/site-config';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.url;
  const lastModified = new Date();

  const core = [
    { url: base, priority: 1.0, changeFrequency: 'monthly' as const },
    { url: `${base}/about`, priority: 0.8, changeFrequency: 'monthly' as const },
    { url: `${base}/services`, priority: 0.9, changeFrequency: 'monthly' as const },
    { url: `${base}/quote`, priority: 0.9, changeFrequency: 'monthly' as const },
    { url: `${base}/reviews`, priority: 0.7, changeFrequency: 'weekly' as const },
    { url: `${base}/trade`, priority: 0.85, changeFrequency: 'monthly' as const },
  ];

  const servicePages = services.map((s) => ({
    url: `${base}/services/${s.slug}`,
    priority: 0.8,
    changeFrequency: 'monthly' as const,
  }));

  const cityPages = cities.map((c) => ({
    url: `${base}/${c.slug}`,
    priority: 0.75,
    changeFrequency: 'monthly' as const,
  }));

  return [...core, ...servicePages, ...cityPages].map((p) => ({ ...p, lastModified }));
}
