'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ScrollReveal } from '@/components/shared/ScrollReveal';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { resources, resourceCategories } from '@/data/resources';
import { ArrowRight, BookOpen } from 'lucide-react';
import { useLang } from '@/components/shared/LangProvider';

export function ResourcesContent() {
  const { isArabic } = useLang();
  const [activeCategory, setActiveCategory] = useState('all');

  const filtered = activeCategory === 'all'
    ? resources
    : resources.filter((r) => r.category === activeCategory);

  return (
    <>
      <section className="relative py-32 lg:py-40 bg-navy-deep overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_20%,rgba(14,116,144,0.15),transparent_60%)]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <ScrollReveal>
            <span className="text-ocean text-xs font-semibold uppercase tracking-[0.2em]">
              {isArabic ? 'الموارد' : 'Resources'}
            </span>
            <h1 className="mt-4 text-white font-heading font-bold" style={{ fontSize: 'clamp(2.25rem, 5vw, 4.5rem)' }}>
              {isArabic ? 'أدلة ومراجع' : 'Guides & References'}
            </h1>
            <p className="mt-6 text-white/60 text-lg md:text-xl max-w-xl leading-relaxed">
              {isArabic ? 'أدلة شاملة للتأثيث البحري والمواد والصيانة.' : 'Comprehensive guides for marine upholstery, materials and maintenance.'}
            </p>
          </ScrollReveal>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-10 bg-gradient-to-t from-off-white/30 to-transparent" />
      </section>

      <section className="section-padding bg-off-white">
        <div className="max-w-7xl mx-auto container-padding">
          <ScrollReveal>
            <div className="flex flex-wrap justify-center gap-2 mb-12">
              {resourceCategories.map((cat) => (
                <button
                  key={cat.value}
                  onClick={() => setActiveCategory(cat.value)}
                  className={`px-5 py-2.5 rounded-full text-sm font-semibold uppercase tracking-wider transition-all duration-300 ${
                    activeCategory === cat.value
                      ? 'bg-ocean text-white shadow-lg shadow-ocean/20'
                      : 'bg-white text-muted hover:text-charcoal border border-border hover:border-ocean/30'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filtered.map((resource, i) => (
              <ScrollReveal key={resource.slug} delay={i * 0.1}>
                <Link
                  href={`/resources/${resource.slug}`}
                  className="group block bg-white rounded-xl p-8 border border-border hover:border-ocean/30 hover:shadow-lg hover:shadow-ocean/5 transition-all duration-300 h-full"
                >
                  <div className="w-10 h-10 rounded-full bg-ocean/10 flex items-center justify-center mb-4">
                    <BookOpen className="w-5 h-5 text-ocean" />
                  </div>
                  <h2 className="font-heading font-bold text-charcoal group-hover:text-ocean transition-colors">
                    {isArabic ? resource.titleAr : resource.title}
                  </h2>
                  <p className="mt-2 text-muted text-sm leading-relaxed">
                    {isArabic ? resource.descriptionAr : resource.description}
                  </p>
                  <div className="mt-4 flex items-center gap-2 text-ocean text-sm font-semibold">
                    <span>{isArabic ? 'اقرأ المزيد' : 'Read Guide'}</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
