app.controller("AddressNewCtrl", function ($http, $location, $q, $scope, FIREBASE_CONFIG, AddressFactory) {

	$scope.addNewAddress = () =>{
		AddressFactory.postNewContact($scope.newContact).then(() =>{
			$scope.newContact = {};
			console.log("new contact", $scope.newContact);
			$location.url("/address/list");
		}).catch((error) => {
			console.log("Error adding contact", error);
		});
	};
	
});