//DECLARATIONS
var userRefs = firebase.database().ref("users/");
var firstName;
var lastName;
var username;
var email;
var password;

firebase.auth().signInWithEmailAndPassword("bennetlogan@gmail.com", "creation").catch(function(error) {
	console.log(error.message);
});

/*
Constructor for UserProfile. See documentation for parameter
descriptions.
*/

userRefs.once("value", func	tion(snapshot) {
	console.log(snapshot);
}

//testing firebase integration
console.log(firebase);

firebase.auth().signInWithEmailAndPassword("bennetlogan@gmail.com", "creation").catch(function(error) {
	console.log(error.message);
})

$('#password, #confirmPassword').on('keyup', function () {
	if ($('#password').val().length > 7) {
		if ($('#password').val() == $('#confirmPassword').val()) {
			$('#message').html('Passwords match').css('color', 'green');
			passwordOK = true;
		}
		else {
			$('#message').html('Password is not matching').css('color', 'red');
			passwordOK = false;
    }
	}
	else {
		$('#message').html('Password must be more than 7 characters').css('color', 'red');
		passwordOK = false;
	}
	
});

$('#first_name, #last_name, #username, #email, #password, #confirmPassword').on('keyup', function() {
	if ($('#first_name').val().length == 0 
		|| $('#last_name').val().length == 0
		|| $('#username').val().length == 0
		|| $('#email').val().length == 0
		|| $('#password').val().length == 0
		|| $('#confirmPassword').val().length == 0 
		|| !passwordOK) {
		document.getElementById("submit").classList.add('disabled');
	}
	else {
		document.getElementById("submit").classList.remove('disabled');
	}
});

document.getElementById('contact_form').addEventListener('submit', submitForm);

function submitForm(e) {
	e.preventDefault();
	firstName = getInputVal('first_name');
	lastName = getInputVal('last_name');
	username = getInputVal('username');
	email = getInputVal('email');
	password = getInputVal('password');

	userRefs.child(username).set({
	firstName: firstName,
	lastName: lastName,
	password: password,
	email: email
	});
}

function getInputVal(id) {
	return document.getElementById(id).value;
}



// function UserProfile(firstName, lastName, userName, password) {
// 	//paramater instantians
// 	this.firstName = firstName;
// 	this.lastName = lastName;
// 	this.userName = userName;
// 	this.password = password;

// 	//other variable instantians
// 	this.shortBio = "";
// 	this.contactInfo = "";
// 	this.profilePicture;
// 	this.techSkills = [];
// }

// var able_daddy = new UserProfile("Prof", "Ableson", "able_daddy", "abcdef");
// var goel_daddy = new UserProfile("Christopher", "Goel", "goel_daddy", "scoobydoo");
// var bennet_daddy = new UserProfile("Bennet", "Montgomery", "bennet_daddy", "creation");


