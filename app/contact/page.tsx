import { Metadata } from 'next';
import { generatePageMetadata, getBreadcrumbSchema } from '@/lib/seo';
import { ContactContent } from '@/components/contact/ContactContent';

export const metadata: Metadata = generatePageMetadata({
  title: 'Contact Shakeel Marine | Marine Services in Kuwait',
  description:
    'Get in touch with Shakeel Marine for custom marine upholstery and cover services in Kuwait. Phone, WhatsApp, email and contact form available.',
  path: '/contact',
});

export default function ContactPage() {
  const breadcrumbs = getBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Contact', url: '/contact' },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }}
      />
      <ContactContent />
    </>
  );
}
