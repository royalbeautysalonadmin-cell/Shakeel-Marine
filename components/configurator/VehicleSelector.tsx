'use client';

import Link from 'next/link';
import { ArrowRight, Box, Palette, Send } from 'lucide-react';
import { ScrollReveal } from '@/components/shared/ScrollReveal';
import { VehicleArtwork } from '@/components/configurator/VehicleArtwork';
import { vehicles } from '@/data/configurator';
import { useLang } from '@/components/shared/LangProvider';

export function VehicleSelector() {
  const { isArabic } = useLang();
  const copy = isArabic
    ? {
        eyebrow: 'التخصيص التفاعلي',
        title: 'صمم مركبتك',
        description: 'اختر مركبتك وأنشئ تصميماً مخصصاً باستخدام أداة التخصيص ثلاثية الأبعاد الفورية.',
        live: 'معاينة ثلاثية الأبعاد',
        customize: 'ابدأ التخصيص',
        flowTitle: 'من الفكرة إلى العرض',
        flow: ['اختر المركبة', 'خصص التفاصيل', 'أرسل الاستفسار'],
      }
    : {
        eyebrow: 'Interactive Customization',
        title: 'Design Your Vehicle',
        description: 'Choose your vehicle and create a custom design with our real-time 3D configurator.',
        live: 'Live 3D preview',
        customize: 'Customize Now',
        flowTitle: 'From idea to inquiry',
        flow: ['Choose your vehicle', 'Customize the details', 'Send your inquiry'],
      };

  return (
    <>
      <section className="relative overflow-hidden bg-navy-deep py-32 lg:py-40">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_75%_10%,rgba(198,161,91,0.14),transparent_55%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_20%_80%,rgba(14,116,144,0.18),transparent_55%)]" />
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-sand">{copy.eyebrow}</span>
            <h1 className="mt-4 max-w-4xl font-heading text-4xl font-bold leading-[1.05] text-white sm:text-6xl lg:text-7xl">
              {copy.title}
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/65 sm:text-xl">{copy.description}</p>
          </ScrollReveal>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-off-white/30 to-transparent" />
      </section>

      <section className="section-padding bg-off-white">
        <div className="mx-auto max-w-7xl container-padding">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-5">
            {vehicles.map((vehicle, index) => (
              <ScrollReveal key={vehicle.slug} delay={Math.min(index * 0.08, 0.35)}>
                <Link
                  href={`/design-your-vehicle/${vehicle.slug}`}
                  className="group flex h-full min-w-0 flex-col overflow-hidden rounded-2xl border border-border bg-white transition-all duration-500 hover:-translate-y-1 hover:border-ocean/40 hover:shadow-2xl hover:shadow-ocean/10"
                  aria-label={`${copy.customize}: ${vehicle.name}`}
                >
                  <div className="relative aspect-[16/10] overflow-hidden bg-[#0a202d] p-3">
                    <VehicleArtwork vehicle={vehicle.slug} className="h-full w-full transition-transform duration-700 group-hover:scale-105" />
                    <span className="absolute left-5 top-5 inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-navy-deep/75 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-white/70 backdrop-blur-sm">
                      <Box className="h-3 w-3 text-ocean" />
                      {copy.live}
                    </span>
                  </div>
                  <div className="flex flex-1 min-w-0 flex-col p-5">
                    <h2 className="font-heading text-xl font-bold text-charcoal transition-colors group-hover:text-ocean">{vehicle.name}</h2>
                    <p className="mt-2 text-sm leading-relaxed text-muted">{vehicle.shortDescription}</p>
                    <span className="mt-auto flex items-center gap-2 pt-5 text-xs font-bold uppercase tracking-wider text-ocean">
                      {copy.customize}
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </span>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-white py-16">
        <div className="mx-auto max-w-5xl container-padding">
          <ScrollReveal>
            <h2 className="text-center font-heading text-2xl font-bold text-charcoal sm:text-3xl">{copy.flowTitle}</h2>
            <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-3">
              {copy.flow.map((step, index) => {
                const Icon = index === 0 ? Box : index === 1 ? Palette : Send;
                return (
                  <div key={step} className="flex items-center gap-4 sm:flex-col sm:text-center">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-ocean/10 text-ocean">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <span className="text-xs font-semibold uppercase tracking-widest text-sand">0{index + 1}</span>
                      <p className="mt-1 font-heading font-bold text-charcoal">{step}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
