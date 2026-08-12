import { Metadata } from 'next';
import { siteConfig } from './site-config';

interface PageSEOProps {
  title: string;
  description: string;
  path: string;
  ogImage?: string;
}

/**
 * Generate consistent page metadata.
 */
export function generatePageMetadata({
  title,
  description,
  path,
  ogImage = '/images/og-default.jpg',
}: PageSEOProps): Metadata {
  const url = `${siteConfig.url}${path}`;

  return {
    title,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      siteName: siteConfig.name,
      locale: 'en_US',
      type: 'website',
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [ogImage],
    },
  };
}

/**
 * Generate Organization structured data.
 */
export function getOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.description,
    address: {
      '@type': 'PostalAddress',
      addressLocality: siteConfig.city,
      addressCountry: 'KW',
    },
    ...(siteConfig.phone !== '+965-XXXX-XXXX' && {
      telephone: siteConfig.phone,
    }),
    ...(siteConfig.email !== 'info@shakeelmarine.com' && {
      email: siteConfig.email,
    }),
  };
}

/**
 * Generate WebSite structured data.
 */
export function getWebSiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: siteConfig.name,
    url: siteConfig.url,
  };
}

/**
 * Generate LocalBusiness structured data.
 */
export function getLocalBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    address: {
      '@type': 'PostalAddress',
      addressLocality: siteConfig.city,
      addressCountry: 'KW',
    },
    ...(siteConfig.phone !== '+965-XXXX-XXXX' && {
      telephone: siteConfig.phone,
    }),
  };
}

/**
 * Generate Service structured data.
 */
export function getServiceSchema(service: {
  name: string;
  description: string;
  url: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.name,
    description: service.description,
    url: `${siteConfig.url}${service.url}`,
    provider: {
      '@type': 'Organization',
      name: siteConfig.name,
    },
    areaServed: {
      '@type': 'Country',
      name: 'Kuwait',
    },
  };
}

/**
 * Generate BreadcrumbList structured data.
 */
export function getBreadcrumbSchema(
  items: Array<{ name: string; url: string }>
) {
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

/**
 * Generate FAQPage structured data.
 */
export function getFAQSchema(
  faqs: Array<{ question: string; answer: string }>
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}
