'use strict';

/**
 * @ngdoc rootCtrl
 * @name gbApp
 * @description
 * # Controller for the root page 
 */
angular.module('gbApp')
  .controller('rootCtrl', function($scope, loginService, getUserService) {
    getUserService.getUser().$promise.then(function(response) {
      $scope.userName = response.userName;
    });

    $scope.logout = function(){
    	loginService.logout();
    };
    
    $scope.myDate = new Date();
  });
