'use strict';
angular.module('tripToSiteApp')
    .factory('WeatherSrv', ['$http',
      function($http) {

        function getResults(city){
          
          var config = { 
            headers: {
              'X-Mashape-Authorization' : 'cK5S0GMLvUI3dXNPdesjPDBKc1OOt3g4'
            }
          };
          
          return $http.get('https://george-vustrey-weather.p.mashape.com/api.php?_method=getForecasts&location='+city, config);
        }


        return {
          getResults: getResults
        };

      }
  ]);
