'use client';

import { designOptions } from '@/data/configurator';

interface DesignSelectorProps {
  selected: string;
  onChange: (id: string) => void;
}

const patternSwatches: Record<string, string> = {
  plain: 'bg-charcoal',
  stripe: 'bg-[repeating-linear-gradient(0deg,transparent,transparent_3px,#c2413a_3px,#c2413a_5px)]',
  diamond: 'bg-[repeating-linear-gradient(45deg,transparent,transparent_3px,#c7ad89_3px,#c7ad89_5px)]',
  carbon: 'bg-[repeating-linear-gradient(45deg,#1a2027_0px,#1a2027_2px,#2a3440_2px,#2a3440_4px)]',
  ribbed: 'bg-[repeating-linear-gradient(0deg,#111827_0px,#111827_2px,#f5f7f8_2px,#f5f7f8_4px)]',
};

export function DesignSelector({ selected, onChange }: DesignSelectorProps) {
  return (
    <div>
      <label className="text-xs font-semibold uppercase tracking-wider text-muted/70">Design</label>
      <div className="mt-2.5 grid grid-cols-2 gap-2">
        {designOptions.map((design) => (
          <button
            key={design.id}
            type="button"
            onClick={() => onChange(design.id)}
            className={`group flex items-center gap-3 rounded-lg border px-3 py-2.5 text-left transition-all ${
              selected === design.id
                ? 'border-ocean bg-ocean/5 ring-1 ring-ocean/20'
                : 'border-border bg-off-white hover:border-ocean/30'
            }`}
            aria-pressed={selected === design.id}
          >
            <span
              className={`h-7 w-7 shrink-0 rounded-md border border-white/20 ${patternSwatches[design.pattern] ?? 'bg-charcoal'}`}
              aria-hidden
            />
            <div className="min-w-0">
              <span className="block text-xs font-semibold text-charcoal">{design.label}</span>
              <span className="mt-0.5 block text-[10px] leading-tight text-muted line-clamp-2">{design.description}</span>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}
