'use strict';

/**
 * @ngdoc overview
 * @name fantasyBracket
 * @description
 * # fantasyBracket
 *
 * Main module of the application.
 */
const app = angular
  .module('fantasyBracket', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngSanitize',
    'ngTouch',
    'ngMaterial',
    'ui.router'
  ]);

app.config(function($stateProvider) {
  $stateProvider
    .state('home', {
      url: '',
      templateUrl: 'views/main.html',
      controller: 'MainCtrl',
      controllerAs: 'vm'
    });
});