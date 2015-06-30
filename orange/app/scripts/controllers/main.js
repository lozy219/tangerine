'use strict';

/**
 * @ngdoc function
 * @name orangeApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the orangeApp
 */
angular.module('orangeApp')
	.controller('MainCtrl', function ($scope) {
		$scope.awesomeThings = [
			'HTML5 Boilerplate',
			'AngularJS',
			'Karma'
		];
	});
