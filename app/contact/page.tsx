import { Metadata } from 'next';
import { generatePageMetadata, getBreadcrumbSchema } from '@/lib/seo';
import { ContactContent } from '@/components/contact/ContactContent';

export const metadata: Metadata = generatePageMetadata({
  title: 'Contact Shakeel Marine | Marine Upholstery in Kuwait',
  description: 'Contact Shakeel Marine for custom marine upholstery in Kuwait. Request a quote via WhatsApp, phone or our contact form.',
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
