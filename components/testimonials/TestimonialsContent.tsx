'use client';

import { ScrollReveal } from '@/components/shared/ScrollReveal';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Button } from '@/components/ui/Button';
import { useLang } from '@/components/shared/LangProvider';
import { testimonials } from '@/data/testimonials';
import { Star } from 'lucide-react';

export function TestimonialsContent() {
  const { isArabic } = useLang();
  return (
    <>
      <section className="relative py-32 lg:py-40 bg-navy-deep overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_20%,rgba(14,116,144,0.15),transparent_60%)]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <ScrollReveal>
            <span className="text-ocean text-xs font-semibold uppercase tracking-[0.2em]">
              {isArabic ? 'شهادات' : 'Testimonials'}
            </span>
            <h1 className="mt-4 text-white font-heading font-bold" style={{ fontSize: 'clamp(2.25rem, 5vw, 4.5rem)' }}>
              {isArabic ? 'ماذا يقول عملاؤنا' : 'What Our Customers Say'}
            </h1>
            <p className="mt-6 text-white/60 text-lg md:text-xl max-w-xl leading-relaxed">
              {isArabic ? 'شهادات حقيقية من عملائنا الراضين عن خدماتنا البحرية.' : 'Genuine feedback from our satisfied marine customers.'}
            </p>
          </ScrollReveal>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-10 bg-gradient-to-t from-off-white/30 to-transparent" />
      </section>

      <section className="section-padding bg-off-white">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6">
            {testimonials.map((testimonial, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div className="bg-white rounded-xl p-5 sm:p-8 border border-border hover:border-ocean/30 hover:shadow-lg hover:shadow-ocean/5 transition-all duration-300 h-full flex flex-col min-w-0">
                  <div className="flex gap-1 mb-4">
                    {Array.from({ length: testimonial.rating }).map((_, j) => (
                      <Star key={j} className="w-4 h-4 fill-sand text-sand" />
                    ))}
                  </div>
                  <p className="text-charcoal text-sm leading-relaxed flex-1">
                    &ldquo;{isArabic ? testimonial.textAr : testimonial.text}&rdquo;
                  </p>
                  <div className="mt-6 pt-4 border-t border-border">
                    <p className="font-heading font-bold text-charcoal text-sm">{testimonial.name}</p>
                    <p className="text-ocean text-xs mt-0.5">{testimonial.service}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="max-w-4xl mx-auto container-padding text-center">
          <ScrollReveal>
            <SectionHeading
              eyebrow={isArabic ? 'شاركننا' : 'Share Your Experience'}
              title={isArabic ? 'هل عملت معنا؟' : 'Have You Worked With Us?'}
              description={isArabic ? 'نحب أن نسمع عن تجربتك معنا.' : 'We would love to hear about your experience with us.'}
            />
            <div className="mt-10">
              <Button href="/request-a-quote" variant="primary" size="lg">
                {isArabic ? 'شارك تجربتك' : 'Share Your Experience'}
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
