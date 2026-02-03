import { useState } from "react"

export default function Ejercicio8() {
  const [texto, setTexto] = useState("")

  const palabras = texto.trim()
    ? texto.trim().split(/\s+/).length
    : 0

  const caracteres = texto.replace(/\s/g, "").length

  return (
    <div className="p-6 border rounded-lg">
      <h2 className="text-xl font-bold mb-4">
        Ejercicio 8 - Contador
      </h2>

      <textarea
        value={texto}
        onChange={(e) => setTexto(e.target.value)}
        className="border p-2 w-full h-24 mb-4"
      />

      <p>Palabras: {palabras}</p>
      <p>Caracteres: {caracteres}</p>
    </div>
  )
}
