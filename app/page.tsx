import { Metadata } from 'next';
import dynamic from 'next/dynamic';
import { HeroSection } from '@/components/home/HeroSection';
import { TrustSection } from '@/components/home/TrustSection';
import { generatePageMetadata, getOrganizationSchema, getWebSiteSchema, getLocalBusinessSchema } from '@/lib/seo';

const StatsSection = dynamic(() => import('@/components/home/StatsSection').then(m => ({ default: m.StatsSection })));
const TrustBadges = dynamic(() => import('@/components/home/TrustBadges').then(m => ({ default: m.TrustBadges })));
const ServicesSection = dynamic(() => import('@/components/home/ServicesSection').then(m => ({ default: m.ServicesSection })));
const JetSkiShowcase = dynamic(() => import('@/components/home/JetSkiShowcase').then(m => ({ default: m.JetSkiShowcase })));
const BoatShipSection = dynamic(() => import('@/components/home/BoatShipSection').then(m => ({ default: m.BoatShipSection })));
const CanopySection = dynamic(() => import('@/components/home/CanopySection').then(m => ({ default: m.CanopySection })));
const MaterialsSection = dynamic(() => import('@/components/home/MaterialsSection').then(m => ({ default: m.MaterialsSection })));
const WhySection = dynamic(() => import('@/components/home/WhySection').then(m => ({ default: m.WhySection })));
const ProcessSection = dynamic(() => import('@/components/home/ProcessSection').then(m => ({ default: m.ProcessSection })));
const BeforeAfterSection = dynamic(() => import('@/components/home/BeforeAfterSection').then(m => ({ default: m.BeforeAfterSection })));
const GalleryPreview = dynamic(() => import('@/components/home/GalleryPreview').then(m => ({ default: m.GalleryPreview })));
const TestimonialsSection = dynamic(() => import('@/components/home/TestimonialsSection').then(m => ({ default: m.TestimonialsSection })));
const FaqPreview = dynamic(() => import('@/components/home/FaqPreview').then(m => ({ default: m.FaqPreview })));
const CoverageSection = dynamic(() => import('@/components/home/CoverageSection').then(m => ({ default: m.CoverageSection })));
const FinalCta = dynamic(() => import('@/components/home/FinalCta').then(m => ({ default: m.FinalCta })));

export const metadata: Metadata = generatePageMetadata({
  title: 'Shakeel Marine | Marine Upholstery & Custom Covers in Kuwait',
  description: 'Shakeel Marine provides custom jet ski seat covers, boat and ship seats, marine upholstery and canopy covers in Kuwait. Request a custom quote today.',
  path: '/',
});

export default function HomePage() {
  const orgSchema = getOrganizationSchema();
  const siteSchema = getWebSiteSchema();
  const localSchema = getLocalBusinessSchema();

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(siteSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localSchema) }} />
      <HeroSection />
      <TrustSection />
      <StatsSection />
      <TrustBadges />
      <ServicesSection />
      <JetSkiShowcase />
      <BoatShipSection />
      <CanopySection />
      <MaterialsSection />
      <WhySection />
      <ProcessSection />
      <BeforeAfterSection />
      <GalleryPreview />
      <TestimonialsSection />
      <FaqPreview />
      <CoverageSection />
      <FinalCta />
    </>
  );
}
