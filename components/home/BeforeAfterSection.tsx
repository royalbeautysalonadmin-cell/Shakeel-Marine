'use client';

import { useState } from 'react';
import Image from 'next/image';
import { ScrollReveal } from '@/components/shared/ScrollReveal';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { useLang } from '@/components/shared/LangProvider';
import { ArrowRight } from 'lucide-react';

const projects = [
  {
    before: '/images/gallery/cover-01.jpg',
    after: '/images/gallery/cover-02.jpg',
    titleEn: 'Jet Ski Seat Restoration',
    titleAr: 'إصلاح مقعد جيت سكي',
    descEn: 'Old worn seat transformed into a custom marine-grade seat',
    descAr: 'مقعد قديم تم تحويله إلى مقعد بحري مُخصص',
  },
  {
    before: '/images/gallery/cover-03.jpg',
    after: '/images/gallery/cover-04.jpg',
    titleEn: 'Boat Canopy Replacement',
    titleAr: 'استبدال مظلة القارب',
    descEn: 'Damaged canopy replaced with a custom-fitted marine cover',
    descAr: 'مظلة تالفة تم استبدالها بغطاء بحري مُخصص',
  },
  {
    before: '/images/gallery/cover-05.jpg',
    after: '/images/gallery/cover-06.jpg',
    titleEn: 'Marine Upholstery Refresh',
    titleAr: 'تجديد التأثيث البحري',
    descEn: 'Complete interior refresh with premium marine materials',
    descAr: 'تجديد داخلي كامل بمواد بحرية ممتازة',
  },
];

export function BeforeAfterSection() {
  const { isArabic } = useLang();
  const [active, setActive] = useState(0);

  return (
    <section className="section-padding bg-white">
      <div className="max-w-7xl mx-auto container-padding">
        <ScrollReveal>
          <SectionHeading
            eyebrow={isArabic ? 'أعمالنا' : 'Our Work'}
            title={isArabic ? 'قبل وبعد' : 'Before & After'}
            description={isArabic ? 'شاهد تحويلاتنا المذهلة لمقاعد القوارب والجيت سكي' : 'See our stunning transformations for boat and jet ski seats'}
          />
        </ScrollReveal>

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Before/After Images */}
          <ScrollReveal direction="left">
            <div className="relative rounded-xl overflow-hidden bg-navy-deep aspect-[4/3]">
              <div className="absolute inset-0 grid grid-cols-2">
                <div className="relative">
                  <Image src={projects[active].before} alt="Before" fill className="object-cover" />
                  <div className="absolute top-3 left-3 px-2 py-1 bg-red-500/90 text-white text-[10px] font-bold uppercase rounded">
                    {isArabic ? 'قبل' : 'Before'}
                  </div>
                </div>
                <div className="relative">
                  <Image src={projects[active].after} alt="After" fill className="object-cover" />
                  <div className="absolute top-3 right-3 px-2 py-1 bg-green-500/90 text-white text-[10px] font-bold uppercase rounded">
                    {isArabic ? 'بعد' : 'After'}
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 left-1/2 -translate-x-1/2 w-1 bg-white/50 z-10" />
              <div className="absolute inset-y-0 left-1/2 -translate-x-1/2 w-8 h-8 bg-white rounded-full flex items-center justify-center z-20 top-1/2 -translate-y-1/2 shadow-lg">
                <ArrowRight className="w-4 h-4 text-navy-deep" />
              </div>
            </div>
          </ScrollReveal>

          {/* Project List */}
          <ScrollReveal direction="right">
            <div className="space-y-4">
              {projects.map((project, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className={`w-full text-left p-5 rounded-xl border transition-all duration-300 ${
                    active === i
                      ? 'border-ocean bg-ocean/5 shadow-lg shadow-ocean/5'
                      : 'border-border hover:border-ocean/30 bg-white'
                  }`}
                >
                  <h3 className={`font-heading font-bold text-base ${active === i ? 'text-ocean' : 'text-charcoal'}`}>
                    {isArabic ? project.titleAr : project.titleEn}
                  </h3>
                  <p className="mt-1 text-muted text-sm">
                    {isArabic ? project.descAr : project.descEn}
                  </p>
                </button>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
