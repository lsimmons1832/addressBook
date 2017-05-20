app.controller("AddressNewCtrl", function ($http, $location, $q, $scope, FIREBASE_CONFIG, AddressFactory) {

	$scope.addNewAddress = () =>{
		AddressFactory.postNewItem($scope.newContact).then((response) =>{
			$scope.newContact = {};
			$location.url("/address/list");
		}).catch((error) => {
			console.log("Error adding contact", error);
		});
	};
	
});