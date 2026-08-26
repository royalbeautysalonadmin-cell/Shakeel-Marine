'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ScrollReveal } from '@/components/shared/ScrollReveal';
import { Button } from '@/components/ui/Button';
import { WhatsAppCTA } from '@/components/ui/WhatsAppCTA';
import { SHIMMER } from '@/lib/utils';
import { useLang } from '@/components/shared/LangProvider';
import { type BlogPost } from '@/data/blog';

interface BlogPostProps {
  post: BlogPost;
}

export function BlogPost({ post }: BlogPostProps) {
  const { t, isArabic } = useLang();
  return (
    <>
      <section className="relative py-32 lg:py-40 bg-navy-deep overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_20%,rgba(14,116,144,0.15),transparent_60%)]" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <ScrollReveal>
            <div className="flex items-center gap-2 text-white/40 text-sm mb-6">
              <Link href="/" className="hover:text-ocean transition-colors">{t.blog.home}</Link>
              <span>/</span>
              <Link href="/blog" className="hover:text-ocean transition-colors">{t.blog.title}</Link>
              <span>/</span>
              <span className="text-white/60">{post.title}</span>
            </div>
            <div className="flex items-center gap-3 text-sm text-white/40 mb-4">
              <span>{post.date}</span>
              <span>•</span>
              <span>{post.readTime}</span>
            </div>
            <h1 className="text-white font-heading font-bold" style={{ fontSize: 'clamp(1.75rem, 4vw, 3rem)' }}>
              {post.title}
            </h1>
          </ScrollReveal>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-10 bg-gradient-to-t from-off-white/30 to-transparent" />
      </section>

      <section className="section-padding bg-white">
        <div className="max-w-4xl mx-auto container-padding">
          <ScrollReveal>
            <div className="aspect-[16/9] rounded-xl overflow-hidden bg-navy-deep relative mb-10">
              <Image
                src={post.image}
                alt={post.imageAlt}
                fill
                sizes="(max-width: 896px) 100vw, 896px"
                placeholder="blur"
                blurDataURL={SHIMMER}
                className="object-cover"
              />
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div
              className="prose prose-lg max-w-none text-charcoal prose-headings:font-heading prose-headings:text-charcoal prose-a:text-ocean prose-strong:text-charcoal"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </ScrollReveal>

          <ScrollReveal>
            <div className="mt-12 pt-8 border-t border-border flex flex-col sm:flex-row gap-4">
              <Button href="/request-a-quote" variant="primary" size="lg">
                {t.blog.getInTouch}
              </Button>
              <WhatsAppCTA context="general" />
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
