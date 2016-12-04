'use strict';
const angular = require('angular');
const ngRoute = require('angular-route');

import routes from './category.routes';

export class CategoryComponent {
  // subcategory API call
  subcategories = [{
    title: 'Quần áo & Phụ kiện thời trang',
    link: '/'
  },
  {
    title: 'Đồ dùng cho bé',
    link: '/'
  },
  {
    title: 'Làm đẹp & Sức khỏe',
    link: '/'
  },
  {
    title: 'Điện máy',
    link: '/'
  },
  {
    title: 'Nội thất',
    link: '/'
  },
  {
    title: 'Điện thoại',
    link: '/'
  },
  {
    title: 'Sách',
    link: '/'
  }];

  // and also query real products here

  $location;

  /*@ngInject*/
  constructor($location) {
    'ngInject';

    this.$location = $location;
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
