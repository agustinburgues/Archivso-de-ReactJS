import { useState } from "react"
import Board from "./components/Board"
import {
  createEmptyBoard,
  placeMines,
  calculateAdjacents,
  revealCell,
  revealAllMines
} from "./utils/minesweeper"

function App() {
  const [rows] = useState(8)
  const [cols] = useState(8)
  const [mines] = useState(10)

  const [board, setBoard] = useState([])
  const [gameOver, setGameOver] = useState(false)

  function startGame() {
    let newBoard = createEmptyBoard(rows, cols)
    newBoard = placeMines(newBoard, mines)
    newBoard = calculateAdjacents(newBoard)

    setBoard(newBoard)
    setGameOver(false)
  }

  function handleCellClick(r, c) {
    if (gameOver) return

    const newBoard = structuredClone(board)
    const cell = newBoard[r][c]

    if (cell.flagged || cell.revealed) return

    if (cell.hasMine) {
      revealAllMines(newBoard)
      setGameOver(true)
      alert("💥 Game Over")
    } else {
      revealCell(newBoard, r, c)
    }

    setBoard(newBoard)
  }

  function handleCellRightClick(e, r, c) {
    e.preventDefault()
    if (gameOver) return

    const newBoard = structuredClone(board)
    const cell = newBoard[r][c]

    if (!cell.revealed) {
      cell.flagged = !cell.flagged
      setBoard(newBoard)
    }
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center p-6">
      <h1 className="text-3xl font-bold mb-4">Buscaminas</h1>

      <button
        onClick={startGame}
        className="mb-4 px-4 py-2 bg-blue-600 rounded"
      >
        Iniciar Juego
      </button>

      <Board
        board={board}
        onCellClick={handleCellClick}
        onCellRightClick={handleCellRightClick}
      />
    </div>
  )
}

export default App
