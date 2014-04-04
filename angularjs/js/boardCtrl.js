
myApp.controller('listCtrl', function($scope){
	$scope.dataList = [
		{"no":1, "title":"안녕하세요 ","contents":"첫가입인사합니다", "done":false}
		,{"no":2, "title":"반가워요", "contents":"만나서 반가워요","done":false}
		,{"no":3, "title":"환영합니다", "contents":"가입을 환영합니다","done":false}
		,{"no":4, "title":"축하드립니다", "contents":"가입을 축하드려요","done":true}
	];
	//영역 제어
	$scope.editView = false;
	$scope.show = function(){
		return $scope.editView =! $scope.editView;
	};
	
	//todo list 추가
	$scope.addNew = function(){
		$scope.dataList.push({
			"no":$scope.dataList.length+1
			,"title":$scope.newTitle
			,"contents":$scope.newTitle
			, "done":false
		});
		$scope.newTaskBody = '';
	};
	//체크된 건수 조회
	$scope.getDoneCount = function(){
		var count = 0;
		angular.forEach($scope.dataList, function(data){
				count += data.done?1:0;
		});

		return count;
	};
	//선택 삭제
	$scope.deleteDone =function(){
		var olddataLists = $scope.dataList;
		$scope.dataList=[];
		angular.forEach(olddataLists, function(data){
			if(!data.done)$scope.dataList.push(data);
		})
	};
	
});

//상세페이지
myApp.controller('viewCtrl', function($scope, $stateParams){
    
    $scope.detailData=[];
    var lits = $scope.$parent.dataList;
   
    angular.forEach(lits, function(data){
        if( data.no==$stateParams.item){
          $scope.detailData.push(data);
      }
    });  

});
//검색페이지
myApp.controller('searchController', function($scope, $http){
	$scope.mediaResults = [];
	$scope.doSearch = function () {
		$scope.searchTerm = "Michelle Branch";
		$scope.mediaType = "musicTrack";
	        
        $scope.searching = true;
        var type = ($scope.mediaType === "all") ? "" : $scope.mediaType;
        $http
          .jsonp(
          	'https://itunes.apple.com/search',
          	{ params: { 
          		term: $scope.searchTerm, 
          		entity: type, callback: 'JSON_CALLBACK' 
          	} })
          .success(function (response) { 
          	$scope.mediaResults = response.results; 
          })
          .finally(function () { 
          	$scope.searching = false; 
          });
      };
});

