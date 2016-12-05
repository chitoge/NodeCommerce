'use strict';
const angular = require('angular');
const ngRoute = require('angular-route');

import routes from './category.routes';

export class CategoryComponent {
  // subcategory API call
  categories = [];
  subcategories = [];
  products = [];

  // and also query real products here

  $http;
  $location;

  /*@ngInject*/
  constructor($http, $location, $routeParams, $scope) {
    'ngInject';

    this.$http = $http;
    this.$location = $location;

    // resolve categories list
    this.$http.get('/api/categories')
      .then(response => {
        this.categories = response.data;

        // populate product .link field
        for (var category in this.categories) {
          this.categories[category]['link'] = '/category/' + this.categories[category]._id;
        }
      });

    // resolve subcategories
    this.$http.get('/api/categories/' + $routeParams.id + "/children")
      .then(response => {
        this.subcategories = response.data;

        // populate product .link field
        for (var category in this.subcategories) {
          this.subcategories[category]['link'] = '/category/' + this.subcategories[category]._id;
        }
      });

    if (this.subcategories.length == 0) {
      // don't show subcategory sidebar
      $scope.showSubcat = false;
    }
    else {
      $scope.showSubcat = true;
    }

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
