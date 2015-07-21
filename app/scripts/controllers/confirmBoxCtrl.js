'use strict';

/**
 * @ngdoc overview
 * @name gbApp
 * @description
 * # deductionCtrl
 *
 * controller deductionCtrl.
 */
angular.module('gbApp')
  .controller('confirmBoxCtrl', function ($scope, $modalInstance) {
	$scope.ok = function () {
    	$modalInstance.close("Yes");
  	};

  	$scope.cancel = function () {
    	$modalInstance.dismiss('cancel');
  	};
});