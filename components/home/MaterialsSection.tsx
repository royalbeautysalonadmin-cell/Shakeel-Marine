'use client';

import Image from 'next/image';
import { ScrollReveal } from '@/components/shared/ScrollReveal';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Button } from '@/components/ui/Button';
import { Check } from 'lucide-react';

const materials = [
  {
    title: 'Marine-Grade Vinyl',
    description:
      'Water-resistant vinyl chosen for durability and comfort in marine conditions.',
  },
  {
    title: 'UV-Resistant Fabrics',
    description:
      'Cover and upholstery options designed to withstand strong marine sun.',
  },
  {
    title: 'Premium Stitching',
    description:
      'Clean, consistent stitching with marine-suitable thread for lasting finish.',
  },
  {
    title: 'Color & Finish Selection',
    description:
      'Choose from a range of colors, patterns and finishes to match your style.',
  },
];

const colorOptions = [
  { name: 'Navy', color: '#061826' },
  { name: 'Ocean', color: '#0E7490' },
  { name: 'Sand', color: '#C6A15B' },
  { name: 'Charcoal', color: '#111827' },
  { name: 'White', color: '#FFFFFF' },
  { name: 'Black', color: '#000000' },
];

export function MaterialsSection() {
  return (
    <section className="section-padding bg-off-white overflow-hidden">
      <div className="max-w-7xl mx-auto container-padding">
        <ScrollReveal>
          <SectionHeading
            eyebrow="Materials &amp; Finishes"
            title="Built to Last on the Water"
            description="The materials and finishes we use are selected specifically for marine environments — comfort, durability and a clean finish."
          />
        </ScrollReveal>

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <ScrollReveal direction="left">
            <div className="relative">
              <div className="aspect-[4/3] rounded-lg overflow-hidden bg-navy-deep relative">
                <Image
                  src="/images/sections/canopy.jpg"
                  alt="Marine materials and finishes by Shakeel Marine"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/40 via-transparent to-transparent" />
              </div>
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-ocean/10 rounded-lg -z-10" />
              <div className="absolute -top-4 -left-4 w-24 h-24 border border-ocean/20 rounded-lg -z-10" />
            </div>
          </ScrollReveal>

          {/* Content */}
          <ScrollReveal direction="right">
            <div>
              <ul className="space-y-5">
                {materials.map((material) => (
                  <li key={material.title} className="flex items-start gap-4">
                    <div className="mt-1 w-5 h-5 rounded-full bg-ocean/10 flex items-center justify-center shrink-0">
                      <Check className="w-3 h-3 text-ocean" />
                    </div>
                    <div>
                      <h3 className="font-heading font-bold text-charcoal">
                        {material.title}
                      </h3>
                      <p className="mt-1 text-muted text-sm leading-relaxed">
                        {material.description}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>

              {/* Color options */}
              <div className="mt-8">
                <span className="text-xs font-semibold text-charcoal uppercase tracking-[0.2em]">
                  Popular Finishes
                </span>
                <div className="mt-4 flex flex-wrap gap-4">
                  {colorOptions.map((c) => (
                    <div key={c.name} className="flex items-center gap-2">
                      <span
                        className="w-7 h-7 rounded-full border border-black/10 shadow-sm"
                        style={{ backgroundColor: c.color }}
                      />
                      <span className="text-sm text-muted">{c.name}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8">
                <Button href="/request-a-quote" variant="primary" size="lg">
                  Discuss Your Finish
                </Button>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}