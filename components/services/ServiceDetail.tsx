'use client';

import Image from 'next/image';
import { ScrollReveal } from '@/components/shared/ScrollReveal';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Button } from '@/components/ui/Button';
import { Check, ChevronRight } from 'lucide-react';
import type { ServiceData } from '@/data/services';
import { getWhatsAppUrl } from '@/lib/site-config';

interface ServiceDetailProps {
  service: ServiceData;
}

export function ServiceDetail({ service }: ServiceDetailProps) {
  return (
    <>
      {/* Hero */}
      <section className="relative py-32 lg:py-40 bg-navy-deep overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_20%,rgba(14,116,144,0.15),transparent_60%)]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <ScrollReveal>
            <span className="text-ocean text-xs font-semibold uppercase tracking-[0.2em]">
              {service.title}
            </span>
            <h1
              className="mt-4 text-white font-heading font-bold"
              style={{ fontSize: 'clamp(2rem, 5vw, 4rem)' }}
            >
              {service.heroHeading}
            </h1>
            <p className="mt-6 text-white/60 text-lg md:text-xl max-w-2xl leading-relaxed">
              {service.heroDescription}
            </p>
            <div className="mt-8">
              <Button href="/request-a-quote" variant="primary" size="lg">
                {service.cta.buttonText}
              </Button>
            </div>
          </ScrollReveal>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-10 bg-gradient-to-t from-white/30 to-transparent" />
      </section>

      {/* Overview */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal>
              <div>
                <span className="text-ocean text-xs font-semibold uppercase tracking-[0.2em]">
                  Overview
                </span>
                <h2 className="mt-4 font-heading font-bold text-charcoal" style={{ fontSize: 'clamp(1.5rem, 3vw, 2.5rem)' }}>
                  {service.title} in Kuwait
                </h2>
                <p className="mt-5 text-muted text-lg leading-relaxed">
                  {service.description}
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right">
              <div className="relative">
                <div className="aspect-[4/3] rounded-lg overflow-hidden bg-navy-deep relative">
                  <Image
                    src={service.image}
                    alt={service.imageAlt}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
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

      {/* Features */}
      <section className="section-padding bg-off-white">
        <div className="max-w-7xl mx-auto container-padding">
          <ScrollReveal>
            <SectionHeading
              eyebrow="Features"
              title="What's Included"
            />
          </ScrollReveal>

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {service.features.map((feature, i) => (
              <ScrollReveal key={i} delay={i * 0.08}>
                <div className="flex items-start gap-3 bg-white rounded-lg p-5 border border-border">
                  <div className="mt-0.5 w-5 h-5 rounded-full bg-ocean/10 flex items-center justify-center shrink-0">
                    <Check className="w-3 h-3 text-ocean" />
                  </div>
                  <span className="text-charcoal text-sm font-medium">{feature}</span>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto container-padding">
          <ScrollReveal>
            <SectionHeading
              eyebrow="Benefits"
              title="Why Choose This Service"
            />
          </ScrollReveal>

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-8">
            {service.benefits.map((benefit, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-lg bg-ocean/10 flex items-center justify-center shrink-0">
                    <span className="text-ocean font-heading font-bold text-lg">
                      0{i + 1}
                    </span>
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-charcoal">
                      {benefit.title}
                    </h3>
                    <p className="mt-1 text-muted text-sm leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section-padding bg-off-white">
        <div className="max-w-7xl mx-auto container-padding">
          <ScrollReveal>
            <SectionHeading
              eyebrow="Process"
              title="How It Works"
            />
          </ScrollReveal>

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {service.process.map((step, i) => (
              <ScrollReveal key={i} delay={i * 0.12}>
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-navy-deep text-ocean font-heading font-bold text-lg mb-4">
                    0{i + 1}
                  </div>
                  <h3 className="font-heading font-bold text-charcoal text-sm uppercase tracking-wider">
                    {step.step}
                  </h3>
                  <p className="mt-2 text-muted text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-white">
        <div className="max-w-3xl mx-auto container-padding">
          <ScrollReveal>
            <SectionHeading
              eyebrow="FAQ"
              title="Common Questions"
            />
          </ScrollReveal>

          <div className="mt-12 space-y-4">
            {service.faqs.map((faq, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div className="border border-border rounded-lg p-6">
                  <div className="flex items-start gap-3">
                    <ChevronRight className="w-5 h-5 text-ocean mt-0.5 shrink-0" />
                    <div>
                      <h3 className="font-heading font-bold text-charcoal text-base">
                        {faq.question}
                      </h3>
                      <p className="mt-2 text-muted text-sm leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-navy-deep relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_50%,rgba(14,116,144,0.1),transparent_60%)]" />
        <div className="max-w-4xl mx-auto container-padding text-center relative z-10">
          <ScrollReveal>
            <h2 className="font-heading font-bold text-white" style={{ fontSize: 'clamp(1.5rem, 3vw, 2.5rem)' }}>
              {service.cta.heading}
            </h2>
            <p className="mt-4 text-white/60 text-lg max-w-xl mx-auto">
              {service.cta.description}
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button href="/request-a-quote" variant="primary" size="lg">
                {service.cta.buttonText}
              </Button>
              <a
                href={getWhatsAppUrl(service.cta.whatsappMessage)}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="outline" size="lg">
                  WhatsApp Us
                </Button>
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
