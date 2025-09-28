// components/UseCallback.js
import React, { useState, useCallback } from "react";

export default function UseCallback() {
  const [contador, setContador] = useState(0);

  // useCallback memoriza la función para no recrearla en cada render
  const incrementar = useCallback(() => {
    setContador(c => c + 1);
  }, []);

  return (
    <div style={{ padding: "1.5rem", maxWidth: "600px", margin: "0 auto" }}>
      <h1 style={{ fontSize: "1.75rem", fontWeight: "bold", marginBottom: "1rem" }}>
        🧠 useCallback - Memorizar funciones
      </h1>

      <div style={{ border: "1px solid #ffd600", background: "#fff8e1", padding: "1rem", borderRadius: "8px", marginBottom: "1rem" }}>
        <strong>📌 Qué hace useCallback:</strong> Evita que una función se vuelva a crear en cada render, lo cual es útil cuando se pasa como prop a componentes hijos que dependen de la estabilidad de la referencia de la función.
      </div>

      <div style={{ border: "1px solid #ccc", padding: "1rem", borderRadius: "8px", marginBottom: "1rem" }}>
        <p>Contador: <strong>{contador}</strong></p>
        <button
          onClick={incrementar}
          style={{
            padding: "0.5rem 1rem",
            borderRadius: "4px",
            border: "none",
            background: "#007BFF",
            color: "#fff",
            cursor: "pointer",
          }}
        >
          Incrementar
        </button>
      </div>

      <div style={{ border: "1px solid #ccc", padding: "1rem", borderRadius: "8px" }}>
        <strong>Ejemplo de código:</strong>
        <pre style={{ background: "#f5f5f5", padding: "0.5rem", borderRadius: "4px", overflowX: "auto" }}>
          <code>{`const [contador, setContador] = useState(0);

const incrementar = useCallback(() => {
  setContador(c => c + 1);
}, []);

<button onClick={incrementar}>Incrementar</button>`}</code>
        </pre>
      </div>
    </div>
  );
}
