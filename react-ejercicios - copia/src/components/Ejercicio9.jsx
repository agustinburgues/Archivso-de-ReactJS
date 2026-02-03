import { useEffect, useState } from "react"

export default function Ejercicio9() {
  const [tareas, setTareas] = useState(() =>
    JSON.parse(localStorage.getItem("tareas")) || []
  )
  const [texto, setTexto] = useState("")

  useEffect(() => {
    localStorage.setItem("tareas", JSON.stringify(tareas))
  }, [tareas])

  const agregar = () => {
    if (!texto.trim()) return
    setTareas([...tareas, { texto, done: false }])
    setTexto("")
  }

  const limpiar = () => {
    setTareas(tareas.filter(t => !t.done))
  }

  return (
    <div className="p-6 border rounded-lg">
      <h2 className="text-xl font-bold mb-4">
        Ejercicio 9 - ToDo + LocalStorage
      </h2>

      <div className="flex gap-2 mb-4">
        <input
          value={texto}
          onChange={(e) => setTexto(e.target.value)}
          className="border p-2 flex-1"
        />
        <button onClick={agregar} className="btn">Agregar</button>
      </div>

      <ul className="space-y-2">
        {tareas.map((t, i) => (
          <li key={i} className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={t.done}
              onChange={() => {
                const copia = [...tareas]
                copia[i].done = !copia[i].done
                setTareas(copia)
              }}
            />
            <span className={t.done ? "line-through" : ""}>
              {t.texto}
            </span>
          </li>
        ))}
      </ul>

      <button
        onClick={limpiar}
        className="btn bg-red-500 mt-4"
      >
        Limpiar completadas
      </button>
    </div>
  )
}
