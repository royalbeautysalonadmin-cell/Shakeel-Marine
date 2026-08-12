'use client';

import { ScrollReveal } from '@/components/shared/ScrollReveal';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { MapPin, Ship, Wrench } from 'lucide-react';

const points = [
  {
    icon: MapPin,
    title: 'Kuwait-Wide Service',
    description:
      'We serve marine customers across Kuwait, from jet ski riders to boat and ship owners.',
  },
  {
    icon: Ship,
    title: 'On-Vessel Work',
    description:
      'Measurement and installation carried out at your vessel — at home, marina or dock.',
  },
  {
    icon: Wrench,
    title: 'Complete Support',
    description:
      'From first consultation to fitting and finishing, we manage your project end to end.',
  },
];

export function CoverageSection() {
  return (
    <section className="section-padding bg-off-white">
      <div className="max-w-7xl mx-auto container-padding">
        <ScrollReveal>
          <SectionHeading
            eyebrow="Coverage"
            title="Serving Marine Owners Across Kuwait"
            description="Wherever your vessel is, our custom upholstery and cover solutions are within reach."
          />
        </ScrollReveal>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          {points.map((point, i) => (
            <ScrollReveal key={point.title} delay={i * 0.12}>
              <div className="h-full bg-white rounded-xl border border-border p-8 text-center hover:border-ocean/30 hover:shadow-lg hover:shadow-ocean/5 transition-all duration-300">
                <div className="w-14 h-14 mx-auto mb-5 rounded-full bg-ocean/10 flex items-center justify-center">
                  <point.icon className="w-6 h-6 text-ocean" />
                </div>
                <h3 className="font-heading font-bold text-charcoal">
                  {point.title}
                </h3>
                <p className="mt-2 text-muted text-sm leading-relaxed">
                  {point.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}