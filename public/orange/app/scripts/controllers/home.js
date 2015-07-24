'use strict';

/**
 * @ngdoc function
 * @name orangeApp.controller:HomeCtrl
 * @description
 * # HomeCtrl
 * Controller of the orangeApp
 */
angular.module('orangeApp')
	.controller('HomeCtrl', ['$scope', 'Upload', '$http', '$location', 'SweetAlert', function ($scope, Upload, $http, $location, SweetAlert) {

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

		// $scope.projects = [
		// 	{
		// 		id: 1,
		// 		title: 'SampleStore',
		// 		client: 'Singpost',
		// 		release: {
		// 			ios: [
		// 				{
		// 					id: 1,
		// 					version: '1.8.3',
		// 					link: 'https://github.com/lozy219'
		// 				},
		// 				{
		// 					id: 2,
		// 					version: '1.8.5',
		// 					link: 'https://github.com/lozy219'
		// 				},
		// 				{
		// 					id: 3,
		// 					version: '1.8.6',
		// 					link: 'https://github.com/lozy219'
		// 				},
		// 				{
		// 					id: 4,
		// 					version: '1.8.7',
		// 					link: 'https://github.com/lozy219'
		// 				},
		// 				{
		// 					id: 5,
		// 					version: '1.9.0',
		// 					link: 'https://github.com/lozy219'
		// 				}
		// 			],
		// 			android: [
		// 				{
		// 					id: 3,
		// 					version: '2.3.6',
		// 					link: 'https://github.com/lozy219'
		// 				},
		// 				{
		// 					id: 4,
		// 					version: '1.2.1',
		// 					link: 'https://github.com/lozy219'
		// 				}
		// 			]
		// 		}
		// 	},
		// 	{
		// 		id: 2,
		// 		title: 'TWG App',
		// 		client: 'TWG',
		// 		release: {
		// 			ios: [
		// 				{
		// 					id: 1,
		// 					version: '1.8.3',
		// 					link: 'https://github.com/lozy219'
		// 				},
		// 				{
		// 					id: 2,
		// 					version: '1.8.5',
		// 					link: 'https://github.com/lozy219'
		// 				}
		// 			],
		// 			android: [
		// 				{
		// 					id: 3,
		// 					version: '2.3.6',
		// 					link: 'https://github.com/lozy219'
		// 				},
		// 				{
		// 					id: 4,
		// 					version: '1.2.1',
		// 					link: 'https://github.com/lozy219'
		// 				}
		// 			]
		// 		}
		// 	},
		// 	{
		// 		id: 3,
		// 		title: 'FastFast',
		// 		client: 'Codigo',
		// 		release: {
		// 			ios: [
		// 				{
		// 					id: 1,
		// 					version: '1.8.3',
		// 					link: 'https://github.com/lozy219'
		// 				},
		// 				{
		// 					id: 2,
		// 					version: '1.8.5',
		// 					link: 'https://github.com/lozy219'
		// 				}
		// 			],
		// 			android: [
		// 				{
		// 					id: 3,
		// 					version: '2.3.6',
		// 					link: 'https://github.com/lozy219'
		// 				},
		// 				{
		// 					id: 4,
		// 					version: '1.2.1',
		// 					link: 'https://github.com/lozy219'
		// 				}
		// 			]
		// 		}
		// 	},
		// 	{
		// 		id: 4,
		// 		title: 'Singapore GP',
		// 		client: 'Singapore grandprix',
		// 		release: {
		// 			ios: [
		// 				{
		// 					id: 1,
		// 					version: '1.8.3',
		// 					link: 'https://github.com/lozy219'
		// 				},
		// 				{
		// 					id: 2,
		// 					version: '1.8.5',
		// 					link: 'https://github.com/lozy219'
		// 				}
		// 			],
		// 		}
		// 	},
		// 	{
		// 		id: 5,
		// 		title: 'SampleStore',
		// 		client: 'Singpost',
		// 		release: {
		// 			ios: [
		// 				{
		// 					id: 1,
		// 					version: '1.8.3',
		// 					link: 'https://github.com/lozy219'
		// 				},
		// 				{
		// 					id: 2,
		// 					version: '1.8.5',
		// 					link: 'https://github.com/lozy219'
		// 				},
		// 				{
		// 					id: 3,
		// 					version: '1.8.6',
		// 					link: 'https://github.com/lozy219'
		// 				},
		// 				{
		// 					id: 4,
		// 					version: '1.8.7',
		// 					link: 'https://github.com/lozy219'
		// 				},
		// 				{
		// 					id: 5,
		// 					version: '1.9.0',
		// 					link: 'https://github.com/lozy219'
		// 				}
		// 			],
		// 			android: [
		// 				{
		// 					id: 3,
		// 					version: '2.3.6',
		// 					link: 'https://github.com/lozy219'
		// 				},
		// 				{
		// 					id: 4,
		// 					version: '1.2.1',
		// 					link: 'https://github.com/lozy219'
		// 				}
		// 			]
		// 		}
		// 	},
		// 	{
		// 		id: 6,
		// 		title: 'TWG App',
		// 		client: 'TWG',
		// 		release: {
		// 			ios: [
		// 				{
		// 					id: 1,
		// 					version: '1.8.3',
		// 					link: 'https://github.com/lozy219'
		// 				},
		// 				{
		// 					id: 2,
		// 					version: '1.8.5',
		// 					link: 'https://github.com/lozy219'
		// 				}
		// 			],
		// 			android: [
		// 				{
		// 					id: 3,
		// 					version: '2.3.6',
		// 					link: 'https://github.com/lozy219'
		// 				},
		// 				{
		// 					id: 4,
		// 					version: '1.2.1',
		// 					link: 'https://github.com/lozy219'
		// 				}
		// 			]
		// 		}
		// 	},
		// 	{
		// 		id: 7,
		// 		title: 'FastFast',
		// 		client: 'Codigo',
		// 		release: {
		// 			ios: [
		// 				{
		// 					id: 1,
		// 					version: '1.8.3',
		// 					link: 'https://github.com/lozy219'
		// 				},
		// 				{
		// 					id: 2,
		// 					version: '1.8.5',
		// 					link: 'https://github.com/lozy219'
		// 				}
		// 			],
		// 			android: [
		// 				{
		// 					id: 3,
		// 					version: '2.3.6',
		// 					link: 'https://github.com/lozy219'
		// 				},
		// 				{
		// 					id: 4,
		// 					version: '1.2.1',
		// 					link: 'https://github.com/lozy219'
		// 				}
		// 			]
		// 		}
		// 	},
		// 	{
		// 		id: 8,
		// 		title: 'Singapore GP',
		// 		client: 'Singapore grandprix',
		// 		release: {
		// 			ios: [
		// 				{
		// 					id: 1,
		// 					version: '1.8.3',
		// 					link: 'https://github.com/lozy219'
		// 				},
		// 				{
		// 					id: 2,
		// 					version: '1.8.5',
		// 					link: 'https://github.com/lozy219'
		// 				}
		// 			]
		// 		}
		// 	},
		// ];

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
