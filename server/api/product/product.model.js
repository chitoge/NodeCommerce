'use strict';

import mongoose from 'mongoose';

var ProductSchema = new mongoose.Schema({
  name: String,
  info: String,
  active: Boolean,
  title: { type: String, required: true, trim: true },
  price: { type: Number, required: true, min: 0 },
  stock: { type: Number, default: 1 },
  description: String,
  imageBin: { data: Buffer, contentType: String },
  imageUrl: String,
  categories: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Category', index: true }]
});

export default mongoose.model('Product', ProductSchema);
