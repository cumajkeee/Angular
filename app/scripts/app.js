var app = angular
  .module('ngTrainingApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.router',
    'customFilters'
  ])

  .factory('Posts', function($resource) {
    return $resource('http://54.72.3.96:3000/posts/:_id', {}, {
      update: {
        method: 'PUT'
      }
    })
  })

  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/post/:_id', {
        templateUrl: 'views/post.html',
        controller: 'PostCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  })

  .controller('PostCtrl', ['$scope', '$route', '$routeParams', 'Posts',
    function($scope, $route, $routeParams, Posts) {
      Posts.get({_id: $routeParams._id}).$promise.then(function (data){
        debugger;
        $scope.post = data;
      });
    }]
  )

  .controller('MainCtrl', ['$scope', '$route', 'Posts',
    function($scope, $route, Posts) {
      $scope.posts = Posts.query();
      $scope.showPopup = false;

      $scope.addPost = function() {
        $scope.showPopup = true;
        $scope.post = new Posts();
      };

      $scope.editPost = function() {
        $scope.showPopup = true;
        $scope.post = this.post;
      };

      $scope.save = function() {
        if($scope.post._id){
          var id =  $scope.post._id;
          delete $scope.post._id;
          Post.update({_id: id}, $scope.post);
        } else {
          $scope.post.$save().then(function(response) {
            $scope.posts.push(response)
          });
        }

        $scope.post = new Posts();
        $scope.showPopup = false;
      };

      $scope.deletePost = function() {
        Posts.delete({_id: this.post._id});
        var index = $scope.posts.indexOf(this.post);
        $scope.posts.splice(index, 1);
      }
    }]
  );







