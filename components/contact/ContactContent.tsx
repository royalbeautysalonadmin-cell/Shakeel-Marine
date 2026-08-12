'use client';

import { useState } from 'react';
import { ScrollReveal } from '@/components/shared/ScrollReveal';
import { Button } from '@/components/ui/Button';
import { siteConfig, getWhatsAppUrl, getPhoneUrl, whatsappMessages } from '@/lib/site-config';
import { Phone, Mail, MapPin, Clock, MessageCircle, Send } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { contactFormSchema, type ContactFormData, serviceOptions } from '@/lib/schemas';

export function ContactContent() {
  const [submitted, setSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmit = async () => {
    // Simulate submission
    await new Promise((r) => setTimeout(r, 1500));
    setSubmitted(true);
    reset();
  };

  const contactInfo = [
    { icon: Phone, label: 'Phone', value: siteConfig.phone, href: getPhoneUrl() },
    { icon: MessageCircle, label: 'WhatsApp', value: 'Chat on WhatsApp', href: getWhatsAppUrl(whatsappMessages.general) },
    { icon: Mail, label: 'Email', value: siteConfig.email, href: `mailto:${siteConfig.email}` },
    { icon: MapPin, label: 'Location', value: siteConfig.address, href: siteConfig.mapUrl },
    { icon: Clock, label: 'Hours', value: siteConfig.hours, href: undefined },
  ];

  return (
    <>
      {/* Hero */}
      <section className="relative py-32 lg:py-40 bg-navy-deep overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_20%,rgba(14,116,144,0.15),transparent_60%)]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <ScrollReveal>
            <span className="text-ocean text-xs font-semibold uppercase tracking-[0.2em]">
              Contact
            </span>
            <h1
              className="mt-4 text-white font-heading font-bold"
              style={{ fontSize: 'clamp(2.25rem, 5vw, 4.5rem)' }}
            >
              Let&apos;s Talk About
              <br />
              Your Marine Project
            </h1>
            <p className="mt-6 text-white/60 text-lg md:text-xl max-w-xl leading-relaxed">
              Get in touch to discuss your requirements. We are happy to help
              with any marine upholstery or cover project.
            </p>
          </ScrollReveal>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-10 bg-gradient-to-t from-white/30 to-transparent" />
      </section>

      {/* Contact Info + Form */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
            {/* Contact Info */}
            <div className="lg:col-span-2">
              <ScrollReveal>
                <h2 className="font-heading font-bold text-charcoal text-2xl mb-8">
                  Get in Touch
                </h2>
                <div className="space-y-6">
                  {contactInfo.map((item) => (
                    <div key={item.label} className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-full bg-ocean/10 flex items-center justify-center shrink-0">
                        <item.icon className="w-4 h-4 text-ocean" />
                      </div>
                      <div>
                        <span className="text-xs font-semibold uppercase tracking-wider text-muted">
                          {item.label}
                        </span>
                        {item.href ? (
                          <a
                            href={item.href}
                            target={item.label === 'WhatsApp' || item.label === 'Location' ? '_blank' : undefined}
                            rel={item.label === 'WhatsApp' || item.label === 'Location' ? 'noopener noreferrer' : undefined}
                            className="block mt-1 text-charcoal text-sm hover:text-ocean transition-colors"
                          >
                            {item.value}
                          </a>
                        ) : (
                          <p className="mt-1 text-charcoal text-sm">{item.value}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-10">
                  <a
                    href={getWhatsAppUrl(whatsappMessages.general)}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button variant="secondary" size="lg" className="w-full">
                      <MessageCircle className="w-4 h-4" />
                      Chat on WhatsApp
                    </Button>
                  </a>
                </div>
              </ScrollReveal>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-3">
              <ScrollReveal direction="right">
                <div className="bg-off-white rounded-xl p-8 border border-border">
                  {submitted ? (
                    <div className="text-center py-12">
                      <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-ocean/10 flex items-center justify-center">
                        <Send className="w-7 h-7 text-ocean" />
                      </div>
                      <h3 className="font-heading font-bold text-charcoal text-xl">
                        Message Sent
                      </h3>
                      <p className="mt-2 text-muted">
                        Thank you for reaching out. We will get back to you
                        shortly.
                      </p>
                      <div className="mt-6">
                        <Button onClick={() => setSubmitted(false)} variant="ghost">
                          Send Another Message
                        </Button>
                      </div>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                      <h2 className="font-heading font-bold text-charcoal text-xl mb-2">
                        Send Us a Message
                      </h2>

                      <div>
                        <label htmlFor="contact-name" className="block text-sm font-medium text-charcoal mb-1.5">
                          Name
                        </label>
                        <input
                          id="contact-name"
                          type="text"
                          {...register('name')}
                          className="w-full px-4 py-3 rounded-lg border border-border bg-white text-charcoal text-sm focus:outline-none focus:ring-2 focus:ring-ocean/30 focus:border-ocean transition-colors"
                          placeholder="Your name"
                        />
                        {errors.name && (
                          <p className="mt-1 text-red-500 text-xs">{errors.name.message}</p>
                        )}
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div>
                          <label htmlFor="contact-phone" className="block text-sm font-medium text-charcoal mb-1.5">
                            Phone
                          </label>
                          <input
                            id="contact-phone"
                            type="tel"
                            {...register('phone')}
                            className="w-full px-4 py-3 rounded-lg border border-border bg-white text-charcoal text-sm focus:outline-none focus:ring-2 focus:ring-ocean/30 focus:border-ocean transition-colors"
                            placeholder="Your phone number"
                          />
                          {errors.phone && (
                            <p className="mt-1 text-red-500 text-xs">{errors.phone.message}</p>
                          )}
                        </div>
                        <div>
                          <label htmlFor="contact-email" className="block text-sm font-medium text-charcoal mb-1.5">
                            Email
                          </label>
                          <input
                            id="contact-email"
                            type="email"
                            {...register('email')}
                            className="w-full px-4 py-3 rounded-lg border border-border bg-white text-charcoal text-sm focus:outline-none focus:ring-2 focus:ring-ocean/30 focus:border-ocean transition-colors"
                            placeholder="Your email"
                          />
                          {errors.email && (
                            <p className="mt-1 text-red-500 text-xs">{errors.email.message}</p>
                          )}
                        </div>
                      </div>

                      <div>
                        <label htmlFor="contact-service" className="block text-sm font-medium text-charcoal mb-1.5">
                          Service
                        </label>
                        <select
                          id="contact-service"
                          {...register('service')}
                          className="w-full px-4 py-3 rounded-lg border border-border bg-white text-charcoal text-sm focus:outline-none focus:ring-2 focus:ring-ocean/30 focus:border-ocean transition-colors"
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
                        <label htmlFor="contact-message" className="block text-sm font-medium text-charcoal mb-1.5">
                          Message
                        </label>
                        <textarea
                          id="contact-message"
                          {...register('message')}
                          rows={5}
                          className="w-full px-4 py-3 rounded-lg border border-border bg-white text-charcoal text-sm focus:outline-none focus:ring-2 focus:ring-ocean/30 focus:border-ocean transition-colors resize-none"
                          placeholder="Tell us about your project..."
                        />
                        {errors.message && (
                          <p className="mt-1 text-red-500 text-xs">{errors.message.message}</p>
                        )}
                      </div>

                      <Button
                        type="submit"
                        variant="primary"
                        size="lg"
                        loading={isSubmitting}
                        className="w-full"
                      >
                        Send Inquiry
                      </Button>
                    </form>
                  )}
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="h-96 bg-navy-deep relative">
        <iframe
          src={siteConfig.mapEmbed}
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Shakeel Marine location"
          className="grayscale opacity-80"
        />
      </section>
    </>
  );
}
