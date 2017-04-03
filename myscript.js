var app = angular.module('myApp', []);
app.service('myservice',function () {
	this.value = "";
	// body...
})
app.controller('myCtrl', function($scope) {
   
});

app.controller('mainCtrl', function($scope) {
   
   function submit()
   {
     myservice.value = $scope.starwars; 
   }
});

app.controller('mainCtrl1', function($scope,$location) {
   
  $scope.data = myservice.value;
  window.$location.href = 'second.html';
});


