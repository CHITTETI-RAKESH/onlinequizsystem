const questions = [

{
question:"What does HTML stand for?",
options:[
"Hyper Text Markup Language",
"High Text Machine Language",
"Hyper Transfer Language",
"None"
],
answer:0
},

{
question:"Which language is used for styling?",
options:[
"Java",
"CSS",
"Python",
"C"
],
answer:1
},

{
question:"Which language runs in browser?",
options:[
"Java",
"JavaScript",
"Python",
"C++"
],
answer:1
},

{
question:"Which tag creates a hyperlink?",
options:[
"<link>",
"<a>",
"<href>",
"<url>"
],
answer:1
},

{
question:"Which database language retrieves data?",
options:[
"INSERT",
"DELETE",
"UPDATE",
"SELECT"
],
answer:3
},

{
question:"What does CSS stand for?",
options:[
"Cascading Style Sheets",
"Computer Style Sheets",
"Creative Style System",
"Code Style Sheet"
],
answer:0
},

{
question:"Which protocol is used for websites?",
options:[
"HTTP",
"FTP",
"SMTP",
"TCP"
],
answer:0
},

{
question:"Which company developed Java?",
options:[
"Google",
"Sun Microsystems",
"Apple",
"IBM"
],
answer:1
},

{
question:"Which data structure follows FIFO?",
options:[
"Stack",
"Queue",
"Tree",
"Graph"
],
answer:1
},

{
question:"Which normal form removes transitive dependency?",
options:[
"1NF",
"2NF",
"3NF",
"BCNF"
],
answer:2
}

];

let currentQuestion = 0;

let score = 0;

let userAnswers = [];

const question =
document.getElementById("question");

const options =
document.getElementById("options");

const nextBtn =
document.getElementById("nextBtn");

const prevBtn =
document.getElementById("prevBtn");

const submitBtn =
document.getElementById("submitBtn");

function loadQuestion(){

question.innerHTML =
questions[currentQuestion].question;

options.innerHTML = "";

questions[currentQuestion]
.options
.forEach((option,index)=>{

const div =
document.createElement("div");

div.innerHTML =

`
<label>

<input
type="radio"
name="answer"
value="${index}"

${userAnswers[currentQuestion] == index
? "checked"
: ""}

>

${option}

</label>

`;

options.appendChild(div);

});

updateProgress();

}

function updateProgress(){

let progress =

((currentQuestion+1)
/
questions.length)
*100;

document.getElementById(
"progress-bar"
).style.width =
progress + "%";

}

nextBtn.addEventListener(
"click",
()=>{

const selected =
document.querySelector(
'input[name="answer"]:checked'
);

if(selected){

userAnswers[currentQuestion] =
selected.value;

}

if(
currentQuestion <
questions.length-1
){

currentQuestion++;

loadQuestion();

}

}
);

prevBtn.addEventListener(
"click",
()=>{

if(currentQuestion > 0){

currentQuestion--;

loadQuestion();

}

}
);

submitBtn.addEventListener(
"click",
()=>{

const selected =
document.querySelector(
'input[name="answer"]:checked'
);

if(selected){

userAnswers[currentQuestion] =
selected.value;

}

score = 0;

for(
let i=0;
i<questions.length;
i++
){

if(
userAnswers[i] ==
questions[i].answer
){

score++;

}

}

localStorage.setItem(
"score",
score
);

localStorage.setItem(
"totalQuestions",
questions.length
);

window.location.href =
"result.html";

}
);

loadQuestion();

/* TIMER */

let time = 60;

const timer =
setInterval(()=>{

time--;

document.getElementById(
"timer"
).innerHTML =
time + "s";

if(time <= 0){

clearInterval(timer);

submitBtn.click();

}

},1000);
