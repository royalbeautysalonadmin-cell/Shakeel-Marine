'use client';

import { ScrollReveal } from '@/components/shared/ScrollReveal';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Button } from '@/components/ui/Button';
import { WhatsAppCTA } from '@/components/ui/WhatsAppCTA';
import { useLang } from '@/components/shared/LangProvider';
import { MessageSquare, Palette, Wrench, CheckCircle } from 'lucide-react';

const stepIcons = [MessageSquare, Palette, Wrench, CheckCircle];

export function HowItWorksContent() {
  const { t } = useLang();
  return (
    <>
      <section className="relative py-32 lg:py-40 bg-navy-deep overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_20%,rgba(14,116,144,0.15),transparent_60%)]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <ScrollReveal>
            <span className="text-ocean text-xs font-semibold uppercase tracking-[0.2em]">
              {t.howItWorks.eyebrow}
            </span>
            <h1 className="mt-4 text-white font-heading font-bold" style={{ fontSize: 'clamp(2.25rem, 5vw, 4.5rem)' }}>
              {t.howItWorks.title}
            </h1>
            <p className="mt-6 text-white/60 text-lg md:text-xl max-w-xl leading-relaxed">
              {t.howItWorks.description}
            </p>
          </ScrollReveal>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-10 bg-gradient-to-t from-off-white/30 to-transparent" />
      </section>

      <section className="section-padding bg-off-white">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {t.howItWorks.steps.map((step, i) => {
              const Icon = stepIcons[i];
              return (
                <ScrollReveal key={step.title} delay={i * 0.15}>
                  <div className="relative bg-white rounded-xl p-8 border border-border hover:border-ocean/30 hover:shadow-lg hover:shadow-ocean/5 transition-all duration-300 text-center">
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-ocean text-white text-sm font-bold flex items-center justify-center">
                      {i + 1}
                    </div>
                    <div className="w-14 h-14 mx-auto mb-5 rounded-full bg-ocean/10 flex items-center justify-center mt-4">
                      <Icon className="w-6 h-6 text-ocean" />
                    </div>
                    <h3 className="font-heading font-bold text-charcoal">{step.title}</h3>
                    <p className="mt-2 text-muted text-sm leading-relaxed">{step.desc}</p>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="max-w-4xl mx-auto container-padding text-center">
          <ScrollReveal>
            <SectionHeading
              eyebrow={t.howItWorks.ctaEyebrow}
              title={t.howItWorks.ctaTitle}
              description={t.howItWorks.ctaDesc}
            />
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/request-a-quote" variant="primary" size="lg">
                {t.howItWorks.ctaBtn}
              </Button>
              <WhatsAppCTA context="general" />
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
