import { Metadata } from 'next';
import { generatePageMetadata, getBreadcrumbSchema } from '@/lib/seo';
import { QuoteContent } from '@/components/quote/QuoteContent';

export const metadata: Metadata = generatePageMetadata({
  title: 'Request a Quote | Marine Upholstery Kuwait | Shakeel Marine',
  description: 'Request a custom quote for marine upholstery in Kuwait. Jet ski seats, boat seats, ship upholstery and canopy covers.',
  path: '/request-a-quote',
});

export default function RequestQuotePage() {
  const breadcrumbs = getBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Request a Quote', url: '/request-a-quote' },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }}
      />
      <QuoteContent />
    </>
  );
}
