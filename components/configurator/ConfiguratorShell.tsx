'use client';

import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { ArrowRight, ChevronUp, Info } from 'lucide-react';
import type { VehicleConfiguration, VehicleDefinition, VehicleSlug, CameraPreset } from '@/data/configurator';
import { getDefaultConfiguration, getVehicleBySlug } from '@/data/configurator';
import { ModelViewer } from '@/components/configurator/ModelViewer';
import { CameraPresets } from '@/components/configurator/CameraPresets';
import { ColorPicker } from '@/components/configurator/ColorPicker';
import { MaterialSelector } from '@/components/configurator/MaterialSelector';
import { DesignSelector } from '@/components/configurator/DesignSelector';
import { ProductSelector } from '@/components/configurator/ProductSelector';
import { ConfigurationSummary } from '@/components/configurator/ConfigurationSummary';
import { InquiryForm } from '@/components/configurator/InquiryForm';
import { PhotoUpload } from '@/components/configurator/PhotoUpload';
import { getWhatsAppUrl } from '@/lib/site-config';
import { getConfigurationSummary } from '@/components/configurator/configuration';

interface ConfiguratorShellProps {
  vehicle: VehicleSlug;
}

function encodeConfig(config: VehicleConfiguration): string {
  if (typeof btoa === 'undefined') return '';
  try {
    return btoa(JSON.stringify(config));
  } catch {
    return '';
  }
}

function decodeConfig(hash: string): VehicleConfiguration | null {
  if (!hash) return null;
  try {
    const decoded = JSON.parse(atob(hash));
    if (decoded && typeof decoded === 'object' && 'vehicle' in decoded && 'product' in decoded) {
      return decoded as VehicleConfiguration;
    }
  } catch {
    // ignore
  }
  return null;
}

function loadStoredConfig(vehicleSlug: string): VehicleConfiguration | null {
  if (typeof window === 'undefined') return null;
  try {
    const stored = localStorage.getItem(`configurator-${vehicleSlug}`);
    if (stored) return JSON.parse(stored) as VehicleConfiguration;
  } catch {
    // ignore
  }
  return null;
}

function storeConfig(config: VehicleConfiguration) {
  try {
    localStorage.setItem(`configurator-${config.vehicle}`, JSON.stringify(config));
  } catch {
    // ignore
  }
}

function getInitialConfig(vehicle: VehicleDefinition, vehicleSlug: string): VehicleConfiguration {
  if (typeof window === 'undefined') return getDefaultConfiguration(vehicle);
  const hash = window.location.hash.slice(1);
  const fromUrl = decodeConfig(hash);
  if (fromUrl && fromUrl.vehicle === vehicleSlug) return fromUrl;
  const stored = loadStoredConfig(vehicleSlug);
  return stored ?? getDefaultConfiguration(vehicle);
}

