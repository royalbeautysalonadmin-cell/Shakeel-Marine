import { Metadata } from 'next';
import { generatePageMetadata, getBreadcrumbSchema } from '@/lib/seo';
import { ServicesContent } from '@/components/services/ServicesContent';

export const metadata: Metadata = generatePageMetadata({
  title: 'Our Marine Services | Shakeel Marine Kuwait',
  description:
    'Custom marine upholstery and cover services in Kuwait — jet ski seats, boat and ship seats, marine upholstery and canopy covers by Shakeel Marine.',
  path: '/services',
});

export default function ServicesPage() {
  const breadcrumbs = getBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Services', url: '/services' },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }}
      />
      <ServicesContent />
    </>
  );
}
