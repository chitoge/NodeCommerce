'use strict';

export default function($routeProvider) {
  'ngInject';
  $routeProvider
    .when('/cart', {
      template: '<cart></cart>'
    });
}
