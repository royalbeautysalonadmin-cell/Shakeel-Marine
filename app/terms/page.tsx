import { Metadata } from 'next';
import { ScrollReveal } from '@/components/shared/ScrollReveal';
import { generatePageMetadata, getBreadcrumbSchema } from '@/lib/seo';
import { siteConfig } from '@/lib/site-config';

export const metadata: Metadata = generatePageMetadata({
  title: 'Terms & Conditions | Shakeel Marine',
  description: `Terms and conditions for ${siteConfig.name} marine upholstery and cover services.`,
  path: '/terms',
});

export default function TermsPage() {
  const breadcrumbs = getBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Terms & Conditions', url: '/terms' },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }}
      />

      {/* Hero */}
      <section className="relative py-32 lg:py-40 bg-navy-deep overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_20%,rgba(14,116,144,0.15),transparent_60%)]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <ScrollReveal>
            <span className="text-ocean text-xs font-semibold uppercase tracking-[0.2em]">
              Legal
            </span>
            <h1
              className="mt-4 text-white font-heading font-bold"
              style={{ fontSize: 'clamp(2.25rem, 5vw, 4.5rem)' }}
            >
              Terms &amp; Conditions
            </h1>
          </ScrollReveal>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-10 bg-gradient-to-t from-white/30 to-transparent" />
      </section>

      {/* Content */}
      <section className="section-padding bg-white">
        <div className="max-w-3xl mx-auto container-padding">
          <ScrollReveal>
            <div className="prose prose-gray max-w-none">
              <p className="text-muted text-sm mb-8">
                Last updated: [DATE]
              </p>

              <h2 className="font-heading font-bold text-charcoal text-xl mt-8 mb-4">
                1. Acceptance of Terms
              </h2>
              <p className="text-muted leading-relaxed mb-4">
                By accessing and using the {siteConfig.name} website ({siteConfig.url}),
                you accept and agree to be bound by these Terms &amp; Conditions.
                If you do not agree to these terms, please do not use our
                website.
              </p>

              <h2 className="font-heading font-bold text-charcoal text-xl mt-8 mb-4">
                2. Services
              </h2>
              <p className="text-muted leading-relaxed mb-4">
                {siteConfig.name} provides marine upholstery and custom cover
                services in Kuwait, including jet ski seat covers, boat and
                ship seats, marine upholstery and canopy covers. All services
                are subject to availability and project-specific agreements.
              </p>

              <h2 className="font-heading font-bold text-charcoal text-xl mt-8 mb-4">
                3. Quotations and Pricing
              </h2>
              <p className="text-muted leading-relaxed mb-4">
                Quotations provided through our website or other communication
                channels are estimates and subject to change based on final
                project requirements, materials and specifications. Final
                pricing will be confirmed before work begins.
              </p>

              <h2 className="font-heading font-bold text-charcoal text-xl mt-8 mb-4">
                4. Project Timeline
              </h2>
              <p className="text-muted leading-relaxed mb-4">
                Project timelines are estimates and may vary based on
                complexity, current workload and material availability. We will
                communicate expected timelines for each project individually.
              </p>

              <h2 className="font-heading font-bold text-charcoal text-xl mt-8 mb-4">
                5. Intellectual Property
              </h2>
              <p className="text-muted leading-relaxed mb-4">
                All content on this website, including text, images, graphics
                and design, is the property of {siteConfig.name} and is
                protected by applicable intellectual property laws.
              </p>

              <h2 className="font-heading font-bold text-charcoal text-xl mt-8 mb-4">
                6. Limitation of Liability
              </h2>
              <p className="text-muted leading-relaxed mb-4">
                {siteConfig.name} shall not be liable for any indirect,
                incidental, or consequential damages arising from the use of
                our website or services, to the extent permitted by applicable
                law.
              </p>

              <h2 className="font-heading font-bold text-charcoal text-xl mt-8 mb-4">
                7. Governing Law
              </h2>
              <p className="text-muted leading-relaxed mb-4">
                These terms are governed by and construed in accordance with
                the laws of Kuwait. Any disputes shall be subject to the
                exclusive jurisdiction of the courts of Kuwait.
              </p>

              <h2 className="font-heading font-bold text-charcoal text-xl mt-8 mb-4">
                8. Changes to Terms
              </h2>
              <p className="text-muted leading-relaxed mb-4">
                We reserve the right to modify these Terms &amp; Conditions
                at any time. Changes will be posted on this page with an
                updated revision date.
              </p>

              <h2 className="font-heading font-bold text-charcoal text-xl mt-8 mb-4">
                9. Contact
              </h2>
              <p className="text-muted leading-relaxed mb-4">
                For questions about these Terms &amp; Conditions, please
                contact us:
              </p>
              <ul className="list-disc list-inside text-muted leading-relaxed space-y-2 mb-4">
                <li>Email: {siteConfig.email}</li>
                <li>Phone: {siteConfig.phone}</li>
                <li>Address: {siteConfig.address}</li>
              </ul>

              <p className="text-muted/60 text-sm mt-12 border-t border-border pt-8">
                [PLACEHOLDER: These terms and conditions should be reviewed
                and customized by a legal professional to ensure compliance
                with applicable laws and regulations in Kuwait.]
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
