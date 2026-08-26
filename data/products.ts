export interface Product {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  longDescription?: string;
  features: { title: string; desc: string }[];
  specs?: { label: string; value: string }[];
  gallery?: { src: string; alt: string }[];
  images: { src: string; alt: string }[];
  relatedService?: string;
  relatedServiceSlug?: string;
  whatsappMessage: string;
  seo: {
    title: string;
    description: string;
  };
}

export const products: Product[] = [
  {
    slug: 'super-jet-floor-mat-kit',
    name: 'Super Jet Floor Mat Kit',
    tagline: 'Precision-cut marine floor mats for your jet ski.',
    description:
      'The Super Jet Floor Mat Kit is designed to protect and enhance your jet ski floor. Each mat is precision-cut from marine-grade materials, offering superior grip, water resistance and UV protection. Custom fitted to your specific jet ski model for a flawless finish.',
    features: [
      { title: 'Custom Fit', desc: 'Precision-cut to match your specific jet ski model dimensions.' },
      { title: 'Marine-Grade Material', desc: 'Durable, water-resistant material built for marine environments.' },
      { title: 'Non-Slip Surface', desc: 'Textured surface provides secure footing even when wet.' },
      { title: 'UV Resistant', desc: 'Designed to withstand prolonged sun exposure without fading.' },
      { title: 'Easy Installation', desc: 'Simple peel-and-stick application with professional finish.' },
      { title: 'Clean Finish', desc: 'Professional edges and finishing for a factory-look result.' },
    ],
    images: [
      { src: '/images/super-jet-floor-mat/jetkeifloorcover1.jpg', alt: 'Super Jet Floor Mat Kit — full view' },
      { src: '/images/super-jet-floor-mat/jetkeifloorcover2.jpg', alt: 'Super Jet Floor Mat Kit — detail' },
      { src: '/images/super-jet-floor-mat/jetkeifloorcover3.jpg', alt: 'Super Jet Floor Mat Kit — installation' },
      { src: '/images/super-jet-floor-mat/jetkeifloorcover4.jpg', alt: 'Super Jet Floor Mat Kit — finish' },
      { src: '/images/super-jet-floor-mat/jetkeifloorcover5.jpg', alt: 'Super Jet Floor Mat Kit — grip surface' },
      { src: '/images/super-jet-floor-mat/jetkeifloorcover6.jpg', alt: 'Super Jet Floor Mat Kit — custom fit' },
    ],
    whatsappMessage: 'Hello Shakeel Marine, I am interested in the Super Jet Floor Mat Kit. I would like to request a quote.',
    seo: {
      title: 'Super Jet Floor Mat Kit in Kuwait | Shakeel Marine',
      description: 'Custom Super Jet Floor Mat Kit in Kuwait. Precision-cut, marine-grade, non-slip floor mats for jet skis. Professional installation by Shakeel Marine.',
    },
  },
  {
    slug: 'jetski-custom-seats',
    name: 'Jet Ski Custom Seats',
    tagline: 'Custom-designed seats crafted for your jet ski.',
    description:
      'Shakeel Marine crafts custom jet ski seats with precision fit and premium marine materials. Each seat is designed to match your style with professional stitching, color selection and flawless installation. Choose from a wide range of colors and finishes.',
    features: [
      { title: 'Custom Design', desc: 'Choose your colors, stitching patterns and finishing style.' },
      { title: 'Precise Fit', desc: 'Measured and cut to fit your specific jet ski model.' },
      { title: 'Premium Materials', desc: 'Marine-grade vinyl and fabrics for durability and comfort.' },
      { title: 'UV & Water Resistant', desc: 'Materials designed to withstand marine sun and water.' },
      { title: 'Professional Stitching', desc: 'Clean, consistent stitching with marine-suitable thread.' },
      { title: 'Expert Installation', desc: 'Professional fitting and finishing by our experienced team.' },
    ],
    images: [
      { src: '/images/jetski-custom-seat/jetski custom seat1.jpg', alt: 'Jet Ski Custom Seat — design' },
      { src: '/images/jetski-custom-seat/jetski custom seat2.jpg', alt: 'Jet Ski Custom Seat — stitching' },
      { src: '/images/jetski-custom-seat/jetski custom seat3.jpg', alt: 'Jet Ski Custom Seat — fitting' },
      { src: '/images/jetski-custom-seat/jetski custom seat4.jpg', alt: 'Jet Ski Custom Seat — colors' },
      { src: '/images/jetski-custom-seat/jetski custom seat5.jpg', alt: 'Jet Ski Custom Seat — detail' },
      { src: '/images/jetski-custom-seat/jetski custom seat6.jpg', alt: 'Jet Ski Custom Seat — finish' },
    ],
    whatsappMessage: 'Hello Shakeel Marine, I am interested in Jet Ski Custom Seats. I would like to request a quote.',
    seo: {
      title: 'Jet Ski Custom Seats in Kuwait | Shakeel Marine',
      description: 'Custom jet ski seats in Kuwait. Premium materials, custom colors and professional installation by Shakeel Marine.',
    },
  },
  {
    slug: 'jet-ski-seat-covers',
    name: 'Jet Ski Seat Covers',
    tagline: 'Protective covers designed to keep your jet ski seats in perfect condition.',
    description:
      'Our jet ski seat covers are crafted from heavy-duty marine vinyl to shield your seats from UV rays, salt water and everyday wear. Each cover is tailored for a snug fit that prevents slipping and bunching while riding. Available in multiple colors and finishes to match your personal style.',
    features: [
      { title: 'Tailored Fit', desc: 'Cut and sewn to match the exact contours of your jet ski seat.' },
      { title: 'UV Protection', desc: 'Shields seats from sun damage, cracking and fading over time.' },
      { title: 'Water Repellent', desc: 'Marine-grade material repels water to keep seats dry underneath.' },
      { title: 'Durable Stitching', desc: 'Reinforced seams with UV-resistant thread for long-lasting hold.' },
      { title: 'Easy On/Off', desc: 'Elastic hems and quick-release straps for fast installation and removal.' },
      { title: 'Color Options', desc: 'Wide selection of colors to match or upgrade your jet ski look.' },
    ],
    images: [
      { src: '/images/gallery/cover-06.jpg', alt: 'Jet Ski Seat Cover — front view' },
      { src: '/images/gallery/cover-13.jpg', alt: 'Jet Ski Seat Cover — side detail' },
      { src: '/images/gallery/cover-21.jpg', alt: 'Jet Ski Seat Cover — color options' },
      { src: '/images/gallery/cover-29.jpg', alt: 'Jet Ski Seat Cover — fitted on jet ski' },
    ],
    whatsappMessage: 'Hello Shakeel Marine, I am interested in Jet Ski Seat Covers. I would like to request a quote.',
    seo: {
      title: 'Jet Ski Seat Covers in Kuwait | Shakeel Marine',
      description: 'Premium jet ski seat covers in Kuwait. UV-resistant, water-repellent and custom-fitted covers by Shakeel Marine.',
    },
  },
  {
    slug: 'jet-ski-storage-covers',
    name: 'Jet Ski Storage Covers',
    tagline: 'All-weather storage covers to protect your jet ski during off-season.',
    description:
      'Keep your jet ski safe from dust, rain and sun damage with our custom-fit storage covers. Made from tear-resistant marine fabric with reinforced seams, these covers provide full protection whether stored indoors or outdoors. Breathable material prevents moisture build-up and mildew growth.',
    features: [
      { title: 'Custom Fit', desc: 'Designed to fit your specific jet ski model with precision.' },
      { title: 'Tear-Resistant', desc: 'Heavy-duty marine fabric resists tears and punctures.' },
      { title: 'Breathable Fabric', desc: 'Allows air circulation to prevent mold and mildew growth.' },
      { title: 'UV Shield', desc: 'Blocks harmful UV rays to prevent color fading and material degradation.' },
      { title: 'Secure Fastening', desc: 'Adjustable drawstrings and tie-down straps keep cover in place.' },
      { title: 'Compact Storage', desc: 'Folds down small with a built-in storage pouch for easy carrying.' },
    ],
    images: [
      { src: '/images/gallery/cover-08.jpg', alt: 'Jet Ski Storage Cover — full coverage' },
      { src: '/images/gallery/cover-11.jpg', alt: 'Jet Ski Storage Cover — detail' },
      { src: '/images/gallery/cover-16.jpg', alt: 'Jet Ski Storage Cover — secure fit' },
      { src: '/images/gallery/cover-20.jpg', alt: 'Jet Ski Storage Cover — folded' },
    ],
    whatsappMessage: 'Hello Shakeel Marine, I am interested in Jet Ski Storage Covers. I would like to request a quote.',
    seo: {
      title: 'Jet Ski Storage Covers in Kuwait | Shakeel Marine',
      description: 'Custom-fit jet ski storage covers in Kuwait. UV-resistant, breathable and tear-resistant covers by Shakeel Marine.',
    },
  },
  {
    slug: 'jet-ski-bimini-tops',
    name: 'Jet Ski Bimini Tops',
    tagline: 'Sunshade tops engineered for jet ski riders who demand comfort on the water.',
    description:
      'Our jet ski bimini tops provide reliable shade and rain protection without compromising performance. The lightweight aluminum frame and marine-grade canvas canopy are built to handle high-speed rides and harsh marine conditions. Quick-deploy design lets you set up or fold down in seconds.',
    features: [
      { title: 'Lightweight Frame', desc: 'Aircraft-grade aluminum frame for strength without extra weight.' },
      { title: 'Marine Canvas', desc: 'Sunbrella-grade fabric resists fading, mildew and water penetration.' },
      { title: 'Quick Deploy', desc: 'Folds open and collapses in seconds with a simple locking mechanism.' },
      { title: 'UV Block', desc: 'Provides UPF 50+ sun protection for hours of comfortable riding.' },
      { title: 'Aerodynamic Design', desc: 'Streamlined shape reduces drag at high speeds on the water.' },
      { title: 'Universal Mount', desc: 'Compatible with most jet ski models with adjustable mounting hardware.' },
    ],
    images: [
      { src: '/images/gallery/cover-03.jpg', alt: 'Jet Ski Bimini Top — deployed' },
      { src: '/images/gallery/cover-12.jpg', alt: 'Jet Ski Bimini Top — frame detail' },
      { src: '/images/gallery/cover-22.jpg', alt: 'Jet Ski Bimini Top — folded position' },
    ],
    whatsappMessage: 'Hello Shakeel Marine, I am interested in Jet Ski Bimini Tops. I would like to request a quote.',
    seo: {
      title: 'Jet Ski Bimini Tops in Kuwait | Shakeel Marine',
      description: 'Custom jet ski bimini tops in Kuwait. Lightweight aluminum frame and marine-grade canvas for sun and rain protection by Shakeel Marine.',
    },
  },
  {
    slug: 'boat-captain-seats',
    name: 'Boat Captain Seats',
    tagline: 'Ergonomic captain seats engineered for all-day comfort on the water.',
    description:
      'Our boat captain seats combine ergonomic design with marine-grade construction to deliver comfort during long hours at the helm. Each seat features adjustable positioning, premium cushioning and durable upholstery built to withstand sun, salt and water exposure. Custom colors and stitching patterns available.',
    features: [
      { title: 'Ergonomic Support', desc: 'Contoured design supports your back and posture on long trips.' },
      { title: 'Adjustable Positioning', desc: 'Slide, swivel and height adjustments for perfect helm positioning.' },
      { title: 'Marine Upholstery', desc: 'UV-resistant, mildew-proof vinyl in a wide range of colors.' },
      { title: 'Shock Absorption', desc: 'High-density foam cushions reduce impact from rough water.' },
      { title: 'Reinforced Frame', desc: 'Welded aluminum frame built for marine-grade durability.' },
      { title: 'Custom Stitching', desc: 'Choose contrast stitching and embroidery patterns to match your boat.' },
    ],
    images: [
      { src: '/images/gallery/cover-02.jpg', alt: 'Boat Captain Seat — front view' },
      { src: '/images/gallery/cover-05.jpg', alt: 'Boat Captain Seat — stitching detail' },
      { src: '/images/gallery/cover-09.jpg', alt: 'Boat Captain Seat — installed on boat' },
      { src: '/images/gallery/cover-14.jpg', alt: 'Boat Captain Seat — side profile' },
    ],
    whatsappMessage: 'Hello Shakeel Marine, I am interested in Boat Captain Seats. I would like to request a quote.',
    seo: {
      title: 'Boat Captain Seats in Kuwait | Shakeel Marine',
      description: 'Custom boat captain seats in Kuwait. Ergonomic, marine-grade upholstery with adjustable positioning by Shakeel Marine.',
    },
  },
  {
    slug: 'boat-passenger-seats',
    name: 'Boat Passenger Seats',
    tagline: 'Comfortable and durable seating for every passenger on board.',
    description:
      'Shakeel Marine builds boat passenger seats that deliver comfort, safety and style in one package. Each seat is constructed with marine-grade foam, waterproof vinyl and reinforced frames to handle the demands of saltwater environments. Available in bench, bucket and lounge configurations.',
    features: [
      { title: 'Comfort Foam', desc: 'High-density marine foam retains shape and provides all-day comfort.' },
      { title: 'Waterproof Vinyl', desc: 'Non-porous surface repels water and resists staining.' },
      { title: 'Reinforced Mounts', desc: 'Heavy-duty mounting hardware keeps seats secure in rough conditions.' },
      { title: 'UV Resistant', desc: 'Color-fast material resists fading under prolonged sun exposure.' },
      { title: 'Multiple Configs', desc: 'Available in bench, bucket and lounge seat configurations.' },
      { title: 'Easy Clean', desc: 'Smooth surface wipes clean with a damp cloth in seconds.' },
    ],
    images: [
      { src: '/images/gallery/cover-05.jpg', alt: 'Boat Passenger Seat — full view' },
      { src: '/images/gallery/cover-09.jpg', alt: 'Boat Passenger Seat — detail' },
      { src: '/images/gallery/cover-17.jpg', alt: 'Boat Passenger Seat — installed' },
      { src: '/images/gallery/cover-23.jpg', alt: 'Boat Passenger Seat — color options' },
    ],
    whatsappMessage: 'Hello Shakeel Marine, I am interested in Boat Passenger Seats. I would like to request a quote.',
    seo: {
      title: 'Boat Passenger Seats in Kuwait | Shakeel Marine',
      description: 'Custom boat passenger seats in Kuwait. Marine-grade foam, waterproof vinyl and reinforced frames by Shakeel Marine.',
    },
  },
  {
    slug: 'boat-bench-seats',
    name: 'Boat Bench Seats',
    tagline: 'Spacious bench seating that maximizes comfort and seating capacity.',
    description:
      'Our boat bench seats are built to provide maximum seating without sacrificing comfort. Each bench is custom-measured for your boat and constructed with marine-grade materials that resist water, UV damage and mildew. Choose from a variety of upholstery colors and stitching designs to match your boat interior.',
    features: [
      { title: 'Space Efficient', desc: 'Maximizes seating capacity with a sleek, compact profile.' },
      { title: 'Custom Dimensions', desc: 'Measured and cut to fit your exact boat specifications.' },
      { title: 'Marine Foam Core', desc: 'Closed-cell foam resists water absorption and maintains shape.' },
      { title: 'Mildew Resistant', desc: 'Anti-microbial treatment prevents mold and mildew growth.' },
      { title: 'Color Selection', desc: 'Wide range of marine vinyl colors to match your style.' },
      { title: 'Storage Options', desc: 'Available with under-seat storage compartments for extra gear.' },
    ],
    images: [
      { src: '/images/gallery/cover-02.jpg', alt: 'Boat Bench Seat — full view' },
      { src: '/images/gallery/cover-14.jpg', alt: 'Boat Bench Seat — stitching detail' },
      { src: '/images/gallery/cover-18.jpg', alt: 'Boat Bench Seat — installed' },
      { src: '/images/gallery/cover-26.jpg', alt: 'Boat Bench Seat — under-seat storage' },
    ],
    whatsappMessage: 'Hello Shakeel Marine, I am interested in Boat Bench Seats. I would like to request a quote.',
    seo: {
      title: 'Boat Bench Seats in Kuwait | Shakeel Marine',
      description: 'Custom boat bench seats in Kuwait. Space-efficient design with marine-grade foam and waterproof upholstery by Shakeel Marine.',
    },
  },
  {
    slug: 'boat-storage-covers',
    name: 'Boat Storage Covers',
    tagline: 'Full-protection storage covers to keep your boat safe during downtime.',
    description:
      'Our boat storage covers are designed to protect your vessel from the elements when it is not in use. Made from heavy-duty marine fabric with reinforced stress points, these covers shield your boat from rain, dust, UV rays and debris. Custom tailoring ensures a snug, secure fit for every boat model.',
    features: [
      { title: 'Custom Tailored', desc: 'Cut to match your exact boat dimensions for a secure fit.' },
      { title: 'Heavy-Duty Fabric', desc: 'Tear-resistant marine canvas withstands harsh weather conditions.' },
      { title: 'Reinforced Seams', desc: 'Double-stitched seams at stress points prevent splitting.' },
      { title: 'Ventilation Panels', desc: 'Built-in vents reduce moisture build-up inside the cover.' },
      { title: 'UV Protection', desc: 'Blocks harmful rays to protect gelcoat and upholstery underneath.' },
      { title: 'Tie-Down System', desc: 'Integrated straps and buckles keep the cover secure in wind.' },
    ],
    images: [
      { src: '/images/gallery/cover-01.jpg', alt: 'Boat Storage Cover — full coverage' },
      { src: '/images/gallery/cover-03.jpg', alt: 'Boat Storage Cover — detail' },
      { src: '/images/gallery/cover-04.jpg', alt: 'Boat Storage Cover — secured' },
      { src: '/images/gallery/cover-10.jpg', alt: 'Boat Storage Cover — folded' },
    ],
    whatsappMessage: 'Hello Shakeel Marine, I am interested in Boat Storage Covers. I would like to request a quote.',
    seo: {
      title: 'Boat Storage Covers in Kuwait | Shakeel Marine',
      description: 'Custom boat storage covers in Kuwait. Heavy-duty marine fabric with reinforced seams and ventilation by Shakeel Marine.',
    },
  },
  {
    slug: 'boat-bimini-tops',
    name: 'Boat Bimini Tops',
    tagline: 'Premium bimini tops that deliver shade and style for any boat.',
    description:
      'Shakeel Marine installs boat bimini tops that provide reliable shade without compromising the look of your vessel. Each top features a corrosion-resistant aluminum frame and marine-grade canvas that handles sun, rain and wind. Available in multiple sizes and colors to fit any boat configuration.',
    features: [
      { title: 'Corrosion-Resistant Frame', desc: 'Anodized aluminum frame withstands saltwater environments.' },
      { title: 'Marine-Grade Canvas', desc: 'Sunbrella fabric resists fading, water and mildew.' },
      { title: 'Multiple Sizes', desc: 'Available in 2-bow, 3-bow and 4-bow configurations.' },
      { title: 'Quick Release', desc: 'Hardware allows fast deployment and easy storage when not needed.' },
      { title: 'Color Matched', desc: 'Choose from a wide palette to match your boat interior.' },
      { title: 'Wind Tested', desc: 'Engineered to stay stable at cruising speeds and light chop.' },
    ],
    images: [
      { src: '/images/gallery/cover-03.jpg', alt: 'Boat Bimini Top — deployed' },
      { src: '/images/gallery/cover-08.jpg', alt: 'Boat Bimini Top — frame detail' },
      { src: '/images/gallery/cover-12.jpg', alt: 'Boat Bimini Top — on boat' },
      { src: '/images/gallery/cover-20.jpg', alt: 'Boat Bimini Top — folded' },
    ],
    whatsappMessage: 'Hello Shakeel Marine, I am interested in Boat Bimini Tops. I would like to request a quote.',
    seo: {
      title: 'Boat Bimini Tops in Kuwait | Shakeel Marine',
      description: 'Premium boat bimini tops in Kuwait. Corrosion-resistant aluminum frames and marine-grade canvas by Shakeel Marine.',
    },
  },
  {
    slug: 'ship-custom-seating',
    name: 'Ship Custom Seating',
    tagline: 'Bespoke seating solutions designed for luxury yachts and commercial vessels.',
    description:
      'Shakeel Marine designs and installs custom seating for ships, yachts and commercial vessels. Our seating solutions are built with fire-retardant marine foam, premium upholstery and structural frames that meet maritime safety standards. From wheelhouse chairs to lounge seating, we deliver comfort that endures.',
    features: [
      { title: 'Maritime Certified', desc: 'Materials meet IMO and maritime safety fire-retardant standards.' },
      { title: 'Structural Frames', desc: 'Welded steel or aluminum frames designed for vessel movement.' },
      { title: 'Premium Upholstery', desc: 'Fire-retardant vinyl and leather options in luxury finishes.' },
      { title: 'Ergonomic Design', desc: 'Contoured support for long hours of seated operation.' },
      { title: 'Custom Branding', desc: 'Embroidered logos, monograms and custom color schemes available.' },
      { title: 'Weather Endurance', desc: 'Built to withstand constant exposure to salt, sun and humidity.' },
    ],
    images: [
      { src: '/images/gallery/cover-09.jpg', alt: 'Ship Custom Seating — front view' },
      { src: '/images/gallery/cover-14.jpg', alt: 'Ship Custom Seating — detail' },
      { src: '/images/gallery/cover-18.jpg', alt: 'Ship Custom Seating — installed' },
      { src: '/images/gallery/cover-26.jpg', alt: 'Ship Custom Seating — logo embroidery' },
    ],
    whatsappMessage: 'Hello Shakeel Marine, I am interested in Ship Custom Seating. I would like to request a quote.',
    seo: {
      title: 'Ship Custom Seating in Kuwait | Shakeel Marine',
      description: 'Bespoke ship and yacht seating in Kuwait. Maritime-certified materials, fire-retardant foam and custom branding by Shakeel Marine.',
    },
  },
  {
    slug: 'canopy-covers',
    name: 'Canopy Covers',
    tagline: 'Custom canopy covers for boats, patios and marine outdoor spaces.',
    description:
      'Our canopy covers are fabricated from heavy-duty marine canvas to provide shade and rain protection for boats, docks and outdoor living areas. Each cover is custom-made to fit your structure precisely with reinforced edges and secure fastening systems. Available in a variety of colors and fabric grades.',
    features: [
      { title: 'Custom Cut', desc: 'Tailored to the exact dimensions of your canopy or structure.' },
      { title: 'Marine Canvas', desc: 'Heavy-duty fabric rated for outdoor and marine environments.' },
      { title: 'Reinforced Edges', desc: 'Binding and grommets at all edges for tear resistance.' },
      { title: 'Waterproof', desc: 'Sealed seams prevent water from passing through the fabric.' },
      { title: 'UV Block', desc: 'Provides full-spectrum UV protection for shaded areas below.' },
      { title: 'Secure Fastening', desc: 'Snap, clip or lace options to keep the cover tight in wind.' },
    ],
    images: [
      { src: '/images/gallery/cover-01.jpg', alt: 'Canopy Cover — full view' },
      { src: '/images/gallery/cover-03.jpg', alt: 'Canopy Cover — edge detail' },
      { src: '/images/gallery/cover-04.jpg', alt: 'Canopy Cover — fastening system' },
      { src: '/images/gallery/cover-08.jpg', alt: 'Canopy Cover — installed on structure' },
    ],
    whatsappMessage: 'Hello Shakeel Marine, I am interested in Canopy Covers. I would like to request a quote.',
    seo: {
      title: 'Canopy Covers in Kuwait | Shakeel Marine',
      description: 'Custom marine canopy covers in Kuwait. Heavy-duty canvas, waterproof seams and UV protection by Shakeel Marine.',
    },
  },
  {
    slug: 'marine-upholstery-fabric',
    name: 'Marine Upholstery Fabric',
    tagline: 'Premium upholstery fabrics engineered for the harshest marine conditions.',
    description:
      'We supply and install marine-grade upholstery fabrics that are built to endure saltwater, UV radiation and heavy use. Our fabric selection includes vinyl, leatherette and solution-dyed acrylic options in dozens of colors and textures. Perfect for seats, cushions, headliners and interior panels.',
    features: [
      { title: 'UV Stable', desc: 'Solution-dyed fibers lock in color and resist sun fading.' },
      { title: 'Mold & Mildew Proof', desc: 'Anti-microbial treatment prevents biological growth on fabric.' },
      { title: 'Abrasion Resistant', desc: 'Rated for 100,000+ double rubs for heavy-use applications.' },
      { title: 'Water Repellent', desc: 'Non-porous surface causes water to bead and roll off.' },
      { title: 'Fire Retardant', desc: 'Meets marine fire-safety standards for passenger vessels.' },
      { title: 'Color Range', desc: 'Available in 50+ colors and textures to match any design.' },
    ],
    images: [
      { src: '/images/gallery/cover-07.jpg', alt: 'Marine Upholstery Fabric — color swatch' },
      { src: '/images/gallery/cover-15.jpg', alt: 'Marine Upholstery Fabric — texture detail' },
      { src: '/images/gallery/cover-19.jpg', alt: 'Marine Upholstery Fabric — application example' },
    ],
    whatsappMessage: 'Hello Shakeel Marine, I am interested in Marine Upholstery Fabric. I would like to request a quote.',
    seo: {
      title: 'Marine Upholstery Fabric in Kuwait | Shakeel Marine',
      description: 'Premium marine upholstery fabrics in Kuwait. UV-stable, mold-proof and fire-retardant materials by Shakeel Marine.',
    },
  },
  {
    slug: 'jet-ski-grip-mats',
    name: 'Jet Ski Grip Mats',
    tagline: 'High-traction grip mats that keep you planted on your jet ski.',
    description:
      'Our jet ski grip mats provide maximum traction and cushioning for riders who demand performance. Each mat is die-cut from EVA foam with a textured surface that grips even when fully wet. Custom shapes and colors available to match your jet ski design.',
    features: [
      { title: 'EVA Foam Core', desc: 'Closed-cell foam provides cushioning without absorbing water.' },
      { title: 'Wet Grip', desc: 'Textured surface maintains traction even when fully submerged.' },
      { title: 'Custom Cut', desc: 'Die-cut to match your jet ski model for a perfect fit.' },
      { title: 'Shock Absorbing', desc: 'Reduces fatigue and impact during long rides in choppy water.' },
      { title: 'Color Options', desc: 'Available in multiple colors to match or accent your jet ski.' },
      { title: 'Peel & Stick', desc: 'Self-adhesive backing bonds securely to fiberglass surfaces.' },
    ],
    images: [
      { src: '/images/super-jet-floor-mat/jetkeifloorcover7.jpg', alt: 'Jet Ski Grip Mat — surface texture' },
      { src: '/images/super-jet-floor-mat/jetkeifloorcover12.jpg', alt: 'Jet Ski Grip Mat — fitted on jet ski' },
      { src: '/images/super-jet-floor-mat/jetkeifloorcover17.jpg', alt: 'Jet Ski Grip Mat — detail view' },
    ],
    whatsappMessage: 'Hello Shakeel Marine, I am interested in Jet Ski Grip Mats. I would like to request a quote.',
    seo: {
      title: 'Jet Ski Grip Mats in Kuwait | Shakeel Marine',
      description: 'Custom jet ski grip mats in Kuwait. EVA foam, wet-grip texture and custom die-cut designs by Shakeel Marine.',
    },
  },
  {
    slug: 'boat-interior-kits',
    name: 'Boat Interior Kits',
    tagline: 'Complete interior kits that transform the look and feel of your boat.',
    description:
      'Shakeel Marine offers full boat interior kits that include seat upholstery, side panels, headliners and trim pieces in one coordinated package. Each kit is custom-designed using marine-grade materials that resist water, UV damage and mildew. Choose your colors, textures and stitching for a completely personalized interior.',
    features: [
      { title: 'Complete Kit', desc: 'Includes seats, panels, headliner and trim in one package.' },
      { title: 'Color Coordinated', desc: 'All pieces matched for a cohesive, professional interior look.' },
      { title: 'Marine Materials', desc: 'Every component built with UV-resistant, waterproof fabrics.' },
      { title: 'Custom Design', desc: 'Choose colors, stitching patterns and material textures.' },
      { title: 'Professional Install', desc: 'Our team handles full removal and installation for you.' },
      { title: 'Increased Value', desc: 'A refreshed interior significantly boosts your boat resale value.' },
    ],
    images: [
      { src: '/images/gallery/cover-02.jpg', alt: 'Boat Interior Kit — full interior' },
      { src: '/images/gallery/cover-05.jpg', alt: 'Boat Interior Kit — seat detail' },
      { src: '/images/gallery/cover-15.jpg', alt: 'Boat Interior Kit — panel and trim' },
      { src: '/images/gallery/cover-19.jpg', alt: 'Boat Interior Kit — headliner' },
    ],
    whatsappMessage: 'Hello Shakeel Marine, I am interested in Boat Interior Kits. I would like to request a quote.',
    seo: {
      title: 'Boat Interior Kits in Kuwait | Shakeel Marine',
      description: 'Complete custom boat interior kits in Kuwait. Seats, panels, headliners and trim in coordinated marine-grade materials by Shakeel Marine.',
    },
  },
  {
    slug: 'custom-marine-pillows',
    name: 'Custom Marine Pillows',
    tagline: 'Plush, water-resistant pillows crafted for boat and yacht lounges.',
    description:
      'Our custom marine pillows bring comfort and style to any boat cabin, deck or lounge area. Each pillow is stuffed with quick-dry foam and wrapped in marine-grade fabric that resists moisture, mildew and UV damage. Available in any size, shape and color to match your interior design.',
    features: [
      { title: 'Quick-Dry Foam', desc: 'Specialized filling dries fast and resists water absorption.' },
      { title: 'Marine Fabric', desc: 'Outer covers made from waterproof, UV-resistant marine vinyl.' },
      { title: 'Custom Shapes', desc: 'Square, rectangular, round and bolsters in any size you need.' },
      { title: 'Mildew Resistant', desc: 'Anti-microbial treatment prevents mold growth in humid conditions.' },
      { title: 'Zippered Covers', desc: 'Removable covers for easy washing and seasonal color changes.' },
      { title: 'Color Match', desc: 'Fabrics chosen to match or complement your existing interior.' },
    ],
    images: [
      { src: '/images/gallery/cover-07.jpg', alt: 'Custom Marine Pillow — front view' },
      { src: '/images/gallery/cover-15.jpg', alt: 'Custom Marine Pillow — texture detail' },
      { src: '/images/gallery/cover-19.jpg', alt: 'Custom Marine Pillow — in boat lounge' },
    ],
    whatsappMessage: 'Hello Shakeel Marine, I am interested in Custom Marine Pillows. I would like to request a quote.',
    seo: {
      title: 'Custom Marine Pillows in Kuwait | Shakeel Marine',
      description: 'Custom marine pillows in Kuwait. Quick-dry foam, waterproof covers and custom shapes by Shakeel Marine.',
    },
  },
  {
    slug: 'marine-embroidery-designs',
    name: 'Marine Embroidery Designs',
    tagline: 'Custom embroidery that adds a personal touch to your marine upholstery.',
    description:
      'Shakeel Marine offers precision embroidery services for all marine upholstery projects. From logos and monograms to custom artwork, our computer-controlled machines deliver crisp, durable designs in marine-grade thread. Add a personal identity to seats, cushions, covers and panels.',
    features: [
      { title: 'Computer-Controlled', desc: 'CNC embroidery machines ensure precision and consistency.' },
      { title: 'Marine Thread', desc: 'UV-stable, rot-resistant thread designed for marine use.' },
      { title: 'Custom Logos', desc: 'We embroider your brand, name or custom artwork on any fabric.' },
      { title: 'High Detail', desc: 'Fine stitching captures intricate designs with sharp clarity.' },
      { title: 'Durable Finish', desc: 'Reinforced backing prevents fraying and unraveling over time.' },
      { title: 'Any Surface', desc: 'Seats, cushions, covers, hats and more can be embroidered.' },
    ],
    images: [
      { src: '/images/gallery/cover-07.jpg', alt: 'Marine Embroidery — logo sample' },
      { src: '/images/gallery/cover-19.jpg', alt: 'Marine Embroidery — detail close-up' },
      { src: '/images/gallery/cover-23.jpg', alt: 'Marine Embroidery — on seat' },
    ],
    whatsappMessage: 'Hello Shakeel Marine, I am interested in Marine Embroidery Designs. I would like to request a quote.',
    seo: {
      title: 'Marine Embroidery Designs in Kuwait | Shakeel Marine',
      description: 'Custom marine embroidery in Kuwait. Computer-controlled precision, UV-stable thread and custom logo designs by Shakeel Marine.',
    },
  },
  {
    slug: 'ship-covers',
    name: 'Ship Covers',
    tagline: 'Heavy-duty custom ship covers engineered for full vessel protection.',
    description:
      'Shakeel Marine designs and fabricates custom ship covers that protect your vessel from sun, salt, rain and debris during storage and docking. Each cover is precision-measured for your specific ship model and constructed from industrial-grade marine canvas with reinforced stress points.',
    longDescription:
      'Our ship covers are the ultimate protection solution for yacht owners, commercial vessel operators and ship managers in Kuwait. Built from the heaviest marine-grade canvas available, these covers shield your entire vessel from the harsh Gulf climate — intense UV radiation, sandstorms, salt spray and occasional rain.\n\nEvery ship cover begins with a detailed measurement session where our team captures the exact dimensions of your vessel. We account for radar arches, masts, antennas, railings and any custom fittings. The result is a cover that fits like a second skin, preventing wind damage, water pooling and debris accumulation.\n\nOur covers feature double-stitched seams at all stress points, marine-grade webbing straps, adjustable buckles and integrated ventilation panels. The breathable design allows air circulation while keeping water out, preventing mold and mildew growth during extended storage periods.\n\nWe offer covers in multiple fabric grades — from standard marine canvas for casual storage to heavy-duty expedition-grade material for vessels exposed to extreme conditions. Color options include classic navy, charcoal, tan and white to match your vessel\'s aesthetic.',
    features: [
      { title: 'Precision Measured', desc: 'Each cover is measured and cut to match your ship\'s exact dimensions including all fittings.' },
      { title: 'Industrial-Grade Canvas', desc: 'Heavy-duty marine canvas rated for extreme UV, salt and weather exposure.' },
      { title: 'Reinforced Stress Points', desc: 'Double-stitched seams and webbing reinforcement at all high-tension areas.' },
      { title: 'Breathable Design', desc: 'Integrated ventilation panels prevent moisture build-up and mildew growth.' },
      { title: 'Secure Fastening System', desc: 'Adjustable straps, buckles and drawstrings keep the cover tight in strong winds.' },
      { title: 'Custom Cutouts', desc: 'Precise openings for antennas, radar, masts and other vessel fittings.' },
      { title: 'UV & Sand Protection', desc: 'Blocks harmful rays and prevents sand abrasion on gelcoat and paint.' },
      { title: 'Easy Handling', desc: 'Lightweight design relative to coverage area for manageable installation and removal.' },
    ],
    specs: [
      { label: 'Material', value: 'Marine-grade canvas (16oz / 22oz options)' },
      { label: 'UV Resistance', value: 'UPF 50+ rating' },
      { label: 'Water Resistance', value: 'Sealed seams, waterproof coating' },
      { label: 'Breathability', value: 'Integrated vent panels' },
      { label: 'Seam Strength', value: 'Double-stitched, bonded nylon thread' },
      { label: 'Fastening', value: 'Adjustable straps with marine-grade buckles' },
      { label: 'Color Options', value: 'Navy, Charcoal, Tan, White, Custom' },
      { label: 'Warranty', value: '3-year fabric warranty' },
      { label: 'Installation', value: 'Professional measurement and fitting included' },
      { label: 'Delivery Time', value: '5-10 business days after measurement' },
    ],
    gallery: [
      { src: '/images/gallery/cover-01.jpg', alt: 'Ship Cover — full vessel protection' },
      { src: '/images/gallery/cover-03.jpg', alt: 'Ship Cover — seam detail' },
      { src: '/images/gallery/cover-04.jpg', alt: 'Ship Cover — fastening system' },
      { src: '/images/gallery/cover-08.jpg', alt: 'Ship Cover — ventilation panel' },
      { src: '/images/gallery/cover-10.jpg', alt: 'Ship Cover — custom cutout for antenna' },
      { src: '/images/gallery/cover-11.jpg', alt: 'Ship Cover — on yacht' },
      { src: '/images/gallery/cover-16.jpg', alt: 'Ship Cover — color options' },
      { src: '/images/gallery/cover-20.jpg', alt: 'Ship Cover — docked vessel' },
    ],
    images: [
      { src: '/images/gallery/cover-01.jpg', alt: 'Ship Cover — full view' },
      { src: '/images/gallery/cover-03.jpg', alt: 'Ship Cover — detail' },
      { src: '/images/gallery/cover-04.jpg', alt: 'Ship Cover — installed' },
      { src: '/images/gallery/cover-08.jpg', alt: 'Ship Cover — fastening' },
    ],
    relatedService: 'Canopy Covers',
    relatedServiceSlug: 'canopy-covers',
    whatsappMessage: 'Hello Shakeel Marine, I am interested in a custom Ship Cover for my vessel. I would like to request a quote.',
    seo: {
      title: 'Custom Ship Covers in Kuwait | Shakeel Marine',
      description: 'Custom ship covers in Kuwait. Heavy-duty marine canvas, precision-measured, reinforced seams and breathable design by Shakeel Marine.',
    },
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}
