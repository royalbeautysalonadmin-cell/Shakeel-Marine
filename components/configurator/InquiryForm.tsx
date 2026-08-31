'use client';

import { useState } from 'react';
import { ArrowRight, CheckCircle2, X } from 'lucide-react';
import { getWhatsAppUrl } from '@/lib/site-config';
import type { VehicleConfiguration, VehicleDefinition } from '@/data/configurator';
import { getConfigurationSummary } from '@/components/configurator/configuration';

interface InquiryFormProps {
  vehicle: VehicleDefinition;
  config: VehicleConfiguration;
  onClose: () => void;
}

interface InquiryFields {
  fullName: string;
  phone: string;
  whatsapp: string;
  email: string;
  country: string;
  additionalRequirements: string;
  preferredContactMethod: 'whatsapp' | 'phone' | 'email';
}

const initialFields: InquiryFields = {
  fullName: '',
  phone: '',
  whatsapp: '',
  email: '',
  country: 'Kuwait',
  additionalRequirements: '',
  preferredContactMethod: 'whatsapp',
};

function inputClassName() {
  return 'w-full rounded-lg border border-border bg-off-white px-4 py-3 text-sm text-charcoal outline-none transition-colors placeholder:text-muted/70 focus:border-ocean focus:ring-2 focus:ring-ocean/20';
}

