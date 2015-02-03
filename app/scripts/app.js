var app = angular
	.module('ngTrainingApp', [
		'ngAnimate',
		'ngCookies',
		'ngResource',
		'ngRoute',
		'ngSanitize',
		'ngTouch'
	]);
	app.config(function ($routeProvider) {
		$routeProvider
		.when('/', {
			templateUrl: 'views/main.html',
			controller: 'MainCtrl'
		})
		.when('/post', {
			templateUrl: 'views/post.html',
			controller: ''
		})
		.otherwise({
			redirectTo: '/'
		});
	});





