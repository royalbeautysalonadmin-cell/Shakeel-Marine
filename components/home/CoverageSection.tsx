'use client';

import { ScrollReveal } from '@/components/shared/ScrollReveal';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { MapPin, Ship, Wrench } from 'lucide-react';
import { useLang } from '@/components/shared/LangProvider';

const pointIcons = [MapPin, Ship, Wrench];

export function CoverageSection() {
  const { t } = useLang();
  return (
    <section className="section-padding bg-off-white">
      <div className="max-w-7xl mx-auto container-padding">
        <ScrollReveal>
          <SectionHeading
            eyebrow={t.coverage.eyebrow}
            title={t.coverage.title}
            description={t.coverage.description}
          />
        </ScrollReveal>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          {t.coverage.points.map((point, i) => (
            <ScrollReveal key={point.title} delay={i * 0.12}>
              <div className="h-full bg-white rounded-xl border border-border p-8 text-center hover:border-ocean/30 hover:shadow-lg hover:shadow-ocean/5 transition-all duration-300">
                <div className="w-14 h-14 mx-auto mb-5 rounded-full bg-ocean/10 flex items-center justify-center">
                  {(() => { const Icon = pointIcons[i]; return <Icon className="w-6 h-6 text-ocean" />; })()}
                </div>
                <h3 className="font-heading font-bold text-charcoal">
                  {point.title}
                </h3>
                <p className="mt-2 text-muted text-sm leading-relaxed">
                  {point.desc}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}