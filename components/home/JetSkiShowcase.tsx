'use client';

import Image from 'next/image';
import { ScrollReveal } from '@/components/shared/ScrollReveal';
import { Button } from '@/components/ui/Button';
import { SHIMMER } from '@/lib/utils';
import { Check } from 'lucide-react';
import { useLang } from '@/components/shared/LangProvider';

export function JetSkiShowcase() {
  const { t } = useLang();
  return (
    <section className="section-padding bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto container-padding">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <ScrollReveal direction="left">
            <div className="relative">
              <div className="aspect-[4/3] rounded-lg overflow-hidden bg-navy-deep relative">
                <Image
                  src="/images/sections/jetski-showcase.jpg"
                  alt="Custom jet ski seat cover by Shakeel Marine"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  placeholder="blur"
                  blurDataURL={SHIMMER}
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/40 via-transparent to-transparent" />
              </div>
              {/* Accent */}
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-ocean/10 rounded-lg -z-10" />
              <div className="absolute -top-4 -left-4 w-24 h-24 border border-ocean/20 rounded-lg -z-10" />
            </div>
          </ScrollReveal>

          {/* Content */}
          <ScrollReveal direction="right">
            <div>
              <span className="text-ocean text-xs font-semibold uppercase tracking-[0.2em]">
                {t.jetSki.eyebrow}
              </span>
              <h2 className="mt-4 font-heading font-bold text-charcoal" style={{ fontSize: 'clamp(1.75rem, 4vw, 3rem)' }}>
                {t.jetSki.title}
              </h2>
              <p className="mt-5 text-muted text-lg leading-relaxed">
                {t.jetSki.description}
              </p>

              <ul className="mt-8 space-y-3">
                {t.jetSki.features.map((feature) => (
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
                  {t.jetSki.cta}
                </Button>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
