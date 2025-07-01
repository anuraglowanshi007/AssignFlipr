import mongoose from 'mongoose';

const ContactSchema = new mongoose.Schema({
  fullName: { type: String, required: true },
  email: { type: String, required: true },
  mobile: { type: String, required: true },
  city: { type: String, required: true },
  createdAt: { type: Date, default: Date.now }
});

export const Contact = mongoose.model('Contact', ContactSchema);
