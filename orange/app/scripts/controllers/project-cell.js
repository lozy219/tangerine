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
		$scope.$watch(
			function () {
				return $scope.$parent.expandedProject.id;
			}, function(newValue, oldValue) {
				if (oldValue === $scope.projectId) {
					$scope.showReleases = false;
				} else if (newValue === $scope.projectId) {
					$timeout(function() {
						$scope.showReleases = true;
					}, 200);
				}
			}
		);

		$scope.toggleExpansion = function() {
			if ($scope.$parent.expandedProject.id !== $scope.projectId) {
				$scope.$parent.expandedProject.id = $scope.projectId;
				$timeout(function() {
					$scope.showReleases = true;
				}, 200);
			} else {
				$scope.$parent.expandedProject.id = -1;
				$scope.showReleases = false;
			}
		};
	});
