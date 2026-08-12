import { Metadata } from 'next';
import { generatePageMetadata, getBreadcrumbSchema } from '@/lib/seo';
import { GalleryContent } from '@/components/gallery/GalleryContent';

export const metadata: Metadata = generatePageMetadata({
  title: 'Gallery | Shakeel Marine — Marine Upholstery Projects in Kuwait',
  description:
    'View our custom marine upholstery and cover projects — jet ski seats, boat seats, ship upholstery, canopy covers and installation work by Shakeel Marine.',
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
