import pyrebase
config = {
	"apiKey": "AIzaSyCFnkP6fCfIktkVXwMlHM80aDC7FMJpujA",
	"authDomain": "hackparty-672ed.firebaseapp.com",
	"databaseURL": "https://hackparty-672ed.firebaseio.com",
    "projectId": "hackparty-672ed",
    "storageBucket": "hackparty-672ed.appspot.com",
    "messagingSenderId": "444356113260"
}

def exists(username, password):
	for user in all_users.each():
		details = user.val()
		if detais['password'] == null:
			return False
		if user.key() == username and details['password'] == password:
			return True
	return False

firebase = pyrebase.initialize_app(config)
db = firebase.database()
auth = firebase.auth()
user = auth.sign_in_with_email_and_password("bennetlogan@gmail.com", "creation")
all_users = db.child("users").get(user['idToken'])
print(exists("benito","creation"))
