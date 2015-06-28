'use strict';

angular.module('gbApp')
  .factory('getUserService', function($resource) {
    return $resource('/api/getuser', {}, {
      getUser: {method: 'GET'}
    });
  });
