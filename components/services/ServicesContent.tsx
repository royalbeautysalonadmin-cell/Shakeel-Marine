'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ScrollReveal } from '@/components/shared/ScrollReveal';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Button } from '@/components/ui/Button';
import { services } from '@/data/services';
import { SHIMMER } from '@/lib/utils';
import { ArrowRight } from 'lucide-react';

export function ServicesContent() {
  return (
    <>
      {/* Hero */}
      <section className="relative py-32 lg:py-40 bg-navy-deep overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_20%,rgba(14,116,144,0.15),transparent_60%)]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <ScrollReveal>
            <span className="text-ocean text-xs font-semibold uppercase tracking-[0.2em]">
              Services
            </span>
            <h1
              className="mt-4 text-white font-heading font-bold"
              style={{ fontSize: 'clamp(2.25rem, 5vw, 4.5rem)' }}
            >
              Our Marine
              <br />
              Services
            </h1>
            <p className="mt-6 text-white/60 text-lg md:text-xl max-w-xl leading-relaxed">
              Custom upholstery and cover solutions for jet skis, boats and
              ships.
            </p>
          </ScrollReveal>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-10 bg-gradient-to-t from-white/30 to-transparent" />
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, i) => (
              <ScrollReveal key={service.slug} delay={i * 0.1}>
                <Link
                  href={`/services/${service.slug}`}
                  className="group block bg-off-white rounded-xl overflow-hidden border border-border hover:border-ocean/30 transition-all duration-500 hover:shadow-xl hover:shadow-ocean/5"
                >
                  <div className="aspect-[16/7] bg-navy-deep relative overflow-hidden">
                    <Image
                      src={service.image}
                      alt={service.imageAlt}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      placeholder="blur"
                      blurDataURL={SHIMMER}
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/50 via-transparent to-transparent" />
                  </div>
                  <div className="p-8">
                    <h2 className="font-heading font-bold text-charcoal text-xl group-hover:text-ocean transition-colors">
                      {service.title}
                    </h2>
                    <p className="mt-3 text-muted leading-relaxed">
                      {service.tagline}
                    </p>
                    <div className="mt-6 flex items-center gap-2 text-ocean text-sm font-semibold uppercase tracking-wider group-hover:gap-3 transition-all">
                      <span>Learn More</span>
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </Link>
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
              Not Sure Which Service You Need?
            </h2>
            <p className="mt-4 text-white/60 text-lg max-w-xl mx-auto">
              Contact us with your project details and we will guide you to the
              right solution.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button href="/request-a-quote" variant="primary" size="lg">
                Request a Quote
              </Button>
              <Button href="/contact" variant="outline" size="lg">
                Contact Us
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
