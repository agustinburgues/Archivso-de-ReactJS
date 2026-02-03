import { useState } from "react"

export default function Ejercicio3() {
  const [texto, setTexto] = useState("")
  const [lista, setLista] = useState([])

  const agregar = () => {
    if (texto.trim() === "") return
    setLista([...lista, texto])
    setTexto("")
  }

  const eliminar = (index) => {
    setLista(lista.filter((_, i) => i !== index))
  }

  return (
    <div className="p-6 border rounded-lg">
      <h2 className="text-xl font-bold mb-4">Ejercicio 3 - Lista Dinámica</h2>

      <div className="flex gap-2 mb-4">
        <input
          type="text"
          value={texto}
          onChange={(e) => setTexto(e.target.value)}
          className="border p-2 flex-1"
        />
        <button
          onClick={agregar}
          className="bg-blue-500 text-white px-4 rounded"
        >
          Agregar
        </button>
      </div>

      <ul className="space-y-2">
        {lista.map((item, index) => (
          <li
            key={index}
            className="flex justify-between items-center border p-2"
          >
            {item}
            <button
              onClick={() => eliminar(index)}
              className="text-red-500"
            >
              ❌
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}
