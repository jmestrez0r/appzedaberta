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
      templateUrl: '/templates/pages/calendar/index.html',
      controller: 'CalendarController'
    })
    .when('/fixtures', {
      templateUrl: '/templates/pages/fixtures/index.html',
      controller: 'FixturesController'
    })
    .when('/practices', {
      templateUrl: '/templates/pages/practices/index.html',
      controller: 'PracticesController'
    })
    .when('/about', {
      templateUrl: '/templates/pages/about/index.html'
    })
    .when('/teams', {
      templateUrl: '/templates/pages/teams/players.html',
      controller: 'TeamPlayersController'
    })
    .when('/classification', {
      templateUrl: '/templates/pages/classification/index.html',
      controller: 'ClassificationController'
    })
    .otherwise({
      redirectTo: '/home'
    });
}]);
