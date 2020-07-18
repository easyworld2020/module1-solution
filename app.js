(function () {
  'use strict';
  
  angular.module('LunchCheckApp', [])
  .controller('LunchCheckController', LunchCheckController);
  
  LunchCheckController.$inject = ['$scope'];
  function LunchCheckController($scope) {
    $scope.lunchList = "";
    $scope.message = "";


    $scope.displayMessage = function () {
      var lunchList = $scope.lunchList.trim();
      if (lunchList) {
        var lunchItems = lunchList.split(",");
        if ((lunchItems.length >3 && lunchItems[3]) || lunchItems.length >4 ) {
          $scope.message = "Too much!";
        } else {
          $scope.message = "Enjoy!";
        }
      } else {
        $scope.message ='Please enter data first.';
      }
    };

    $scope.checkList = function () {
      var lunchList = $scope.lunchList.trim();
      if (!lunchList) {
        $scope.message ='';
      }
    }
  }

  })();
  
  