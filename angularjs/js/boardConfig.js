var myApp = angular.module('boardApp', ['ui.router']);
myApp.config(function($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise("/home");

  $stateProvider
    .state('home', {
      url: "/home",
      template:'<p>여기서 간단한 게시판과 API를 이용한 검색을 살펴보겠습니다.</p>'     
    })
    .state('search', {
      url: "/search",
      templateUrl:'boardTemple/search.html'     
    })
    .state('board', {
      url: "/board",
      templateUrl:'boardTemple/list.html'     
    })
    .state('board.item', {
      url: "/:item",
      templateUrl:'boardTemple/list.data.html', 
      controller:'viewCtrl'
    })
});