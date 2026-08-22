'use client';

import { getWhatsAppUrl, whatsappMessages } from '@/lib/site-config';
import { WhatsAppIcon } from '@/components/ui/WhatsAppIcon';

interface WhatsAppButtonProps {
  context?: keyof typeof whatsappMessages;
  className?: string;
}

export function WhatsAppFloating({
  context = 'general',
}: WhatsAppButtonProps) {
  return (
    <a
      href={getWhatsAppUrl(whatsappMessages[context])}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 lg:bottom-6 right-4 lg:right-6 z-40 flex items-center justify-center w-14 h-14 rounded-full bg-green-500 text-white shadow-lg shadow-green-500/30 hover:bg-green-600 hover:scale-110 transition-all duration-300 group"
      aria-label="Contact us on WhatsApp"
    >
      <WhatsAppIcon className="w-6 h-6" />
      <span className="absolute right-full mr-3 px-3 py-1.5 bg-white text-charcoal text-xs font-medium rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
        Chat on WhatsApp
      </span>
    </a>
  );
}
