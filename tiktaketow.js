const cells = document.querySelectorAll('.cell')
const message = document.getElementById('message')
let currentPlayer = 'X'
let gameBoard = ['', '', '', '', '', '', '', '', '']
let gameOver = false

function checkWinner() {
  const winningCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ]

  for (const combo of winningCombos) {
    const [a, b, c] = combo
    if (
      gameBoard[a] &&
      gameBoard[a] === gameBoard[b] &&
      gameBoard[a] === gameBoard[c]
    ) {
      gameOver = true
      message.textContent = `Player ${currentPlayer} wins!`
      break
    }
  }
  if (!gameBoard.includes('') && !gameOver) {
    gameOver = true
    message.textContent = "It's a draw!"
  }
}
function makeMove(index) {
  if (!gameOver && gameBoard[index] === '') {
    gameBoard[index] = currentPlayer
    cells[index].textContent = currentPlayer
    checkWinner()
    currentPlayer = currentPlayer === 'X' ? 'O' : 'X'
    message.textContent = `Player ${currentPlayer}'s turn`
  }
}

function resetGame() {
  gameBoard = ['', '', '', '', '', '', '', '', '']
  currentPlayer = 'X'
  gameOver = false
  message.textContent = `Player ${currentPlayer}'s turn`
  cells.forEach((cell) => (cell.textContent = ''))
}
cells.forEach((cell) =>
  cell.addEventListener('click', () =>
    makeMove(Array.from(cells).indexOf(cell))
  )
)
