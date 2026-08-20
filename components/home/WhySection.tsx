'use client';

import { ScrollReveal } from '@/components/shared/ScrollReveal';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Ruler, Waves, Wrench, Palette, Scissors, MapPin } from 'lucide-react';
import { useLang } from '@/components/shared/LangProvider';

const featureIcons = [Ruler, Waves, Wrench, Palette, Scissors, MapPin];

export function WhySection() {
  const { t } = useLang();
  return (
    <section className="section-padding bg-white">
      <div className="max-w-7xl mx-auto container-padding">
        <ScrollReveal>
          <SectionHeading
            eyebrow={t.why.eyebrow}
            title={t.why.title}
            description={t.why.description}
          />
        </ScrollReveal>

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {t.why.features.map((feature, i) => (
            <ScrollReveal key={feature.title} delay={i * 0.08}>
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-lg bg-ocean/10 flex items-center justify-center shrink-0">
                  {(() => { const Icon = featureIcons[i]; return <Icon className="w-5 h-5 text-ocean" />; })()}
                </div>
                <div>
                  <h3 className="font-heading font-bold text-charcoal text-base">
                    {feature.title}
                  </h3>
                  <p className="mt-1 text-muted text-sm leading-relaxed">
                    {feature.desc}
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
