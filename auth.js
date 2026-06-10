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
