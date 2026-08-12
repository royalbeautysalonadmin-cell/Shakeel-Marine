'use client';

import { ScrollReveal } from '@/components/shared/ScrollReveal';
import { SectionHeading } from '@/components/ui/SectionHeading';

const steps = [
  {
    number: '01',
    title: 'Share Your Project',
    description:
      'Tell us about your jet ski, boat, ship or cover requirements.',
  },
  {
    number: '02',
    title: 'Discuss the Design',
    description:
      'Choose preferred style, colors, materials and finish.',
  },
  {
    number: '03',
    title: 'Custom Fabrication',
    description:
      'The project is prepared according to the required specifications.',
  },
  {
    number: '04',
    title: 'Professional Installation',
    description:
      'The finished work is fitted and checked.',
  },
];

export function ProcessSection() {
  return (
    <section className="section-padding bg-off-white">
      <div className="max-w-7xl mx-auto container-padding">
        <ScrollReveal>
          <SectionHeading
            eyebrow="Our Process"
            title="How It Works"
            description="A straightforward process from initial inquiry to professional installation."
          />
        </ScrollReveal>

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, i) => (
            <ScrollReveal key={step.number} delay={i * 0.15}>
              <div className="relative">
                {/* Connector line */}
                {i < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-[calc(50%+40px)] right-[-50%] h-px bg-border">
                    <div className="absolute right-0 -top-1 w-2 h-2 rounded-full bg-ocean/30" />
                  </div>
                )}

                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-navy-deep text-ocean font-heading font-bold text-xl mb-5">
                    {step.number}
                  </div>
                  <h3 className="font-heading font-bold text-charcoal text-base uppercase tracking-wider">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-muted text-sm leading-relaxed">
                    {step.description}
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
