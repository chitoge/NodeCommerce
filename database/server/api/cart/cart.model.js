'use strict';

import mongoose from 'mongoose';

// there should be only 1 cart per user
// carts and checkouts are convertible between each other, but checkouts should be fixed

var CartDetailsSchema = new mongoose.Schema({
  product: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true },
  quantity: {type: Number, min: 0, required: true},
  total: {type: Number, required: true}
});

var CartSchema = new mongoose.Schema({
  name: String,
  active: Boolean, // will be inactive after checkout / stuff
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' , required: true},
  items: [CartDetailsSchema],
  total: {type: Number, required: true, default: 0}
});

export default mongoose.model('Cart', CartSchema);
