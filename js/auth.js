const registerForm =
document.getElementById("registerForm");

if(registerForm){

registerForm.addEventListener("submit",function(e){

e.preventDefault();

const fullname =
document.getElementById("fullname").value;

const email =
document.getElementById("email").value;

const password =
document.getElementById("password").value;

const confirmPassword =
document.getElementById("confirmPassword").value;

const message =
document.getElementById("message");

if(password !== confirmPassword){

message.innerHTML =
"Passwords do not match";

message.style.color =
"red";

return;
}

const user = {

fullname,
email,
password

};

localStorage.setItem(
"user",
JSON.stringify(user)
);

message.innerHTML =
"Registration Successful";

message.style.color =
"green";

setTimeout(()=>{

window.location.href =
"login.html";

},1500);

});

}


/* ==========================
   LOGIN
========================== */

const loginForm =
document.getElementById("loginForm");

if(loginForm){

const showPassword =
document.getElementById("showPassword");

showPassword.addEventListener("change",()=>{

const passwordField =
document.getElementById("loginPassword");

passwordField.type =
showPassword.checked
? "text"
: "password";

});

loginForm.addEventListener("submit",(e)=>{

e.preventDefault();

const email =
document.getElementById("loginEmail").value;

const password =
document.getElementById("loginPassword").value;

const loginMessage =
document.getElementById("loginMessage");

const storedUser =
JSON.parse(
localStorage.getItem("user")
);

if(
storedUser &&
storedUser.email === email &&
storedUser.password === password
){

sessionStorage.setItem(
"loggedInUser",
storedUser.fullname
);

loginMessage.innerHTML =
"Login Successful";

loginMessage.style.color =
"green";

setTimeout(()=>{

window.location.href =
"dashboard.html";

},1000);

}
else{

loginMessage.innerHTML =
"Invalid Email or Password";

loginMessage.style.color =
"red";

}

});

}
