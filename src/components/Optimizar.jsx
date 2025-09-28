// components/Optimizar.js
import React, { useState, useMemo } from "react";

function Numero({ valor }) {
  console.log("Renderizado de Numero:", valor);
  return <p>{valor}</p>;
}

export default function Optimizar() {
  const [numero, setNumero] = useState(0);

  const numeros = useMemo(() => {
    console.log("Calculando array de numeros...");
    return Array.from({ length: numero }, (_, i) => i + 1);
  }, [numero]);

  return (
    <div>
      <h1>⚙️ Optimización avanzada</h1>
      <input type="number" value={numero} onChange={e => setNumero(Number(e.target.value))} />
      {numeros.map(n => <Numero key={n} valor={n} />)}
    </div>
  );
}
