'use client';

import { ScrollReveal } from '@/components/shared/ScrollReveal';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Button } from '@/components/ui/Button';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { useLang } from '@/components/shared/LangProvider';
import { getWhatsAppUrl, whatsappMessages } from '@/lib/site-config';
import { Ship, Shield, Wrench, Check } from 'lucide-react';

const features = [
  'Fleet upholstery for commercial vessels',
  'Marine-grade materials for heavy use',
  'Custom branding and color matching',
  'Professional measurement and fitting',
  'Bulk order capability',
  'Ongoing maintenance and replacement',
  'Commercial canopy and cover solutions',
  'Quick turnaround for operational vessels',
];

export default function CommercialMarinePage() {
  const { t } = useLang();
  return (
    <>
      <section className="relative py-32 lg:py-40 bg-navy-deep overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_20%,rgba(14,116,144,0.15),transparent_60%)]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Breadcrumbs items={[{ label: 'Services', href: '/services' }, { label: 'Commercial Marine', href: '/commercial-marine-services' }]} />
          <ScrollReveal>
            <span className="text-ocean text-xs font-semibold uppercase tracking-[0.2em]">
              Commercial Marine
            </span>
            <h1 className="mt-4 text-white font-heading font-bold" style={{ fontSize: 'clamp(2.25rem, 5vw, 4.5rem)' }}>
              Commercial Marine Upholstery Services in Kuwait
            </h1>
            <p className="mt-6 text-white/60 text-lg md:text-xl max-w-2xl leading-relaxed">
              Professional marine upholstery solutions for commercial fleets, tour boats, fishing vessels and marine businesses across Kuwait.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Button href="/request-a-quote" variant="primary" size="lg">Request a Quote</Button>
              <a href={getWhatsAppUrl(whatsappMessages.commercial)} target="_blank" rel="noopener noreferrer">
                <Button variant="outline" size="lg">WhatsApp Us</Button>
              </a>
            </div>
          </ScrollReveal>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-10 bg-gradient-to-t from-white/30 to-transparent" />
      </section>

      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal>
              <div>
                <span className="text-ocean text-xs font-semibold uppercase tracking-[0.2em]">Commercial Solutions</span>
                <h2 className="mt-4 font-heading font-bold text-charcoal" style={{ fontSize: 'clamp(1.5rem, 3vw, 2.5rem)' }}>
                  Built for Business
                </h2>
                <p className="mt-5 text-muted text-lg leading-relaxed">
                  Shakeel Marine provides commercial marine upholstery services for businesses operating in Kuwait. From tour operators to fishing fleets, we deliver durable, professional seating and cover solutions that withstand daily marine use.
                </p>
                <p className="mt-4 text-muted leading-relaxed">
                  Our commercial services are designed for businesses that need reliable, long-lasting marine upholstery. We use marine-grade materials selected for durability and provide efficient turnaround to minimize vessel downtime.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal direction="right">
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: Ship, label: 'Fleet Upholstery', desc: 'Complete vessel interior solutions' },
                  { icon: Shield, label: 'Marine Grade', desc: 'Heavy-duty commercial materials' },
                  { icon: Wrench, label: 'Maintenance', desc: 'Ongoing support and replacement' },
                  { icon: Check, label: 'Quality Assured', desc: 'Professional finish guaranteed' },
                ].map((item) => (
                  <div key={item.label} className="bg-off-white rounded-lg p-5 border border-border">
                    <item.icon className="w-6 h-6 text-ocean mb-3" />
                    <h3 className="font-heading font-bold text-charcoal text-sm">{item.label}</h3>
                    <p className="mt-1 text-muted text-xs">{item.desc}</p>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section className="section-padding bg-off-white">
        <div className="max-w-7xl mx-auto container-padding">
          <ScrollReveal>
            <SectionHeading
              eyebrow="What We Offer"
              title="Commercial Marine Services"
              description="Comprehensive upholstery and cover solutions for commercial marine operations."
            />
          </ScrollReveal>
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, i) => (
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

      <section className="section-padding bg-navy-deep relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_50%,rgba(14,116,144,0.1),transparent_60%)]" />
        <div className="max-w-4xl mx-auto container-padding text-center relative z-10">
          <ScrollReveal>
            <h2 className="font-heading font-bold text-white" style={{ fontSize: 'clamp(1.5rem, 3vw, 2.5rem)' }}>
              Ready to Discuss Your Commercial Marine Project?
            </h2>
            <p className="mt-4 text-white/60 text-lg max-w-xl mx-auto">
              Contact us with your fleet requirements and we will prepare a tailored commercial solution.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button href="/request-a-quote" variant="primary" size="lg">Request a Quote</Button>
              <a href={getWhatsAppUrl(whatsappMessages.commercial)} target="_blank" rel="noopener noreferrer">
                <Button variant="outline" size="lg">WhatsApp Us</Button>
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
