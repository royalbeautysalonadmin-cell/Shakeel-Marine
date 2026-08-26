import { Metadata } from 'next';
import { generatePageMetadata, getBreadcrumbSchema } from '@/lib/seo';
import { TestimonialsContent } from '@/components/testimonials/TestimonialsContent';

export const metadata: Metadata = generatePageMetadata({
  title: 'Testimonials | Customer Reviews | Shakeel Marine Kuwait',
  description: 'Read what our customers say about Shakeel Marine — jet ski seats, boat covers, marine upholstery and canopy solutions in Kuwait.',
  path: '/testimonials',
});

export default function TestimonialsPage() {
  const breadcrumbs = getBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Testimonials', url: '/testimonials' },
  ]);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }} />
      <TestimonialsContent />
    </>
  );
}
