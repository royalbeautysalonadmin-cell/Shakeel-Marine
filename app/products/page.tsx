import type { Metadata } from 'next';
import { generatePageMetadata, getBreadcrumbSchema, getItemListSchema } from '@/lib/seo';
import { ProductsContent } from '@/components/products/ProductsContent';
import { products } from '@/data/products';

export const metadata: Metadata = generatePageMetadata({
  title: 'Products | Marine Accessories Kuwait | Shakeel Marine',
  description: 'Browse our marine products — Super Jet Floor Mat Kit and Jet Ski Custom Seats. Custom-fit marine accessories by Shakeel Marine in Kuwait.',
  path: '/products',
  ogImage: products[0].images[0].src,
});

export default function ProductsPage() {
  const breadcrumbs = getBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Products', url: '/products' },
  ]);
  const productsSchema = getItemListSchema(
    'Marine Products in Kuwait',
    products.map((product) => ({
      name: product.name,
      url: `/products/${product.slug}`,
      image: product.images[0]?.src,
    }))
  );

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productsSchema) }} />
      <ProductsContent />
    </>
  );
}
