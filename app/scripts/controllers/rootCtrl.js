'use strict';

angular.module('gbApp')
  .controller('rootCtrl', function($scope, loginService, getUserService) {
    console.log('root state');
    getUserService.getUser().$promise.then(function(response) {
      $scope.userName = response.userName;
    });
    $scope.logout = function(){
    	loginService.logout();
    }
    $scope.myDate = new Date();
  });
