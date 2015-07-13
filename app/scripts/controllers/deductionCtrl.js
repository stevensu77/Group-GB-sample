'use strict';

angular.module('gbApp')
    .controller('deductionCtrl', function($scope, $http, getUserService, deleteDeductionService) {
        getUserService.getUser().$promise.then(function(response) {
            $scope.userName = response.userName;
        });
        $scope.displayMethod = "displaycard"
        $http.get('/api/deduction').
        success(function(data) {
            $scope.deductions = data.deductions;
            console.log(data);
        }).
        error(function(data, status, headers, config) {
            console.log("ERROR WITH HTTP CALL");
        });

        $scope.deleteDeduction = function(index) {
            if (window.confirm("Are U sure to delete?")) {
                $scope.deductions.splice(index, 1);
             
                
                $id = deduction.id;

                // Now call update passing in the ID first then the object you are updating
                deleteDed.delete({
                    id: $id
                }, deduction);

                //       deleteDeductionService.deleteDeduction($scope.deductions[index].id);

                // $http.delete(/api/deduction/:id).then(function(response) {
                //     console.log('all is good', response.data);
                // }, function(error) {
                //     console.log('an error occurred', error.data);
                // });
            }
        }
        console.log('deduction state');
    });
