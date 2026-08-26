import { Metadata } from 'next';
import { generatePageMetadata, getBreadcrumbSchema } from '@/lib/seo';
import { VideoGalleryContent } from '@/components/video-gallery/VideoGalleryContent';

export const metadata: Metadata = generatePageMetadata({
  title: 'Video Gallery | Marine Upholstery Videos | Shakeel Marine',
  description: 'Watch video showcases of our marine upholstery projects — installations, product demos, customer testimonials and tutorials by Shakeel Marine.',
  path: '/video-gallery',
});

export default function VideoGalleryPage() {
  const breadcrumbs = getBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Video Gallery', url: '/video-gallery' },
  ]);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }} />
      <VideoGalleryContent />
    </>
  );
}
