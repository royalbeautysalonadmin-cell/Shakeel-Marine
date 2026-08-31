import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ConfiguratorExperience } from '@/components/configurator/ConfiguratorExperience';
import { getVehicleBySlug, vehicles } from '@/data/configurator';
import { generatePageMetadata, getBreadcrumbSchema } from '@/lib/seo';

interface Props {
  params: Promise<{ vehicle: string }>;
}

export function generateStaticParams() {
  return vehicles.map((vehicle) => ({ vehicle: vehicle.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { vehicle: vehicleSlug } = await params;
  const vehicle = getVehicleBySlug(vehicleSlug);
  if (!vehicle) return {};

  return generatePageMetadata({
    title: `${vehicle.name} 3D Configurator | Shakeel Marine Kuwait`,
    description: `${vehicle.description} Choose colors, materials and ready-made designs before requesting a custom quote in Kuwait.`,
    path: `/design-your-vehicle/${vehicle.slug}`,
    ogImage: vehicle.image,
    keywords: [`custom ${vehicle.name.toLowerCase()} seats Kuwait`, `${vehicle.name} upholstery Kuwait`],
  });
}

export default async function VehicleConfiguratorPage({ params }: Props) {
  const { vehicle: vehicleSlug } = await params;
  const vehicle = getVehicleBySlug(vehicleSlug);
  if (!vehicle) return notFound();

  const breadcrumbs = getBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Design Your Vehicle', url: '/design-your-vehicle' },
    { name: vehicle.name, url: `/design-your-vehicle/${vehicle.slug}` },
  ]);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }} />
      <section className="bg-navy-deep px-4 pb-12 pt-28 sm:px-6 lg:px-8 lg:pb-16 lg:pt-36">
        <div className="mx-auto max-w-7xl">
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex flex-wrap items-center gap-2 text-sm text-white/45">
              <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
              <li aria-hidden="true">/</li>
              <li><Link href="/design-your-vehicle" className="hover:text-white transition-colors">Design Your Vehicle</Link></li>
              <li aria-hidden="true">/</li>
              <li className="text-white/70">{vehicle.name}</li>
            </ol>
          </nav>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-ocean">Real-time custom design</p>
          <h1 className="mt-4 max-w-4xl font-heading text-4xl font-bold leading-tight text-white sm:text-6xl">
            {vehicle.name} Configurator
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-white/65">{vehicle.description}</p>
        </div>
      </section>
      <ConfiguratorExperience vehicle={vehicle.slug} />
    </>
  );
}
