'use client';

import Image from 'next/image';
import { ScrollReveal } from '@/components/shared/ScrollReveal';
import { Button } from '@/components/ui/Button';
import { SHIMMER } from '@/lib/utils';
import { Check } from 'lucide-react';
import { useLang } from '@/components/shared/LangProvider';
import { WhatsAppCTA } from '@/components/ui/WhatsAppCTA';

export function JetskiCustomSeat() {
  const { t } = useLang();
  return (
    <section className="section-padding bg-off-white overflow-hidden">
      <div className="max-w-7xl mx-auto container-padding">
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-ocean text-xs font-semibold uppercase tracking-[0.2em]">
              {t.jetskiCustomSeat.eyebrow}
            </span>
            <h2 className="mt-4 font-heading font-bold text-charcoal" style={{ fontSize: 'clamp(1.75rem, 4vw, 3rem)' }}>
              {t.jetskiCustomSeat.title}
            </h2>
            <p className="mt-5 text-muted text-lg leading-relaxed">
              {t.jetskiCustomSeat.description}
            </p>
          </div>
        </ScrollReveal>

        {/* Image Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6">
          {[
            { src: '/images/jetski-custom-seat/jetski custom seat1.jpg', alt: 'Custom jet ski seat — Shakeel Marine Kuwait' },
            { src: '/images/jetski-custom-seat/jetski custom seat2.jpg', alt: 'Jet ski seat custom design — marine upholstery' },
            { src: '/images/jetski-custom-seat/jetski custom seat3.jpg', alt: 'Jet ski seat — professional fitting' },
            { src: '/images/jetski-custom-seat/jetski custom seat4.jpg', alt: 'Custom jet ski seat — color selection' },
            { src: '/images/jetski-custom-seat/jetski custom seat5.jpg', alt: 'Jet ski seat — premium stitching' },
            { src: '/images/jetski-custom-seat/jetski custom seat6.jpg', alt: 'Jet ski seat cover — marine grade materials' },
          ].map((image, i) => (
            <ScrollReveal key={i} delay={i * 0.1}>
              <div className="group relative aspect-[4/3] rounded-lg overflow-hidden bg-navy-deep cursor-pointer">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 50vw, 33vw"
                  placeholder="blur"
                  blurDataURL={SHIMMER}
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Features */}
        <ScrollReveal>
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {t.jetskiCustomSeat.features.map((feature) => (
              <div key={feature.title} className="flex items-start gap-4">
                <div className="mt-1 w-5 h-5 rounded-full bg-ocean/10 flex items-center justify-center shrink-0">
                  <Check className="w-3 h-3 text-ocean" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-charcoal">{feature.title}</h3>
                  <p className="mt-1 text-muted text-sm leading-relaxed">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </ScrollReveal>

        {/* CTA */}
        <ScrollReveal>
          <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/request-a-quote" variant="primary" size="lg">
              {t.jetskiCustomSeat.cta}
            </Button>
            <WhatsAppCTA context="jetSki" />
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
