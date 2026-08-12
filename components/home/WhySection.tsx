'use client';

import { ScrollReveal } from '@/components/shared/ScrollReveal';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Ruler, Waves, Wrench, Palette, Scissors, MapPin } from 'lucide-react';

const features = [
  {
    icon: Ruler,
    title: 'Custom Fit',
    description: 'Designed around your vessel.',
  },
  {
    icon: Waves,
    title: 'Marine Focused',
    description: 'Specialized marine applications.',
  },
  {
    icon: Wrench,
    title: 'Professional Installation',
    description: 'Careful fitting and finishing.',
  },
  {
    icon: Palette,
    title: 'Custom Design',
    description: 'Choose colors, patterns and finishes.',
  },
  {
    icon: Scissors,
    title: 'Attention to Detail',
    description: 'Clean stitching and professional finishing.',
  },
  {
    icon: MapPin,
    title: 'Kuwait Service',
    description: 'Serving marine customers in Kuwait.',
  },
];

export function WhySection() {
  return (
    <section className="section-padding bg-white">
      <div className="max-w-7xl mx-auto container-padding">
        <ScrollReveal>
          <SectionHeading
            eyebrow="Why Us"
            title="Why Shakeel Marine"
            description="We focus on delivering custom marine solutions with precision and care."
          />
        </ScrollReveal>

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, i) => (
            <ScrollReveal key={feature.title} delay={i * 0.08}>
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-lg bg-ocean/10 flex items-center justify-center shrink-0">
                  <feature.icon className="w-5 h-5 text-ocean" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-charcoal text-base">
                    {feature.title}
                  </h3>
                  <p className="mt-1 text-muted text-sm leading-relaxed">
                    {feature.description}
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
