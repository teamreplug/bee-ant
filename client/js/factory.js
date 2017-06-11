todoApp.factory('todosFactory', function($http) {
  var urlBase = '/api/todos';
  var _todoService = {};

  _todoService.get = function() {
    return $http.get(urlBase);
  };

  _todoService.save = function(todo) {
    return $http.post(urlBase, todo);
  };

  _todoService.update = function(todo) {
    return $http.put(urlBase, todo);
  };

  _todoService.delete = function(id) {
    return $http.delete(urlBase + '/' + id);
  };

  return _todoService;
});
