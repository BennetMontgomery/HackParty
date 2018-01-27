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

console.log(firebase);
