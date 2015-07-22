'use strict';

/**
 * @ngdoc loginCtrl
 * @name gbApp
 * @description
 * # Controller for the login page
 * 
 */
angular.module('gbApp')
  .controller('loginCtrl', function ($scope, loginService) {
    $scope.msgtxt = '';
	$scope.login = function(data){
		//call login service
		loginService.login(data, $scope); 
	};
  });
