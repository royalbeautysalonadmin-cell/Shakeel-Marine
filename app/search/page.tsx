import type { Metadata } from 'next';
import { generatePageMetadata, getBreadcrumbSchema } from '@/lib/seo';
import { SearchContent } from '@/components/search/SearchContent';

export const metadata: Metadata = {
  ...generatePageMetadata({
    title: 'Search | Shakeel Marine Kuwait',
    description: 'Search across products, services, blog posts and more on Shakeel Marine website.',
    path: '/search',
  }),
  robots: { index: false, follow: true },
};

export default function SearchPage() {
  const breadcrumbs = getBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Search', url: '/search' },
  ]);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }} />
      <SearchContent />
    </>
  );
}
