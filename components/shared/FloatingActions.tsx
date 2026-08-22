'use client';

import { getWhatsAppUrl, getPhoneUrl, whatsappMessages } from '@/lib/site-config';
import { WhatsAppIcon } from '@/components/ui/WhatsAppIcon';
import { Phone, MessageSquare } from 'lucide-react';
import { useLang } from '@/components/shared/LangProvider';

export function FloatingActions() {
  const { isArabic } = useLang();
  return (
    <div className="fixed bottom-20 lg:bottom-6 right-4 lg:right-6 z-40 flex flex-col items-end gap-3">
      {/* WhatsApp */}
      <a
        href={getWhatsAppUrl(whatsappMessages.general)}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 px-4 py-3 rounded-full bg-green-500 text-white shadow-lg shadow-green-500/30 hover:bg-green-600 hover:scale-105 transition-all duration-300 group"
        aria-label="Contact us on WhatsApp"
      >
        <WhatsAppIcon className="w-5 h-5" />
        <span className="text-sm font-semibold hidden sm:inline">
          {isArabic ? 'تواصل واتساب' : 'WhatsApp'}
        </span>
        <span className="absolute right-full mr-3 px-3 py-1.5 bg-white text-charcoal text-xs font-medium rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
          {isArabic ? 'تحدث معنا' : 'Chat with us'}
        </span>
      </a>

      {/* Call */}
      <a
        href={getPhoneUrl()}
        className="flex items-center gap-2 px-4 py-3 rounded-full bg-ocean text-white shadow-lg shadow-ocean/30 hover:bg-ocean-light hover:scale-105 transition-all duration-300 group"
        aria-label="Call us now"
      >
        <Phone className="w-5 h-5" />
        <span className="text-sm font-semibold hidden sm:inline">
          {isArabic ? 'اتصل الآن' : 'Call Now'}
        </span>
      </a>
    </div>
  );
}
