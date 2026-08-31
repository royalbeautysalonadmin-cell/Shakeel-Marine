export type VehicleSlug = 'jet-ski' | 'yacht' | 'ship' | 'bike' | 'car';

export type ConfiguratorProduct =
  | 'jet-ski-seat'
  | 'super-jet-floor-mat-kit'
  | 'yacht-seats'
  | 'yacht-covers'
  | 'ship-seats'
  | 'ship-covers'
  | 'bike-seat'
  | 'car-seats';

export type ConfiguratorComponent = 'seat' | 'floor-mat' | 'cover';
export type CameraPreset = 'perspective' | 'front' | 'side' | 'rear' | 'top';

export interface ConfiguratorProductOption {
  id: ConfiguratorProduct;
  name: string;
  description: string;
  component: ConfiguratorComponent;
}

export interface VehicleDefinition {
  slug: VehicleSlug;
  name: string;
  shortDescription: string;
  description: string;
  image: string;
  accent: string;
  products: ConfiguratorProductOption[];
}

export interface ColorOption {
  id: string;
  label: string;
  hex: string;
}

export interface MaterialOption {
  id: string;
  label: string;
  description: string;
  roughness: number;
  metalness: number;
}

export interface DesignOption {
  id: string;
  label: string;
  description: string;
  pattern: 'plain' | 'stripe' | 'diamond' | 'carbon' | 'ribbed';
}

export interface VehicleConfiguration {
  vehicle: VehicleSlug;
  product: ConfiguratorProduct;
  mainColor: string;
  accentColor: string;
  customMainColor: string;
  customAccentColor: string;
  customStitchingColor: string;
  material: string;
  design: string;
  stitchingColor: string;
}

export const vehicles: VehicleDefinition[] = [
  {
    slug: 'jet-ski',
    name: 'Jet Ski',
    shortDescription: 'Seats, floor mats and personal watercraft details.',
    description: 'Design a custom jet ski seat or Super Jet Floor Mat Kit in a live 3D preview.',
    image: '/images/projects/super-jet-floor-mat-kit/floor-mat-01.jpeg',
    accent: '#20b8d4',
    products: [
      {
        id: 'jet-ski-seat',
        name: 'Jet Ski Seat',
        description: 'Customize the seat shell, piping and stitching.',
        component: 'seat',
      },
      {
        id: 'super-jet-floor-mat-kit',
        name: 'SUPER JET FLOOR MAT KIT',
        description: 'Design the non-slip floor area and side footwells.',
        component: 'floor-mat',
      },
    ],
  },
  {
    slug: 'yacht',
    name: 'Yacht',
    shortDescription: 'Luxury seating and protective covers for the open water.',
    description: 'Explore a refined yacht seating or cover concept before requesting a quote.',
    image: '/images/sections/boat-ship.jpg',
    accent: '#d3a85c',
    products: [
      { id: 'yacht-seats', name: 'Yacht Seats', description: 'Shape a comfortable, coordinated yacht interior.', component: 'seat' },
      { id: 'yacht-covers', name: 'Yacht Covers', description: 'Preview a tailored cover and canopy finish.', component: 'cover' },
    ],
  },
  {
    slug: 'ship',
    name: 'Ship',
    shortDescription: 'Durable seating and covers for commercial vessels.',
    description: 'Configure a practical ship seating or vessel cover direction in 3D.',
    image: '/images/sections/boat-ship.jpg',
    accent: '#8aa6b5',
    products: [
      { id: 'ship-seats', name: 'Ship Seats', description: 'Set the main upholstery, accents and stitching.', component: 'seat' },
      { id: 'ship-covers', name: 'Ship Covers', description: 'Preview a hard-wearing vessel cover finish.', component: 'cover' },
    ],
  },
  {
    slug: 'bike',
    name: 'Bike',
    shortDescription: 'A performance-inspired seat concept for your motorcycle.',
    description: 'Create a bold bike seat concept with custom color, texture and design.',
    image: '/images/sections/hero-ocean.jpg',
    accent: '#df5b4f',
    products: [
      { id: 'bike-seat', name: 'Bike Seat', description: 'Customize a sport motorcycle seat finish.', component: 'seat' },
    ],
  },
  {
    slug: 'car',
    name: 'Car',
    shortDescription: 'A premium interior seat concept for road vehicles.',
    description: 'Preview a custom automotive seat direction with coordinated details.',
    image: '/images/sections/hero-ocean.jpg',
    accent: '#b7a06b',
    products: [
      { id: 'car-seats', name: 'Car Seats', description: 'Design the main seat, side panels and accents.', component: 'seat' },
    ],
  },
];

