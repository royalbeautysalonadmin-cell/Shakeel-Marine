export type GalleryCategory =
  | 'all'
  | 'jet-ski'
  | 'boat-ship'
  | 'upholstery'
  | 'canopy'
  | 'installation';

export interface GalleryImage {
  src: string;
  alt: string;
  category: Exclude<GalleryCategory, 'all'>;
  width: number;
  height: number;
}

export const galleryCategories: { value: GalleryCategory; label: string }[] = [
  { value: 'all', label: 'All' },
  { value: 'jet-ski', label: 'Jet Ski' },
  { value: 'boat-ship', label: 'Boat & Ship' },
  { value: 'upholstery', label: 'Upholstery' },
  { value: 'canopy', label: 'Canopy' },
  { value: 'installation', label: 'Installation' },
];

/**
 * Gallery images configuration.
 *
 * INSTRUCTIONS FOR ADDING REAL IMAGES:
 * 1. Place images in /public/images/gallery/
 * 2. Use descriptive filenames: jet-ski-seat-cover-red-01.webp
 * 3. Update the src path, alt text, category and dimensions below
 * 4. Recommended image size: 800–1200px wide, optimized WebP format
 */
export const galleryImages: GalleryImage[] = [
  // -- Jet Ski --
  {
    src: 'https://res.cloudinary.com/your-cloud-name/image/upload/shakeelmarine/gallery/jet-ski-01.webp',
    alt: 'Custom jet ski seat cover — front view',
    category: 'jet-ski',
    width: 800,
    height: 600,
  },
  {
    src: 'https://res.cloudinary.com/your-cloud-name/image/upload/shakeelmarine/gallery/jet-ski-02.webp',
    alt: 'Custom jet ski seat cover — detail stitching',
    category: 'jet-ski',
    width: 800,
    height: 600,
  },
  {
    src: 'https://res.cloudinary.com/your-cloud-name/image/upload/shakeelmarine/gallery/jet-ski-03.webp',
    alt: 'Jet ski seat cover installation complete',
    category: 'jet-ski',
    width: 800,
    height: 600,
  },
  // -- Boat & Ship --
  {
    src: 'https://res.cloudinary.com/your-cloud-name/image/upload/shakeelmarine/gallery/boat-01.webp',
    alt: 'Custom boat seat upholstery',
    category: 'boat-ship',
    width: 800,
    height: 600,
  },
  {
    src: 'https://res.cloudinary.com/your-cloud-name/image/upload/shakeelmarine/gallery/boat-02.webp',
    alt: 'Ship seating — custom marine seats',
    category: 'boat-ship',
    width: 800,
    height: 600,
  },
  {
    src: 'https://res.cloudinary.com/your-cloud-name/image/upload/shakeelmarine/gallery/boat-03.webp',
    alt: 'Boat bench seating — custom design',
    category: 'boat-ship',
    width: 800,
    height: 600,
  },
  // -- Upholstery --
  {
    src: 'https://res.cloudinary.com/your-cloud-name/image/upload/shakeelmarine/gallery/upholstery-01.webp',
    alt: 'Marine upholstery — custom stitching detail',
    category: 'upholstery',
    width: 800,
    height: 600,
  },
  {
    src: 'https://res.cloudinary.com/your-cloud-name/image/upload/shakeelmarine/gallery/upholstery-02.webp',
    alt: 'Custom marine upholstery — color selection',
    category: 'upholstery',
    width: 800,
    height: 600,
  },
  // -- Canopy --
  {
    src: 'https://res.cloudinary.com/your-cloud-name/image/upload/shakeelmarine/gallery/canopy-01.webp',
    alt: 'Custom ship top canopy cover',
    category: 'canopy',
    width: 800,
    height: 600,
  },
  {
    src: 'https://res.cloudinary.com/your-cloud-name/image/upload/shakeelmarine/gallery/canopy-02.webp',
    alt: 'Marine canopy cover — installed on vessel',
    category: 'canopy',
    width: 800,
    height: 600,
  },
  // -- Installation --
  {
    src: 'https://res.cloudinary.com/your-cloud-name/image/upload/shakeelmarine/gallery/install-01.webp',
    alt: 'Professional seat cover installation',
    category: 'installation',
    width: 800,
    height: 600,
  },
  {
    src: 'https://res.cloudinary.com/your-cloud-name/image/upload/shakeelmarine/gallery/install-02.webp',
    alt: 'Canopy cover installation on boat',
    category: 'installation',
    width: 800,
    height: 600,
  },
];
