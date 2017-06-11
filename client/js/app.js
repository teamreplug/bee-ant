todoApp = angular.module('todoApp', ['ngRoute'])
  .config(function($routeProvider) {
    $routeProvider
	.when('/', {
	    templateUrl: '/main/index.html',
	    controller: 'TodoCtrl'
	})
	.when('/addNote', {
	    templateUrl : 'main/notes-new.html',
	    controller  : 'TodoCtrl'
    })
    .when('/viewNote', {
        templateUrl : 'main/notes-view.html',
        controller  : 'TodoCtrl'
    })
    .when('/images', {
        templateUrl : 'main/images.html',
        controller  : 'TodoCtrl'
    })
    .when('/aboutus', {
        templateUrl : 'main/faqs.html',
        controller  : 'TodoCtrl'
    })
    .when('/user', {
        templateUrl : 'main/user.html',
        controller  : 'TodoCtrl'
    }).otherwise({
        redirectTo: '/'
      });
  });
