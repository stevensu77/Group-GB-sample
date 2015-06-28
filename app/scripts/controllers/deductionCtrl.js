'use strict';

angular.module('gbApp')
  .controller('deductionCtrl', function($scope, getUserService) {
    getUserService.getUser().$promise.then(function(response) {
      $scope.userName = response.userName;
    });

    console.log('deduction state');
  });
