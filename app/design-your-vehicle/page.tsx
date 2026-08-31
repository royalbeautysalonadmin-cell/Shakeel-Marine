import type { Metadata } from 'next';
import { VehicleSelector } from '@/components/configurator/VehicleSelector';
import { vehicles } from '@/data/configurator';
import { generatePageMetadata, getBreadcrumbSchema, getItemListSchema } from '@/lib/seo';

export const metadata: Metadata = generatePageMetadata({
  title: 'Design Your Vehicle | 3D Marine Configurator | Shakeel Marine',
  description: 'Choose a jet ski, yacht, ship, bike or car and create a custom seat, floor mat or cover design with the Shakeel Marine real-time 3D configurator.',
  path: '/design-your-vehicle',
  keywords: ['3D marine configurator Kuwait', 'custom jet ski design', 'vehicle seat configurator'],
});

export default function DesignYourVehiclePage() {
  const breadcrumbs = getBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Design Your Vehicle', url: '/design-your-vehicle' },
  ]);
  const vehicleSchema = getItemListSchema(
    'Design Your Vehicle Options',
    vehicles.map((vehicle) => ({
      name: vehicle.name,
      url: `/design-your-vehicle/${vehicle.slug}`,
      image: vehicle.image,
    }))
  );

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(vehicleSchema) }} />
      <VehicleSelector />
    </>
  );
}
