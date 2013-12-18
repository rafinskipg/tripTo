'use strict';

angular.module('tripToSiteApp')
  .controller('MainCtrl', ['$scope','WeatherSrv','EventsSrv', function ($scope,WeatherSrv,EventsSrv) {
    $scope.searchText = '';

    $scope.search  = function(){
        showResults();
        showLoading();
        console.log($scope.searchText)
        WeatherSrv.getResults($scope.searchText).then(function(response){
            console.log(response.data);
          });

        EventsSrv.getResults($scope.searchText).then(function(response){
            console.log(response);
        });
      };

    function showResults(){
        $scope.results = true;
      }

    function showLoading(){
        $scope.loading = true;
      }


  }]);
