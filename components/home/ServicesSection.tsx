'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ScrollReveal } from '@/components/shared/ScrollReveal';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { services } from '@/data/services';
import { SHIMMER } from '@/lib/utils';
import { ArrowRight } from 'lucide-react';

export function ServicesSection() {
  return (
    <section className="section-padding bg-off-white">
      <div className="max-w-7xl mx-auto container-padding">
        <ScrollReveal>
          <SectionHeading
            eyebrow="What We Do"
            title="Our Marine Services"
            description="Custom solutions designed around your vessel, your style and your needs."
          />
        </ScrollReveal>

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, i) => (
            <ScrollReveal key={service.slug} delay={i * 0.1}>
              <Link
                href={`/services/${service.slug}`}
                className="group relative block bg-white rounded-lg overflow-hidden border border-border hover:border-ocean/30 transition-all duration-500 hover:shadow-xl hover:shadow-ocean/5"
              >
                {/* Image */}
                <div className="aspect-[4/3] bg-navy-deep relative overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.imageAlt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    placeholder="blur"
                    blurDataURL={SHIMMER}
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/60 via-transparent to-transparent" />
                </div>

                <div className="p-6">
                  <h3 className="font-heading font-bold text-charcoal text-lg group-hover:text-ocean transition-colors">
                    {service.shortTitle}
                  </h3>
                  <p className="mt-2 text-muted text-sm leading-relaxed line-clamp-2">
                    {service.tagline}
                  </p>
                  <div className="mt-4 flex items-center gap-2 text-ocean text-sm font-semibold uppercase tracking-wider group-hover:gap-3 transition-all">
                    <span>Explore</span>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
