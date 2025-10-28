// components/UseCallback.jsx
import React, { useState, useCallback } from "react";
import { FaBrain, FaLightbulb, FaCode } from "react-icons/fa";

export default function UseCallback() {
  const [contador, setContador] = useState(0);

  // useCallback memoriza la función para no recrearla en cada render
  const incrementar = useCallback(() => {
    setContador(c => c + 1);
  }, []);

  return (
    <div className="container">
      <h1 className="title flex items-center gap-2">
        <FaBrain className="icon" /> useCallback - Memorizar funciones
      </h1>

      {/* Descripción */}
      <div className="card card-info flex items-center gap-2">
        <FaLightbulb className="icon" />
        <strong>Qué hace useCallback:</strong> Evita que una función se vuelva a crear en cada render, lo cual es útil cuando se pasa como prop a componentes hijos que dependen de la estabilidad de la referencia de la función.
      </div>

      {/* Contador */}
      <div className="card card-info">
        <p>Contador: <strong>{contador}</strong></p>
        <button className="btn btn-primary" onClick={incrementar}>
          Incrementar
        </button>
      </div>

      {/* Ejemplo de código */}
      <div className="card card-info">
        <div className="flex items-center gap-2">
          <FaCode className="icon" />
          <strong>Ejemplo de código:</strong>
        </div>
        <pre className="code-block">
        <code>
          {`const [contador, setContador] = useState(0);

          const incrementar = useCallback(() => {
            setContador(c => c + 1);
          }, []);

          <button onClick={incrementar}>Incrementar</button>`}
        </code>
        </pre>
      </div>
    </div>
  );
}
