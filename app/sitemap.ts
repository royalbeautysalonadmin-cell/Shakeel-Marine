import type { MetadataRoute } from 'next';
import { siteConfig } from '@/lib/site-config';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.url;

  const staticPages = [
    { url: base, lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 1 },
    { url: `${base}/about`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.8 },
    { url: `${base}/services`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.9 },
    { url: `${base}/services/jet-ski-seat-covers`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.8 },
    { url: `${base}/services/boat-ship-seats`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.8 },
    { url: `${base}/services/marine-upholstery`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.8 },
    { url: `${base}/services/canopy-covers`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.8 },
    { url: `${base}/gallery`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${base}/faq`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.6 },
    { url: `${base}/contact`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.8 },
    { url: `${base}/request-a-quote`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.9 },
    { url: `${base}/privacy-policy`, lastModified: new Date(), changeFrequency: 'yearly' as const, priority: 0.3 },
    { url: `${base}/terms`, lastModified: new Date(), changeFrequency: 'yearly' as const, priority: 0.3 },
  ];

  return staticPages;
}
