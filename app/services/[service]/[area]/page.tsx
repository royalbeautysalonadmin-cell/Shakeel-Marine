import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { generatePageMetadata, getBreadcrumbSchema } from '@/lib/seo';
import { getServiceAreaBySlugs } from '@/data/service-areas';
import { ServiceAreaDetail } from '@/components/service-area/ServiceAreaDetail';

interface Props {
  params: Promise<{ service: string; area: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { service, area } = await params;
  const serviceArea = getServiceAreaBySlugs(service, area);
  if (!serviceArea) return {};
  return generatePageMetadata({
    title: `${serviceArea.serviceName} in ${serviceArea.areaName} | Shakeel Marine`,
    description: serviceArea.description,
    path: `/services/${service}/${area}`,
  });
}

export default async function ServiceAreaPage({ params }: Props) {
  const { service, area } = await params;
  const serviceArea = getServiceAreaBySlugs(service, area);
  if (!serviceArea) return notFound();

  const breadcrumbs = getBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Services', url: '/services' },
    { name: serviceArea.serviceName, url: `/services/${service}` },
    { name: serviceArea.areaName, url: `/services/${service}/${area}` },
  ]);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }} />
      <ServiceAreaDetail serviceArea={serviceArea} />
    </>
  );
}
