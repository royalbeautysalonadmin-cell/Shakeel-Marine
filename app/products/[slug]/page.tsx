import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { generatePageMetadata, getBreadcrumbSchema } from '@/lib/seo';
import { getProductBySlug } from '@/data/products';
import { ProductDetail } from '@/components/products/ProductDetail';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) return {};
  return generatePageMetadata({
    title: product.seo.title,
    description: product.seo.description,
    path: `/products/${slug}`,
  });
}

export default async function ProductPage({ params }: Props) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) return notFound();

  const breadcrumbs = getBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Products', url: '/products' },
    { name: product.name, url: `/products/${slug}` },
  ]);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }} />
      <ProductDetail product={product} />
    </>
  );
}
