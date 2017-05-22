app.controller("AddressListCtrl", function ($scope, AddressFactory) {
	$scope.contacts = [];

	let getContacts = () => {
		AddressFactory.getContactList().then((contactz) =>{
			$scope.contacts = contactz;
		}).catch((error) => {
			console.log("get contacts error", error);
		});
	};

	getContacts();

	$scope.deleteContact = (id) =>{
		AddressFactory.deleteContact(id).then(() => {
			getContacts();
		}).catch((error) => {
			console.log("deleteContact error", error);
		});
	};

		$scope.addNewAddress = () => {
		AddressFactory.modifyContact($scope.newContact).then(() => {
		$location.url('/address/list');
		}).catch((error) =>{
			console.log("editContact", error);
		});
	};

});