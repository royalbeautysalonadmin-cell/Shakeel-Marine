import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { generatePageMetadata, getServiceSchema, getBreadcrumbSchema } from '@/lib/seo';
import { getServiceBySlug } from '@/data/services';
import { ServiceDetail } from '@/components/services/ServiceDetail';

const service = getServiceBySlug('canopy-covers');

export const metadata: Metadata = generatePageMetadata({
  title: 'Marine Canopy & Boat Covers in Kuwait | Shakeel Marine',
  description: 'Custom marine canopy and boat covers in Kuwait. Ship top covers, weather protection and professional installation by Shakeel Marine.',
  path: '/services/canopy-covers',
});

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
