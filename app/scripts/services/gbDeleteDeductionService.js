
angular.module('gbApp')
  .factory('deleteDeductionService', function($resource) {
    return $resource('/api/deduction/:id', {}, {
      deleteDed: {method: 'Delete'}
    });
  });
