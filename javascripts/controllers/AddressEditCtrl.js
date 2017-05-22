app.controller("AddressEditCtrl", function ($location, $routeParams, $scope, AddressFactory) {
	$scope.newContact = {};

	AddressFactory.getSingleContact($routeParams.id)
	.then((results) => {
		$scope.newContact = results.data;
	}).catch((error) => {
		console.log("getContactItem error", error);
	});

		$scope.addNewAddress = () => {
		AddressFactory.modifyContact($scope.newContact).then(() => {
			$location.url('/address/list');
		}).catch((error) =>{
			console.log("editContact", error);
		});
	};

});