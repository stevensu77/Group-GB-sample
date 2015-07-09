'use strict';

angular.module('gbApp')
    .controller('deductionCtrl', function($scope, $window, getUserService) {
        getUserService.getUser().$promise.then(function(response) {
            $scope.userName = response.userName;
        });

        var indexFlag = 0;
        $scope.SbHeight = $window.innerHeight-100+'px';
        $scope.bool = true;
        $scope.editbool = true;
        $scope.deductions=[];
        $scope.addDeduction = function(){
        	$scope.bool = false;
        	$scope.OriPos = '-100px';
        
        }
        $scope.editDeduction = function(index){
            $scope.editbool = false;
            $scope.editOriPos = '-100px';
            indexFlag = index;
            $scope.editName = $scope.deductions[index].deductionName;
            $scope.editShort = $scope.deductions[index].longDiscription;
            $scope.editLong = $scope.deductions[index].shortDiscription;
            $scope.editValue = $scope.deductions[index].value;
            
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
        $scope.ebcancelDeduction = function(){
            $scope.editbool =true;
        }
        $scope.ebsubmitDeduction = function(){
            $scope.editbool =true;

            $scope.deductions[indexFlag].deductionName = $scope.editName;
            $scope.deductions[indexFlag].longDiscription = $scope.editShort;
            $scope.deductions[indexFlag].shortDiscription = $scope.editLong;
            $scope.deductions[indexFlag].value = $scope.editValue;
 
        }
    });