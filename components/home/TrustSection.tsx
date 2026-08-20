'use client';

import { Ruler, Wrench, Waves, MapPin } from 'lucide-react';
import { ScrollReveal } from '@/components/shared/ScrollReveal';
import { useLang } from '@/components/shared/LangProvider';

const icons = [Ruler, Wrench, Waves, MapPin];
const keys = ['customFit', 'professionalInstall', 'marineFocused', 'kuwaitBased'] as const;

export function TrustSection() {
  const { t } = useLang();
  return (
    <section className="py-16 bg-white relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {keys.map((key, i) => (
            <ScrollReveal key={key} delay={i * 0.1}>
              <div className="text-center">
                <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-ocean/10 flex items-center justify-center">
                  {(() => { const Icon = icons[i]; return <Icon className="w-6 h-6 text-ocean" />; })()}
                </div>
                <h3 className="font-heading font-bold text-charcoal text-sm uppercase tracking-wider">
                  {t.trust[key]}
                </h3>
                <p className="mt-1 text-muted text-sm">
                  {t.trust[`${key}Desc`]}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
