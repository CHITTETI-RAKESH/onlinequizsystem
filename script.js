/* Registration */

const registerForm =
document.getElementById("registerForm");

if(registerForm){

registerForm.addEventListener("submit",function(e){

e.preventDefault();

let name =
document.getElementById("name").value;

let email =
document.getElementById("email").value;

let password =
document.getElementById("password").value;

localStorage.setItem("name",name);
localStorage.setItem("email",email);
localStorage.setItem("password",password);

alert("Registration Successful");

window.location="login.html";

});
}

/* Login */

const loginForm =
document.getElementById("loginForm");

if(loginForm){

loginForm.addEventListener("submit",function(e){

e.preventDefault();

let email =
document.getElementById("loginEmail").value;

let password =
document.getElementById("loginPassword").value;

let storedEmail =
localStorage.getItem("email");

let storedPassword =
localStorage.getItem("password");

if(email===storedEmail &&
password===storedPassword){

alert("Login Successful");

window.location="quiz.html";

}
else{

alert("Invalid Login");

}

});
}

/* Quiz */

const quizForm =
document.getElementById("quizForm");

if(quizForm){

quizForm.addEventListener("submit",function(e){

e.preventDefault();

let score=0;

let q1=
document.querySelector(
'input[name="q1"]:checked'
);

let q2=
document.querySelector(
'input[name="q2"]:checked'
);

let q3=
document.querySelector(
'input[name="q3"]:checked'
);

if(q1 && q1.value==="a")
score++;

if(q2 && q2.value==="b")
score++;

if(q3 && q3.value==="a")
score++;

localStorage.setItem(
"score",
score
);

window.location=
"result.html";

});
}

/* Result */

const scoreElement =
document.getElementById("score");

if(scoreElement){

let finalScore =
localStorage.getItem("score");

scoreElement.innerHTML =
"Your Score : " +
finalScore +
" / 3";

}