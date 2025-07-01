import mongoose from 'mongoose';

const ProjectSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Project name is required'],
    trim: true,
    maxlength: [100, 'Name cannot exceed 100 characters']
  },
  description: {
    type: String,
    required: [true, 'Description is required'],
    minlength: [10, 'Description should be at least 10 characters'],
    maxlength: [1000, 'Description cannot exceed 1000 characters']
  },
  imageUrl: {
    type: String,
    required: [true, 'Image URL is required'],
    validate: {
      validator: v => /\.(jpe?g|png|webp|avif)$/i.test(v),
      message: 'Only JPG, PNG, WebP, or AVIF images allowed'
    }
  }
}, { timestamps: true });

export const Project = mongoose.model('Project', ProjectSchema); 