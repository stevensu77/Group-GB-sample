'use strict';

/**
 * @ngdoc loginService
 * @name gbApp
 * @description
 * # Login, Logout and check login 
 * 
 */
angular.module('gbApp')
	.factory('loginService',function($http, $state, sessionService) {
		return{
			login: function(data, scope){
				//send data to login api
				var promise = $http.post('/api/login', data);
				promise.then(function(response){
						sessionService.set('user','tmx');
						$state.go('root.deduction');
					}, function(response){
						scope.msgtxt = 'incorrect information';  
						scope.user.password = '';
					}				   
				);
			},
			logout: function(){
				sessionService.destroy('user');
				$state.go('login');
			},
			islogged: function(){
				return !!sessionService.get('user');
			}
		};
	});