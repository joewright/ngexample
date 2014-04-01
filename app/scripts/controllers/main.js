'use strict';

angular.module('testerooskieApp')
  .controller('MainCtrl', function ($scope, $rootScope) {
    $scope.toggleMenu = function() {
      $rootScope.$broadcast('menu:toggle');
    };
  });
