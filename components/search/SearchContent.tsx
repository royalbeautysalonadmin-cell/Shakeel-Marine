'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ScrollReveal } from '@/components/shared/ScrollReveal';
import { SHIMMER } from '@/lib/utils';
import { useLang } from '@/components/shared/LangProvider';
import { searchContent, type SearchResult } from '@/data/search';
import { Search, X, Package, Settings, FileText, MapPin, BookOpen } from 'lucide-react';

const typeIcons = {
  product: Package,
  service: Settings,
  blog: FileText,
  area: MapPin,
  resource: BookOpen,
};

const typeLabels = {
  product: { en: 'Product', ar: 'منتج' },
  service: { en: 'Service', ar: 'خدمة' },
  blog: { en: 'Blog', ar: 'مدوّنة' },
  area: { en: 'Area', ar: 'منطقة' },
  resource: { en: 'Resource', ar: 'مرجع' },
};

export function SearchContent() {
  const { isArabic } = useLang();
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<SearchResult[]>([]);

  const handleSearch = (value: string) => {
    setQuery(value);
    if (value.trim().length >= 2) {
      setResults(searchContent(value));
    } else {
      setResults([]);
    }
  };

  const clearSearch = () => {
    setQuery('');
    setResults([]);
  };

  const groupedResults = useMemo(() => {
    const groups: Record<string, SearchResult[]> = {};
    results.forEach((r) => {
      if (!groups[r.type]) groups[r.type] = [];
      groups[r.type].push(r);
    });
    return groups;
  }, [results]);

  return (
    <>
      <section className="relative py-32 lg:py-40 bg-navy-deep overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_20%,rgba(14,116,144,0.15),transparent_60%)]" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <ScrollReveal>
            <span className="text-ocean text-xs font-semibold uppercase tracking-[0.2em]">
              {isArabic ? 'بحث' : 'Search'}
            </span>
            <h1 className="mt-4 text-white font-heading font-bold" style={{ fontSize: 'clamp(2.25rem, 5vw, 4.5rem)' }}>
              {isArabic ? 'ابحث في موقعنا' : 'Search Our Site'}
            </h1>
            <p className="mt-6 text-white/60 text-lg md:text-xl max-w-xl leading-relaxed">
              {isArabic ? 'ابحث عن المنتجات الخدمات والمقالات.' : 'Find products, services, articles and more.'}
            </p>
          </ScrollReveal>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-10 bg-gradient-to-t from-off-white/30 to-transparent" />
      </section>

      <section className="section-padding bg-off-white">
        <div className="max-w-4xl mx-auto container-padding">
          {/* Search Input */}
          <ScrollReveal>
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted" />
              <input
                type="text"
                value={query}
                onChange={(e) => handleSearch(e.target.value)}
                placeholder={isArabic ? 'اكتب كلمة للبحث...' : 'Type to search...'}
                className="w-full pl-12 pr-12 py-4 rounded-xl border border-border bg-white text-charcoal text-lg focus:outline-none focus:border-ocean focus:ring-2 focus:ring-ocean/20 transition-all"
              />
              {query && (
                <button onClick={clearSearch} className="absolute right-4 top-1/2 -translate-y-1/2 p-1 text-muted hover:text-charcoal">
                  <X className="w-5 h-5" />
                </button>
              )}
            </div>
          </ScrollReveal>

          {/* Results */}
          {results.length > 0 && (
            <ScrollReveal>
              <p className="mt-6 text-muted text-sm">
                {isArabic ? `وجدنا ${results.length} نتيجة` : `Found ${results.length} results`}
              </p>
            </ScrollReveal>
          )}

          {Object.entries(groupedResults).map(([type, items]) => {
            const Icon = typeIcons[type as keyof typeof typeIcons];
            const label = typeLabels[type as keyof typeof typeLabels];
            return (
              <ScrollReveal key={type}>
                <div className="mt-8">
                  <h3 className="flex items-center gap-2 font-heading font-bold text-charcoal text-lg mb-4">
                    <Icon className="w-5 h-5 text-ocean" />
                    {isArabic ? label.ar : label.en}
                    <span className="text-muted text-sm font-normal">({items.length})</span>
                  </h3>
                  <div className="space-y-3">
                    {items.map((item, i) => (
                      <Link
                        key={i}
                        href={item.url}
                        className="flex items-start gap-4 p-4 rounded-xl bg-white border border-border hover:border-ocean/30 hover:shadow-md transition-all group"
                      >
                        {item.image && (
                          <div className="w-16 h-16 rounded-lg overflow-hidden bg-navy-deep relative shrink-0">
                            <Image src={item.image} alt={item.title} fill sizes="64px" className="object-cover" />
                          </div>
                        )}
                        <div className="flex-1 min-w-0">
                          <h4 className="font-heading font-bold text-charcoal group-hover:text-ocean transition-colors line-clamp-1">
                            {isArabic ? item.titleAr : item.title}
                          </h4>
                          <p className="mt-1 text-muted text-sm line-clamp-2">
                            {isArabic ? item.descriptionAr : item.description}
                          </p>
                          <span className="mt-2 inline-block text-ocean text-xs font-medium">{item.url}</span>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            );
          })}

          {query.length >= 2 && results.length === 0 && (
            <ScrollReveal>
              <div className="mt-12 text-center py-12">
                <Search className="w-12 h-12 text-muted/30 mx-auto mb-4" />
                <p className="text-muted text-lg">
                  {isArabic ? 'لم نجد نتائج. جرّب كلمات مختلفة.' : 'No results found. Try different keywords.'}
                </p>
              </div>
            </ScrollReveal>
          )}
        </div>
      </section>
    </>
  );
}
