// components/UseCallback.js
import React, { useState, useCallback } from "react";

export default function UseCallback() {
  const [contador, setContador] = useState(0);

  const incrementar = useCallback(() => {
    setContador(c => c + 1);
  }, []);

  return (
    <div>
      <h1>🧠 useCallback</h1>
      <p>Contador: {contador}</p>
      <button onClick={incrementar}>Incrementar</button>
    </div>
  );
}
