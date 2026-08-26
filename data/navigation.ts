export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

export const mainNavigation: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  {
    label: 'Services',
    href: '/services',
    children: [
      { label: 'Case Studies', href: '/case-studies' },
      { label: 'FAQ', href: '/faq' },
      { label: 'Jet Ski Seat Covers', href: '/services/jet-ski-seat-covers' },
      { label: 'Canopy Covers', href: '/services/canopy-covers' },
    ],
  },
  {
    label: 'Products',
    href: '/products',
    children: [
      { label: 'Gallery', href: '/gallery' },
      { label: 'Before & After', href: '/before-after' },
      { label: 'Super Jet Floor Mat Kit', href: '/products/super-jet-floor-mat-kit' },
      { label: 'Jet Ski Custom Seats', href: '/products/jetski-custom-seats' },
      { label: 'Ship Covers', href: '/products/ship-covers' },
    ],
  },
  {
    label: 'Resources',
    href: '/resources',
    children: [
      { label: 'Blog', href: '/blog' },
      { label: 'Material Guide', href: '/resources/material-comparison-guide' },
      { label: 'Color Guide', href: '/resources/color-selection-guide' },
      { label: 'Glossary', href: '/resources/marine-upholstery-glossary' },
      { label: 'Maintenance', href: '/resources/care-maintenance-schedule' },
    ],
  },
  { label: 'Contact', href: '/contact' },
];

export const footerQuickLinks = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Products', href: '/products' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Blog', href: '/blog' },
  { label: 'Resources', href: '/resources' },
  { label: 'Case Studies', href: '/case-studies' },
  { label: 'FAQ', href: '/faq' },
  { label: 'Contact', href: '/contact' },
];

export const footerServiceLinks = [
  { label: 'Jet Ski Seat Covers', href: '/services/jet-ski-seat-covers' },
  { label: 'Canopy Covers', href: '/services/canopy-covers' },
];

export const footerAreaLinks = [
  { label: 'Kuwait City', href: '/areas/kuwait-city' },
  { label: 'Hawalli', href: '/areas/hawalli' },
  { label: 'Salmiya', href: '/areas/salmiya' },
  { label: 'Farwaniya', href: '/areas/farwaniya' },
  { label: 'Jahra', href: '/areas/jahra' },
  { label: 'Mangaf', href: '/areas/mangaf' },
];
