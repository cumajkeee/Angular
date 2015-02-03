	app.factory('Post', function($resource) {
		return $resource('http://54.72.3.96:3000/posts/:_id', {}, {
			update: {
				method: 'PUT'
			}
		})
	})
	.controller('MainCtrl', ['$scope', '$route','Post',
		function($scope, $route, Post) {
			$scope.posts = Post.query();
			$scope.showPopup = false;

			$scope.addPost = function() {
				$scope.showPopup = true;
				$scope.post = new Post();
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

				$scope.post = new Post();
				$scope.showPopup = false;
			};

			$scope.deletePost = function() {
				Post.delete({_id: this.post._id});
				var index = $scope.posts.indexOf(this.post);
				$scope.posts.splice(index, 1);
			}
		}]
	);
