
angular.module('gbApp')
  .factory('deleteDeductionService', function($resource) {
    return $resource('/api/deduction/:id', {}, {
      deleteDeduction: {method: 'Delete'}
      params: {id: 'id'}
    });
  });
