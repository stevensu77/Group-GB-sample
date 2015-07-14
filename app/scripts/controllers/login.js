'use strict';

/**
 * @ngdoc function
 * @name gbApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the gbApp
 */
angular.module('gbApp')
  .controller('loginCtrl', function ($scope, loginService) {
    //console.log('Login state');
    $scope.msgtxt='';
	$scope.login = function(data){
		loginService.login(data,$scope); //call login service
	};

  });
