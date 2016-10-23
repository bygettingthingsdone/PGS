'use strict'

angular
  .module('myApp')
  .config(['$locationProvider' ,'$routeProvider',
    function config ($locationProvider , $routeProvider) {
      $locationProvider.hashPrefix('!');

      $routeProvider
        .when('/about', {
          template: '<about></about>'
        })
        .when('/skicams', {
          template: '<skicams></skicams>'
        })
        .when('/contact', {
          template: '<contact><contact>'
        })
        .otherwise('/about')
    }]);