import type { Metadata } from 'next';
import { siteConfig } from './site-config';

function absoluteUrl(path: string): string {
  return path.startsWith('http') ? path : `${siteConfig.url}${path}`;
}

interface PageSEOProps {
  title: string;
  description: string;
  path: string;
  ogImage?: string;
  keywords?: string[];
}

export function generatePageMetadata({
  title,
  description,
  path,
  ogImage = siteConfig.ogImage,
  keywords = [],
}: PageSEOProps): Metadata {
  const url = `${siteConfig.url}${path}`;
  const defaultKeywords = [
    'marine upholstery kuwait',
    'jet ski seat covers kuwait',
    'boat covers kuwait',
    'canopy covers kuwait',
    'marine seats kuwait',
    'jet ski custom seats',
    'ship covers kuwait',
    'marine upholstery services',
    'custom boat seats',
    'jet ski floor mat kit',
    'marine upholstery near me',
    'best marine upholstery kuwait',
    'custom jet ski covers',
    'boat canopy installation',
    'marine fabric kuwait',
  ];
  return {
    title,
    description,
    keywords: [...new Set([...defaultKeywords, ...keywords])],
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName: siteConfig.name,
      locale: 'en_US',
      type: 'website',
      images: [{ url: `${siteConfig.url}${ogImage}`, width: 1200, height: 630, alt: title }],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [`${siteConfig.url}${ogImage}`],
    },
  };
}

export function getOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: siteConfig.name,
    legalName: siteConfig.legalName,
    url: siteConfig.url,
    logo: `${siteConfig.url}${siteConfig.logo}`,
    description: siteConfig.description,
    address: {
      '@type': 'PostalAddress',
      streetAddress: siteConfig.address,
      addressLocality: siteConfig.city,
      addressCountry: siteConfig.countryCode,
      ...(siteConfig.postalCode ? { postalCode: siteConfig.postalCode } : {}),
    },
    telephone: siteConfig.phone,
    email: siteConfig.email,
    areaServed: { '@type': 'Country', name: 'Kuwait' },
    sameAs: Object.values(siteConfig.social).filter(Boolean),
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: siteConfig.phone,
      contactType: 'customer service',
      areaServed: 'KW',
      availableLanguage: ['English', 'Arabic'],
    },
  };
}

export function getWebSiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.description,
    publisher: { '@type': 'Organization', name: siteConfig.name },
  };
}

export function getLocalBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    logo: `${siteConfig.url}${siteConfig.logo}`,
    image: `${siteConfig.url}${siteConfig.ogImage}`,
    telephone: siteConfig.phone,
    email: siteConfig.email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: siteConfig.address,
      addressLocality: siteConfig.city,
      addressCountry: siteConfig.countryCode,
      ...(siteConfig.postalCode ? { postalCode: siteConfig.postalCode } : {}),
    },
    geo: { '@type': 'GeoCoordinates', latitude: parseFloat(siteConfig.latitude), longitude: parseFloat(siteConfig.longitude) },
    areaServed: { '@type': 'Country', name: 'Kuwait' },
    openingHours: siteConfig.openingHours,
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Saturday', 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday'],
      opens: '08:00',
      closes: '18:00',
    },
    priceRange: '$$',
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Marine Upholstery Services in Kuwait',
      itemListElement: [
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Jet Ski Seat Covers in Kuwait', description: 'Custom jet seat covers, design and installation' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Canopy Covers in Kuwait', description: 'Custom marine canopy and boat covers' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Ship Covers in Kuwait', description: 'Heavy-duty custom ship covers' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Jet Ski Custom Seats in Kuwait', description: 'Custom-designed jet ski seats' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Super Jet Floor Mat Kit in Kuwait', description: 'Precision-cut marine floor mats' } },
      ],
    },
    sameAs: Object.values(siteConfig.social).filter(Boolean),
  };
}

export function getServiceSchema(service: { name: string; description: string; url: string }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.name,
    description: service.description,
    url: `${siteConfig.url}${service.url}`,
    provider: { '@type': 'LocalBusiness', name: siteConfig.name, url: siteConfig.url },
    areaServed: { '@type': 'Country', name: 'Kuwait' },
  };
}

export function getBreadcrumbSchema(items: Array<{ name: string; url: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `${siteConfig.url}${item.url}`,
    })),
  };
}

export function getItemListSchema(
  name: string,
  items: Array<{ name: string; url: string; image?: string }>
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name,
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      url: absoluteUrl(item.url),
      ...(item.image ? { image: absoluteUrl(item.image) } : {}),
    })),
  };
}

export function getGallerySchema(images: Array<{ src: string; alt: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Marine Upholstery Gallery',
    description: 'Custom marine upholstery, jet ski seat and marine cover projects by Shakeel Marine in Kuwait.',
    url: absoluteUrl('/gallery'),
    mainEntity: {
      '@type': 'ItemList',
      itemListElement: images.map((image, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        item: {
          '@type': 'ImageObject',
          name: image.alt,
          caption: image.alt,
          contentUrl: absoluteUrl(image.src),
          url: absoluteUrl(image.src),
        },
      })),
    },
  };
}

export function getProductSchema(product: {
  name: string;
  description: string;
  slug: string;
  images: Array<{ src: string }>;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.name,
    description: product.description,
    image: product.images.map((image) => absoluteUrl(image.src)),
    url: absoluteUrl(`/products/${product.slug}`),
    category: 'Marine accessories',
    brand: { '@type': 'Brand', name: siteConfig.name },
    manufacturer: { '@type': 'Organization', name: siteConfig.name, url: siteConfig.url },
  };
}

export function getCaseStudySchema(study: {
  title: string;
  description: string;
  slug: string;
  service: string;
  images: Array<{ src: string }>;
}) {
  const url = absoluteUrl(`/case-studies/${study.slug}`);
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: study.title,
    description: study.description,
    image: study.images.map((image) => absoluteUrl(image.src)),
    url,
    mainEntityOfPage: { '@type': 'WebPage', '@id': url },
    articleSection: 'Marine upholstery case study',
    about: { '@type': 'Service', name: study.service, provider: { '@type': 'LocalBusiness', name: siteConfig.name } },
    author: { '@type': 'Organization', name: siteConfig.name, url: siteConfig.url },
    publisher: {
      '@type': 'Organization',
      name: siteConfig.name,
      url: siteConfig.url,
      logo: { '@type': 'ImageObject', url: absoluteUrl(siteConfig.logo) },
    },
  };
}

export function getFAQSchema(faqs: Array<{ question: string; answer: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: { '@type': 'Answer', text: faq.answer },
    })),
  };
}
