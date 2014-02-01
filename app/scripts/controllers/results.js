'use strict';

angular.module('tripToSiteApp')
  .controller('ResultsCtrl', ['$scope', '$routeParams','WeatherSrv','EventsSrv','InformationSrv', function ($scope,$routeParams,WeatherSrv,EventsSrv,InformationSrv) {
    $scope.city = $routeParams.city;
    $scope.weather, $scope.events, $scope.wikipedia;
 
    WeatherSrv.getResults($scope.city).then(function(response){
        $scope.weather = response.data;
      });

    EventsSrv.getResults($scope.city).then(function(response){
        console.log(response);
        $scope.events = response.events.event;
      });

    InformationSrv.getResults($scope.city).then(function(response){

      });

    function showResults(){
        $scope.results = true;
      }

    function showLoading(){
        $scope.loading = true;
      }


  }]);

/*Event objet

all_day: "0"
calendar_count: null
calendars: null
city_name: "Zaragoza"
comment_count: null
country_abbr: "ESP"
country_abbr2: "ES"
country_name: "Spain"
created: "2011-03-10 00:27:32"
description: "TERROR GOTHIC II↵↵En concierto:↵-MY BELOVED DEATH. Darkwave electrónica de Canarias.↵-PSIDERÁLICA. Rock industrial desde Mallorca.↵-EXPERIMENTOS EN EL TERROR. Gothic rock y terror punk de Zaragoza.↵↵Fiesta post concierto a cargo de DJ. REDRIVAL + DJ IGNACIO DEVIZIO↵Con la mejor selección de música oscura: goth, rock, industrial, ebm, 80s...↵↵ENTRADA LIBRE"
geocode_type: "EVDB Geocoder"
going: null
going_count: null
groups: null
id: "E0-001-037447072-3@2013122021"
image: Object
caption: null
height: "48"
medium: Object
height: "128"
url: "http://s4.evcdn.com/images/medium/I0-001/003/905/323-2.jpeg_/terror-gothic-ii-23.jpeg"
width: "128"
__proto__: Object
small: Object
height: "48"
url: "http://s4.evcdn.com/images/small/I0-001/003/905/323-2.jpeg_/terror-gothic-ii-23.jpeg"
width: "48"
__proto__: Object
thumb: Object
height: "48"
url: "http://s4.evcdn.com/images/thumb/I0-001/003/905/323-2.jpeg_/terror-gothic-ii-23.jpeg"
width: "48"
__proto__: Object
url: "http://s4.evcdn.com/images/small/I0-001/003/905/323-2.jpeg_/terror-gothic-ii-23.jpeg"
width: "48"
__proto__: Object
latitude: "41.6405497"
link_count: null
longitude: "-0.8677283"
modified: "2013-03-15 09:04:13"
owner: "kobbold"
performers: null
postal_code: null
privacy: "1"
recur_string: "weekly Wednesday through Friday until March 18, 2014"
region_abbr: null
region_name: null
start_time: "2013-12-20 21:00:00"
stop_time: "2013-12-21 06:30:00"
title: "TERROR GOTHIC II"
tz_city: null
tz_country: null
tz_id: null
tz_olson_path: null
url: "http://eventful.com/zaragoza/events/terror-gothic-ii-/E0-001-037447072-3@2013122021?utm_source=apis&utm_medium=apim&utm_campaign=apic"
venue_address: null
venue_display: "1"
venue_id: "V0-001-003542294-8"
venue_name: "Arena Rock"
venue_url: "http://eventful.com/zaragoza/venues/arena-rock-/V0-001-003542294-8?utm_source=apis&utm_medium=apim&utm_campaign=apic"
watching_count: null

*/