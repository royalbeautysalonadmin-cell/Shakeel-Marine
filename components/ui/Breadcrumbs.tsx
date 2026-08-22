'use client';

import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import { getBreadcrumbSchema } from '@/lib/seo';

interface BreadcrumbItem {
  label: string;
  href: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export function Breadcrumbs({ items }: BreadcrumbsProps) {
  const allItems = [{ label: 'Home', href: '/' }, ...items];
  const schema = getBreadcrumbSchema(allItems.map((i) => ({ name: i.label, url: i.href })));

  return (
    <nav aria-label="Breadcrumb" className="mb-6">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <ol className="flex flex-wrap items-center gap-1.5 text-xs text-white/40">
        {allItems.map((item, i) => (
          <li key={item.href} className="flex items-center gap-1.5">
            {i > 0 && <ChevronRight className="w-3 h-3" />}
            {i === allItems.length - 1 ? (
              <span className="text-white/60">{item.label}</span>
            ) : (
              <Link href={item.href} className="hover:text-white/70 transition-colors">{item.label}</Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
