var app = angular.module("portfolio", ["ngRoute", "ngMask"]);

app.run(function ($rootScope, $timeout) { 
    $rootScope.lockScroll = true
    $rootScope.isLoading = true

    $rootScope.stopLoading = function() {
        $rootScope.isLoading = false
    }

    $timeout(function () {
        $rootScope.isLoading = false;
        $rootScope.lockScroll = false
    }, 2);


})

app.controller('navCtrl', function($rootScope, $scope) {

    $scope.isActive = false

    $scope.toggleMenu = function(e) {
        $rootScope.lockScroll = !$rootScope.lockScroll
        $scope.isActive = !$scope.isActive
    }
  });

  app.controller('contactCtrl', function($rootScope, $scope) {

    $scope._replyto = ""

    $scope.printEmail = function() {
        console.log($scope.emailAddress)
    }

  });