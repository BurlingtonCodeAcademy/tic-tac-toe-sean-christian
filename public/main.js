let startButton = document.getElementById("start");
let playerName = document.getElementById("playerName");
let xName = document.getElementById('xName');
let oName = document.getElementById('oName');
let nameSubmit = document.getElementById('nameSubmit')
let nameForm = document.getElementById('nameForm')
let board = document.getElementsByClassName('board')[0]
let statusBar = document.getElementsByClassName('status')[0]
let timer

nameSubmit.onclick = function(event){
  event.preventDefault()
  xName = xName.value;
  oName = oName.value;
  playerName = xName;
  statusBar.style.visibility = "visible";
  nameForm.style.display = "none"; 
  board.style.visibility = "visible"; 
}

startButton.onclick = function initialize(e) {
  startButton.disabled = true;
  timerCount();
  activateGame();
};

const game = {
  activated: false,
  playerTurn: "X",
  gameState: [],

  switch() {
    if (this.playerTurn === "X") {
      this.playerTurn = "O";
      playerName.textContent = oName.value;
    } else {
      this.playerTurn = "X";
      playerName.textContent = xName.value;
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
      this.switch();
    }
  },
  gameWin() {
    if (this.gameState[0] === 'X' && this.gameState[1] === 'X' && this.gameState[2] === 'X') {
      alert('Player X has won!');
      clearBoard();
    } else if ((this.gameState[3] === 'X' && this.gameState[4] === 'X' && this.gameState[5] === 'X')) {
      alert('Player X has won!');
      clearBoard();
    } else if ((this.gameState[6] === 'X' && this.gameState[7] === 'X' && this.gameState[8] === 'X')) {
      alert('Player X has won!');
      clearBoard();
    } else if ((this.gameState[0] === 'X' && this.gameState[3] === 'X' && this.gameState[6] === 'X')) {
      alert('Player X has won!');
      clearBoard();
    } else if ((this.gameState[1] === 'X' && this.gameState[4] === 'X' && this.gameState[7] === 'X')) {
      alert('Player X has won!');
      clearBoard();
    } else if ((this.gameState[2] === 'X' && this.gameState[5] === 'X' && this.gameState[8] === 'X')) {
      alert('Player X has won!');
      clearBoard();
    } else if ((this.gameState[0] === 'X' && this.gameState[4] === 'X' && this.gameState[8] === 'X')) {
      alert('Player X has won!');
      clearBoard();
    } else if ((this.gameState[2] === 'X' && this.gameState[4] === 'X' && this.gameState[6] === 'X')) {
      alert('Player X has won!');
      clearBoard();
    } else if (this.gameState[0] === 'O' && this.gameState[1] === 'O' && this.gameState[2] === 'O') {
      alert('Player O has won!');
      clearBoard();
    } else if ((this.gameState[3] === 'O' && this.gameState[4] === 'O' && this.gameState[5] === 'O')) {
      alert('Player O has won!');
      clearBoard();
    } else if ((this.gameState[6] === 'O' && this.gameState[7] === 'O' && this.gameState[8] === 'O')) {
      alert('Player O has won!');
      clearBoard();
    } else if ((this.gameState[0] === 'O' && this.gameState[3] === 'O' && this.gameState[6] === 'O')) {
      alert('Player O has won!');
      clearBoard();
    } else if ((this.gameState[1] === 'O' && this.gameState[4] === 'O' && this.gameState[7] === 'O')) {
      alert('Player O has won!');
      clearBoard();
    } else if ((this.gameState[2] === 'O' && this.gameState[5] === 'O' && this.gameState[8] === 'O')) {
      alert('Player O has won!');
      clearBoard();
    } else if ((this.gameState[0] === 'O' && this.gameState[4] === 'O' && this.gameState[8] === 'O')) {
      alert('Player O has won!');
      clearBoard();
    } else if ((this.gameState[2] === 'O' && this.gameState[4] === 'O' && this.gameState[6] === 'O')) {
      alert('Player O has won!');
      clearBoard();
    } else if ((this.gameState.includes('') === false)) {
      alert('The game is draw!');
      clearBoard();
    }
  }
}
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
}

function gameAction(e) {
  game.markBoard(e);
  game.getGameState();
}

function clearBoard() {
  startButton.disabled = false;
  game.gameState = [];
  if (timer){
    clearInterval(timer)
  }
  totalSec = 0
  sec.innerHTML = "00"
  min.innerHTML = "00"
  for (let cell of gameCells) {
    cell.removeEventListener("click", gameAction);
    cell.textContent = '';
    game.playerTurn = "X";
    game.seconds = "0";
  }
}


let min = document.getElementById("minutes");
let sec = document.getElementById("seconds");
let totalSec = 0;

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