'use strict';

export default function($routeProvider) {
  'ngInject';
  $routeProvider
    .when('/category/:id', {
      template: '<category></category>'
    });
}
