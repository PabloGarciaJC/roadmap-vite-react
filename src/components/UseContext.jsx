// components/UseContextIntro.jsx
import React, { createContext, useContext, useState } from "react";
import { FaGlobe, FaLightbulb, FaCode } from "react-icons/fa";

// Contexto para el tema
const TemaContext = createContext();

// Componente hijo que consume el contexto
function TemaBoton() {
  const { tema, toggleTema } = useContext(TemaContext);

  return (
    <button
      className={`btn ${tema === "claro" ? "btn-light" : "btn-dark"}`}
      onClick={toggleTema}
    >
      Cambiar tema (actual: {tema})
    </button>
  );
}

// Componente principal
export default function UseContextIntro() {
  const [tema, setTema] = useState("claro");
  const toggleTema = () => setTema(tema === "claro" ? "oscuro" : "claro");

  return (
    <div className="container">
      <h1 className="title flex items-center gap-2">
        <FaGlobe className="icon" /> Introducción a useContext
      </h1>

      {/* Definición */}
      <div className="card card-info flex items-center gap-2">
        <FaLightbulb className="icon" /> 
        <strong>Qué hace useContext:</strong> Permite compartir información entre componentes sin necesidad de pasar props manualmente por cada nivel.
      </div>

      {/* Sintaxis */}
      <div className="card card-info">
        <h3 className="subtitle flex items-center gap-2">
          <FaCode className="icon" /> Sintaxis de useContext
        </h3>
        <p>
          Primero se crea un contexto con <code>createContext()</code>, luego se envuelve el componente con un <code>Provider</code> y finalmente los componentes hijos pueden consumir los datos con <code>useContext(NombreDelContexto)</code>.
        </p>
        <pre className="code-block">
          <code>{`const MiContexto = createContext();

// En el padre:
<MiContexto.Provider value={valor}>
  <Hijo />
</MiContexto.Provider>

// En el hijo:
const valor = useContext(MiContexto);`}</code>
        </pre>
      </div>

      {/* Ejemplo práctico */}
      <div className="card card-info">
        <p>El tema actual es: <strong>{tema}</strong></p>
        <TemaContext.Provider value={{ tema, toggleTema }}>
          <TemaBoton />
        </TemaContext.Provider>
      </div>

      {/* Ejemplo de código */}
      <div className="card card-info">
        <div className="flex items-center gap-2">
          <FaCode className="icon" />
          <strong>Ejemplo completo de código:</strong>
        </div>
        <pre className="code-block">
          <code>
            {`const TemaContext = createContext();

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
}`}
          </code>
        </pre>
      </div>
    </div>
  );
}
