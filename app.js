var app = angular.module("portfolio", ["ngRoute", "ngMask"]);

app.run(function ($rootScope) { 
    $rootScope.lockScroll = false

    // code for animating the cards

})

app.controller('navCtrl', function($rootScope, $scope) {

    $scope.isActive = false

    $scope.toggleMenu = function(e) {
        $rootScope.lockScroll = !$rootScope.lockScroll
        $scope.isActive = !$scope.isActive
    }
  });

  app.controller('contactCtrl', function($rootScope, $scope) {

    $scope.phoneNumber = ""


  });