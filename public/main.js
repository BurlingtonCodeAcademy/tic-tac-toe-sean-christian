// VARIABLE DECLARATIONS /////////////////////////////////////////////////////////////////////////////////////
let startButton = document.getElementById("start");
let playerName = document.getElementById("playerName");
let xName = document.getElementById("xName");
let oName = document.getElementById("oName");
let nameSubmit = document.getElementById("nameSubmit");
let nameForm = document.getElementById("nameForm");
let board = document.getElementsByClassName("board")[0];
let statusBar = document.getElementsByClassName("status")[0];
let playerVersusPlayer = document.getElementById("playerVersusPlayer");
let playerVersusCPU = document.getElementById("playerVersusCPU");
let gameChoice = document.getElementById("gameChoice");
let timer;
let min = document.getElementById("minutes");
let sec = document.getElementById("seconds");
let totalSec = 0;

// FUNCTION DECLARATIONS /////////////////////////////////////////////////////////////////////////////////////
playerVersusPlayer.onclick = function (event) {
  event.preventDefault();
  gameChoice.style.display = "none";
  nameForm.style.visibility = "visible";
  game.gameChoice = "playerVersusPlayer";
};

playerVersusCPU.onclick = function (event) {
  event.preventDefault();
  gameChoice.style.display = "none";
  board.style.visibility = "visible";
  playerName.textContent = game.playerTurn;
  statusBar.style.visibility = "visible";
  nameForm.style.display = "none";
  game.gameChoice = "playerVersusCPU";
};

nameSubmit.onclick = function (event) {
  event.preventDefault();
  xName = xName.value;
  oName = oName.value;
  playerName.textContent = xName;
  console.log(playerName);
  statusBar.style.visibility = "visible";
  nameForm.style.display = "none";
  board.style.visibility = "visible";
};

startButton.onclick = function initialize(e) {
  startButton.disabled = true;
  timerCount();
  activateGame();
};

function activateGame() {
  game.activated = true;
  console.log(game.gameChoice);
  if (game.gameChoice === "playerVersusComputer") {
    alert(`The game is afoot! It is ${game.playerTurn}'s turn!`);
  } else if (game.gameChoice === "playerVersusPlayer") {
    alert(`The game is afoot! It is ${xName}'s turn!`);
  }
  gameSetup();
}

function gameSetup() {
  gameCells = document.getElementsByClassName("cell");
  game.getGameState();
  console.log(game.gameState);
  for (let cell of gameCells) {
    cell.addEventListener("click", gameAction);
  }
}

function gameAction(e) {
  game.markBoard(e);

  console.log(game.gameChoice);
}

function timerCount() {
  timer = setInterval(setTime, 1000);
}
function setTime() {
  ++totalSec;
  sec.innerHTML = pad(totalSec % 60);
  min.innerHTML = pad(parseInt(totalSec / 60));
}

function pad(val) {
  let valString = val + "";
  if (valString.length < 2) {
    return "0" + valString;
  } else {
    return valString;
  }
}

