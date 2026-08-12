'use client';

import { ScrollReveal } from '@/components/shared/ScrollReveal';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Button } from '@/components/ui/Button';
import { faqData } from '@/data/faq';
import { ChevronRight } from 'lucide-react';

export function FaqContent() {
  return (
    <>
      {/* Hero */}
      <section className="relative py-32 lg:py-40 bg-navy-deep overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_20%,rgba(14,116,144,0.15),transparent_60%)]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <ScrollReveal>
            <span className="text-ocean text-xs font-semibold uppercase tracking-[0.2em]">
              FAQ
            </span>
            <h1
              className="mt-4 text-white font-heading font-bold"
              style={{ fontSize: 'clamp(2.25rem, 5vw, 4.5rem)' }}
            >
              Frequently Asked
              <br />
              Questions
            </h1>
            <p className="mt-6 text-white/60 text-lg md:text-xl max-w-xl leading-relaxed">
              Quick answers to common questions about our marine services.
            </p>
          </ScrollReveal>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-10 bg-gradient-to-t from-white/30 to-transparent" />
      </section>

      {/* FAQ List */}
      <section className="section-padding bg-white">
        <div className="max-w-3xl mx-auto container-padding">
          <div className="space-y-4">
            {faqData.map((faq, i) => (
              <ScrollReveal key={i} delay={Math.min(i * 0.08, 0.4)}>
                <div className="border border-border rounded-lg p-6 hover:border-ocean/30 transition-colors">
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
      <section className="section-padding bg-off-white">
        <div className="max-w-4xl mx-auto container-padding text-center">
          <ScrollReveal>
            <h2 className="font-heading font-bold text-charcoal" style={{ fontSize: 'clamp(1.5rem, 3vw, 2.5rem)' }}>
              Still Have Questions?
            </h2>
            <p className="mt-4 text-muted text-lg">
              Contact us directly and we will be happy to help.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button href="/contact" variant="primary" size="lg">
                Contact Us
              </Button>
              <Button href="/request-a-quote" variant="outline" size="lg">
                Request a Quote
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
