// components/Componentes.js
import React from "react";

function Card({ title, content }) {
  return (
    <div style={{ border: "1px solid #ccc", padding: "1rem", marginBottom: "1rem" }}>
      <h3>{title}</h3>
      <p>{content}</p>
    </div>
  );
}

export default function Componentes() {
  return (
    <div>
      <h1>🧩 Componentes</h1>
      <Card title="Componente 1" content="Ejemplo de componente reutilizable" />
      <Card title="Componente 2" content="Se pueden pasar diferentes props a cada componente" />
    </div>
  );
}
