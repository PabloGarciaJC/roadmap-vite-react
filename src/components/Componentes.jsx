// components/Componentes.js
import React from "react";

// 🔹 Componente hijo funcional 1
function CardA() {
  return (
    <div style={{ border: "1px solid #ccc", padding: "1rem", marginBottom: "1rem", borderRadius: "8px" }}>
      <h3>Componente Funcional A</h3>
      <p>Este es un ejemplo de componente funcional estático.</p>
      <p>
        <strong>Sintaxis:</strong>{" "}
        <code>function MiComponente() &#123; return &lt;div&gt;Contenido&lt;/div&gt; &#125;</code>
      </p>
    </div>
  );
}

// 🔹 Componente hijo funcional 2 con arrow function
const CardB = () => (
  <div style={{ border: "1px solid #ccc", padding: "1rem", marginBottom: "1rem", borderRadius: "8px" }}>
    <h3>Componente Funcional B</h3>
    <p>Otro componente funcional independiente.</p>
    <p>
      <strong>Sintaxis con arrow function:</strong>{" "}
      <code>const MiComponente = () =&gt; &lt;div&gt;Contenido&lt;/div&gt;</code>
    </p>
  </div>
);

// 🔹 Componente hijo de clase
class CardC extends React.Component {
  render() {
    return (
      <div style={{ border: "1px solid #ccc", padding: "1rem", marginBottom: "1rem", borderRadius: "8px" }}>
        <h3>Componente de Clase C</h3>
        <p>Este componente usa la sintaxis clásica de React.</p>
        <p>
          <strong>Sintaxis de clase:</strong>{" "}
          <code>
            class MiComponente extends React.Component &#123; render() &#123; return &lt;div&gt;Contenido&lt;/div&gt; &#125; &#125;
          </code>
        </p>
      </div>
    );
  }
}

// 🔹 Componente principal
export default function Componentes() {
  return (
    <div style={{ padding: "1.5rem", maxWidth: "600px", margin: "0 auto" }}>
      <h1 style={{ fontSize: "1.75rem", fontWeight: "bold", marginBottom: "1rem" }}>
        Componentes Nativos en React
      </h1>

      {/* Descripción */}
      <div style={{ marginBottom: "1rem", padding: "0.75rem", backgroundColor: "#d1fae5", borderLeft: "4px solid #10b981", borderRadius: "4px" }}>
        <strong>¿Qué son los componentes?</strong>
        <p>
          Los componentes en React son bloques reutilizables de interfaz que pueden ser funcionales o de clase. Permiten organizar la UI, encapsular lógica y reutilizar código. No siempre necesitan props ni children.
        </p>
      </div>

      <p style={{ marginBottom: "1rem" }}>
        Cada componente incluye un párrafo con su sintaxis correspondiente.
      </p>

      {/* Renderizado de componentes hijos */}
      <CardA />
      <CardB />
      <CardC />
    </div>
  );
}
