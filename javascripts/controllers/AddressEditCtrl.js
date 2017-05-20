app.controller("AddressEditCtrl", function ($location, $routeParams, $scope, AddressFactory) {
	$scope.newContact = {};

	AddressFactory.getContactItem($routeParams.id)
	.then((results) => {
		console.log("results", results);
		$scope.newContact = results.data;
	}).catch((error) => {
		console.log("getContactItem error", error);
	});

	$scope.AddNewContact = () => {
		AddressFactory.editContact($scope.newContact)
		.then(() => {
			$location.url('/address/list');
		}).catch((error) => {
			console.log("editContact", error);
		});
	};

});