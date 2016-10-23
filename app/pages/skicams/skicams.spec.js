'use strict';

describe('myApp.skicams', function() {
  // Load the module that contains the `skicams` component before each test
  beforeEach(angular.module('myApp.skicams'));
  // Test the controller by component
  describe('SkicamsController', function() {
    var $httpBackend, ctrl;

    var mockCamJson = {
      name: 'cam 1',
      cams:  ['http://url.url.png', 'http://lru.lru.png']
    };


    beforeEach(inject(function($componentController, _$httpBackend_) {
      $httpBackend = _$httpBackend_;
      $httpBackend.expectGET('https://makevoid-skicams.p.mashape.com/cams.json')
                  .respond(mockCamJson);

      ctrl = $componentController('skicams');
    }));



    it('should define a controller', inject(function($componentController) {

      expect(ctrl).toBeDefined();
    }));



    it('should fetch the data from server', function() {
      jasmine.addCustomEqualityTester(angular.equals);

      expect(ctrl.data).toEqual({});

      $httpBackend.flush();
      expect(ctrl.data).toEqual(mockCamJson);
    });

  });
});