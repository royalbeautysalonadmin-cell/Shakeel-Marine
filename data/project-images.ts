export interface ProjectImage {
  src: string;
  alt: string;
}

const floorMatViews = [
  'Custom textured floor mat fitted across a jet ski footwell',
  'Close view of a fitted Super Jet floor mat around the jet ski deck',
  'Model-specific jet ski floor mat with finished edges and drain cutouts',
  'Non-slip floor mat covering the footwell and side panels of a jet ski',
  'Completed jet ski floor mat kit shown from the front',
  'Marine floor mat fitted around the jet ski console and rider area',
  'Textured jet ski floor protection installed around the side footwells',
  'Full coverage Super Jet floor mat kit shown on a personal watercraft',
  'Close-up of the textured surface on a custom jet ski floor mat',
  'Precision-cut floor mat following the contours of a jet ski deck',
  'Finished jet ski floor mat with clean edges around the hardware',
  'Custom non-slip mat fitted to the rear deck of a jet ski',
  'Marine-grade floor mat installed around a jet ski seat and footwell',
  'Side detail of a custom jet ski floor mat installation',
  'Full jet ski deck protected with a fitted Super Jet floor mat kit',
  'Textured floor mat aligned around a jet ski drain fitting',
  'Custom floor mat covering the rider standing area of a jet ski',
  'Finished floor mat kit photographed during workshop fitting',
  'Close view of the pattern and edge finish on a jet ski floor mat',
  'Jet ski footwell with a fitted, non-slip marine floor mat',
  'Custom floor mat following the curves of a personal watercraft deck',
  'Front view of a completed Super Jet floor mat installation',
  'Side view of a model-specific jet ski floor mat with textured grip',
  'Full deck view of a custom marine floor mat kit',
  'Jet ski floor mat fitted around the console, seat and side rails',
  'Detail of a cleanly finished edge on a custom jet ski floor mat',
  'Non-slip marine mat fitted to a jet ski for rider footing',
  'Completed Super Jet floor mat kit shown on a workshop stand',
  'Custom floor mat fitted to the front and side sections of a jet ski',
  'Close view of the grip pattern on a finished jet ski floor mat',
  'Fitted marine floor protection across a jet ski deck',
  'Model-specific floor mat with precise openings for jet ski fittings',
  'Completed jet ski floor mat photographed from an angled view',
  'Custom textured mat fitted to a jet ski footwell and sidewalls',
  'Super Jet floor mat kit installed with a clean, tailored finish',
  'Jet ski deck showing full coverage from the rear perspective',
  'Close-up of the non-slip texture used on a custom floor mat',
  'Custom floor mat installation shown around the jet ski seat base',
  'Marine floor mat fitted to a jet ski during final inspection',
  'Finished floor mat kit protecting the complete rider standing area',
  'Side detail of a tailored jet ski floor mat with reinforced edges',
  'Full view of a completed custom jet ski floor mat project',
  'Precision-fitted Super Jet floor mat shown on a personal watercraft',
  'Textured marine floor protection photographed after installation',
];

export const floorMatProjectImages: ProjectImage[] = floorMatViews.map((view, index) => ({
  src: `/images/projects/super-jet-floor-mat-kit/floor-mat-${String(index + 1).padStart(2, '0')}.jpeg`,
  alt: `${view} by Shakeel Marine in Kuwait`,
}));

const customSeatViews = [
  'Green and white custom jet ski seat upholstery installed on a personal watercraft',
  'Black and gray custom jet ski seat upholstery installed on a personal watercraft',
  'Black and gray custom jet ski seat with contrast piping and marine stitching',
  'Close-up of contrast stitching on a black custom jet ski seat',
  'Finished green and white custom jet ski seat with tailored marine upholstery',
];

export const customSeatProjectImages: ProjectImage[] = customSeatViews.map((view, index) => ({
  src: `/images/projects/jetski-custom-seats/custom-seat-${String(index + 1).padStart(2, '0')}.jpeg`,
  alt: `${view} by Shakeel Marine in Kuwait`,
}));
