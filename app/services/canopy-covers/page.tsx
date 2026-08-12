import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { generatePageMetadata, getServiceSchema, getBreadcrumbSchema } from '@/lib/seo';
import { getServiceBySlug } from '@/data/services';
import { ServiceDetail } from '@/components/services/ServiceDetail';

const service = getServiceBySlug('canopy-covers');

export const metadata: Metadata = service
  ? generatePageMetadata({
      title: service.seo.title,
      description: service.seo.description,
      path: `/services/${service.slug}`,
    })
  : {};

export default function CanopyCoversPage() {
  if (!service) return notFound();

  const serviceSchema = getServiceSchema({
    name: service.title,
    description: service.tagline,
    url: `/services/${service.slug}`,
  });

  const breadcrumbs = getBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Services', url: '/services' },
    { name: 'Canopy Covers', url: `/services/${service.slug}` },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }}
      />
      <ServiceDetail service={service} />
    </>
  );
}
