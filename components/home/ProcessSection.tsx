'use client';

import { ScrollReveal } from '@/components/shared/ScrollReveal';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { useLang } from '@/components/shared/LangProvider';

const stepNumbers = ['01', '02', '03', '04'];

export function ProcessSection() {
  const { t } = useLang();
  return (
    <section className="section-padding bg-off-white">
      <div className="max-w-7xl mx-auto container-padding">
        <ScrollReveal>
          <SectionHeading
            eyebrow={t.process.eyebrow}
            title={t.process.title}
            description={t.process.description}
          />
        </ScrollReveal>

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {t.process.steps.map((step, i) => (
            <ScrollReveal key={stepNumbers[i]} delay={i * 0.15}>
              <div className="relative">
                {/* Connector line */}
                {i < t.process.steps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-[calc(50%+40px)] right-[-50%] h-px bg-border">
                    <div className="absolute right-0 -top-1 w-2 h-2 rounded-full bg-ocean/30" />
                  </div>
                )}

                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-navy-deep text-ocean font-heading font-bold text-xl mb-5">
                    {stepNumbers[i]}
                  </div>
                  <h3 className="font-heading font-bold text-charcoal text-base uppercase tracking-wider">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-muted text-sm leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
