import { useState, useRef } from "react"

export default function Ejercicio6() {
  const [segundos, setSegundos] = useState(0)
  const intervalo = useRef(null)

  const iniciar = () => {
    if (intervalo.current) return
    intervalo.current = setInterval(() => {
      setSegundos(s => s + 1)
    }, 1000)
  }

  const pausar = () => {
    clearInterval(intervalo.current)
    intervalo.current = null
  }

  const reiniciar = () => {
    pausar()
    setSegundos(0)
  }

  const formatear = (s) => {
    const h = String(Math.floor(s / 3600)).padStart(2, "0")
    const m = String(Math.floor((s % 3600) / 60)).padStart(2, "0")
    const sec = String(s % 60).padStart(2, "0")
    return `${h}:${m}:${sec}`
  }

  return (
    <div className="p-6 border rounded-lg">
      <h2 className="text-xl font-bold mb-4">
        Ejercicio 6 - Temporizador
      </h2>

      <p className="text-3xl font-mono mb-4">
        {formatear(segundos)}
      </p>

      <div className="flex gap-2">
        <button onClick={iniciar} className="btn">Iniciar</button>
        <button onClick={pausar} className="btn bg-yellow-500">Pausar</button>
        <button onClick={reiniciar} className="btn bg-red-500">Reiniciar</button>
      </div>
    </div>
  )
}
