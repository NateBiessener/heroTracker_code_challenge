console.log('client sourced');

var myApp = angular.module('myApp', []);

myApp.controller('heroController', ['$scope', '$http', function($scope, $http){
  console.log('controller');

  $scope.heroes = [];

  $scope.showHeroes = function(){
    $http({
      method:'GET',
      url:'/heroes/hero'
    }).then(function(results){
      console.log(results.data);
      $scope.heroes = results.data;
    });
  };

  $scope.addHero = function(){
    var objectToSend = {
      alias: $scope.heroAlias,
      first_name: $scope.heroFirstName,
      last_name: $scope.heroLastName,
      city: $scope.city,
      power_name: $scope.power
    };
    console.log(objectToSend);
    $http({
      method:'POST',
      url:'/heroes/hero',
      data: objectToSend
    }).then($scope.showHeroes);
  };

  $scope.removeHero = function(id){
    $http({
      method: 'DELETE',
      url: '/heroes/hero?id=' + id
    }).then($scope.showHeroes);
  };

}]);
