// components/Listas.js
import React from "react";

export default function Listas() {
  const tareas = [
    { id: 1, nombre: "Aprender React", completada: true },
    { id: 2, nombre: "Practicar Hooks", completada: false },
    { id: 3, nombre: "Crear proyecto", completada: false },
  ];

  return (
    <div style={{ padding: "1.5rem", maxWidth: "600px", margin: "0 auto" }}>
      <h1 style={{ fontSize: "1.75rem", fontWeight: "bold", marginBottom: "1rem" }}>
        📋 Listas y condicionales en React
      </h1>

      {/* Descripción */}
      <div style={{ border: "1px solid #ffd600", background: "#fff8e1", padding: "1rem", borderRadius: "8px", marginBottom: "1rem" }}>
        <strong>📌 Qué hace:</strong> En React puedes renderizar listas usando <code>map()</code> y manejar condicionales dentro del JSX, como mostrar ✅ o ❌ según el estado de cada elemento.
      </div>

      {/* Ejemplo visual */}
      <div style={{ border: "1px solid #ccc", padding: "1rem", borderRadius: "8px", marginBottom: "1rem" }}>
        <ul style={{ paddingLeft: "1.5rem" }}>
          {tareas.map(tarea => (
            <li key={tarea.id}>
              {tarea.nombre} {tarea.completada ? "✅" : "❌"}
            </li>
          ))}
        </ul>
      </div>

      {/* Ejemplo de código */}
      <div style={{ border: "1px solid #ccc", padding: "1rem", borderRadius: "8px" }}>
        <strong>Ejemplo de código:</strong>
        <pre style={{ background: "#f5f5f5", padding: "0.5rem", borderRadius: "4px", overflowX: "auto" }}>
          <code>{`const tareas = [
  { id: 1, nombre: "Aprender React", completada: true },
  { id: 2, nombre: "Practicar Hooks", completada: false },
  { id: 3, nombre: "Crear proyecto", completada: false },
];

<ul>
  {tareas.map(tarea => (
    <li key={tarea.id}>
      {tarea.nombre} {tarea.completada ? "✅" : "❌"}
    </li>
  ))}
</ul>`}</code>
        </pre>
      </div>
    </div>
  );
}
