'use strict';

/**
 * @ngdoc deductionCtrl
 * @name gbApp
 * @description
 * # Controller for the deduction page
 */
angular.module('gbApp')
  .controller('deductionCtrl', function($scope, $window, getUserService, $http, $modal) {
  
        // initial data display mode to be "List"
        $scope.displayModel = "list";
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
                console.log("Error with deduction api Call");
            });


        // Delete deduction node
        $scope.deleteDeduction = function (removeItem) {
            var modalInstance = $modal.open({
                templateUrl: 'views/confirmBox.html',
                controller: 'confirmBoxCtrl'
            });

            modalInstance.result.then(function (selectedItem) {
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
                        console.log("Delete Api failed");
                    });

            }, function () {
                console.log('No');
            });
        };

        // Edit box and add box
        $scope.indexFlag = 0;
        $scope.bool = true;
        $scope.editbool = true;

        $scope.addDeduction = function(){
            $scope.SbHeight = $window.innerHeight - 250 + 'px';
            $scope.bool = !$scope.bool;
            $scope.OriPos = '-100px';       
        };

        $scope.editDeduction = function(Item) {
            $scope.SbHeight = $window.innerHeight - 250 + 'px';
            $scope.editbool = !$scope.editbool;
            $scope.editOriPos = '-100px';
            $scope.indexFlag = $scope.deductions.indexOf(Item);

            $scope.editName = Item.deductionName;
            $scope.editShort = Item.longDescription;
            $scope.editLong = Item.shortDescription;
            $scope.editValue = Item.value;        
        };

  });
