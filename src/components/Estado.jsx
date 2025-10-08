// components/TiposEstado.jsx
import React, { useState } from "react";
import { FaHashtag, FaCheckCircle, FaTimesCircle, FaCalendarAlt, FaPlusCircle, FaAppleAlt, FaRegFile } from "react-icons/fa";

export default function TiposEstado() {
  // Estados
  const [contador, setContador] = useState(0);
  const [nombre, setNombre] = useState("React");
  const [activo, setActivo] = useState(true);
  const [frutas, setFrutas] = useState(["Manzana", "Banana"]);
  const [usuario, setUsuario] = useState({ nombre: "Ana", edad: 25 });
  const [valor, setValor] = useState(null);
  const [fecha, setFecha] = useState(new Date());
  const [mapa, setMapa] = useState(new Map([["a", 1], ["b", 2]]));
  const [conjunto, setConjunto] = useState(new Set([1, 2, 3]));
  const [elemento, setElemento] = useState(<span className="text-red-500">Hola JSX</span>);

  return (
    <div className="container">
      <h1 className="title flex items-center gap-2">
        <FaRegFile className="icon" /> Tipos de Estado en React
      </h1>

      {/* Descripción */}
      <div className="card card-warning">
        <strong>¿Qué es useState?</strong>
        <p>
          useState es un hook que permite almacenar y actualizar valores dentro de un componente funcional. 
          Los estados pueden ser de diferentes tipos: números, strings, booleanos, arrays, objetos, fechas, mapas, sets o incluso JSX.
        </p>
      </div>

      {/* Número */}
      <div className="card card-warning">
        <FaHashtag className="icon" /> <strong>Número:</strong> {contador}
        <button className="btn" onClick={() => setContador(contador + 1)}>
          <FaPlusCircle className="icon" /> +1
        </button>
      </div>

      {/* String */}
      <div className="card card-warning">
        <strong>String:</strong>
        <input
          className="input"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
        />
      </div>

      {/* Booleano */}
      <div className="card card-warning">
        <strong>Booleano:</strong>
        {activo ? (
          <span className="flex items-center gap-1 text-green-600">
            <FaCheckCircle className="icon" /> Activo
          </span>
        ) : (
          <span className="flex items-center gap-1 text-red-600">
            <FaTimesCircle className="icon" /> Inactivo
          </span>
        )}
        <button className="btn" onClick={() => setActivo(!activo)}>Toggle</button>
      </div>

      {/* Array */}
      <div className="card card-warning">
        <strong>Array:</strong>
        <ul className="list-disc pl-5">
          {frutas.map((f, i) => <li key={i}><FaAppleAlt className="icon" /> {f}</li>)}
        </ul>
        <button className="btn" onClick={() => setFrutas([...frutas, "Cereza"])}>Agregar Cereza</button>
      </div>

      {/* Objeto */}
      <div className="card card-warning">
        <strong>Objeto:</strong> {usuario.nombre}, {usuario.edad} años
        <button className="btn" onClick={() => setUsuario({ ...usuario, edad: usuario.edad + 1 })}>Cumplir años</button>
      </div>

      {/* Null / Undefined */}
      <div className="card card-warning">
        <strong>Null / Undefined:</strong> {valor ? valor : "Sin valor"}
        <button className="btn" onClick={() => setValor("¡Ahora hay valor!")}>Agregar valor</button>
      </div>

      {/* Date */}
      <div className="card card-warning">
        <FaCalendarAlt className="icon" /> <strong>Fecha:</strong> {fecha.toLocaleTimeString()}
        <button className="btn" onClick={() => setFecha(new Date())}>Actualizar hora</button>
      </div>

      {/* Map */}
      <div className="card card-warning">
        <strong>Map:</strong> {JSON.stringify(Array.from(mapa.entries()))}
        <button className="btn" onClick={() => setMapa(new Map(mapa).set("c", 3))}>Agregar c=3</button>
      </div>

      {/* Set */}
      <div className="card card-warning">
        <strong>Set:</strong> {JSON.stringify(Array.from(conjunto))}
        <button className="btn" onClick={() => setConjunto(new Set(conjunto).add(4))}>Agregar 4</button>
      </div>

      {/* JSX */}
      <div className="card card-warning">
        <strong>JSX / Elemento React:</strong> {elemento}
        <button className="btn" onClick={() => setElemento(<span className="text-green-500">Nuevo JSX</span>)}>Cambiar JSX</button>
      </div>
    </div>
  );
}
