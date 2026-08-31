import type { Metadata } from 'next';
import { generatePageMetadata, getBreadcrumbSchema, getItemListSchema } from '@/lib/seo';
import { CaseStudiesContent } from '@/components/case-studies/CaseStudiesContent';
import { caseStudies } from '@/data/case-studies';

export const metadata: Metadata = generatePageMetadata({
  title: 'Case Studies | Marine Upholstery Projects | Shakeel Marine',
  description: 'Detailed case studies of our marine upholstery projects — challenges, solutions and results. See how Shakeel Marine delivers quality.',
  path: '/case-studies',
  ogImage: caseStudies[0].images[0].src,
});

export default function CaseStudiesPage() {
  const breadcrumbs = getBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Case Studies', url: '/case-studies' },
  ]);
  const caseStudiesSchema = getItemListSchema(
    'Marine Upholstery Case Studies',
    caseStudies.map((study) => ({
      name: study.title,
      url: `/case-studies/${study.slug}`,
      image: study.images[0]?.src,
    }))
  );

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(caseStudiesSchema) }} />
      <CaseStudiesContent />
    </>
  );
}
