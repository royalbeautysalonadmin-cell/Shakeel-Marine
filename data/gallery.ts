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
    src: '/images/gallery/jet-ski-01.jpg',
    alt: 'Custom jet ski seat cover — front view',
    category: 'jet-ski',
    width: 800,
    height: 600,
  },
  {
    src: '/images/gallery/jet-ski-02.jpg',
    alt: 'Custom jet ski seat cover — detail stitching',
    category: 'jet-ski',
    width: 800,
    height: 600,
  },
  {
    src: '/images/gallery/jet-ski-03.jpg',
    alt: 'Jet ski seat cover installation complete',
    category: 'jet-ski',
    width: 800,
    height: 600,
  },
  // -- Boat & Ship --
  {
    src: '/images/gallery/boat-01.jpg',
    alt: 'Custom boat seat upholstery',
    category: 'boat-ship',
    width: 800,
    height: 600,
  },
  {
    src: '/images/gallery/boat-02.jpg',
    alt: 'Ship seating — custom marine seats',
    category: 'boat-ship',
    width: 800,
    height: 600,
  },
  {
    src: '/images/gallery/boat-03.jpg',
    alt: 'Boat bench seating — custom design',
    category: 'boat-ship',
    width: 800,
    height: 600,
  },
  // -- Upholstery --
  {
    src: '/images/gallery/upholstery-01.jpg',
    alt: 'Marine upholstery — custom stitching detail',
    category: 'upholstery',
    width: 800,
    height: 600,
  },
  {
    src: '/images/gallery/upholstery-02.jpg',
    alt: 'Custom marine upholstery — color selection',
    category: 'upholstery',
    width: 800,
    height: 600,
  },
  // -- Canopy --
  {
    src: '/images/gallery/canopy-01.jpg',
    alt: 'Custom ship top canopy cover',
    category: 'canopy',
    width: 800,
    height: 600,
  },
  {
    src: '/images/gallery/canopy-02.jpg',
    alt: 'Marine canopy cover — installed on vessel',
    category: 'canopy',
    width: 800,
    height: 600,
  },
  // -- Installation --
  {
    src: '/images/gallery/install-01.jpg',
    alt: 'Professional seat cover installation',
    category: 'installation',
    width: 800,
    height: 600,
  },
  {
    src: '/images/gallery/install-02.jpg',
    alt: 'Canopy cover installation on boat',
    category: 'installation',
    width: 800,
    height: 600,
  },
];
