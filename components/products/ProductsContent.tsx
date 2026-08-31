'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ScrollReveal } from '@/components/shared/ScrollReveal';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { SHIMMER } from '@/lib/utils';
import { products } from '@/data/products';
import { ArrowRight } from 'lucide-react';
import { useLang } from '@/components/shared/LangProvider';

export function ProductsContent() {
  const { t } = useLang();
  return (
    <>
      <section className="relative py-32 lg:py-40 bg-navy-deep overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_20%,rgba(14,116,144,0.15),transparent_60%)]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <ScrollReveal>
            <span className="text-ocean text-xs font-semibold uppercase tracking-[0.2em]">
              {t.products.eyebrow}
            </span>
            <h1 className="mt-4 text-white font-heading font-bold" style={{ fontSize: 'clamp(2.25rem, 5vw, 4.5rem)' }}>
              {t.products.title}
            </h1>
            <p className="mt-6 text-white/60 text-lg md:text-xl max-w-xl leading-relaxed">
              {t.products.description}
            </p>
          </ScrollReveal>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-10 bg-gradient-to-t from-off-white/30 to-transparent" />
      </section>

      <section className="section-padding bg-off-white">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-6">
            {products.map((product, i) => (
              <ScrollReveal key={product.slug} delay={i * 0.15}>
                <Link
                  href={`/products/${product.slug}`}
                  className="group relative block bg-white rounded-xl overflow-hidden border border-border hover:border-ocean/30 transition-all duration-500 hover:shadow-xl hover:shadow-ocean/5 card-hover"
                >
                  <div className="aspect-[4/3] sm:aspect-[16/9] bg-navy-deep relative overflow-hidden">
                    <Image
                      src={product.images[0].src}
                      alt={product.images[0].alt}
                      fill
                      sizes="(max-width: 640px) 100vw, 50vw"
                      placeholder="blur"
                      blurDataURL={SHIMMER}
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/60 via-transparent to-transparent" />
                  </div>
                  <div className="p-3 sm:p-8">
                    <h2 className="font-heading font-bold text-charcoal text-sm sm:text-xl group-hover:text-ocean transition-colors line-clamp-2">
                      {product.name}
                    </h2>
                    <p className="mt-1 sm:mt-2 text-muted text-xs sm:text-sm leading-relaxed line-clamp-2">
                      {product.tagline}
                    </p>
                    <div className="mt-2 sm:mt-6 flex items-center gap-2 text-ocean text-xs sm:text-sm font-semibold uppercase tracking-wider group-hover:gap-3 transition-all">
                      <span>{t.products.viewDetails}</span>
                      <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4" />
                    </div>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
