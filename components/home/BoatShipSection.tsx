'use client';

import Image from 'next/image';
import { ScrollReveal } from '@/components/shared/ScrollReveal';
import { Button } from '@/components/ui/Button';
import { SHIMMER } from '@/lib/utils';
import { Check } from 'lucide-react';
import { useLang } from '@/components/shared/LangProvider';
import { WhatsAppCTA } from '@/components/ui/WhatsAppCTA';

export function BoatShipSection() {
  const { t } = useLang();
  return (
    <section className="section-padding bg-off-white overflow-hidden">
      <div className="max-w-7xl mx-auto container-padding">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <ScrollReveal direction="left">
            <div>
              <span className="text-ocean text-xs font-semibold uppercase tracking-[0.2em]">
                {t.boatShip.eyebrow}
              </span>
              <h2 className="mt-4 font-heading font-bold text-charcoal" style={{ fontSize: 'clamp(1.75rem, 4vw, 3rem)' }}>
                {t.boatShip.title}
              </h2>
              <p className="mt-5 text-muted text-lg leading-relaxed">
                {t.boatShip.description}
              </p>

              <ul className="mt-8 space-y-3">
                {t.boatShip.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <div className="mt-1 w-5 h-5 rounded-full bg-ocean/10 flex items-center justify-center shrink-0">
                      <Check className="w-3 h-3 text-ocean" />
                    </div>
                    <span className="text-charcoal text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-10 flex flex-col sm:flex-row gap-4">
                <Button href="/request-a-quote" variant="primary" size="lg">
                  {t.boatShip.cta}
                </Button>
                <WhatsAppCTA context="boatShip" />
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
                  placeholder="blur"
                  blurDataURL={SHIMMER}
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
