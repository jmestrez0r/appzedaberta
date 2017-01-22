angular.module("Elifoot").controller('TeamPlayersController', function($scope, TeamPlayers) {

  TeamPlayers.all().success(function(data) {
      $scope.teamPlayers = data
      console.log(data);
  });
});
