'use client';

import { ScrollReveal } from '@/components/shared/ScrollReveal';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { MessageCircle } from 'lucide-react';
import { useLang } from '@/components/shared/LangProvider';

export function TestimonialsSection() {
  const { t } = useLang();
  return (
    <section className="section-padding bg-off-white">
      <div className="max-w-7xl mx-auto container-padding">
        <ScrollReveal>
          <SectionHeading
            eyebrow={t.testimonials.eyebrow}
            title={t.testimonials.title}
          />
        </ScrollReveal>

        <ScrollReveal>
          <div className="mt-16 max-w-2xl mx-auto text-center">
            <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-ocean/10 flex items-center justify-center">
              <MessageCircle className="w-7 h-7 text-ocean" />
            </div>
            <p className="text-muted text-lg leading-relaxed">
              {t.testimonials.description}
            </p>
            <p className="mt-4 text-muted/60 text-sm">
              {t.testimonials.cta}
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
