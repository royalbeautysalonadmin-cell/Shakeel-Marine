export const siteConfig = {
  name: 'Shakeel Marine',
  legalName: 'Shakeel Marine',
  tagline: 'Marine Upholstery & Custom Covers',
  description: 'Shakeel Marine provides custom jet ski seat covers, boat and ship seats, marine upholstery and canopy covers in Kuwait. Professional craftsmanship, custom design and installation.',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://shakeelmarine.com',

  phone: process.env.NEXT_PUBLIC_PHONE || '+965 9922 5170',
  phone2: process.env.NEXT_PUBLIC_PHONE2 || '+965 9401 5114',
  phone3: process.env.NEXT_PUBLIC_PHONE3 || '+965 5099 4715',
  whatsapp: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '96599225170',
  email: process.env.NEXT_PUBLIC_EMAIL || 'info@shakeelmarine.com',

  address: process.env.NEXT_PUBLIC_ADDRESS || 'Shop 3, Street 22, Shuwaikh Industrial 2, Capital Governorate, Kuwait',
  city: 'Kuwait',
  country: 'Kuwait',
  countryCode: 'KW',
  postalCode: process.env.NEXT_PUBLIC_POSTAL_CODE || '',
  latitude: process.env.NEXT_PUBLIC_LATITUDE || '29.3214496',
  longitude: process.env.NEXT_PUBLIC_LONGITUDE || '47.941014',

  mapUrl: process.env.NEXT_PUBLIC_MAP_URL || 'https://www.google.com/maps/place/ Shakeel Marine',
  mapEmbed: process.env.NEXT_PUBLIC_MAP_EMBED || 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3478.6667484395475!2d47.941013999999996!3d29.3214496!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3fcf9bac44785dd7%3A0xc2fda717dfcd9ac9!2z2LTZg9mK2YQg2YXZhtis2K8g2LfYsdin2K8!5e0!3m2!1sen!2s!4v1787435815131!5m2!1sen!2s',

  hours: process.env.NEXT_PUBLIC_HOURS || 'Saturday – Thursday: 8:00 AM – 6:00 PM',
  openingHours: ['Sat-Thu 08:00-18:00'],

  logo: '/favicon.svg',
  ogImage: '/images/sections/hero-ocean.jpg',

  social: {
    instagram: process.env.NEXT_PUBLIC_INSTAGRAM || '',
    facebook: process.env.NEXT_PUBLIC_FACEBOOK || '',
    tiktok: process.env.NEXT_PUBLIC_TIKTOK || '',
    youtube: process.env.NEXT_PUBLIC_YOUTUBE || '',
  },
} as const;

export function getWhatsAppUrl(message?: string): string {
  const base = `https://wa.me/${siteConfig.whatsapp}`;
  if (message) return `${base}?text=${encodeURIComponent(message)}`;
  return base;
}

export function getPhoneUrl(): string {
  return `tel:${siteConfig.phone.replace(/\s/g, '')}`;
}

export const phoneNumbers = [
  { label: 'Primary', value: siteConfig.phone, href: `tel:${siteConfig.phone.replace(/\s/g, '')}` },
  { label: 'Secondary', value: siteConfig.phone2, href: `tel:${siteConfig.phone2.replace(/\s/g, '')}` },
  { label: 'Tertiary', value: siteConfig.phone3, href: `tel:${siteConfig.phone3.replace(/\s/g, '')}` },
];

export const whatsappMessages = {
  general: 'Hello Shakeel Marine, I would like to inquire about your marine upholstery services in Kuwait.',
  jetSki: 'Hello Shakeel Marine, I am interested in a custom jet ski seat cover. I would like to request a quote.',
  boatShip: 'Hello Shakeel Marine, I am interested in custom boat/ship seating. I would like to request a quote.',
  upholstery: 'Hello Shakeel Marine, I am interested in custom marine upholstery. I would like to request a quote.',
  canopy: 'Hello Shakeel Marine, I am interested in a custom marine canopy/ship top cover. I would like to request a quote.',
  floorMat: 'Hello Shakeel Marine, I am interested in a Super Jet Floor Mat Kit for my jet ski. I would like to request a quote.',
  quote: 'Hello Shakeel Marine, I would like to request a quote for a custom marine project.',
  commercial: 'Hello Shakeel Marine, I am interested in commercial marine upholstery services for our fleet. I would like to discuss our requirements.',
} as const;
