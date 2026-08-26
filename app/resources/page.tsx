import { Metadata } from 'next';
import { generatePageMetadata, getBreadcrumbSchema } from '@/lib/seo';
import { ResourcesContent } from '@/components/resources/ResourcesContent';

export const metadata: Metadata = generatePageMetadata({
  title: 'Resources & Guides | Marine Upholstery | Shakeel Marine',
  description: 'Comprehensive guides for marine upholstery — materials, colors, maintenance, warranty and installation process by Shakeel Marine.',
  path: '/resources',
});

export default function ResourcesPage() {
  const breadcrumbs = getBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Resources', url: '/resources' },
  ]);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }} />
      <ResourcesContent />
    </>
  );
}
