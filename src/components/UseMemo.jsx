// components/UseMemo.js
import React, { useState, useMemo } from "react";

export default function UseMemo() {
  const [numero, setNumero] = useState(0);

  const factorial = useMemo(() => {
    const calcularFactorial = n => (n <= 1 ? 1 : n * calcularFactorial(n - 1));
    return calcularFactorial(numero);
  }, [numero]);

  return (
    <div>
      <h1>🧪 useMemo</h1>
      <p>Factorial de {numero}: {factorial}</p>
      <input type="number" value={numero} onChange={e => setNumero(Number(e.target.value))} />
    </div>
  );
}
