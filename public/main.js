// VARIABLE DECLARATIONS /////////////////////////////////////////////////////////////////////////////////////
let gameCells = document.querySelectorAll(".cell");
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
  // Sets game up for Player vs. Player version of game
  event.preventDefault();
  gameChoice.style.display = "none";
  nameForm.style.visibility = "visible";
  game.gameChoice = "playerVersusPlayer";
};

playerVersusCPU.onclick = function (event) {
  // Sets game up for Player vs Computer version of game
  event.preventDefault();
  gameChoice.style.display = "none";
  board.style.visibility = "visible";
  playerName.textContent = game.playerTurn;
  statusBar.style.visibility = "visible";
  nameForm.style.display = "none";
  game.gameChoice = "playerVersusCPU";
};

nameSubmit.onclick = function (event) {
  // Takes in names of players in Player vs. Player game
  event.preventDefault();
  xName = xName.value;
  oName = oName.value;
  playerName.textContent = xName;
  statusBar.style.visibility = "visible";
  nameForm.style.display = "none";
  board.style.visibility = "visible";
};

startButton.onclick = function initialize(e) {
  // Determines what starts/changes when start button is clicked
  startButton.disabled = true;
  timerCount();
  activateGame();
};

function activateGame() {
  // Determines what the game-style choice is and alerts the player(s) that the game has started
  game.activated = true;
  if (game.gameChoice === "playerVersusComputer") {
    alert(`The game is afoot! It is ${game.playerTurn}'s turn!`);
  } else if (game.gameChoice === "playerVersusPlayer") {
    alert(`The game is afoot! It is ${xName}'s turn!`);
  }
  gameSetup();
}

function gameSetup() {
  // Creates link to HTML cells and adds 'click' event listeners to all o
  game.getGameState();
  for (let cell of gameCells) {
    cell.addEventListener("click", gameAction);
  }
}

function clearBoard() {
  // Clears Cells post-game completion
  for (let cell of gameCells) {
    cell.removeEventListener("click", gameAction);
  }
}

function gameAction(e) {
  // Function attached to cell event listeners that calls board marking method
  game.markBoard(e);
}

function timerCount() {
  timer = setInterval(setTime, 1000);
}

function setTime() {
  ++totalSec;
  sec.innerHTML = pad(totalSec % 60); // Set modulus to 60 - used to get the remainder after integer division.
  min.innerHTML = pad(parseInt(totalSec / 60)); // Takes the total amount of seconds and divdes by 60 to get the amount of minutes that has passed
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
  // Sets up the initial game state variables
  activated: false,
  playerTurn: "X",
  gameState: [],
  winCombos: [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ],
  gameChoice: "",
  switch() {
    // Changes player turn and, if PvCPU, calls CPU board marking method
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
    } else {
      this.playerTurn = "X";
      playerName.textContent = "O";
    }
  },

  addCPUMove() {
    // Game board marking for CPU in Player vs. Computer game
    let randomIndex = Math.floor(Math.random() * 9);
    if (
      this.gameState[randomIndex] !== "X" &&
      this.gameState[randomIndex] !== "O"
    ) {
      return gameCells[randomIndex].click();
    } else {
      return game.addCPUMove();
    } 
  },

  getGameState() {
    // Updates array containing current game state
    // and calls method checking for a winner or tie
    gameCells.forEach((cell, index) => {
      this.gameState[index] = cell.textContent;
    });
    this.gameWin();
  },

  statusUpdate() {
    // Updates the on-screen display to show current player's turn
    if (this.playerTurn === "X") {
      playerName = xName.value;
    } else {
      playerName = oName.value;
    }
  },

  markBoard(e) {
    //Responsible for marking the board, first detee
    if (e.target.textContent === "X" || e.target.textContent === "O") {
      alert("That space is taken! Please choose another spot!");
    } else {
      e.target.textContent = this.playerTurn;
      game.getGameState();
      this.switch();
    }
  },

  gameWin() {
    // Game checkes all the available win conditions to determine is the game is still in progress / has been won / or has resulted in a tie
    for (let win of this.winCombos) {
      if (
        this.gameState[win[0]] !== "" &&
        this.gameState[win[0]] === this.gameState[win[1]] &&
        this.gameState[win[1]] === this.gameState[win[2]]
      ) {
        clearBoard();
        let winner = this.playerTurn
        setTimeout(function () {
          alert(`Player ${winner} has won!`);
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
    }
  }
};
