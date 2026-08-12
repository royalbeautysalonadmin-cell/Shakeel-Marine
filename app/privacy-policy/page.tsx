import { Metadata } from 'next';
import { ScrollReveal } from '@/components/shared/ScrollReveal';
import { generatePageMetadata, getBreadcrumbSchema } from '@/lib/seo';
import { siteConfig } from '@/lib/site-config';

export const metadata: Metadata = generatePageMetadata({
  title: 'Privacy Policy | Shakeel Marine',
  description: `Privacy policy for ${siteConfig.name}. Learn how we handle your information.`,
  path: '/privacy-policy',
});

export default function PrivacyPolicyPage() {
  const breadcrumbs = getBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Privacy Policy', url: '/privacy-policy' },
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
              Privacy Policy
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
                1. Introduction
              </h2>
              <p className="text-muted leading-relaxed mb-4">
                Welcome to {siteConfig.name} (&quot;we,&quot; &quot;our,&quot;
                or &quot;us&quot;). We operate the website{' '}
                {siteConfig.url} and provide marine upholstery and custom
                cover services in Kuwait.
              </p>
              <p className="text-muted leading-relaxed mb-4">
                This Privacy Policy explains how we collect, use, and protect
                your personal information when you visit our website or use our
                services.
              </p>

              <h2 className="font-heading font-bold text-charcoal text-xl mt-8 mb-4">
                2. Information We Collect
              </h2>
              <p className="text-muted leading-relaxed mb-4">
                We may collect the following types of information:
              </p>
              <ul className="list-disc list-inside text-muted leading-relaxed space-y-2 mb-4">
                <li>Name and contact details (phone, email, WhatsApp)</li>
                <li>Project details and vessel information you provide</li>
                <li>Images you upload through our forms</li>
                <li>Usage data collected automatically (analytics, cookies)</li>
              </ul>

              <h2 className="font-heading font-bold text-charcoal text-xl mt-8 mb-4">
                3. How We Use Your Information
              </h2>
              <p className="text-muted leading-relaxed mb-4">
                We use your information to:
              </p>
              <ul className="list-disc list-inside text-muted leading-relaxed space-y-2 mb-4">
                <li>Respond to your inquiries and provide quotes</li>
                <li>Deliver our marine upholstery and cover services</li>
                <li>Communicate about your projects</li>
                <li>Improve our website and services</li>
              </ul>

              <h2 className="font-heading font-bold text-charcoal text-xl mt-8 mb-4">
                4. Data Protection
              </h2>
              <p className="text-muted leading-relaxed mb-4">
                We implement appropriate security measures to protect your
                personal information. However, no method of transmission over
                the Internet is 100% secure.
              </p>

              <h2 className="font-heading font-bold text-charcoal text-xl mt-8 mb-4">
                5. Third-Party Services
              </h2>
              <p className="text-muted leading-relaxed mb-4">
                We may use third-party services such as Google Analytics to
                collect usage data. These services have their own privacy
                policies governing the use of your information.
              </p>

              <h2 className="font-heading font-bold text-charcoal text-xl mt-8 mb-4">
                6. Cookies
              </h2>
              <p className="text-muted leading-relaxed mb-4">
                Our website may use cookies to enhance your browsing
                experience. You can control cookie settings through your
                browser preferences.
              </p>

              <h2 className="font-heading font-bold text-charcoal text-xl mt-8 mb-4">
                7. Your Rights
              </h2>
              <p className="text-muted leading-relaxed mb-4">
                You have the right to access, correct, or delete your personal
                information. To exercise these rights, please contact us using
                the information below.
              </p>

              <h2 className="font-heading font-bold text-charcoal text-xl mt-8 mb-4">
                8. Contact Us
              </h2>
              <p className="text-muted leading-relaxed mb-4">
                For questions about this Privacy Policy, please contact us at:
              </p>
              <ul className="list-disc list-inside text-muted leading-relaxed space-y-2 mb-4">
                <li>Email: {siteConfig.email}</li>
                <li>Phone: {siteConfig.phone}</li>
                <li>Address: {siteConfig.address}</li>
              </ul>

              <p className="text-muted/60 text-sm mt-12 border-t border-border pt-8">
                [PLACEHOLDER: This privacy policy should be reviewed and
                customized by a legal professional to ensure compliance with
                applicable laws and regulations in Kuwait.]
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
