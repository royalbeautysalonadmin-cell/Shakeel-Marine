'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ScrollReveal } from '@/components/shared/ScrollReveal';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Button } from '@/components/ui/Button';
import { WhatsAppCTA } from '@/components/ui/WhatsAppCTA';
import { SHIMMER } from '@/lib/utils';
import { Check, ChevronLeft, ChevronRight, Star, Truck, Shield, Clock, Award } from 'lucide-react';
import { useLang } from '@/components/shared/LangProvider';
import { type Product, products } from '@/data/products';
import { getWhatsAppUrl, whatsappMessages } from '@/lib/site-config';

interface ProductDetailProps {
  product: Product;
}

export function ProductDetail({ product }: ProductDetailProps) {
  const { t, isArabic } = useLang();
  const [selectedImage, setSelectedImage] = useState(0);
  const [galleryStart, setGalleryStart] = useState(0);

  const relatedProducts = products.filter((p) => p.slug !== product.slug).slice(0, 4);
  const galleryImages = product.gallery || product.images;
  const longDesc = product.longDescription || product.description;
  const productSpecs = product.specs || [];

  return (
    <>
      {/* Hero */}
      <section className="relative py-32 lg:py-40 bg-navy-deep overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_20%,rgba(14,116,144,0.15),transparent_60%)]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <ScrollReveal>
            <div className="flex items-center gap-2 text-white/40 text-sm mb-6">
              <Link href="/" className="hover:text-ocean transition-colors">{isArabic ? 'الرئيسية' : 'Home'}</Link>
              <span>/</span>
              <Link href="/products" className="hover:text-ocean transition-colors">{isArabic ? 'المنتجات' : 'Products'}</Link>
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

      {/* Product Overview — Image + Info */}
      <section className="section-padding bg-off-white">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Image Gallery */}
            <ScrollReveal direction="left">
              <div>
                <div className="aspect-[4/3] rounded-xl overflow-hidden bg-navy-deep relative">
                  <Image
                    src={galleryImages[selectedImage]?.src || product.images[0].src}
                    alt={galleryImages[selectedImage]?.alt || product.images[0].alt}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    placeholder="blur"
                    blurDataURL={SHIMMER}
                    className="object-cover"
                  />
                </div>
                {/* Thumbnails */}
                <div className="mt-4 grid grid-cols-6 gap-2">
                  {galleryImages.slice(0, 6).map((img, i) => (
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

            {/* Product Info */}
            <ScrollReveal direction="right">
              <div>
                <h2 className="font-heading font-bold text-charcoal text-2xl">{product.name}</h2>
                <p className="mt-4 text-muted text-lg leading-relaxed">{product.description}</p>

                {/* Features */}
                <div className="mt-8">
                  <h3 className="font-heading font-bold text-charcoal text-lg mb-4">{isArabic ? 'المميزات' : 'Features'}</h3>
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

                {/* CTA Buttons */}
                <div className="mt-10 flex flex-col sm:flex-row gap-4">
                  <Button href="/request-a-quote" variant="primary" size="lg">
                    {isArabic ? 'إرسال استفسار' : 'Send Inquiry'}
                  </Button>
                  <a
                    href={getWhatsAppUrl(product.whatsappMessage || whatsappMessages.general)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg bg-green-500 text-white font-semibold hover:bg-green-600 hover:scale-105 transition-all duration-300 shadow-lg shadow-green-500/20"
                  >
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                    WhatsApp
                  </a>
                </div>

                {/* Trust Badges */}
                <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-4">
                  {[
                    { icon: Truck, label: isArabic ? 'توصيل' : 'Delivery' },
                    { icon: Shield, label: isArabic ? 'ضمان' : 'Warranty' },
                    { icon: Clock, label: isArabic ? 'تركيب' : 'Installation' },
                    { icon: Award, label: isArabic ? 'جودة' : 'Quality' },
                  ].map((badge) => (
                    <div key={badge.label} className="flex flex-col items-center text-center gap-2 p-3 rounded-lg bg-white border border-border">
                      <badge.icon className="w-5 h-5 text-ocean" />
                      <span className="text-xs font-medium text-charcoal">{badge.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Detailed Description */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <ScrollReveal className="lg:col-span-2">
              <SectionHeading
                eyebrow={isArabic ? 'نظرة عامة' : 'Overview'}
                title={isArabic ? `عن ${product.name}` : `About ${product.name}`}
              />
              <div className="mt-8 prose prose-lg max-w-none text-charcoal">
                {longDesc.split('\n\n').map((paragraph, i) => (
                  <p key={i} className="text-muted leading-relaxed mb-4">{paragraph}</p>
                ))}
              </div>
            </ScrollReveal>

            {/* Specifications */}
            {productSpecs.length > 0 && (
              <ScrollReveal>
                <div className="bg-off-white rounded-xl p-8 border border-border sticky top-24">
                  <h3 className="font-heading font-bold text-charcoal text-lg mb-6">{isArabic ? 'المواصفات' : 'Specifications'}</h3>
                  <div className="space-y-4">
                    {productSpecs.map((spec) => (
                      <div key={spec.label} className="flex justify-between items-start pb-3 border-b border-border last:border-0">
                        <span className="text-muted text-sm">{spec.label}</span>
                        <span className="text-charcoal text-sm font-medium text-right">{spec.value}</span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-6">
                    <Button href="/request-a-quote" variant="primary" size="md" className="w-full">
                      {isArabic ? 'طلب عرض أسعار' : 'Get a Quote'}
                    </Button>
                  </div>
                </div>
              </ScrollReveal>
            )}
          </div>
        </div>
      </section>

      {/* Product Gallery */}
      {galleryImages.length > 0 && (
        <section className="section-padding bg-off-white">
          <div className="max-w-7xl mx-auto container-padding">
            <ScrollReveal>
              <SectionHeading
                eyebrow={isArabic ? 'المعرض' : 'Gallery'}
                title={isArabic ? `صور ${product.name}` : `${product.name} Gallery`}
                description={isArabic ? 'شاهد صور هذا المنتج من زوايا مختلفة.' : 'View this product from different angles.'}
              />
            </ScrollReveal>
            <div className="mt-12 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {galleryImages.map((img, i) => (
                <ScrollReveal key={i} delay={i * 0.05}>
                  <button
                    onClick={() => setSelectedImage(i)}
                    className="group relative block w-full aspect-square rounded-lg overflow-hidden bg-navy-deep"
                  >
                    <Image
                      src={img.src}
                      alt={img.alt}
                      fill
                      sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                      placeholder="blur"
                      blurDataURL={SHIMMER}
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-navy-deep/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </button>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Why Choose This Product */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto container-padding">
          <ScrollReveal>
            <SectionHeading
              eyebrow={isArabic ? 'لماذا تختارنا' : 'Why Choose Us'}
              title={isArabic ? 'لماذا شيقيل مارين' : 'Why Shakeel Marine'}
            />
          </ScrollReveal>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: isArabic ? 'خبرة 30+ سنة' : '30+ Years Experience',
                desc: isArabic ? 'خبرة طويلة في التأثيث البحري وصناعة الغطاءات في الكويت.' : 'Decades of marine upholstery and cover fabrication experience in Kuwait.',
              },
              {
                title: isArabic ? 'مواد بحرية ممتازة' : 'Premium Marine Materials',
                desc: isArabic ? 'نستخدم فقط المواد البحرية الممتازة المقاومة للماء والأشعة والملح.' : 'We use only premium marine-grade materials resistant to water, UV and salt.',
              },
              {
                title: isArabic ? 'تركيب مهني' : 'Professional Installation',
                desc: isArabic ? 'فريقنا المُجرب يضمن تركيب مثالي وتشطيب نظيف كل مرة.' : 'Our expert team ensures perfect fitting and clean finishing every time.',
              },
            ].map((item, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div className="text-center p-8">
                  <div className="w-14 h-14 mx-auto mb-5 rounded-full bg-ocean/10 flex items-center justify-center">
                    <Star className="w-6 h-6 text-ocean" />
                  </div>
                  <h3 className="font-heading font-bold text-charcoal">{item.title}</h3>
                  <p className="mt-2 text-muted text-sm leading-relaxed">{item.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Related Products */}
      <section className="section-padding bg-off-white">
        <div className="max-w-7xl mx-auto container-padding">
          <ScrollReveal>
            <SectionHeading
              eyebrow={isArabic ? 'منتجات ذات صلة' : 'Related Products'}
              title={isArabic ? 'منتجات أخرى قد تهمك' : 'Other Products You May Like'}
            />
          </ScrollReveal>
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {relatedProducts.map((rp, i) => (
              <ScrollReveal key={rp.slug} delay={i * 0.1}>
                <Link
                  href={`/products/${rp.slug}`}
                  className="group block bg-white rounded-xl overflow-hidden border border-border hover:border-ocean/30 hover:shadow-lg hover:shadow-ocean/5 transition-all duration-300"
                >
                  <div className="aspect-[4/3] bg-navy-deep relative overflow-hidden">
                    <Image
                      src={rp.images[0].src}
                      alt={rp.images[0].alt}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      placeholder="blur"
                      blurDataURL={SHIMMER}
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                  <div className="p-5">
                    <h3 className="font-heading font-bold text-charcoal text-sm group-hover:text-ocean transition-colors line-clamp-2">
                      {rp.name}
                    </h3>
                    <p className="mt-1 text-muted text-xs line-clamp-2">{rp.tagline}</p>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section-padding bg-navy-deep relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_50%,rgba(14,116,144,0.15),transparent_60%)]" />
        <div className="max-w-4xl mx-auto container-padding text-center relative z-10">
          <ScrollReveal>
            <h2 className="font-heading font-bold text-white" style={{ fontSize: 'clamp(1.75rem, 4vw, 3rem)' }}>
              {isArabic ? `هل تريد ${product.name}؟` : `Ready for a ${product.name}?`}
            </h2>
            <p className="mt-5 text-white/60 text-lg max-w-xl mx-auto leading-relaxed">
              {isArabic ? 'تواصل معنا اليوم واحصل على عرض مخصص لاحتياجاتك.' : 'Contact us today for a custom quote tailored to your needs.'}
            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button href="/request-a-quote" variant="primary" size="lg">
                {isArabic ? 'طلب عرض أسعار' : 'Request a Quote'}
              </Button>
              <a
                href={getWhatsAppUrl(product.whatsappMessage || whatsappMessages.general)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg bg-green-500 text-white font-semibold hover:bg-green-600 hover:scale-105 transition-all duration-300 shadow-lg shadow-green-500/20"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                WhatsApp
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
