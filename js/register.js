
//this'll be used to check if the user is logged in or not
var user1 = document.getElementById('usernamelogin');
var pass1 = document.getElementById('passwordlogin');

var check;

//initialize a json object
var user;


let username = document.getElementById('username');
let password = document.getElementById('password');
let submit = document.getElementById('register');

//when the user submits the form, the function will go back to index.html with the username and password
register.addEventListener('click', function() {

    console.log(user);
    //make a json object with the username and password from the form
    user = {
        username: username.value,
        password: password.value
    };


    //testing if it works: it does
    console.log(user);

    //Next Step: getting JSON object to the server or out of the function
    //How? idk.

});


