angular.module("Elifoot").controller('PracticesController', function($scope, Practices) {

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

});
