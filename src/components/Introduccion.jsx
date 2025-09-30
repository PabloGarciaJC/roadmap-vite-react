// components/Introduccion.js
import React from "react";

export default function Introduccion() {
  return (
    <div className="introduccion-container">
      <h1 className="introduccion-title">🚀 Introducción a React con Vite</h1>

      {/* Qué es Vite */}
      <div className="card card-warning">
        <h2>📌 ¿Qué es Vite?</h2>
        <p>
          Vite es un "build tool" moderno para proyectos de front-end. Permite:
        </p>
        <ul>
          <li>Arranque ultrarrápido del proyecto (dev server).</li>
          <li>Actualización en caliente (HMR) para ver cambios al instante.</li>
          <li>Compilación optimizada para producción.</li>
        </ul>
        <pre className="code-block">
          <code>{`npm create vite@latest my-app\n# seleccionar React`}</code>
        </pre>
      </div>

      {/* Estructura de proyecto */}
      <div className="card card-neutral">
        <h2>🗂 Estructura de un proyecto Vite + React</h2>
        <p>Al crear un proyecto con Vite, tendrás:</p>
        <table className="project-table">
          <thead>
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
              <td className="subfile"><code>main.jsx</code></td>
              <td>Punto de entrada de la aplicación donde se monta React en el DOM.</td>
            </tr>
            <tr>
              <td className="subfile"><code>App.jsx</code></td>
              <td>Componente raíz que contiene tu aplicación.</td>
            </tr>
            <tr>
              <td className="subfile"><code>components/</code></td>
              <td>Carpeta para tus componentes React reutilizables.</td>
            </tr>
            <tr>
              <td className="subfile"><code>assets/</code></td>
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
      <div className="card card-warning">
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
      <div className="card card-neutral">
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
