// import * as backend from "backend.js";
var readyToSend = false;
var firstName;
var lastName;
var username;
var email;
var password;

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
function Register(){
$('#first_name, #last_name, #username, #email, #password, #confirmPassword').on('keyup', function() {
	if ($('#first_name').val().length == 0 
		|| $('#last_name').val().length == 0
		|| $('#username').val().length == 0
		|| $('#email').val().length == 0
		|| $('#password').val().length == 0
		|| $('#confirmPassword').val().length == 0 
		|| !passwordOK) {
		document.getElementById("submit").classList.add('disabled');
		readyToSend = false;
	}
	else {
		document.getElementById("submit").classList.remove('disabled');
		readyToSend = true;
		sendRegister();
	}
});
}

// THIS FUNCTION SENDS INFORMATION FROM FRONTEND TO BACKEND, WORKS ONLY WHEN SUBMIT BUTTON IS CLICKED
function sendRegister() {
	if (readyToSend) {
		firstName = $('#first_name').val();
		lastName = $('#last_name').val();
		username = $('#username').val();
		email = $('#email').val();
		password = $('#password').val();
		submitUser(new User(firstName, lastName, username, email, password));
		for(var i = 0; i < userList.length; i++) {
			console.log(userList[i]);
		}
	}
}

function send() {
	if (userNameMatchesPassword($('#loginUsername').val(), $('#loginPassword').val())) {
		console.log("XDDD")
		document.getElementById("loginButton").href="portal.html"
	}
}






