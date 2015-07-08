'use strict';

angular.module('gbApp')
  .controller('rootCtrl', function($scope, loginService) {
    console.log('root state');
    $scope.logout = function(){
    	loginService.logout();
    }
  });
