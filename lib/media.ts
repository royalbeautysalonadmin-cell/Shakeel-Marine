/**
 * Cloudinary media URLs.
 *
 * After running `node scripts/upload-cloudinary.js`, paste the URLs here.
 * All components reference this file — update once, propagates everywhere.
 */

const CLOUDINARY_BASE = 'https://res.cloudinary.com/your-cloud-name/image/upload';

export const media = {
  images: {
    sections: {
      heroOcean: `${CLOUDINARY_BASE}/shakeelmarine/sections/hero-ocean.webp`,
      boatShip: `${CLOUDINARY_BASE}/shakeelmarine/sections/boat-ship.webp`,
      canopy: `${CLOUDINARY_BASE}/shakeelmarine/sections/canopy.webp`,
      jetskiShowcase: `${CLOUDINARY_BASE}/shakeelmarine/sections/jetski-showcase.webp`,
    },
    gallery: {
      jetSki01: `${CLOUDINARY_BASE}/shakeelmarine/gallery/jet-ski-01.webp`,
      jetSki02: `${CLOUDINARY_BASE}/shakeelmarine/gallery/jet-ski-02.webp`,
      jetSki03: `${CLOUDINARY_BASE}/shakeelmarine/gallery/jet-ski-03.webp`,
      boat01: `${CLOUDINARY_BASE}/shakeelmarine/gallery/boat-01.webp`,
      boat02: `${CLOUDINARY_BASE}/shakeelmarine/gallery/boat-02.webp`,
      boat03: `${CLOUDINARY_BASE}/shakeelmarine/gallery/boat-03.webp`,
      upholstery01: `${CLOUDINARY_BASE}/shakeelmarine/gallery/upholstery-01.webp`,
      upholstery02: `${CLOUDINARY_BASE}/shakeelmarine/gallery/upholstery-02.webp`,
      canopy01: `${CLOUDINARY_BASE}/shakeelmarine/gallery/canopy-01.webp`,
      canopy02: `${CLOUDINARY_BASE}/shakeelmarine/gallery/canopy-02.webp`,
      install01: `${CLOUDINARY_BASE}/shakeelmarine/gallery/install-01.webp`,
      install02: `${CLOUDINARY_BASE}/shakeelmarine/gallery/install-02.webp`,
    },
    services: {
      jetSkiSeatCover: `${CLOUDINARY_BASE}/shakeelmarine/sections/jetski-showcase.webp`,
      boatShipSeats: `${CLOUDINARY_BASE}/shakeelmarine/sections/boat-ship.webp`,
      marineUpholstery: `${CLOUDINARY_BASE}/shakeelmarine/gallery/upholstery-01.webp`,
      canopyCovers: `${CLOUDINARY_BASE}/shakeelmarine/sections/canopy.webp`,
    },
  },
  videos: {
    heroJetski: 'https://res.cloudinary.com/your-cloud-name/video/upload/shakeelmarine/videos/hero-jetski.mp4',
  },
} as const;
