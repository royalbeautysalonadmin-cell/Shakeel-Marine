export interface FAQItem {
  question: string;
  answer: string;
  category?: string;
}

export const faqData: FAQItem[] = [
  {
    question: 'What marine services does Shakeel Marine provide?',
    answer:
      'Shakeel Marine provides custom marine upholstery and cover services including jet ski seat covers, boat and ship seats, custom marine upholstery, ship top covers and canopy covers. All services include professional installation.',
    category: 'general',
  },
  {
    question: 'Do you make custom jet ski seat covers?',
    answer:
      'Yes. We design and fabricate custom jet ski seat covers tailored to your specific jet ski model. You can choose your preferred colors, stitching patterns and finish.',
    category: 'jet-ski',
  },
  {
    question: 'Do you install seat covers?',
    answer:
      'Yes. Professional installation is included as part of our service. We ensure every cover and seat is properly fitted and finished.',
    category: 'general',
  },
  {
    question: 'Can you customize colors and stitching?',
    answer:
      'Absolutely. Full customization is available for colors, stitching patterns, materials and overall design style across all of our services.',
    category: 'general',
  },
  {
    question: 'Do you work on boat and ship seats?',
    answer:
      'Yes. We create custom seats, seat covers and provide reupholstery services for boats and ships of various sizes.',
    category: 'boat-ship',
  },
  {
    question: 'Do you make custom canopy covers?',
    answer:
      'Yes. We design and fabricate custom canopy and ship top covers. Each cover is measured, fabricated and professionally installed to fit your specific vessel.',
    category: 'canopy',
  },
  {
    question: 'Can I request a quote through WhatsApp?',
    answer:
      'Yes. You can reach us directly through WhatsApp to discuss your project and request a quote. You can also use the Request a Quote form on our website.',
    category: 'general',
  },
  {
    question: 'How does the custom process work?',
    answer:
      'Our process typically involves four steps: First, you share your project requirements. Then we discuss the design, colors and materials. Next, we fabricate the product to your specifications. Finally, we provide professional installation and finishing.',
    category: 'general',
  },
  {
    question: 'What information should I provide for a quote?',
    answer:
      'To prepare an accurate quote, it helps to share: the type of vessel (jet ski, boat, ship), the service you need (seat cover, upholstery, canopy), your preferred colors or design, and any photos of the current setup. You can share these details through our quote form or WhatsApp.',
    category: 'general',
  },
];
