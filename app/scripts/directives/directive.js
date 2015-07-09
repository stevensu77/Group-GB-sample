'use strict';

angular.module('gbApp')
.directive('sbdir',function(){
	return{
		restrict: 'E',
		templateUrl: 'Sbtem.html'
	};
})
.directive('ebdir',function(){
	return{
		restrict: 'E',
		templateUrl: 'Ebtem.html'
	};
});
