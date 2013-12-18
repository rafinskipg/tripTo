'use strict';

describe('Controller: MainCtrl', function () {

  // load the controller's module
  beforeEach(module('tripToSiteApp'));

  var MainCtrl,
    $httpBackend,
        scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function (_$httpBackend_,$controller, $rootScope) {
    scope = $rootScope.$new();
    $httpBackend = _$httpBackend_;

    

    MainCtrl = $controller('MainCtrl', {
      $scope: scope
    });
  }));
  it('should have a searchText property', function(){
     expect(scope.searchText).notToBe(undefined);
  });
  it('should have a search function with 1 argument', function () {
    expect(scope.search.length).toBe(1);
  });

  it('should make http request when search invoked', function () {
    scope.searchText = 'Madrid';
    expect(scope.searchText.length).toBeGreaterThan(0);

    

  });
});
