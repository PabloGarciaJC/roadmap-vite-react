// components/Estado.js
import React, { useState } from "react";

export default function Estado() {
  const [contador, setContador] = useState(0);

  return (
    <div>
      <h1>⚡ useState</h1>
      <p>Contador: {contador}</p>
      <button onClick={() => setContador(contador + 1)}>Incrementar</button>
      <button onClick={() => setContador(contador - 1)}>Decrementar</button>
    </div>
  );
}
