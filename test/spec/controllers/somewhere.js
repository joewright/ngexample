'use strict';

describe('Controller: SomewhereCtrl', function () {

  // load the controller's module
  beforeEach(module('testerooskieApp'));

  var SomewhereCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    SomewhereCtrl = $controller('SomewhereCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
