'use client';

import Image from 'next/image';
import { ScrollReveal } from '@/components/shared/ScrollReveal';
import { Button } from '@/components/ui/Button';
import { SHIMMER } from '@/lib/utils';
import { Check } from 'lucide-react';
import { useLang } from '@/components/shared/LangProvider';

export function CanopySection() {
  const { t } = useLang();
  return (
    <section className="section-padding bg-navy-deep overflow-hidden relative">
      {/* Background accent */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(14,116,144,0.1),transparent_60%)]" />

      <div className="max-w-7xl mx-auto container-padding relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <ScrollReveal direction="left">
            <div className="relative">
              <div className="aspect-[4/3] rounded-lg overflow-hidden bg-navy border border-white/5 relative">
                <Image
                  src="/images/sections/canopy.jpg"
                  alt="Custom ship top canopy cover by Shakeel Marine"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  placeholder="blur"
                  blurDataURL={SHIMMER}
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/50 via-transparent to-transparent" />
              </div>
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-ocean/10 rounded-lg -z-10" />
            </div>
          </ScrollReveal>

          {/* Content */}
          <ScrollReveal direction="right">
            <div>
              <span className="text-ocean text-xs font-semibold uppercase tracking-[0.2em]">
                {t.canopy.eyebrow}
              </span>
              <h2 className="mt-4 font-heading font-bold text-white" style={{ fontSize: 'clamp(1.75rem, 4vw, 3rem)' }}>
                {t.canopy.title}
              </h2>
              <p className="mt-5 text-white/60 text-lg leading-relaxed">
                {t.canopy.description}
              </p>

              <ul className="mt-8 space-y-3">
                {t.canopy.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <div className="mt-1 w-5 h-5 rounded-full bg-ocean/20 flex items-center justify-center shrink-0">
                      <Check className="w-3 h-3 text-ocean" />
                    </div>
                    <span className="text-white/80 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-10">
                <Button href="/request-a-quote" variant="primary" size="lg">
                  {t.canopy.cta}
                </Button>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
