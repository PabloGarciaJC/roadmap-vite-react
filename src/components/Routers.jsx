// components/RouterEjemplo.jsx
import React from "react";
import { Link, Routes, Route } from "react-router-dom";
import { FaHome, FaInfoCircle, FaCode, FaRoute } from "react-icons/fa";

// 🔹 Componentes simples para rutas
function Home() {
  return <p className="route-text"><FaHome className="icon" /> Bienvenido a Home</p>;
}

function About() {
  return <p className="route-text"><FaInfoCircle className="icon" /> Esta es la página About</p>;
}

export default function Routers() {
  return (
    <div className="container">
      <h1 className="title flex items-center gap-2">
        <FaRoute className="icon" /> React Router - Ejemplo básico
      </h1>

      <div className="card card-warning flex items-center gap-2">
        <FaInfoCircle className="icon" />
        <strong>Qué es React Router:</strong> Permite manejar rutas y navegación en tu aplicación React sin recargar la página. Aquí mostramos un ejemplo simple con dos rutas: Home y About.
      </div>

      <div className="card card-sub flex items-center gap-2">
        <strong>Enlaces de navegación:</strong>
        <Link to="/router/home" className="link">Home</Link>
        <Link to="/router/about" className="link">About</Link>
      </div>

      <div className="card card-sub">
        <strong>Contenido de la ruta:</strong>
        <Routes>
          <Route path="home" element={<Home />} />
          <Route path="about" element={<About />} />
        </Routes>
      </div>

      <div className="card card-sub">
        <div className="flex items-center gap-2">
          <FaCode className="icon" />
          <strong>Ejemplo de sintaxis:</strong>
        </div>
        <pre className="code-block">
{`<Routes>
  <Route path="home" element={<Home />} />
  <Route path="about" element={<About />} />
</Routes>`}
        </pre>
      </div>
    </div>
  );
}
