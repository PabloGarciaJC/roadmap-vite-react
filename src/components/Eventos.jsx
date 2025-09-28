// components/Eventos.js
import React, { useState } from "react";

export default function Eventos() {
  const [mensaje, setMensaje] = useState("");

  return (
    <div>
      <h1>🎛️ Manejo de eventos</h1>
      <input placeholder="Escribe algo..." onChange={e => setMensaje(e.target.value)} />
      <p>Mensaje: {mensaje}</p>
      <button onClick={() => alert(`Se envió: ${mensaje}`)}>Enviar</button>
    </div>
  );
}
