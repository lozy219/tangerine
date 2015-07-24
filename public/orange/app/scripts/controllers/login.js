'use strict';

/**
 * @ngdoc function
 * @name orangeApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the orangeApp
 */
angular.module('orangeApp')
	.controller('LoginCtrl', ['$scope', '$http', 'UserService', 'md5', 'SweetAlert', function ($scope, $http, UserService, md5, SweetAlert) {
		$scope.$watch('adminPassword', function(newValue) {
				if (typeof newValue !== 'undefined'  && newValue.length === 14) {
					$scope.login();
				}
			}
		);

		$scope.login = function() {
			$http.post($scope.Constants.apiBaseUrl + 'login', {password: md5.createHash($scope.adminPassword)})
				.success(function(data) {
					console.log(data);
					if (data.status) {
						SweetAlert.swal('login successfully', '', 'success');
						UserService.isAdmin = true;
					} else {
						UserService.isAdmin = false;
					}
				});

		};
	}]);
