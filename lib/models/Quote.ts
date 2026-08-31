import mongoose, { Schema, Document, Model } from 'mongoose';

export interface IQuote extends Document {
  fullName: string;
  phone: string;
  whatsapp?: string;
  email: string;
  country?: string;
  service: string;
  vesselType: string;
  vesselDetails?: string;
  projectDescription: string;
  preferredColor?: string;
  preferredDesign?: string;
  preferredContactMethod: string;
  status: 'new' | 'read' | 'replied' | 'archived';
  notes?: string;
  createdAt: Date;
  updatedAt: Date;
}

const QuoteSchema = new Schema<IQuote>(
  {
    fullName: { type: String, required: true, trim: true },
    phone: { type: String, required: true, trim: true },
    whatsapp: { type: String, trim: true },
    email: { type: String, required: true, trim: true, lowercase: true },
    country: { type: String, trim: true },
    service: { type: String, required: true },
    vesselType: { type: String, required: true },
    vesselDetails: { type: String, trim: true },
    projectDescription: { type: String, required: true },
    preferredColor: { type: String, trim: true },
    preferredDesign: { type: String, trim: true },
    preferredContactMethod: { type: String, required: true },
    status: { type: String, enum: ['new', 'read', 'replied', 'archived'], default: 'new' },
    notes: { type: String, trim: true },
  },
  { timestamps: true }
);

QuoteSchema.index({ status: 1, createdAt: -1 });
QuoteSchema.index({ email: 1 });

export const Quote: Model<IQuote> = mongoose.models.Quote || mongoose.model<IQuote>('Quote', QuoteSchema);
