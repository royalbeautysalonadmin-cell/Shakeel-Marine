import { Metadata } from 'next';
import { generatePageMetadata, getBreadcrumbSchema } from '@/lib/seo';
import { AreasContent } from '@/components/areas/AreasContent';

export const metadata: Metadata = generatePageMetadata({
  title: 'Areas We Serve | Marine Upholstery Across Kuwait | Shakeel Marine',
  description: 'Shakeel Marine provides marine upholstery services across Kuwait — Kuwait City, Hawalli, Salmiya, Farwaniya, Jahra and Mangaf.',
  path: '/areas',
});

export default function AreasPage() {
  const breadcrumbs = getBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Areas', url: '/areas' },
  ]);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }} />
      <AreasContent />
    </>
  );
}
