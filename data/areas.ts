export interface Area {
  slug: string;
  name: string;
  nameAr: string;
  description: string;
  descriptionAr: string;
  services: string[];
  landmarks: string[];
  seo: {
    title: string;
    description: string;
  };
}

export const areas: Area[] = [
  {
    slug: 'kuwait-city',
    name: 'Kuwait City',
    nameAr: 'مدينة الكويت',
    description: 'Marine upholstery and cover services in Kuwait City. We serve boat and jet ski owners across the capital with custom seats, covers and canopy solutions.',
    descriptionAr: 'خدمات التأثيث والغطاءات البحرية في مدينة الكويت. نخدم أصحاب القوارب والجيت سكي في العاصمة بجلسات وغطاءات ومظلات مخصصة.',
    services: ['Jet Ski Seat Covers', 'Boat & Ship Seats', 'Canopy Covers', 'Marine Upholstery'],
    landmarks: ['Kuwait Towers', 'Souq Sharq', 'Marina Mall'],
    seo: {
      title: 'Marine Upholstery in Kuwait City | Shakeel Marine',
      description: 'Custom marine upholstery services in Kuwait City. Jet ski seats, boat covers and canopy solutions by Shakeel Marine.',
    },
  },
  {
    slug: 'hawalli',
    name: 'Hawalli',
    nameAr: 'حولي',
    description: 'Professional marine upholstery services in Hawalli. Custom jet ski seats, boat covers and marine canopy solutions delivered to your location.',
    descriptionAr: 'خدمات تأثيث بحري احترافية في حولي. جلسات جيت سكي مخصصة، أغطية قوارب ومظلات بحرية تصل إلى موقعك.',
    services: ['Jet Ski Seat Covers', 'Boat Seats', 'Canopy Covers'],
    landmarks: ['Hawalli Beach', 'Shaab Beach'],
    seo: {
      title: 'Marine Upholstery in Hawalli | Shakeel Marine',
      description: 'Custom marine upholstery in Hawalli, Kuwait. Jet ski seats, boat covers and canopy solutions by Shakeel Marine.',
    },
  },
  {
    slug: 'salmiya',
    name: 'Salmiya',
    nameAr: 'السالمية',
    description: 'Marine upholstery experts in Salmiya. We provide custom jet ski seat covers, boat upholstery and canopy solutions for marine enthusiasts.',
    descriptionAr: 'خبراء التأثيث البحري في السالمية. نوفر أغطية مقاعد جيت سكي مخصصة، تأثيث قوارب وحلول مظلات لعشاق البحار.',
    services: ['Jet Ski Seat Covers', 'Marine Upholstery', 'Canopy Covers', 'Boat Seats'],
    landmarks: ['Salmiya Marina', 'Scientific Center'],
    seo: {
      title: 'Marine Upholstery in Salmiya | Shakeel Marine',
      description: 'Custom marine upholstery in Salmiya, Kuwait. Jet ski seats, boat covers and canopy solutions by Shakeel Marine.',
    },
  },
  {
    slug: 'farwaniya',
    name: 'Farwaniya',
    nameAr: 'ال Farwaniya',
    description: 'Quality marine upholstery services in Farwaniya. Custom-fit jet ski seats, boat covers and marine canopy covers for all vessel types.',
    descriptionAr: 'خدمات تأثيث بحري عالية الجودة في الفروانية. جلسات جيت سكي مقاسة بدقة، أغطية قوارب ومظلات بحرية لجميع أنواع الأوعية.',
    services: ['Jet Ski Seat Covers', 'Boat & Ship Seats', 'Marine Upholstery'],
    landmarks: ['Farwaniya Complex', 'Airport Road'],
    seo: {
      title: 'Marine Upholstery in Farwaniya | Shakeel Marine',
      description: 'Custom marine upholstery in Farwaniya, Kuwait. Jet ski seats, boat covers and canopy solutions by Shakeel Marine.',
    },
  },
  {
    slug: 'jahra',
    name: 'Jahra',
    nameAr: 'الجهراء',
    description: 'Marine upholstery and cover services in Jahra. Serving boat and jet ski owners with custom marine solutions across the Jahra governorate.',
    descriptionAr: 'خدمات التأثيث والغطاءات البحرية في الجهراء. نخدم أصحاب القوارب والجيت سكي بحلول بحرية مخصصة في محافظة الجهراء.',
    services: ['Jet Ski Seat Covers', 'Canopy Covers', 'Boat Seats'],
    landmarks: ['Jahra Sea Club', 'Red Palace'],
    seo: {
      title: 'Marine Upholstery in Jahra | Shakeel Marine',
      description: 'Custom marine upholstery in Jahra, Kuwait. Jet ski seats, boat covers and canopy solutions by Shakeel Marine.',
    },
  },
  {
    slug: 'mangaf',
    name: 'Mangaf',
    nameAr: 'المنقف',
    description: 'Trusted marine upholstery specialists in Mangaf. Custom jet ski seats, boat covers and marine canopy solutions for coastal residents.',
    descriptionAr: 'متخصصون موثوقون في التأثيث البحري في المنقف. جلسات جيت سكي مخصصة، أغطية قوارب ومظلات بحرية لسكان الساحل.',
    services: ['Jet Ski Seat Covers', 'Marine Upholstery', 'Boat & Ship Seats', 'Canopy Covers'],
    landmarks: ['Mangaf Beach', 'Sea Front'],
    seo: {
      title: 'Marine Upholstery in Mangaf | Shakeel Marine',
      description: 'Custom marine upholstery in Mangaf, Kuwait. Jet ski seats, boat covers and canopy solutions by Shakeel Marine.',
    },
  },
];

export function getAreaBySlug(slug: string): Area | undefined {
  return areas.find((a) => a.slug === slug);
}
