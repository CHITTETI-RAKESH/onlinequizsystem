const score =
parseInt(localStorage.getItem("score"));

const total =
parseInt(localStorage.getItem("totalQuestions"));

const percentage =
(score / total) * 100;

document.getElementById("score")
.innerHTML =
`Score : ${score}/${total}`;

document.getElementById("percentage")
.innerHTML =
`Percentage : ${percentage.toFixed(2)}%`;

let status = "";

if(percentage >= 40){

status = "PASS";

document.getElementById("status")
.style.color = "green";

}
else{

status = "FAIL";

document.getElementById("status")
.style.color = "red";

}

document.getElementById("status")
.innerHTML = status;

const username =
sessionStorage.getItem(
"loggedInUser"
);

let leaderboard =
JSON.parse(
localStorage.getItem(
"leaderboard"
)
) || [];

leaderboard.push({

name: username,
score: score,
percentage: percentage.toFixed(2)

});

leaderboard.sort(
(a,b)=>b.score-a.score
);

localStorage.setItem(
"leaderboard",
JSON.stringify(leaderboard)
);
