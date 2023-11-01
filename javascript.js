 // First Name validation
 function nameResult() {

    let nameInput = document.getElementById('firstName').value;

    let nameRegex = /^[A-Z][a-z]{4,14}$/;

    if (nameRegex.test(nameInput)) {
        document.getElementById('firstName').style.border = '2px solid green';
        document.getElementById('firstNameErr').style.display = 'none';
    } else {
        document.getElementById('firstName').style.border = '2px solid red';
        document.getElementById('firstNameErr').style.display = 'block';
    }
}

// user name validation

function userResult() {
    let userInput = document.getElementById('userName').value;

    let userRegex = /^[A-z][A-z\d]{5,12}$/

    if (userRegex.test(userInput)) {
        document.getElementById('userName').style.border = '2px solid green';
        document.getElementById('userErr').style.display = 'none';
    } else {
        document.getElementById('userName').style.border = '2px solid red';
        document.getElementById('userErr').style.display = 'block';
    }
}

// email validation

function emailResult() {

    let emailInput = document.getElementById('email').value;

    let emailRegex = /^[A-z0-9+.]+@[A-z0-9.]+(com|in|co\.io)$/;

    if (emailRegex.test(emailInput)) {
        document.getElementById('email').style.border = '2px solid green';
        document.getElementById('emailErr').style.display = 'none';
    } else {
        document.getElementById('email').style.border = '2px solid red';
        document.getElementById('emailErr').style.display = 'block';
    }
}

// Password Validation

function passwordResult() {

    let passwordInput = document.getElementById('password').value;

    let passwordRegex = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,20}$/

    if(passwordRegex.test(passwordInput)){
        document.getElementById('password').style.border = '2px solid green';
        document.getElementById('passwordErr').style.display = 'none';
    } else {
        document.getElementById('password').style.border = '2px solid red';
        document.getElementById('passwordErr').style.display = 'block';
    }
}

// telephone number validation
function telresult() {

    let telInput = document.getElementById('telnum').value;

    let telRegex = /^[6-9]\d{9}$/;

    if (telRegex.test(telInput)) {
        document.getElementById('telnum').style.border = '2px solid green';
        document.getElementById('telnumErr').style.display = 'none';
    } else {
        document.getElementById('telnum').style.border = '2px solid red';
        document.getElementById('telnumErr').style.display = 'block';
    }
}

// Pan Validation

function panResults(){

    let panInput = document.getElementById('pan').value;

    let panRegex = /^[A-Z]{5}[0-9]{4}[A-Z]$/;

    if(panRegex.test(panInput)){
        document.getElementById('pan').style.border = '2px solid green';
        document.getElementById('panErr').style.display = 'none';

    } else {
        document.getElementById('pan').style.border = '2px solid red';
        document.getElementById('panErr').style.display = 'block';
    }
}