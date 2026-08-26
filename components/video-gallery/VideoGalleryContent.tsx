'use client';

import { useState } from 'react';
import Image from 'next/image';
import { ScrollReveal } from '@/components/shared/ScrollReveal';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { SHIMMER } from '@/lib/utils';
import { videos, videoCategories } from '@/data/videos';
import { useLang } from '@/components/shared/LangProvider';
import { Play, X } from 'lucide-react';

export function VideoGalleryContent() {
  const { isArabic } = useLang();
  const [activeCategory, setActiveCategory] = useState('all');
  const [playingVideo, setPlayingVideo] = useState<string | null>(null);

  const filtered = activeCategory === 'all'
    ? videos
    : videos.filter((v) => v.category === activeCategory);

  return (
    <>
      <section className="relative py-32 lg:py-40 bg-navy-deep overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_20%,rgba(14,116,144,0.15),transparent_60%)]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <ScrollReveal>
            <span className="text-ocean text-xs font-semibold uppercase tracking-[0.2em]">
              {isArabic ? 'الفيديو' : 'Videos'}
            </span>
            <h1 className="mt-4 text-white font-heading font-bold" style={{ fontSize: 'clamp(2.25rem, 5vw, 4.5rem)' }}>
              {isArabic ? 'معرض الفيديو' : 'Video Gallery'}
            </h1>
            <p className="mt-6 text-white/60 text-lg md:text-xl max-w-xl leading-relaxed">
              {isArabic ? 'شاهد عمليات التركيب وعروض المنتجات وشهادات العملاء.' : 'Watch installations, product showcases and customer testimonials.'}
            </p>
          </ScrollReveal>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-10 bg-gradient-to-t from-off-white/30 to-transparent" />
      </section>

      <section className="section-padding bg-off-white">
        <div className="max-w-7xl mx-auto container-padding">
          <ScrollReveal>
            <div className="flex flex-wrap justify-center gap-2 mb-12">
              {videoCategories.map((cat) => (
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

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((video, i) => (
              <ScrollReveal key={video.slug} delay={i * 0.1}>
                <div className="group bg-white rounded-xl overflow-hidden border border-border hover:border-ocean/30 hover:shadow-lg hover:shadow-ocean/5 transition-all duration-300">
                  <button
                    onClick={() => setPlayingVideo(video.videoUrl)}
                    className="relative aspect-video bg-navy-deep overflow-hidden block w-full"
                  >
                    <Image
                      src={video.thumbnail}
                      alt={video.title}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      placeholder="blur"
                      blurDataURL={SHIMMER}
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-navy-deep/40 group-hover:bg-navy-deep/50 transition-all flex items-center justify-center">
                      <div className="w-14 h-14 rounded-full bg-white/90 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                        <Play className="w-6 h-6 text-ocean ml-1" />
                      </div>
                    </div>
                    <div className="absolute bottom-3 right-3 px-2 py-1 bg-navy-deep/80 text-white text-xs font-medium rounded">
                      {video.duration}
                    </div>
                  </button>
                  <div className="p-5">
                    <h3 className="font-heading font-bold text-charcoal group-hover:text-ocean transition-colors line-clamp-2">
                      {isArabic ? video.titleAr : video.title}
                    </h3>
                    <p className="mt-2 text-muted text-sm line-clamp-2">
                      {isArabic ? video.descriptionAr : video.description}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Video Modal */}
      {playingVideo && (
        <div className="fixed inset-0 z-[100] bg-navy-deep/95 backdrop-blur-sm flex items-center justify-center p-4" onClick={() => setPlayingVideo(null)}>
          <button onClick={() => setPlayingVideo(null)} className="absolute top-4 right-4 p-2 text-white/60 hover:text-white">
            <X className="w-8 h-8" />
          </button>
          <div className="max-w-4xl w-full aspect-video" onClick={(e) => e.stopPropagation()}>
            <iframe
              src={playingVideo}
              className="w-full h-full rounded-xl"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      )}
    </>
  );
}
