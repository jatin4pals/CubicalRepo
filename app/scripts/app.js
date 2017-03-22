'use strict';

/**
 * @ngdoc overview
 * @name cubicalApp
 * @description
 * # cubicalApp
 *
 * Main module of the application.
 */
angular
  .module('cubicalApp', [
    'ngAnimate',
    'ngMessages',
    'ngAria',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ngMaterial'
  ])
  .config(function ($routeProvider,$sceDelegateProvider, $qProvider) {
      $routeProvider
        .when('/', {
            templateUrl: 'views/main.html',
            controller: 'MainCtrl',
            controllerAs: 'main'
        })
        .when('/about', {
            templateUrl: 'views/about.html',
            controller: 'AboutCtrl',
            controllerAs: 'about'
        })
        .otherwise({
            redirectTo: '/'
        });
      $qProvider.errorOnUnhandledRejections(false);

      $sceDelegateProvider.resourceUrlWhitelist([
    // Allow same origin resource loads.
    'self',
    // Allow JSONP calls that match this pattern
    'http://itunes.apple.com/**'
      ]);
  });
