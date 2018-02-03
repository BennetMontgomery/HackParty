// import * as backend from "backend.js";
var readyToSend = false;
var firstName;
var lastName;
var username;
var email;
var password;
var passwordOK = false;

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

$('#password, #confirmPassword').on('keyup', function() {
	if (!passwordOK) {
		document.getElementById("submit").classList.add('disabled');
		document.getElementById("submit").classList.remove('waves-effect');
	}
	else {
		document.getElementById("submit").classList.remove('disabled');
		document.getElementById("submit").classList.add('waves-effect');
	}
});

function colourer(){
	var col=["red", "green", "blue", "white", "orange", "pink", "purple", 
	"deep-purple", "indigo", "cyan", "teal", "light-blue", 
	"light-green", "lime", "amber", "brown", "blue-grey"];
	var a = "";
	a=Math.floor(Math.random()*18);
	document.getElementByClass('looper').classList.add('"'+col[a]+'"');
}

// THIS FUNCTION SENDS INFORMATION FROM FRONTEND TO BACKEND, WORKS ONLY WHEN SUBMIT BUTTON IS CLICKED
function sendRegister() {
	if (document.getElementById("submit").classList.contains('disabled')) {
		return false
	}
	else {
		return true
	}
};

function send() {
	if (userNameMatchesPassword($('#loginUsername').val(), $('#loginPassword').val())) {
		console.log("XDDD")
		document.getElementById("loginButton").href="portal.html"
	}
}






