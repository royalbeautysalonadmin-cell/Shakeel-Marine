'use client';

import dynamic from 'next/dynamic';
import type { VehicleSlug } from '@/data/configurator';

const ConfiguratorShell = dynamic(
  () => import('@/components/configurator/ConfiguratorShell').then((module) => module.ConfiguratorShell),
  {
    ssr: false,
    loading: () => <ConfiguratorLoading />,
  }
);

function ConfiguratorLoading() {
  return (
    <section className="bg-[#0a202d] px-4 py-16 sm:px-6 lg:px-8 lg:py-24" aria-live="polite">
      <div className="mx-auto flex min-h-[520px] max-w-7xl items-center justify-center rounded-2xl border border-white/10 bg-navy-deep/80 p-8 text-center">
        <div>
          <div className="mx-auto h-12 w-12 animate-spin rounded-full border-2 border-white/15 border-t-ocean" />
          <p className="mt-6 text-xs font-semibold uppercase tracking-[0.2em] text-ocean">Preparing your 3D experience...</p>
          <p className="mt-2 text-sm text-white/50">Loading the configurator only when you request it.</p>
        </div>
      </div>
    </section>
  );
}

export function ConfiguratorExperience({ vehicle }: { vehicle: VehicleSlug }) {
  return <ConfiguratorShell vehicle={vehicle} />;
}
