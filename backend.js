//DECLARATIONS
// You may refer to any of these strings because they are set by the frontend.js
var userRefs = firebase.database().ref("users/");
var firstName = "";
var lastName = "";
var username = "";
var email = "";
var password = "";
firebase.auth().signInWithEmailAndPassword("bennetlogan@gmail.com", "creation").catch(function(error) {
	console.log(error.message);
});
userRefs.once("value", function(snapshot) {
	console.log(snapshot);
});
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