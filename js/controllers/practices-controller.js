angular.module("Elifoot").controller('PracticesController',
  function($scope, $timeout, Practices, TeamPlayers) {

    //practice area
    $scope.practices = Practices.allPractices();
    console.log($scope.practices);

    $scope.visualizePractice = function(selected) {
      console.log('visualize practice' + selected);
      var practices = Practices.checkPractice(selected);
      console.log('visualize practice' + practices);
    }

    $scope.editPractice = function(selected) {
      console.log('edit practice' + selected);
      var practices = Practices.checkPractice(selected);
      console.log('edit practice' + practices);
    }

    $scope.duplicatePractice = function(selected) {
      console.log('duplicate practice' + selected);
      var practices = Practices.duplicatePractice(selected);
      console.log('duplicate practice' + practices);
    }

    $scope.removePractice = function(selected) {
      console.log('remove practice' + selected);
      var practices = Practices.removePractice(selected);
      console.log('remove practice' + practices);
    }

    //tablesize
    $scope.columns = [
      {'column': 1},
      {'column': 2},
      {'column': 3},
      {'column': 4}
    ];
    $scope.rows = [
      {'row': 1},
      {'row': 2},
      {'row': 3},
      {'row': 4},
      {'row': 5},
      {'row': 6}
    ];

    //component area
    $scope.icons = [
      { 'component': 'Item 1', 'drag': true },
      { 'component': 'Item 2', 'drag': true },
      { 'component': 'Item 3', 'drag': true },
      { 'component': 'Item 4', 'drag': true },
      { 'component': 'Item 5', 'drag': true },
      { 'component': 'Item 6', 'drag': true },
      { 'component': 'Item 7', 'drag': true },
      { 'component': 'Item 8', 'drag': true }
    ];

    //available players
    TeamPlayers.all().success(function(data) {
        $scope.players = data.players;
    });

    //final list
    $scope.allList = [];
});
