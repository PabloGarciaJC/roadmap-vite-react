// components/RouterEjemplo.js
import React from "react";
import { Link, Routes, Route } from "react-router-dom";

// 🔹 Componentes simples para rutas
function Home() {
  return <p>🏠 Bienvenido a Home</p>;
}

function About() {
  return <p>ℹ️ Esta es la página About</p>;
}

export default function Routers() {
  return (
    <div style={{ padding: "1.5rem", maxWidth: "700px", margin: "0 auto" }}>
      <h1 style={{ fontSize: "1.75rem", fontWeight: "bold", marginBottom: "1rem" }}>
        🛤️ React Router - Ejemplo básico
      </h1>

      {/* Descripción */}
      <div style={{ border: "1px solid #ffd600", background: "#fff8e1", padding: "1rem", borderRadius: "8px", marginBottom: "1rem" }}>
        <strong>📌 Qué es React Router:</strong> Permite manejar rutas y navegación en tu aplicación React sin recargar la página. 
        Aquí mostramos un ejemplo simple con dos rutas: Home y About.
      </div>

      {/* Navegación */}
      <div style={{ border: "1px solid #ccc", padding: "1rem", borderRadius: "8px", marginBottom: "1rem" }}>
        <strong>Enlaces de navegación:</strong>{" "}
        <Link to="/router/home" style={{ marginRight: "1rem" }}>Home</Link>
        <Link to="/router/about">About</Link>
      </div>

      {/* Renderizado de rutas */}
      <div style={{ border: "1px solid #ccc", padding: "1rem", borderRadius: "8px" }}>
        <strong>Contenido de la ruta:</strong>
        <Routes>
          <Route path="home" element={<Home />} />
          <Route path="about" element={<About />} />
        </Routes>
      </div>

      {/* Código de ejemplo */}
      <div style={{ border: "1px solid #ccc", padding: "1rem", borderRadius: "8px", marginTop: "1rem" }}>
        <strong>Ejemplo de sintaxis:</strong>
        <pre style={{ background: "#f5f5f5", padding: "0.5rem", borderRadius: "4px" }}>
{`<Routes>
  <Route path="home" element={<Home />} />
  <Route path="about" element={<About />} />
</Routes>`}
        </pre>
      </div>
    </div>
  );
}
