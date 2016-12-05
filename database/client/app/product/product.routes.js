'use strict';

export default function($routeProvider) {
  'ngInject';
  $routeProvider
    .when('/product/:id', {
      template: '<product></product>'
    });
}
