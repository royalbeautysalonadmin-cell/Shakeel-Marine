import { Metadata } from 'next';
import { generatePageMetadata, getBreadcrumbSchema } from '@/lib/seo';
import { BeforeAfterContent } from '@/components/before-after-page/BeforeAfterContent';

export const metadata: Metadata = generatePageMetadata({
  title: 'Before & After Gallery | Marine Transformations | Shakeel Marine',
  description: 'See our stunning before and after marine transformations — canopy replacements, boat protection and jet ski seat restorations by Shakeel Marine.',
  path: '/before-after',
});

export default function BeforeAfterPage() {
  const breadcrumbs = getBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Before & After', url: '/before-after' },
  ]);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }} />
      <BeforeAfterContent />
    </>
  );
}
