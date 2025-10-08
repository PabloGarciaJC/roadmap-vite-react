// components/Eventos.jsx
import React, { useState } from "react";
import { FaRegKeyboard, FaCode, FaInfoCircle } from "react-icons/fa";

export default function Eventos() {
  const [mensaje, setMensaje] = useState("");

  return (
    <div className="container">
      <h1 className="title flex items-center gap-2">
        <FaRegKeyboard className="icon" /> Manejo de eventos en React
      </h1>

      {/* Descripción */}
      <div className="card card-warning flex items-center gap-2">
        <FaInfoCircle className="icon" />
        <strong>Qué hace:</strong> React permite manejar eventos como en HTML, pero usando camelCase y pasando funciones como manejadores. Aquí mostramos cómo capturar el valor de un input y un evento de botón.
      </div>

      {/* Ejemplo visual */}
      <div className="card card-warning">
        <input
          className="input"
          placeholder="Escribe algo..."
          value={mensaje}
          onChange={e => setMensaje(e.target.value)}
        />
        <p>Mensaje: <strong>{mensaje}</strong></p>
        <button className="btn btn-primary" onClick={() => alert(`Se envió: ${mensaje}`)}>
          Enviar
        </button>
      </div>

      {/* Ejemplo de código */}
      <div className="card card-warning">
        <div className="flex items-center gap-2">
          <FaCode className="icon" />
          <strong>Ejemplo de código:</strong>
        </div>
        <pre className="code-block">
        <code>
          {`const [mensaje, setMensaje] = useState("");
          <input placeholder="Escribe algo..." value={mensaje} onChange={e => setMensaje(e.target.value)} />
          <button onClick={() => alert(\`Se envió: \${mensaje}\`)}>Enviar</button>`}
        </code>
        </pre>
      </div>
    </div>
  );
}
