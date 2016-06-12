var myapp=angular.module('myApp',['ui.router']);

myapp.config(function($stateProvider, $urlRouterProvider){
    $urlRouterProvider.otherwise('/home');
    $stateProvider
    .state('home',{
          url:'/home',
          templateUrl:'home.html'
    })
});

myapp.controller('MainCtrl',function($scope){
});