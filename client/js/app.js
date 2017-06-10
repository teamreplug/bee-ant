firefuse = angular.module('firefuse', ['ngRoute'])
  .config(function($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: '/partials/home.html',
        controller: 'firefuseCtrl'
      }).otherwise({
        redirectTo: '/'
      });
  });
