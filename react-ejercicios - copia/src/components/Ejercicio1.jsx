import { useState } from "react"

export default function Ejercicio1() {
  const [color, setColor] = useState("white")

  const cambiarColor = () => {
    setColor("#" + Math.floor(Math.random()*16777215).toString(16))
  }

  return (
    <div className="p-6" style={{ background: color }}>
      <h2 className="text-xl font-bold mb-4">Ejercicio 1 -  Cambiador de Color de Fondo</h2>
      <button
        onClick={cambiarColor}
        className="bg-black text-white px-4 py-2 rounded"
      >
        Cambiar color
      </button>
    </div>
  )
}
