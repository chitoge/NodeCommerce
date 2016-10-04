'use strict';

import mongoose from 'mongoose';

var OrderDetailsSchema = new mongoose.Schema({
  product: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' },
  quantity: Number,
  total: {type: Number}
});

var CheckoutSchema = new mongoose.Schema({
  name: String,
  info: String,
  active: Boolean,
  // buyer details
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  shippingAddress: String,
  billingAddress: String,
  // price details
  items: [OrderDetailsSchema],
  shipping: {type: Number, default: 0.0},
  tax: {type: Number, default: 0.0},
  discount: {type: Number, default: 0.0},
  subTotal: {type: Number},
  total: {type: Number, required: true},
  // payment info
  status: { type: String, default: 'pending' }, // pending, paid/failed, delivered, canceled, refunded.
  paymentType: { type: String, default: 'cod' }, // cash on delivery
  paymentStatus: mongoose.Schema.Types.Mixed
});

export default mongoose.model('Checkout', CheckoutSchema);
