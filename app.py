from flask import Flask, render_template, request, flash, session, redirect, url_for
import firebase_admin
from firebase_admin import credentials
from firebase_admin import db
import pyrebase

app = Flask(__name__)
app.secret_key = 'some_secret'
cred = credentials.Certificate("firebase.json")
firebase_admin.initialize_app(cred, {
	'databaseURL': 'https://hackparty-672ed.firebaseio.com'
})
root = db.reference()
config = {
	"apiKey": "AIzaSyCFnkP6fCfIktkVXwMlHM80aDC7FMJpujA",
	"authDomain": "hackparty-672ed.firebaseapp.com",
	"databaseURL": "https://hackparty-672ed.firebaseio.com",
	"projectId": "hackparty-672ed",
	"storageBucket": "hackparty-672ed.appspot.com",
	"messagingSenderId": "444356113260"
}
firebase = pyrebase.initialize_app(config)
dbl = firebase.database()
auth = firebase.auth()
user = auth.sign_in_with_email_and_password("bennetlogan@gmail.com", "creation")
all_users = dbl.child("users").get(user['idToken'])


def exists(username, password):
	userb = root.child('users').child(username).get()
	if userb is None:
		return False
	if password == userb.get('password'):
		return True
	return False


@app.route('/login', methods=['POST', 'GET'])
def login():
	if request.form['username'] == "" or request.form['password'] == "":
		return render_template("index.html")
	if exists(request.form['username'], request.form['password']):
		session['logged_in'] = True
		session['username'] = request.form['username']
		return redirect('profile')
	if not 'logged_in' in session:
		return render_template('index.html')
	return render_template("index.html")


@app.route('/', methods=['GET'])
@app.route('/index', methods=['GET'])
def index():
	if 'logged_in' in session:
		if session['logged_in']:
			return redirect('profile')
	session.clear()
	return render_template("index.html")


@app.route('/signup')
def signup():
	if 'logged_in' in session:
		if session['logged_in']:
			return redirect('profile')
	return render_template('signup.html')


@app.route('/profile', methods=['GET'])
def profile():
	lang =root.child('users').child(session['username']).child('languages').get()
	spec = root.child('users').child(session['username']).child('speciality').get()
	return render_template('profile.html', languages = lang, speciality = spec)
	return render_template('profile.html', languages =None)

@app.route('/createUser', methods = ['POST'])
def createUser():
	userCheck = root.child('users').child(request.form['username']).get()
	if userCheck is not None:
		return render_template("signup.html", error="username taken")
	userData = {"firstname":request.form['firstname'], "lastname":request.form['lastname'], "username": request.form['username'], "email":request.form['email'], "password": request.form['password']}
	root.child('users').child(request.form['username']).set(userData)
	session['name'] = request.form['firstname']+" "+request.form['lastname']
	session['username'] = request.form['username']
	session['logged_in'] = True
	return redirect("profile")
@app.route("/logout")
def logout():
	session.clear()
	return redirect("index")

@app.route("/teams")
def teams():
	if not 'logged_in' in session:
		if not session['logged_in']:
			return render_template('index.html')
	users = root.child('users').get()
	return render_template("teams.html", data = users.items())
@app.route("/portal")
def portal():
	if not 'logged_in' in session:
		if not session['logged_in']:
			return render_template('index.html')
	data = ""
	for values in root.child('users').child(session['username']).child('events').get():
		data += (values) +", "
	data= data[:-2]
	return render_template("portal.html", data = data)

@app.route("/updatelanguages", methods=['POST'])
def updatelanguages():
	if not 'logged_in' in session:
		if not session['logged_in']:
			return render_template('index.html')
	skills = request.form['data']
	root.child('users').child(session['username']).child('languages').set(skills)
	return redirect("profile")

@app.route("/updateSpec", methods=['POST'])
def updateSpec():
	if not 'logged_in' in session:
		if not session['logged_in']:
			return render_template('index.html')
	speciality = request.form['data']
	root.child('users').child(session['username']).child('speciality').set(speciality)
	return redirect ("profile")

@app.route("/updateuserevents", methods=['POST'])
def updateuserevents():
	hacks = root.child('users').child(session['username']).child('events').get(request.form['data'])
	if hacks[0] is request.form['data']:
		root.child('users').child(session['username']).child('events').delete(request.form['data'])
	else:
		root.child('users').child(session['username']).child('events').child(request.form['data']).set(request.form['data'])
#	if hacks[0] is not None:
#		flash("hacks not none")
#		root.child('users').child(session['username']).child('events').child(request.form['data']).delete()
#	else:
#		flash("hacks none")

	return redirect("portal")
@app.route('/addSchool', methods=['POST'])
def addSchool():
	if not 'logged_in' in session:
		if not session['logged_in']:
			return render_template('index.html')
	skills = request.form['data']
	root.child('users').child(session['username']).child('languages').set(skills)
	return redirect("profile")
	
@app.route("/viewprofile/", methods=['GET'])
def viewprofile():
	if not 'logged_in' in session:
		if not session['logged_in']:
			return render_template('index.html')
	user = request.args.get("id")
	if user == None:
		return redirect(teams)
	info = root.child('users').child(user).get()
	if info is None:
		return redirect(teams)
	spec = root.child('users').child(user).child('speciality').get()
	lang = root.child('users').child(user).child('languages').get()
	return render_template("viewprofile.html", speciality = spec, languages = lang, username = info.get('username'))

if __name__ == '__main__':
	app.run(debug=True)
