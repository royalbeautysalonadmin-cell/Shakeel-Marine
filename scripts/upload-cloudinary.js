const cloudinary = require('cloudinary').v2;
const path = require('path');
const fs = require('fs');

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const FOLDER = 'shakeelmarine';

const images = [
  // Sections
  { path: 'public/images/sections/hero-ocean.jpg', folder: 'sections', name: 'hero-ocean' },
  { path: 'public/images/sections/boat-ship.jpg', folder: 'sections', name: 'boat-ship' },
  { path: 'public/images/sections/canopy.jpg', folder: 'sections', name: 'canopy' },
  { path: 'public/images/sections/jetski-showcase.jpg', folder: 'sections', name: 'jetski-showcase' },
  // Gallery
  { path: 'public/images/gallery/jet-ski-01.jpg', folder: 'gallery', name: 'jet-ski-01' },
  { path: 'public/images/gallery/jet-ski-02.jpg', folder: 'gallery', name: 'jet-ski-02' },
  { path: 'public/images/gallery/jet-ski-03.jpg', folder: 'gallery', name: 'jet-ski-03' },
  { path: 'public/images/gallery/boat-01.jpg', folder: 'gallery', name: 'boat-01' },
  { path: 'public/images/gallery/boat-02.jpg', folder: 'gallery', name: 'boat-02' },
  { path: 'public/images/gallery/boat-03.jpg', folder: 'gallery', name: 'boat-03' },
  { path: 'public/images/gallery/upholstery-01.jpg', folder: 'gallery', name: 'upholstery-01' },
  { path: 'public/images/gallery/upholstery-02.jpg', folder: 'gallery', name: 'upholstery-02' },
  { path: 'public/images/gallery/canopy-01.jpg', folder: 'gallery', name: 'canopy-01' },
  { path: 'public/images/gallery/canopy-02.jpg', folder: 'gallery', name: 'canopy-02' },
  { path: 'public/images/gallery/install-01.jpg', folder: 'gallery', name: 'install-01' },
  { path: 'public/images/gallery/install-02.jpg', folder: 'gallery', name: 'install-02' },
];

const videos = [
  { path: 'public/videos/hero-jetski.mp4', folder: 'videos', name: 'hero-jetski' },
];

async function uploadImage(img) {
  const fullPath = path.resolve(img.path);
  if (!fs.existsSync(fullPath)) {
    console.log(`SKIP (not found): ${img.path}`);
    return null;
  }
  try {
    const result = await cloudinary.uploader.upload(fullPath, {
      folder: `${FOLDER}/${img.folder}`,
      public_id: img.name,
      resource_type: 'image',
      format: 'webp',
      quality: 'auto',
      fetch_format: 'auto',
      transformation: [{ width: 1200, crop: 'limit' }],
    });
    console.log(`OK: ${img.name} -> ${result.secure_url}`);
    return result.secure_url;
  } catch (err) {
    console.error(`FAIL: ${img.name}`, err.message);
    return null;
  }
}

async function uploadVideo(vid) {
  const fullPath = path.resolve(vid.path);
  if (!fs.existsSync(fullPath)) {
    console.log(`SKIP (not found): ${vid.path}`);
    return null;
  }
  try {
    const result = await cloudinary.uploader.upload(fullPath, {
      folder: `${FOLDER}/${vid.folder}`,
      public_id: vid.name,
      resource_type: 'video',
      eager_async: true,
      eager: [
        { streaming_profile: 'hd', format: 'mp4' },
        { streaming_profile: 'full_hd', format: 'mp4' },
      ],
    });
    console.log(`OK: ${vid.name} -> ${result.secure_url}`);
    return result.secure_url;
  } catch (err) {
    console.error(`FAIL: ${vid.name}`, err.message);
    return null;
  }
}

async function main() {
  console.log('=== Uploading images to Cloudinary ===\n');
  const urls = {};

  for (const img of images) {
    const url = await uploadImage(img);
    if (url) urls[img.name] = url;
  }

  console.log('\n=== Uploading videos to Cloudinary ===\n');
  for (const vid of videos) {
    const url = await uploadVideo(vid);
    if (url) urls[vid.name] = url;
  }

  console.log('\n=== URL Map (copy these to your code) ===\n');
  console.log(JSON.stringify(urls, null, 2));

  fs.writeFileSync('cloudinary-urls.json', JSON.stringify(urls, null, 2));
  console.log('\nSaved to cloudinary-urls.json');
}

main();
