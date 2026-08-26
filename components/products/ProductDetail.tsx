'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ScrollReveal } from '@/components/shared/ScrollReveal';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Button } from '@/components/ui/Button';
import { WhatsAppCTA } from '@/components/ui/WhatsAppCTA';
import { SHIMMER } from '@/lib/utils';
import { Check } from 'lucide-react';
import { useLang } from '@/components/shared/LangProvider';
import { type Product } from '@/data/products';

interface ProductDetailProps {
  product: Product;
}

export function ProductDetail({ product }: ProductDetailProps) {
  const { t } = useLang();
  const [selectedImage, setSelectedImage] = useState(0);

  return (
    <>
      <section className="relative py-32 lg:py-40 bg-navy-deep overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_20%,rgba(14,116,144,0.15),transparent_60%)]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <ScrollReveal>
            <div className="flex items-center gap-2 text-white/40 text-sm mb-6">
              <Link href="/" className="hover:text-ocean transition-colors">{t.products.home}</Link>
              <span>/</span>
              <Link href="/products" className="hover:text-ocean transition-colors">{t.products.title}</Link>
              <span>/</span>
              <span className="text-white/60">{product.name}</span>
            </div>
            <h1 className="text-white font-heading font-bold" style={{ fontSize: 'clamp(2.25rem, 5vw, 4rem)' }}>
              {product.name}
            </h1>
            <p className="mt-4 text-white/60 text-lg max-w-xl leading-relaxed">
              {product.tagline}
            </p>
          </ScrollReveal>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-10 bg-gradient-to-t from-off-white/30 to-transparent" />
      </section>

      <section className="section-padding bg-off-white">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            <ScrollReveal direction="left">
              <div>
                <div className="aspect-[4/3] rounded-xl overflow-hidden bg-navy-deep relative">
                  <Image
                    src={product.images[selectedImage].src}
                    alt={product.images[selectedImage].alt}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    placeholder="blur"
                    blurDataURL={SHIMMER}
                    className="object-cover"
                  />
                </div>
                <div className="mt-4 grid grid-cols-6 gap-2">
                  {product.images.map((img, i) => (
                    <button
                      key={i}
                      onClick={() => setSelectedImage(i)}
                      className={`relative aspect-square rounded-lg overflow-hidden border-2 transition-all ${
                        selectedImage === i ? 'border-ocean' : 'border-transparent hover:border-ocean/30'
                      }`}
                    >
                      <Image src={img.src} alt={img.alt} fill sizes="80px" className="object-cover" />
                    </button>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right">
              <div>
                <p className="text-muted text-lg leading-relaxed">{product.description}</p>

                <div className="mt-8">
                  <h3 className="font-heading font-bold text-charcoal text-lg mb-4">{t.products.features}</h3>
                  <div className="space-y-3">
                    {product.features.map((f) => (
                      <div key={f.title} className="flex items-start gap-3">
                        <div className="mt-1 w-5 h-5 rounded-full bg-ocean/10 flex items-center justify-center shrink-0">
                          <Check className="w-3 h-3 text-ocean" />
                        </div>
                        <div>
                          <span className="font-semibold text-charcoal text-sm">{f.title}</span>
                          <span className="text-muted text-sm"> — {f.desc}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-10 flex flex-col sm:flex-row gap-4">
                  <Button href="/request-a-quote" variant="primary" size="lg">
                    {t.products.sendInquiry}
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
