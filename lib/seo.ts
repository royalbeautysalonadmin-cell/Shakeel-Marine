import { Metadata } from 'next';
import { siteConfig } from './site-config';

interface PageSEOProps {
  title: string;
  description: string;
  path: string;
  ogImage?: string;
}

export function generatePageMetadata({
  title,
  description,
  path,
  ogImage = siteConfig.ogImage,
}: PageSEOProps): Metadata {
  const url = `${siteConfig.url}${path}`;
  return {
    title,
    description,
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
    address: { '@type': 'PostalAddress', addressLocality: siteConfig.city, addressCountry: siteConfig.countryCode },
    telephone: siteConfig.phone,
    email: siteConfig.email,
    areaServed: { '@type': 'Country', name: 'Kuwait' },
    sameAs: Object.values(siteConfig.social).filter(Boolean),
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
    address: { '@type': 'PostalAddress', addressLocality: siteConfig.city, addressCountry: siteConfig.countryCode },
    geo: { '@type': 'GeoCoordinates', latitude: parseFloat(siteConfig.latitude), longitude: parseFloat(siteConfig.longitude) },
    areaServed: { '@type': 'Country', name: 'Kuwait' },
    openingHoursSpecification: { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'], opens: '08:00', closes: '18:00' },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Marine Upholstery Services',
      itemListElement: [
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Jet Ski Seat Covers in Kuwait' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Boat & Ship Seats in Kuwait' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Marine Upholstery in Kuwait' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Marine Canopy Covers in Kuwait' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Commercial Marine Upholstery in Kuwait' } },
      ],
    },
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
