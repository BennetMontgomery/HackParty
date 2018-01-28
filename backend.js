//DECLARATIONS
// You may refer to any of these strings because they are set by the frontend.js
var userRefs = firebase.database().ref('users/');
var firstName = "";
var lastName = "";
var username = "";
var email = "";
var password = "";
var valid = false;

firebase.auth().signInWithEmailAndPassword("bennetlogan@gmail.com", "creation").catch(function(error) {
	console.log(error.message);
});
// userRefs.once("value", function(snapshot) {
// 	console.log(snapshot);
// });



function gotData(data) {
	var rawData = data.val();
	var usernames = Object.keys(rawData);
	for (var i = 0; i < usernames.length; i++) {
		var k = usernames[i];
		var pass = rawData[k].password;
		var firstName = rawData[k].firstName;
		valid = false;
		if (k == username && pass == password) {
			valid = true;
		}
		console.log("Password: " + pass + ", First Name: " + firstName, ", Found: " + valid)
		valid = valid;
	}

	return valid
}

function errData(err) {
	console.log("Error!")
}

function check(username, password) {
	this.username = username;
	this.password = password;
	return userRefs.once('value', gotData).then(function (result) {return result});
}

console.log(check("benito", "creation"))

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

console.log(valid);