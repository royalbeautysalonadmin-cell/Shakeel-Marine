import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { generatePageMetadata, getServiceSchema, getBreadcrumbSchema } from '@/lib/seo';
import { getServiceBySlug } from '@/data/services';
import { ServiceDetail } from '@/components/services/ServiceDetail';

const service = getServiceBySlug('boat-ship-seats');

export const metadata: Metadata = generatePageMetadata({
  title: 'Boat & Ship Seats in Kuwait | Shakeel Marine',
  description: 'Custom boat and ship seats in Kuwait. Professional marine upholstery, seat covers and reupholstery by Shakeel Marine.',
  path: '/services/boat-ship-seats',
});

export default function BoatShipSeatsPage() {
  if (!service) return notFound();

  const serviceSchema = getServiceSchema({
    name: service.title,
    description: service.tagline,
    url: `/services/${service.slug}`,
  });

  const breadcrumbs = getBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Services', url: '/services' },
    { name: 'Boat & Ship Seats', url: `/services/${service.slug}` },
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
