'use strict';

angular.module('gbApp')
    .controller('deductionCtrl', function($scope, $http, getUserService) {
        getUserService.getUser().$promise.then(function(response) {
            $scope.userName = response.userName;
        });

        $http.get('/api/deduction').
        success(function(data) {
            $scope.deductions = data.deductions;
            console.log(data);
        }).
        error(function(data, status, headers, config) {
            console.log("ERROR WITH HTTP CALL");
        });

        // $scope.deductions = [{
        //     'name': 'Nexus S',
        //     'shortDiscription': 'Fast just got faster with Nexus S.'
        // }, {
        //     'name': 'Motorola XOOM™ with Wi-Fi',
        //     'shortDiscription': 'The Next, Next Generation tablet.'
        // }, {
        //     'name': 'MOTOROLA XOOM™',
        //     'shortDiscription': 'The Next, Next Generation tablet.'
        // }];

        console.log('deduction state');
    });
