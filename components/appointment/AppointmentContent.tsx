'use client';

import { useState } from 'react';
import { ScrollReveal } from '@/components/shared/ScrollReveal';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Button } from '@/components/ui/Button';
import { WhatsAppCTA } from '@/components/ui/WhatsAppCTA';
import { useLang } from '@/components/shared/LangProvider';
import { Calendar, Clock, User, Phone, MessageSquare, CheckCircle } from 'lucide-react';

const timeSlots = [
  '09:00', '09:30', '10:00', '10:30', '11:00', '11:30',
  '12:00', '12:30', '14:00', '14:30', '15:00', '15:30',
  '16:00', '16:30', '17:00', '17:30',
];

const serviceOptions = [
  'Jet Ski Seat Covers',
  'Boat & Ship Seats',
  'Marine Upholstery',
  'Canopy Covers',
  'Ship Covers',
  'Floor Mat Kit',
  'Custom Seats',
  'Other',
];

export function AppointmentContent() {
  const { isArabic } = useLang();
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: '', phone: '', email: '', service: '', date: '', time: '', notes: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <>
        <section className="relative py-32 lg:py-40 bg-navy-deep overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_20%,rgba(14,116,144,0.15),transparent_60%)]" />
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <ScrollReveal>
              <h1 className="text-white font-heading font-bold" style={{ fontSize: 'clamp(2.25rem, 5vw, 4.5rem)' }}>
                {isArabic ? 'تم حجز موعدك' : 'Appointment Booked'}
              </h1>
            </ScrollReveal>
          </div>
        </section>
        <section className="section-padding bg-off-white">
          <div className="max-w-2xl mx-auto container-padding text-center">
            <ScrollReveal>
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-green-100 flex items-center justify-center">
                <CheckCircle className="w-8 h-8 text-green-600" />
              </div>
              <h2 className="font-heading font-bold text-charcoal text-2xl mb-4">
                {isArabic ? 'شكراً لك!' : 'Thank You!'}
              </h2>
              <p className="text-muted text-lg mb-8">
                {isArabic ? 'تم استلام موعدك. سنتواصل معك قريباً لتأكيد التفاصيل.' : 'Your appointment has been received. We will contact you shortly to confirm the details.'}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button href="/" variant="primary" size="lg">
                  {isArabic ? 'الرئيسية' : 'Back to Home'}
                </Button>
                <WhatsAppCTA context="general" />
              </div>
            </ScrollReveal>
          </div>
        </section>
      </>
    );
  }

  return (
    <>
      <section className="relative py-32 lg:py-40 bg-navy-deep overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_20%,rgba(14,116,144,0.15),transparent_60%)]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <ScrollReveal>
            <span className="text-ocean text-xs font-semibold uppercase tracking-[0.2em]">
              {isArabic ? 'حجز موعد' : 'Book Appointment'}
            </span>
            <h1 className="mt-4 text-white font-heading font-bold" style={{ fontSize: 'clamp(2.25rem, 5vw, 4.5rem)' }}>
              {isArabic ? 'احجز موعد قياس' : 'Book a Measurement Appointment'}
            </h1>
            <p className="mt-6 text-white/60 text-lg md:text-xl max-w-xl leading-relaxed">
              {isArabic ? 'احجز موعداً لقياس سفينتك أو جيت سكيك في موقعك.' : 'Schedule a measurement visit at your location for your vessel or jet ski.'}
            </p>
          </ScrollReveal>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-10 bg-gradient-to-t from-off-white/30 to-transparent" />
      </section>

      <section className="section-padding bg-off-white">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Form */}
            <ScrollReveal className="lg:col-span-2">
              <form onSubmit={handleSubmit} className="bg-white rounded-xl p-8 border border-border">
                <h2 className="font-heading font-bold text-charcoal text-xl mb-6">
                  {isArabic ? 'تفاصيل الموعد' : 'Appointment Details'}
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-charcoal mb-2">{isArabic ? 'الاسم' : 'Name'} *</label>
                    <input type="text" required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="w-full px-4 py-3 rounded-lg border border-border bg-white text-charcoal focus:outline-none focus:border-ocean focus:ring-2 focus:ring-ocean/20" placeholder={isArabic ? 'اسمك الكامل' : 'Your full name'} />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-charcoal mb-2">{isArabic ? 'الهاتف' : 'Phone'} *</label>
                    <input type="tel" required value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} className="w-full px-4 py-3 rounded-lg border border-border bg-white text-charcoal focus:outline-none focus:border-ocean focus:ring-2 focus:ring-ocean/20" placeholder={isArabic ? 'رقم هاتفك' : 'Your phone number'} />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-charcoal mb-2">{isArabic ? 'البريد الإلكتروني' : 'Email'}</label>
                    <input type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className="w-full px-4 py-3 rounded-lg border border-border bg-white text-charcoal focus:outline-none focus:border-ocean focus:ring-2 focus:ring-ocean/20" placeholder={isArabic ? 'بريدك الإلكتروني' : 'Your email'} />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-charcoal mb-2">{isArabic ? 'الخدمة' : 'Service'} *</label>
                    <select required value={form.service} onChange={(e) => setForm({ ...form, service: e.target.value })} className="w-full px-4 py-3 rounded-lg border border-border bg-white text-charcoal focus:outline-none focus:border-ocean focus:ring-2 focus:ring-ocean/20">
                      <option value="">{isArabic ? 'اختر خدمة' : 'Select a service'}</option>
                      {serviceOptions.map((s) => <option key={s} value={s}>{s}</option>)}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-charcoal mb-2">{isArabic ? 'التاريخ' : 'Date'} *</label>
                    <input type="date" required value={form.date} onChange={(e) => setForm({ ...form, date: e.target.value })} className="w-full px-4 py-3 rounded-lg border border-border bg-white text-charcoal focus:outline-none focus:border-ocean focus:ring-2 focus:ring-ocean/20" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-charcoal mb-2">{isArabic ? 'الوقت' : 'Time'} *</label>
                    <select required value={form.time} onChange={(e) => setForm({ ...form, time: e.target.value })} className="w-full px-4 py-3 rounded-lg border border-border bg-white text-charcoal focus:outline-none focus:border-ocean focus:ring-2 focus:ring-ocean/20">
                      <option value="">{isArabic ? 'اختر وقت' : 'Select time'}</option>
                      {timeSlots.map((t) => <option key={t} value={t}>{t}</option>)}
                    </select>
                  </div>
                  <div className="sm:col-span-2">
                    <label className="block text-sm font-medium text-charcoal mb-2">{isArabic ? 'ملاحظات' : 'Notes'}</label>
                    <textarea rows={3} value={form.notes} onChange={(e) => setForm({ ...form, notes: e.target.value })} className="w-full px-4 py-3 rounded-lg border border-border bg-white text-charcoal focus:outline-none focus:border-ocean focus:ring-2 focus:ring-ocean/20 resize-none" placeholder={isArabic ? 'أي تفاصيل إضافية...' : 'Any additional details...'} />
                  </div>
                </div>
                <div className="mt-8 flex flex-col sm:flex-row gap-4">
                  <Button type="submit" variant="primary" size="lg">
                    {isArabic ? 'حجز الموعد' : 'Book Appointment'}
                  </Button>
                  <WhatsAppCTA context="general" />
                </div>
              </form>
            </ScrollReveal>

            {/* Info */}
            <ScrollReveal>
              <div className="space-y-6">
                <div className="bg-white rounded-xl p-6 border border-border">
                  <h3 className="font-heading font-bold text-charcoal mb-4">{isArabic ? 'كيف يعمل' : 'How It Works'}</h3>
                  <div className="space-y-4">
                    {[
                      { icon: Calendar, text: isArabic ? 'اختر التاريخ والوقت المناسب' : 'Choose your preferred date and time' },
                      { icon: User, text: isArabic ? 'يأتي فريقنا إلى موقعك' : 'Our team comes to your location' },
                      { icon: Clock, text: isArabic ? 'قياس دقيق للسفينة أو الجيت سكي' : 'Precise measurement of your vessel or jet ski' },
                      { icon: MessageSquare, text: isArabic ? 'نناقش التصميم والألوان والمواد' : 'We discuss design, colors and materials' },
                    ].map((step, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <div className="w-8 h-8 rounded-full bg-ocean/10 flex items-center justify-center shrink-0">
                          <step.icon className="w-4 h-4 text-ocean" />
                        </div>
                        <span className="text-charcoal text-sm">{step.text}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-white rounded-xl p-6 border border-border">
                  <h3 className="font-heading font-bold text-charcoal mb-4">{isArabic ? 'ساعات العمل' : 'Working Hours'}</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between"><span className="text-muted">{isArabic ? 'السبت - الخميس' : 'Saturday - Thursday'}</span><span className="text-charcoal font-medium">8:00 AM - 6:00 PM</span></div>
                    <div className="flex justify-between"><span className="text-muted">{isArabic ? 'الجمعة' : 'Friday'}</span><span className="text-charcoal font-medium">{isArabic ? 'مغلق' : 'Closed'}</span></div>
                  </div>
                </div>

                <div className="bg-ocean/5 rounded-xl p-6 border border-ocean/20">
                  <h3 className="font-heading font-bold text-charcoal mb-2">{isArabic ? 'هل تحتاج مساعدة؟' : 'Need Help?'}</h3>
                  <p className="text-muted text-sm mb-4">{isArabic ? 'اتصل بنا مباشرة أو راسلنا واتساب.' : 'Call us directly or message on WhatsApp.'}</p>
                  <a href="tel:+96599225170" className="flex items-center gap-2 text-ocean font-semibold text-sm hover:underline">
                    <Phone className="w-4 h-4" /> +965 9922 5170
                  </a>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </>
  );
}
