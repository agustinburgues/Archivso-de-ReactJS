import { useState } from "react"

export default function Ejercicio5() {
  const [a, setA] = useState("")
  const [b, setB] = useState("")
  const [resultado, setResultado] = useState(null)

  const calcular = (op) => {
    const numA = Number(a)
    const numB = Number(b)

    if (isNaN(numA) || isNaN(numB)) return

    if (op === "dividir" && numB === 0) {
      setResultado("No se puede dividir por 0")
      return
    }

    switch (op) {
      case "sumar":
        setResultado(numA + numB)
        break
      case "restar":
        setResultado(numA - numB)
        break
      case "multiplicar":
        setResultado(numA * numB)
        break
      case "dividir":
        setResultado(numA / numB)
        break
    }
  }

  return (
    <div className="p-6 border rounded-lg">
      <h2 className="text-xl font-bold mb-4">
        Ejercicio 5 - Calculadora
      </h2>

      <div className="flex gap-2 mb-4">
        <input
          type="number"
          value={a}
          onChange={(e) => setA(e.target.value)}
          className="border p-2 w-1/2"
        />
        <input
          type="number"
          value={b}
          onChange={(e) => setB(e.target.value)}
          className="border p-2 w-1/2"
        />
      </div>

      <div className="flex gap-2 mb-4">
        <button onClick={() => calcular("sumar")} className="btn">+</button>
        <button onClick={() => calcular("restar")} className="btn">-</button>
        <button onClick={() => calcular("multiplicar")} className="btn">*</button>
        <button onClick={() => calcular("dividir")} className="btn">/</button>
      </div>

      {resultado !== null && (
        <p className="font-semibold">Resultado: {resultado}</p>
      )}
    </div>
  )
}
