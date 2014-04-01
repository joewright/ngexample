'use strict';

angular.module('testerooskieApp')
  .config(function ($routeProvider, $locationProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/somewhere', {
        templateUrl: 'views/somewhere.html',
        controller: 'SomewhereCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
    $locationProvider.html5Mode(true);
    $locationProvider.hashPrefix('!');
  });