(function () {
  'use strict';
  
  angular.module('LunchCheckApp', [])
  .controller('LunchCheckController', LunchCheckController);
  
  LunchCheckController.$inject = ['$scope'];
  function LunchCheckController($scope) {
    $scope.lunchList = "";
    $scope.message = "";


    $scope.displayMessage = function () {
      
      var lunchItems = $scope.lunchList.split(",");
      var lunchItemsCount = lunchItems.length;

      for (var i = 0; i < lunchItems.length;  i++ ){
        if (lunchItems[i].trim() == "" ) {
          lunchItemsCount--;
        }
      }

     if (lunchItemsCount > 0){
        if (lunchItemsCount > 3) {
          $scope.message = "";
          $scope.errorMessage = 'Too much!';
        } else {
          $scope.errorMessage = "";
          $scope.message = "Enjoy!";
        }
      } else {
        $scope.message = "";
        $scope.errorMessage ='Please enter data first';
      }
    };

    $scope.clearMessage = function () {
      $scope.message = "";
      $scope.errorMessage = "";
    }
  }

  })();
  
  