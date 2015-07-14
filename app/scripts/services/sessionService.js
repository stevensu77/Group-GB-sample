'use strict';

angular.module('gbApp')
.factory('sessionService', ['$http', function($http){
	return{
		set:function(key,value){
			return sessionStorage.setItem(key,value);
		},
		get:function(key){
			return sessionStorage.getItem(key);
		},
		destroy:function(key){
		//	$http.post('data/destroy_session.php');
			return sessionStorage.removeItem(key);
		}
	};
}]);