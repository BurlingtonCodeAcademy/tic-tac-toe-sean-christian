let startButton = document.getElementById('start');

startButton.onclick = function initialize(e) {
    startButton.disabled = true;
    activateGame();
}

const game = {
    activated: false,
    playerTurn: 'X',
    gameState: [],
    switch() {
        if (this.playerTurn === 'X') {
            this.playerTurn = 'O';
            document.getElementById("playerTurn").textContent("O");
        } else {
            this.playerTurn = 'X';
            document.getElementById("playerTurn").textContent("X");
        }
    },
    getGameState() {
        const gameCells = document.querySelectorAll('.cell');
        gameCells.forEach((cell, index) => {
            this.gameState[index] = cell.textContent;
        })
    },
    statusUpdate() {
        if (this.playerTurn === 'X') {
            playerTurn = 'O'
        } else {
            playerTurn = 'X'
        }
    }
};

function activateGame() {
    game.activated = true;
    alert(`The game is afoot! It is ${game.playerTurn}'s turn!`);
    gameSetup();
}

function gameSetup() {
    gameCells = document.getElementsByClassName('cell');
    game.getGameState();

    for (let cell of gameCells) {
        cell.addEventListener('click', gameAction, { once : true });
    }
}

function gameAction(e) {
    e.target.textContent = game.playerTurn;
    game.getGameState();
    game.switch();
    console.log(game.gameState);
}
