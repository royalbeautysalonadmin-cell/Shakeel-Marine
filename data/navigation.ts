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
      { label: 'Jet Ski Seat Covers', href: '/services/jet-ski-seat-covers' },
      { label: 'Boat & Ship Seats', href: '/services/boat-ship-seats' },
      { label: 'Marine Upholstery', href: '/services/marine-upholstery' },
      { label: 'Canopy Covers', href: '/services/canopy-covers' },
    ],
  },
  { label: 'Gallery', href: '/gallery' },
  { label: 'FAQ', href: '/faq' },
  { label: 'Contact', href: '/contact' },
];

export const footerQuickLinks = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'FAQ', href: '/faq' },
  { label: 'Contact', href: '/contact' },
];

export const footerServiceLinks = [
  { label: 'Jet Ski Seat Covers', href: '/services/jet-ski-seat-covers' },
  { label: 'Boat & Ship Seats', href: '/services/boat-ship-seats' },
  { label: 'Marine Upholstery', href: '/services/marine-upholstery' },
  { label: 'Canopy Covers', href: '/services/canopy-covers' },
];
