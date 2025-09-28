// components/JSX.js
import React from "react";

export default function JSX() {
  const mostrar = true;
  const nombre = "React";

  return (
    <div>
      <h1>🔤 JSX</h1>
      <p>{mostrar ? `Hola, estás mostrando JSX en ${nombre}` : "No se muestra JSX"}</p>
    </div>
  );
}
