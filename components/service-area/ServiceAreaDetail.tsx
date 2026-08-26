'use client';

import Link from 'next/link';
import { ScrollReveal } from '@/components/shared/ScrollReveal';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Button } from '@/components/ui/Button';
import { WhatsAppCTA } from '@/components/ui/WhatsAppCTA';
import { useLang } from '@/components/shared/LangProvider';
import { type ServiceArea } from '@/data/service-areas';
import { Check, MapPin } from 'lucide-react';

interface ServiceAreaDetailProps {
  serviceArea: ServiceArea;
}

export function ServiceAreaDetail({ serviceArea }: ServiceAreaDetailProps) {
  const { isArabic } = useLang();
  return (
    <>
      <section className="relative py-32 lg:py-40 bg-navy-deep overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_20%,rgba(14,116,144,0.15),transparent_60%)]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <ScrollReveal>
            <div className="flex items-center gap-2 text-white/40 text-sm mb-6">
              <Link href="/" className="hover:text-ocean transition-colors">{isArabic ? 'الرئيسية' : 'Home'}</Link>
              <span>/</span>
              <Link href="/services" className="hover:text-ocean transition-colors">{isArabic ? 'الخدمات' : 'Services'}</Link>
              <span>/</span>
              <span className="text-white/60">{isArabic ? serviceArea.areaNameAr : serviceArea.areaName}</span>
            </div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-full bg-ocean/20 flex items-center justify-center">
                <MapPin className="w-5 h-5 text-ocean" />
              </div>
              <h1 className="text-white font-heading font-bold" style={{ fontSize: 'clamp(1.75rem, 4vw, 3rem)' }}>
                {isArabic ? `${serviceArea.serviceNameAr} في ${serviceArea.areaNameAr}` : `${serviceArea.serviceName} in ${serviceArea.areaName}`}
              </h1>
            </div>
            <p className="mt-4 text-white/60 text-lg max-w-xl leading-relaxed">
              {isArabic ? serviceArea.descriptionAr : serviceArea.description}
            </p>
          </ScrollReveal>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-10 bg-gradient-to-t from-off-white/30 to-transparent" />
      </section>

      <section className="section-padding bg-off-white">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <ScrollReveal direction="left">
              <SectionHeading
                eyebrow={isArabic ? 'الخدمة' : 'Service'}
                title={isArabic ? serviceArea.serviceNameAr : serviceArea.serviceName}
                description={isArabic ? serviceArea.descriptionAr : serviceArea.description}
              />
              <div className="mt-8 space-y-3">
                {['Custom fit and design', 'Marine-grade materials', 'Professional installation', 'UV and water resistance', 'Clean stitching and finishing', 'Complete service included'].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-ocean/10 flex items-center justify-center shrink-0">
                      <Check className="w-3 h-3 text-ocean" />
                    </div>
                    <span className="text-charcoal text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right">
              <div className="bg-white rounded-xl p-8 border border-border">
                <h3 className="font-heading font-bold text-charcoal text-lg mb-4">
                  {isArabic ? `خدمة في ${serviceArea.areaNameAr}` : `Service in ${serviceArea.areaName}`}
                </h3>
                <p className="text-muted text-sm mb-6">
                  {isArabic ? `نقدم ${serviceArea.serviceNameAr} في ${serviceArea.areaNameAr}.` : `We provide ${serviceArea.serviceName} in ${serviceArea.areaName}.`}
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Button href="/request-a-quote" variant="primary" size="md">
                    {isArabic ? 'طلب عرض' : 'Request Quote'}
                  </Button>
                  <WhatsAppCTA context="general" />
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </>
  );
}
