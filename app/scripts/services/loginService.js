'use strict';
angular.module('gbApp')
.factory('loginService',function($http, $state, sessionService){
	return{
		login: function(data, scope){
			var promise= $http.post('/api/login', data); //send data to login api
			promise.then(function(response){
				//	scope.msgtxt='Correct information';
				//	console.log(response);
					sessionService.set('user',"Todd");
					$state.go('root.deduction');
				}, function(response){
					scope.msgtxt='incorrect information';  
					scope.user.password = "";
					$state.go('login');
				}				   
			);
		},
		logout: function(){
			sessionService.destroy('user');
			$state.go('login');
		},
		islogged:function(){
			if(sessionService.get('user')) return true;
			else return false;	
		}
	};
});