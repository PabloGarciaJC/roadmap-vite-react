// components/Formularios.js
import React, { useState } from "react";

export default function Formularios() {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Nombre: ${nombre}, Email: ${email}`);
  };

  return (
    <div style={{ padding: "1.5rem", maxWidth: "700px", margin: "0 auto" }}>
      <h1 style={{ fontSize: "1.75rem", fontWeight: "bold", marginBottom: "1rem" }}>
        ✍️ Formularios en React
      </h1>

      {/* Descripción */}
      <div style={{ border: "1px solid #ffd600", background: "#fff8e1", padding: "1rem", borderRadius: "8px", marginBottom: "1rem" }}>
        <strong>📌 Qué son los formularios:</strong> Permiten al usuario ingresar datos y enviarlos. React usa el concepto de <em>controlled components</em> para manejar los valores de los inputs mediante el estado.
      </div>

      {/* Formulario */}
      <form onSubmit={handleSubmit} style={{ border: "1px solid #ccc", padding: "1rem", borderRadius: "8px", marginBottom: "1rem", display: "flex", flexDirection: "column", gap: "0.75rem" }}>
        <input 
          placeholder="Nombre" 
          value={nombre} 
          onChange={(e) => setNombre(e.target.value)} 
          style={{ padding: "0.5rem", borderRadius: "4px", border: "1px solid #aaa" }}
        />
        <input 
          placeholder="Email" 
          type="email" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
          style={{ padding: "0.5rem", borderRadius: "4px", border: "1px solid #aaa" }}
        />
        <button type="submit" style={{ padding: "0.5rem 1rem", borderRadius: "4px", background: "#4f46e5", color: "white", border: "none", cursor: "pointer" }}>
          Enviar
        </button>
      </form>

      {/* Ejemplo de código */}
      <div style={{ border: "1px solid #ccc", padding: "1rem", borderRadius: "8px" }}>
        <strong>Ejemplo de sintaxis:</strong>
        <pre style={{ background: "#f5f5f5", padding: "0.5rem", borderRadius: "4px" }}>
{`const [nombre, setNombre] = useState("");
const [email, setEmail] = useState("");

const handleSubmit = (e) => {
  e.preventDefault();
  alert(\`Nombre: \${nombre}, Email: \${email}\`);
};

<form onSubmit={handleSubmit}>
  <input value={nombre} onChange={e => setNombre(e.target.value)} />
  <input type="email" value={email} onChange={e => setEmail(e.target.value)} />
  <button type="submit">Enviar</button>
</form>`}
        </pre>
      </div>
    </div>
  );
}
