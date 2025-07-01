import mongoose from 'mongoose';

const NewsletterSchema = new mongoose.Schema({
  email: {
    type: String,
    required: [true, 'Email is required'],
    unique: true,
    lowercase: true,
    trim: true,
    validate: {
      validator: (v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v),
      message: 'Invalid email format'
    }
  },
  subscribedAt: {
    type: Date,
    default: Date.now,
    immutable: true
  },
  isActive: {
    type: Boolean,
    default: true
  },
  source: {
    type: String,
    enum: ['website', 'landing-page', 'admin'],
    default: 'website'
  }
});

// Unique index
// NewsletterSchema.index({ email: 1 }, { unique: true });

export default mongoose.model('Newsletter', NewsletterSchema);