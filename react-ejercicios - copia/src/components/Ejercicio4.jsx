import { useState } from "react"

export default function Ejercicio4() {
  const items = ["Perro", "Gato", "Pez", "Caballo", "Conejo"]
  const [busqueda, setBusqueda] = useState("")

  const filtrados = items.filter(item =>
    item.toLowerCase().includes(busqueda.toLowerCase())
  )

  return (
    <div className="p-6 border rounded-lg">
      <h2 className="text-xl font-bold mb-4">
        Ejercicio 4 - Filtro en Tiempo Real
      </h2>

      <input
        type="text"
        placeholder="Buscar..."
        value={busqueda}
        onChange={(e) => setBusqueda(e.target.value)}
        className="border p-2 w-full mb-4"
      />

      <ul className="space-y-2">
        {filtrados.map((item, index) => (
          <li key={index} className="border p-2">
            {item}
          </li>
        ))}
      </ul>
    </div>
  )
}
