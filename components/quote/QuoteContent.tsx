'use client';

import { useState } from 'react';
import { ScrollReveal } from '@/components/shared/ScrollReveal';
import { Button } from '@/components/ui/Button';
import { getWhatsAppUrl, whatsappMessages } from '@/lib/site-config';
import { Send, FileText } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  quoteFormSchema,
  type QuoteFormData,
  serviceOptions,
  vesselTypeOptions,
  contactMethodOptions,
} from '@/lib/schemas';

export function QuoteContent() {
  const [submitted, setSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<QuoteFormData>({
    resolver: zodResolver(quoteFormSchema),
  });

  const onSubmit = async (data: QuoteFormData) => {
    const res = await fetch('/api/quotes', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
    if (!res.ok) throw new Error('Failed to submit');
    setSubmitted(true);
    reset();
  };

  return (
    <>
      {/* Hero */}
      <section className="relative py-32 lg:py-40 bg-navy-deep overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_20%,rgba(14,116,144,0.15),transparent_60%)]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <ScrollReveal>
            <span className="text-ocean text-xs font-semibold uppercase tracking-[0.2em]">
              Quote
            </span>
            <h1
              className="mt-4 text-white font-heading font-bold"
              style={{ fontSize: 'clamp(2.25rem, 5vw, 4.5rem)' }}
            >
              Request Your
              <br />
              Custom Marine Quote
            </h1>
            <p className="mt-6 text-white/60 text-lg md:text-xl max-w-xl leading-relaxed">
              Share your project details and we will prepare a tailored quote
              for your marine upholstery or cover requirements.
            </p>
          </ScrollReveal>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-10 bg-gradient-to-t from-off-white/30 to-transparent" />
      </section>

      {/* Form */}
      <section className="section-padding bg-off-white">
        <div className="max-w-4xl mx-auto container-padding">
          <ScrollReveal>
            {submitted ? (
              <div className="bg-white rounded-xl p-12 border border-border text-center">
                <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-ocean/10 flex items-center justify-center">
                  <FileText className="w-9 h-9 text-ocean" />
                </div>
                <h2 className="font-heading font-bold text-charcoal text-2xl">
                  Quote Request Received
                </h2>
                <p className="mt-3 text-muted text-lg max-w-md mx-auto">
                  Thank you for your interest. We will review your project
                  details and get back to you shortly.
                </p>
                <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
                  <Button onClick={() => setSubmitted(false)} variant="ghost">
                    Submit Another Quote
                  </Button>
                  <a
                    href={getWhatsAppUrl(whatsappMessages.quote)}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button variant="secondary">
                      Also WhatsApp Us
                    </Button>
                  </a>
                </div>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="bg-white rounded-xl p-8 md:p-12 border border-border space-y-6"
              >
                <div className="mb-4">
                  <h2 className="font-heading font-bold text-charcoal text-2xl">
                    Project Details
                  </h2>
                  <p className="mt-1 text-muted text-sm">
                    Fill in as much detail as possible to help us prepare an
                    accurate quote.
                  </p>
                </div>

                {/* Row: Name + Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="quote-name" className="block text-sm font-medium text-charcoal mb-1.5">
                      Full Name *
                    </label>
                    <input
                      id="quote-name"
                      type="text"
                      {...register('fullName')}
                      className="w-full px-4 py-3 rounded-lg border border-border bg-off-white text-charcoal text-sm focus:outline-none focus:ring-2 focus:ring-ocean/30 focus:border-ocean transition-colors"
                      placeholder="Your full name"
                    />
                    {errors.fullName && (
                      <p className="mt-1 text-red-500 text-xs">{errors.fullName.message}</p>
                    )}
                  </div>
                  <div>
                    <label htmlFor="quote-phone" className="block text-sm font-medium text-charcoal mb-1.5">
                      Phone *
                    </label>
                    <input
                      id="quote-phone"
                      type="tel"
                      {...register('phone')}
                      className="w-full px-4 py-3 rounded-lg border border-border bg-off-white text-charcoal text-sm focus:outline-none focus:ring-2 focus:ring-ocean/30 focus:border-ocean transition-colors"
                      placeholder="Your phone number"
                    />
                    {errors.phone && (
                      <p className="mt-1 text-red-500 text-xs">{errors.phone.message}</p>
                    )}
                  </div>
                </div>

                {/* Row: WhatsApp + Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="quote-whatsapp" className="block text-sm font-medium text-charcoal mb-1.5">
                      WhatsApp
                    </label>
                    <input
                      id="quote-whatsapp"
                      type="tel"
                      {...register('whatsapp')}
                      className="w-full px-4 py-3 rounded-lg border border-border bg-off-white text-charcoal text-sm focus:outline-none focus:ring-2 focus:ring-ocean/30 focus:border-ocean transition-colors"
                      placeholder="WhatsApp number (optional)"
                    />
                  </div>
                  <div>
                    <label htmlFor="quote-email" className="block text-sm font-medium text-charcoal mb-1.5">
                      Email *
                    </label>
                    <input
                      id="quote-email"
                      type="email"
                      {...register('email')}
                      className="w-full px-4 py-3 rounded-lg border border-border bg-off-white text-charcoal text-sm focus:outline-none focus:ring-2 focus:ring-ocean/30 focus:border-ocean transition-colors"
                      placeholder="Your email"
                    />
                    {errors.email && (
                      <p className="mt-1 text-red-500 text-xs">{errors.email.message}</p>
                    )}
                  </div>
                </div>

                {/* Row: Service + Vessel Type */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="quote-service" className="block text-sm font-medium text-charcoal mb-1.5">
                      Service Needed *
                    </label>
                    <select
                      id="quote-service"
                      {...register('service')}
                      className="w-full px-4 py-3 rounded-lg border border-border bg-off-white text-charcoal text-sm focus:outline-none focus:ring-2 focus:ring-ocean/30 focus:border-ocean transition-colors"
                    >
                      <option value="">Select a service</option>
                      {serviceOptions.map((opt) => (
                        <option key={opt.value} value={opt.value}>
                          {opt.label}
                        </option>
                      ))}
                    </select>
                    {errors.service && (
                      <p className="mt-1 text-red-500 text-xs">{errors.service.message}</p>
                    )}
                  </div>
                  <div>
                    <label htmlFor="quote-vessel" className="block text-sm font-medium text-charcoal mb-1.5">
                      Vessel Type *
                    </label>
                    <select
                      id="quote-vessel"
                      {...register('vesselType')}
                      className="w-full px-4 py-3 rounded-lg border border-border bg-off-white text-charcoal text-sm focus:outline-none focus:ring-2 focus:ring-ocean/30 focus:border-ocean transition-colors"
                    >
                      <option value="">Select vessel type</option>
                      {vesselTypeOptions.map((opt) => (
                        <option key={opt.value} value={opt.value}>
                          {opt.label}
                        </option>
                      ))}
                    </select>
                    {errors.vesselType && (
                      <p className="mt-1 text-red-500 text-xs">{errors.vesselType.message}</p>
                    )}
                  </div>
                </div>

                {/* Vessel Details */}
                <div>
                  <label htmlFor="quote-vessel-details" className="block text-sm font-medium text-charcoal mb-1.5">
                    Vessel Details
                  </label>
                  <input
                    id="quote-vessel-details"
                    type="text"
                    {...register('vesselDetails')}
                    className="w-full px-4 py-3 rounded-lg border border-border bg-off-white text-charcoal text-sm focus:outline-none focus:ring-2 focus:ring-ocean/30 focus:border-ocean transition-colors"
                    placeholder="Make, model, year (optional)"
                  />
                </div>

                {/* Project Description */}
                <div>
                  <label htmlFor="quote-description" className="block text-sm font-medium text-charcoal mb-1.5">
                    Project Description *
                  </label>
                  <textarea
                    id="quote-description"
                    {...register('projectDescription')}
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg border border-border bg-off-white text-charcoal text-sm focus:outline-none focus:ring-2 focus:ring-ocean/30 focus:border-ocean transition-colors resize-none"
                    placeholder="Describe your project — what you need, any preferences..."
                  />
                  {errors.projectDescription && (
                    <p className="mt-1 text-red-500 text-xs">{errors.projectDescription.message}</p>
                  )}
                </div>

                {/* Row: Color + Design */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="quote-color" className="block text-sm font-medium text-charcoal mb-1.5">
                      Preferred Color
                    </label>
                    <input
                      id="quote-color"
                      type="text"
                      {...register('preferredColor')}
                      className="w-full px-4 py-3 rounded-lg border border-border bg-off-white text-charcoal text-sm focus:outline-none focus:ring-2 focus:ring-ocean/30 focus:border-ocean transition-colors"
                      placeholder="e.g. Navy blue, black (optional)"
                    />
                  </div>
                  <div>
                    <label htmlFor="quote-design" className="block text-sm font-medium text-charcoal mb-1.5">
                      Preferred Design
                    </label>
                    <input
                      id="quote-design"
                      type="text"
                      {...register('preferredDesign')}
                      className="w-full px-4 py-3 rounded-lg border border-border bg-off-white text-charcoal text-sm focus:outline-none focus:ring-2 focus:ring-ocean/30 focus:border-ocean transition-colors"
                      placeholder="e.g. Diamond stitch, plain (optional)"
                    />
                  </div>
                </div>

                {/* Preferred Contact Method */}
                <div>
                  <label htmlFor="quote-contact" className="block text-sm font-medium text-charcoal mb-1.5">
                    Preferred Contact Method *
                  </label>
                  <select
                    id="quote-contact"
                    {...register('preferredContactMethod')}
                    className="w-full px-4 py-3 rounded-lg border border-border bg-off-white text-charcoal text-sm focus:outline-none focus:ring-2 focus:ring-ocean/30 focus:border-ocean transition-colors"
                  >
                    <option value="">How should we contact you?</option>
                    {contactMethodOptions.map((opt) => (
                      <option key={opt.value} value={opt.value}>
                        {opt.label}
                      </option>
                    ))}
                  </select>
                  {errors.preferredContactMethod && (
                    <p className="mt-1 text-red-500 text-xs">{errors.preferredContactMethod.message}</p>
                  )}
                </div>

                <Button
                  type="submit"
                  variant="primary"
                  size="lg"
                  loading={isSubmitting}
                  className="w-full"
                >
                  Submit Quote Request
                </Button>
              </form>
            )}
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
