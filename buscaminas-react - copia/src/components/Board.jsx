import Cell from "./Cell"

function Board({ board, onCellClick, onCellRightClick }) {
  if (!board.length) return null

  return (
    <div
      className="grid gap-1"
      style={{ gridTemplateColumns: `repeat(${board[0].length}, 2.5rem)` }}
    >
      {board.map((row, r) =>
        row.map((cell, c) => (
          <Cell
            key={`${r}-${c}`}
            cell={cell}
            onClick={() => onCellClick(r, c)}
            onRightClick={(e) => onCellRightClick(e, r, c)}
          />
        ))
      )}
    </div>
  )
}

export default Board
