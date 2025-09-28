// components/TiposEstado.js
import React, { useState } from "react";

export default function TiposEstado() {
  // 1️⃣ Número
  const [contador, setContador] = useState(0);

  // 2️⃣ String
  const [nombre, setNombre] = useState("React");

  // 3️⃣ Booleano
  const [activo, setActivo] = useState(true);

  // 4️⃣ Array
  const [frutas, setFrutas] = useState(["Manzana", "Banana"]);

  // 5️⃣ Objeto
  const [usuario, setUsuario] = useState({ nombre: "Ana", edad: 25 });

  // 6️⃣ Null / undefined
  const [valor, setValor] = useState(null);

  // 7️⃣ Date
  const [fecha, setFecha] = useState(new Date());

  // 8️⃣ Map (colección clave-valor)
  const [mapa, setMapa] = useState(new Map([["a", 1], ["b", 2]]));

  // 9️⃣ Set (colección de valores únicos)
  const [conjunto, setConjunto] = useState(new Set([1, 2, 3]));

  // 🔟 JSX / elemento React
  const [elemento, setElemento] = useState(<span style={{ color: "red" }}>Hola JSX</span>);

  return (
    <div style={{ padding: "1.5rem", maxWidth: "700px", margin: "0 auto" }}>
      <h1 style={{ fontSize: "1.75rem", fontWeight: "bold", marginBottom: "1rem" }}>
        Tipos de Estado en React
      </h1>

      {/* Descripción */}
      <div style={{ marginBottom: "1rem", padding: "0.75rem", backgroundColor: "#d1fae5", borderLeft: "4px solid #10b981", borderRadius: "4px" }}>
        <strong>¿Qué es useState?</strong>
        <p>useState es un hook que permite almacenar y actualizar valores dentro de un componente funcional. Los estados pueden ser de diferentes tipos: números, strings, booleanos, arrays, objetos, fechas, mapas, sets o incluso JSX.</p>
      </div>

      {/* Número */}
      <div style={{ marginBottom: "1rem" }}>
        <strong>Número:</strong> {contador}{" "}
        <button onClick={() => setContador(contador + 1)}>+1</button>
      </div>

      {/* String */}
      <div style={{ marginBottom: "1rem" }}>
        <strong>String:</strong> {nombre}{" "}
        <input value={nombre} onChange={(e) => setNombre(e.target.value)} />
      </div>

      {/* Booleano */}
      <div style={{ marginBottom: "1rem" }}>
        <strong>Booleano:</strong> {activo ? "✅ Activo" : "❌ Inactivo"}{" "}
        <button onClick={() => setActivo(!activo)}>Toggle</button>
      </div>

      {/* Array */}
      <div style={{ marginBottom: "1rem" }}>
        <strong>Array:</strong>
        <ul>
          {frutas.map((f, i) => <li key={i}>{f}</li>)}
        </ul>
        <button onClick={() => setFrutas([...frutas, "Cereza"])}>Agregar Cereza</button>
      </div>

      {/* Objeto */}
      <div style={{ marginBottom: "1rem" }}>
        <strong>Objeto:</strong> {usuario.nombre}, {usuario.edad} años{" "}
        <button onClick={() => setUsuario({ ...usuario, edad: usuario.edad + 1 })}>Cumplir años</button>
      </div>

      {/* Null */}
      <div style={{ marginBottom: "1rem" }}>
        <strong>Null / Undefined:</strong> {valor ? valor : "Sin valor"}{" "}
        <button onClick={() => setValor("¡Ahora hay valor!")}>Agregar valor</button>
      </div>

      {/* Date */}
      <div style={{ marginBottom: "1rem" }}>
        <strong>Fecha:</strong> {fecha.toLocaleTimeString()}{" "}
        <button onClick={() => setFecha(new Date())}>Actualizar hora</button>
      </div>

      {/* Map */}
      <div style={{ marginBottom: "1rem" }}>
        <strong>Map:</strong> {JSON.stringify(Array.from(mapa.entries()))}{" "}
        <button onClick={() => setMapa(new Map(mapa).set("c", 3))}>Agregar c=3</button>
      </div>

      {/* Set */}
      <div style={{ marginBottom: "1rem" }}>
        <strong>Set:</strong> {JSON.stringify(Array.from(conjunto))}{" "}
        <button onClick={() => setConjunto(new Set(conjunto).add(4))}>Agregar 4</button>
      </div>

      {/* JSX */}
      <div style={{ marginBottom: "1rem" }}>
        <strong>JSX / Elemento React:</strong> {elemento}{" "}
        <button onClick={() => setElemento(<span style={{ color: "green" }}>Nuevo JSX</span>)}>Cambiar JSX</button>
      </div>
    </div>
  );
}
