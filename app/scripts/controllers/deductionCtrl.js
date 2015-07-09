'use strict';

angular.module('gbApp')
    .controller('deductionCtrl', function($scope, $window, getUserService) {
        getUserService.getUser().$promise.then(function(response) {
            $scope.userName = response.userName;
        });
        $scope.SbHeight = $window.innerHeight-100+'px';
        $scope.bool = true;
        $scope.deductions=[];
        $scope.addDeduction = function(){
        	$scope.bool = false;
        	$scope.OriPos = '-100px';
            
        }
        $scope.cancelDeduction = function(){
        	$scope.bool =true;
        	$scope.deductionName='';
        	$scope.shortDis='';
        	$scope.longDis='';
        	$scope.userValue='';
        }
        $scope.submitDeduction = function(){
        	$scope.bool =true;
        	$scope.deductions.push({'deductionName':$scope.deductionName, 
        		'shortDiscription':$scope.shortDis, 
        		'longDiscription':$scope.longDis,
        		 'value':$scope.userValue});       	
        	$scope.deductionName='';
        	$scope.shortDis='';
        	$scope.longDis='';
        	$scope.userValue='';
 
        }
    });