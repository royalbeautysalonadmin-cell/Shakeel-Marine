'use client';

import type { ConfiguratorProductOption } from '@/data/configurator';

interface ProductSelectorProps {
  products: ConfiguratorProductOption[];
  selected: string;
  onChange: (id: string) => void;
}

export function ProductSelector({ products, selected, onChange }: ProductSelectorProps) {
  if (products.length <= 1) return null;

  return (
    <div>
      <label className="text-xs font-semibold uppercase tracking-wider text-muted/70">Product</label>
      <div className="mt-2.5 grid grid-cols-2 gap-2">
        {products.map((product) => (
          <button
            key={product.id}
            type="button"
            onClick={() => onChange(product.id)}
            className={`rounded-lg border px-3 py-2.5 text-left transition-all ${
              selected === product.id
                ? 'border-ocean bg-ocean/5 ring-1 ring-ocean/20'
                : 'border-border bg-off-white hover:border-ocean/30'
            }`}
            aria-pressed={selected === product.id}
          >
            <span className="text-xs font-semibold text-charcoal">{product.name}</span>
            <span className="mt-0.5 block text-[10px] leading-tight text-muted line-clamp-2">{product.description}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
