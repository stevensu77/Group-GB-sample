'use strict';

angular.module('gbApp')
  .controller('deductionCtrl', function($scope, $window, getUserService, $http) {
    // getUserService.getUser().$promise.then(function(response) {
    //   $scope.userName = response.userName;
    // });
  $scope.displayModel = "list";
  $scope.sorting = "deductionName";
  $scope.reverse = false;
  $scope.sortingBy = function(flag){
    $scope.sorting = flag;
    $scope.reverse = !$scope.reverse;
  }


  	    $http.get('/api/deduction').
        success(function(data) {
            $scope.deductions = data.deductions;
            console.log(data);
        }).
        error(function(data, status, headers, config) {
            console.log("ERROR WITH HTTP CALL");
        });

        $scope.deleteDeduction = function(index){
        	if(window.confirm("Are U sure to delete?")){
        		$scope.deductions.splice(index,1);
        	}
        }


        var indexFlag = 0;
        $scope.SbHeight = $window.innerHeight-250+'px';
        $scope.bool = true;
        $scope.editbool = true;

        $scope.addDeduction = function(){
            $scope.bool = !$scope.bool;
            $scope.OriPos = '-100px';
        //    console.log("add box");
        
        }
        $scope.editDeduction = function(index){
            $scope.editbool = !$scope.editbool;
            $scope.editOriPos = '-100px';
            indexFlag = index;
            $scope.editName = $scope.deductions[index].deductionName;
            $scope.editShort = $scope.deductions[index].longDescription;
            $scope.editLong = $scope.deductions[index].shortDescription;
            $scope.editValue = $scope.deductions[index].value;
            
        }        
        $scope.cancelDeduction = function(){
            $scope.bool =!$scope.bool;
            $scope.deductionName='';
            $scope.shortDis='';
            $scope.longDis='';
            $scope.userValue='';
        }
        $scope.submitDeduction = function(){
            $scope.bool =!$scope.bool;
            $scope.deductions.push({'deductionName':$scope.deductionName, 
                'shortDescription':$scope.shortDis, 
                'longDescription':$scope.longDis,
                 'value':$scope.userValue});        
            $scope.deductionName='';
            $scope.shortDis='';
            $scope.longDis='';
            $scope.userValue='';
 
        }
        $scope.ebcancelDeduction = function(){
            $scope.editbool =!$scope.editbool;
        }
        $scope.ebsubmitDeduction = function(){
            $scope.editbool =!$scope.editbool;

            $scope.deductions[indexFlag].deductionName = $scope.editName;
            $scope.deductions[indexFlag].longDescription = $scope.editShort;
            $scope.deductions[indexFlag].shortDescription = $scope.editLong;
            $scope.deductions[indexFlag].value = $scope.editValue;
 
        }





 //   console.log('deduction state');
  });
