'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ScrollReveal } from '@/components/shared/ScrollReveal';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Button } from '@/components/ui/Button';
import { galleryImages } from '@/data/gallery';
import { SHIMMER } from '@/lib/utils';
import { ArrowRight } from 'lucide-react';
import { useLang } from '@/components/shared/LangProvider';

export function GalleryPreview() {
  const { t } = useLang();
  const previewImages = galleryImages.slice(0, 6);

  return (
    <section className="section-padding bg-white">
      <div className="max-w-7xl mx-auto container-padding">
        <ScrollReveal>
          <SectionHeading
            eyebrow={t.gallery.eyebrow}
            title={t.gallery.title}
            description={t.gallery.description}
          />
        </ScrollReveal>

        <div className="mt-16 masonry-grid">
          {previewImages.map((image, i) => (
            <ScrollReveal key={i} delay={i * 0.08} className="masonry-item">
              <div className="group relative rounded-lg overflow-hidden bg-navy-deep aspect-[4/3] cursor-pointer">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 50vw, 33vw"
                  placeholder="blur"
                  blurDataURL={SHIMMER}
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-navy-deep/60 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center backdrop-blur-sm">
                  <span className="text-white text-sm font-medium px-4 py-2 border border-white/30 rounded-lg group-hover:border-white/60 transition-all">
                    {t.gallery.viewProject}
                  </span>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal>
          <div className="mt-12 text-center">
            <Button href="/gallery" variant="secondary" size="lg">
              {t.gallery.viewFull}
              <ArrowRight className="w-4 h-4 ml-1" />
            </Button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
