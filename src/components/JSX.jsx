// components/JSX.jsx
import React from "react";
import {
  FaCode,
  FaFont,
  FaHashtag,
  FaToggleOn,
  FaQuestionCircle,
  FaUser,
  FaCodeBranch,
  FaAppleAlt,
  FaStream,
  FaCalculator,
  FaClone,
  FaHtml5,
} from "react-icons/fa";

export default function JSX() {
  const mostrar = true;
  const nombre = "React";
  const edad = 5;
  const frutas = ["Manzana", "Banana", "Cereza"];
  const saludo = () => "¡Hola desde una función!";
  const usuario = { nombre: "Ana", edad: 25 };
  const nulo = null;
  const indefinido = undefined;
  const elementosJSX = [
    <span key="1">Elemento 1</span>,
    <span key="2">Elemento 2</span>,
  ];

  const Fruta = ({ nombre }) => (
    <li className="flex items-center gap-2">
      <FaAppleAlt className="icon" /> {nombre}
    </li>
  );

  return (
    <div className="container">
      <h1 className="title flex items-center gap-2">
        <FaCode className="icon" /> JSX - Tipos de datos y ejemplos
      </h1>

      {/* Introducción */}
      <div className="card card-warning">
        <strong className="flex items-center gap-2">
          <FaQuestionCircle className="icon" /> ¿Qué es JSX?
        </strong>
        <p>
          JSX permite escribir código similar a HTML dentro de React, combinando
          lógica y presentación. Cada sección incluye un ejemplo de código.
        </p>
      </div>

      {/* String */}
      <div className="card card-warning">
        <h3 className="subtitle flex items-center gap-2">
          <FaFont className="icon" /> String
        </h3>
        Mostrar texto directamente: <em>{nombre}</em>
        <pre className="code-block">
          <code>{`const nombre = "React";\n<p>{nombre}</p>`}</code>
        </pre>
      </div>

      {/* Número */}
      <div className="card card-warning">
        <h3 className="subtitle flex items-center gap-2">
          <FaHashtag className="icon" /> Número
        </h3>
        Mostrar un número: {edad}
        <pre className="code-block">
          <code>{`const edad = 5;\n<p>{edad}</p>`}</code>
        </pre>
      </div>

      {/* Booleano */}
      <div className="card card-warning">
        <h3 className="subtitle flex items-center gap-2">
          <FaToggleOn className="icon" /> Booleano
        </h3>
        {mostrar ? <FaToggleOn className="text-green-600" /> : <FaToggleOn className="text-red-600" />}
        <pre className="code-block">
          <code>{`const mostrar = true;\n<p>{mostrar ? "true" : "false"}</p>`}</code>
        </pre>
      </div>

      {/* Null y Undefined */}
      <div className="card card-warning">
        <h3 className="subtitle flex items-center gap-2">
          <FaQuestionCircle className="icon" /> Null y Undefined
        </h3>
        {/* No renderizamos icono */}
        <pre className="code-block">
          <code>{`const nulo = null;\nconst indefinido = undefined;\n<p>{nulo} {indefinido}</p>`}</code>
        </pre>
      </div>

      {/* Objeto */}
      <div className="card card-warning">
        <h3 className="subtitle flex items-center gap-2">
          <FaUser className="icon" /> Objeto
        </h3>
        {usuario.nombre} tiene {usuario.edad} años
        <pre className="code-block">
          <code>{`const usuario = { nombre: "Ana", edad: 25 };\n<p>{usuario.nombre} tiene {usuario.edad} años</p>`}</code>
        </pre>
      </div>

      {/* Función */}
      <div className="card card-warning">
        <h3 className="subtitle flex items-center gap-2">
          <FaCodeBranch className="icon" /> Función
        </h3>
        {saludo()}
        <pre className="code-block">
          <code>{`const saludo = () => "¡Hola!";\n<p>{saludo()}</p>`}</code>
        </pre>
      </div>

      {/* Array de strings */}
      <div className="card card-warning">
        <h3 className="subtitle flex items-center gap-2">
          <FaAppleAlt className="icon" /> Array de Strings
        </h3>
        <ul>
          {frutas.map((fruta, index) => (
            <Fruta key={index} nombre={fruta} />
          ))}
        </ul>
        <pre className="code-block">
          <code>{`const frutas = ["Manzana", "Banana"];\n<ul>{frutas.map(f => <li>{f}</li>)}</ul>`}</code>
        </pre>
      </div>

      {/* Array de JSX */}
      <div className="card card-warning">
        <h3 className="subtitle flex items-center gap-2">
          <FaStream className="icon" /> Array de JSX
        </h3>
        <div>{elementosJSX}</div>
        <pre className="code-block">
          <code>{`const elementosJSX = [<span>Elemento 1</span>, <span>Elemento 2</span>];\n<div>{elementosJSX}</div>`}</code>
        </pre>
      </div>

      {/* Expresiones */}
      <div className="card card-warning">
        <h3 className="subtitle flex items-center gap-2">
          <FaCalculator className="icon" /> Expresiones
        </h3>
        2 + 2 = {2 + 2}, longitud de frutas = {frutas.length}
        <pre className="code-block">
          <code>{`<p>{2 + 2}</p>\n<p>{frutas.length}</p>`}</code>
        </pre>
      </div>

      {/* Fragmentos */}
      <div className="card card-warning">
        <h3 className="subtitle flex items-center gap-2">
          <FaClone className="icon" /> Fragmentos
        </h3>
        <>
          <p>Este es un fragmento 1</p>
          <p>Este es un fragmento 2</p>
        </>
        <pre className="code-block">
          <code>{`<>\n  <p>Fragmento 1</p>\n  <p>Fragmento 2</p>\n</>`}</code>
        </pre>
      </div>

      {/* HTML dentro de JSX */}
      <div className="card card-warning">
        <h3 className="subtitle flex items-center gap-2">
          <FaHtml5 className="icon" /> HTML dentro de JSX
        </h3>
        <p>
          Puedes usar <strong>strong</strong>, <em>em</em> o <u>u</u> directamente dentro de JSX.
        </p>
        <pre className="code-block">
          <code>{`<p>Puedes usar <strong>strong</strong>, <em>em</em>, <u>u</u></p>`}</code>
        </pre>
      </div>
    </div>
  );
}
