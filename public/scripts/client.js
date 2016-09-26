console.log('client sourced');

var myApp = angular.module('myApp', []);

myApp.controller('heroController', ['$scope', '$http', function($scope, $http){
  console.log('controller');
}]);
