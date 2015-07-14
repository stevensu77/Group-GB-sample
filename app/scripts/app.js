'use strict';

/**
 * @ngdoc overview
 * @name gbApp
 * @description
 * # gbApp
 *
 * Main module of the application.
 */
angular
  .module('gbApp', [
    'ngAnimate',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ui.router',
    'ui.bootstrap'
  ])
  .config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/login');

    $stateProvider
      .state('login', {
        url: '/login',
        templateUrl: 'views/login.html',
        controller: 'loginCtrl',
        data: {
          requireLogin: false
        }
      })
      .state('root', {
        url: '/root',
        templateUrl: 'views/root.html',
        controller: 'rootCtrl',
        abstract: true,
        data: {
          requireLogin: true
        }
      })
      .state('root.deduction', {
        url: '/deduction',
        templateUrl: 'views/deduction.html',
        controller: 'deductionCtrl'
      })
      .state('root.overview', {
        url: '/overview',
        templateUrl: 'views/overview.html',
        controller: 'overviewCtrl'
      })
      .state('root.producer', {
        url: '/producer',
        templateUrl: 'views/producer.html',
        controller: 'producerCtrl'
      })
      .state('root.contact', {
        url: '/contact',
        templateUrl: 'views/contact.html',
        controller: 'contactCtrl'
      });
  })
  .run(function ($rootScope, loginService) {
    $rootScope.$on('$stateChangeStart', function (event, toState, toParams) {
      var requireLogin = toState.data.requireLogin;
      
      if (requireLogin && !loginService.islogged()) {
        event.preventDefault();
        // get me a login modal!
      }
  });
});



