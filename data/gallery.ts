import { customSeatProjectImages, floorMatProjectImages } from '@/data/project-images';

export type GalleryCategory =
  | 'all'
  | 'boat-ship'
  | 'upholstery'
  | 'canopy'
  | 'floor-mat'
  | 'custom-seat';

export interface GalleryImage {
  src: string;
  alt: string;
  category: Exclude<GalleryCategory, 'all'>;
  width?: number;
  height?: number;
}

export const galleryCategories: { value: GalleryCategory; label: string }[] = [
  { value: 'all', label: 'All' },
  { value: 'boat-ship', label: 'Boat & Ship' },
  { value: 'upholstery', label: 'Upholstery' },
  { value: 'canopy', label: 'Canopy' },
  { value: 'floor-mat', label: 'Super Jet Floor Mat Kit' },
  { value: 'custom-seat', label: 'Jet Ski Custom Seats' },
];

export const galleryImages: GalleryImage[] = [
  { src: '/images/gallery/cover-01.jpg', alt: 'Custom marine ship cover — Shakeel Marine Kuwait', category: 'canopy', width: 800, height: 600 },
  { src: '/images/gallery/cover-02.jpg', alt: 'Custom boat cover — professional marine upholstery', category: 'boat-ship', width: 800, height: 600 },
  { src: '/images/gallery/cover-03.jpg', alt: 'Marine canopy cover installation', category: 'canopy', width: 800, height: 600 },
  { src: '/images/gallery/cover-04.jpg', alt: 'Ship top cover — custom fitted', category: 'canopy', width: 800, height: 600 },
  { src: '/images/gallery/cover-05.jpg', alt: 'Boat seat cover — marine grade materials', category: 'boat-ship', width: 800, height: 600 },
  { src: '/images/gallery/cover-06.jpg', alt: 'Custom marine upholstery detail on a personal watercraft', category: 'upholstery', width: 800, height: 600 },
  { src: '/images/gallery/cover-07.jpg', alt: 'Marine upholstery — detail stitching', category: 'upholstery', width: 800, height: 600 },
  { src: '/images/gallery/cover-08.jpg', alt: 'Canopy cover — weather protection', category: 'canopy', width: 800, height: 600 },
  { src: '/images/gallery/cover-09.jpg', alt: 'Ship seating — custom marine covers', category: 'boat-ship', width: 800, height: 600 },
  { src: '/images/gallery/cover-10.jpg', alt: 'Professional boat and marine cover fitting', category: 'boat-ship', width: 800, height: 600 },
  { src: '/images/gallery/cover-11.jpg', alt: 'Marine cover — premium finish', category: 'canopy', width: 800, height: 600 },
  { src: '/images/gallery/cover-12.jpg', alt: 'Boat canopy cover — custom design', category: 'canopy', width: 800, height: 600 },
  { src: '/images/gallery/cover-13.jpg', alt: 'Custom marine upholstery with color detail', category: 'upholstery', width: 800, height: 600 },
  { src: '/images/gallery/cover-14.jpg', alt: 'Ship cover — marine grade vinyl', category: 'boat-ship', width: 800, height: 600 },
  { src: '/images/gallery/cover-15.jpg', alt: 'Custom upholstery — premium stitching', category: 'upholstery', width: 800, height: 600 },
  { src: '/images/gallery/cover-16.jpg', alt: 'Marine canopy — UV resistant', category: 'canopy', width: 800, height: 600 },
  { src: '/images/gallery/cover-17.jpg', alt: 'Boat seating cover fitted by Shakeel Marine', category: 'boat-ship', width: 800, height: 600 },
  { src: '/images/gallery/cover-18.jpg', alt: 'Custom ship cover — tailored fit', category: 'boat-ship', width: 800, height: 600 },
  { src: '/images/gallery/cover-19.jpg', alt: 'Marine upholstery — color selection', category: 'upholstery', width: 800, height: 600 },
  { src: '/images/gallery/cover-20.jpg', alt: 'Canopy cover — professional finishing', category: 'canopy', width: 800, height: 600 },
  { src: '/images/gallery/cover-21.jpg', alt: 'Custom marine upholstery with a tailored fit', category: 'upholstery', width: 800, height: 600 },
  { src: '/images/gallery/cover-22.jpg', alt: 'Ship top canopy — weatherproof', category: 'canopy', width: 800, height: 600 },
  { src: '/images/gallery/cover-23.jpg', alt: 'Boat upholstery — marine quality', category: 'boat-ship', width: 800, height: 600 },
  { src: '/images/gallery/cover-24.jpg', alt: 'Boat cover fitted on a marine vessel', category: 'boat-ship', width: 800, height: 600 },
  { src: '/images/gallery/cover-25.jpg', alt: 'Custom marine cover — Shakeel Marine', category: 'canopy', width: 800, height: 600 },
  { src: '/images/gallery/cover-26.jpg', alt: 'Ship seating cover — premium', category: 'boat-ship', width: 800, height: 600 },
  { src: '/images/gallery/cover-27.jpg', alt: 'Marine canopy — professional install', category: 'canopy', width: 800, height: 600 },
  { src: '/images/gallery/cover-28.jpg', alt: 'Boat cover — custom colors', category: 'boat-ship', width: 800, height: 600 },
  { src: '/images/gallery/cover-29.jpg', alt: 'Marine upholstery detail with custom finishing', category: 'upholstery', width: 800, height: 600 },
  { src: '/images/gallery/cover-30.jpg', alt: 'Marine cover fitted on a boat or ship', category: 'boat-ship', width: 800, height: 600 },
  { src: '/images/super-jet-floor-mat/jetkeifloorcover1.jpg', alt: 'Super Jet Floor Mat Kit — Shakeel Marine Kuwait', category: 'floor-mat', width: 800, height: 600 },
  { src: '/images/super-jet-floor-mat/jetkeifloorcover2.jpg', alt: 'Super Jet Floor Mat Kit — detail view', category: 'floor-mat', width: 800, height: 600 },
  { src: '/images/super-jet-floor-mat/jetkeifloorcover3.jpg', alt: 'Super Jet Floor Mat Kit — custom fit', category: 'floor-mat', width: 800, height: 600 },
  { src: '/images/super-jet-floor-mat/jetkeifloorcover4.jpg', alt: 'Super Jet Floor Mat Kit — marine grade', category: 'floor-mat', width: 800, height: 600 },
  { src: '/images/super-jet-floor-mat/jetkeifloorcover5.jpg', alt: 'Super Jet Floor Mat Kit — precision cut', category: 'floor-mat', width: 800, height: 600 },
  { src: '/images/super-jet-floor-mat/jetkeifloorcover6.jpg', alt: 'Super Jet Floor Mat Kit — installation', category: 'floor-mat', width: 800, height: 600 },
  { src: '/images/super-jet-floor-mat/jetkeifloorcover7.jpg', alt: 'Super Jet Floor Mat Kit — premium finish', category: 'floor-mat', width: 800, height: 600 },
  { src: '/images/super-jet-floor-mat/jetkeifloorcover8.jpg', alt: 'Super Jet Floor Mat Kit — custom colors', category: 'floor-mat', width: 800, height: 600 },
  { src: '/images/super-jet-floor-mat/jetkeifloorcover9.jpg', alt: 'Super Jet Floor Mat Kit — detail stitching', category: 'floor-mat', width: 800, height: 600 },
  { src: '/images/super-jet-floor-mat/jetkeifloorcover10.jpg', alt: 'Super Jet Floor Mat Kit — professional fitting', category: 'floor-mat', width: 800, height: 600 },
  { src: '/images/super-jet-floor-mat/jetkeifloorcover11.jpg', alt: 'Super Jet Floor Mat Kit — quality materials', category: 'floor-mat', width: 800, height: 600 },
  { src: '/images/super-jet-floor-mat/jetkeifloorcover12.jpg', alt: 'Super Jet Floor Mat Kit — marine durability', category: 'floor-mat', width: 800, height: 600 },
  { src: '/images/super-jet-floor-mat/jetkeifloorcover13.jpg', alt: 'Super Jet Floor Mat Kit — custom design', category: 'floor-mat', width: 800, height: 600 },
  { src: '/images/super-jet-floor-mat/jetkeifloorcover14.jpg', alt: 'Super Jet Floor Mat Kit — precision fit', category: 'floor-mat', width: 800, height: 600 },
  { src: '/images/super-jet-floor-mat/jetkeifloorcover15.jpg', alt: 'Super Jet Floor Mat Kit — waterproof', category: 'floor-mat', width: 800, height: 600 },
  { src: '/images/super-jet-floor-mat/jetkeifloorcover16.jpg', alt: 'Super Jet Floor Mat Kit — UV resistant', category: 'floor-mat', width: 800, height: 600 },
  { src: '/images/super-jet-floor-mat/jetkeifloorcover17.jpg', alt: 'Super Jet Floor Mat Kit — non-slip surface', category: 'floor-mat', width: 800, height: 600 },
  { src: '/images/super-jet-floor-mat/jetkeifloorcover18.jpg', alt: 'Super Jet Floor Mat Kit — clean finish', category: 'floor-mat', width: 800, height: 600 },
  { src: '/images/super-jet-floor-mat/jetkeifloorcover19.jpg', alt: 'Super Jet Floor Mat Kit — jet ski application', category: 'floor-mat', width: 800, height: 600 },
  { src: '/images/super-jet-floor-mat/jetkeifloorcover20.jpg', alt: 'Super Jet Floor Mat Kit — marine environment', category: 'floor-mat', width: 800, height: 600 },
  { src: '/images/super-jet-floor-mat/jetkeifloorcover21.jpg', alt: 'Super Jet Floor Mat Kit — full coverage', category: 'floor-mat', width: 800, height: 600 },
  { src: '/images/super-jet-floor-mat/jetkeifloorcover22.jpg', alt: 'Super Jet Floor Mat Kit — custom pattern', category: 'floor-mat', width: 800, height: 600 },
  { src: '/images/super-jet-floor-mat/jetkeifloorcover23.jpg', alt: 'Super Jet Floor Mat Kit — Shakeel Marine quality', category: 'floor-mat', width: 800, height: 600 },
  { src: '/images/jetski-custom-seat/jetski custom seat1.jpg', alt: 'Jet Ski Custom Seat — Shakeel Marine Kuwait', category: 'custom-seat', width: 800, height: 600 },
  { src: '/images/jetski-custom-seat/jetski custom seat2.jpg', alt: 'Jet Ski Custom Seat — marine upholstery', category: 'custom-seat', width: 800, height: 600 },
  { src: '/images/jetski-custom-seat/jetski custom seat3.jpg', alt: 'Jet Ski Custom Seat — professional fitting', category: 'custom-seat', width: 800, height: 600 },
  { src: '/images/jetski-custom-seat/jetski custom seat4.jpg', alt: 'Jet Ski Custom Seat — color selection', category: 'custom-seat', width: 800, height: 600 },
  { src: '/images/jetski-custom-seat/jetski custom seat5.jpg', alt: 'Jet Ski Custom Seat — premium stitching', category: 'custom-seat', width: 800, height: 600 },
  { src: '/images/jetski-custom-seat/jetski custom seat6.jpg', alt: 'Jet Ski Custom Seat — marine grade materials', category: 'custom-seat', width: 800, height: 600 },
  { src: '/images/jetski-custom-seat/jetski custom seat7.jpg', alt: 'Jet Ski Custom Seat — custom design', category: 'custom-seat', width: 800, height: 600 },
  { src: '/images/jetski-custom-seat/jetski custom seat8.jpg', alt: 'Jet Ski Custom Seat — detail view', category: 'custom-seat', width: 800, height: 600 },
  { src: '/images/jetski-custom-seat/jetski custom seat9.jpg', alt: 'Jet Ski Custom Seat — Shakeel Marine quality', category: 'custom-seat', width: 800, height: 600 },
  ...floorMatProjectImages.map((image) => ({ ...image, category: 'floor-mat' as const })),
  ...customSeatProjectImages.map((image) => ({ ...image, category: 'custom-seat' as const })),
];
