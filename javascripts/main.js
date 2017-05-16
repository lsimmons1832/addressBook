app.run((FIREBASE_CONFIG) =>{
	firebase.initializeApp(FIREBASE_CONFIG);
});

app.controller("ItemCtrl", ($http, $q, $scope, FIREBASE_CONFIG) => {
	$scope.contacts = [];

		let getContacts = () =>{  
		let list = []; 
		return $q((resolve, reject) =>{
			$http.get(`${FIREBASE_CONFIG.databaseURL}/contacts.json`)
			.then((fbList)=>{
          var addressCollection = fbList.data;
          Object.keys(addressCollection).forEach((key) => {
            addressCollection[key].id=key;
            list.push(addressCollection[key]);
            console.log("my list", list);
          });
          resolve(list);
			}).catch((error) =>{
				reject(error);
			});
		});
	};

getContacts();
});