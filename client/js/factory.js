firefuse.factory('firefuseFactory', function($http) {
  var urlBase = '/api/firefuse';
  var firefuse = {};

  firefuse.get = function() {
    return $http.get(urlBase);
  };

  firefuse.save = function(todo) {
    return $http.post(urlBase, todo);
  };

  firefuse.update = function(todo) {
    return $http.put(urlBase, todo);
  };

  firefuse.delete = function(id) {
    return $http.delete(urlBase + '/' + id);
  };

  return _todoService;
});
