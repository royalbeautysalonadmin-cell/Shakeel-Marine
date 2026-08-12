'use client';

import { Ruler, Wrench, Waves, MapPin } from 'lucide-react';
import { ScrollReveal } from '@/components/shared/ScrollReveal';

const trustPoints = [
  { icon: Ruler, label: 'Custom Fit', description: 'Designed around your vessel' },
  { icon: Wrench, label: 'Professional Installation', description: 'Careful fitting and finishing' },
  { icon: Waves, label: 'Marine-Focused', description: 'Built for marine environments' },
  { icon: MapPin, label: 'Kuwait-Based', description: 'Local service and support' },
];

export function TrustSection() {
  return (
    <section className="py-16 bg-white relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {trustPoints.map((point, i) => (
            <ScrollReveal key={point.label} delay={i * 0.1}>
              <div className="text-center">
                <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-ocean/10 flex items-center justify-center">
                  <point.icon className="w-6 h-6 text-ocean" />
                </div>
                <h3 className="font-heading font-bold text-charcoal text-sm uppercase tracking-wider">
                  {point.label}
                </h3>
                <p className="mt-1 text-muted text-sm">
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
