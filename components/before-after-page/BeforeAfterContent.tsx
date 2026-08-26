'use client';

import { useState } from 'react';
import Image from 'next/image';
import { ScrollReveal } from '@/components/shared/ScrollReveal';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Button } from '@/components/ui/Button';
import { WhatsAppCTA } from '@/components/ui/WhatsAppCTA';
import { SHIMMER } from '@/lib/utils';
import { useLang } from '@/components/shared/LangProvider';
import { ArrowRight } from 'lucide-react';

const projects = [
  {
    before: '/images/before-after/canopy-before-01.jpg',
    after: '/images/before-after/canopy-after-01.jpg',
    titleEn: 'Canopy Cover Replacement',
    titleAr: 'استبدال غطاء المظلة',
    descEn: 'Damaged and torn canopy replaced with a custom-fitted marine cover',
    descAr: 'مظلة تالفة وممزقة تم استبدالها بغطاء بحري مُخصص',
    category: 'canopy',
  },
  {
    before: '/images/before-after/boat-before-01.jpg',
    after: '/images/before-after/boat-after-01.jpg',
    titleEn: 'Boat Protection',
    titleAr: 'حماية القارب',
    descEn: 'Exposed boat now protected with a durable custom cover',
    descAr: 'قارب مكشوف الآن محمي بغطاء مُخصص متين',
    category: 'boat',
  },
  {
    before: '/images/before-after/jetski-before-01.jpg',
    after: '/images/before-after/jetski-after-01.jpg',
    titleEn: 'Jet Ski Seat Restoration',
    titleAr: 'إصلاح مقعد جيت سكي',
    descEn: 'Old worn seat transformed into a custom marine-grade seat',
    descAr: 'مقعد قديم تم تحويله إلى مقعد بحري مُخصص',
    category: 'jet-ski',
  },
];

const filterCategories = [
  { value: 'all', label: 'All Projects' },
  { value: 'canopy', label: 'Canopy' },
  { value: 'boat', label: 'Boat' },
  { value: 'jet-ski', label: 'Jet Ski' },
];

export function BeforeAfterContent() {
  const { isArabic } = useLang();
  const [active, setActive] = useState(0);
  const [filter, setFilter] = useState('all');

  const filtered = filter === 'all' ? projects : projects.filter((p) => p.category === filter);

  return (
    <>
      <section className="relative py-32 lg:py-40 bg-navy-deep overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_20%,rgba(14,116,144,0.15),transparent_60%)]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <ScrollReveal>
            <span className="text-ocean text-xs font-semibold uppercase tracking-[0.2em]">
              {isArabic ? 'أعمالنا' : 'Our Work'}
            </span>
            <h1 className="mt-4 text-white font-heading font-bold" style={{ fontSize: 'clamp(2.25rem, 5vw, 4.5rem)' }}>
              {isArabic ? 'قبل وبعد' : 'Before & After'}
            </h1>
            <p className="mt-6 text-white/60 text-lg md:text-xl max-w-xl leading-relaxed">
              {isArabic ? 'شاهد تحويلاتنا المذهلة للعمليات البحرية.' : 'See our stunning marine transformations.'}
            </p>
          </ScrollReveal>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-10 bg-gradient-to-t from-off-white/30 to-transparent" />
      </section>

      <section className="section-padding bg-off-white">
        <div className="max-w-7xl mx-auto container-padding">
          <ScrollReveal>
            <div className="flex flex-wrap justify-center gap-2 mb-12">
              {filterCategories.map((cat) => (
                <button
                  key={cat.value}
                  onClick={() => { setFilter(cat.value); setActive(0); }}
                  className={`px-5 py-2.5 rounded-full text-sm font-semibold uppercase tracking-wider transition-all duration-300 ${
                    filter === cat.value
                      ? 'bg-ocean text-white shadow-lg shadow-ocean/20'
                      : 'bg-white text-muted hover:text-charcoal border border-border hover:border-ocean/30'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal direction="left">
              <div className="relative rounded-xl overflow-hidden bg-navy-deep aspect-[4/3]">
                <div className="absolute inset-0 grid grid-cols-2">
                  <div className="relative">
                    <Image src={filtered[active]?.before || ''} alt="Before" fill className="object-cover" />
                    <div className="absolute top-3 left-3 px-2 py-1 bg-red-500/90 text-white text-[10px] font-bold uppercase rounded">
                      {isArabic ? 'قبل' : 'Before'}
                    </div>
                  </div>
                  <div className="relative">
                    <Image src={filtered[active]?.after || ''} alt="After" fill className="object-cover" />
                    <div className="absolute top-3 right-3 px-2 py-1 bg-green-500/90 text-white text-[10px] font-bold uppercase rounded">
                      {isArabic ? 'بعد' : 'After'}
                    </div>
                  </div>
                </div>
                <div className="absolute inset-y-0 left-1/2 -translate-x-1/2 w-1 bg-white/50 z-10" />
                <div className="absolute inset-y-0 left-1/2 -translate-x-1/2 w-8 h-8 bg-white rounded-full flex items-center justify-center z-20 top-1/2 -translate-y-1/2 shadow-lg">
                  <ArrowRight className="w-4 h-4 text-navy-deep" />
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right">
              <div className="space-y-4">
                {filtered.map((project, i) => (
                  <button
                    key={i}
                    onClick={() => setActive(i)}
                    className={`w-full text-left p-5 rounded-xl border transition-all duration-300 ${
                      active === i
                        ? 'border-ocean bg-ocean/5 shadow-lg shadow-ocean/5'
                        : 'border-border hover:border-ocean/30 bg-white'
                    }`}
                  >
                    <h3 className={`font-heading font-bold text-base ${active === i ? 'text-ocean' : 'text-charcoal'}`}>
                      {isArabic ? project.titleAr : project.titleEn}
                    </h3>
                    <p className="mt-1 text-muted text-sm">
                      {isArabic ? project.descAr : project.descEn}
                    </p>
                  </button>
                ))}
              </div>
            </ScrollReveal>
          </div>

          <ScrollReveal>
            <div className="mt-16 text-center">
              <Button href="/request-a-quote" variant="primary" size="lg">
                {isArabic ? 'احصل على عرض' : 'Start Your Project'}
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
