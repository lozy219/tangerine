'use strict';

/**
 * @ngdoc function
 * @name orangeApp.controller:HomeCtrl
 * @description
 * # HomeCtrl
 * Controller of the orangeApp
 */
angular.module('orangeApp')
	.controller('HomeCtrl', function ($scope, $http) {
		$http.get($scope.Constants.apiBaseUrl + 'full_project')
			.success(function (data, status, headers, config) {
				$scope.projects = data;
			})
			.error(function (data, status, headers, config) {
				console.log(data);
			});

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

	});



// $scope.projects = [
// 			{
// 				id: 1,
// 				title: 'SampleStore',
// 				client: 'Singpost',
// 				release: {
// 					ios: [
// 						{
// 							id: 1,
// 							version: '1.8.3'
// 						},
// 						{
// 							id: 2,
// 							version: '1.8.5'
// 						},
// 						{
// 							id: 3,
// 							version: '1.8.6'
// 						},
// 						{
// 							id: 4,
// 							version: '1.8.7'
// 						},
// 						{
// 							id: 5,
// 							version: '1.9.0'
// 						}
// 					],
// 					android: [
// 						{
// 							id: 3,
// 							version: '2.3.6'
// 						},
// 						{
// 							id: 4,
// 							version: '1.2.1'
// 						}
// 					]
// 				}
// 			},
// 			{
// 				id: 2,
// 				title: 'TWG App',
// 				client: 'TWG',
// 				release: {
// 					ios: [
// 						{
// 							id: 1,
// 							version: '1.8.3'
// 						},
// 						{
// 							id: 2,
// 							version: '1.8.5'
// 						}
// 					],
// 					android: [
// 						{
// 							id: 3,
// 							version: '2.3.6'
// 						},
// 						{
// 							id: 4,
// 							version: '1.2.1'
// 						}
// 					]
// 				}
// 			},
// 			{
// 				id: 3,
// 				title: 'FastFast',
// 				client: 'Codigo',
// 				release: {
// 					ios: [
// 						{
// 							id: 1,
// 							version: '1.8.3'
// 						},
// 						{
// 							id: 2,
// 							version: '1.8.5'
// 						}
// 					],
// 					android: [
// 						{
// 							id: 3,
// 							version: '2.3.6'
// 						},
// 						{
// 							id: 4,
// 							version: '1.2.1'
// 						}
// 					]
// 				}
// 			},
// 			{
// 				id: 4,
// 				title: 'Singapore GP',
// 				client: 'Singapore grandprix',
// 				release: {
// 					ios: [
// 						{
// 							id: 1,
// 							version: '1.8.3'
// 						},
// 						{
// 							id: 2,
// 							version: '1.8.5'
// 						}
// 					]
// 				}
// 			},
// 		];