var mainCtrl = function($scope, $http){

	$scope.tasks = [
		{"body":"do this 1", "done":false}
		,{"body":"do this 2", "done":false}
		,{"body":"do this 3", "done":false}
		,{"body":"do this 4", "done":true}

	];
	//todo list 추가
	$scope.addNew = function(){
		$scope.tasks.push({"body":$scope.newTaskBody,"done":false});
		$scope.newTaskBody = '';
	}
	//체크된 건수 조회
	$scope.getDoneCount = function(){
		var count = 0;
		angular.forEach($scope.tasks, function(task){
				count += task.done?1:0;
		});

		return count;
	}
	//삭제
	$scope.deleteDone =function(){
		var oldTasks = $scope.tasks;
		$scope.tasks=[];
		angular.forEach(oldTasks, function(task){
			if(!task.done)$scope.tasks.push(task);
		})
	}
}