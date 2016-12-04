'use strict';

export default function($routeProvider) {
  'ngInject';
  $routeProvider
    .when('/product', {
      template: '<product></product>'
    });
}
