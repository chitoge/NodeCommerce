'use strict';
const angular = require('angular');
const ngRoute = require('angular-route');

import routes from './category.routes';

export class CategoryComponent {
  // subcategory API call
  subcategories = [];
  products = [];

  // and also query real products here

  $http;
  $location;

  /*@ngInject*/
  constructor($http, $location, $routeParams) {
    'ngInject';

    this.$http = $http;
    this.$location = $location;

    // resolve products linked to this current category
    this.$http.get('/api/products/by-category/' + $routeParams.id)
      .then(response => {
        this.products = response.data;

        // populate product .link field
        for (var product in this.products) {
          this.products[product]['link'] = '/product/' + this.products[product]._id;
        }
      });
  }

  isActive(route) {
    return route === this.$location.path();
  }
}

export default angular.module('nodeCommerceApp.category', [ngRoute])
  .config(routes)
  .component('category', {
    template: require('./category.html'),
    controller: CategoryComponent
  })
  .name;
