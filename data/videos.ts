export interface VideoItem {
  slug: string;
  title: string;
  titleAr: string;
  description: string;
  descriptionAr: string;
  thumbnail: string;
  videoUrl: string;
  category: 'installation' | 'product' | 'testimonial' | 'tutorial';
  duration: string;
  date: string;
}

export const videos: VideoItem[] = [
  {
    slug: 'jet-ski-seat-cover-installation',
    title: 'Jet Ski Seat Cover Installation',
    titleAr: 'تركيب غطاء مقعد الجيت سكي',
    description: 'Watch our team install a custom jet ski seat cover from measurement to final fitting.',
    descriptionAr: 'شاهد فريقنا يركب غطاء مقعد جيت سكي مخصص من القياس إلى التركيب النهائي.',
    thumbnail: '/images/jetski-custom-seat/jetski custom seat1.jpg',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    category: 'installation',
    duration: '5:30',
    date: '2025-01-15',
  },
  {
    slug: 'boat-canopy-replacement',
    title: 'Boat Canopy Replacement Process',
    titleAr: 'عملية استبدال مظلة القارب',
    description: 'Complete boat canopy replacement — old cover removal, measurement and new cover installation.',
    descriptionAr: 'استبدال مظلة قارب كامل — إزالة الغطاء القديم والقياس وتركيب الغطاء الجديد.',
    thumbnail: '/images/before-after/canopy-after-01.jpg',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    category: 'installation',
    duration: '8:15',
    date: '2025-02-20',
  },
  {
    slug: 'super-jet-floor-mat-installation',
    title: 'Super Jet Floor Mat Kit Installation',
    titleAr: 'تركيب طقم بطاقات أرضية سوبر جيت',
    description: 'Step-by-step guide to installing the Super Jet Floor Mat Kit on your jet ski.',
    descriptionAr: 'دليل خطوة بخطوة لتركيب طقم بطاقات أرضية سوبر جيت على جيت سكيك.',
    thumbnail: '/images/super-jet-floor-mat/jetkeifloorcover1.jpg',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    category: 'tutorial',
    duration: '4:45',
    date: '2025-03-10',
  },
  {
    slug: 'ship-cover-fabrication',
    title: 'Custom Ship Cover Fabrication',
    titleAr: 'تصنيع غطاء سفينة مخصص',
    description: 'Behind the scenes of our ship cover manufacturing process — from pattern to finished product.',
    descriptionAr: 'من خلف الكواليس لعملية تصنيع غطاءات السفن — من القالب إلى المنتج النهائي.',
    thumbnail: '/images/gallery/cover-01.jpg',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    category: 'product',
    duration: '6:20',
    date: '2025-04-05',
  },
  {
    slug: 'customer-testimonial-ahmad',
    title: 'Customer Testimonial — Ahmad K.',
    titleAr: 'شهادة عميل — أحمد ك.',
    description: 'Ahmad shares his experience with Shakeel Marine jet ski seat covers.',
    descriptionAr: 'أحمد يشارك تجربته مع غطاءات مقاعد جيت سكي من شيقيل مارين.',
    thumbnail: '/images/jetski-custom-seat/jetski custom seat3.jpg',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    category: 'testimonial',
    duration: '2:10',
    date: '2025-05-12',
  },
  {
    slug: 'marine-upholstery-materials-guide',
    title: 'Marine Upholstery Materials Guide',
    titleAr: 'دليل مواد التأثيث البحري',
    description: 'Learn about different marine upholstery materials — vinyl, leather, canvas and their uses.',
    descriptionAr: 'تعرف على مواد التأثيث البحري المختلفة — الفينيل والجلد والقماش واستخداماتها.',
    thumbnail: '/images/gallery/cover-07.jpg',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    category: 'tutorial',
    duration: '7:00',
    date: '2025-06-18',
  },
  {
    slug: 'boat-interior-transformation',
    title: 'Complete Boat Interior Transformation',
    titleAr: 'تحول داخلي كامل للقارب',
    description: 'See a full boat interior renovation — seats, panels, headliner and trim.',
    descriptionAr: 'شاهد تجديد داخلي كامل للقارب — مقاعد، لوحات، سقف وتشطيب.',
    thumbnail: '/images/before-after/boat-after-01.jpg',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    category: 'installation',
    duration: '10:45',
    date: '2025-07-22',
  },
  {
    slug: 'jet-ski-custom-seats-showcase',
    title: 'Jet Ski Custom Seats Showcase',
    titleAr: 'عرض مقاعد الجيت سكي المخصصة',
    description: 'Showcase of our custom jet ski seats — colors, stitching patterns and finishes.',
    descriptionAr: 'عرض مقاعد جيت سكي مخصصة — ألوان، أنماط خياطة وتشطيبات.',
    thumbnail: '/images/jetski-custom-seat/jetski custom seat5.jpg',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    category: 'product',
    duration: '3:30',
    date: '2025-08-15',
  },
];

export const videoCategories = [
  { value: 'all', label: 'All Videos' },
  { value: 'installation', label: 'Installations' },
  { value: 'product', label: 'Products' },
  { value: 'testimonial', label: 'Testimonials' },
  { value: 'tutorial', label: 'Tutorials' },
];
