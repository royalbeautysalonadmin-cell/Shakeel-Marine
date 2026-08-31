'use client';

import { Share2, RotateCcw, Check } from 'lucide-react';
import type { VehicleConfiguration, VehicleDefinition } from '@/data/configurator';
import { getConfigurationSummary } from '@/components/configurator/configuration';

interface ConfigurationSummaryProps {
  vehicle: VehicleDefinition;
  config: VehicleConfiguration;
  onShare: () => void;
  onReset: () => void;
  shareCopied: boolean;
}

export function ConfigurationSummary({ vehicle, config, onShare, onReset, shareCopied }: ConfigurationSummaryProps) {
  const summary = getConfigurationSummary(config, vehicle);

  return (
    <div className="rounded-xl border border-border bg-off-white p-4">
      <h3 className="text-xs font-semibold uppercase tracking-wider text-muted/70">Your Design</h3>
      <ul className="mt-3 space-y-2">
        {summary.map((line, i) => {
          const [label, ...rest] = line.split(': ');
          return (
            <li key={i} className="flex items-start gap-2 text-xs">
              <span className="mt-0.5 h-1.5 w-1.5 shrink-0 rounded-full bg-ocean" />
              <span>
                <span className="font-semibold text-charcoal">{label}:</span>{' '}
                <span className="text-muted">{rest.join(': ')}</span>
              </span>
            </li>
          );
        })}
      </ul>
      <div className="mt-4 flex gap-2">
        <button
          type="button"
          onClick={onShare}
          className="flex flex-1 items-center justify-center gap-1.5 rounded-lg border border-border bg-white px-3 py-2 text-xs font-semibold text-charcoal transition-colors hover:border-ocean hover:text-ocean"
        >
          {shareCopied ? <Check className="h-3.5 w-3.5" /> : <Share2 className="h-3.5 w-3.5" />}
          {shareCopied ? 'Copied!' : 'Share'}
        </button>
        <button
          type="button"
          onClick={onReset}
          className="flex flex-1 items-center justify-center gap-1.5 rounded-lg border border-border bg-white px-3 py-2 text-xs font-semibold text-charcoal transition-colors hover:border-ocean hover:text-ocean"
        >
          <RotateCcw className="h-3.5 w-3.5" />
          Reset
        </button>
      </div>
    </div>
  );
}
