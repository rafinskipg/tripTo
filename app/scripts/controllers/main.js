'use strict';

angular.module('tripToSiteApp')
  .controller('MainCtrl', ['$scope', function ($scope) {
    $scope.searchText = '';

    $scope.search  = function(){
        window.location.hash = '#/results/'+ $scope.searchText;
      };

  }]);
