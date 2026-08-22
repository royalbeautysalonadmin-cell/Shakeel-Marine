import { Metadata } from 'next';
import { generatePageMetadata, getBreadcrumbSchema } from '@/lib/seo';
import { GalleryContent } from '@/components/gallery/GalleryContent';

export const metadata: Metadata = generatePageMetadata({
  title: 'Marine Upholstery Gallery | Shakeel Marine Kuwait',
  description: 'View our portfolio of custom marine upholstery projects in Kuwait. Jet ski seats, boat upholstery, ship seating and canopy covers.',
  path: '/gallery',
});

export default function GalleryPage() {
  const breadcrumbs = getBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Gallery', url: '/gallery' },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }}
      />
      <GalleryContent />
    </>
  );
}
