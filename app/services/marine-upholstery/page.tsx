import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { generatePageMetadata, getServiceSchema, getBreadcrumbSchema } from '@/lib/seo';
import { getServiceBySlug } from '@/data/services';
import { ServiceDetail } from '@/components/services/ServiceDetail';

const service = getServiceBySlug('marine-upholstery');

export const metadata: Metadata = generatePageMetadata({
  title: 'Marine Upholstery in Kuwait | Shakeel Marine',
  description: 'Custom marine upholstery in Kuwait. Jet ski, boat and ship upholstery with marine-grade materials by Shakeel Marine.',
  path: '/services/marine-upholstery',
});

export default function MarineUpholsteryPage() {
  if (!service) return notFound();

  const serviceSchema = getServiceSchema({
    name: service.title,
    description: service.tagline,
    url: `/services/${service.slug}`,
  });

  const breadcrumbs = getBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Services', url: '/services' },
    { name: 'Marine Upholstery', url: `/services/${service.slug}` },
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
