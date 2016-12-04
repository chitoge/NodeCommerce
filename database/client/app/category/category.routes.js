'use strict';

export default function($routeProvider) {
  'ngInject';
  $routeProvider
    .when('/category', {
      template: '<category></category>'
    });
}
