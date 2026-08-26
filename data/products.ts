export interface Product {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  features: { title: string; desc: string }[];
  images: { src: string; alt: string }[];
  whatsappMessage: string;
  seo: {
    title: string;
    description: string;
  };
}

export const products: Product[] = [
  {
    slug: 'super-jet-floor-mat-kit',
    name: 'Super Jet Floor Mat Kit',
    tagline: 'Precision-cut marine floor mats for your jet ski.',
    description:
      'The Super Jet Floor Mat Kit is designed to protect and enhance your jet ski floor. Each mat is precision-cut from marine-grade materials, offering superior grip, water resistance and UV protection. Custom fitted to your specific jet ski model for a flawless finish.',
    features: [
      { title: 'Custom Fit', desc: 'Precision-cut to match your specific jet ski model dimensions.' },
      { title: 'Marine-Grade Material', desc: 'Durable, water-resistant material built for marine environments.' },
      { title: 'Non-Slip Surface', desc: 'Textured surface provides secure footing even when wet.' },
      { title: 'UV Resistant', desc: 'Designed to withstand prolonged sun exposure without fading.' },
      { title: 'Easy Installation', desc: 'Simple peel-and-stick application with professional finish.' },
      { title: 'Clean Finish', desc: 'Professional edges and finishing for a factory-look result.' },
    ],
    images: [
      { src: '/images/super-jet-floor-mat/jetkeifloorcover1.jpg', alt: 'Super Jet Floor Mat Kit — full view' },
      { src: '/images/super-jet-floor-mat/jetkeifloorcover2.jpg', alt: 'Super Jet Floor Mat Kit — detail' },
      { src: '/images/super-jet-floor-mat/jetkeifloorcover3.jpg', alt: 'Super Jet Floor Mat Kit — installation' },
      { src: '/images/super-jet-floor-mat/jetkeifloorcover4.jpg', alt: 'Super Jet Floor Mat Kit — finish' },
      { src: '/images/super-jet-floor-mat/jetkeifloorcover5.jpg', alt: 'Super Jet Floor Mat Kit — grip surface' },
      { src: '/images/super-jet-floor-mat/jetkeifloorcover6.jpg', alt: 'Super Jet Floor Mat Kit — custom fit' },
    ],
    whatsappMessage: 'Hello Shakeel Marine, I am interested in the Super Jet Floor Mat Kit. I would like to request a quote.',
    seo: {
      title: 'Super Jet Floor Mat Kit in Kuwait | Shakeel Marine',
      description: 'Custom Super Jet Floor Mat Kit in Kuwait. Precision-cut, marine-grade, non-slip floor mats for jet skis. Professional installation by Shakeel Marine.',
    },
  },
  {
    slug: 'jetski-custom-seats',
    name: 'Jet Ski Custom Seats',
    tagline: 'Custom-designed seats crafted for your jet ski.',
    description:
      'Shakeel Marine crafts custom jet ski seats with precision fit and premium marine materials. Each seat is designed to match your style with professional stitching, color selection and flawless installation. Choose from a wide range of colors and finishes.',
    features: [
      { title: 'Custom Design', desc: 'Choose your colors, stitching patterns and finishing style.' },
      { title: 'Precise Fit', desc: 'Measured and cut to fit your specific jet ski model.' },
      { title: 'Premium Materials', desc: 'Marine-grade vinyl and fabrics for durability and comfort.' },
      { title: 'UV & Water Resistant', desc: 'Materials designed to withstand marine sun and water.' },
      { title: 'Professional Stitching', desc: 'Clean, consistent stitching with marine-suitable thread.' },
      { title: 'Expert Installation', desc: 'Professional fitting and finishing by our experienced team.' },
    ],
    images: [
      { src: '/images/jetski-custom-seat/jetski custom seat1.jpg', alt: 'Jet Ski Custom Seat — design' },
      { src: '/images/jetski-custom-seat/jetski custom seat2.jpg', alt: 'Jet Ski Custom Seat — stitching' },
      { src: '/images/jetski-custom-seat/jetski custom seat3.jpg', alt: 'Jet Ski Custom Seat — fitting' },
      { src: '/images/jetski-custom-seat/jetski custom seat4.jpg', alt: 'Jet Ski Custom Seat — colors' },
      { src: '/images/jetski-custom-seat/jetski custom seat5.jpg', alt: 'Jet Ski Custom Seat — detail' },
      { src: '/images/jetski-custom-seat/jetski custom seat6.jpg', alt: 'Jet Ski Custom Seat — finish' },
    ],
    whatsappMessage: 'Hello Shakeel Marine, I am interested in Jet Ski Custom Seats. I would like to request a quote.',
    seo: {
      title: 'Jet Ski Custom Seats in Kuwait | Shakeel Marine',
      description: 'Custom jet ski seats in Kuwait. Premium materials, custom colors and professional installation by Shakeel Marine.',
    },
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}
