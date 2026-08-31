import type { MetadataRoute } from 'next';
import { siteConfig } from '@/lib/site-config';
import { products } from '@/data/products';
import { blogPosts } from '@/data/blog';
import { areas } from '@/data/areas';
import { serviceAreas } from '@/data/service-areas';
import { resources } from '@/data/resources';
import { caseStudies } from '@/data/case-studies';
import { galleryImages } from '@/data/gallery';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.url;

  const productPages = products.map((p) => ({
    url: `${base}/products/${p.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
    images: p.images.map((image) => `${base}${image.src}`),
  }));

  const caseStudyPages = caseStudies.map((study) => ({
    url: `${base}/case-studies/${study.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
    images: study.images.map((image) => `${base}${image.src}`),
  }));

  const blogPages = blogPosts.map((p) => ({
    url: `${base}/blog/${p.slug}`,
    lastModified: new Date(p.date),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  const areaPages = areas.map((a) => ({
    url: `${base}/areas/${a.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  const serviceAreaPages = serviceAreas.map((sa) => ({
    url: `${base}/services/${sa.serviceSlug}/${sa.areaSlug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  const resourcePages = resources.map((r) => ({
    url: `${base}/resources/${r.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  return [
    { url: base, lastModified: new Date(), changeFrequency: 'weekly', priority: 1 },
    { url: `${base}/about`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/services`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/services/jet-ski-seat-covers`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/services/boat-ship-seats`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/services/marine-upholstery`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/services/canopy-covers`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/commercial-marine-services`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    ...serviceAreaPages,
    { url: `${base}/products`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    ...productPages,
    { url: `${base}/gallery`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7, images: galleryImages.map((image) => `${base}${image.src}`) },
    { url: `${base}/before-after`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/how-it-works`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/testimonials`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.6 },
    { url: `${base}/blog`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.8 },
    ...blogPages,
    { url: `${base}/areas`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    ...areaPages,
    { url: `${base}/resources`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    ...resourcePages,
    { url: `${base}/case-studies`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    ...caseStudyPages,
    { url: `${base}/appointment`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/search`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.5 },
    { url: `${base}/faq`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.6 },
    { url: `${base}/contact`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/request-a-quote`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/privacy-policy`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.3 },
    { url: `${base}/terms`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.3 },
  ];
}
