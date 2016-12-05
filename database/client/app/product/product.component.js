'use strict';
const angular = require('angular');
const ngRoute = require('angular-route');


import routes from './product.routes';

export class ProductComponent {
  $http;

  /*@ngInject*/
  constructor($http, $routeParams, $scope) {
    'ngInject';
    this.$http = $http;

    // resolve this product
    this.$http.get('/api/products/' + $routeParams.id)
      .then(response => {
        $scope.product = response.data;
        console.log($scope.product);
      });
  }
}

export default angular.module('nodeCommerceApp.product', [ngRoute])
  .config(routes)
  .component('product', {
    template: require('./product.html'),
    controller: ProductComponent
  })
  .name;
