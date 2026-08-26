'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ScrollReveal } from '@/components/shared/ScrollReveal';
import { Button } from '@/components/ui/Button';
import { WhatsAppCTA } from '@/components/ui/WhatsAppCTA';
import { SHIMMER } from '@/lib/utils';
import { useLang } from '@/components/shared/LangProvider';
import { type CaseStudy } from '@/data/case-studies';
import { Clock, User, CheckCircle } from 'lucide-react';

interface CaseStudyDetailProps {
  study: CaseStudy;
}

export function CaseStudyDetail({ study }: CaseStudyDetailProps) {
  const { isArabic } = useLang();
  return (
    <>
      <section className="relative py-32 lg:py-40 bg-navy-deep overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_20%,rgba(14,116,144,0.15),transparent_60%)]" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <ScrollReveal>
            <div className="flex items-center gap-2 text-white/40 text-sm mb-6">
              <Link href="/" className="hover:text-ocean transition-colors">{isArabic ? 'الرئيسية' : 'Home'}</Link>
              <span>/</span>
              <Link href="/case-studies" className="hover:text-ocean transition-colors">{isArabic ? 'دراسات الحالة' : 'Case Studies'}</Link>
              <span>/</span>
              <span className="text-white/60">{isArabic ? study.titleAr : study.title}</span>
            </div>
            <div className="flex items-center gap-4 text-sm text-white/40 mb-4">
              <span className="flex items-center gap-1"><User className="w-4 h-4" /> {isArabic ? study.clientAr : study.client}</span>
              <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> {study.duration}</span>
            </div>
            <h1 className="text-white font-heading font-bold" style={{ fontSize: 'clamp(1.75rem, 4vw, 3rem)' }}>
              {isArabic ? study.titleAr : study.title}
            </h1>
          </ScrollReveal>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-10 bg-gradient-to-t from-off-white/30 to-transparent" />
      </section>

      {/* Gallery */}
      <section className="section-padding bg-off-white">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {study.images.map((img, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div className="aspect-square rounded-xl overflow-hidden bg-navy-deep relative">
                  <Image src={img.src} alt={img.alt} fill sizes="(max-width: 640px) 50vw, 25vw" placeholder="blur" blurDataURL={SHIMMER} className="object-cover" />
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding bg-white">
        <div className="max-w-4xl mx-auto container-padding">
          <ScrollReveal>
            <p className="text-muted text-lg leading-relaxed mb-10">{isArabic ? study.descriptionAr : study.description}</p>
          </ScrollReveal>

          {/* Challenge */}
          <ScrollReveal>
            <div className="mb-10">
              <h2 className="font-heading font-bold text-charcoal text-xl mb-4">{isArabic ? 'التحدي' : 'The Challenge'}</h2>
              <p className="text-muted leading-relaxed">{isArabic ? study.challengeAr : study.challenge}</p>
            </div>
          </ScrollReveal>

          {/* Solution */}
          <ScrollReveal>
            <div className="mb-10">
              <h2 className="font-heading font-bold text-charcoal text-xl mb-4">{isArabic ? 'الحل' : 'Our Solution'}</h2>
              <p className="text-muted leading-relaxed">{isArabic ? study.solutionAr : study.solution}</p>
            </div>
          </ScrollReveal>

          {/* Result */}
          <ScrollReveal>
            <div className="mb-10 p-8 bg-ocean/5 rounded-xl border border-ocean/20">
              <h2 className="font-heading font-bold text-ocean text-xl mb-4 flex items-center gap-2">
                <CheckCircle className="w-5 h-5" />
                {isArabic ? 'النتيجة' : 'The Result'}
              </h2>
              <p className="text-charcoal leading-relaxed">{isArabic ? study.resultAr : study.result}</p>
            </div>
          </ScrollReveal>

          {/* Testimonial */}
          {study.testimonial && (
            <ScrollReveal>
              <div className="mb-10 p-8 bg-off-white rounded-xl">
                <p className="text-charcoal italic text-lg leading-relaxed">&ldquo;{isArabic ? study.testimonial.textAr : study.testimonial.text}&rdquo;</p>
                <p className="mt-4 text-ocean font-semibold text-sm">— {study.testimonial.author}</p>
              </div>
            </ScrollReveal>
          )}

          {/* CTA */}
          <ScrollReveal>
            <div className="mt-12 flex flex-col sm:flex-row gap-4">
              <Button href="/request-a-quote" variant="primary" size="lg">
                {isArabic ? 'مشروع مشابه' : 'Start Your Project'}
              </Button>
              <WhatsAppCTA context="general" />
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
