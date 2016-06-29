angular.module('flowerbook').controller('flowerctrl',['$scope', '$location', '$route', 'flowerservice',
	function($scope, $location, $route, flowerservice){
	var _scope = {};
  _scope.init = function() {
	  $scope.flowerdetails = flowerservice.model.get();
	  flowerservice.list.get($scope.flowerdetails);
	  if($route.current.params.id){
	  	$scope.getdetails($route.current.params.id)
	  }
	}
	$scope.getdetails=function(index){
		flowerservice.single.get($scope.flowerdetails).then(function(response){
			console.log($scope.flowerdetails.single)
			// $location.path("/flower")
		})
	}
	_scope.init();
}]);

