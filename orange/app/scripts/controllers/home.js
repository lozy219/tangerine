'use strict';

/**
 * @ngdoc function
 * @name orangeApp.controller:HomeCtrl
 * @description
 * # HomeCtrl
 * Controller of the orangeApp
 */
angular.module('orangeApp')
	.controller('HomeCtrl', function ($scope, $timeout) {
		$scope.projects = [
			{
				id: 1,
				title: 'SampleStore',
				client: 'Singpost',
				release: {
					ios: [
						{
							id: 1,
							version: '1.8.3'
						},
						{
							id: 2,
							version: '1.8.5'
						}
					],
					android: [
						{
							id: 3,
							version: '2.3.6'
						},
						{
							id: 4,
							version: '1.2.1'
						}
					]
				}
			},
			{
				id: 2,
				title: 'TWG App',
				client: 'TWG',
				release: {
					ios: [
						{
							id: 1,
							version: '1.8.3'
						},
						{
							id: 2,
							version: '1.8.5'
						}
					],
					android: [
						{
							id: 3,
							version: '2.3.6'
						},
						{
							id: 4,
							version: '1.2.1'
						}
					]
				}
			},
			{
				id: 3,
				title: 'FastFast',
				client: 'Codigo',
				release: {
					ios: [
						{
							id: 1,
							version: '1.8.3'
						},
						{
							id: 2,
							version: '1.8.5'
						}
					],
					android: [
						{
							id: 3,
							version: '2.3.6'
						},
						{
							id: 4,
							version: '1.2.1'
						}
					]
				}
			},
			{
				id: 4,
				title: 'Singapore GP',
				client: 'Singapore grandprix',
				release: {
					ios: [
						{
							id: 1,
							version: '1.8.3'
						},
						{
							id: 2,
							version: '1.8.5'
						}
					]
				}
			},
		];

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

		setTimeout(function() {
			$('.cell-arrow').on('click', function () {
				$(this).closest('.animate-cell').toggleClass('expanded-cell');
				if ($scope.isExpanded) {
					setTimeout(function() {$('.masonry').masonry('layout');}, 5)	
				} else {
					setTimeout(function() {$('.masonry').masonry('layout');}, 200);
				}
			});
		}, 100);
	});
