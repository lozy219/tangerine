'use strict';

/**
 * @ngdoc function
 * @name orangeApp.controller:HomeCtrl
 * @description
 * # HomeCtrl
 * Controller of the orangeApp
 */
angular.module('orangeApp')
	.controller('HomeCtrl', ['$scope', 'Upload', '$http', '$location', '$window', function ($scope, Upload, $http, $location, $window) {
		$http.get($scope.Constants.apiBaseUrl + 'full_project')
			.success(function (data) {
				$scope.projects = data;
			})
			.error(function (data) {
				console.log(data);
			});

		$scope.upload = function (file, version) {
			file.upload = Upload.http({
				url: $scope.Constants.apiBaseUrl + 'release',
				method: 'POST',
				headers: {
					'Content-Type': file.type
				},
				data: {'file': file, 'version': version}
			});

			file.upload.then(function (response) {
				console.log(response);
				file.result = response.data;
			}, function (response) {
				if (response.status > 0) {
					$scope.errorMsg = response.status + ': ' + response.data;
				}
			});

			file.upload.progress(function (evt) {
				file.progress = Math.min(100, parseInt(100.0 * evt.loaded / evt.total));
			});
		};

		$scope.downloadRedirect = function(link) {
			$window.location.href = link;
			// $location.url(link);
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
