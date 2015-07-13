'use strict';

/**
 * @ngdoc function
 * @name orangeApp.controller:ProjectCellCtrl
 * @description
 * # ProjectCellCtrl
 * Controller of the orangeApp
 */
angular.module('orangeApp')
	.controller('ProjectCellCtrl', function ($scope, $timeout) {
		$scope.toggleExpansion = function() {
			$scope.isExpanded = !$scope.isExpanded;
			if ($scope.isExpanded) {
				$timeout(function() {
					$scope.showReleases = $scope.isExpanded;
				}, 200);	
			} else {
				$scope.showReleases = $scope.isExpanded;
			}
		}
	});
