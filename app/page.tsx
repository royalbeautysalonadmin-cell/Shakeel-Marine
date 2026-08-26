import { Metadata } from 'next';
import dynamic from 'next/dynamic';
import { HeroSection } from '@/components/home/HeroSection';
import { TrustSection } from '@/components/home/TrustSection';
import { generatePageMetadata, getOrganizationSchema, getWebSiteSchema, getLocalBusinessSchema } from '@/lib/seo';

const StatsSection = dynamic(() => import('@/components/home/StatsSection').then(m => ({ default: m.StatsSection })));
const TrustBadges = dynamic(() => import('@/components/home/TrustBadges').then(m => ({ default: m.TrustBadges })));
const ServicesSection = dynamic(() => import('@/components/home/ServicesSection').then(m => ({ default: m.ServicesSection })));
const JetSkiShowcase = dynamic(() => import('@/components/home/JetSkiShowcase').then(m => ({ default: m.JetSkiShowcase })));
const JetskiCustomSeat = dynamic(() => import('@/components/home/JetskiCustomSeat').then(m => ({ default: m.JetskiCustomSeat })));
const BoatShipSection = dynamic(() => import('@/components/home/BoatShipSection').then(m => ({ default: m.BoatShipSection })));
const CanopySection = dynamic(() => import('@/components/home/CanopySection').then(m => ({ default: m.CanopySection })));
const FloorMatSection = dynamic(() => import('@/components/home/FloorMatSection').then(m => ({ default: m.FloorMatSection })));
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
  title: 'Shakeel Marine | #1 Marine Upholstery, Jet Ski Seats & Canopy Covers in Kuwait',
  description: 'Shakeel Marine is Kuwait\'s leading marine upholstery specialist. Custom jet ski seat covers, boat covers, canopy covers, ship covers and marine accessories. 30+ years experience. Free consultation. Get a quote today!',
  path: '/',
  keywords: [
    'marine upholstery kuwait',
    'jet ski seat covers kuwait city',
    'best marine upholstery company kuwait',
    'custom boat covers kuwait',
    'canopy covers kuwait',
    'jet ski custom seats kuwait',
    'ship covers kuwait',
    'marine upholstery services near me',
    'jet ski floor mat kit kuwait',
    'boat seat covers kuwait',
    'custom marine covers kuwait',
    'jet ski upholstery kuwait',
    'boat canopy installation kuwait',
    'marine fabric kuwait',
    'custom jet ski accessories kuwait',
    'boat interior upholstery kuwait',
    'marine seat covers kuwait',
    'jet ski seat repair kuwait',
    'boat cover installation kuwait',
    'marine upholstery specialist kuwait',
  ],
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
      <JetskiCustomSeat />
      <BoatShipSection />
      <CanopySection />
      <FloorMatSection />
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
