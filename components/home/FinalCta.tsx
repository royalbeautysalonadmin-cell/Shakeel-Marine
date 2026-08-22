'use client';

import { ScrollReveal } from '@/components/shared/ScrollReveal';
import { Button } from '@/components/ui/Button';
import { useLang } from '@/components/shared/LangProvider';
import { WhatsAppCTA } from '@/components/ui/WhatsAppCTA';

export function FinalCta() {
  const { t } = useLang();
  return (
    <section className="section-padding bg-navy-deep relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_50%,rgba(14,116,144,0.15),transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_70%_50%,rgba(198,161,91,0.05),transparent_50%)]" />

      <div className="max-w-4xl mx-auto container-padding text-center relative z-10">
        <ScrollReveal>
          <span className="text-ocean text-xs font-semibold uppercase tracking-[0.2em]">
            {t.finalCta.eyebrow}
          </span>
          <h2
            className="mt-4 font-heading font-bold text-white"
            style={{ fontSize: 'clamp(1.75rem, 4vw, 3rem)' }}
          >
            {t.finalCta.title}
          </h2>
          <p className="mt-5 text-white/60 text-lg max-w-xl mx-auto leading-relaxed">
            {t.finalCta.description}
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button href="/request-a-quote" variant="primary" size="lg">
              {t.finalCta.cta1}
            </Button>
            <Button href="/contact" variant="outline" size="lg">
              {t.finalCta.cta2}
            </Button>
            <WhatsAppCTA context="general" />
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
