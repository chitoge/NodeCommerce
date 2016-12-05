'use strict';

import mongoose from 'mongoose';

var ProductSchema = new mongoose.Schema({
  name: String, // shorten version of `title`
  summary: String,
  active: Boolean,
  title: { type: String, required: true, trim: true }, // means whitespace will be trimmed
  price: { type: Number, required: true, min: 0 },
  stock: { type: Number, default: 1 },
  description: String,
  imageUrl: String, // changed to self host static content delivery
  detailImageUrls: [String], // more images for display, but now frontend support is just 4 :(
  categories: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Category', index: true }]
});

export default mongoose.model('Product', ProductSchema);
