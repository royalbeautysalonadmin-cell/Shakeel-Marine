'use client';

import Image from 'next/image';
import { ScrollReveal } from '@/components/shared/ScrollReveal';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Button } from '@/components/ui/Button';
import { SHIMMER } from '@/lib/utils';
import { Check } from 'lucide-react';
import { useLang } from '@/components/shared/LangProvider';

const colorHexes = ['#061826', '#0E7490', '#C6A15B', '#111827', '#FFFFFF', '#000000'];

export function MaterialsSection() {
  const { t } = useLang();
  return (
    <section className="section-padding bg-off-white overflow-hidden">
      <div className="max-w-7xl mx-auto container-padding">
        <ScrollReveal>
          <SectionHeading
            eyebrow={t.materials.eyebrow}
            title={t.materials.title}
            description={t.materials.description}
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
                  placeholder="blur"
                  blurDataURL={SHIMMER}
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
                {t.materials.items.map((material) => (
                  <li key={material.title} className="flex items-start gap-4">
                    <div className="mt-1 w-5 h-5 rounded-full bg-ocean/10 flex items-center justify-center shrink-0">
                      <Check className="w-3 h-3 text-ocean" />
                    </div>
                    <div>
                      <h3 className="font-heading font-bold text-charcoal">
                        {material.title}
                      </h3>
                      <p className="mt-1 text-muted text-sm leading-relaxed">
                        {material.desc}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>

              {/* Color options */}
              <div className="mt-8">
                <span className="text-xs font-semibold text-charcoal uppercase tracking-[0.2em]">
                  {t.materials.popularFinishes}
                </span>
                <div className="mt-4 flex flex-wrap gap-4">
                  {t.materials.colors.map((name, i) => (
                    <div key={name} className="flex items-center gap-2">
                      <span
                        className="w-7 h-7 rounded-full border border-black/10 shadow-sm"
                        style={{ backgroundColor: colorHexes[i] }}
                      />
                      <span className="text-sm text-muted">{name}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8">
                <Button href="/request-a-quote" variant="primary" size="lg">
                  {t.materials.cta}
                </Button>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}