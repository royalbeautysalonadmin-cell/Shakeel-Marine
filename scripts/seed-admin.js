const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/shakeelmarine';

const AdminSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true, lowercase: true, trim: true },
  password: { type: String, required: true },
  name: { type: String, required: true, trim: true },
}, { timestamps: true });

AdminSchema.pre('save', async function(next) {
  if (!this.isModified('password')) return next();
  this.password = await bcrypt.hash(this.password, 12);
  next();
});

const Admin = mongoose.models.Admin || mongoose.model('Admin', AdminSchema);

async function seed() {
  try {
    await mongoose.connect(MONGODB_URI);
    console.log('Connected to MongoDB');

    const existing = await Admin.findOne({ email: 'admin@shakeelmarine.com' });
    if (existing) {
      console.log('Admin user already exists: admin@shakeelmarine.com');
    } else {
      await Admin.create({
        email: 'admin@shakeelmarine.com',
        password: 'admin123',
        name: 'Shakeel Marine Admin',
      });
      console.log('Admin user created: admin@shakeelmarine.com / admin123');
    }

    await mongoose.disconnect();
    console.log('Done');
  } catch (error) {
    console.error('Seed error:', error);
    process.exit(1);
  }
}

seed();
