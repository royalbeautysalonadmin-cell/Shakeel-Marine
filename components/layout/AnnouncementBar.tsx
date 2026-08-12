'use client';

import { useState } from 'react';
import { X } from 'lucide-react';

export function AnnouncementBar() {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  return (
    <div className="relative bg-navy-deep text-white/80 text-xs tracking-[0.15em] uppercase text-center py-2.5 px-12 border-b border-white/5">
      <span className="font-medium">
        Custom Marine Upholstery & Covers — Kuwait
      </span>
      <button
        onClick={() => setVisible(false)}
        className="absolute right-3 top-1/2 -translate-y-1/2 p-1 text-white/40 hover:text-white/80 transition-colors"
        aria-label="Dismiss announcement"
      >
        <X className="w-3.5 h-3.5" />
      </button>
    </div>
  );
}
