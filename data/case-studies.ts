export interface CaseStudy {
  slug: string;
  title: string;
  titleAr: string;
  client: string;
  clientAr: string;
  service: string;
  serviceAr: string;
  description: string;
  descriptionAr: string;
  challenge: string;
  challengeAr: string;
  solution: string;
  solutionAr: string;
  result: string;
  resultAr: string;
  duration: string;
  images: { src: string; alt: string }[];
  testimonial?: { text: string; textAr: string; author: string };
  seo: {
    title: string;
    description: string;
  };
}

export const caseStudies: CaseStudy[] = [
  {
    slug: 'luxury-yacht-interior-renovation',
    title: 'Luxury Yacht Interior Renovation',
    titleAr: 'تجديد يخت فاخر داخلياً',
    client: 'Private Yacht Owner',
    clientAr: 'مالك يخت خاص',
    service: 'Marine Upholstery',
    serviceAr: 'التأثيث البحري',
    description: 'Complete interior renovation of a 60-foot luxury yacht including all seating, headliners, wall panels and custom cushions.',
    descriptionAr: 'تجديد داخلي كامل ليخت فاخر بطول 60 قدم يشمل جميع الجلسات، الأسقف، لوحات الجدران والوسائد المخصصة.',
    challenge: 'The yacht had extensive sun and water damage to all interior surfaces. The owner wanted a modern redesign while maintaining the vessel\'s classic character. All work had to be completed within 3 weeks before the sailing season.',
    challengeAr: 'كان اليخت يعاني من أضرار شمسية ومائية واسعة على جميع الأسطح الداخلية. أراد المالك إعادة تصميم عصرية مع الحفاظ على الطابع الكلاسيكي للسفينة. كان يجب إكمال جميع الأعمال خلال 3 أسابيع قبل موسم الإبحار.',
    solution: 'We conducted a full interior assessment, created custom patterns for every surface and selected premium marine-grade materials in a navy and cream color scheme. Our team worked in shifts to meet the tight deadline.',
    solutionAr: ' أجرنا تقييماً شاملاً للداخل، وأنشأنا قوالب مخصصة لكل سطح واخترنا مواد بحرية فاخرة بألوان كحلي وكريمية. عمل فريقنا بنوبات للالتزام بالموعد النهائي.',
    result: 'The yacht was delivered on time with a stunning modern interior. The owner reported increased comfort and received numerous compliments from fellow yacht owners. The project was featured in a marine lifestyle magazine.',
    resultAr: 'تم تسليم اليخت في الوقت المحدد بتصميم داخلي عصرى مذهل. أفاد المالك بزيادة الراحة وتلقى العديد من الإطراءات من أصحاب اليخوت الآخرين. تم عرض المشروع في مجلة نمط الحياة البحرية.',
    duration: '3 weeks',
    images: [
      { src: '/images/gallery/cover-02.jpg', alt: 'Yacht interior — before renovation' },
      { src: '/images/gallery/cover-05.jpg', alt: 'Yacht interior — after renovation' },
      { src: '/images/gallery/cover-15.jpg', alt: 'Custom seating detail' },
      { src: '/images/gallery/cover-19.jpg', alt: 'Headliner installation' },
    ],
    testimonial: {
      text: 'Shakeel Marine transformed our yacht beyond our expectations. The quality of work and attention to detail was exceptional.',
      textAr: 'حول شيقيل مارين يختنا بشكل تجاوز توقعاتنا. جودة العمل والاهتمام بالتفاصيل كان استثنائياً.',
      author: 'Yacht Owner, Kuwait City',
    },
    seo: {
      title: 'Luxury Yacht Interior Renovation Case Study | Shakeel Marine',
      description: 'Case study: Complete luxury yacht interior renovation by Shakeel Marine in Kuwait.',
    },
  },
  {
    slug: 'commercial-fleet-upholstery',
    title: 'Commercial Fleet Upholstery Project',
    titleAr: 'مشروع تأثيث أسطول تجاري',
    client: 'Kuwait Marine Tours',
    clientAr: 'جولات الكويت البحرية',
    service: 'Commercial Marine',
    serviceAr: 'الخدمات البحرية التجارية',
    description: 'Full upholstery replacement for a fleet of 12 tour boats serving Kuwait Bay.',
    descriptionAr: 'استبدال التأثيث الكامل لأسطول من 12 قارب جولات يخدم خليج الكويت.',
    challenge: 'The fleet boats were showing heavy wear from daily tourist use. The client needed a cost-effective solution that could be implemented quickly without extended downtime. Materials had to withstand constant use in harsh marine conditions.',
    challengeAr: 'كانت قوارب الأسطول تظهر تآكلاً شديداً من الاستخدام اليومي للسياح. احتاج العميل حلاً فعالاً من حيث التكلفة يمكن تنفيذه بسرعة دون توقف ممتد. يجب أن تصمد المواد أمام الاستخدام المستمر في ظروف بحرية قاسية.',
    solution: 'We developed a standardized upholstery package for each boat using heavy-duty marine vinyl. We implemented a rolling replacement schedule, upgrading 2 boats per week while maintaining service operations.',
    solutionAr: ' طورنا حزمة تأثيث موحدة لكل قارب باستخدام فييل بحري شديد التحمل. طبقنا جدول استبدال مت下滑، نقوم بترقية قاربين في الأسبوع مع الحفاظ على تشغيل الخدمة.',
    result: 'All 12 boats were upgraded in 6 weeks with zero service interruptions. The new upholstery reduced maintenance costs by 40% and improved customer satisfaction scores.',
    resultAr: 'تم ترقية جميع القوارب الـ 12 في 6 أسابيع بدون أي توقف في الخدمة. قلل التأثيث الجديد تكاليف الصيانة بنسبة 40% وحسّن درجات رضا العملاء.',
    duration: '6 weeks',
    images: [
      { src: '/images/gallery/cover-09.jpg', alt: 'Tour boat — before' },
      { src: '/images/gallery/cover-14.jpg', alt: 'Tour boat — after' },
      { src: '/images/gallery/cover-18.jpg', alt: 'Fleet upholstery in progress' },
      { src: '/images/gallery/cover-26.jpg', alt: 'Completed fleet' },
    ],
    testimonial: {
      text: 'Shakeel Marine handled our entire fleet upgrade with professionalism and efficiency. Zero downtime and excellent results.',
      textAr: 'تولى شيقيل مارين ترقية أسطولنا بأكمله بمهنية وكفاءة. صفر توقف ونتائج ممتازة.',
      author: 'Operations Manager, Kuwait Marine Tours',
    },
    seo: {
      title: 'Commercial Fleet Upholstery Case Study | Shakeel Marine',
      description: 'Case study: Full fleet upholstery replacement for Kuwait Marine Tours by Shakeel Marine.',
    },
  },
  {
    slug: 'jet-ski-seat-makeover',
    title: 'Jet Ski Seat Makeover Collection',
    titleAr: 'مجموعة تجديد مقاعد الجيت سكي',
    client: 'Al-Jahra Water Sports Club',
    clientAr: 'نادي الجهراء الرياضات المائية',
    service: 'Jet Ski Custom Seats',
    serviceAr: 'جلسات جيت سكي مخصصة',
    description: 'Custom seat redesign for 20 jet skis at a water sports club, each with unique color themes.',
    descriptionAr: 'إعادة تصميم مقاعد مخصصة لـ 20 جيت سكي في نادي رياضات مائية، كل منها بألوان فريدة.',
    challenge: 'Each jet ski needed a unique color scheme to identify different rental categories. The seats had to be durable enough for daily rental use while looking attractive for customers.',
    challengeAr: 'احتاج كل جيت سكي نظام ألوان فريد لتحديد فئات الإيجار المختلفة. يجب أن تكون المقاعد متينة بما يكفي للاستخدام اليومي للإيجار مع إثارة جذب العملاء.',
    solution: 'We created 5 color themes (red, blue, green, yellow, black) and applied them across the fleet. Each seat was fitted with reinforced stitching and premium marine vinyl for maximum durability.',
    solutionAr: ' أنشأنا 5 مواضع ألوان (أحمر، أزرق، أخضر، أصفر، أسود) وطبناها على الأسطول. تم تجهيز كل مقعد بخياطة معززة وفييل بحري فاخر لأقصى متانة.',
    result: 'The refreshed jet ski fleet attracted 30% more rentals in the first month. The color coding helped staff quickly identify rental categories, improving operational efficiency.',
    resultAr: 'جذب أسطول الجيت سكي المجدّد 30% أكثر من الإيجارات في الشهر الأول. ساعد الترميز اللوني الموظفين على تحديد فئات الإيجار بسرعة مما حسّن الكفاءة التشغيلية.',
    duration: '2 weeks',
    images: [
      { src: '/images/jetski-custom-seat/jetski custom seat1.jpg', alt: 'Jet ski seats — before' },
      { src: '/images/jetski-custom-seat/jetski custom seat3.jpg', alt: 'Jet ski seats — color themes' },
      { src: '/images/jetski-custom-seat/jetski custom seat5.jpg', alt: 'Completed fleet' },
      { src: '/images/jetski-custom-seat/jetski custom seat7.jpg', alt: 'Detail stitching' },
    ],
    testimonial: {
      text: 'The new seats look amazing and have held up perfectly under heavy daily use. Our customers love the fresh look.',
      textAr: 'المقاعد الجديدة تبدو مذهلة وصمدت بشكل مثالي تحت الاستخدام اليومي المكثف. عملاؤنا يحبون المظهر الجديد.',
      author: 'Club Manager, Al-Jahra',
    },
    seo: {
      title: 'Jet Ski Seat Makeover Case Study | Shakeel Marine',
      description: 'Case study: Custom jet ski seat redesign for Al-Jahra Water Sports Club by Shakeel Marine.',
    },
  },
  {
    slug: 'marina-canopy-project',
    title: 'Marina Canopy Cover Project',
    titleAr: 'مشروع غطاء مظلة المارينا',
    client: 'Kuwait Marina',
    clientAr: 'مارينا الكويت',
    service: 'Canopy Covers',
    serviceAr: 'غطاءت المظلات',
    description: 'Custom canopy covers for 30 boat berths at a major Kuwait marina.',
    descriptionAr: 'غطاءت مظلات مخصصة لـ 30 رصيف قارب في مارينة كويتية رئيسية.',
    challenge: 'The marina needed uniform canopy covers that could withstand intense UV exposure, sandstorms and occasional heavy rain. Each berth had slightly different dimensions due to varying boat sizes.',
    challengeAr: 'احتاجت المارينا غطاءت مظلات موحدة يمكنها تحمل التعرض المكثف لأشعة فوق البنفسجية، عواصف الرمال والأمطار الغزيرة أحياناً. كان لكل رصيف أبعاد مختلفة قليلاً بسبب اختلاف أحجام القوارب.',
    solution: 'We measured each berth individually and fabricated covers from heavy-duty marine canvas with UV-resistant coating. Each cover included ventilation panels and a quick-release system for easy removal.',
    solutionAr: ' قسنا كل رصيف بشكل منفصل وصنعنا غطاءت من قماش بحري شديد التحمل مع طلاء مقاوم للأشعة فوق البنفسجية. تضمن كل غطاء لوحات تهوية ونظام إ سريع للإزالة.',
    result: 'All 30 covers were installed in one week. The marina reported a 25% reduction in boat maintenance costs and improved berth occupancy rates due to better protection.',
    resultAr: 'تم تركيب جميع الغطاءت الثلاثين في أسبوع واحد. أفادت المارينا بانخفاض 25% في تكاليف صيانة القوارب و improves معدلات شغل الأرصفة بسبب الحماية الأفضل.',
    duration: '1 week',
    images: [
      { src: '/images/gallery/cover-01.jpg', alt: 'Marina berths — before' },
      { src: '/images/gallery/cover-03.jpg', alt: 'Canopy installation' },
      { src: '/images/gallery/cover-04.jpg', alt: 'Completed canopies' },
      { src: '/images/gallery/cover-08.jpg', alt: 'Detail view' },
    ],
    testimonial: {
      text: 'The canopy covers transformed our marina. Boats are better protected and our customers are happier.',
      textAr: 'حولت غطاءت المظلات مارينتنا. القوارب محمية بشكل أفضل وعملاؤنا أكثر سعادة.',
      author: 'Marina Director',
    },
    seo: {
      title: 'Marina Canopy Cover Case Study | Shakeel Marine',
      description: 'Case study: Custom canopy covers for 30 boat berths at Kuwait Marina by Shakeel Marine.',
    },
  },
];

export function getCaseStudyBySlug(slug: string): CaseStudy | undefined {
  return caseStudies.find((c) => c.slug === slug);
}
