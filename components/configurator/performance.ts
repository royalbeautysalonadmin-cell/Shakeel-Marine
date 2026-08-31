export type PerformanceTier = 'high' | 'medium' | 'low';

export interface RenderQuality {
  tier: PerformanceTier;
  pixelRatio: number;
  antialias: boolean;
}

export function getRenderQuality(): RenderQuality {
  if (typeof navigator === 'undefined') {
    return { tier: 'medium', pixelRatio: 1.5, antialias: true };
  }

  const deviceMemory = (navigator as Navigator & { deviceMemory?: number }).deviceMemory ?? 4;
  const cores = navigator.hardwareConcurrency ?? 4;
  const isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);

  if (deviceMemory <= 2 || cores <= 2) {
    return { tier: 'low', pixelRatio: 1, antialias: false };
  }

  if (isMobile || deviceMemory <= 4 || cores <= 4) {
    return { tier: 'medium', pixelRatio: 1.35, antialias: true };
  }

  return { tier: 'high', pixelRatio: 1.75, antialias: true };
}
