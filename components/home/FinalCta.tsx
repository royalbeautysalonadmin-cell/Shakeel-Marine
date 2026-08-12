'use client';

import { ScrollReveal } from '@/components/shared/ScrollReveal';
import { Button } from '@/components/ui/Button';

export function FinalCta() {
  return (
    <section className="section-padding bg-navy-deep relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_50%,rgba(14,116,144,0.15),transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_70%_50%,rgba(198,161,91,0.05),transparent_50%)]" />

      <div className="max-w-4xl mx-auto container-padding text-center relative z-10">
        <ScrollReveal>
          <span className="text-ocean text-xs font-semibold uppercase tracking-[0.2em]">
            Ready to Start?
          </span>
          <h2
            className="mt-4 font-heading font-bold text-white"
            style={{ fontSize: 'clamp(1.75rem, 4vw, 3rem)' }}
          >
            Have a Marine Project in Mind?
          </h2>
          <p className="mt-5 text-white/60 text-lg max-w-xl mx-auto leading-relaxed">
            Tell us about your jet ski, boat, ship or cover project. We will
            prepare a custom quote tailored to your requirements.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
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
  );
}
