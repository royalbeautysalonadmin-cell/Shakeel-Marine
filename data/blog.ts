export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  category: 'jet-ski' | 'boat' | 'general' | 'tips';
  image: string;
  imageAlt: string;
  date: string;
  readTime: string;
  seo: {
    title: string;
    description: string;
  };
}

export const blogPosts: BlogPost[] = [
  {
    slug: 'how-to-choose-jet-ski-seat-cover',
    title: 'How to Choose the Right Jet Ski Seat Cover',
    excerpt: 'Choosing the right jet ski seat cover depends on material, fit and style. Here is what to consider before buying.',
    content: `
      <p>Choosing the right jet ski seat cover is essential for protecting your investment and ensuring a comfortable ride. Here are the key factors to consider:</p>
      <h3>Material Quality</h3>
      <p>Marine-grade vinyl is the gold standard for jet ski seat covers. It resists water, UV rays and daily wear. Avoid regular fabric covers that deteriorate quickly in marine environments.</p>
      <h3>Custom Fit vs Universal</h3>
      <p>A custom-fit cover is measured and cut for your specific jet ski model. This ensures a snug fit that won't flap in the wind or allow water to pool. Universal covers may seem cheaper but often need replacement sooner.</p>
      <h3>Color and Stitching</h3>
      <p>Choose colors that complement your jet ski's design. Marine-grade thread ensures your stitching holds up against sun and salt water. Custom stitching patterns can add a premium look.</p>
      <h3>Professional Installation</h3>
      <p>Even the best cover can look poor if not installed correctly. Professional installation ensures clean edges, proper tension and a factory-finish look.</p>
    `,
    category: 'jet-ski',
    image: '/images/jetski-custom-seat/jetski custom seat1.jpg',
    imageAlt: 'Jet ski seat cover guide',
    date: '2025-01-15',
    readTime: '4 min read',
    seo: {
      title: 'How to Choose a Jet Ski Seat Cover | Shakeel Marine Kuwait',
      description: 'Guide to choosing the right jet ski seat cover — materials, fit, colors and professional installation tips.',
    },
  },
  {
    slug: 'marine-upholstery-care-tips',
    title: 'Marine Upholstery Care: Tips to Make It Last',
    excerpt: 'Proper care extends the life of your marine upholstery. Learn cleaning, maintenance and protection tips.',
    content: `
      <p>Marine upholstery faces harsh conditions — sun, salt water, humidity and constant use. Here is how to keep it looking great for years:</p>
      <h3>Regular Cleaning</h3>
      <p>Rinse your upholstery with fresh water after each use to remove salt and debris. Use a mild soap solution for deeper cleaning. Avoid harsh chemicals that can damage marine-grade materials.</p>
      <h3>UV Protection</h3>
      <p>Apply UV-protectant spray designed for marine vinyl. This prevents fading, cracking and drying. Reapply every few weeks during peak summer months.</p>
      <h3>Proper Storage</h3>
      <p>When not in use, store your jet ski or boat under a cover. This protects upholstery from sun damage, bird droppings and environmental debris.</p>
      <h3>Address Damage Early</h3>
      <p>Small tears and loose stitching should be repaired immediately. Water seeping into damaged areas causes bigger problems. Professional repair ensures a lasting fix.</p>
    `,
    category: 'tips',
    image: '/images/super-jet-floor-mat/jetkeifloorcover5.jpg',
    imageAlt: 'Marine upholstery care tips',
    date: '2025-02-10',
    readTime: '5 min read',
    seo: {
      title: 'Marine Upholstery Care Tips | Shakeel Marine Kuwait',
      description: 'Learn how to care for marine upholstery — cleaning, UV protection, storage and repair tips.',
    },
  },
  {
    slug: 'boat-cover-benefits-kuwait',
    title: 'Why Every Boat in Kuwait Needs a Custom Cover',
    excerpt: 'Kuwait sun and sand are tough on boats. A custom cover is the best protection for your vessel.',
    content: `
      <p>Kuwait's climate is harsh on marine vessels. Intense sun, sandstorms and high humidity take a toll on exposed boats. A custom boat cover is not a luxury — it is a necessity.</p>
      <h3>Sun Protection</h3>
      <p>Kuwait receives intense UV radiation year-round. A custom cover protects your boat's interior, seats and dashboard from sun damage, fading and cracking.</p>
      <h3>Sand and Dust</h3>
      <p>Sandstorms are common in Kuwait. A fitted cover prevents sand from scratching surfaces and infiltrating mechanical components.</p>
      <h3>Moisture Control</h3>
      <p>Marine covers designed for the Gulf region allow airflow while keeping moisture out. This prevents mold and mildew growth.</p>
      <h3>Resale Value</h3>
      <p>A well-maintained boat retains its value. Custom covers are an investment in your vessel's longevity and resale price.</p>
    `,
    category: 'boat',
    image: '/images/before-after/boat-after-01.jpg',
    imageAlt: 'Boat cover benefits in Kuwait',
    date: '2025-03-05',
    readTime: '4 min read',
    seo: {
      title: 'Why Every Boat in Kuwait Needs a Custom Cover | Shakeel Marine',
      description: 'Discover why custom boat covers are essential in Kuwait — sun, sand and moisture protection.',
    },
  },
  {
    slug: 'canopy-cover-vs-bimini-top',
    title: 'Canopy Cover vs Bimini Top: Which Is Right for You?',
    excerpt: 'Both protect your boat from the elements, but they serve different purposes. Here is how to choose.',
    content: `
      <p>Boat owners often debate between canopy covers and bimini tops. Both offer protection, but they differ in coverage, installation and use cases.</p>
      <h3>Canopy Covers</h3>
      <p>Full canopy covers provide complete protection when the boat is docked or stored. They cover the entire vessel, shielding it from sun, rain and debris. Ideal for long-term storage.</p>
      <h3>Bimini Tops</h3>
      <p>Bimini tops provide shade while on the water. They are open on the sides and rear, allowing airflow while protecting passengers from direct sun. Perfect for day trips.</p>
      <h3>Combination Approach</h3>
      <p>Many boat owners use both — a bimini top for on-water shade and a full cover for storage. This provides maximum protection in all situations.</p>
      <h3>Choosing Based on Your Boat</h3>
      <p>The right choice depends on your boat type, usage patterns and storage conditions. Consult with a marine specialist for the best recommendation.</p>
    `,
    category: 'boat',
    image: '/images/before-after/canopy-after-01.jpg',
    imageAlt: 'Canopy cover vs bimini top comparison',
    date: '2025-04-12',
    readTime: '5 min read',
    seo: {
      title: 'Canopy Cover vs Bimini Top | Shakeel Marine Kuwait',
      description: 'Compare canopy covers and bimini tops — features, benefits and which is right for your boat.',
    },
  },
  {
    slug: 'signs-your-jet-ski-seat-needs-replacement',
    title: '5 Signs Your Jet Ski Seat Needs Replacement',
    excerpt: 'Faded color, tears, uncomfortable ride — these are signs your jet ski seat needs professional attention.',
    content: `
      <p>Your jet ski seat takes a beating from sun, water and use. Here are five signs it is time for a replacement:</p>
      <h3>1. Faded or Discolored Vinyl</h3>
      <p>UV exposure causes vinyl to fade and discolor. If your seat looks worn and washed out, it is time for new upholstery.</p>
      <h3>2. Tears and Cracks</h3>
      <p>Small tears quickly become big problems. Water seeps through cracks, damaging the foam underneath. Replace the cover before the foam deteriorates.</p>
      <h3>3. Foam Compression</h3>
      <p>If your seat feels flat or uncomfortable, the foam has compressed. New foam and a fresh cover restore comfort and support.</p>
      <h3>4. Loose or Peeling Material</h3>
      <p>Material that pulls away from the seat frame looks bad and reduces protection. Professional reupholstery ensures a tight, lasting fit.</p>
      <h3>5. Water Absorption</h3>
      <p>A seat that stays wet long after riding has lost its water resistance. Marine-grade vinyl repels water and dries quickly.</p>
    `,
    category: 'jet-ski',
    image: '/images/jetski-custom-seat/jetski custom seat3.jpg',
    imageAlt: 'Jet ski seat replacement signs',
    date: '2025-05-20',
    readTime: '4 min read',
    seo: {
      title: 'Signs Your Jet Ski Seat Needs Replacement | Shakeel Marine',
      description: '5 signs your jet ski seat needs replacement — fading, tears, foam compression and more.',
    },
  },
];

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}

export const blogCategories = [
  { value: 'all', label: 'All Posts' },
  { value: 'jet-ski', label: 'Jet Ski' },
  { value: 'boat', label: 'Boat & Ship' },
  { value: 'tips', label: 'Care Tips' },
  { value: 'general', label: 'General' },
];
