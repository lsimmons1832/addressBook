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
});