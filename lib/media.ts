/**
 * Media URLs — Cloudinary CDN with local fallback.
 *
 * Once Cloudinary upload is complete, all images/videos are served
 * from Cloudinary's global CDN with auto WebP/AVIF and compression.
 */

const CLOUD_NAME = 'shakeelmarine';
const CDN = `https://res.cloudinary.com/${CLOUD_NAME}/image/upload`;
const VIDEO_CDN = `https://res.cloudinary.com/${CLOUD_NAME}/video/upload`;
const FOLDER = 'shakeelmarine';

export const media = {
  images: {
    sections: {
      heroOcean: `${CDN}/${FOLDER}/sections/hero-ocean.webp`,
      boatShip: `${CDN}/${FOLDER}/sections/boat-ship.webp`,
      canopy: `${CDN}/${FOLDER}/sections/canopy.webp`,
      jetskiShowcase: `${CDN}/${FOLDER}/sections/jetski-showcase.webp`,
    },
    gallery: {
      jetSki01: `${CDN}/${FOLDER}/gallery/jet-ski-01.webp`,
      jetSki02: `${CDN}/${FOLDER}/gallery/jet-ski-02.webp`,
      jetSki03: `${CDN}/${FOLDER}/gallery/jet-ski-03.webp`,
      boat01: `${CDN}/${FOLDER}/gallery/boat-01.webp`,
      boat02: `${CDN}/${FOLDER}/gallery/boat-02.webp`,
      boat03: `${CDN}/${FOLDER}/gallery/boat-03.webp`,
      upholstery01: `${CDN}/${FOLDER}/gallery/upholstery-01.webp`,
      upholstery02: `${CDN}/${FOLDER}/gallery/upholstery-02.webp`,
      canopy01: `${CDN}/${FOLDER}/gallery/canopy-01.webp`,
      canopy02: `${CDN}/${FOLDER}/gallery/canopy-02.webp`,
      install01: `${CDN}/${FOLDER}/gallery/install-01.webp`,
      install02: `${CDN}/${FOLDER}/gallery/install-02.webp`,
    },
    services: {
      jetSkiSeatCover: `${CDN}/${FOLDER}/sections/jetski-showcase.webp`,
      boatShipSeats: `${CDN}/${FOLDER}/sections/boat-ship.webp`,
      marineUpholstery: `${CDN}/${FOLDER}/gallery/upholstery-01.webp`,
      canopyCovers: `${CDN}/${FOLDER}/sections/canopy.webp`,
    },
  },
  videos: {
    heroJetski: `${VIDEO_CDN}/shakeelmarine/videos/hero-jetski.mp4`,
  },
} as const;
