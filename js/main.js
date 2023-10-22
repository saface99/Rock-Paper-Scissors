const choices = document.querySelectorAll(".choice");
const score = document.getElementById("score");
const result = document.getElementById("result");
const restart = document.getElementById("restart");
const modal = document.querySelector(".modal");
const scoreboard = {
  player: 0,
  computer: 0,
};

function play(e) {
  restart.style.display = "inline-block";
  const playerChoice = e.target.id;
  const computerChoice = getComputerChoice();
  const winner = getWinner(playerChoice, computerChoice);
  showWinner(winner, computerChoice);
}

//computer choice

function getComputerChoice() {
  const rand = Math.random();
  if (rand < 0.34) {
    return "rock";
  } else if (rand <= 0.67) {
    return "paper";
  } else {
    return "scissors";
  }
}
//winner

function getWinner(playerChoice, computerChoice) {
  if (playerChoice === computerChoice) {
    return "draw";
  } else if (playerChoice === "rock") {
    if (computerChoice === "paper") {
      return "computer";
    } else {
      return "player";
    }
  } else if (playerChoice === "paper") {
    if (computerChoice === "scissors") {
      return "computer";
    } else {
      return "player";
    }
  } else if (playerChoice === "scissors") {
    if (computerChoice === "rock") {
      return "computer";
    } else {
      return "player";
    }
  }
}

function showWinner(winner, computerChoice) {
  if (winner === "player") {
    //player score up
    scoreboard.player++;
    //show the modal result
    result.innerHTML = `<h1 class="text-win">You Win</h1>
    
    <i class="fas fa-hand-${computerChoice} fa-10x"></i>
    <p>Computer Chose <strong>${
      computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)
    }</strong></p>`;
  } else if (winner === "computer") {
    //computer score up
    scoreboard.computer++;
    //show the modal result
    result.innerHTML = `<h1 class="text-lose">You Lose</h1>
    
    <i class="fas fa-hand-${computerChoice} fa-10x"></i>
    <p>Computer Chose <strong>${
      computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)
    }</strong></p>`;
  } else {
    result.innerHTML = `<h1>Its A Draw</h1>
    
    <i class="fas fa-hand-${computerChoice} fa-10x"></i>
    <p>Computer Chose <strong>${
      computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)
    }</strong></p>`;
  }

  ///show score

  score.innerHTML = `
  <p>Player: ${scoreboard.player}</p>
  <p>Computer: ${scoreboard.computer}</p>
  `;
  modal.style.display = "block";
}
function restartGame() {
  scoreboard.player = 0;
  scoreboard.computer = 0;
  score.innerHTML = `
<p>Player: 0 </p>
<p>Computer: 0 </p>

`;
}

function clearModal(e) {
  if (e.target == modal) {
    modal.style.display = "none";
  }
}

choices.forEach((choice) => choice.addEventListener("click", play));
window.addEventListener("click", clearModal);
restart.addEventListener("click", restartGame);
