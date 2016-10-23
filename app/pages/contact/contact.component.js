'use strict';

angular
  .module('myApp.contact')
  .component('contact', {
    templateUrl: 'pages/contact/contact.template.html',
    controller: 'ContactController'
    })
  .controller('ContactController', function ContactController () {});
