'use strict';

/**
 * @ngdoc function
 * @name angularTrainingApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularTrainingApp
 */
angular.module('angularTrainingApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
