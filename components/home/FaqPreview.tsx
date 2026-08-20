'use client';

import Link from 'next/link';
import { ScrollReveal } from '@/components/shared/ScrollReveal';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Button } from '@/components/ui/Button';
import { faqData } from '@/data/faq';
import { ArrowRight, ChevronRight } from 'lucide-react';
import { useLang } from '@/components/shared/LangProvider';

export function FaqPreview() {
  const { t } = useLang();
  const previewFaqs = faqData.slice(0, 4);

  return (
    <section className="section-padding bg-white">
      <div className="max-w-7xl mx-auto container-padding">
        <ScrollReveal>
          <SectionHeading
            eyebrow={t.faqPreview.eyebrow}
            title={t.faqPreview.title}
            description={t.faqPreview.description}
          />
        </ScrollReveal>

        <div className="mt-16 max-w-3xl mx-auto space-y-4">
          {previewFaqs.map((faq, i) => (
            <ScrollReveal key={i} delay={i * 0.1}>
              <div className="border border-border rounded-lg p-6 hover:border-ocean/30 transition-colors">
                <div className="flex items-start gap-3">
                  <ChevronRight className="w-5 h-5 text-ocean mt-0.5 shrink-0" />
                  <div>
                    <h3 className="font-heading font-bold text-charcoal text-base">
                      {faq.question}
                    </h3>
                    <p className="mt-2 text-muted text-sm leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal>
          <div className="mt-12 text-center">
            <Button href="/faq" variant="ghost" size="md">
              {t.faqPreview.viewAll}
              <ArrowRight className="w-4 h-4 ml-1" />
            </Button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
