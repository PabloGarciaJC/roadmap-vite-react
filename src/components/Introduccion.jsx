// components/Introduccion.js
import React from "react";

export default function Introduccion() {
  return (
    <div style={{ padding: "1.5rem", maxWidth: "800px", margin: "0 auto" }}>
      <h1 style={{ fontSize: "1.75rem", fontWeight: "bold", marginBottom: "1rem" }}>
        🚀 Introducción a React con Vite
      </h1>

      {/* Qué es Vite */}
      <div style={{ border: "1px solid #ffd600", background: "#fff8e1", padding: "1rem", borderRadius: "8px", marginBottom: "1rem" }}>
        <h2 style={{ marginTop: 0 }}>📌 ¿Qué es Vite?</h2>
        <p>
          Vite es un "build tool" moderno para proyectos de front-end. Permite:
        </p>
        <ul>
          <li>Arranque ultrarrápido del proyecto (dev server).</li>
          <li>Actualización en caliente (HMR) para ver cambios al instante.</li>
          <li>Compilación optimizada para producción.</li>
        </ul>
        <pre style={{ background: "#f5f5f5", padding: "0.5rem", borderRadius: "4px" }}>
          <code>{`npm create vite@latest my-app\n# seleccionar React`}</code>
        </pre>
      </div>

      {/* Estructura de proyecto */}
      <div style={{ border: "1px solid #ccc", padding: "1rem", borderRadius: "8px", marginBottom: "1rem" }}>
        <h2>🗂 Estructura de un proyecto Vite + React</h2>
        <p>Al crear un proyecto con Vite, tendrás:</p>
        <table
          border="1"
          cellPadding="8"
          style={{ borderCollapse: "collapse", marginTop: "1rem", width: "100%" }}
        >
          <thead style={{ backgroundColor: "#f3f4f6" }}>
            <tr>
              <th>Archivo / Carpeta</th>
              <th>Descripción</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><code>index.html</code></td>
              <td>Archivo principal que carga tu app React.</td>
            </tr>
            <tr>
              <td><code>package.json</code></td>
              <td>Contiene dependencias y scripts (dev, build, preview).</td>
            </tr>
            <tr>
              <td><code>vite.config.js</code></td>
              <td>Configuración de Vite, permite personalizar paths y plugins.</td>
            </tr>
            <tr>
              <td><code>eslint.config.js</code></td>
              <td>Configuración de ESLint, define reglas de estilo y buenas prácticas.</td>
            </tr>
            <tr>
              <td><code>src/</code></td>
              <td>Carpeta principal donde estará tu código React.</td>
            </tr>
            <tr>
              <td style={{ paddingLeft: "2rem" }}><code>main.jsx</code></td>
              <td>Punto de entrada de la aplicación donde se monta React en el DOM.</td>
            </tr>
            <tr>
              <td style={{ paddingLeft: "2rem" }}><code>App.jsx</code></td>
              <td>Componente raíz que contiene tu aplicación.</td>
            </tr>
            <tr>
              <td style={{ paddingLeft: "2rem" }}><code>components/</code></td>
              <td>Carpeta para tus componentes React reutilizables.</td>
            </tr>
            <tr>
              <td style={{ paddingLeft: "2rem" }}><code>assets/</code></td>
              <td>Carpeta para imágenes, estilos u otros recursos.</td>
            </tr>
            <tr>
              <td><code>node_modules/</code></td>
              <td>Dependencias instaladas automáticamente con npm.</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Cosas importantes */}
      <div style={{ border: "1px solid #ffd600", background: "#fff8e1", padding: "1rem", borderRadius: "8px", marginBottom: "1rem" }}>
        <h2>⚡ Cosas importantes para usar Vite</h2>
        <ul>
          <li>Iniciar servidor de desarrollo: <code>npm run dev</code></li>
          <li>Construir versión de producción: <code>npm run build</code></li>
          <li>Previsualizar la build: <code>npm run preview</code></li>
          <li>Vite soporta importación de CSS, imágenes y módulos ES directamente.</li>
          <li>Revisa la consola, los errores de HMR son claros y útiles.</li>
          <li>Configura alias de carpetas en <code>vite.config.js</code> si tu proyecto crece.</li>
        </ul>
      </div>

      {/* Tips rápidos */}
      <div style={{ border: "1px solid #ccc", padding: "1rem", borderRadius: "8px", marginBottom: "1rem" }}>
        <h2>💡 Tips rápidos</h2>
        <ul>
          <li>Usa React Fast Refresh para ver cambios sin perder estado.</li>
          <li>Organiza tu código en componentes y carpetas para mantenerlo limpio.</li>
          <li>Vite es más rápido que CRA, aprovecha HMR para iterar rápido.</li>
        </ul>
      </div>
    </div>
  );
}
