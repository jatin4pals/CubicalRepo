'use strict';

/**
 * @ngdoc function
 * @name cubicalApp.factory:ArtistFactory
 * @description
 * # ArtistFactory
 * Controller of the cubicalApp
 */
angular.module('cubicalApp')
  .factory('ArtistFactory', function () {
      var tracksLoaded = false;
      var tracks = [];
      return {
          loadTracks: function () {
              tracksLoaded = true;
          },
          areTracksLoaded: function () {
              return tracksLoaded;
          },
          setTracks: function (tr) {
              tracks = tr;
          },
          getTracks: function () {
              return tracks;
          }
      };
  });
