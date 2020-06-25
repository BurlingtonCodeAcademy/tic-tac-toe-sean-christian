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
    this.gameWin();
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
      e.target.textContent = this.playerTurn;
      this.switch();
    }
  },
  gameWin() {
    if (this.gameState[0] === 'X' && this.gameState[1] === 'X' && this.gameState[2] === 'X') {
      alert('Player X has won!');
      startButton.disabled = false;
      this.gameState = [];
    } else if ((this.gameState[3] === 'X' && this.gameState[4] === 'X' && this.gameState[5] === 'X')) {
      alert('Player X has won!');
      startButton.disabled = false;
      this.gameState = [];
    } else if ((this.gameState[6] === 'X' && this.gameState[7] === 'X' && this.gameState[8] === 'X')) {
      alert('Player X has won!');
      startButton.disabled = false;
      this.gameState = [];
    } else if ((this.gameState[0] === 'X' && this.gameState[3] === 'X' && this.gameState[6] === 'X')) {
      alert('Player X has won!');
      startButton.disabled = false;
      this.gameState = [];
    } else if ((this.gameState[1] === 'X' && this.gameState[4] === 'X' && this.gameState[7] === 'X')) {
      alert('Player X has won!');
      startButton.disabled = false;
      this.gameState = [];
    } else if ((this.gameState[2] === 'X' && this.gameState[5] === 'X' && this.gameState[8] === 'X')) {
      alert('Player X has won!');
      startButton.disabled = false;
      this.gameState = [];
    } else if ((this.gameState[0] === 'X' && this.gameState[4] === 'X' && this.gameState[8] === 'X')) {
      alert('Player X has won!');
      startButton.disabled = false;
      this.gameState = [];
    } else if ((this.gameState[2] === 'X' && this.gameState[4] === 'X' && this.gameState[6] === 'X')) {
      alert('Player X has won!');
      startButton.disabled = false;
      this.gameState = [];
    } else if (this.gameState[0] === 'O' && this.gameState[1] === 'O' && this.gameState[2] === 'O') {
      alert('Player O has won!');
      startButton.disabled = false;
      this.gameState = [];
    } else if ((this.gameState[3] === 'O' && this.gameState[4] === 'O' && this.gameState[5] === 'O')) {
      alert('Player O has won!');
      startButton.disabled = false;
      this.gameState = [];
    } else if ((this.gameState[6] === 'O' && this.gameState[7] === 'O' && this.gameState[8] === 'O')) {
      alert('Player O has won!');
      startButton.disabled = false;
      this.gameState = [];
    } else if ((this.gameState[0] === 'O' && this.gameState[3] === 'O' && this.gameState[6] === 'O')) {
      alert('Player O has won!');
      startButton.disabled = false;
      this.gameState = [];
    } else if ((this.gameState[1] === 'O' && this.gameState[4] === 'O' && this.gameState[7] === 'O')) {
      alert('Player O has won!');
      startButton.disabled = false;
      this.gameState = [];
    } else if ((this.gameState[2] === 'O' && this.gameState[5] === 'O' && this.gameState[8] === 'O')) {
      alert('Player O has won!');
      startButton.disabled = false;
      this.gameState = [];
    } else if ((this.gameState[0] === 'O' && this.gameState[4] === 'O' && this.gameState[8] === 'O')) {
      alert('Player O has won!');
      startButton.disabled = false;
      this.gameState = [];
    } else if ((this.gameState[2] === 'O' && this.gameState[4] === 'O' && this.gameState[6] === 'O')) {
      alert('Player O has won!');
      startButton.disabled = false;
      this.gameState = [];
    } else if ((this.gameState.includes('') === false)) {
      alert('The game is draw!')
      startButton.disabled = false;
      this.gameState = [];
    }
  }
};

function activateGame() {
  game.activated = true;
  alert(`The game is afoot! It is ${game.playerTurn}'s turn!`);
  gameSetup();
}

function gameSetup() {
  gameCells = document.getElementsByClassName("cell");
  game.getGameState();
  console.log(game.gameState)
  for (let cell of gameCells) {
    cell.addEventListener("click", gameAction);
  }

  function gameAction(e) {
    game.markBoard(e);
    game.getGameState();
    console.log(game.gameState);
    console.log(game.gameState.includes(''))
  }
}

