'use strict';

import mongoose from 'mongoose';

var CategorySchema = new mongoose.Schema({
  name: String,
  info: String,
  active: Boolean,
  parent: { type: mongoose.Schema.Types.ObjectId, ref: 'Category' },
  ancestors: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Category' }],
  children: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Category' }]
});

export default mongoose.model('Category', CategorySchema);
