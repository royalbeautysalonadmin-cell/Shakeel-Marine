'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ScrollReveal } from '@/components/shared/ScrollReveal';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { SHIMMER } from '@/lib/utils';
import { caseStudies } from '@/data/case-studies';
import { useLang } from '@/components/shared/LangProvider';
import { ArrowRight, Clock, User } from 'lucide-react';

export function CaseStudiesContent() {
  const { isArabic } = useLang();
  return (
    <>
      <section className="relative py-32 lg:py-40 bg-navy-deep overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_20%,rgba(14,116,144,0.15),transparent_60%)]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <ScrollReveal>
            <span className="text-ocean text-xs font-semibold uppercase tracking-[0.2em]">
              {isArabic ? 'دراسات الحالة' : 'Case Studies'}
            </span>
            <h1 className="mt-4 text-white font-heading font-bold" style={{ fontSize: 'clamp(2.25rem, 5vw, 4.5rem)' }}>
              {isArabic ? 'مشاريع نفّذناها' : 'Projects We Have Delivered'}
            </h1>
            <p className="mt-6 text-white/60 text-lg md:text-xl max-w-xl leading-relaxed">
              {isArabic ? 'تفاصيل مشاريعنا مع التحديات والحلول والنتائج الفعلية.' : 'Detailed breakdowns of our projects with challenges, solutions and real results.'}
            </p>
          </ScrollReveal>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-10 bg-gradient-to-t from-off-white/30 to-transparent" />
      </section>

      <section className="section-padding bg-off-white">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="grid grid-cols-2 gap-3 sm:gap-8">
            {caseStudies.map((study, i) => (
              <ScrollReveal key={study.slug} delay={i * 0.15}>
                <Link
                  href={`/case-studies/${study.slug}`}
                  className="group block bg-white rounded-xl overflow-hidden border border-border hover:border-ocean/30 hover:shadow-xl hover:shadow-ocean/5 transition-all duration-500 h-full"
                >
                  <div className="aspect-[16/9] bg-navy-deep relative overflow-hidden">
                    <Image
                      src={study.images[0]?.src || '/images/gallery/cover-01.jpg'}
                      alt={study.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      placeholder="blur"
                      blurDataURL={SHIMMER}
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute top-4 left-4 px-3 py-1.5 bg-ocean text-white text-xs font-semibold rounded-full">
                      {isArabic ? study.serviceAr : study.service}
                    </div>
                  </div>
                  <div className="p-8">
                    <h2 className="font-heading font-bold text-charcoal text-xl group-hover:text-ocean transition-colors">
                      {isArabic ? study.titleAr : study.title}
                    </h2>
                    <p className="mt-3 text-muted text-sm leading-relaxed line-clamp-3">
                      {isArabic ? study.descriptionAr : study.description}
                    </p>
                    <div className="mt-4 flex items-center gap-4 text-xs text-muted">
                      <span className="flex items-center gap-1">
                        <User className="w-3.5 h-3.5" />
                        {isArabic ? study.clientAr : study.client}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5" />
                        {study.duration}
                      </span>
                    </div>
                    <div className="mt-4 flex items-center gap-2 text-ocean text-sm font-semibold">
                      <span>{isArabic ? 'اقرأ المزيد' : 'Read Case Study'}</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
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
