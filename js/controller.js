var app = angular.module('myApp', ['ui.router']);
app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');
 
    $stateProvider
        .state('home', {
            url:'/',
            views: {
            'header': {
                templateUrl: 'header.html',
                controller: 'HeaderController'
            },
            'content': {
                templateUrl: 'home.html',
            },
            'footer': {
                templateUrl: 'footer.html'
            }
        }
        })
        .state('home.course', {
            url:'/course',
            views: {
            'content@': {
                templateUrl: 'course.html',
                controller: 'CourseController'
            }
        }
        })
        .state('home.course.frontend', {
            url:'/course/frontend',
            views: {
            'detail@home.course': {
                templateUrl: 'frontend.html'
            }
        }
        })
 
}]);

app.controller('HeaderController',['$scope','$state',function($scope,$state){
    $scope.callCourse = function () {
        $state.go('home.course');
    };
    $scope.callHome = function () {
        $state.go('home');
    };
}]);

app.controller('CourseController',['$scope','$state',function($scope,$state){
    $scope.FrontEndCourses() =function(){
        alert("hi");
        $state.go(home.course.frontend);
    }
}]);