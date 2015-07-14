'use strict';

angular.module('gbApp')
.directive('sbdir',function(){
	return{
		restrict: 'E',
		templateUrl: 'views/Sbtem.html'
	};
})
.directive('ebdir',function(){
	return{
		restrict: 'E',
		templateUrl: 'views/Ebtem.html'
	};
});