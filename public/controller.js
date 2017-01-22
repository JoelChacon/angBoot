app.controller('myCtrl', function($scope, myFactory) {
	$scope.hello = myFactory.getGreeting();
})