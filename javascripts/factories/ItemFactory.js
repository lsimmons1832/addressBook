app.factory("AddressBookFactory", function($http, $q, FIREBASE_CONFIG){
	let getContactList = () => {
		let contacts = [];
		return $q((resolve, reject) =>{
			$http.get(`${FIREBASE_CONFIG.databaseURL}/contacts.json`)
			.then((fbContacts) => {
				var addressCollection = fbContacts.data;
				if(addressCollection !== null){
					Object.keys(addressCollection).forEach((key) => {
						addressCollection[key].id=key;
						contacts.push(addressCollection[key]);
					});
				}
				resolve(contacts);
			}).catch((error) => {
				reject(error);
			});
		});
	};

	let getContactItem = () =>{
		return $q((resolve, reject) =>{
			$http.get(`${FIREBASE_CONFIG.databaseURL}/contacts/${id}.json`)
			.then((results) =>{
				results.data.id = id;
				resolve(results);
			}).catch((error) =>{
				reject(error);
			});
		});
	};
});