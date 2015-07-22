'use strict';

/**
 * @ngdoc sbdir, ebdir
 * @name gbApp
 * @description
 * # slide in add box and edit box 
 * 
 */
angular.module('gbApp')
	.directive('sbdir', function(){
		return {
			restrict: 'E',
			templateUrl: 'views/Sbtem.html',
			link: function(scope, element, attrs){
				scope.cancelDeduction = function(){
					scope.bool = !scope.bool;
            		scope.deductionName = '';
            		scope.shortDis = '';
            		scope.longDis = '';
            		scope.userValue = '';
				};
				scope.submitDeduction = function() {
            		scope.bool = !scope.bool;
            		scope.deductions.push({
                   		'deductionName': scope.deductionName, 
                	 'shortDescription': scope.shortDis, 
                 	  'longDescription': scope.longDis,
                           		'value': scope.userValue
               		 });        
            		scope.deductionName = '';
            		scope.shortDis = '';
            		scope.longDis = '';
            		scope.userValue = '';
        		};
			}
		};
	})
	.directive('ebdir', function(){
		return {
			restrict: 'E',
			templateUrl: 'views/Ebtem.html',
			link: function(scope, element, attrs){
				scope.ebcancelDeduction = function() {
            		scope.editbool = !scope.editbool;
        		};
        		scope.ebsubmitDeduction = function() {
            		scope.editbool = !scope.editbool;
            		scope.deductions[scope.indexFlag].deductionName = scope.editName;
            		scope.deductions[scope.indexFlag].longDescription = scope.editShort;
            		scope.deductions[scope.indexFlag].shortDescription = scope.editLong;
            		scope.deductions[scope.indexFlag].value = scope.editValue;
        		};
			}
		};
	});
	