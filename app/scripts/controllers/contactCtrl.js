'use strict';

angular.module('gbApp')
.controller('contactCtrl', function($scope, $modal, $log){
	$scope.open = function(size) {
        $scope.$modalInstance = $modal.open({
            scope: $scope,
            templateUrl: "views/confirmBox.html",
            size: size,
        })
    };

    $scope.ok = function() {
        $scope.$modalInstance.close();
        console.log("Yes");
    };

    $scope.cancel = function() {
        $scope.$modalInstance.dismiss('cancel');
        console.log("No");
    };
});