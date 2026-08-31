'use client';

import { materialOptions } from '@/data/configurator';

interface MaterialSelectorProps {
  selected: string;
  onChange: (id: string) => void;
}

export function MaterialSelector({ selected, onChange }: MaterialSelectorProps) {
  return (
    <div>
      <label className="text-xs font-semibold uppercase tracking-wider text-muted/70">Material</label>
      <div className="mt-2.5 space-y-2">
        {materialOptions.map((material) => (
          <button
            key={material.id}
            type="button"
            onClick={() => onChange(material.id)}
            className={`w-full rounded-lg border px-4 py-3 text-left transition-all ${
              selected === material.id
                ? 'border-ocean bg-ocean/5 ring-1 ring-ocean/20'
                : 'border-border bg-off-white hover:border-ocean/30'
            }`}
            aria-pressed={selected === material.id}
          >
            <span className="text-sm font-semibold text-charcoal">{material.label}</span>
            <span className="mt-0.5 block text-xs leading-relaxed text-muted">{material.description}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
