// components/JSX.js
import React from "react";

export default function JSX() {
  // Tipos de datos básicos
  const mostrar = true; // booleano
  const nombre = "React"; // string
  const edad = 5; // número
  const frutas = ["Manzana", "Banana", "Cereza"]; // array de strings
  const saludo = () => "¡Hola desde una función!"; // función
  const usuario = { nombre: "Ana", edad: 25 }; // objeto
  const nulo = null; // null
  const indefinido = undefined; // undefined
  const elementosJSX = [
    <span key="1">🔥 Fuego</span>,
    <span key="2">💧 Agua</span>,
  ]; // array de JSX

  // Componente hijo simple
  const Fruta = ({ nombre }) => <li>🍎 {nombre}</li>;

  return (
    <div style={{ padding: "1.5rem", maxWidth: "700px", margin: "0 auto" }}>
      <h1 style={{ fontSize: "1.75rem", fontWeight: "bold", marginBottom: "1rem" }}>
        🔤 JSX - Tipos de datos y ejemplos de código
      </h1>

      {/* Introducción */}
      <div style={{ border: "1px solid #ffd600", background: "#fff8e1", padding: "1rem", borderRadius: "8px", marginBottom: "1rem" }}>
        <strong>📌 Qué es JSX:</strong> JSX permite escribir código similar a HTML dentro de React, combinando lógica y presentación.
        Cada sección incluye un ejemplo de código para mostrar cómo se implementa.
      </div>

      {/* String */}
      <div style={{ border: "1px solid #ccc", padding: "1rem", marginBottom: "1rem", borderRadius: "8px" }}>
        <strong>1️⃣ String:</strong> Mostrar texto directamente: <em>{nombre}</em>
        <pre style={{ background: "#f5f5f5", padding: "0.5rem", borderRadius: "4px" }}>
          <code>{`const nombre = "React";\n<p>{nombre}</p>`}</code>
        </pre>
      </div>

      {/* Número */}
      <div style={{ border: "1px solid #ccc", padding: "1rem", marginBottom: "1rem", borderRadius: "8px" }}>
        <strong>2️⃣ Número:</strong> Mostrar un número: {edad}
        <pre style={{ background: "#f5f5f5", padding: "0.5rem", borderRadius: "4px" }}>
          <code>{`const edad = 5;\n<p>{edad}</p>`}</code>
        </pre>
      </div>

      {/* Booleano */}
      <div style={{ border: "1px solid #ccc", padding: "1rem", marginBottom: "1rem", borderRadius: "8px" }}>
        <strong>3️⃣ Booleano:</strong> Condicional simple: {mostrar ? "✅ Se muestra" : "❌ No se muestra"}
        <pre style={{ background: "#f5f5f5", padding: "0.5rem", borderRadius: "4px" }}>
          <code>{`const mostrar = true;\n<p>{mostrar ? "✅ Se muestra" : "❌ No se muestra"}</p>`}</code>
        </pre>
      </div>

      {/* Null y Undefined */}
      <div style={{ border: "1px solid #ccc", padding: "1rem", marginBottom: "1rem", borderRadius: "8px" }}>
        <strong>4️⃣ Null y Undefined:</strong> No se renderizan: {nulo} {indefinido}
        <pre style={{ background: "#f5f5f5", padding: "0.5rem", borderRadius: "4px" }}>
          <code>{`const nulo = null;\nconst indefinido = undefined;\n<p>{nulo} {indefinido}</p>`}</code>
        </pre>
      </div>

      {/* Objeto */}
      <div style={{ border: "1px solid #ccc", padding: "1rem", marginBottom: "1rem", borderRadius: "8px" }}>
        <strong>5️⃣ Objeto:</strong> Mostrar propiedades: {usuario.nombre} tiene {usuario.edad} años
        <pre style={{ background: "#f5f5f5", padding: "0.5rem", borderRadius: "4px" }}>
          <code>{`const usuario = { nombre: "Ana", edad: 25 };\n<p>{usuario.nombre} tiene {usuario.edad} años</p>`}</code>
        </pre>
      </div>

      {/* Función */}
      <div style={{ border: "1px solid #ccc", padding: "1rem", marginBottom: "1rem", borderRadius: "8px" }}>
        <strong>6️⃣ Función:</strong> Llamar función dentro de JSX: {saludo()}
        <pre style={{ background: "#f5f5f5", padding: "0.5rem", borderRadius: "4px" }}>
          <code>{`const saludo = () => "¡Hola!";\n<p>{saludo()}</p>`}</code>
        </pre>
      </div>

      {/* Array de strings */}
      <div style={{ border: "1px solid #ccc", padding: "1rem", marginBottom: "1rem", borderRadius: "8px" }}>
        <strong>7️⃣ Array de strings:</strong> Lista simple usando map:
        <ul>
          {frutas.map((fruta, index) => (
            <Fruta key={index} nombre={fruta} />
          ))}
        </ul>
        <pre style={{ background: "#f5f5f5", padding: "0.5rem", borderRadius: "4px" }}>
          <code>{`const frutas = ["Manzana", "Banana"];\n<ul>{frutas.map(f => <li>{f}</li>)}</ul>`}</code>
        </pre>
      </div>

      {/* Array de JSX */}
      <div style={{ border: "1px solid #ccc", padding: "1rem", marginBottom: "1rem", borderRadius: "8px" }}>
        <strong>8️⃣ Array de JSX:</strong>
        <div>{elementosJSX}</div>
        <pre style={{ background: "#f5f5f5", padding: "0.5rem", borderRadius: "4px" }}>
          <code>{`const elementosJSX = [<span>🔥 Fuego</span>, <span>💧 Agua</span>];\n<div>{elementosJSX}</div>`}</code>
        </pre>
      </div>

      {/* Expresiones */}
      <div style={{ border: "1px solid #ccc", padding: "1rem", marginBottom: "1rem", borderRadius: "8px" }}>
        <strong>9️⃣ Expresiones:</strong> Operaciones y propiedades: 2 + 2 = {2 + 2}, longitud de frutas = {frutas.length}
        <pre style={{ background: "#f5f5f5", padding: "0.5rem", borderRadius: "4px" }}>
          <code>{`<p>{2 + 2}</p>\n<p>{frutas.length}</p>`}</code>
        </pre>
      </div>

      {/* Fragmentos */}
      <div style={{ border: "1px solid #ccc", padding: "1rem", marginBottom: "1rem", borderRadius: "8px" }}>
        <strong>🔟 Fragmentos:</strong>
        <>
          <p>Este es un fragmento 1</p>
          <p>Este es un fragmento 2</p>
        </>
        <pre style={{ background: "#f5f5f5", padding: "0.5rem", borderRadius: "4px" }}>
          <code>{`<>\n  <p>Fragmento 1</p>\n  <p>Fragmento 2</p>\n</>`}</code>
        </pre>
      </div>

      {/* HTML dentro de JSX */}
      <div style={{ border: "1px solid #ccc", padding: "1rem", marginBottom: "1rem", borderRadius: "8px" }}>
        <strong>1️⃣1️⃣ HTML dentro de JSX:</strong>
        <p>Puedes usar <strong>strong</strong>, <em>em</em> o <u>u</u> directamente dentro de JSX.</p>
        <pre style={{ background: "#f5f5f5", padding: "0.5rem", borderRadius: "4px" }}>
          <code>{`<p>Puedes usar <strong>strong</strong>, <em>em</em>, <u>u</u></p>`}</code>
        </pre>
      </div>
    </div>
  );
}
