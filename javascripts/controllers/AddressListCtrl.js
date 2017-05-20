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
		AddressFactory.delete(id).then(() => {
			getContacts();
		}).catch((error) => {
			console.log("deleteContact error", error);
		});
	};

	$scope.modifyContact = (contact) => {
		AddressFactory.modifyContact(contact).then(() =>{
		}).catch((error) => {
			console.log("modifyContact error", error);
		});
	};

});