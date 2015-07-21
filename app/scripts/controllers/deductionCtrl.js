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
  .controller('deductionCtrl', function($scope, $window, getUserService, $http, $modal) {
  
        $scope.displayModel = "list";      // initial data display mode to be "List"
        $scope.sorting = "deductionName"; 
        $scope.reverse = false;
        $scope.sortingBy = function(flag){
            $scope.sorting = flag;
            $scope.reverse = !$scope.reverse;
        }


        // Call api get deduction data
  	    $http.get('/api/deduction')
        .success(function(data) {
            $scope.deductions = data.deductions;
        })
        .error(function(data, status, headers, config) {
            console.log("Erro with deduction api Call");
        });


        // Delete deduction node
        $scope.deleteDeduction = function (removeItem) {
            var modalInstance = $modal.open({
                templateUrl: 'views/confirmBox.html',
                controller: 'confirmBoxCtrl'
            });

            modalInstance.result.then(function (selectedItem) {
                console.log(selectedItem);
                $http.delete("/api/deduction/:id", {id:removeItem.id})
                .success(function(res){
                    if(res.status == "success"){
                        $scope.deductions.splice($scope.deductions.indexOf(removeItem), 1);
                    }
                    else{
                        console.log("Delete failed!");
                    }
                })
                .error(function(res){
                        console.log("Delete Api failed")
                });

            }, function () {
                console.log('No');
            });
        };



        var indexFlag = 0;
        $scope.bool = true;
        $scope.editbool = true;

        $scope.addDeduction = function(){
            $scope.SbHeight = $window.innerHeight-250+'px';
            $scope.bool = !$scope.bool;
            $scope.OriPos = '-100px';
        
        }
        $scope.editDeduction = function(Item){
            $scope.SbHeight = $window.innerHeight-250+'px';
            $scope.editbool = !$scope.editbool;
            $scope.editOriPos = '-100px';
            indexFlag = $scope.deductions.indexOf(Item);

            $scope.editName = Item.deductionName;
            $scope.editShort = Item.longDescription;
            $scope.editLong = Item.shortDescription;
            $scope.editValue = Item.value;
            
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
            $scope.deductions.push({
                   'deductionName':$scope.deductionName, 
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
  });
