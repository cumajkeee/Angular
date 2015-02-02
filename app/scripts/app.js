'use strict';

/**
 * @ngdoc overview
 * @name angularTrainingApp
 * @description
 * # angularTrainingApp
 *
 * Main module of the application.
 */
/*angular
  .module('angularTrainingApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
*/

(function (){
  var app = angular.module('blog', []);

  /*Task #2 controllers*/
  app.controller('PostsCtrl', function ($scope) {
    $scope.posts = [
      {
        img: 'img/img1.jpg',
        title: 'Blogotitle of blogopost about blogoflowers',
        titleHref: '#',
        time: '22:58 Jan 01, 2014',
        author: 'by E. Hyperraccoon',
        authorHref: '#',
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium consequatur dolore dolores dolorum expedita facere ipsa iure laborum minima mollitia nobis, officiis, quas qui quis quos tempora, veritatis voluptate voluptatibus? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque deleniti dolores iusto maxime porro quisquam quos voluptates! A ab ad architecto atque deleniti, ea eligendi eum facilis illo incidunt inventore iste iusto labore laudantium libero mollitia nisi omnis quibusdam quidem quos reiciendis rem repellat repudiandae rerum, sit suscipit tenetur voluptate.'
      },
      {
        img: 'img/img2.jpg',
        title: 'Blogotitle of blogopost about blogoflowers',
        titleHref: '#',
        time: '22:58 Jan 01, 2014',
        author: 'by E. Hyperraccoon',
        authorHref: '#',
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium consequatur dolore dolores dolorum expedita facere ipsa iure laborum minima mollitia nobis, officiis, quas qui quis quos tempora, veritatis voluptate voluptatibus? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque deleniti dolores iusto maxime porro quisquam quos voluptates! A ab ad architecto atque deleniti, ea eligendi eum facilis illo incidunt inventore iste iusto labore laudantium libero mollitia nisi omnis quibusdam quidem quos reiciendis rem repellat repudiandae rerum, sit suscipit tenetur voluptate.'
      },
      {
        img: 'img/img1.jpg',
        title: 'Blogotitle of blogopost about blogoflowers',
        titleHref: '#',
        time: '22:58 Jan 01, 2014',
        author: 'by E. Hyperraccoon',
        authorHref: '#',
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium consequatur dolore dolores dolorum expedita facere ipsa iure laborum minima mollitia nobis, officiis, quas qui quis quos tempora, veritatis voluptate voluptatibus? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque deleniti dolores iusto maxime porro quisquam quos voluptates! A ab ad architecto atque deleniti, ea eligendi eum facilis illo incidunt inventore iste iusto labore laudantium libero mollitia nisi omnis quibusdam quidem quos reiciendis rem repellat repudiandae rerum, sit suscipit tenetur voluptate.'
      },
      {
        img: 'img/img2.jpg',
        title: 'Blogotitle of blogopost about blogoflowers',
        titleHref: '#',
        time: '22:58 Jan 01, 2014',
        author: 'by E. Hyperraccoon',
        authorHref: '#',
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium consequatur dolore dolores dolorum expedita facere ipsa iure laborum minima mollitia nobis, officiis, quas qui quis quos tempora, veritatis voluptate voluptatibus? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque deleniti dolores iusto maxime porro quisquam quos voluptates! A ab ad architecto atque deleniti, ea eligendi eum facilis illo incidunt inventore iste iusto labore laudantium libero mollitia nisi omnis quibusdam quidem quos reiciendis rem repellat repudiandae rerum, sit suscipit tenetur voluptate.'
      }
    ];
  });
})();