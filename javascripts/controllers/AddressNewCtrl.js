app.controller("AddressNewCtrl", function ($http, $location, $q, $scope, FIREBASE_CONFIG, AddressFactory) {

	$scope.addNewAddress = () =>{
		console.log("I'm either trying to add a new address or edit and existing address");
		AddressFactory.postNewContact($scope.newContact).then(() =>{
			$scope.newContact = {};
			console.log("new contact", $scope.newContact);
			$location.url("/address/list");
		}).catch((error) => {
			console.log("Error adding contact", error);
		});
	};
	
});