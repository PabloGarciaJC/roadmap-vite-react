// components/Introduccion.js
import React from "react";

export default function Introduccion() {
  return (
    <div>
      <h1>🚀 Introducción a React con Vite</h1>

      <section>
        <h2>📌 ¿Qué es Vite?</h2>
        <p>
          Vite es un "build tool" moderno para proyectos de front-end. Permite:
        </p>
        <ul>
          <li>Arranque ultrarrápido del proyecto (dev server).</li>
          <li>Actualización en caliente (Hot Module Replacement, HMR) para ver cambios al instante.</li>
          <li>Compilación optimizada para producción.</li>
        </ul>
      </section>

      <section>
        <h2>🗂 Estructura de un proyecto Vite + React</h2>
        <p>Al crear un proyecto con <code>npm create vite@latest my-app</code> y seleccionar React, tendrás:</p>
        <ul>
          <li><code>index.html</code>: archivo principal que carga tu app React.</li>
          <li><code>package.json</code>: contiene dependencias y scripts (dev, build, preview).</li>
          <li><code>vite.config.js</code>: configuración de Vite, puedes personalizar paths, plugins, etc.</li>
          <li><code>src/</code>: carpeta principal donde estará tu código React.</li>
          <ul>
            <li><code>main.jsx</code>: punto de entrada de la aplicación donde se monta React.</li>
            <li><code>App.jsx</code>: componente raíz que contiene tu app.</li>
            <li><code>components/</code>: carpeta para tus componentes React.</li>
            <li><code>assets/</code>: carpeta para imágenes, estilos u otros recursos.</li>
          </ul>
          <li><code>node_modules/</code>: dependencias instaladas.</li>
        </ul>
      </section>

      <section>
        <h2>⚡ Cosas importantes para usar Vite</h2>
        <ul>
          <li>Para iniciar el servidor de desarrollo: <code>npm run dev</code></li>
          <li>Para construir la versión de producción: <code>npm run build</code></li>
          <li>Para previsualizar la build: <code>npm run preview</code></li>
          <li>Vite soporta importación de CSS, imágenes y módulos ES directamente.</li>
          <li>Siempre revisa la consola, los errores de HMR son muy claros y útiles.</li>
          <li>Configura alias de carpetas en <code>vite.config.js</code> si tu proyecto crece.</li>
        </ul>
      </section>

      <section>
        <h2>💡 Tips rápidos</h2>
        <ul>
          <li>Usa React Fast Refresh: los cambios se ven al instante sin perder estado.</li>
          <li>Organiza tu código en componentes y carpetas para mantenerlo limpio.</li>
          <li>Vite es muy rápido comparado con CRA (Create React App), aprovecha el HMR para iterar rápido.</li>
        </ul>
      </section>
    </div>
  );
}
