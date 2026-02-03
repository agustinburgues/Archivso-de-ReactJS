import { useState } from "react"

export default function Ejercicio2() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Ejercicio 2 - Contador de Clics</h2>
      <p>Clics: {count}</p>
      <button
        onClick={() => setCount(count + 1)}
        className="bg-blue-600 text-white px-3 py-1 rounded"
      >
        Contar clics
      </button>
    </div>
  )
}
