'use strict';

/**
 * @ngdoc function
 * @name orangeApp.controller:ProjectCellCtrl
 * @description
 * # ProjectCellCtrl
 * Controller of the orangeApp
 */
angular.module('orangeApp')
	.controller('ProjectCellCtrl', ['$scope', '$timeout', '$window', 'SweetAlert', function ($scope, $timeout, $window, SweetAlert) {
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

		$scope.toggleExpansion = function(event) {
			if ($scope.$parent.expandedProject.id !== $scope.projectId) {
				$scope.$parent.expandedProject.id = $scope.projectId;
				$timeout(function() {
					$scope.showReleases = true;
				}, 200);
			} else {
				$scope.$parent.expandedProject.id = -1;
				$scope.showReleases = false;
			}

			
			var target = $(event.target).closest('.animate-cell');
			if (target.hasClass('expanded-cell')) {
				$('.expanded-cell').removeClass('expanded-cell');
			} else {
				$('.expanded-cell').removeClass('expanded-cell');
				target.addClass('expanded-cell');
			}
			
			if ($scope.isExpanded) {
				setTimeout(function() {$('.masonry').masonry('layout');}, 5);
			} else {
				setTimeout(function() {$('.masonry').masonry('layout');}, 200);
			}

		};

		$scope.downloadRedirect = function(link, version, platform) {
			SweetAlert.swal({
				title: 'Are you sure?',
				text: 'You are trying to download ' + $scope.projectTitle + ' v' + version +' for ' + platform,
				type: 'warning',
				showCancelButton: true,
				confirmButtonColor: '#DD6B55', 
				confirmButtonText: 'Yes, download it!',
				cancelButtonText: 'No, cancel pls!',
				closeOnConfirm: false,
				closeOnCancel: false 
			}, 
			function(isConfirm){ 
				if (isConfirm) {
					SweetAlert.swal('Downloading', '', 'success');
					$window.location.href = link;
					// $location.url(link);
				} else {
					SweetAlert.swal('Cancelled', '', 'error');
				}
			});
		};
	}]);
