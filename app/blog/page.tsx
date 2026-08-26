import { Metadata } from 'next';
import { generatePageMetadata, getBreadcrumbSchema } from '@/lib/seo';
import { BlogContent } from '@/components/blog/BlogContent';

export const metadata: Metadata = generatePageMetadata({
  title: 'Marine Tips & Blog | Shakeel Marine Kuwait',
  description: 'Expert marine tips, care guides and boat maintenance advice from Shakeel Marine in Kuwait. Learn about jet ski seats, boat covers and upholstery.',
  path: '/blog',
});

export default function BlogPage() {
  const breadcrumbs = getBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Blog', url: '/blog' },
  ]);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }} />
      <BlogContent />
    </>
  );
}
