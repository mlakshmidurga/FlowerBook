angular.module('flowerbook').service('users', ['$http', '$rootScope', 'toastr',
function($http, $rootScope, toastr) {
  var get_default=function(){
  	return{
  		list:[],
  		single:{}
  	};
  }
  var signin=function(userdetails, user) {
		return $http.get('/rest/users/signin.json', userdetails).
    success(function(response) {
      user.single = response;
      toastr.success("Login successfully")
  	}).error(function(response) {
    	toastr.error("Something went wrong")
  	});
  }
  var signup = function(signup_paramas, register) {
    return $http.get('/rest/users/signup.json',signup_paramas).
      success(function(response) {
      	register.single=response;
      toastr.success("register successfully")
    }).error(function(response) {
    	toastr.error("something went wrong")
     
    });
  }
  return{
  	list: {
  		
    },
    single:{
    },
    signin: signin,
    signup: signup,
    model: {
      get: get_default
    }
  }
}]);
