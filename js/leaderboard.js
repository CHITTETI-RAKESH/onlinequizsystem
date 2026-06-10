let leaderboard =
JSON.parse(
localStorage.getItem("leaderboard")
) || [];

const table =
document.getElementById(
"leaderboardBody"
);

leaderboard.forEach(
(player,index)=>{

let row =
`
<tr>

<td>${index+1}</td>

<td>${player.name}</td>

<td>${player.score}</td>

<td>${player.percentage}%</td>

</tr>
`;

table.innerHTML += row;

}
);
