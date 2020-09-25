var app = angular.module("portfolio", ["ngRoute", "ngMask"]);

app.config(function($locationProvider) {
    $locationProvider.html5Mode({
        enabled: true,
        requireBase: false
    });
  });

app.run(function ($rootScope, $timeout) { 
    $rootScope.lockScroll = true
    $rootScope.isLoading = true
    $rootScope.showBoxShadow = true

    $rootScope.stopLoading = function() {
        $rootScope.isLoading = false
    }

    $timeout(function () {
        $rootScope.isLoading = false;
        $rootScope.lockScroll = false
    }, 3);

    $rootScope.showBoxShadow = false

    var prevScrollpos = window.pageYOffset;

    window.onscroll = function() {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos && currentScrollPos > 30) {
        document.getElementById("navbar").style.top = "0";
        document.getElementById("navbar").classList.add("boxShadow")
    }
    else if (currentScrollPos < 50){
        document.getElementById("navbar").style.top = "0";
        document.getElementById("navbar").classList.remove("boxShadow")
    } 
    else {
        document.getElementById("navbar").style.top = "-100px";
    }
    prevScrollpos = currentScrollPos;
    }

})

app.controller('navCtrl', function($rootScope, $scope, $timeout, $location) {

    $scope.isActive = false

    $scope.toggleMenu = function(e) {
        $rootScope.lockScroll = !$rootScope.lockScroll
        $scope.isActive = !$scope.isActive
    }

    $scope.toggleNav = function(e) {
        $timeout(function () {
            document.getElementById("navbar").style.top = "-100";
        }, 1000);
       
    }

  });

  app.controller('contactCtrl', function($rootScope, $scope) {

    $scope._replyto = ""

    $scope.printEmail = function() {
        console.log($scope.emailAddress)
    }

  });