angular
	.module('ngTrainingApp')
	.directive('blogPost', function() {
		return {
			restrict: 'E',
			templateUrl: 'templates/blog-post.html',
			replace: true
		};
	})

	.directive('popup', function() {
		return {
			restrict: 'E',
			templateUrl: 'templates/popup.html',
			replace: true
		};
	});

