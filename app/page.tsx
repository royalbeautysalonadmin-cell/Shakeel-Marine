import { Metadata } from 'next';
import { HeroSection } from '@/components/home/HeroSection';
import { TrustSection } from '@/components/home/TrustSection';
import { ServicesSection } from '@/components/home/ServicesSection';
import { JetSkiShowcase } from '@/components/home/JetSkiShowcase';
import { BoatShipSection } from '@/components/home/BoatShipSection';
import { CanopySection } from '@/components/home/CanopySection';
import { MaterialsSection } from '@/components/home/MaterialsSection';
import { WhySection } from '@/components/home/WhySection';
import { ProcessSection } from '@/components/home/ProcessSection';
import { GalleryPreview } from '@/components/home/GalleryPreview';
import { TestimonialsSection } from '@/components/home/TestimonialsSection';
import { FaqPreview } from '@/components/home/FaqPreview';
import { CoverageSection } from '@/components/home/CoverageSection';
import { FinalCta } from '@/components/home/FinalCta';
import { generatePageMetadata, getOrganizationSchema, getWebSiteSchema } from '@/lib/seo';

export const metadata: Metadata = generatePageMetadata({
  title: 'Shakeel Marine | Marine Upholstery & Custom Covers in Kuwait',
  description:
    'Custom marine upholstery and covers for jet skis, boats and ships in Kuwait. Professional craftsmanship, custom design and installation by Shakeel Marine.',
  path: '/',
});

export default function HomePage() {
  const orgSchema = getOrganizationSchema();
  const siteSchema = getWebSiteSchema();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(siteSchema) }}
      />
      <HeroSection />
      <TrustSection />
      <ServicesSection />
      <JetSkiShowcase />
      <BoatShipSection />
      <CanopySection />
      <MaterialsSection />
      <WhySection />
      <ProcessSection />
      <GalleryPreview />
      <TestimonialsSection />
      <FaqPreview />
      <CoverageSection />
      <FinalCta />
    </>
  );
}
