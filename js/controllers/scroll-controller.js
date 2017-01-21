angular.module("Elifoot", ['infinite-scroll']).controller('NewsController', function($scope, News) {

  News.all().success(function(data) {
      $scope.news = data
      console.log(data);
  });
});
