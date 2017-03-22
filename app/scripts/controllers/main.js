'use strict';

/**
 * @ngdoc function
 * @name cubicalApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the cubicalApp
 */
angular.module('cubicalApp')
  .controller('MainCtrl', function ($scope, ArtistFactory, $mdDialog) {


      $scope.areTracksLoaded = function () {
          return ArtistFactory.areTracksLoaded();
      };

      $scope.trackData = [];

      $scope.$watch('areTracksLoaded()', function (newVal, oldVal) {
          if (newVal && newVal !== oldVal) {
              $scope.trackData = ArtistFactory.getTracks();
          }
      });

      $scope.showAdvanced = function (ev) {
          $mdDialog.show({
              controller: DialogController,
              templateUrl: 'views/dialog1.tmpl.html',
              parent: angular.element(document.body),
              targetEvent: ev,
              clickOutsideToClose: true,
              fullscreen: $scope.customFullscreen // Only for -xs, -sm breakpoints.
          })
          .then(function (answer) {
              $scope.status = 'You said the information was "' + answer + '".';
          }, function () {
              $scope.status = 'You cancelled the dialog.';
          });
      };

      function DialogController($scope, ArtistFactory, $mdDialog, $http) {

          //$scope.artist = {};

          $scope.hide = function () {
              $mdDialog.hide();
          };

          $scope.cancel = function () {
              $mdDialog.cancel();
          };

          $scope.answer = function (answer) {
              $mdDialog.hide(answer);
          };

          $scope.GetTracks = function () {
              if ($scope.artist && $scope.artist.name && $scope.artist.name.toLowerCase() === 'jack' && $scope.artist.trackCount === 4) {

                  $http.jsonp('http://itunes.apple.com/search?term=jack&limit=4', { jsonpCallbackParam: 'callback' })
                  .then(function (result) {
                      $scope.hide();
                      ArtistFactory.setTracks(result.data.results);
                      ArtistFactory.loadTracks();
                  });
              }
          };
      }

  });
