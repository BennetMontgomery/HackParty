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
};

jQuery(function() {
	console.log("Print")
	$('#speciality').on('keyup', function (e) {
    
    if (e.keyCode == 13) {
    	e.preventDefault();
		$('#tagsHol').append('<div class="chip">'+$('#speciality').val()+'<i class="close material-icons">close</i></div>');
    }
	});
	$('#skill').on('keyup', function (e) {
    if (e.keyCode == 13) {
    	e.preventDefault();
		$('#tagsHolder').append('<div class="chip">'+$('#skill').val()+'<i class="close material-icons">close</i></div>');
    }
	});
});

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






