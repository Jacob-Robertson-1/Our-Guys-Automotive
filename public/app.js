var app = angular.module('OurGuys', ['ui.router'])

app.config(function($stateProvider, $urlRouterProvider) {
	$urlRouterProvider.otherwise('/');

	$stateProvider
		.state('home', {
			url: "/",
			templateUrl: "./views/home.html",
			controller: "mainController"
		})
		.state('contact', {
			url: "/contact",
			templateUrl: "./views/contact.html",
			controller: "mainController"
		})
		.state('about', {
			url: "/about",
			templateUrl: "./views/about.html",
			controller: "mainController"
		})
		.state('deals', {
			url: "/deals",
			templateUrl: "./views/deals.html",
			controller: "mainController"
		})

})