export function InquiryForm({ vehicle, config, onClose }: InquiryFormProps) {
  const [fields, setFields] = useState<InquiryFields>(initialFields);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');
  const summary = getConfigurationSummary(config, vehicle);
  const summaryText = summary.join('\n');
  const product = vehicle.products.find((option) => option.id === config.product) ?? vehicle.products[0];
  const whatsappMessage = `Hello Shakeel Marine, I would like to request a quote for my custom design.\n\n${summaryText}`;

  const updateField = <Key extends keyof InquiryFields>(key: Key, value: InquiryFields[Key]) => {
    setFields((current) => ({ ...current, [key]: value }));
  };

  const submitInquiry = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError('');
    setSubmitting(true);

    try {
      const projectDescription = [
        fields.additionalRequirements.trim() || 'Custom design created with the Shakeel Marine 3D configurator.',
        '',
        'Configuration:',
        summaryText,
      ].join('\n');
      const response = await fetch('/api/quotes', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          fullName: fields.fullName,
          phone: fields.phone,
          whatsapp: fields.whatsapp,
          email: fields.email,
          country: fields.country,
          service: product.id,
          vesselType: vehicle.slug,
          vesselDetails: `${vehicle.name} design configurator`,
          projectDescription,
          preferredColor: summary[2].replace(/^[^:]+:\s*/, ''),
          preferredDesign: summary[5].replace(/^Design:\s*/, ''),
          preferredContactMethod: fields.preferredContactMethod,
        }),
      });

      if (!response.ok) throw new Error('Unable to submit inquiry');
      setSubmitted(true);
    } catch {
      setError('We could not submit the inquiry right now. Please continue on WhatsApp or try again.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-end justify-center bg-navy-deep/75 p-0 backdrop-blur-sm sm:items-center sm:p-4" role="dialog" aria-modal="true" aria-labelledby="configurator-inquiry-title">
      <div className="max-h-[92dvh] w-full max-w-2xl overflow-y-auto rounded-t-2xl bg-white shadow-2xl sm:rounded-2xl">
        <div className="sticky top-0 z-10 flex items-start justify-between border-b border-border bg-white px-5 py-5 sm:px-8">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-ocean">Your custom design</p>
            <h2 id="configurator-inquiry-title" className="mt-1 font-heading text-2xl font-bold text-charcoal">Send an inquiry</h2>
          </div>
          <button type="button" onClick={onClose} className="rounded-full p-2 text-muted transition-colors hover:bg-off-white hover:text-charcoal" aria-label="Close inquiry form">
            <X className="h-5 w-5" />
          </button>
        </div>

        {submitted ? (
          <div className="px-5 py-12 text-center sm:px-8">
            <CheckCircle2 className="mx-auto h-14 w-14 text-ocean" />
            <h3 className="mt-5 font-heading text-2xl font-bold text-charcoal">Inquiry sent successfully</h3>
            <p className="mx-auto mt-3 max-w-md text-muted">Your custom design details have been shared with Shakeel Marine. Continue on WhatsApp if you would like to discuss it directly.</p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <a href={getWhatsAppUrl(whatsappMessage)} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 rounded-lg bg-green-500 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-green-600">
                Continue on WhatsApp <ArrowRight className="h-4 w-4" />
              </a>
              <button type="button" onClick={onClose} className="rounded-lg border border-border px-6 py-3 text-sm font-semibold text-charcoal transition-colors hover:border-ocean hover:text-ocean">Close</button>
            </div>
          </div>
        ) : (
          <form onSubmit={submitInquiry} className="space-y-5 px-5 py-6 sm:px-8 sm:py-8">
            <div className="rounded-xl border border-ocean/15 bg-ocean/5 p-4">
              <p className="text-xs font-semibold uppercase tracking-wider text-ocean">Configuration summary</p>
              <pre className="mt-3 whitespace-pre-wrap font-body text-xs leading-relaxed text-charcoal">{summaryText}</pre>
            </div>

            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <label className="block text-sm font-medium text-charcoal">Full name *<input required value={fields.fullName} onChange={(event) => updateField('fullName', event.target.value)} className={`mt-1.5 ${inputClassName()}`} placeholder="Your full name" /></label>
              <label className="block text-sm font-medium text-charcoal">Phone number *<input required type="tel" value={fields.phone} onChange={(event) => updateField('phone', event.target.value)} className={`mt-1.5 ${inputClassName()}`} placeholder="Your phone number" /></label>
              <label className="block text-sm font-medium text-charcoal">WhatsApp number<input type="tel" value={fields.whatsapp} onChange={(event) => updateField('whatsapp', event.target.value)} className={`mt-1.5 ${inputClassName()}`} placeholder="Optional" /></label>
              <label className="block text-sm font-medium text-charcoal">Email address *<input required type="email" value={fields.email} onChange={(event) => updateField('email', event.target.value)} className={`mt-1.5 ${inputClassName()}`} placeholder="you@example.com" /></label>
              <label className="block text-sm font-medium text-charcoal">Country *<input required value={fields.country} onChange={(event) => updateField('country', event.target.value)} className={`mt-1.5 ${inputClassName()}`} placeholder="Country" /></label>
              <label className="block text-sm font-medium text-charcoal">Preferred contact method<select value={fields.preferredContactMethod} onChange={(event) => updateField('preferredContactMethod', event.target.value as InquiryFields['preferredContactMethod'])} className={`mt-1.5 ${inputClassName()}`}><option value="whatsapp">WhatsApp</option><option value="phone">Phone</option><option value="email">Email</option></select></label>
            </div>

            <label className="block text-sm font-medium text-charcoal">Additional requirements<textarea value={fields.additionalRequirements} onChange={(event) => updateField('additionalRequirements', event.target.value)} rows={4} className={`mt-1.5 resize-none ${inputClassName()}`} placeholder="Tell us about your vessel, preferred timing or any other requirements..." /></label>

            {error && <p className="rounded-lg bg-red-50 px-4 py-3 text-sm text-red-600" role="alert">{error}</p>}
            <button type="submit" disabled={submitting} className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-ocean px-6 py-3.5 text-sm font-semibold uppercase tracking-wide text-white shadow-lg shadow-ocean/20 transition-all hover:bg-ocean-light disabled:cursor-wait disabled:opacity-60">
              {submitting ? 'Sending inquiry...' : 'Send inquiry'}
              {!submitting && <ArrowRight className="h-4 w-4" />}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
