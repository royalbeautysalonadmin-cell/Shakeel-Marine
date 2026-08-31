'use client';

import { Eye, RotateCcw } from 'lucide-react';
import type { CameraPreset } from '@/data/configurator';
import { cameraPresets } from '@/data/configurator';

interface CameraPresetsProps {
  active: CameraPreset;
  onChange: (preset: CameraPreset) => void;
}

export function CameraPresets({ active, onChange }: CameraPresetsProps) {
  return (
    <div>
      <label className="text-xs font-semibold uppercase tracking-wider text-muted/70">Camera Angle</label>
      <div className="mt-2.5 grid grid-cols-5 gap-1.5">
        {cameraPresets.map((preset) => (
          <button
            key={preset.id}
            type="button"
            onClick={() => onChange(preset.id)}
            className={`flex flex-col items-center gap-1 rounded-lg px-2 py-2.5 text-[10px] font-semibold uppercase tracking-wider transition-all ${
              active === preset.id
                ? 'bg-ocean text-white shadow-sm'
                : 'bg-off-white text-muted hover:bg-ocean/10 hover:text-ocean'
            }`}
            aria-pressed={active === preset.id}
          >
            {preset.id === 'perspective' ? (
              <Eye className="h-3.5 w-3.5" />
            ) : (
              <RotateCcw className="h-3.5 w-3.5" />
            )}
            {preset.label}
          </button>
        ))}
      </div>
    </div>
  );
}
