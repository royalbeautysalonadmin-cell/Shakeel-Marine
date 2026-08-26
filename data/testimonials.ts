export interface Testimonial {
  name: string;
  service: string;
  rating: number;
  text: string;
  textAr: string;
}

export const testimonials: Testimonial[] = [
  {
    name: 'Ahmad K.',
    service: 'Jet Ski Seat Covers',
    rating: 5,
    text: 'Excellent work on my jet ski seat covers. The fit is perfect and the stitching is very clean. Professional installation from start to finish.',
    textAr: 'عمل ممتاز على أغطية مقاعد جيت سكي. القصة مثالية والخياطة نظيفة جداً. تركيب مهني من البداية إلى النهاية.',
  },
  {
    name: 'Fatima A.',
    service: 'Canopy Covers',
    rating: 5,
    text: 'They made a custom canopy cover for my boat. The quality is outstanding and it fits perfectly. Highly recommend Shakeel Marine.',
    textAr: 'صنعوا غطاء مظلة مخصص لقاربي. الجودة ممتازة والقصة مثالية. أنصح بشيقيل مارين بشدة.',
  },
  {
    name: 'Mohammed S.',
    service: 'Boat Seats',
    rating: 5,
    text: 'My boat seats were completely worn out. Shakeel Marine restored them to like-new condition. The attention to detail is impressive.',
    textAr: 'كانت مقاعد قاربي بالية تماماً. أعادتها شيقيل مارين إلى حالة جديدة. الاهتمام بالتفاصيل مُпечат.',
  },
  {
    name: 'Sarah M.',
    service: 'Marine Upholstery',
    rating: 4,
    text: 'Great upholstery work on my jet ski. The color selection and stitching quality exceeded my expectations. Will definitely come back.',
    textAr: 'عمل تأثيث رائع على جيت سكي. اختيار الألوان وجودة الخياطة تجاوزت توقعاتي. سأعود بالتأكيد.',
  },
  {
    name: 'Khalid R.',
    service: 'Super Jet Floor Mat Kit',
    rating: 5,
    text: 'The floor mat kit fits my jet ski perfectly. Non-slip surface gives me confidence when boarding. Great product and professional installation.',
    textAr: 'طقم البطاقات الأرضية يناسب جيت سكي تماماً. السطح غير الزلق يمنحني الثقة عند الصعود. منتج رائع وتركيب مهني.',
  },
  {
    name: 'Omar H.',
    service: 'Jet Ski Custom Seats',
    rating: 5,
    text: 'Custom seat design was exactly what I wanted. The team was professional and the result looks factory-made. Very satisfied.',
    textAr: 'تصميم المقعد المخصص كان بالضبط ما أردته. كان الفريق مهنياً والنتيجة تبدو كالمصنعة من المصنع. راضٍ جداً.',
  },
];
