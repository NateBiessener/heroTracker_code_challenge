console.log('client sourced');

var myApp = angular.module('myApp', []);

myApp.controller('heroController', ['$scope', '$http', function($scope, $http){
  console.log('controller');

  $http({
    method:'GET',
    url:'/heroes/powers'
  }).then(function(result){
    $scope.powers = result.data.paths.power_name.enumValues.map(function(index){
      return {power: index};
    });
  });

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
    if ($scope.heroAlias && $scope.heroFirstName && $scope.heroLastName && $scope.city && $scope.heroPower) {
      var objectToSend = {
        alias: $scope.heroAlias,
        first_name: $scope.heroFirstName,
        last_name: $scope.heroLastName,
        city: $scope.city,
        power_name: $scope.heroPower.power
      };
      console.log(objectToSend);
      $http({
        method:'POST',
        url:'/heroes/hero',
        data: objectToSend
      }).then($scope.showHeroes);
    }//end if
    else {
      alert('Please complete all fields to start tracking a hero');
    }
  };

  $scope.removeHero = function(id){
    $http({
      method: 'DELETE',
      url: '/heroes/hero?id=' + id
    }).then($scope.showHeroes);
  };

}]);