export function ConfiguratorShell({ vehicle: vehicleSlug }: ConfiguratorShellProps) {
  const vehicle = getVehicleBySlug(vehicleSlug)!;
  const [config, setConfig] = useState<VehicleConfiguration>(() => getInitialConfig(vehicle, vehicleSlug));
  const [cameraPreset, setCameraPreset] = useState<CameraPreset>('perspective');
  const [showInquiry, setShowInquiry] = useState(false);
  const [shareCopied, setShareCopied] = useState(false);
  const [controlsOpen, setControlsOpen] = useState(true);
  const controlsRef = useRef<HTMLDivElement>(null);

  // Persist to localStorage on change
  useEffect(() => {
    storeConfig(config);
  }, [config]);

  const updateConfig = useCallback(<Key extends keyof VehicleConfiguration>(key: Key, value: VehicleConfiguration[Key]) => {
    setConfig((prev) => ({ ...prev, [key]: value }));
  }, []);

  const resetConfig = useCallback(() => {
    setConfig(getDefaultConfiguration(vehicle));
    setCameraPreset('perspective');
    window.location.hash = '';
  }, [vehicle]);

  const handleShare = useCallback(() => {
    const encoded = encodeConfig(config);
    const url = `${window.location.origin}/design-your-vehicle/${config.vehicle}#${encoded}`;
    navigator.clipboard.writeText(url).then(() => {
      setShareCopied(true);
      setTimeout(() => setShareCopied(false), 2000);
    }).catch(() => {
      window.location.hash = encoded;
    });
  }, [config]);

  const whatsappMessage = useMemo(() => {
    const summary = getConfigurationSummary(config, vehicle);
    return `Hello Shakeel Marine, I created a custom design:\n\n${summary.join('\n')}`;
  }, [config, vehicle]);

  const activeProduct = vehicle.products.find((p) => p.id === config.product) ?? vehicle.products[0];
  const isFloorMat = activeProduct.component === 'floor-mat';

  return (
    <section className="bg-[#0a202d] px-4 pb-12 pt-6 sm:px-6 lg:px-8 lg:pb-16 lg:pt-8">
      <div className="mx-auto max-w-7xl">
        {/* Desktop layout: side-by-side */}
        <div className="flex flex-col gap-6 lg:flex-row lg:min-h-[calc(100vh-12rem)]">
          {/* 3D Viewer */}
          <div className="flex-1 lg:sticky lg:top-24 lg:self-start">
            <ModelViewer config={config} cameraPreset={cameraPreset} />
            <CameraPresets active={cameraPreset} onChange={setCameraPreset} />
          </div>

          {/* Controls panel */}
          <div className="w-full lg:w-[380px] lg:shrink-0" ref={controlsRef}>
            {/* Mobile toggle */}
            <button
              type="button"
              onClick={() => setControlsOpen(!controlsOpen)}
              className="mb-3 flex w-full items-center justify-between rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-xs font-semibold uppercase tracking-wider text-white/60 lg:hidden"
            >
              {controlsOpen ? 'Hide options' : 'Show options'}
              <ChevronUp className={`h-4 w-4 transition-transform ${controlsOpen ? '' : 'rotate-180'}`} />
            </button>

            <div className={`space-y-5 ${controlsOpen ? '' : 'hidden lg:block'}`}>
              {/* Product selector */}
              <div className="rounded-2xl border border-white/10 bg-navy-deep p-5">
                <ProductSelector
                  products={vehicle.products}
                  selected={config.product}
                  onChange={(id) => updateConfig('product', id as VehicleConfiguration['product'])}
                />
              </div>

              {/* Photo Upload */}
              <div className="rounded-2xl border border-white/10 bg-navy-deep p-5">
                <h3 className="text-xs font-semibold uppercase tracking-wider text-ocean mb-4">Your Vessel Photo</h3>
                <p className="mb-3 text-[11px] leading-relaxed text-white/40">
                  Upload a photo of your vessel to see it mapped onto the 3D model with your custom design.
                </p>
                <PhotoUpload
                  photo={config.userPhoto}
                  onPhotoChange={(photo) => updateConfig('userPhoto', photo)}
                />
              </div>

              {/* Colors */}
              <div className="rounded-2xl border border-white/10 bg-navy-deep p-5">
                <h3 className="text-xs font-semibold uppercase tracking-wider text-ocean mb-4">Colors</h3>
                <div className="space-y-4">
                  <ColorPicker
                    label={isFloorMat ? 'Mat Color' : 'Main Color'}
                    selected={config.mainColor}
                    customColor={config.customMainColor}
                    onChange={(id) => updateConfig('mainColor', id)}
                    onCustomChange={(hex) => updateConfig('customMainColor', hex)}
                  />
                  <ColorPicker
                    label="Accent Color"
                    selected={config.accentColor}
                    customColor={config.customAccentColor}
                    onChange={(id) => updateConfig('accentColor', id)}
                    onCustomChange={(hex) => updateConfig('customAccentColor', hex)}
                  />
                  <ColorPicker
                    label="Stitching Color"
                    selected={config.stitchingColor}
                    customColor={config.customStitchingColor}
                    onChange={(id) => updateConfig('stitchingColor', id)}
                    onCustomChange={(hex) => updateConfig('customStitchingColor', hex)}
                  />
                </div>
              </div>

              {/* Material */}
              <div className="rounded-2xl border border-white/10 bg-navy-deep p-5">
                <MaterialSelector
                  selected={config.material}
                  onChange={(id) => updateConfig('material', id)}
                />
              </div>

              {/* Design */}
              <div className="rounded-2xl border border-white/10 bg-navy-deep p-5">
                <DesignSelector
                  selected={config.design}
                  onChange={(id) => updateConfig('design', id)}
                />
              </div>

              {/* Summary */}
              <div className="rounded-2xl border border-white/10 bg-navy-deep p-5">
                <ConfigurationSummary
                  vehicle={vehicle}
                  config={config}
                  onShare={handleShare}
                  onReset={resetConfig}
                  shareCopied={shareCopied}
                />
              </div>

              {/* Action buttons */}
              <div className="space-y-2.5">
                <button
                  type="button"
                  onClick={() => setShowInquiry(true)}
                  className="flex w-full items-center justify-center gap-2 rounded-xl bg-ocean px-6 py-3.5 text-sm font-semibold uppercase tracking-wide text-white shadow-lg shadow-ocean/20 transition-all hover:bg-ocean-light"
                >
                  Request a Quote
                  <ArrowRight className="h-4 w-4" />
                </button>
                <a
                  href={getWhatsAppUrl(whatsappMessage)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex w-full items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 px-6 py-3.5 text-sm font-semibold uppercase tracking-wide text-white/70 transition-all hover:border-white/20 hover:bg-white/10 hover:text-white"
                >
                  Chat on WhatsApp
                  <Info className="h-4 w-4" />
                </a>
              </div>

              <p className="text-center text-[10px] leading-relaxed text-white/35">
                This is a design preview. Shakeel Marine will finalize materials, exact colors and dimensions during your consultation.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Inquiry form modal */}
      {showInquiry && (
        <InquiryForm
          vehicle={vehicle}
          config={config}
          onClose={() => setShowInquiry(false)}
        />
      )}
    </section>
  );
}
