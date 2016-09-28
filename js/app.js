var myApp = angular.module('myApp', [
	'ngRoute',
	'ngAnimate',
	'portfolioController'
	]);

myApp.config(['$routeProvider', function($routeProvider) {
	$routeProvider.
	when('/splash', {
		templateUrl: 'views/splash.html',
		controller: 'PortfolioListController'
	}).
	when('/shop', {
		templateUrl: 'views/shop.html',
		controller: 'PortfolioListController'
	}).
	when('/support', {
		templateUrl: 'views/support.html',
		controller: 'DetailsController'
	}).
	when('/about', {
		templateUrl: 'views/about.html',
		controller: 'PortfolioListController'
	}).
	when('/registration', {
		templateUrl: 'views/registration.html',
		controller: 'IntroPageController'
	}).
	when('/contact', {
		templateUrl: 'views/contact.html',
		controller: 'IntroPageController'
	}).
	otherwise({
		redirectTo: '/splash.html'

	});

	}]);