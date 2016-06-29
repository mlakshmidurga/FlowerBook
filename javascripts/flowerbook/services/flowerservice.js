angular.module('flowerbook').service('flowerservice',['$http', '$rootScope', 'toastr',
	function($http,$rootScope,toastr){
		var get_defalut=function(){
  	return{
  		list:[],
  		single:{}
  	};
  }

  var flowers=function(flowers){
    return $http.get('/rest/users/flowers.json').
    success(function(response){
      flowers.list=response;
    }).error(function(response){
      toastr.error('error');
    });
  }
  
  var flower=function(details){
    return $http.get('rest/users/flower.json').
    success(function(response){
      details.single=response;
    }).error(function(response){
      toastr.error('error');
    });
  }

  return{
  	list:{
  		get: flowers
  	},
  	single:{
      get: flower
  	},
  	model:{
  		get:get_defalut
  	}
  }
}]);