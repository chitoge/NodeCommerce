'use strict';

import mongoose from 'mongoose';

var CartDetailsSchema = new mongoose.Schema({
  product: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' },
  quantity: Number,
  total: {type: Number}
});

var CartSchema = new mongoose.Schema({
  name: String,
  info: String,
  active: Boolean,
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  items: [CartDetailsSchema],
  total: {type: Number, required: true}
});

export default mongoose.model('Cart', CartSchema);
