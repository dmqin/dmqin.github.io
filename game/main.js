var player;
var comp;
var playerRole = ["ROCK", "PAPER", "SCISSORS"];
var compRole = ["ROCK", "PAPER", "SCISSORS"];

var playerScore=0;
var displayPlayer = document.getElementById("playerChoice");

function batuPlayer() {
  player = playerRole[0];

  playGame();
}

function kertasPlayer() {
  player = playerRole[1];
  playGame();
}

function guntingPlayer() {
  player = playerRole[2];

  playGame();
}



function playGame() {
  var random = Math.floor(Math.random() * 3) + 1;

  
  if (random === 1) {
    comp = compRole[0];
    
    
  } else if (random === 2) {
    comp = compRole[1];
    
   
  } else if (random === 3) {
    comp = compRole[2];
   
   
  }

  displayPlayer.innerHTML = player;


  var displayComp = document.getElementById("compChoice");
  displayComp.innerHTML = comp;

  var result = results();
  var displayResult = document.getElementById("result");
  displayResult.innerHTML = result;
}

function results() {
 
if (player==="SCISSORS"&&comp==="SCISSORS"){
  return result=" TIE !"
}
else if(player==="ROCK"&&comp==="ROCK"){
  return result=" TIE !"
}
else if (player==="PAPER"&&comp==="PAPER"){
  return result=" TIE !"
}
else if (player==="SCISSORS"&&comp==="PAPER"){
  addScore();
  return result="YOU WIN !!!"
}
else if (player==="ROCK"&&comp==="SCISSORS"){
  addScore();
  return result="YOU WIN !!!"
}
else if (player==="PAPER"&&comp==="ROCK"){
  addScore();
  return result="YOU WIN !!!"
}
else if (player==="PAPER"&&comp==="SCISSORS"){
  gameOver();
  return result="YOU LOSE!"
}
else if (player==="ROCK"&&comp==="PAPER"){
  gameOver();
  return result="YOU LOSE!"
}
else if (player==="SCISSORS"&&comp==="ROCK"){
  gameOver();
  return result="YOU LOSE!"
}

}

function addScore(){
  playerScore=playerScore+5;

  var displayScore = document.getElementById("displayScore");
 displayScore.innerHTML=playerScore;
}



function gameOver() {
  let gameOvermsg = document.getElementById("gameOver");
  gameOvermsg.innerHTML="GAME OVER";

  let refreshMsg = document.getElementById("refresh");
  refreshMsg.innerHTML="Please resfresh to start a new game.";

  document.querySelectorAll('.choice').forEach(button => {
    button.disabled = true;

  })


}

console.log (playerScore)
