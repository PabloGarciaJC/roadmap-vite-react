// components/Eventos.js
import React, { useState } from "react";

export default function Eventos() {
  const [mensaje, setMensaje] = useState("");

  return (
    <div style={{ padding: "1.5rem", maxWidth: "600px", margin: "0 auto" }}>
      <h1 style={{ fontSize: "1.75rem", fontWeight: "bold", marginBottom: "1rem" }}>
        🎛️ Manejo de eventos en React
      </h1>

      {/* Descripción */}
      <div style={{ border: "1px solid #ffd600", background: "#fff8e1", padding: "1rem", borderRadius: "8px", marginBottom: "1rem" }}>
        <strong>📌 Qué hace:</strong> React permite manejar eventos como en HTML, pero usando camelCase y pasando funciones como manejadores. Aquí mostramos cómo capturar el valor de un input y un evento de botón.
      </div>

      {/* Ejemplo visual */}
      <div style={{ border: "1px solid #ccc", padding: "1rem", borderRadius: "8px", marginBottom: "1rem" }}>
        <input
          placeholder="Escribe algo..."
          value={mensaje}
          onChange={e => setMensaje(e.target.value)}
          style={{ padding: "0.5rem", borderRadius: "4px", border: "1px solid #ccc", width: "100%", marginBottom: "0.5rem" }}
        />
        <p>Mensaje: <strong>{mensaje}</strong></p>
        <button
          onClick={() => alert(`Se envió: ${mensaje}`)}
          style={{ padding: "0.5rem 1rem", borderRadius: "4px", border: "none", background: "#007BFF", color: "#fff", cursor: "pointer" }}
        >
          Enviar
        </button>
      </div>

      {/* Ejemplo de código */}
      <div style={{ border: "1px solid #ccc", padding: "1rem", borderRadius: "8px" }}>
        <strong>Ejemplo de código:</strong>
        <pre style={{ background: "#f5f5f5", padding: "0.5rem", borderRadius: "4px", overflowX: "auto" }}>
          <code>{`const [mensaje, setMensaje] = useState("");

<input placeholder="Escribe algo..." value={mensaje} onChange={e => setMensaje(e.target.value)} />
<button onClick={() => alert(\`Se envió: \${mensaje}\`)}>Enviar</button>`}</code>
        </pre>
      </div>
    </div>
  );
}
