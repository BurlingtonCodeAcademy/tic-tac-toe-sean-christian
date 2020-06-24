let startButton = document.getElementById("start");
let playerTurn = document.getElementById("playerTurn");

startButton.onclick = function initialize(e) {
  startButton.disabled = true;
  activateGame();
};

const game = {
  activated: false,
  playerTurn: "X",
  gameState: [],
  switch() {
    if (this.playerTurn === "X") {
      this.playerTurn = "O";
      playerTurn.textContent = "O";
    } else {
      this.playerTurn = "X";
      playerTurn.textContent = "X";
    }
  },
  getGameState() {
    const gameCells = document.querySelectorAll(".cell");
    gameCells.forEach((cell, index) => {
      this.gameState[index] = cell.textContent;
    });
  },
  statusUpdate() {
    if (this.playerTurn === "X") {
      playerTurn = "O";
    } else {
      playerTurn = "X";
    }
  },
  markBoard(e) {
    if (e.target.textContent === "X" || e.target.textContent === "O") {
      alert("That space is taken! Please choose another spot!");
    } else {
      e.target.textContent = game.playerTurn;
      game.switch();
    }
  },
};

function activateGame() {
  game.activated = true;
  alert(`The game is afoot! It is ${game.playerTurn}'s turn!`);
  gameSetup();
}

function gameSetup() {
  gameCells = document.getElementsByClassName("cell");
  game.getGameState();

  for (let cell of gameCells) {
    cell.addEventListener("click", gameAction);
  }

  function gameAction(e) {
    game.markBoard(e);
    game.getGameState();                     
    console.log(game.gameState);
  }
}
