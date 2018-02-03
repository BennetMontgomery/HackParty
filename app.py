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
    for user in all_users.each():
        details = user.val()
        if details['password'] == "":
            return False
        if details['username'] == username and details['password'] == password:
            session['username'] = username
            return True
    return False


@app.route('/login', methods=['POST', 'GET'])
def login():
    flash("login")
    if exists(request.form['username'], request.form['password']):
        flash("2")
        session['logged_in'] = True
        return render_template("profile.html")
    if not 'logged_in' in session:
        return render_template('index.html')
    else:
        flash('wrong password!')
    return render_template("index.html")


@app.route('/', methods=['GET'])
@app.route('/index', methods=['GET'])
def index():
    if 'logged_in' in session:
        if session['logged_in']:
            return redirect(url_for('user'))
    return render_template("index.html")


@app.route('/signup')
def signup():
    if 'logged_in' in session:
        if session['logged_in']:
            return render_template('profile.html')
    return render_template('signup.html')


@app.route('/updateProfile', methods=['POST', 'GET'])
def updateProfile():
    if not 'logged_in' in session:
        if not session['logged_in']:
            return render_template('index.html')
    skills = ['java', 'C#']
    root.child('users').child(session['username']).child('languages').set(skills)
    return render_template('profile.html')


@app.route('/user', methods=['GET'])
def user():
    return render_template('profile.html')
@app.route('/createUser', methods = ['POST'])
def createUser():
	userCheck = root.child('users').child(request.form['username']).get()
	if userCheck is not None:
		return render_template("signup.html", error="username taken")
	userData = {"firstname":request.form['firstname'], "lastname":request.form['lastname'], "username": request.form['username'], "email":request.form['email'], "password": request.form['password']}
	root.child('users').child(request.form['username']).set(userData)
	return redirect("user")
@app.route("/logout")
def logout():
	session.clear()
	return redirect("index.html")

@app.route("/portal")
def portal():
    return render_template("portal.html")

if __name__ == '__main__':
    app.run(debug=True)


