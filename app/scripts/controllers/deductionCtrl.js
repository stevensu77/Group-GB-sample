'use strict';

angular.module('gbApp')
  .controller('deductionCtrl', function($scope, $http, getUserService) {
    getUserService.getUser().$promise.then(function(response) {
      $scope.userName = response.userName;
    });
    $scope.deleteDeduction = function(index) {
      if (window.confirm("Are U sure to delete?")) {
        $scope.deductions.splice(index, 1);
      }
    };
    $scope.displayMethod="displaylist";
    $http.get('/api/deduction').
      success(function(data){
        $scope.deductions = data.deductions;
        console.log(data);
      }).
      error(function(data,status,headers,config){
        console.log("ERROR")
      });


    console.log('deduction state');
  });
