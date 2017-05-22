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

	let getSingleContact = (id) =>{
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

	let postNewContact = (newContact) => {
		return $q((resolve, reject) => {
			$http.post(`${FIREBASE_CONFIG.databaseURL}/contacts.json`, 
				JSON.stringify(newContact))
			.then((resultz) => {
				resolve(resultz);
			}).catch((error) =>{
				reject(error);
			});
		});
	};


		let modifyContact = (contact) =>{
		return $q((resolve, reject) => {
			$http.put(`${FIREBASE_CONFIG.databaseURL}/contacts/${contact.id}.json`,
			JSON.stringify({
					Fname: contact.Fname,
					Lname: contact.Lname,
					address: contact.address,
					city: contact.city,
					state: contact.state,
					zip: contact.zip,
					phone: contact.phone
			})
			).then((resultz) => {
				resolve(resultz);
			}).catch((error) =>{
				reject(error);
			});
		});
	};


	let deleteContact = (contactId) =>{
		return $q((resolve, reject) => {
			$http.delete(`${FIREBASE_CONFIG.databaseURL}/contacts/${contactId}.json`)
			.then((deletz) => {
				resolve(deletz);
			}).catch((error) => {
				reject(error);
			});
		});
	};


	return{getContactList:getContactList, getSingleContact:getSingleContact, modifyContact:modifyContact, postNewContact:postNewContact, deleteContact:deleteContact};
});