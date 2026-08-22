import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { generatePageMetadata, getServiceSchema, getBreadcrumbSchema } from '@/lib/seo';
import { getServiceBySlug } from '@/data/services';
import { ServiceDetail } from '@/components/services/ServiceDetail';

const service = getServiceBySlug('jet-ski-seat-covers');

export const metadata: Metadata = generatePageMetadata({
  title: 'Jet Ski Seat Covers in Kuwait | Shakeel Marine',
  description: 'Custom jet ski seat covers in Kuwait. Marine-grade materials, custom colors and professional installation by Shakeel Marine. Request a quote today.',
  path: '/services/jet-ski-seat-covers',
});

export default function JetSkiSeatCoversPage() {
  if (!service) return notFound();

  const serviceSchema = getServiceSchema({
    name: service.title,
    description: service.tagline,
    url: `/services/${service.slug}`,
  });

  const breadcrumbs = getBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Services', url: '/services' },
    { name: 'Jet Ski Seat Covers', url: `/services/${service.slug}` },
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
