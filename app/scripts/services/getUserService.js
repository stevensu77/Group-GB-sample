'use strict';

/**
 * @ngdoc getUserService
 * @name gbApp
 * @description
 * # Get the user
 * 
 */
angular.module('gbApp')
  .factory('getUserService', function($resource) {
    return $resource('/api/getuser', {}, {
      getUser: {method: 'GET'}
    });
  });
