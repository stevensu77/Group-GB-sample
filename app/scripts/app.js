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



