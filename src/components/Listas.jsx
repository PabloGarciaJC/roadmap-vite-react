// components/Listas.js
import React from "react";

export default function Listas() {
  const tareas = [
    { id: 1, nombre: "Aprender React", completada: true },
    { id: 2, nombre: "Practicar Hooks", completada: false },
    { id: 3, nombre: "Crear proyecto", completada: false },
  ];

  return (
    <div>
      <h1>📋 Listas y condicional</h1>
      <ul>
        {tareas.map(tarea => (
          <li key={tarea.id}>
            {tarea.nombre} {tarea.completada ? "✅" : "❌"}
          </li>
        ))}
      </ul>
    </div>
  );
}
