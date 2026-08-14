'use client';

import { Phone, FileText } from 'lucide-react';
import { siteConfig, getWhatsAppUrl, getPhoneUrl, whatsappMessages } from '@/lib/site-config';
import { WhatsAppIcon } from '@/components/ui/WhatsAppIcon';

export function MobileActionBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 lg:hidden bg-navy-deep/95 backdrop-blur-lg border-t border-white/10 safe-bottom">
      <div className="grid grid-cols-3 divide-x divide-white/10">
        <a
          href={getWhatsAppUrl(whatsappMessages.general)}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center gap-1 py-3 text-white/80 hover:text-white active:bg-white/5 transition-colors"
          aria-label="Contact via WhatsApp"
        >
          <WhatsAppIcon className="w-5 h-5 text-green-400" />
          <span className="text-[10px] font-medium uppercase tracking-wider">
            WhatsApp
          </span>
        </a>
        <a
          href={getPhoneUrl()}
          className="flex flex-col items-center justify-center gap-1 py-3 text-white/80 hover:text-white active:bg-white/5 transition-colors"
          aria-label="Call us"
        >
          <Phone className="w-5 h-5 text-ocean" />
          <span className="text-[10px] font-medium uppercase tracking-wider">
            Call
          </span>
        </a>
        <a
          href="/request-a-quote"
          className="flex flex-col items-center justify-center gap-1 py-3 text-white/80 hover:text-white active:bg-white/5 transition-colors"
          aria-label="Request a quote"
        >
          <FileText className="w-5 h-5 text-sand" />
          <span className="text-[10px] font-medium uppercase tracking-wider">
            Quote
          </span>
        </a>
      </div>
    </div>
  );
}
