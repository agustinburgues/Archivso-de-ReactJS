import { useState } from "react"

export default function Ejercicio7() {
  const [longitud, setLongitud] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")

  const generar = () => {
    if (longitud < 4) {
      setError("La longitud debe ser mayor o igual a 4")
      setPassword("")
      return
    }

    setError("")
    const chars =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*"
    let pass = ""

    for (let i = 0; i < longitud; i++) {
      pass += chars[Math.floor(Math.random() * chars.length)]
    }

    setPassword(pass)
  }

  return (
    <div className="p-6 border rounded-lg">
      <h2 className="text-xl font-bold mb-4">
        Ejercicio 7 - Generador de Contraseñas
      </h2>

      <input
        type="number"
        value={longitud}
        onChange={(e) => setLongitud(e.target.value)}
        placeholder="Longitud"
        className="border p-2 mb-4 w-full"
      />

      <button onClick={generar} className="btn mb-4">
        Generar contraseña
      </button>

      {error && <p className="text-red-500">{error}</p>}
      {password && <p className="font-mono">{password}</p>}
    </div>
  )
}
