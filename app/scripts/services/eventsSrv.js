'use strict';
angular.module('tripToSiteApp')
    .factory('EventsSrv', ['$q',
       function($q) {
        function getResults(city){
          //Events
          var oArgs = {
              app_key: '8qVgwWD8MzQRRdF7',
              l: city,
              page_size: 25
            };
          var deferred = $q.defer();
          //Events
          EVDB.API.call("/events/search", oArgs, function(oData){   
              deferred.resolve(oData);
          });

          return deferred.promise;

        }


        return {
          getResults: getResults
        };

      }
  ]);
