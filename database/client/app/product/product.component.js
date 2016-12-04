'use strict';
const angular = require('angular');
const ngRoute = require('angular-route');


import routes from './product.routes';

export class ProductComponent {
  /*@ngInject*/
  constructor() {
    this.message = 'Hello';
  }
}

export default angular.module('nodeCommerceApp.product', [ngRoute])
  .config(routes)
  .component('product', {
    template: require('./product.html'),
    controller: ProductComponent,
    controllerAs: 'productCtrl'
  })
  .name;
