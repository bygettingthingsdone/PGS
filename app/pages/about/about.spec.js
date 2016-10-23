'use strict';

describe('myApp.about', function() {

  beforeEach(angular.module('myApp.about'));
  // Test the controller
  describe('AboutController', function(){

    it('should define a cotroller', inject(function($controller) {
      //spec body
      var aboutCtrl = $controller('AboutController');
      expect(aboutCtrl).toBeDefined();
    }));

  });
  // Test the controller by component
  describe('AboutController', function() {

    it('should define a controller', inject(function($componentController) {
      var ctrl = $componentController('about');

      expect(ctrl).toBeDefined();
    }));
  });
});
