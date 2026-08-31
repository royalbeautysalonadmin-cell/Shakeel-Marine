'use client';

import { Pipette } from 'lucide-react';
import { colorOptions } from '@/data/configurator';

interface ColorPickerProps {
  label: string;
  selected: string;
  customColor: string;
  onChange: (id: string) => void;
  onCustomChange: (hex: string) => void;
}

export function ColorPicker({ label, selected, customColor, onChange, onCustomChange }: ColorPickerProps) {
  return (
    <div>
      <label className="text-xs font-semibold uppercase tracking-wider text-muted/70">{label}</label>
      <div className="mt-2.5 flex flex-wrap gap-2">
        {colorOptions.map((color) => (
          <button
            key={color.id}
            type="button"
            onClick={() => onChange(color.id)}
            className="group relative h-8 w-8 rounded-full border-2 transition-all"
            style={{
              backgroundColor: color.hex,
              borderColor: selected === color.id ? color.hex : 'transparent',
              boxShadow: selected === color.id ? `0 0 0 2px white, 0 0 0 4px ${color.hex}` : undefined,
            }}
            title={color.label}
            aria-label={`${label}: ${color.label}`}
            aria-pressed={selected === color.id}
          >
            {selected === color.id && (
              <span className="absolute inset-0 flex items-center justify-center">
                <span className="h-2 w-2 rounded-full bg-white shadow-sm" />
              </span>
            )}
          </button>
        ))}
        <div className="relative">
          <input
            type="color"
            value={customColor}
            onChange={(e) => {
              onCustomChange(e.target.value);
              onChange('custom');
            }}
            className="absolute inset-0 h-full w-full cursor-pointer opacity-0"
            aria-label={`${label} custom color`}
          />
          <div
            className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-dashed border-muted/30 transition-colors hover:border-ocean"
            style={{ backgroundColor: selected === 'custom' ? customColor : undefined }}
            title="Custom color"
          >
            <Pipette className="h-3.5 w-3.5 text-muted/50" />
          </div>
        </div>
      </div>
    </div>
  );
}
