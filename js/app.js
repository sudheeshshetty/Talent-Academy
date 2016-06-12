var myapp=angular.module('myApp',['ui.router']);

myapp.config(function($stateProvider, $urlRouterProvider){
    $urlRouterProvider.otherwise('/home');
    $stateProvider
    .state('home',{
          url:'/home',
          templateUrl:'home.html'
    })
    .state('course',{
        url:'/course',
        templateUrl:'course.html',
        controller:'MainCtrl'
    })
});

myapp.controller('MainCtrl',function($scope,$state){
    $scope.callCourse = function () {
        $state.go('course');
    };
});