'use strict'

angular
	.module('myApp')
	.factory('GetCamService', function($http) {
  	return {
    	async: function() {
      	return $http.get('https://makevoid-skicams.p.mashape.com/cams.json', {
    				headers: { 'X-Mashape-Key': 'kxSXmUymofmshFHhhKxWOSJpqJsJp1I3zNnjsnqKwhITAiC1zw' }
  				})
    	}
  	};
	});