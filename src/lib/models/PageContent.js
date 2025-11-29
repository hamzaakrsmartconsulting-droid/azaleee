import mongoose from 'mongoose';

const PageContentSchema = new mongoose.Schema({
  path: {
    type: String,
    required: [true, 'Page path is required'],
    unique: true,
    trim: true,
    lowercase: true
  },
  title: {
    type: String,
    required: [true, 'Page title is required']
  },
  content: {
    type: mongoose.Schema.Types.Mixed,
    required: true
  },
  published: {
    type: Boolean,
    default: true
  },
  lastModified: {
    type: Date,
    default: Date.now
  },
  modifiedBy: {
    type: String,
    default: 'admin'
  }
}, {
  timestamps: true
});

// Index for faster queries (path already has unique: true which creates an index)
PageContentSchema.index({ published: 1 });

const PageContent = mongoose.models.PageContent || mongoose.model('PageContent', PageContentSchema);

export default PageContent;

