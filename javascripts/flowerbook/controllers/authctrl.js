angular.module('flowerbook').controller('authctrl',['$scope', '$location', 'users',
  function($scope, $location, users) {
    var _scope = {};
  _scope.init = function() {
    $scope.submitted = false;
    $scope.user = users.model.get()
    $scope.register=users.model.get()
  }
  $scope.signin = function(userdetails) {
    $scope.submitted = true;
    users.signin(userdetails, $scope.user).then(function(response){
      $location.path('/');
  	});	
	}
  $scope.signup = function(signup_paramas) {
 		users.signup(signup_paramas,$scope.register).then(function(response){
    $location.path('/signin');
    });
	}
  _scope.init();
}]);
