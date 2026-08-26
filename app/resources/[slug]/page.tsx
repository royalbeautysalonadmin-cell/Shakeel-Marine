import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { generatePageMetadata, getBreadcrumbSchema } from '@/lib/seo';
import { getResourceBySlug } from '@/data/resources';
import { ResourceDetail } from '@/components/resources/ResourceDetail';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const resource = getResourceBySlug(slug);
  if (!resource) return {};
  return generatePageMetadata({
    title: resource.seo.title,
    description: resource.seo.description,
    path: `/resources/${slug}`,
  });
}

export default async function ResourcePage({ params }: Props) {
  const { slug } = await params;
  const resource = getResourceBySlug(slug);
  if (!resource) return notFound();

  const breadcrumbs = getBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Resources', url: '/resources' },
    { name: resource.title, url: `/resources/${slug}` },
  ]);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }} />
      <ResourceDetail resource={resource} />
    </>
  );
}
