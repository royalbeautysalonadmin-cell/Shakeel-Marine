'use client';

import { getWhatsAppUrl, whatsappMessages } from '@/lib/site-config';
import { Button } from '@/components/ui/Button';
import { WhatsAppIcon } from '@/components/ui/WhatsAppIcon';
import { useLang } from '@/components/shared/LangProvider';

interface WhatsAppCTAProps {
  context?: keyof typeof whatsappMessages;
  variant?: 'primary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
}

export function WhatsAppCTA({
  context = 'general',
  variant = 'outline',
  size = 'lg',
  fullWidth = false,
}: WhatsAppCTAProps) {
  const { isArabic } = useLang();
  return (
    <a
      href={getWhatsAppUrl(whatsappMessages[context])}
      target="_blank"
      rel="noopener noreferrer"
      className={fullWidth ? 'w-full' : ''}
    >
      <Button variant={variant} size={size} className={fullWidth ? 'w-full' : ''}>
        <WhatsAppIcon className="w-4 h-4" />
        {isArabic ? 'تواصل واتساب' : 'WhatsApp Us'}
      </Button>
    </a>
  );
}
