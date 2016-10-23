'use strict';

angular
  .module('myApp.skicams')
  .component('skicams', {
    templateUrl: 'pages/skicams/skicams.template.html',
    controller: ['GetCamService',
      function SkicamsController (GetCamService) {
        var self = this;
        var date = new Date;
        GetCamService.async().then(function(response) {
          self.data = response.data;
        });

      }
    ]
  })
  .filter('currentdate',['$filter',  function($filter) {
    return function() {
        return $filter('date')(new Date(), 'dd-MM-yyyy');
    };
}]);
