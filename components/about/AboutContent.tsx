'use client';

import Image from 'next/image';
import { ScrollReveal } from '@/components/shared/ScrollReveal';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Button } from '@/components/ui/Button';
import { siteConfig } from '@/lib/site-config';
import { SHIMMER } from '@/lib/utils';
import { Ruler, Scissors, Wrench, Paintbrush } from 'lucide-react';
import { useLang } from '@/components/shared/LangProvider';

const approachIcons = [Ruler, Paintbrush, Scissors, Wrench];

export function AboutContent() {
  const { t } = useLang();
  return (
    <>
      {/* Hero */}
      <section className="relative py-32 lg:py-40 bg-navy-deep overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_20%,rgba(14,116,144,0.15),transparent_60%)]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <ScrollReveal>
            <span className="text-ocean text-xs font-semibold uppercase tracking-[0.2em]">
              {t.about.eyebrow}
            </span>
            <h1
              className="mt-4 text-white font-heading font-bold"
              style={{ fontSize: 'clamp(2.25rem, 5vw, 4.5rem)' }}
            >
              {t.about.title}
            </h1>
            <p className="mt-6 text-white/60 text-lg md:text-xl max-w-xl leading-relaxed">
              {t.about.description}
            </p>
          </ScrollReveal>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-10 bg-gradient-to-t from-white/30 to-transparent" />
      </section>

      {/* Who We Are */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal>
              <div>
                <span className="text-ocean text-xs font-semibold uppercase tracking-[0.2em]">
                  {t.about.whoWeAre}
                </span>
                <h2 className="mt-4 font-heading font-bold text-charcoal" style={{ fontSize: 'clamp(1.5rem, 3vw, 2.5rem)' }}>
                  {t.about.specialists}
                </h2>
                <p className="mt-5 text-muted text-lg leading-relaxed">
                  {t.about.whoDesc1}
                </p>
                <p className="mt-4 text-muted leading-relaxed">
                  {t.about.whoDesc2}
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right">
              <div className="relative">
                <div className="aspect-[4/3] rounded-lg overflow-hidden bg-navy-deep relative">
                  <Image
                    src="/images/sections/boat-ship.jpg"
                    alt={`${siteConfig.name} marine craftsmen at work`}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    placeholder="blur"
                    blurDataURL={SHIMMER}
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/40 via-transparent to-transparent" />
                </div>
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-ocean/10 rounded-lg -z-10" />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="section-padding bg-off-white">
        <div className="max-w-7xl mx-auto container-padding">
          <ScrollReveal>
            <SectionHeading
              eyebrow={t.about.whatWeDo}
              title={t.about.ourServices}
              description={t.about.servicesDesc}
            />
          </ScrollReveal>

          <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {t.about.serviceCards.map((item, i) => (
              <ScrollReveal key={item.title} delay={i * 0.1}>
                <div className="bg-white rounded-lg p-6 border border-border">
                  <h3 className="font-heading font-bold text-charcoal">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-muted text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto container-padding">
          <ScrollReveal>
            <SectionHeading
              eyebrow={t.about.approach}
              title={t.about.howWeWork}
              description={t.about.approachDesc}
            />
          </ScrollReveal>

          <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {t.about.approachSteps.map((step, i) => (
              <ScrollReveal key={step.title} delay={i * 0.12}>
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-5 rounded-full bg-ocean/10 flex items-center justify-center">
                    {(() => { const Icon = approachIcons[i]; return <Icon className="w-7 h-7 text-ocean" />; })()}
                  </div>
                  <h3 className="font-heading font-bold text-charcoal text-lg uppercase tracking-wider">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-muted text-sm leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Quality */}
      <section className="section-padding bg-navy-deep relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_50%,rgba(14,116,144,0.1),transparent_60%)]" />
        <div className="max-w-4xl mx-auto container-padding text-center relative z-10">
          <ScrollReveal>
            <span className="text-ocean text-xs font-semibold uppercase tracking-[0.2em]">
              {t.about.quality}
            </span>
            <h2 className="mt-4 font-heading font-bold text-white" style={{ fontSize: 'clamp(1.5rem, 3vw, 2.5rem)' }}>
              {t.about.attention}
            </h2>
            <p className="mt-5 text-white/60 text-lg max-w-2xl mx-auto leading-relaxed">
              {t.about.qualityDesc}
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-white">
        <div className="max-w-4xl mx-auto container-padding text-center">
          <ScrollReveal>
            <h2 className="font-heading font-bold text-charcoal" style={{ fontSize: 'clamp(1.5rem, 3vw, 2.5rem)' }}>
              {t.about.ctaTitle}
            </h2>
            <p className="mt-4 text-muted text-lg">
              {t.about.ctaDesc}
            </p>
            <div className="mt-8">
              <Button href="/request-a-quote" variant="primary" size="lg">
                {t.about.cta}
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
