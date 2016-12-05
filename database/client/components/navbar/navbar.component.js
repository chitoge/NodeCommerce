'use strict';
/* eslint no-sync: 0 */

import angular from 'angular';

export class NavbarComponent {  
  $http;
  categories = [];

  menu = [{
    title: 'Home',
    link: '/'
  }];
  $location;
  isLoggedIn: Function;
  isAdmin: Function;
  getCurrentUser: Function;
  isCollapsed = true;

  status = {
    isopen: false
  };

  constructor($http, $location, Auth) {
    'ngInject';

    this.$http = $http;
    this.$location = $location;
    this.isLoggedIn = Auth.isLoggedInSync;
    this.isAdmin = Auth.isAdminSync;
    this.getCurrentUser = Auth.getCurrentUserSync;

    // populate category menu
    this.$http.get('/api/categories')
      .then(response => {
        this.categories = response.data;

        // populate category .link field
        for (var category in this.categories) {
          this.categories[category]['link'] = '/category/' + this.categories[category]._id;
        }
      });
  }

  isActive(route) {
    return route === this.$location.path();
  }
}

export default angular.module('directives.navbar', [])
  .component('navbar', {
    template: require('./navbar.html'),
    controller: NavbarComponent
  })
  .name;
