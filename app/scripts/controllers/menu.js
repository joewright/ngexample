'use strict';

angular.module('testerooskieApp')
  .controller('MenuCtrl', function ($scope, $rootScope) {
    $scope.menuVis = '';
    var isVis = true;
    $scope.list = ['somewhere', 'mo', 'stuff', 'here'];
    $rootScope.$on('menu:toggle', function() {
      $scope.menuVis = (isVis) ? 'animated slideOutLeft' : 'animated slideInLeft';
      isVis = !isVis;
    });
  });