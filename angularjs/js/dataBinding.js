var mainSlide = function($scope){
	$scope.users=[
		{"no":1,"title":"부평역_닭발", "contents":56.22}
		,{"no":2,"title":"가산디지털_회정식", "contents":38.22}
		,{"no":3,"title":"부평역_부대찌개", "contents":11.11}
		,{"no":4,"title":"광주_감", "contents":11.11}
		,{"no":5,"title":"부평역_아웃백", "contents":56.22}
		,{"no":6,"title":"부평역_케익", "contents":38.22}
		,{"no":7,"title":"종로_아웃백", "contents":11.11}
		,{"no":8,"title":"부평역_햄버거", "contents":11.11}
		,{"no":9,"title":"강남_샤브샤브", "contents":56.22}
		,{"no":10,"title":"아웃백", "contents":38.22}
		,{"no":11,"title":"부평역_커피빈", "contents":11.11}
		,{"no":12,"title":"떡볶이", "contents":11.11}
		,{"no":13,"title":"강남역", "contents":56.22}
		,{"no":14,"title":"케익", "contents":38.22}
		,{"no":15,"title":"강남역", "contents":11.11}
		,{"no":16,"title":"커피숍", "contents":11.11}
	];
	//검색 건수
	$scope.getCount=function(){
		var count = 0;
		var searchText = $("#search_text").val();
		
		angular.forEach($scope.users, function(user){
			if(user.title.indexOf(searchText)>=0)
				count += 1;
		});

		return count;
	}
	

}