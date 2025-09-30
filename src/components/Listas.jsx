// components/Listas.jsx
import React from "react";
import { FaListAlt, FaCheckCircle, FaTimesCircle, FaCode, FaInfoCircle } from "react-icons/fa";

export default function Listas() {
  const tareas = [
    { id: 1, nombre: "Aprender React", completada: true },
    { id: 2, nombre: "Practicar Hooks", completada: false },
    { id: 3, nombre: "Crear proyecto", completada: false },
  ];

  return (
    <div className="container">
      <h1 className="title flex items-center gap-2">
        <FaListAlt className="icon" /> Listas y condicionales en React
      </h1>

      <div className="card card-warning flex items-center gap-2">
        <FaInfoCircle className="icon" />
        <strong>Qué hace:</strong> En React puedes renderizar listas usando <code>map()</code> y manejar condicionales dentro del JSX, como mostrar un icono de completado o pendiente.
      </div>

      <div className="card card-sub">
        <ul>
          {tareas.map(tarea => (
            <li key={tarea.id} className="flex items-center gap-2">
              {tarea.nombre}{" "}
              {tarea.completada ? <FaCheckCircle className="icon text-green-500" /> : <FaTimesCircle className="icon text-red-500" />}
            </li>
          ))}
        </ul>
      </div>

      <div className="card card-sub flex flex-col gap-2">
        <div className="flex items-center gap-2">
          <FaCode className="icon" />
          <strong>Ejemplo de código:</strong>
        </div>
        <pre className="code-block">
          <code>{`const tareas = [
  { id: 1, nombre: "Aprender React", completada: true },
  { id: 2, nombre: "Practicar Hooks", completada: false },
  { id: 3, nombre: "Crear proyecto", completada: false },
];

<ul>
  {tareas.map(tarea => (
    <li key={tarea.id}>
      {tarea.nombre} {tarea.completada ? <FaCheckCircle /> : <FaTimesCircle />}
    </li>
  ))}
</ul>`}</code>
        </pre>
      </div>
    </div>
  );
}
