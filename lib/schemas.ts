import { z } from 'zod';

const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB
const ACCEPTED_IMAGE_TYPES = [
  'image/jpeg',
  'image/jpg',
  'image/png',
  'image/webp',
];

export const contactFormSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  phone: z.string().min(6, 'Please enter a valid phone number'),
  email: z.string().email('Please enter a valid email address'),
  service: z.string().min(1, 'Please select a service'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;

export const quoteFormSchema = z.object({
  fullName: z.string().min(2, 'Name must be at least 2 characters'),
  phone: z.string().min(6, 'Please enter a valid phone number'),
  whatsapp: z.string().optional(),
  email: z.string().email('Please enter a valid email address'),
  country: z.string().optional(),
  service: z.string().min(1, 'Please select a service'),
  vesselType: z.string().min(1, 'Please select a vessel type'),
  vesselDetails: z.string().optional(),
  projectDescription: z
    .string()
    .min(10, 'Please describe your project (at least 10 characters)'),
  preferredColor: z.string().optional(),
  preferredDesign: z.string().optional(),
  preferredContactMethod: z.string().min(1, 'Please select a contact method'),
});

export type QuoteFormData = z.infer<typeof quoteFormSchema>;

export const serviceOptions = [
  { value: 'jet-ski-seat-cover', label: 'Jet Ski Seat Cover' },
  { value: 'boat-seat', label: 'Boat Seat' },
  { value: 'ship-seat', label: 'Ship Seat' },
  { value: 'marine-upholstery', label: 'Marine Upholstery' },
  { value: 'canopy-cover', label: 'Canopy Cover' },
  { value: 'other', label: 'Other' },
] as const;

export const vesselTypeOptions = [
  { value: 'jet-ski', label: 'Jet Ski' },
  { value: 'boat', label: 'Boat' },
  { value: 'ship', label: 'Ship' },
  { value: 'yacht', label: 'Yacht' },
  { value: 'other', label: 'Other' },
] as const;

export const contactMethodOptions = [
  { value: 'whatsapp', label: 'WhatsApp' },
  { value: 'phone', label: 'Phone Call' },
  { value: 'email', label: 'Email' },
] as const;

export function validateFiles(files: FileList | null): string | null {
  if (!files || files.length === 0) return null;

  for (let i = 0; i < files.length; i++) {
    const file = files[i];
    if (file.size > MAX_FILE_SIZE) {
      return `File "${file.name}" exceeds 5MB limit`;
    }
    if (!ACCEPTED_IMAGE_TYPES.includes(file.type)) {
      return `File "${file.name}" is not a supported image type (JPEG, PNG, WebP)`;
    }
  }

  if (files.length > 5) {
    return 'Maximum 5 images allowed';
  }

  return null;
}
