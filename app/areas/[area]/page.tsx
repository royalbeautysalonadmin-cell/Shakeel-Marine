import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { generatePageMetadata, getBreadcrumbSchema } from '@/lib/seo';
import { getAreaBySlug } from '@/data/areas';
import { AreaDetail } from '@/components/areas/AreaDetail';

interface Props {
  params: Promise<{ area: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { area } = await params;
  const areaData = getAreaBySlug(area);
  if (!areaData) return {};
  return generatePageMetadata({
    title: areaData.seo.title,
    description: areaData.seo.description,
    path: `/areas/${area}`,
  });
}

export default async function AreaPage({ params }: Props) {
  const { area } = await params;
  const areaData = getAreaBySlug(area);
  if (!areaData) return notFound();

  const breadcrumbs = getBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Areas', url: '/areas' },
    { name: areaData.name, url: `/areas/${area}` },
  ]);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }} />
      <AreaDetail area={areaData} />
    </>
  );
}
