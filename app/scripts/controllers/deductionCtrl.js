'use strict';

angular.module('gbApp')
    .controller('deductionCtrl', function($scope, getUserService) {
        getUserService.getUser().$promise.then(function(response) {
            $scope.userName = response.userName;
        });

        $scope.deductions = [{
            'name': 'Nexus S',
            'shortDiscription': 'Fast just got faster with Nexus S.'
        }, {
            'name': 'Motorola XOOM™ with Wi-Fi',
            'shortDiscription': 'The Next, Next Generation tablet.'
        }, {
            'name': 'MOTOROLA XOOM™',
            'shortDiscription': 'The Next, Next Generation tablet.'
        }];

        console.log('deduction state');
    });
