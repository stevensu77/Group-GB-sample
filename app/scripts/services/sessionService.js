'use strict';

/**
 * @ngdoc seesionService
 * @name gbApp
 * @description
 * # Generate, Access and Destroy 
 *   session Storage
 */
angular.module('gbApp')
	.factory('sessionService', function() {
		return{
			set:function(key, value){
				return sessionStorage.setItem(key, value);
			},
			get:function(key){
				return sessionStorage.getItem(key);
			},
			destroy:function(key){
				return sessionStorage.removeItem(key);
			}
		};
	});