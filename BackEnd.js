//DECLARATIONS
var userRefs = firebase.database().ref("users/");
firebase.auth().signInWithEmailAndPassword("bennetlogan@gmail.com", "creation").catch(function(error) {
	console.log(error.message);
});

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
var goel_daddy = new UserProfile("Christopher", "Goel", "goel_daddy", "scoobydoo");
var bennet_daddy = new UserProfile("Bennet", "Montgomery", "bennet_daddy", "creation");

userRefs.child(bennet_daddy.userName).set({
	firstName: bennet_daddy.firstName,
	lastName: bennet_daddy.lastName,
	password: bennet_daddy.password
});

//testing firebase integration
console.log(firebase);
