'use strict';

/**
 * @ngdoc function
 * @name testClientApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the testClientApp
 */
angular.module('testClientApp')
  .controller('MainCtrl', function ($scope, Container) {
    console.log('main controller');

    $scope.file_changed = function(element) {
      var myfile = element.files[0];
      Container.upload({container: 'test1'}, {file: myfile}).$promise.then(function(){
        console.log('file uploaded!');
      });
    };


  });
