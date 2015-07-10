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
	.directive('masonry', function () {
		var NGREPEAT_SOURCE_RE = '<!-- ngRepeat: ((.*) in ((.*?)( track by (.*))?)) -->';
		return {
			compile: function(element, attrs) {
				// auto add animation to brick element
				// var animation = attrs.ngAnimate || 'masonry';
				var $brick = element.children();
				attrs = attrs;
				// $brick.attr('ng-animate', animation);
				
				// generate item selector (exclude leaving items)
				var type = $brick.prop('tagName');
				var itemSelector = type + ':not([class$="-leave-active"])';
				
				return function (scope, element, attrs) {
					var options = angular.extend({
						itemSelector: itemSelector
					}, scope.$eval(attrs.masonry));
					
					// try to infer model from ngRepeat
					if (!options.model) { 
						var ngRepeatMatch = element.html().match(NGREPEAT_SOURCE_RE);
						if (ngRepeatMatch) {
							options.model = ngRepeatMatch[4];
						}
					}
					
					// initial animation
					element.addClass('masonry');
					
					// Wait inside directives to render
					setTimeout(function () {
						element.masonry(options);
						
						element.on('$destroy', function () {
							element.masonry('destroy');
						});
						
						if (options.model) {
							scope.$apply(function() {
								scope.$watchCollection(options.model, function (_new, _old) {
									if (_new === _old) {
										return;
									}
									
									// Wait inside directives to render
									setTimeout(function () {
										element.masonry('reloadItems');
										element.masonry();
									});
								});
							});
						}
					});
				};
			}
		};
	})
	.run(function($rootScope) {
		$rootScope.Utils = {
			keys: Object.keys
		};
	});