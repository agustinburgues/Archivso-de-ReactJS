export function createEmptyBoard(rows, cols) {
  return Array.from({ length: rows }, () =>
    Array.from({ length: cols }, () => ({
      hasMine: false,
      revealed: false,
      flagged: false,
      adjacentMines: 0
    }))
  )
}

export function placeMines(board, mines) {
  let placed = 0

  while (placed < mines) {
    const r = Math.floor(Math.random() * board.length)
    const c = Math.floor(Math.random() * board[0].length)

    if (!board[r][c].hasMine) {
      board[r][c].hasMine = true
      placed++
    }
  }

  return board
}

export function calculateAdjacents(board) {
  for (let r = 0; r < board.length; r++) {
    for (let c = 0; c < board[0].length; c++) {
      if (board[r][c].hasMine) continue

      let count = 0

      for (let dr = -1; dr <= 1; dr++) {
        for (let dc = -1; dc <= 1; dc++) {
          const nr = r + dr
          const nc = c + dc

          if (
            nr >= 0 && nr < board.length &&
            nc >= 0 && nc < board[0].length &&
            board[nr][nc].hasMine
          ) {
            count++
          }
        }
      }

      board[r][c].adjacentMines = count
    }
  }

  return board
}

export function revealCell(board, r, c) {
  const cell = board[r][c]

  if (cell.revealed || cell.flagged) return

  cell.revealed = true

  if (cell.adjacentMines === 0) {
    for (let dr = -1; dr <= 1; dr++) {
      for (let dc = -1; dc <= 1; dc++) {
        const nr = r + dr
        const nc = c + dc

        if (
          nr >= 0 && nr < board.length &&
          nc >= 0 && nc < board[0].length
        ) {
          revealCell(board, nr, nc)
        }
      }
    }
  }
}

export function revealAllMines(board) {
  board.forEach(row =>
    row.forEach(cell => {
      if (cell.hasMine) cell.revealed = true
    })
  )
}
