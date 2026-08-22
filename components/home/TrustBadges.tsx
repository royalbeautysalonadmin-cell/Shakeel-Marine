'use client';

import { ScrollReveal } from '@/components/shared/ScrollReveal';
import { useLang } from '@/components/shared/LangProvider';
import { Shield, Award, Clock, Users, Wrench, CheckCircle } from 'lucide-react';

export function TrustBadges() {
  const { isArabic } = useLang();
  const badges = [
    { icon: Shield, en: 'Marine Grade Materials', ar: 'مواد بحرية ممتازة' },
    { icon: Award, en: '30+ Years Experience', ar: 'خبرة 30+ سنة' },
    { icon: Clock, en: 'Quick Turnaround', ar: 'سرعة في التسليم' },
    { icon: Users, en: '500+ Happy Customers', ar: '500+ عميل سعيد' },
    { icon: Wrench, en: 'Professional Installation', ar: 'تركيب مهني' },
    { icon: CheckCircle, en: 'Custom Fit Guaranteed', ar: 'قصة مُخصصة مضمونة' },
  ];

  return (
    <section className="py-12 bg-off-white border-y border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
          {badges.map((badge, i) => (
            <ScrollReveal key={i} delay={i * 0.05}>
              <div className="flex flex-col items-center text-center gap-2">
                <div className="w-10 h-10 rounded-full bg-ocean/10 flex items-center justify-center">
                  <badge.icon className="w-5 h-5 text-ocean" />
                </div>
                <span className="text-xs font-medium text-charcoal">
                  {isArabic ? badge.ar : badge.en}
                </span>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
