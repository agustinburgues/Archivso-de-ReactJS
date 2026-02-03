function Cell({ cell, onClick, onRightClick }) {
  return (
    <button
      onClick={onClick}
      onContextMenu={onRightClick}
      className={`w-10 h-10 border flex items-center justify-center
        ${cell.revealed ? "bg-gray-300 text-black" : "bg-gray-600"}
      `}
    >
      {cell.flagged && "🚩"}
      {cell.revealed && !cell.hasMine && cell.adjacentMines > 0 && cell.adjacentMines}
      {cell.revealed && cell.hasMine && "💣"}
    </button>
  )
}

export default Cell
