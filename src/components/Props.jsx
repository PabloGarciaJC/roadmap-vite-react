// components/Props.js
import React from "react";

function Saludo({ nombre, edad }) {
  return <p>Hola {nombre}, tienes {edad} años.</p>;
}

export default function Props() {
  return (
    <div>
      <h1>📥 Props</h1>
      <Saludo nombre="Ana" edad={25} />
      <Saludo nombre="Luis" edad={30} />
    </div>
  );
}
