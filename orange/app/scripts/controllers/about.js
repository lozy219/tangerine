'use strict';

/**
 * @ngdoc function
 * @name orangeApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the orangeApp
 */
angular.module('orangeApp')
	.controller('AboutCtrl', function ($scope) {
		$scope.awesomeThings = [
			'HTML5 Boilerplate',
			'AngularJS',
			'Karma'
		];
	});
