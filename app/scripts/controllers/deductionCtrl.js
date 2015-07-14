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

        $scope.deleteDeduction = function(removeItem){
            var products = $scope.deductions;
            var length = products.length;
            var removeIndex = -1;
            for(var ii=0; ii<length; ii++){
                if(angular.equals(products[ii], removeItem)){
                    removeIndex = ii;
                    break;
                }
            }
            if(window.confirm("Are U sure to delete?")){
                $scope.deductions.splice(removeIndex,1);
            }
        }

        // $scope.deleteDeduction = function(index){
        //     var did = $scope.deductions[index].id;
        //     if(window.confirm("Are U sure to delete?")){
        //     //  $scope.deductions.splice(index,1);
        //     $http.delete("/api/deduction/:id", {id:did})
        //     .success(function(res){
        //        // console.log(res);
        //        if(res.status == "success"){
        //           $scope.deductions.splice(index,1);
        //           alert("Delete succeeds!");
        //        }
        //     });
        //     }
        // }




        var indexFlag = 0;
        $scope.SbHeight = $window.innerHeight-250+'px';
        $scope.bool = true;
        $scope.editbool = true;

        $scope.addDeduction = function(){
            $scope.bool = !$scope.bool;
            $scope.OriPos = '-100px';
        //    console.log("add box");
        
        }
        $scope.editDeduction = function(Item){
            $scope.editbool = !$scope.editbool;
            $scope.editOriPos = '-100px';
            indexFlag = -1;

            var products = $scope.deductions;
            var length = products.length;

            for(var ii=0; ii<length; ii++){
                if(angular.equals(products[ii], Item)){
                    indexFlag = ii;
                    break;
                }
            }

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
