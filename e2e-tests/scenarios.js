'use strict';

/* https://github.com/angular/protractor/blob/master/docs/toc.md */

describe('myApp', function() {


  it('should automatically redirect to /about when location hash/fragment is empty', function() {
    browser.get('index.html');
    expect(browser.getLocationAbsUrl()).toMatch("/about");
  });


  describe('about', function() {

    beforeEach(function() {
      browser.get('index.html#!/about');
    });


    it('should render about view when user navigates to /about', function() {
      expect(element.all(by.css('[ng-view] h3')).first().getText()).
        toMatch(/Lorem ipsum/);
    });

  });


  describe('skicams', function() {

    beforeEach(function() {
      browser.get('index.html#!/skicams');
    });


    it('should render skicams view when user navigates to /skicmas', function() {
      expect(element.all(by.css('[ng-view] h3')).first().getText()).
        toMatch(/Andalo/);
    });

  });
  describe('contact', function() {

    beforeEach(function() {
      browser.get('index.html#!/contact');
    });


    it('should render contact when user navigates to /contact', function() {
      expect(element.all(by.css('[ng-view] span')).first().getText()).
        toMatch(/Name */);
    });
  });
});
