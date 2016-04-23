var myapp=angular.module("myapp",['ngRoute']);
myapp.config(['$routeProvider',function($routeProvider){
  $routeProvider.when('/home',{
  	templateUrl:'home.html'
  })
  .when('/room1',{
  	templateUrl:'room1.html'
  })
  .when('/room2',{
  	templateUrl:'room2.html'
  })
  .otherwise('/route.html')
}])
