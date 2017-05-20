app.factory("AddressFactory", function($http, $q, FIREBASE_CONFIG){
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

	let editContact = (contact) => {
		return $q((resolve, reject) => {
			$http.put(`${FIREBASE_CONFIG.databaseURL}/contacts/${contact.id}.json`,
				JSON.stringify({
					Fname: contact.Fname,
					Lname: contact.Lname,
					address: contact.address,
					city: contact.city,
					zip: contact.zip,
					phone: contact.phone
				})
				).then((returnData) =>{
					resolve(returnData);
				}).catch((error) =>{
					reject(error);
				});
		});
	};



	return{getContactList:getContactList, getContactItem:getContactItem, editContact:editContact};
});