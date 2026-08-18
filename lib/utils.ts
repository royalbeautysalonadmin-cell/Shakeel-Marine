import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * Merge Tailwind classes with clsx.
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Format a phone number for display.
 */
export function formatPhone(phone: string): string {
  return phone;
}

/**
 * Tiny blurred placeholder for Next.js Image (1x1 navy pixel, base64).
 * Use with: <Image placeholder="blur" blurDataURL={SHIMMER} ... />
 */
export const SHIMMER =
  'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIwMCIgaGVpZ2h0PSI4MDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjEyMDAiIGhlaWdodD0iODAwIiBmaWxsPSIjMDYxODI2Ii8+PC9zdmc+';
