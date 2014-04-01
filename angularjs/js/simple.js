var myApp = angular.module('uiApp', ['ui.router']);
myApp.config(function($stateProvider, $urlRouterProvider) {
  //
  // For any unmatched url, redirect to /state1
  $urlRouterProvider.otherwise("/settings");
  //
  // Now set up the states
  $stateProvider
    .state('settings', {
      url: "/settings",
      views:{
        "viewA":{templateUrl:"settings.html"},
        "viewB":{template:"<p>저장되지 않으니 주의하세요.</p>"}
      }
     // templateUrl: "settings.html"
    })
    .state('settings.profile', {
      url: "/profile",
      templateUrl: "settings/profile.html",
      controller: function($scope) {
        $scope.items = ["블로그로그인한다.", "편집버튼 클릭한다.", "편집한다.", "저장한다."];
      }
    })
    .state('settings.email', {
      url: "/email",
      templateUrl: "settings/email.html",
      controller: function($scope) {
        $scope.items = ["로그인한다.", "설정을 찾는다", "개인정보를 변경한다.", "저장한다."];
      }
    })
    .state('settings.background', {
      url: "/background",
      templateUrl: "settings/background.html",
      controller: function($scope) {
        $scope.items = ["오른쪽버튼클릭한다", "요소보기 클릭한다.", "boackground찾는다", "변경해본다."];
      }
    })
    .state('settings.password', {
      url: "/password",
      templateUrl: "settings/password.html",
      controller: function($scope) {
       $scope.items = ["변경되지않으니 전화하기", "02-321-0101"];
      }
    })
});

myApp.controller('MainCtrl', function($scope){
  $scope.whoami= "Main Controller";
  $scope.greet = "Hello";
});

myApp.controller('NavCtrl', function($scope){
  $scope.whoami= "Nav Controller";
  
});

myApp.controller('SidecCtrl', function($scope){
  $scope.whoami= "Side Controller";
  
});