export interface ServiceData {
  slug: string;
  title: string;
  shortTitle: string;
  tagline: string;
  heroHeading: string;
  heroDescription: string;
  description: string;
  features: string[];
  benefits: { title: string; description: string }[];
  process: { step: string; description: string }[];
  faqs: { question: string; answer: string }[];
  seo: {
    title: string;
    description: string;
  };
  cta: {
    heading: string;
    description: string;
    buttonText: string;
    whatsappMessage: string;
  };
  image: string;
  imageAlt: string;
}

export const services: ServiceData[] = [
  {
    slug: 'jet-ski-seat-covers',
    title: 'Jet Ski Seat Covers',
    shortTitle: 'Jet Ski Seats',
    tagline: 'Custom seat covers designed for jet skis, including professional fitting and installation.',
    heroHeading: 'Custom Jet Ski Seat Covers in Kuwait',
    heroDescription:
      'Professionally crafted jet ski seat covers, designed to fit your specific model. Choose your colors, stitching and finish — installed with precision.',
    description:
      'Our custom jet ski seat covers are designed around your specific jet ski model. Every cover is measured, cut and stitched to fit precisely, with your choice of colors, patterns and finishing. We handle the full process from measurement to professional installation.',
    features: [
      'Custom fit for your specific jet ski model',
      'Choice of colors, patterns and stitching',
      'Marine-suitable materials',
      'Professional measurement and fitting',
      'Clean stitching and finishing',
      'Complete installation service',
    ],
    benefits: [
      {
        title: 'Custom Design',
        description:
          'Choose your preferred colors, stitching patterns and finish to match your style.',
      },
      {
        title: 'Precise Fit',
        description:
          'Each cover is measured and cut to fit your specific jet ski model.',
      },
      {
        title: 'Professional Installation',
        description:
          'We handle the complete fitting process to ensure a clean result.',
      },
      {
        title: 'Marine Suitable',
        description:
          'Materials selected for use in marine environments.',
      },
    ],
    process: [
      {
        step: 'Measurement',
        description:
          'We measure your jet ski seat to ensure an accurate custom fit.',
      },
      {
        step: 'Design Selection',
        description:
          'Choose your preferred colors, stitching and finishing style.',
      },
      {
        step: 'Fabrication',
        description:
          'Your seat cover is cut and stitched to your specifications.',
      },
      {
        step: 'Installation',
        description:
          'The finished cover is professionally fitted to your jet ski.',
      },
    ],
    faqs: [
      {
        question: 'Can you make a seat cover for any jet ski model?',
        answer:
          'We custom-make seat covers based on measurements taken from your specific jet ski, so the cover is designed to fit your model.',
      },
      {
        question: 'Can I choose the color and stitching?',
        answer:
          'Yes. You can select your preferred colors, stitching patterns and overall design style.',
      },
      {
        question: 'Do you install the seat cover?',
        answer:
          'Yes, we provide a complete service including professional installation.',
      },
      {
        question: 'How long does it take?',
        answer:
          'Timing depends on the design and current workload. Contact us to discuss your project timeline.',
      },
    ],
    seo: {
      title: 'Jet Ski Seat Covers in Kuwait | Shakeel Marine',
      description:
        'Custom jet ski seat covers in Kuwait. Professional design, fabrication and installation. Choose your colors, stitching and finish. Contact Shakeel Marine.',
    },
    cta: {
      heading: 'Ready for a Custom Jet Ski Seat Cover?',
      description:
        'Share your jet ski details and design preferences. We will prepare a custom quote for your project.',
      buttonText: 'Get a Jet Ski Seat Quote',
      whatsappMessage:
        'Hello Shakeel Marine, I am interested in a custom jet ski seat cover. I would like to request a quote.',
    },
    image: '/images/jetski-custom-seat/jetski custom seat1.jpg',
    imageAlt: 'Custom jet ski seat cover by Shakeel Marine in Kuwait',
  },
  {
    slug: 'canopy-covers',
    title: 'Canopy Covers',
    shortTitle: 'Canopy Covers',
    tagline: 'Custom canopy cover solutions designed to protect your vessel from the elements.',
    heroHeading: 'Custom Marine Canopy Covers in Kuwait',
    heroDescription:
      'Custom-designed canopy covers, measured and fabricated to fit your vessel. Professional installation included.',
    description:
      'Our custom canopy covers are designed to protect your vessel from the elements. Each cover is measured and fabricated to fit your specific vessel, with your choice of colors and materials. Professional installation ensures a clean, secure fit.',
    features: [
      'Custom boat canopy covers',
      'Marine canopy fabrication',
      'Custom sizing and fitting',
      'Weather and UV protection',
      'Custom color selection',
      'Professional installation',
    ],
    benefits: [
      {
        title: 'Custom Measurements',
        description:
          'Every cover is measured and designed for your specific vessel.',
      },
      {
        title: 'Weather Protection',
        description:
          'Covers designed to shield from sun, rain and marine conditions.',
      },
      {
        title: 'UV Resistance',
        description:
          'Material options that offer UV resistance where supported.',
      },
      {
        title: 'Professional Fitting',
        description:
          'Installed and secured by our team for a clean finish.',
      },
    ],
    process: [
      {
        step: 'Vessel Assessment',
        description:
          'We assess your vessel and take measurements for the cover.',
      },
      {
        step: 'Design & Color',
        description:
          'Select your preferred cover style, color and material.',
      },
      {
        step: 'Custom Fabrication',
        description:
          'Your canopy cover is fabricated to fit.',
      },
      {
        step: 'Installation',
        description:
          'Professional fitting and securing on your vessel.',
      },
    ],
    faqs: [
      {
        question: 'Do you make covers for any size vessel?',
        answer:
          'We custom-make covers based on measurements from your specific vessel. Contact us to discuss your project.',
      },
      {
        question: 'Will the cover protect against UV?',
        answer:
          'We offer material options that provide UV resistance. The level of protection depends on the material selected.',
      },
      {
        question: 'Can I choose the color?',
        answer:
          'Yes, you can select your preferred color from our available range.',
      },
      {
        question: 'Do you install the cover?',
        answer:
          'Yes, professional installation is included in the service.',
      },
    ],
    seo: {
      title: 'Marine Canopy Covers in Kuwait | Shakeel Marine',
      description:
        'Custom marine canopy covers in Kuwait. Measured, fabricated and professionally installed by Shakeel Marine.',
    },
    cta: {
      heading: 'Need a Custom Canopy Cover?',
      description:
        'Share your vessel details and cover requirements. We will design a solution that fits.',
      buttonText: 'Request a Canopy Quote',
      whatsappMessage:
        'Hello Shakeel Marine, I am interested in a custom marine canopy cover. I would like to request a quote.',
    },
    image: '/images/before-after/canopy-cover-after.png',
    imageAlt: 'Custom marine canopy cover by Shakeel Marine in Kuwait',
  },
];

export function getServiceBySlug(slug: string): ServiceData | undefined {
  return services.find((s) => s.slug === slug);
}
