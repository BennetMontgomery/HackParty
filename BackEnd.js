//DECLARATIONS
var userRefs = firebase.database().ref("users/");

/*
Constructor for UserProfile. See documentation for parameter
descriptions.
*/
function UserProfile(firstName, lastName, userName, password) {
	//paramater instantians
	this.firstName = firstName;
	this.lastName = lastName;
	this.userName = userName;
	this.password = password;

	//other variable instantians
	this.shortBio = "";
	this.contactInfo = "";
	this.profilePicture;
	this.techSkills = [];
}

var able_daddy = new UserProfile("Prof", "Ableson", "able_daddy", "abcdef");

userRefs.set({
	able_daddy: {
		firstName: able_daddy.firstName,
		lastName: able_daddy.lastName,
		password: able_daddy.password
	}
})

//testing firebase integration
console.log(firebase);
