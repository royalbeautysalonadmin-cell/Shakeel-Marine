'use client';

import Image from 'next/image';
import { ScrollReveal } from '@/components/shared/ScrollReveal';
import { Button } from '@/components/ui/Button';
import { Check } from 'lucide-react';

const features = [
  'Custom dimensions for your vessel',
  'Choice of colors and materials',
  'Custom stitching and patterns',
  'Comfortable marine seating',
  'Professional finishing',
  'Reupholstery where applicable',
  'Complete installation',
];

export function BoatShipSection() {
  return (
    <section className="section-padding bg-off-white overflow-hidden">
      <div className="max-w-7xl mx-auto container-padding">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <ScrollReveal direction="left">
            <div>
              <span className="text-ocean text-xs font-semibold uppercase tracking-[0.2em]">
                Boat &amp; Ship
              </span>
              <h2 className="mt-4 font-heading font-bold text-charcoal" style={{ fontSize: 'clamp(1.75rem, 4vw, 3rem)' }}>
                Made for Your Vessel
              </h2>
              <p className="mt-5 text-muted text-lg leading-relaxed">
                We design and fabricate custom seating solutions for boats and
                ships. Whether you need new seats, replacement covers or
                reupholstery of existing marine seating — each project is
                tailored to your vessel and preferences.
              </p>

              <ul className="mt-8 space-y-3">
                {features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <div className="mt-1 w-5 h-5 rounded-full bg-ocean/10 flex items-center justify-center shrink-0">
                      <Check className="w-3 h-3 text-ocean" />
                    </div>
                    <span className="text-charcoal text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-10">
                <Button href="/request-a-quote" variant="primary" size="lg">
                  Discuss Your Project
                </Button>
              </div>
            </div>
          </ScrollReveal>

          {/* Image */}
          <ScrollReveal direction="right">
            <div className="relative">
              <div className="aspect-[4/3] rounded-lg overflow-hidden bg-navy-deep relative">
                <Image
                  src="/images/sections/boat-ship.jpg"
                  alt="Custom boat marine seating by Shakeel Marine"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/30 via-transparent to-transparent" />
              </div>
              <div className="absolute -top-4 -right-4 w-32 h-32 bg-sand/10 rounded-lg -z-10" />
              <div className="absolute -bottom-4 -left-4 w-24 h-24 border border-ocean/20 rounded-lg -z-10" />
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
