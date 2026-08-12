'use client';

import { ScrollReveal } from '@/components/shared/ScrollReveal';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { MessageCircle } from 'lucide-react';

export function TestimonialsSection() {
  return (
    <section className="section-padding bg-off-white">
      <div className="max-w-7xl mx-auto container-padding">
        <ScrollReveal>
          <SectionHeading
            eyebrow="Testimonials"
            title="What Our Customers Say"
          />
        </ScrollReveal>

        <ScrollReveal>
          <div className="mt-16 max-w-2xl mx-auto text-center">
            <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-ocean/10 flex items-center justify-center">
              <MessageCircle className="w-7 h-7 text-ocean" />
            </div>
            <p className="text-muted text-lg leading-relaxed">
              Customer testimonials will appear here once genuine reviews are
              available. We never fabricate reviews or testimonials.
            </p>
            <p className="mt-4 text-muted/60 text-sm">
              Have you worked with us? We&apos;d love to hear about your
              experience.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
