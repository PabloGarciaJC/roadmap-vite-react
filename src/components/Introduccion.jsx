import React from "react";
import { FaRocket, FaThumbtack, FaFolderOpen, FaBolt, FaLightbulb } from "react-icons/fa";

export default function Introduccion() {
  return (
    <div className="container">
      {/* Título principal */}
      <h1 className="title">
        <FaRocket className="icon" /> Introducción a React con Vite
      </h1>

      {/* Qué es Vite */}
      <div className="card card-warning">
        <h2 className="subtitle">
          <FaThumbtack className="icon" /> ¿Qué es Vite?
        </h2>
        <p>
          Vite es una herramienta moderna para construir aplicaciones front-end. Sus principales ventajas son:
        </p>
        <ul>
          <li>Arranque ultrarrápido del servidor de desarrollo.</li>
          <li>Hot Module Replacement (HMR) para ver cambios en tiempo real.</li>
          <li>Compilación optimizada y ligera para producción.</li>
        </ul>
        <pre className="code-block">
          <code>{`npm create vite@latest my-app
# seleccionar React`}</code>
        </pre>
      </div>

      {/* Estructura de proyecto */}
      <div className="card card-neutral">
        <h2 className="subtitle">
          <FaFolderOpen className="icon" /> Estructura de un proyecto Vite + React
        </h2>
        <p>Al crear un proyecto, tendrás la siguiente estructura básica:</p>
        <table className="table">
          <thead>
            <tr>
              <th>Archivo / Carpeta</th>
              <th>Descripción</th>
            </tr>
          </thead>
          <tbody>
            <tr><td><code>index.html</code></td><td>Archivo principal que carga la app React.</td></tr>
            <tr><td><code>package.json</code></td><td>Contiene dependencias y scripts (dev, build, preview).</td></tr>
            <tr><td><code>vite.config.js</code></td><td>Configuración de Vite, permite personalizar paths y plugins.</td></tr>
            <tr><td><code>eslint.config.js</code></td><td>Configura ESLint para mantener buenas prácticas y estilo.</td></tr>
            <tr><td><code>src/</code></td><td>Carpeta principal donde estará tu código React.</td></tr>
            <tr><td><code>main.jsx</code></td><td>Punto de entrada donde se monta React en el DOM.</td></tr>
            <tr><td><code>App.jsx</code></td><td>Componente raíz de la aplicación.</td></tr>
            <tr><td><code>components/</code></td><td>Carpeta para componentes React reutilizables.</td></tr>
            <tr><td><code>assets/</code></td><td>Imágenes, estilos y otros recursos.</td></tr>
            <tr><td><code>node_modules/</code></td><td>Dependencias instaladas automáticamente con npm.</td></tr>
          </tbody>
        </table>
      </div>

      {/* Cosas importantes */}
      <div className="card card-warning">
        <h2 className="subtitle">
          <FaBolt className="icon" /> Cosas importantes al usar Vite
        </h2>
        <ul>
          <li>Iniciar servidor de desarrollo: <code>npm run dev</code></li>
          <li>Construir versión de producción: <code>npm run build</code></li>
          <li>Previsualizar la build: <code>npm run preview</code></li>
          <li>Soporta importación directa de CSS, imágenes y módulos ES.</li>
          <li>Revisa la consola: los errores de HMR son claros y útiles.</li>
          <li>Configura alias de carpetas en <code>vite.config.js</code> si tu proyecto crece.</li>
        </ul>
      </div>

      {/* Tips rápidos */}
      <div className="card card-neutral">
        <h2 className="subtitle">
          <FaLightbulb className="icon" /> Tips rápidos
        </h2>
        <ul>
          <li>Usa React Fast Refresh para mantener el estado al actualizar código.</li>
          <li>Organiza tu código en componentes y carpetas para mantenerlo limpio.</li>
          <li>Vite es más rápido que CRA, aprovecha HMR para iterar más rápido.</li>
        </ul>
      </div>
    </div>
  );
}
