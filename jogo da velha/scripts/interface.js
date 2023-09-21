document.addEventListener("DOMContentLoaded", () => {
  let squares = document.querySelectorAll(".square");
  squares.forEach((square) => {
    square.addEventListener("click", handleClick);
  });
});

function handleClick(event) {
  if (gameOver) {
    return;
  }

  let square = event.target;
  let position = square.id;

  if (handleMove(position)) {
    setTimeout(() => {
      alert("Você Ganhou uma Cerveja");
    }, 10);
    gameOver = true; // Marque o jogo como encerrado
  }

  updateSquare(position);
}

function updateSquare(position) {
  let square = document.getElementById(position.toString());
  let symbol = board[position];
  square.innerHTML = `<div class="${symbol}"></div>`;
}

// Seletor do botão de reiniciar
const restartButton = document.getElementById("restart-button");

// Adicione um ouvinte de eventos de clique ao botão de reiniciar
restartButton.addEventListener("click", () => {
  resetGame();
});

// Função para reiniciar o jogo
function resetGame() {
  board = ["", "", "", "", "", "", "", "", ""];
  playerTime = 0;
  gameOver = false;
  let squares = document.querySelectorAll(".square");

  // Limpe o conteúdo das casas e remova quaisquer classes "o" e "x"
  squares.forEach((square) => {
    square.innerHTML = "";
    square.classList.remove("o", "x");
  });
}
