'use strict';

angular.module('testerooskieApp')
  .controller('BaseCtrl', function($scope, $rootScope) {
    $scope.toggleMenu = function() {
      $rootScope.$broadcast('menu:toggle');
    };
    var ready = false;
    $rootScope.$on('$routeChangeStart', function() {
      $scope.transition = 'animated slideOutLeft';
      ready = false;
      setTimeout(function() {
        ready = true;
      }, 300);
    });

    function animateIn() {
      $scope.transition = 'animated slideInLeft';
    }
    $rootScope.$on('$routeChangeSuccess', function() {
      if (ready) {
        animateIn();
      } else {
        setTimeout(function() {
          animateIn();
          $scope.$apply();
        }, 300);
      }
    });
  });