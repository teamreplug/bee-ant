todoApp.controller('TodoCtrl', function($rootScope, $scope, todosFactory, $http) {

  $scope.todos = [];
  $scope.isEditable = [];

  $scope.testbind = "emmanuel";
  $scope.send = "send";
  console.log("trying");

  // get all Todos on Load
  todosFactory.get().then(function(data) {
    $scope.todos = data.data;
  });

  // Save a Todo to the server
  $scope.save = function($event) {
    if ($event.which == 13 && $scope.todoInput) {

      todosFactory.save({
        "todo": $scope.todoInput,
        "isCompleted": false
      }).then(function(data) {
        console.log($scope.todos);
        $scope.todos.push(data.data);
      });
      $scope.todoInput = '';
    }
  };

  

  //update the status of the Todo
  $scope.updateStatus = function($event, _id, i) {
    var cbk = $event.target.checked;
    var _t = $scope.todos[i];
    todosFactory.update({
      _id: _id,
      isCompleted: cbk,
      todo: _t.todo
    }).then(function(data) {
      if (data.data.updatedExisting) {
        _t.isCompleted = cbk;
      } else {
        alert('Oops something went wrong!');
      }
    });
  };

  // Update the edited Todo
  $scope.edit = function($event, i) {
    if ($event.which == 13 && $event.target.value.trim()) {
      var _t = $scope.todos[i];
      todosFactory.update({
        _id: _t._id,
        todo: $event.target.value.trim(),
        isCompleted: _t.isCompleted
      }).then(function(data) {
              console.log(data);
        if (data.data.updatedExisting) {
          _t.todo = $event.target.value.trim();
          $scope.isEditable[i] = false;
        } else {
          alert('Oops something went wrong!');
        }
      });
    }
  };

  // Delete a Todo
  $scope.delete = function(i) {
    todosFactory.delete($scope.todos[i]._id).then(function(data) {
      if (data.data) {
        $scope.todos.splice(i, 1);
      }
    });
  };

  // $scope.images = function(){
  //   $http({
  //     method : 'GET',
  //     url : 'https://unsplash.it/list',
  //     headers: {'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'}
  //   }).then(function(response){
  //     var log = response.data;
  //   });    
  // };

$scope.images = function() {
    $http({
      method: "GET",
      header: {
        'Content-Type': "application/json",
      },
      url: "https://api.unsplash.com/photos/?client_id=1a28e59e586593faf822eb102154d46e8f56c830d3e5d896a0293804233f991a&per_page=30&page=2",
    }).then(function(res) {
        var totalFound = res.data.length;

        var photos = [];

        for (var i = 0; i < totalFound; i++) {
          var full = res.data[i].urls.full;
          var regular = res.data[i].urls.regular;
          var raw = res.data[i].urls.raw;
          var small = res.data[i].urls.small;
          var thumb = res.data[i].urls.thumb;

          photos.push({
            full: full,
            regular: regular,
            raw: raw,
            small: small,
            thumb: thumb
          });
        }

        $scope.photos = photos;

      },
      function(res) {
        console.log('error', res);
      });
  };

  $scope.images();


});
