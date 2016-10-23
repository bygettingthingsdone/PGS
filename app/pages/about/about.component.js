'use strict';

angular
  .module('myApp.about')
  .component('about', {
    templateUrl: 'pages/about/about.template.html',
    controller: 'AboutController'
    })
  .controller('AboutController', function AboutController () {});
