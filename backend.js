//DECLARATIONS
var userList = [];
var eventList = [];

class User {
	constructor(firstName, lastName, username, email, password) {
		this.firstName = firstName;
		this.lastName = lastName;
		this.username = username;
		this.email = email;
		this.password = password;
	}
}

class Event {
	constructor(name, startDate, endDate, startTime, endTime, color, url) {
		this.name = name;
		this.startDate = startDate;
		this.endDate = endDate;
		this.startTime = startTime;
		this.endTime = endTime;
		this.color = color;
		this.url = url;
	}
}

function submitUser(inputUser) {
	userList.unshift(inputUser);
}

function submitEvent(inputEvent) {
	eventList.unshift(inputEvent);
}

function userNameIsValid(userName) {
	for(var i = 0; i < userList.length; i++) {
		if(userList[i].username === username) {
			return false;
		}
	}

	return true;
}

function userNameMatchesPassword(userName, password) {
	for(var i = 0; i < userList.length; i++) {
		if(userList[i].userName === username && userList[i].password === password) {
			return true;
		}
	}

	return false;
}

var user = new User("B", "M", "been", "dontmineatnight@mojang.gov", "password");
submitUser(user);