export const colorOptions: ColorOption[] = [
  { id: 'black', label: 'Black', hex: '#111827' },
  { id: 'white', label: 'White', hex: '#f5f7f8' },
  { id: 'red', label: 'Red', hex: '#c2413a' },
  { id: 'blue', label: 'Blue', hex: '#1d6fa5' },
  { id: 'navy', label: 'Navy', hex: '#12344a' },
  { id: 'grey', label: 'Grey', hex: '#69727b' },
  { id: 'orange', label: 'Orange', hex: '#d97732' },
  { id: 'yellow', label: 'Yellow', hex: '#d5a72d' },
  { id: 'green', label: 'Green', hex: '#4d8a69' },
  { id: 'beige', label: 'Beige', hex: '#c7ad89' },
  { id: 'brown', label: 'Brown', hex: '#76513d' },
];

export const materialOptions: MaterialOption[] = [
  { id: 'marine-vinyl', label: 'Marine Vinyl', description: 'Durable and easy to maintain in marine conditions.', roughness: 0.72, metalness: 0.02 },
  { id: 'premium-vinyl', label: 'Premium Vinyl', description: 'A smoother finish with a subtle soft sheen.', roughness: 0.48, metalness: 0.03 },
  { id: 'carbon-style', label: 'Carbon Style', description: 'A technical woven appearance for sport designs.', roughness: 0.34, metalness: 0.2 },
  { id: 'leather-style', label: 'Leather Style', description: 'A refined low-sheen surface for luxury interiors.', roughness: 0.6, metalness: 0.03 },
  { id: 'textured-finish', label: 'Textured Finish', description: 'Extra visual texture for high-use areas.', roughness: 0.86, metalness: 0.01 },
];

export const designOptions: DesignOption[] = [
  { id: 'classic', label: 'Classic', description: 'Clean lines and a timeless finish.', pattern: 'plain' },
  { id: 'sport', label: 'Sport', description: 'Sharp accents with a performance feel.', pattern: 'stripe' },
  { id: 'racing', label: 'Racing', description: 'High-contrast stripes inspired by the track.', pattern: 'stripe' },
  { id: 'premium', label: 'Premium', description: 'Balanced panels with understated detail.', pattern: 'ribbed' },
  { id: 'diamond', label: 'Diamond', description: 'Geometric diamond texture for a tailored look.', pattern: 'diamond' },
  { id: 'carbon', label: 'Carbon', description: 'Technical layered texture with a modern finish.', pattern: 'carbon' },
  { id: 'two-tone', label: 'Two-Tone', description: 'Main and accent colors work as a matched pair.', pattern: 'plain' },
  { id: 'custom-stripe', label: 'Custom Stripe', description: 'A single bold accent line across the design.', pattern: 'stripe' },
];

export const cameraPresets: { id: CameraPreset; label: string }[] = [
  { id: 'perspective', label: 'Perspective' },
  { id: 'front', label: 'Front' },
  { id: 'side', label: 'Side' },
  { id: 'rear', label: 'Rear' },
  { id: 'top', label: 'Top' },
];

export function getVehicleBySlug(slug: string): VehicleDefinition | undefined {
  return vehicles.find((vehicle) => vehicle.slug === slug);
}

export function getDefaultConfiguration(vehicle: VehicleDefinition): VehicleConfiguration {
  return {
    vehicle: vehicle.slug,
    product: vehicle.products[0].id,
    mainColor: 'black',
    accentColor: 'red',
    customMainColor: '#111827',
    customAccentColor: '#c2413a',
    customStitchingColor: '#f5f7f8',
    material: 'marine-vinyl',
    design: 'classic',
    stitchingColor: 'white',
  };
}
