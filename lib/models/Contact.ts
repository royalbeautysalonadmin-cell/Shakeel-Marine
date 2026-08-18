import mongoose, { Schema, Document, Model } from 'mongoose';

export interface IContact extends Document {
  name: string;
  phone: string;
  email: string;
  service: string;
  message: string;
  status: 'new' | 'read' | 'replied' | 'archived';
  notes?: string;
  createdAt: Date;
  updatedAt: Date;
}

const ContactSchema = new Schema<IContact>(
  {
    name: { type: String, required: true, trim: true },
    phone: { type: String, required: true, trim: true },
    email: { type: String, required: true, trim: true, lowercase: true },
    service: { type: String, required: true },
    message: { type: String, required: true },
    status: { type: String, enum: ['new', 'read', 'replied', 'archived'], default: 'new' },
    notes: { type: String, trim: true },
  },
  { timestamps: true }
);

ContactSchema.index({ status: 1, createdAt: -1 });
ContactSchema.index({ email: 1 });

export const Contact: Model<IContact> = mongoose.models.Contact || mongoose.model<IContact>('Contact', ContactSchema);
