import type { Metadata } from 'next';
import { generatePageMetadata, getBreadcrumbSchema, getGallerySchema } from '@/lib/seo';
import { GalleryContent } from '@/components/gallery/GalleryContent';
import { galleryImages } from '@/data/gallery';

export const metadata: Metadata = generatePageMetadata({
  title: 'Marine Upholstery Gallery | Shakeel Marine Kuwait',
  description: 'View our portfolio of custom marine upholstery projects in Kuwait. Jet ski seats, boat upholstery, ship seating and canopy covers.',
  path: '/gallery',
  ogImage: galleryImages[0].src,
});

export default function GalleryPage() {
  const breadcrumbs = getBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Gallery', url: '/gallery' },
  ]);
  const gallerySchema = getGallerySchema(galleryImages);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(gallerySchema) }}
      />
      <GalleryContent />
    </>
  );
}
