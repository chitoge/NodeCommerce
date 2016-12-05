'use strict';

var express = require('express');
var controller = require('./cart.controller');
import * as auth from '../../auth/auth.service';

var router = express.Router();

// only exist within context of an user
router.get('/all', auth.hasRole('admin'), controller.index);
router.get('/', auth.isAuthenticated(), controller.showUser); 
//router.get('/checkout', auth.isAuthenticated(), controller.toCheckout); // convert this cart to checkout & clear cart
//router.post('/', controller.create); // will be created automatically while creating an user
//router.put('/:id', controller.upsert);
router.patch('/', auth.isAuthenticated(), controller.patch); // modify a product in cart, with parameter defined in request's body
router.delete('/', auth.isAuthenticated(), controller.clearCart); // clear this cart
router.delete('/:id', auth.hasRole('admin'), controller.destroy); // destroy this cart to prevent abusement, will create a new cart for user

module.exports = router;
