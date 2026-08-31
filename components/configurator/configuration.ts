import {
  colorOptions,
  designOptions,
  materialOptions,
  type VehicleConfiguration,
  type VehicleDefinition,
} from '@/data/configurator';

export function getColorLabel(id: string, customColor: string) {
  if (id === 'custom') return `${customColor} (custom)`;
  return colorOptions.find((color) => color.id === id)?.label ?? id;
}

export function getMaterialLabel(id: string) {
  return materialOptions.find((material) => material.id === id)?.label ?? id;
}

export function getDesignLabel(id: string) {
  return designOptions.find((design) => design.id === id)?.label ?? id;
}

export function getConfigurationSummary(config: VehicleConfiguration, vehicle: VehicleDefinition) {
  const product = vehicle.products.find((option) => option.id === config.product) ?? vehicle.products[0];
  const colorLabel = product.component === 'floor-mat' ? 'Mat color' : 'Main color';

  return [
    `Vehicle: ${vehicle.name}`,
    `Product: ${product.name}`,
    `${colorLabel}: ${getColorLabel(config.mainColor, config.customMainColor)}`,
    `Accent: ${getColorLabel(config.accentColor, config.customAccentColor)}`,
    `Material: ${getMaterialLabel(config.material)}`,
    `Design: ${getDesignLabel(config.design)}`,
    `Stitching: ${getColorLabel(config.stitchingColor, config.customStitchingColor)}`,
    `Vessel photo: ${config.userPhoto ? 'Attached' : 'Not provided'}`,
  ];
}
