app.controller("AddressViewCtrl", function ($routeParams, $scope, AddressFactory) {
	$scope.selectedContact = {};

	AddressFactory.getSingleContact($routeParams.id)
	.then((results) =>{
		$scope.selectedContact = results.data;
	}).catch((error) =>{
		console.log("getSingleContact error", error);
	});

});