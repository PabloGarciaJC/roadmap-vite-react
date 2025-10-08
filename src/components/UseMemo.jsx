// components/UseMemo.jsx
import React, { useState, useMemo } from "react";
import { FaFlask, FaCode, FaInfoCircle } from "react-icons/fa";

export default function UseMemo() {
  const [numero, setNumero] = useState(0);

  // useMemo memoriza el resultado del cálculo
  const factorial = useMemo(() => {
    const calcularFactorial = n => (n <= 1 ? 1 : n * calcularFactorial(n - 1));
    return calcularFactorial(numero);
  }, [numero]);

  return (
    <div className="container">
      <h1 className="title flex items-center gap-2">
        <FaFlask className="icon" /> useMemo - Memorizar cálculos costosos
      </h1>

      <div className="card card-warning flex items-center gap-2">
        <FaInfoCircle className="icon" />
        <strong>Qué hace useMemo:</strong> Memoriza el resultado de una función costosa para que no se vuelva a calcular en cada render si las dependencias no cambian. Ideal para optimizar rendimiento.
      </div>

      <div className="card card-warning">
        <p>Factorial de <strong>{numero}</strong>: {factorial}</p>
        <input
          className="input"
          type="number"
          value={numero}
          onChange={e => setNumero(Number(e.target.value))}
        />
      </div>

      <div className="card card-warning">
        <div className="flex items-center gap-2">
          <FaCode className="icon" />
          <strong>Ejemplo de código:</strong>
        </div>
        <pre className="code-block">
          <code>{`const [numero, setNumero] = useState(0);
            const factorial = useMemo(() => {
              const calcularFactorial = n => (n <= 1 ? 1 : n * calcularFactorial(n - 1));
              return calcularFactorial(numero);
            }, [numero]);
            <input type="number" value={numero} onChange={e => setNumero(Number(e.target.value))} />`}
          </code>
        </pre>
      </div>
    </div>
  );
}