const game = {
  activated: false,
  playerTurn: "X",
  gameState: [],
  gameChoice: "",
  switch() {
    if (this.playerTurn === "X" && this.gameChoice === "playerVersusPlayer") {
      this.playerTurn = "O";
      playerName.textContent = oName;
    } else if (
      this.playerTurn === "O" &&
      this.gameChoice === "playerVersusPlayer"
    ) {
      this.playerTurn = "X";
      playerName.textContent = xName;
    } else if (
      this.playerTurn === "X" &&
      this.gameChoice === "playerVersusCPU"
    ) {
      this.playerTurn = "O";
      this.addCPUMove();
      game.getGameState();
      this.switch();
    } else {
      this.playerTurn = "X";
      game.getGameState();
      playerName.textContent = "O";
      this.switch();
    }
  },
  addCPUMove() {
    // Game board marking for CPU in Player vs. Computer game
    let randomIndex = Math.floor(Math.random() * 9);
    console.log(randomIndex);
    if (
      this.gameState[randomIndex] !== "X" &&
      this.gameState[randomIndex] !== "O"
    ) {
      this.gameState[randomIndex] = "O";
    } else {
      game.addCPUMove(); // Current problem is that this method keeps getting called infinite times til stack overload
    }
  },
  getGameState() {
    const gameCells = document.querySelectorAll(".cell");
    gameCells.forEach((cell, index) => {
      this.gameState[index] = cell.textContent;
    });
    this.gameWin();
  },
  statusUpdate() {
    if (this.playerTurn === "X") {
      playerName = xName.value;
    } else {
      playerName = oName.value;
    }
  },
  markBoard(e) {
    if (e.target.textContent === "X" || e.target.textContent === "O") {
      alert("That space is taken! Please choose another spot!");
    } else {
      e.target.textContent = this.playerTurn;
      game.getGameState();
      this.switch();
    }
  },
  gameWin() {
    if (
      this.gameState[0] === "X" &&
      this.gameState[1] === "X" &&
      this.gameState[2] === "X"
    ) {
      setTimeout(function () {
        alert("Player X has won!");
      }, 0);
      setTimeout(function () {
        location.reload();
      }, 0);
    } else if (
      this.gameState[3] === "X" &&
      this.gameState[4] === "X" &&
      this.gameState[5] === "X"
    ) {
      setTimeout(function () {
        alert("Player X has won!");
      }, 0);
      setTimeout(function () {
        location.reload();
      }, 0);
    } else if (
      this.gameState[6] === "X" &&
      this.gameState[7] === "X" &&
      this.gameState[8] === "X"
    ) {
      setTimeout(function () {
        alert("Player X has won!");
      }, 0);
      setTimeout(function () {
        location.reload();
      }, 0);
    } else if (
      this.gameState[0] === "X" &&
      this.gameState[3] === "X" &&
      this.gameState[6] === "X"
    ) {
      setTimeout(function () {
        alert("Player X has won!");
      }, 0);
      setTimeout(function () {
        location.reload();
      }, 0);
    } else if (
      this.gameState[1] === "X" &&
      this.gameState[4] === "X" &&
      this.gameState[7] === "X"
    ) {
      setTimeout(function () {
        alert("Player X has won!");
      }, 0);
      setTimeout(function () {
        location.reload();
      }, 0);
    } else if (
      this.gameState[2] === "X" &&
      this.gameState[5] === "X" &&
      this.gameState[8] === "X"
    ) {
      setTimeout(function () {
        alert("Player X has won!");
      }, 0);
      setTimeout(function () {
        location.reload();
      }, 0);
    } else if (
      this.gameState[0] === "X" &&
      this.gameState[4] === "X" &&
      this.gameState[8] === "X"
    ) {
      setTimeout(function () {
        alert("Player X has won!");
      }, 0);
      setTimeout(function () {
        location.reload();
      }, 0);
    } else if (
      this.gameState[2] === "X" &&
      this.gameState[4] === "X" &&
      this.gameState[6] === "X"
    ) {
      setTimeout(function () {
        alert("Player X has won!");
      }, 0);
      setTimeout(function () {
        location.reload();
      }, 0);
    } else if (
      this.gameState[0] === "O" &&
      this.gameState[1] === "O" &&
      this.gameState[2] === "O"
    ) {
      setTimeout(function () {
        alert("Player O has won!");
      }, 0);
      setTimeout(function () {
        location.reload();
      }, 0);
    } else if (
      this.gameState[3] === "O" &&
      this.gameState[4] === "O" &&
      this.gameState[5] === "O"
    ) {
      setTimeout(function () {
        alert("Player O has won!");
      }, 0);
      setTimeout(function () {
        location.reload();
      }, 0);
    } else if (
      this.gameState[6] === "O" &&
      this.gameState[7] === "O" &&
      this.gameState[8] === "O"
    ) {
      setTimeout(function () {
        alert("Player O has won!");
      }, 0);
      setTimeout(function () {
        location.reload();
      }, 0);
    } else if (
      this.gameState[0] === "O" &&
      this.gameState[3] === "O" &&
      this.gameState[6] === "O"
    ) {
      setTimeout(function () {
        alert("Player O has won!");
      }, 0);
      setTimeout(function () {
        location.reload();
      }, 0);
    } else if (
      this.gameState[1] === "O" &&
      this.gameState[4] === "O" &&
      this.gameState[7] === "O"
    ) {
      setTimeout(function () {
        alert("Player O has won!");
      }, 0);
      setTimeout(function () {
        location.reload();
      }, 0);
    } else if (
      this.gameState[2] === "O" &&
      this.gameState[5] === "O" &&
      this.gameState[8] === "O"
    ) {
      setTimeout(function () {
        alert("Player O has won!");
      }, 0);
      setTimeout(function () {
        location.reload();
      }, 0);
    } else if (
      this.gameState[0] === "O" &&
      this.gameState[4] === "O" &&
      this.gameState[8] === "O"
    ) {
      setTimeout(function () {
        alert("Player O has won!");
      }, 0);
      setTimeout(function () {
        location.reload();
      }, 0);
    } else if (
      this.gameState[2] === "O" &&
      this.gameState[4] === "O" &&
      this.gameState[6] === "O"
    ) {
      setTimeout(function () {
        alert("Player O has won!");
      }, 0);
      setTimeout(function () {
        location.reload();
      }, 0);
    } else if (this.gameState.includes("") === false) {
      setTimeout(function () {
        alert("The game is draw!");
      }, 0);
      setTimeout(function () {
        location.reload();
      }, 0);
    }
  },
};