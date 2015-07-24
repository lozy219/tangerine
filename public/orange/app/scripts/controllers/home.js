'use strict';

/**
 * @ngdoc function
 * @name orangeApp.controller:HomeCtrl
 * @description
 * # HomeCtrl
 * Controller of the orangeApp
 */
angular.module('orangeApp')
	.controller('HomeCtrl', ['$scope', 'Upload', '$http', 'SweetAlert', function ($scope, Upload, $http, SweetAlert) {

		$scope.loadData = function() {
			$http.get($scope.Constants.apiBaseUrl + 'full_project')
				.success(function (data) {
					$scope.projects = data;
				})
				.error(function (data) {
					console.log(data);
				});
		};

		$scope.loadData();

		$scope.upload = function (file, version) {
			var fd = new FormData();
			fd.append('file', file);
			fd.append('version', version);

			$http.post($scope.Constants.apiBaseUrl + 'release', fd, {
					withCredentials: true,
					headers: {'Content-Type': undefined},
					transformRequest: angular.identity
				})
				.success(function() {
					SweetAlert.swal('upload successfully', '', 'success');
					$scope.uploadedFiles = [];
					$scope.rejectedFiles = [];
					$scope.fileVersion = [];
					$scope.loadData();
				})
				.error(function() {
					SweetAlert.swal('upload failed', '', 'error');
				});
		};

		$scope.expandedProject = {
			id: -1
		};

		$scope.getPlatform = function(project) {
			var keys = Object.keys(project.release);
			if (keys.length === 2) {
				return 'cross';
			}
			if (keys.length === 1) {
				return keys[0].toLowerCase();
			}

			return undefined;
		};

	}]);
