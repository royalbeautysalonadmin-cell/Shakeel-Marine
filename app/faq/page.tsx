import { Metadata } from 'next';
import { generatePageMetadata, getBreadcrumbSchema, getFAQSchema } from '@/lib/seo';
import { FaqContent } from '@/components/faq/FaqContent';
import { faqData } from '@/data/faq';

export const metadata: Metadata = generatePageMetadata({
  title: 'FAQ | Marine Upholstery Questions | Shakeel Marine Kuwait',
  description: 'Frequently asked questions about marine upholstery services in Kuwait. Answers about jet ski seats, boat upholstery, canopies and quotes.',
  path: '/faq',
});

export default function FaqPage() {
  const breadcrumbs = getBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'FAQ', url: '/faq' },
  ]);

  const faqSchema = getFAQSchema(faqData);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <FaqContent />
    </>
  );
}
