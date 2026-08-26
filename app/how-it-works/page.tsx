import { Metadata } from 'next';
import { generatePageMetadata, getBreadcrumbSchema } from '@/lib/seo';
import { HowItWorksContent } from '@/components/how-it-works/HowItWorksContent';

export const metadata: Metadata = generatePageMetadata({
  title: 'How It Works | Marine Upholstery Process | Shakeel Marine',
  description: 'Learn how Shakeel Marine works — from consultation and design to fabrication and professional installation of marine upholstery and covers.',
  path: '/how-it-works',
});

export default function HowItWorksPage() {
  const breadcrumbs = getBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'How It Works', url: '/how-it-works' },
  ]);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }} />
      <HowItWorksContent />
    </>
  );
}
