import { Metadata } from 'next';
import { generatePageMetadata, getBreadcrumbSchema } from '@/lib/seo';
import { CaseStudiesContent } from '@/components/case-studies/CaseStudiesContent';

export const metadata: Metadata = generatePageMetadata({
  title: 'Case Studies | Marine Upholstery Projects | Shakeel Marine',
  description: 'Detailed case studies of our marine upholstery projects — challenges, solutions and results. See how Shakeel Marine delivers quality.',
  path: '/case-studies',
});

export default function CaseStudiesPage() {
  const breadcrumbs = getBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Case Studies', url: '/case-studies' },
  ]);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }} />
      <CaseStudiesContent />
    </>
  );
}
