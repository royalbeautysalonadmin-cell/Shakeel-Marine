'use client';

import Link from 'next/link';
import { ScrollReveal } from '@/components/shared/ScrollReveal';
import { useLang } from '@/components/shared/LangProvider';
import { type Resource } from '@/data/resources';
import { ArrowLeft } from 'lucide-react';

interface ResourceDetailProps {
  resource: Resource;
}

export function ResourceDetail({ resource }: ResourceDetailProps) {
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
              <Link href="/resources" className="hover:text-ocean transition-colors">{isArabic ? 'الموارد' : 'Resources'}</Link>
              <span>/</span>
              <span className="text-white/60">{isArabic ? resource.titleAr : resource.title}</span>
            </div>
            <h1 className="text-white font-heading font-bold" style={{ fontSize: 'clamp(1.75rem, 4vw, 3rem)' }}>
              {isArabic ? resource.titleAr : resource.title}
            </h1>
            <p className="mt-4 text-white/60 text-lg max-w-xl leading-relaxed">
              {isArabic ? resource.descriptionAr : resource.description}
            </p>
          </ScrollReveal>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-10 bg-gradient-to-t from-off-white/30 to-transparent" />
      </section>

      <section className="section-padding bg-white">
        <div className="max-w-4xl mx-auto container-padding">
          <ScrollReveal>
            <div
              className="prose prose-lg max-w-none text-charcoal prose-headings:font-heading prose-headings:text-charcoal prose-a:text-ocean prose-strong:text-charcoal"
              dangerouslySetInnerHTML={{ __html: resource.content }}
            />
          </ScrollReveal>

          <ScrollReveal>
            <div className="mt-12 pt-8 border-t border-border">
              <Link href="/resources" className="inline-flex items-center gap-2 text-ocean hover:text-ocean-light transition-colors font-semibold">
                <ArrowLeft className="w-4 h-4" />
                {isArabic ? 'العودة إلى الموارد' : 'Back to Resources'}
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
