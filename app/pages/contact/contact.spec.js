'use strict';


describe('myApp.contact', function() {

  beforeEach(angular.module('myApp.contact'));
  // Test the controller
  describe('ContactController', function(){

    it('should define ContactController controller', inject(function($controller) {
      //spec body
      var contactCtrl = $controller('ContactController');
      expect(contactCtrl).toBeDefined();
    }));

  });
    // Test the controller by component
  describe('ContactComponent', function() {

    it('should define a controller', inject(function($componentController) {
      var ctrl = $componentController('contact');

      expect(ctrl).toBeDefined();
    }));
  });
});