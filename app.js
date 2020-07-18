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
        for (var i = 0, l = lunchItems.length; i < l; ++i) {
          lunchItems[i] = lunchItems[i].trim();
        }
        var lunchItemsCount = lunchItems.filter(Boolean).length;
  
        if (lunchItemsCount >3) {
          $scope.message = "";
          $scope.errorMessage = 'Too much!';
        } else {
          $scope.errorMessage = '';
          $scope.message = "Enjoy!";
        }
      } else {
        $scope.message ='';
        $scope.errorMessage ='Please enter data first';
      }
    };

    $scope.clearMessage = function () {
      $scope.message ='';
      $scope.errorMessage = '';
    }
  }

  })();
  
  