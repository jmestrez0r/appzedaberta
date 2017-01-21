angular.module("Elifoot").config( ['$routeProvider', function($routeProvider) {

    $routeProvider
    .when('/', {
      redirectTo: '/home'
    })
    .when('/home', {
      templateUrl: '/templates/pages/home/index.html',
      controller: 'NewsController'
    })
    .when('/leagues', {
      templateUrl: '/templates/pages/leagues/index.html',
      controller: 'LeaguesIndexController'
    })
    .when('/fixtures', {
      templateUrl: '/templates/pages/fixtures/index.html',
      controller: 'FixturesController'
    })
    .when('/about', {
      templateUrl: '/templates/pages/about/index.html'
    })

    .otherwise({
      redirectTo: '/home'
    });
}]);
