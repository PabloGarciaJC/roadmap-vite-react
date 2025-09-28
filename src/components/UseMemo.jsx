// components/UseMemo.js
import React, { useState, useMemo } from "react";

export default function UseMemo() {
  const [numero, setNumero] = useState(0);

  // useMemo memoriza el resultado del cálculo, evitando recomputaciones innecesarias
  const factorial = useMemo(() => {
    const calcularFactorial = n => (n <= 1 ? 1 : n * calcularFactorial(n - 1));
    return calcularFactorial(numero);
  }, [numero]);

  return (
    <div style={{ padding: "1.5rem", maxWidth: "600px", margin: "0 auto" }}>
      <h1 style={{ fontSize: "1.75rem", fontWeight: "bold", marginBottom: "1rem" }}>
        🧪 useMemo - Memorizar cálculos costosos
      </h1>

      <div style={{ border: "1px solid #ffd600", background: "#fff8e1", padding: "1rem", borderRadius: "8px", marginBottom: "1rem" }}>
        <strong>📌 Qué hace useMemo:</strong> Memoriza el resultado de una función costosa para que no se vuelva a calcular en cada render si las dependencias no cambian. Ideal para optimizar rendimiento.
      </div>

      <div style={{ border: "1px solid #ccc", padding: "1rem", borderRadius: "8px", marginBottom: "1rem" }}>
        <p>Factorial de <strong>{numero}</strong>: {factorial}</p>
        <input
          type="number"
          value={numero}
          onChange={e => setNumero(Number(e.target.value))}
          style={{ padding: "0.5rem", borderRadius: "4px", border: "1px solid #ccc", width: "100px" }}
        />
      </div>

      <div style={{ border: "1px solid #ccc", padding: "1rem", borderRadius: "8px" }}>
        <strong>Ejemplo de código:</strong>
        <pre style={{ background: "#f5f5f5", padding: "0.5rem", borderRadius: "4px", overflowX: "auto" }}>
          <code>{`const [numero, setNumero] = useState(0);

const factorial = useMemo(() => {
  const calcularFactorial = n => (n <= 1 ? 1 : n * calcularFactorial(n - 1));
  return calcularFactorial(numero);
}, [numero]);

<input type="number" value={numero} onChange={e => setNumero(Number(e.target.value))} />`}</code>
        </pre>
      </div>
    </div>
  );
}
