'use strict';
const angular = require('angular');
const ngRoute = require('angular-route');


import routes from './cart.routes';

export class CartComponent {
  /*@ngInject*/
  constructor() {
    this.message = 'Hello';
  }
}

export default angular.module('nodeCommerceApp.cart', [ngRoute])
  .config(routes)
  .component('cart', {
    template: require('./cart.html'),
    controller: CartComponent,
    controllerAs: 'cartCtrl'
  })
  .name;
