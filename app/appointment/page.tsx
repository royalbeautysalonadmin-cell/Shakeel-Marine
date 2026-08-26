import { Metadata } from 'next';
import { generatePageMetadata, getBreadcrumbSchema } from '@/lib/seo';
import { AppointmentContent } from '@/components/appointment/AppointmentContent';

export const metadata: Metadata = generatePageMetadata({
  title: 'Book Appointment | Measurement & Consultation | Shakeel Marine',
  description: 'Book a measurement appointment with Shakeel Marine. Schedule a visit for your jet ski, boat or ship at your location in Kuwait.',
  path: '/appointment',
});

export default function AppointmentPage() {
  const breadcrumbs = getBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Appointment', url: '/appointment' },
  ]);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }} />
      <AppointmentContent />
    </>
  );
}
