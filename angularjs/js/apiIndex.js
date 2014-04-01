
angular.module('uiRouterExample', [
  'ui.router'
])

.config(function($stateProvider, $urlRouterProvider){
  $stateProvider
  .state('home', {
    url:'/home',
    templateUrl:'templates/home.html'
  })
  .state('list', {
    url:'/list',
    templateUrl:'templates/list.html',
    controller:'ListCtrl'
  })
   .state('list.item', {
    url:'/:item',
    templateUrl:'templates/list.item.html',
    controller:function($scope, $stateParams){
      $scope.item = $stateParams.item;
    }
    
  })
   ;
})

.controller('ListCtrl', function($scope){
  $scope.photoList = [
      {"name":"1", "title":"닭발"},
      {"name":"2", "title":"회덮밥"},
      {"name":"6", "title":"케익"},
      {"name":"4", "title":"대봉"},
      {"name":"5", "title":"스테이크"}
  ];

  $scope.selectItem = function(selectedItem){
    _($scope.photoList).each(function(item){
      item.selected = false;
      if(selectedItem === item){
        selectedItem.selected = true;
      }
    });
  };

});

