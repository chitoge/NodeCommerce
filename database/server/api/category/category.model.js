'use strict';

import mongoose from 'mongoose';

var CategorySchema = new mongoose.Schema({
  name: {type: String, unique: true},
  active: Boolean,
  parent: { type: mongoose.Schema.Types.ObjectId, ref: 'Category' }
});

export default mongoose.model('Category', CategorySchema);
