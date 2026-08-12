'use client';

import { useState } from 'react';
import Image from 'next/image';
import { ScrollReveal } from '@/components/shared/ScrollReveal';
import { galleryImages, galleryCategories, type GalleryCategory } from '@/data/gallery';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

export function GalleryContent() {
  const [activeCategory, setActiveCategory] = useState<GalleryCategory>('all');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filteredImages =
    activeCategory === 'all'
      ? galleryImages
      : galleryImages.filter((img) => img.category === activeCategory);

  const openLightbox = (index: number) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);

  const navigateLightbox = (direction: 'prev' | 'next') => {
    if (lightboxIndex === null) return;
    if (direction === 'next') {
      setLightboxIndex((lightboxIndex + 1) % filteredImages.length);
    } else {
      setLightboxIndex(
        (lightboxIndex - 1 + filteredImages.length) % filteredImages.length
      );
    }
  };

  return (
    <>
      {/* Hero */}
      <section className="relative py-32 lg:py-40 bg-navy-deep overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_20%,rgba(14,116,144,0.15),transparent_60%)]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <ScrollReveal>
            <span className="text-ocean text-xs font-semibold uppercase tracking-[0.2em]">
              Gallery
            </span>
            <h1
              className="mt-4 text-white font-heading font-bold"
              style={{ fontSize: 'clamp(2.25rem, 5vw, 4.5rem)' }}
            >
              Our Work
            </h1>
            <p className="mt-6 text-white/60 text-lg md:text-xl max-w-xl leading-relaxed">
              A selection of our custom marine upholstery and cover projects.
            </p>
          </ScrollReveal>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-10 bg-gradient-to-t from-off-white/30 to-transparent" />
      </section>

      {/* Gallery */}
      <section className="section-padding bg-off-white">
        <div className="max-w-7xl mx-auto container-padding">
          {/* Filter */}
          <ScrollReveal>
            <div className="flex flex-wrap justify-center gap-2 mb-12">
              {galleryCategories.map((cat) => (
                <button
                  key={cat.value}
                  onClick={() => setActiveCategory(cat.value)}
                  className={`px-5 py-2.5 rounded-full text-sm font-semibold uppercase tracking-wider transition-all duration-300 ${
                    activeCategory === cat.value
                      ? 'bg-ocean text-white shadow-lg shadow-ocean/20'
                      : 'bg-white text-muted hover:text-charcoal border border-border hover:border-ocean/30'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </ScrollReveal>

          {/* Grid */}
          <div className="masonry-grid">
            {filteredImages.map((image, i) => (
              <ScrollReveal key={`${image.src}-${i}`} delay={Math.min(i * 0.05, 0.4)} className="masonry-item">
                <button
                  onClick={() => openLightbox(i)}
                  className="group relative block w-full rounded-lg overflow-hidden bg-navy-deep aspect-[4/3] cursor-pointer"
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-navy-deep/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="text-white text-sm font-medium">
                      View
                    </span>
                  </div>
                </button>
              </ScrollReveal>
            ))}
          </div>

          {filteredImages.length === 0 && (
            <div className="text-center py-20">
              <p className="text-muted text-lg">
                No images in this category yet.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-[100] bg-navy-deep/95 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 p-2 text-white/60 hover:text-white transition-colors"
            aria-label="Close lightbox"
          >
            <X className="w-8 h-8" />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              navigateLightbox('prev');
            }}
            className="absolute left-4 p-2 text-white/60 hover:text-white transition-colors"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-8 h-8" />
          </button>

          <div
            className="max-w-4xl w-full aspect-[4/3] rounded-lg overflow-hidden bg-navy relative"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={filteredImages[lightboxIndex]?.src ?? ''}
              alt={filteredImages[lightboxIndex]?.alt ?? ''}
              fill
              sizes="100vw"
              className="object-contain"
            />
          </div>

          <button
            onClick={(e) => {
              e.stopPropagation();
              navigateLightbox('next');
            }}
            className="absolute right-4 p-2 text-white/60 hover:text-white transition-colors"
            aria-label="Next image"
          >
            <ChevronRight className="w-8 h-8" />
          </button>

          <div className="absolute bottom-4 text-white/40 text-sm">
            {lightboxIndex + 1} / {filteredImages.length}
          </div>
        </div>
      )}
    </>
  );
}
