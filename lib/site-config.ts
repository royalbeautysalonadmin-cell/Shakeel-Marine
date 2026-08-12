export const siteConfig = {
  name: 'Shakeel Marine',
  tagline: 'Marine Upholstery & Custom Covers',
  description:
    'Custom marine upholstery and covers for jet skis, boats and ships in Kuwait.',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://shakeelmarine.com',

  // Contact — replace with real values via environment variables
  phone: process.env.NEXT_PUBLIC_PHONE || '+965-XXXX-XXXX',
  whatsapp: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '965XXXXXXXX',
  email: process.env.NEXT_PUBLIC_EMAIL || 'info@shakeelmarine.com',

  // Location
  address: process.env.NEXT_PUBLIC_ADDRESS || 'Kuwait',
  city: 'Kuwait',
  country: 'Kuwait',
  mapUrl:
    process.env.NEXT_PUBLIC_MAP_URL ||
    'https://www.google.com/maps?q=Kuwait',
  mapEmbed:
    process.env.NEXT_PUBLIC_MAP_EMBED ||
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d222867.2!2d47.9!3d29.3!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3fcf9c0e!2sKuwait!5e0!3m2!1sen!2s!4v1',

  // Business hours — placeholder
  hours: process.env.NEXT_PUBLIC_HOURS || 'Saturday – Thursday: 8:00 AM – 6:00 PM',

  // Social links — only include real accounts
  social: {
    instagram: process.env.NEXT_PUBLIC_INSTAGRAM || '',
    facebook: process.env.NEXT_PUBLIC_FACEBOOK || '',
    tiktok: process.env.NEXT_PUBLIC_TIKTOK || '',
    youtube: process.env.NEXT_PUBLIC_YOUTUBE || '',
  },
} as const;

/**
 * Generate a WhatsApp URL with a pre-filled message.
 */
export function getWhatsAppUrl(message?: string): string {
  const base = `https://wa.me/${siteConfig.whatsapp}`;
  if (message) {
    return `${base}?text=${encodeURIComponent(message)}`;
  }
  return base;
}

/**
 * Generate a tel: URL for the phone number.
 */
export function getPhoneUrl(): string {
  return `tel:${siteConfig.phone.replace(/\s/g, '')}`;
}

/**
 * WhatsApp messages per service context.
 */
export const whatsappMessages = {
  general:
    'Hello Shakeel Marine, I would like to inquire about your marine upholstery services.',
  jetSki:
    'Hello Shakeel Marine, I am interested in a custom jet ski seat cover. I would like to request a quote.',
  boatShip:
    'Hello Shakeel Marine, I am interested in custom boat/ship seating. I would like to request a quote.',
  upholstery:
    'Hello Shakeel Marine, I am interested in custom marine upholstery. I would like to request a quote.',
  canopy:
    'Hello Shakeel Marine, I am interested in a custom marine canopy/ship top cover. I would like to request a quote.',
  quote:
    'Hello Shakeel Marine, I would like to request a quote for a custom marine project.',
} as const;
