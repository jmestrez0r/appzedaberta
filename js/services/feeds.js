angular.module('Elifoot').factory('Feeds', ['$http', function($http) {
  return {
    parseFeed : function() {
        return $http({
          url: 'http://api.rss2json.com/v1/api.json?rss_url=http://www.zerozero.pt/rss/noticias.php',
          method: 'GET',
          dataType: 'json',
          data: {
              rss_url: 'http://www.zerozero.pt/rss/noticias.php',
              api_key: '0000000000000000000000000000000000000000', // put your api key here
              count: 2
            }
        });
    }
  };
}]);
