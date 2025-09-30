// components/Optimizar.js
import React, { useState, useMemo } from "react";

// Componente hijo para mostrar número
function Numero({ valor }) {
  console.log("Renderizado de Numero:", valor);
  return <p>{valor}</p>;
}

export default function Optimizar() {
  const [numero, setNumero] = useState(0);

  // Array memoizado para optimización
  const numeros = useMemo(() => {
    console.log("Calculando array de numeros...");
    return Array.from({ length: numero }, (_, i) => i + 1);
  }, [numero]);

  return (
    <div style={{ padding: "1.5rem", maxWidth: "700px", margin: "0 auto" }}>
      <h1 style={{ fontSize: "1.75rem", fontWeight: "bold", marginBottom: "1rem" }}>
        ⚙️ Optimización avanzada en React
      </h1>

      {/* Descripción */}
      <div style={{ border: "1px solid #ffd600", background: "#fff8e1", padding: "1rem", borderRadius: "8px", marginBottom: "1rem" }}>
        <strong>📌 Optimización:</strong> React re-renderiza componentes cuando cambia el estado. <code>useMemo</code> permite memorizar cálculos costosos para que solo se recalculen cuando sea necesario.
      </div>

      {/* Input para número */}
      <div style={{ border: "1px solid #ccc", padding: "1rem", borderRadius: "8px", marginBottom: "1rem" }}>
        <label>
          Introduce un número:{" "}
          <input
            type="number"
            value={numero}
            onChange={(e) => setNumero(Number(e.target.value))}
            style={{ padding: "0.5rem", borderRadius: "4px", border: "1px solid #aaa" }}
          />
        </label>
      </div>

      {/* Renderizado de números */}
      <div style={{ border: "1px solid #ccc", padding: "1rem", borderRadius: "8px", marginBottom: "1rem" }}>
        <strong>Array de números:</strong>
        {numeros.map(n => <Numero key={n} valor={n} />)}
      </div>

      {/* Ejemplo de código */}
      <div style={{ border: "1px solid #ccc", padding: "1rem", borderRadius: "8px" }}>
        <strong>Ejemplo de sintaxis:</strong>
        <pre style={{ background: "#f5f5f5", padding: "0.5rem", borderRadius: "4px" }}>
          {`const [numero, setNumero] = useState(0);

const numeros = useMemo(() => {
  return Array.from({ length: numero }, (_, i) => i + 1);
}, [numero]);

{numeros.map(n => <Numero key={n} valor={n} />)}`}
        </pre>
      </div>
    </div>
  );
}
