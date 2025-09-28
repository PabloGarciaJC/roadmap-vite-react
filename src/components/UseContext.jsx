// components/UseContext.js
import React, { createContext, useContext, useState } from "react";

const TemaContext = createContext();

function TemaBoton() {
  const { tema, toggleTema } = useContext(TemaContext);
  return <button onClick={toggleTema}>Cambiar tema (actual: {tema})</button>;
}

export default function UseContext() {
  const [tema, setTema] = useState("claro");
  const toggleTema = () => setTema(tema === "claro" ? "oscuro" : "claro");

  return (
    <TemaContext.Provider value={{ tema, toggleTema }}>
      <h1>🌍 useContext</h1>
      <p>El tema actual es: {tema}</p>
      <TemaBoton />
    </TemaContext.Provider>
  );
}
