angular.module("Elifoot").config( ['$routeProvider', function($routeProvider) {

    $routeProvider
    .when('/', {
      redirectTo: '/home'
    })
    .when('/home', {
      templateUrl: '/templates/pages/home/index.html',
      controller: 'FeedsController'
    })
    .when('/leagues', {
      templateUrl: '/templates/pages/leagues/index.html',
      controller: 'LeaguesIndexController'
    })
    .when('/calendar', {
      templateUrl: '/templates/pages/calendar/index.html'
    })
    .when('/fixtures', {
      templateUrl: '/templates/pages/fixtures/index.html',
      controller: 'FixturesController'
    })
    .when('/about', {
      templateUrl: '/templates/pages/about/index.html'
    })
    .when('/teams', {
      templateUrl: '/templates/pages/teams/players.html',
      controller: 'TeamPlayersController'
    })
    .when('/classification', {
      templateUrl: '/templates/pages/classification/index.html'
    })
    .when('/classification', {
      templateUrl: '/templates/pages/classification/index.html'
    })

    .otherwise({
      redirectTo: '/home'
    });
}]);
