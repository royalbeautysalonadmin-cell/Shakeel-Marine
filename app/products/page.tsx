import { Metadata } from 'next';
import { generatePageMetadata, getBreadcrumbSchema } from '@/lib/seo';
import { ProductsContent } from '@/components/products/ProductsContent';

export const metadata: Metadata = generatePageMetadata({
  title: 'Products | Marine Accessories Kuwait | Shakeel Marine',
  description: 'Browse our marine products — Super Jet Floor Mat Kit and Jet Ski Custom Seats. Custom-fit marine accessories by Shakeel Marine in Kuwait.',
  path: '/products',
});

export default function ProductsPage() {
  const breadcrumbs = getBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Products', url: '/products' },
  ]);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }} />
      <ProductsContent />
    </>
  );
}
