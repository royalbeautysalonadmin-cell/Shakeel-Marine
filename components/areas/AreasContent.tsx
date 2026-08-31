'use client';

import Link from 'next/link';
import { ScrollReveal } from '@/components/shared/ScrollReveal';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { areas } from '@/data/areas';
import { MapPin, ArrowRight } from 'lucide-react';
import { useLang } from '@/components/shared/LangProvider';

export function AreasContent() {
  const { isArabic } = useLang();
  return (
    <>
      <section className="relative py-32 lg:py-40 bg-navy-deep overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_20%,rgba(14,116,144,0.15),transparent_60%)]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <ScrollReveal>
            <span className="text-ocean text-xs font-semibold uppercase tracking-[0.2em]">
              {isArabic ? 'مناطق الخدمة' : 'Service Areas'}
            </span>
            <h1 className="mt-4 text-white font-heading font-bold" style={{ fontSize: 'clamp(2.25rem, 5vw, 4.5rem)' }}>
              {isArabic ? 'نخدم جميع أنحاء الكويت' : 'Areas We Serve'}
            </h1>
            <p className="mt-6 text-white/60 text-lg md:text-xl max-w-xl leading-relaxed">
              {isArabic ? 'نصل إليك أينما كنت في الكويت بخدماتنا البحرية المخصصة.' : 'We bring custom marine services to your location across Kuwait.'}
            </p>
          </ScrollReveal>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-10 bg-gradient-to-t from-off-white/30 to-transparent" />
      </section>

      <section className="section-padding bg-off-white">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6">
            {areas.map((area, i) => (
              <ScrollReveal key={area.slug} delay={i * 0.1}>
                <Link
                  href={`/areas/${area.slug}`}
                  className="group block bg-white rounded-xl p-5 sm:p-8 border border-border hover:border-ocean/30 hover:shadow-lg hover:shadow-ocean/5 transition-all duration-300 h-full min-w-0"
                >
                  <div className="w-12 h-12 rounded-full bg-ocean/10 flex items-center justify-center mb-5">
                    <MapPin className="w-5 h-5 text-ocean" />
                  </div>
                  <h2 className="font-heading font-bold text-charcoal text-lg group-hover:text-ocean transition-colors">
                    {isArabic ? area.nameAr : area.name}
                  </h2>
                  <p className="mt-2 text-muted text-sm leading-relaxed line-clamp-3">
                    {isArabic ? area.descriptionAr : area.description}
                  </p>
                  <div className="mt-4 flex items-center gap-2 text-ocean text-sm font-semibold">
                    <span>{isArabic ? 'عرض التفاصيل' : 'View Details'}</span>
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
