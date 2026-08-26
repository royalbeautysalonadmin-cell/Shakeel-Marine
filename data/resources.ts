export interface Resource {
  slug: string;
  title: string;
  titleAr: string;
  description: string;
  descriptionAr: string;
  content: string;
  category: string;
  seo: {
    title: string;
    description: string;
  };
}

export const resources: Resource[] = [
  {
    slug: 'material-comparison-guide',
    title: 'Marine Upholstery Material Comparison Guide',
    titleAr: 'دليل مقارنة مواد التأثيث البحري',
    description: 'Compare marine vinyl, leather, canvas and fabric options for your boat or jet ski upholstery project.',
    descriptionAr: 'قارن بين خيارات الفينيل البحري، الجلد، القماش والأقمشة لمشروع تأثيث قاربك أو جيت سكيك.',
    content: `
      <h3>Marine Vinyl</h3>
      <p>The most popular choice for marine upholstery. Marine-grade vinyl is water-resistant, UV-stable and easy to clean. It comes in various textures and colors, making it versatile for all marine applications.</p>
      <h3>Marine Leather</h3>
      <p>Premium option offering luxury feel and appearance. Marine leather is treated to resist water, salt and UV damage. It requires more maintenance than vinyl but provides superior comfort and aesthetics.</p>
      <h3>Marine Canvas</h3>
      <p>Heavy-duty woven fabric ideal for covers, canopies and bimini tops. Canvas is breathable, water-resistant and extremely durable. It is the go-to choice for boat covers and storage solutions.</p>
      <h3>Marine Fabric</h3>
      <p>Synthetic fabrics like Sunbrella offer UV resistance and breathability. They are lighter than canvas and come in many patterns and colors. Ideal for cushions, seat covers and interior applications.</p>
    `,
    category: 'materials',
    seo: { title: 'Marine Upholstery Material Guide | Shakeel Marine', description: 'Complete guide to marine upholstery materials — vinyl, leather, canvas and fabric comparisons.' },
  },
  {
    slug: 'color-selection-guide',
    title: 'How to Choose Colors for Marine Upholstery',
    titleAr: 'كيف تختار ألوان التأثيث البحري',
    description: 'Tips for selecting the right colors for your jet ski seats, boat upholstery and marine covers.',
    descriptionAr: 'نصائح لاختيار الألوان المناسبة لمقاعد جيت سكيك، تأثيث القوارب وغطاءات البحرية.',
    content: `
      <h3>Consider Your Vessel</h3>
      <p>Start with your jet ski or boat's existing color scheme. Complementary colors create a cohesive look, while contrasting colors make a bold statement.</p>
      <h3>Marine Environment</h3>
      <p>Light colors reflect heat and stay cooler in the sun. Dark colors hide stains better but absorb more heat. Consider Kuwait's climate when choosing.</p>
      <h3>Popular Combinations</h3>
      <p>Navy and sand, ocean blue and white, charcoal and teal are classic marine combinations. For a modern look, try black with accent stitching in white or red.</p>
      <h3>Stitching Colors</h3>
      <p>Contrasting stitching adds visual interest. White stitching on dark vinyl, or black stitching on light colors, creates a premium finished look.</p>
    `,
    category: 'design',
    seo: { title: 'Marine Upholstery Color Guide | Shakeel Marine', description: 'Tips for choosing the right colors for marine upholstery, jet ski seats and boat covers.' },
  },
  {
    slug: 'marine-upholstery-glossary',
    title: 'Marine Upholstery Glossary',
    titleAr: 'مصطلحات التأثيث البحري',
    description: 'Essential terms and definitions for marine upholstery, covers and marine fabrication.',
    descriptionAr: 'مصطلحات وتعريفات أساسية للتأثيث البحري والغطاءات والتصنيع البحري.',
    content: `
      <h3>Upholstery Terms</h3>
      <p><strong>Bimini Top:</strong> A canvas top for boats that provides shade while on the water. It is open on the sides and rear.</p>
      <p><strong>Canopy Cover:</strong> A full cover that protects the entire vessel during storage or docking.</p>
      <p><strong>Marine Vinyl:</strong> Water-resistant vinyl specifically designed for marine environments.</p>
      <p><strong>Naugahyde:</strong> A brand of marine-grade vinyl known for durability and quality.</p>
      <h3>Fabrication Terms</h3>
      <p><strong>Patterning:</strong> Creating a template from your existing seats or covers for precise fitting.</p>
      <p><strong>Welting:</strong> Decorative cord or piping used along seams for a finished look.</p>
      <p><strong>French Seam:</strong> A double-stitched seam that provides extra strength and a clean appearance.</p>
    `,
    category: 'reference',
    seo: { title: 'Marine Upholstery Glossary | Shakeel Marine', description: 'Essential marine upholstery terms and definitions — bimini, canopy, vinyl, welting and more.' },
  },
  {
    slug: 'jet-ski-model-compatibility',
    title: 'Jet Ski Model Compatibility Chart',
    titleAr: 'جدول توافق طرازات الجيت سكي',
    description: 'Find out which marine upholstery products are compatible with your specific jet ski model.',
    descriptionAr: 'اكتشف أي منتجات التأثيث البحري متوافقة مع طراز الجيت سكي المحدد لديك.',
    content: `
      <h3>Yamaha Models</h3>
      <p>Our jet ski seat covers, floor mats and custom seats are compatible with all Yamaha WaveRunner models including VX, GT, GP and JetLi series.</p>
      <h3>Sea-Doo Models</h3>
      <p>We provide custom solutions for all Sea-Doo models including GTI, GTR, RXP-X, GTX and Spark series. Each product is measured for precise fit.</p>
      <h3>Kawasaki Models</h3>
      <p>Compatible with all Kawasaki Jet Ski models including Ultra, STX and SX-R series. Custom patterns available for older models.</p>
      <h3>Custom Orders</h3>
      <p>Don't see your model? We create custom patterns for any jet ski. Contact us with your model details and we will prepare a custom solution.</p>
    `,
    category: 'reference',
    seo: { title: 'Jet Ski Model Compatibility | Shakeel Marine', description: 'Jet ski model compatibility chart for marine upholstery products — Yamaha, Sea-Doo, Kawasaki.' },
  },
  {
    slug: 'boat-size-guide',
    title: 'Boat Size and Upholstery Guide',
    titleAr: 'دليل حجم القارب والتأثيث',
    description: 'How boat size affects upholstery choices, material selection and project costs.',
    descriptionAr: 'كيف يؤثر حجم القارب على خيارات التأثيث واختيار المواد وتكاليف المشروع.',
    content: `
      <h3>Small Boats (Under 20ft)</h3>
      <p>Smaller boats require less material and are quicker to upholster. Focus on durable, UV-resistant covers and simple seat designs. Budget-friendly options work well.</p>
      <h3>Medium Boats (20-35ft)</h3>
      <p>Medium boats offer more customization options. Consider premium materials for captain and passenger seats. Additional interior elements like side panels can be added.</p>
      <h3>Large Boats (35ft+)</h3>
      <p>Large boats and yachts benefit from premium materials and complex designs. Multiple seating areas, interior upholstery and custom canopy covers are common projects.</p>
      <h3>Cost Factors</h3>
      <p>Material choice, boat size, design complexity and installation requirements all affect the final cost. Contact us for an accurate quote based on your specific vessel.</p>
    `,
    category: 'reference',
    seo: { title: 'Boat Size and Upholstery Guide | Shakeel Marine', description: 'How boat size affects upholstery choices, materials and costs.' },
  },
  {
    slug: 'care-maintenance-schedule',
    title: 'Marine Upholstery Care & Maintenance Schedule',
    titleAr: 'جدول العناية والصيانة بالتأثيث البحري',
    description: 'Monthly, quarterly and annual maintenance tasks to keep your marine upholstery in perfect condition.',
    descriptionAr: 'مهام الصيانة الشهرية والربع السنوية والسنوية للحفاظ على تأثيثك البحري في حالة مثالية.',
    content: `
      <h3>After Every Use</h3>
      <p>Rinse with fresh water to remove salt and debris. Wipe dry with a clean towel. Check for any new damage or loose stitching.</p>
      <h3>Monthly</h3>
      <p>Clean with mild soap and water solution. Apply UV protectant spray. Check all seams and edges for wear. Inspect zippers and fasteners.</p>
      <h3>Quarterly</h3>
      <p>Deep clean all surfaces. Apply leather conditioner if applicable. Check for mold or mildew. Inspect and tighten any hardware.</p>
      <h3>Annually</h3>
      <p>Professional inspection recommended. Replace any worn components. Reapply UV protectant. Consider reupholstery if material shows significant wear.</p>
    `,
    category: 'maintenance',
    seo: { title: 'Marine Upholstery Maintenance Schedule | Shakeel Marine', description: 'Complete maintenance schedule for marine upholstery — daily, monthly, quarterly and annual tasks.' },
  },
  {
    slug: 'warranty-information',
    title: 'Warranty Information',
    titleAr: 'معلومات الضمان',
    description: 'Details about Shakeel Marine warranty coverage for marine upholstery and cover products.',
    descriptionAr: 'تفاصيل تغطية ضمان شيقيل مارين لمنتجات التأثيث البحري والغطاءات.',
    content: `
      <h3>What Is Covered</h3>
      <p>All Shakeel Marine upholstery and cover products come with a warranty covering manufacturing defects, material failures and stitching issues under normal marine use conditions.</p>
      <h3>Warranty Period</h3>
      <p>Standard warranty covers 12 months from the date of installation. Premium products may include extended warranty. Contact us for specific product warranty details.</p>
      <h3>What Is Not Covered</h3>
      <p>Damage from accidents, improper use, unauthorized modifications, extreme weather events or normal wear and tear beyond the warranty period is not covered.</p>
      <h3>Warranty Claims</h3>
      <p>To make a warranty claim, contact us with your original receipt, photos of the issue and a description of the problem. We will assess and respond within 48 hours.</p>
    `,
    category: 'support',
    seo: { title: 'Warranty Information | Shakeel Marine', description: 'Shakeel Marine warranty details for marine upholstery and cover products.' },
  },
  {
    slug: 'shipping-installation-process',
    title: 'Shipping & Installation Process',
    titleAr: 'عملية الشحن والتركيب',
    description: 'How our marine upholstery products are delivered and professionally installed at your location.',
    descriptionAr: 'كيف يتم توصيل منتجات التأثيث البحري وتركيبها احترافياً في موقعك.',
    content: `
      <h3>Step 1: Consultation</h3>
      <p>Contact us with your requirements. We discuss your project, take measurements (on-site or remotely) and provide a detailed quote.</p>
      <h3>Step 2: Design & Fabrication</h3>
      <p>Once approved, we create your custom product. Fabrication typically takes 3-7 business days depending on complexity. You will receive progress updates.</p>
      <h3>Step 3: Delivery & Installation</h3>
      <p>We deliver to your location in Kuwait. Professional installation is included with all products. Our team ensures perfect fit and finish.</p>
      <h3>Step 4: Quality Check</h3>
      <p>After installation, we perform a thorough quality check. We explain care instructions and answer any questions. Your satisfaction is guaranteed.</p>
    `,
    category: 'support',
    seo: { title: 'Shipping & Installation Process | Shakeel Marine', description: 'How Shakeel Marine delivers and installs marine upholstery products in Kuwait.' },
  },
];

export function getResourceBySlug(slug: string): Resource | undefined {
  return resources.find((r) => r.slug === slug);
}

export const resourceCategories = [
  { value: 'all', label: 'All Resources' },
  { value: 'materials', label: 'Materials' },
  { value: 'design', label: 'Design' },
  { value: 'reference', label: 'Reference' },
  { value: 'maintenance', label: 'Maintenance' },
  { value: 'support', label: 'Support' },
];
