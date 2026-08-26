import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { generatePageMetadata, getBreadcrumbSchema } from '@/lib/seo';
import { getBlogPostBySlug } from '@/data/blog';
import { BlogPost } from '@/components/blog/BlogPost';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) return {};
  return generatePageMetadata({
    title: post.seo.title,
    description: post.seo.description,
    path: `/blog/${slug}`,
  });
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) return notFound();

  const breadcrumbs = getBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Blog', url: '/blog' },
    { name: post.title, url: `/blog/${slug}` },
  ]);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }} />
      <BlogPost post={post} />
    </>
  );
}
