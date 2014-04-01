'use strict';

describe('Controller: BaseCtrl', function () {

  // load the controller's module
  beforeEach(module('testerooskieApp'));

  var BaseCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    BaseCtrl = $controller('BaseCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(typeof scope.toggleMenu).toBe('function');
  });
});
