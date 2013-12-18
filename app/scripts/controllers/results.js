'use strict';

angular.module('tripToSiteApp')
  .controller('ResultsCtrl', ['$scope','WeatherSrv','EventsSrv','InformationSrv', function ($scope,WeatherSrv,EventsSrv,InformationSrv) {
    $scope.searchText = '';

 
    WeatherSrv.getResults($scope.searchText).then(function(response){
        console.log(response.data);
      });

    EventsSrv.getResults($scope.searchText).then(function(response){
        console.log(response);
    });

    InformationSrv.getResults($scope.searchText).then(function(response){

    });

    function showResults(){
        $scope.results = true;
      }

    function showLoading(){
        $scope.loading = true;
      }


  }]);

