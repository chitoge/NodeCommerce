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
  active: Boolean, // will be inactive after checkout / stuff
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' , required: true},
  items: [CartDetailsSchema],
  total: {type: Number, required: true}
});

export default mongoose.model('Cart', CartSchema);
