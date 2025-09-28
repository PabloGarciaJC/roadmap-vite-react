// components/UseContext.js
import React, { createContext, useContext, useState } from "react";

// 🔹 Contexto para el tema
const TemaContext = createContext();

// 🔹 Componente hijo que consume el contexto
function TemaBoton() {
  const { tema, toggleTema } = useContext(TemaContext);

  return (
    <button
      onClick={toggleTema}
      style={{
        padding: "0.5rem 1rem",
        borderRadius: "4px",
        border: "none",
        background: tema === "claro" ? "#f0f0f0" : "#333",
        color: tema === "claro" ? "#000" : "#fff",
        cursor: "pointer",
        marginTop: "0.5rem",
      }}
    >
      Cambiar tema (actual: {tema})
    </button>
  );
}

// 🔹 Componente principal
export default function UseContext() {
  const [tema, setTema] = useState("claro");
  const toggleTema = () => setTema(tema === "claro" ? "oscuro" : "claro");

  return (
    <div style={{ padding: "1.5rem", maxWidth: "600px", margin: "0 auto" }}>
      <h1 style={{ fontSize: "1.75rem", fontWeight: "bold", marginBottom: "1rem" }}>
        🌍 useContext - Gestión de estado global
      </h1>

      <div style={{ border: "1px solid #ffd600", background: "#fff8e1", padding: "1rem", borderRadius: "8px", marginBottom: "1rem" }}>
        <strong>📌 Qué hace useContext:</strong> Permite compartir información entre componentes sin necesidad de pasar props manualmente por cada nivel.
      </div>

      <div style={{ border: "1px solid #ccc", padding: "1rem", borderRadius: "8px", marginBottom: "1rem" }}>
        <p>El tema actual es: <strong>{tema}</strong></p>
        <TemaContext.Provider value={{ tema, toggleTema }}>
          <TemaBoton />
        </TemaContext.Provider>
      </div>

      <div style={{ border: "1px solid #ccc", padding: "1rem", borderRadius: "8px" }}>
        <strong>Ejemplo de código:</strong>
        <pre style={{ background: "#f5f5f5", padding: "0.5rem", borderRadius: "4px", overflowX: "auto" }}>
          <code>{`const TemaContext = createContext();

function TemaBoton() {
  const { tema, toggleTema } = useContext(TemaContext);
  return <button onClick={toggleTema}>Cambiar tema (actual: {tema})</button>;
}

export default function App() {
  const [tema, setTema] = useState("claro");
  const toggleTema = () => setTema(tema === "claro" ? "oscuro" : "claro");

  return (
    <TemaContext.Provider value={{ tema, toggleTema }}>
      <TemaBoton />
    </TemaContext.Provider>
  );
}`}</code>
        </pre>
      </div>
    </div>
  );
}
