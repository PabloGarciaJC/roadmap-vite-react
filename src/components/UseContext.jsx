// components/UseContext.jsx
import React, { createContext, useContext, useState } from "react";
import { FaGlobe, FaLightbulb, FaCode } from "react-icons/fa";

//  Contexto para el tema
const TemaContext = createContext();

//  Componente hijo que consume el contexto
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

//  Componente principal
export default function UseContext() {
  const [tema, setTema] = useState("claro");
  const toggleTema = () => setTema(tema === "claro" ? "oscuro" : "claro");

  return (
    <div className="container">
      <h1 className="title flex items-center gap-2">
        <FaGlobe className="icon" /> useContext - Gestión de estado global
      </h1>

      {/* Descripción */}
      <div className="card card-warning flex items-center gap-2">
        <FaLightbulb className="icon" /> 
        <strong>Qué hace useContext:</strong> Permite compartir información entre componentes sin necesidad de pasar props manualmente por cada nivel.
      </div>

      {/* Componente y toggle */}
      <div className="card card-warning">
        <p>El tema actual es: <strong>{tema}</strong></p>
        <TemaContext.Provider value={{ tema, toggleTema }}>
          <TemaBoton />
        </TemaContext.Provider>
      </div>

      {/* Ejemplo de código */}
      <div className="card card-warning">
        <div className="flex items-center gap-2">
          <FaCode className="icon" />
          <strong>Ejemplo de código:</strong>
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
