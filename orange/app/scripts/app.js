'use strict';

/**
 * @ngdoc overview
 * @name orangeApp
 * @description
 * # orangeApp
 *
 * Main module of the application.
 */
angular
	.module('orangeApp', [
		'ngAnimate',
		'ngAria',
		'ngCookies',
		'ngMessages',
		'ngResource',
		'ngRoute',
		'ngSanitize',
		'ngTouch',
		'ui.sortable'
	])
	.config(function ($routeProvider) {
		$routeProvider
			.when('/', {
				templateUrl: 'views/home/home.html',
				controller: 'HomeCtrl',
				css: 'styles/home/home.css'
			})
			// .when('/upload', {
			// 	templateUrl: 'views/upload.html',
			// 	controller: 'UploadCtrl',
			// 	css: 'styles/upload/upload.css'
			// })
			.otherwise({
				redirectTo: '/'
			});
	})
	.directive('head', ['$rootScope', '$compile',
		function($rootScope, $compile){
			return {
				restrict: 'E',
				link: function(scope, elem){
					var html = '<link rel="stylesheet" ng-repeat="(routeCtrl, cssUrl) in routeStyles" ng-href="{{cssUrl}}" />';
					elem.append($compile(html)(scope));
					scope.routeStyles = {};
					$rootScope.$on('$routeChangeStart', function (e, next, current) {
						if(current && current.$$route && current.$$route.css){
							if(!angular.isArray(current.$$route.css)){
								current.$$route.css = [current.$$route.css];
							}
							angular.forEach(current.$$route.css, function(sheet){
								delete scope.routeStyles[sheet];
							});
						}
						if(next && next.$$route && next.$$route.css){
							if(!angular.isArray(next.$$route.css)){
								next.$$route.css = [next.$$route.css];
							}
							angular.forEach(next.$$route.css, function(sheet){
								scope.routeStyles[sheet] = sheet;
							});
						}
					});
				}
			};
		}
	])
	.run(function($rootScope) {
		$rootScope.Utils = {
			keys: Object.keys
		}
	});