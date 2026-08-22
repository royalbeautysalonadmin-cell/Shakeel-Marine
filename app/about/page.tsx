import { Metadata } from 'next';
import { generatePageMetadata, getBreadcrumbSchema } from '@/lib/seo';
import { AboutContent } from '@/components/about/AboutContent';
import { siteConfig } from '@/lib/site-config';

export const metadata: Metadata = generatePageMetadata({
  title: 'About Shakeel Marine | Marine Upholstery Specialists in Kuwait',
  description: 'Learn about Shakeel Marine — Kuwait-based marine upholstery specialists. Custom jet ski seats, boat upholstery, ship seating and canopy covers.',
  path: '/about',
});

export default function AboutPage() {
  const breadcrumbs = getBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'About', url: '/about' },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }}
      />
      <AboutContent />
    </>
  );
}
